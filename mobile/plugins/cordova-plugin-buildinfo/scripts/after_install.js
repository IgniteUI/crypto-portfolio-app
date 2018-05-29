'use strict';

var path = require('path'),
    fs = require('fs');

function installWindows(windowsPath) {
    
    const targetPath = path.join(windowsPath, 'CordovaApp.projitems');
    var projitems = fs.readFileSync(targetPath).toString();
    var changed = false;

    // Replace <Content Include="strings\buildinfo.resjson"> to <PRIResource Include="strings\buildinfo.resjson">
    if (projitems.match(/<ItemGroup>[\s]*?<Content +.*?Include="strings\/buildinfo.resjson".+/m)) {
        console.log('ItemGroup match');

        const search = /<ItemGroup>[\s]*?<Content +.*?Include="strings\/buildinfo.resjson"[\s\S]*?<\/ItemGroup>/m;

        const replace
            = "<ItemGroup>\r\n"
            + "        <PRIResource Include=\"strings\/buildinfo.resjson\" />\r\n"
            + "    </ItemGroup>";

        projitems = projitems.replace(search, replace);
        changed = true;
    }

    // Add <Target Name="BuildInfo_Timestamp" BeforeTargets=BeforeBuild">
    if (!projitems.match(/<Target +.*?Name="BuildInfo_Timestamp".*?/)) {
        console.log('Target missmatch');

        const search = /<\/Project>/;

        const replace
            = "    <Target Name=\"BuildInfo_Timestamp\" BeforeTargets=\"BeforeBuild\">\r\n"
            + "        <PropertyGroup>\r\n"
            + "            <BuildInfoTimestamp>$([System.DateTime]::Now.ToString(\"yyyy-MM-dd\THH:mm:sszzz\"))</BuildInfoTimestamp>\r\n"
            + "        </PropertyGroup>\r\n"
            + "        <ItemGroup>\r\n"
            + "            <BuildInfoResJson Include=\"{\" />\r\n"
            + "            <BuildInfoResJson Include=\"&quot;Timestamp&quot;: &quot;$(BuildInfoTimestamp)&quot;\" />\r\n"
            + "            <BuildInfoResJson Include=\"}\" />\r\n"
            + "        </ItemGroup>\r\n"
            + "        <WriteLinesToFile File=\"strings\\buildinfo.resjson\" Lines=\"@(BuildInfoResJson)\" Overwrite=\"true\" Encoding=\"UTF-8\" />\r\n"
            + "    </Target>\r\n"
            + "</Project>";

        projitems = projitems.replace(search, replace);
        changed = true;
    }
    
    // if variable "changed" is true, write to file.
    if (changed) {
        fs.writeFileSync(targetPath, projitems);
    }
}

module.exports = function (context) {
    var projectRoot = context.opts.projectRoot;

    // Exists platform/windows
    var windowsPath = path.join(projectRoot, 'platforms','windows');
    if (fs.existsSync(windowsPath) && context.opts.plugin.platform == 'windows') {
        installWindows(windowsPath);
    }
};
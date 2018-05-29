'use strict';

var path = require('path'),
    fs = require('fs');

function uninstallWindows(windowsPath) {
    const targetPath = path.join(windowsPath, 'CordovaApp.projitems');
    var projitems = fs.readFileSync(targetPath).toString();
    var changed = false;

    // Replace <PRIResource Include="strings\buildinfo.resjson"> to <Content Include="strings\buildinfo.resjson">
    if (projitems.match(/<ItemGroup>[\s]*?<PRIResource +.*?Include="strings\/buildinfo.resjson".+/m)) {
        console.log('ItemGroup match');

        const search = /<ItemGroup>[\s]*?<PRIResource +.*?Include="strings\/buildinfo.resjson"[\s\S]*?<\/ItemGroup>/m;

        var replace
            = "<ItemGroup>\r\n"
            + "        <Content Include=\"strings\/buildinfo.resjson\" />\r\n"
            + "    </ItemGroup>";

        projitems = projitems.replace(search, replace);
        changed = true;
    }

    // Remove <Target Name="BuildInfo_Timestamp" BeforeTargets=BeforeBuild">
    if (projitems.match(/<Target +.*Name="BuildInfo_Timestamp".*/)) {
        console.log('Target match');

        const search = /[\r\n ]*<Target +.*Name="BuildInfo_Timestamp"[\s\S]*?<\/Target>/gm;

        projitems = projitems.replace(search, '');
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
        uninstallWindows(windowsPath);
    }
};
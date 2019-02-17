
const baseUrl: string = 'https://www.cryptocompare.com';

export function sortDataByKey(array, keyToSortBy) {
    function sortByKey(a, b) {
        const x = a[keyToSortBy];
        const y = b[keyToSortBy];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    }

    return array.sort(sortByKey);
};

export function flattenObject(ob) {
    const toReturn = {};

    for (const i in ob) {
        if (!ob.hasOwnProperty(i)) { continue; }

        if ((typeof ob[i]) === 'object') {
            const flatObject = flattenObject(ob[i]);
            for (const x in flatObject) {
                if (!flatObject.hasOwnProperty(x) || i === 'DISPLAY') { continue; }
                toReturn[x] = flatObject[x];
            }
        } else {
            toReturn[i.toUpperCase()] = ob[i];
        }
    }
    return toReturn;
};

export function transformCoinImgUrl(imgUrl: string) {
    return baseUrl + imgUrl;
};


export function fillFromJSON(obj, jsonObj) {
    for (var propName in obj) {
        if (propName === 'name' && jsonObj['FROMSYMBOL'] !== undefined) {
            obj['name'] = jsonObj['FROMSYMBOL'];
            obj['fullName'] = jsonObj['FROMSYMBOL'];
        } else obj[propName] = jsonObj[propName.toUpperCase()];
    }

    return obj;
}

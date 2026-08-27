
const baseUrl = 'https://www.cryptocompare.com';

export type UnknownRecord = Record<string, unknown>;

export function isRecord(value: unknown): value is UnknownRecord {
    return typeof value === 'object' && value !== null && !Array.isArray(value);
}

export function sortDataByKey<T, K extends keyof T>(array: readonly T[], keyToSortBy: K): T[] {
    return [...array].sort((a, b) => compareValues(a[keyToSortBy], b[keyToSortBy]));
}

export function flattenObject(ob: UnknownRecord): UnknownRecord {
    const toReturn: UnknownRecord = {};

    for (const [key, value] of Object.entries(ob)) {
        if (isRecord(value)) {
            const flatObject = flattenObject(value);
            for (const [nestedKey, nestedValue] of Object.entries(flatObject)) {
                if (key !== 'DISPLAY') {
                    toReturn[nestedKey] = nestedValue;
                }
            }
        } else {
            toReturn[key.toUpperCase()] = value;
        }
    }
    return toReturn;
}

export function transformCoinImgUrl(imgUrl: string) {
    return baseUrl + imgUrl;
}

export function getErrorMessage(error: unknown): string {
    return error instanceof Error ? error.message : 'Something went wrong. Please try again.';
}

export function readString(record: UnknownRecord, key: string, fallback = ''): string {
    const value = record[key];
    return typeof value === 'string' ? value : fallback;
}

export function readNumber(record: UnknownRecord, key: string, fallback = 0): number {
    const value = record[key];
    if (typeof value === 'number' && Number.isFinite(value)) {
        return value;
    }

    const parsed = typeof value === 'string' ? Number(value) : Number.NaN;
    return Number.isFinite(parsed) ? parsed : fallback;
}

function compareValues(left: unknown, right: unknown): number {
    if (typeof left === 'number' && typeof right === 'number') {
        return left - right;
    }

    return String(left ?? '').localeCompare(String(right ?? ''));
}

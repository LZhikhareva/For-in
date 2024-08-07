export const obj = { name: 'мечник', health: 10, level: 2, attack: 80, defence: 40, id: 15 };

export function orderByProps(obj, value) {
    const result = [];
    for (const key of value) {
        result.push({ key: key, value: obj[key] });
    }
    const remainingKeys = [];
    for (const key in obj) {
        if (!value.includes(key)) {
            remainingKeys.push(key);
        }
    }
    remainingKeys.sort();
    for (const key of remainingKeys) {
        result.push({ key: key, value: obj[key] });
    }
    return result;
}

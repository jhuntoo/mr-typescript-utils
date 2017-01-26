export function toString(value: any): string {
    if (typeof value === "string") {
        return value;
    } else if (value === undefined || value === null) {
        return value;
    } else {
        return value.toString();
    }
}
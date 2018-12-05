interface TKeyValue<TValue> {
    [k: string]: TValue;
}

interface ObjectConstructor {
    values<TKeyValue>(o: TKeyValue): Array<TKeyValue[keyof TKeyValue]>;
}

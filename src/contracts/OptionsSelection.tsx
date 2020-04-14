
export default interface Dictionary<T, U> {
    key: T;
    value: U;
}

export const optionsCreator = (singular: string, plural: string): Dictionary<string, string>[] => {
    const optionNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    
    return optionNumbers.map(num => {
        const sNum = num.toString();
        return (num === 1) ?
            { key: sNum, value: sNum + " " + singular } : 
            { key: sNum, value: sNum + " " + plural };
    });
}

export class Mathc {

    constructor() { }

    //create a random data 
    makeData(d: number, n: number): { items: number[], sum: number } {

        function generateNumbers(d: number, n: number): number[] {
            const items: number[] = [];
            const maxDigit = Math.pow(10, d) - 1;

            for (let i = 0; i < n; i++) {
                const num = Math.floor(Math.random() * (maxDigit + 1));
                items.push(num);
            }

            return items;
        }

        function calculateSum(numbers: number[]): number {
            return numbers.reduce((sum, num) => sum + num, 0);
        }

        const items = generateNumbers(d, n);
        const sum = calculateSum(items);
        return { items, sum };
    }

    //create multi random data 
    makeMultiData(limit: number, d: number, n: number) {

        function generateNumbers(d: number, n: number): number[] {
            const items: number[] = [];
            const maxDigit = Math.pow(10, d) - 1;

            for (let i = 0; i < n; i++) {
                const num = Math.floor(Math.random() * (maxDigit + 1));
                items.push(num);
            }

            return items;
        }

        function calculateSum(numbers: number[]): number {
            return numbers.reduce((sum, num) => sum + num, 0);
        }

        const results: { items: number[], sum: number }[] = [];

        for (let i = 0; i < limit; i++) {
            const items = generateNumbers(d, n);
            const sum = calculateSum(items);
            results.push({ items, sum });
            if (results.length === limit) {
                return results;
            }
        }

        return results;

    }

}
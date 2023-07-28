export class Thermoc {

    constructor() {
        // this.total = total;
    }

    //create a random data 
    makeData() {

        function generateUniqueRandom(existingNumbers: any[], low: number, high: number) {
            let num;
            do {
                num = Math.floor(Math.random() * (high - low + 1)) + low;
            } while (existingNumbers.includes(num));

            return num;
        }

        // Generate 4 unique random numbers in the range of 0 to 100
        let existingNumbers = [];
        let temps: any = {};

        for (let i = 1; i <= 4; i++) {
            const num = generateUniqueRandom(existingNumbers, 0, 100);
            existingNumbers.push(num);
            temps[`temp${i}`] = num;
        }
        return temps

    }

    //create multi random data 
    makeMultiData(total: number) {

        function make() {
            function generateUniqueRandom(existingNumbers: any[], low: number, high: number) {
                let num;
                do {
                    num = Math.floor(Math.random() * (high - low + 1)) + low;
                } while (existingNumbers.includes(num));

                return num;
            }

            // Generate 4 unique random numbers in the range of 0 to 100
            let existingNumbers = [];
            let temps: any = {};

            for (let i = 1; i <= 4; i++) {
                const num = generateUniqueRandom(existingNumbers, 0, 100);
                existingNumbers.push(num);
                temps[`temp${i}`] = num;
            }
            return temps
        }

        let multiData = []
        for (let i = 1; i <= total; i++) {
            let x = make();
            multiData.push(x);
        }
        return multiData
    }

}
export class Chadac {

    constructor() { }

    makeData() {
        //create random data 
        const angs = [];
        let a1 = 0
        let a2 = 0

        for (let i = 0; i < 2; i++) {
            // Generate random angles until they are not equal
            do {
                a1 = Math.floor(Math.random() * 179);
                a2 = Math.floor(Math.random() * 179);
            } while (a1 === 0 || a1 === 180 || a2 === 0 || a2 === 180 || a1 === a2 || a2 <= a1);

            angs.push({ a1: a1, a2: a2 });
        }
        return angs;
    }

    //create multi random data 
    makeMultiData(total: number) {
        //create random data 
        const angs = [];
        let a1 = 0
        let a2 = 0

        for (let i = 0; i < total; i++) {
            // Generate random angles until they are not equal
            do {
                a1 = Math.floor(Math.random() * 179);
                a2 = Math.floor(Math.random() * 179);
            } while (a1 === 0 || a1 === 180 || a2 === 0 || a2 === 180 || a1 === a2 || a2 <= a1);

            angs.push({ a1: a1, a2: a2 });
        }
        return angs;
    }

}
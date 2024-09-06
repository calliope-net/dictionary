//% color=#007FFF icon="\uf1c0" block="Dictionary" weight=24
namespace dictionary { // dictionary.ts

    //% group="create Dictionary"
    //% block="new Dictionary [string, number]" weight=8
    //% blockSetVariable=oDictionary
    export function create(): dictionary {
        return new dictionary()
    }


    export class dictionary {
        // https://www.tutorialspoint.com/typescript/typescript_tuples.htm
        arrayOfTuple: [string, number][]

        constructor() {
            this.arrayOfTuple = []
        }

        //% group="set Dictionary"
        //% block="add %oDictionary String %s Number %n" weight=6
        add(s: string, n: number) {
            this.arrayOfTuple.push([s, n])
        }

        //% group="get Dictionary"
        //% block="get[0] String %oDictionary Index %index" weight=5
        get0String(index: number) {
            return <string>this.arrayOfTuple[index].get(0)
        }

        //% group="get Dictionary"
        //% block="get[1] Number %oDictionary Index %index" weight=4
        get1Number(index: number) {
            return <number>this.arrayOfTuple[index].get(1)
        }

        //% group="get Dictionary"
        //% block="find Number %oDictionary Key:String %s" weight=3
        findNumber(s: string): number {
            for (let element of this.arrayOfTuple) {
                if (<string>element.get(0) == s) {
                    return <number>element.get(1)
                }
            }
            return undefined
        }

        //% group="get Dictionary"
        //% block="find String %oDictionary Key:Number %s" weight=2
        findString(n: number): string {
            for (let element of this.arrayOfTuple) {
                if (<number>element.get(1) == n) {
                    return <string>element.get(0)
                }
            }
            return undefined
        }


    } // class dictionary


    //% group="Funktionen"
    //% block="is undefined %v"
    export function isundefined(v: any) {
        return v == undefined
    }

} // dictionary.ts


namespace test_tuple {

    //  let tuple1: [string, number] = ["hello", 10]

    let arrayOfTuple: [string, number][] // = []

    function addTuple(s: string, n: number) {
        arrayOfTuple.push([s, n])
    }
    function get0string(index: number) {
        return <string>arrayOfTuple[index].get(0)
    }
    function get1number(index: number) {
        return <number>arrayOfTuple[index].get(1)
    }
    function findNumber(s: string): number {
        for (let element of arrayOfTuple) {
            if (<string>element.get(0) == s) {
                return <number>element.get(1)
            }
        }
        return undefined
    }

    //% block
    export function fill() {
        arrayOfTuple = [] // Array initialisieren
        addTuple("a", 1)
        addTuple("b", 2)
        addTuple("c", 3)

        let fnumber = findNumber("b")

        if (fnumber == undefined) {
            basic.clearScreen()
            basic.setLedColor(Colors.Red)
        } else {
            basic.showNumber(fnumber)
            basic.setLedColor(Colors.Green)
        }



        /*    let index = 2
           basic.showString(get0string(index))
           basic.showNumber(get1number(index))
    */
    }

}


var string = `{"data":[{"p":7296.89,"s":"BINANCE:BTCUSDT","t":1575526691134,"v":0.011467}],"type":"trade"}`

// situação um: definir begin e end (indexes)

// situação dois: definir charecther-begin e characther-begin-count e character-end e character-end-count





class CutStr {

    // -- construtores

    // constructor(inputString, indexbegin, indexend){
    //     this.output = "";
    //     this.input = inputString;
    //     this.begin = indexbegin;
    //     this.end = indexend;
    // }

    constructor(string, lchar, rchar, t1, t2,) {
        this.input = inputString;
        this.output = "";
        this.startCharacter = lchar;
        this.endCharacter = rchar;
        this.startCount = t1;
        this.endCount = t2;
    }

    // -- check if string has provided chars

    // -- find index of lchar
        // -- iterate over strings
        // -- if find lchar, count++
        // -- if count == t1. index = i
    
    // -- repeat for rchar

    // -- use substring or split to cut string and place it in output

    // -- return output


}

module.exports = cutstr(string) {

}
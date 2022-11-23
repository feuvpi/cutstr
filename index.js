

var string = `{"data":[{"p":7296.89,"s":"BINANCE:BTCUSDT","t":1575526691134,"v":0.011467}],"type":"trade"}`

// situação um: definir begin e end (indexes)

// situação dois: definir charecther-begin e characther-begin-count e character-end e character-end-count




class cutStr {
    
    constructor(inputString, lchar, rchar, t1, t2,) {
        // -- input & output
        this.inputString = inputString;
        this.outputString = "";
        // -- boundary chars
        this.charLeft = lchar;
        this.charRight = rchar;
        console.log(this.charRight)
        // -- boundary ocurrences 
        this.charRightOccurrence = t2;
        this.charLeftOccurrence = t1;
        // -- contain check
        this.containLeft = this.contain(this.charLeft);
        console.log(this.containLeft)
        this.containRight = this.contain(this.charRight);
        console.log(this.containRight)
        // -- boundary index
        if(this.containLeft){
            this.indexLeft = this.findIndex(this.charLeft, this.charLeftOccurrence);
            console.log(typeof(this.indexLeft))
        } else {
            return `The string provided do not contain the char ${this.charLeft}`
        }
        if(this.containRight){
            this.indexRight = this.findIndex(this.charRight, this.charRightOccurrence);
        } else {
            return `The string provided do not contain the char ${this.charRight}`
        }

        // -- output
        if(!isNaN(this.indexLeft) && !isNaN(this.indexRight)){
            this.outputString = this.inputString.substring((this.indexLeft+1), this.indexRight)
        } 
    }



    // -- methods ------
    contain = (char) => {    
        for (var i = 0; i < this.inputString.length; i++)
        {
            let getChar = this.inputString.charAt(i)
            if(char === getChar){
                console.log(char)
                console.log(this.inputString.charAt(i))
                return true
            }
            
        }
        return false;
    }
    
    findIndex = (char, count) => {
        let index = -1;
        let occurrences = 0;
        
        for(const c of this.inputString){
            index++
            if(c == char){
                occurrences++
            }
            if(count == occurrences){
                return (Number)(index);
            }
        }
        return(`There is only ${occurrences} occurrences of ${char} at the input provided.`)
    
    }

}



exports.CutStr = function(string, lchar, rchar, t1, t2,) {

    // -- construtores

    // constructor(inputString, indexbegin, indexend){
    //     this.output = "";
    //     this.input = inputString;
    //     this.begin = indexbegin;
    //     this.end = indexend;
    // }

    const cutstr = new cutStr(string, lchar, rchar, t1, t2)

    // constructor(string, lchar, rchar, t1, t2,) {
    //     this.input = inputString;
    //     this.output = "";
    //     this.charLeft = lchar;
    //     this.charRight = rchar;
    //     this.charRightOccurrence = t1;
    //     this.charLeftOccurrence = t2;
    //     this.indexLeft = null;
    //     this.indexRight = null;
    // }

 

    // -- check if string has provided chars
    if(!cutstr.containLeft || !cutstr.containRight) return (`ERROE. Check the string provided and boundary characters, ${this.charLeft} or ${this.charRight} not found.`);


    // const checkChar1 = contain(this.input, this.charLeft);
    // const checkChar2 = contain(this.input, this.charRight);

    // if(checkChar1 == false || checkChar2 == false){
        
    // }
    
    
    // -- find index of lchar
    // indexLeft = findIndex(this.input, this.charLeft, this.charLeftOccurrence);
    // indexRight = findIndex(this.input, this.charRight, this.charRightOccurrence);
    if(isNaN(cutstr.indexLeft) || isNaN(cutstr.indexRight)){
        console.log(typeof(cutstr.indexLeft))
        console.log(typeof(cutstr.indexRight))
        return(`There was a problem with the number of occurrences provided. Check the number of occurrences of each boundary identifier.`)
    }
        
    

    // // -- use substring or split to cut string and place it in output
    // cutstr.output = this.input.Substring(this.indexLeft+1, this.indexRight)

    // -- return output
    return(cutstr.outputString)

}





// -- methods

const contain = (str, char) => {    
    for (var i = 0; x < str.length; x++)
    {
        if(char == str.charAt(i)){
            return true
        }
        return false;
    }
}

const findIndex = (str, char, count) => {
    let index = -1;
    let occurrences = 0;
    
    for(const c of str){
        index++
        if(c == char){
            occurrences++
        }
        if(count == occurrences){
            return(int)(index);
        }
    }
    return(`There is only ${occurrences} occurrences of ${char} at the input provided.`)

}


var test = this.CutStr(string, ":", ",", 2, 1)
console.log("the result is: " + test)
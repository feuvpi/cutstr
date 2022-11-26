
// -- test
var string = `{"data":[{"p":7296.89,"s":"BINANCE:BTCUSDT","t":1575526691134,"v":0.011467}],"type":"trade"}`

class cutStr {
    
    constructor(inputString, lchar, rchar, t1, t2,) {
        // -- input & output
        this.inputString = inputString;
        this.outputString = "";

        // -- boundary chars
        this.charLeft = lchar;
        this.charRight = rchar;

        // -- boundary ocurrences 
        this.charRightOccurrence = t2;
        this.charLeftOccurrence = t1;

        // -- contain check
        this.containLeft = this.contain(this.charLeft);
        this.containRight = this.contain(this.charRight);

        // -- boundary index
        if(this.containLeft){
            this.indexLeft = this.findIndex(this.charLeft, this.charLeftOccurrence);
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

    const cutstr = new cutStr(string, lchar, rchar, t1, t2)

    // -- check if string has provided chars
    if(!cutstr.containLeft || !cutstr.containRight) return (`ERROE. Check the string provided and boundary characters, ${this.charLeft} or ${this.charRight} not found.`);

    if(isNaN(cutstr.indexLeft) || isNaN(cutstr.indexRight)){
        return(`There was a problem with the number of occurrences provided. Check the number of occurrences of each boundary identifier.`)
    }

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


module.exports = CutStr = function(string, lchar, rchar, t1, t2,) {

    const cutstr = new cutStr(string, lchar, rchar, t1, t2)

    // -- check if string has provided chars
    if(!cutstr.containLeft || !cutstr.containRight) return (`ERROE. Check the string provided and boundary characters, ${this.charLeft} or ${this.charRight} not found.`);

    if(isNaN(cutstr.indexLeft) || isNaN(cutstr.indexRight)){
        return(`There was a problem with the number of occurrences provided. Check the number of occurrences of each boundary identifier.`)
    }

    // -- return output
    return(cutstr.outputString)

}
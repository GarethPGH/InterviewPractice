var Input = function(input){
    this.input = input;
}
Input.validateInput = function(input) {

    var value = input;
    console.log(value + " , " + input);
    var numbArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    value = value + "";

    value = value.split("");
    if (value) {
        var validated = [];
        for (let i = 0; i < value.length; i++) {
            var compare = value[i];
            console.log(compare);
            for (item in numbArr) {
                //if item is in array input is valid
                if (compare === item) {
                    validated.push(compare);
                }
            }
        }
        if (validated != "") {
            console.log(validated + "is a valid number");
            return value;
        }
        else {
            value = value.join("");
            console.log(value + " is not a valid number");
        }
    }
}

Input.assignPossibilities = function(input) {
    
    var value = validateInput(input);
    value.split("");
    var possibilities = [];
    console.log(value);
    for (let i = 0; i < value.length; i++) {

        if (value[i] === "1") {
            value[i] = ["@@", "@@", "@@", "@@"];
        }
        else if (value[i] === "0") {
            value[i] = ["_", "_", "_", "_"];
        }
        else if (value[i] === "7") {
            value[i] = ["p", "q", "r", "s"];
        }
        else if (value[i] === "9") {
            value[i] = ["w", "x", "y", "z"];
        }
        else if (value[i] === "2") {
            value[i] = ["a", "b", "c", ""];
        }
        else if (value[i] === "3") {
            value[i] = ["d", "e", "f", ""];
        }
        else if (value[i] === "4") {
            value[i] = ["g", "h", "i", ""];
        }
        else if (value[i] === "5") {
            value[i] = ["j", "k", "l", ""];
        }
        else if (value[i] === "6") {
            value[i] = ["m", "n", "o", ""];
        }
        else (value[i] === "8") {
            value[i] = ["t", "u", "v", ""];
        };

        possibilities.push(value[i]);

    }
    console.log(typeof value, value);
    console.log(possibilities);
    // assignPossibilities();
};

Input.listPossibilities = function (input) {

    Input.assignPossibilities(input);

    //check the size of inputs various digits
    var possibilities = [];
    for (let i = 0; i < value.length; i++) {
        possibilities.push(value[i]);
    }
    //intialize counter number of arrays.
    console.log(possibilities);
    return listpossibilities;
}

var exInput = new Input();
exInput.input = 42;
exInput.listPossibilities;


//This is here because it is currently being worked on in separation from the rest


//This is here because it is currently being worked on in separation from the rest

var assignPossibilities = function (input) {
    var value = input;
    value = value.split("");
    var possibilities = [];
    // console.log(value);
    for (let i = 0; i < value.length; i++) {

        if (value[i] === "1") {
            value[i] = ["@@", "@@", "@@", "@@"];
        }
        else if (value[i] === "0") {
            value[i] = ["_", "_", "_", "_"];
        }
        else if (value[i] === "7") {
            value[i] = ["p", "q", "r", "s"];
        }
        else if (value[i] === "9") {
            value[i] = ["w", "x", "y", "z"];
        }
        else if (value[i] === "2") {
            value[i] = ["a", "b", "c", " "];
        }
        else if (value[i] === "3") {
            value[i] = ["d", "e", "f", " "];
        }
        else if (value[i] === "4") {
            value[i] = ["g", "h", "i", " "];
        }
        else if (value[i] === "5") {
            value[i] = ["j", "k", "l", " "];
        }
        else if (value[i] === "6") {
            value[i] = ["m", "n", "o", " "];
        }
        else if (value[i] === "8") {
            value[i] = ["t", "u", "v", " "];
        } else {
            console.log("Input is not valid");
            break;
        }

        possibilities.push(value[i]);

    }
    // console.log(typeof value, value);
    var probable = [];
    for (let i = 0; i < possibilities.length; i++) {
        for (let j = 0; j < possibilities[i].length; j++) {
            if (possibilities[i].includes(" ")) {
                possibilities[j] = possibilities[j].-" ";
            }
        };
        probable += possibilities[i];
    }
    console.log(probable);

};


assignPossibilities("42");
// For a set of numbers encoded as follows: 0:@@ ; 1:_ ; 2:abc ; 3:def ; 4:ghi ; 5:jkl ; 6:mno ; 7:pqrs ; 8:tuv ; 9:wxyz
//print all possible combinations for any string of numbers
//Sort Add Push Check


//first match entered variable leftmost digit to the array. Initialize array for each of the new 
var Input = function () {
    var input;
    Input.this = input;
    //I think this doesnt mean what I think it means


    function assignMe() {
        //this for some inexplicable stupid reason is still UNDEFINED!
        
        if (value) {
            //for index does input[i] = index, if it does, exists, if it is not in array break and err out 
            var numbArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

            for (let i = 0; i < value.length; i++) {
                var compare = value[i];
                var isItIn = compare in numbArr;
                if (!isItIn) {
                    window.alert(value + " is not valid");
                    break;
                }

            }

        }
        value = value + "";

        value = value.split("");
        console.log(typeof value, value);
        return value;
    }

    function assignPossibilities(assignMe) {
        
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
            else if (value[i] === "8") {
                value[i] = ["t", "u", "v", ""];
            };
            console.log(typeof value, value);

            value += value[i];

            console.log(value);

        }
        return value;
    }

    function listPossibilities(assignPossibilities) {
        
        //check the size of inputs various digits
        var possibilities = [];
        for (let i = 0; i < value.length; i++) {
            possibilities.push(valueinput[i]);
        }
        //intialize counter number of arrays.
        console.log(possibilities);
        return possibilities;
    }
}
var passed = new Input();
passed.input = 42;
passed.listPossibilities;
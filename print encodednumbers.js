// For a set of numbers encoded as follows: 0:@@ ; 1:_ ; 2:abc ; 3:def ; 4:ghi ; 5:jkl ; 6:mno ; 7:pqrs ; 8:tuv ; 9:wxyz
//print all possible combinations for any string of numbers
//Sort Add Push Check


//first match entered variable leftmost digit to the array. Initialize array for each of the new 
var Input = function () {
    input = this;


    Input.prototype.assignMe(input) {

        if (input) {
            //for index does input[i] = index, if it does, exists, if it is not in array break and err out 
            var numbArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

            for (let i = 0; i < input.length; i++) {
                var compare = input[i];
                var isItIn = compare in numbArr;
                if (!isItIn) {
                    window.alert(input + " is not valid");
                    break;
                };
                i++;
            };

        };
        input = input + "";

        input = input.split("");

        console.log(typeof input, input);

    };

    Input.prototype.assignPossibilities(input) {
        for (let i = 0; i < input.length; i++) {

            if (input[i] === "1") {
                input[i] = ["@@", "@@", "@@", "@@"];
            }
            else if (input[i] === "0") {
                input[i] = ["_", "_", "_", "_"];
            }
            else if (input[i] === "7") {
                input[i] = ["p", "q", "r", "s"];
            }
            else if (input[i] === "9") {
                input[i] = ["w", "x", "y", "z"];
            }
            else if (input[i] === "2") {
                input[i] = ["a", "b", "c", ""];
            }
            else if (input[i] === "3") {
                input[i] = ["d", "e", "f", ""];
            }
            else if (input[i] === "4") {
                input[i] = ["g", "h", "i", ""];
            }
            else if (input[i] === "5") {
                input[i] = ["j", "k", "l", ""];
            }
            else if (input[i] === "6") {
                input[i] = ["m", "n", "o", ""];
            }
            else if (input[i] === "8") {
                input[i] = ["t", "u", "v", ""];
            };
            console.log(typeof input, input);

            input += input[i];

            console.log(input);

        }
    };

    Input.prototype.listPossibilities(input) {
        //check the size of inputs various digits
        var possibilities = [];
        for (let i = 0; i < input.length; i++) {
            possibilities[i] = input[i];
        }
        //intialize counter number of arrays.
        console.log(possibilities);
    }
};
var input = new Input;
input.input = 42;
input.assignMe.assignPossibilities.listPossibilities;
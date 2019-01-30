/**
 * Make an ajax request and sets the returned mean, median, mode values.
 * @param {array[]} numList An array of numbers.
 */
var calcMeanMedianMode = (numList) => {
    $.ajax({
        type: "POST",
        url: "Home/CalcMeanMedianMode",
        data: JSON.stringify({ arr: numList }),
        contentType: "application/json",
        success: function(result) {
            console.log(result);

            document.getElementById("txtMean").innerText = formatResult(result.mean);
            document.getElementById("txtMedian").innerText = formatResult(result.median);
            document.getElementById("txtMode").innerText = formatResult(result.mode);
        },
        error: function(result) {
            //TODO:
        }
    });
};


/**
 * Returns the list of numbers entered in the input field.
 * @returns {number[]} An array of numbers 
 */
const getNumberList = () => {
    return document.getElementById("inputNumberList").value.split(",").map((num) => {
        return parseInt(num);
    });
};

/**
 * Formats the returned result.
 * @param {number} result The result from calculating either the mean, median, or mode.
 * @returns {number|string} the computed value or error message.
 */
const formatResult = (result) => {

    if (Array.isArray(result) && result.length > 0) { // to handle edge case for mode
        return result.join(",");
    }

    if (result.length === 0) {
        return "Cannot Calculate";
    }

    return result;
};

/**
 * Checks to see if the list of number is valid, ie a list of comma separated numbers.
 * @param {any} input List of comma separated numbers
 * @return {boolean} Return true if it's a valid format or false if it's not.
 */
const isValidFormat = (input) => {
    if (!/^[0-9]+(,[0-9]+)*$/.test(input)) {
        alert("Please make sure your input is a comma separated list of numbers");
        clearCards();
        return false;
    }
    return true;
};

/**
 * Clears the mean median and mode value displayed.
 */
const clearCards = () => {
    document.getElementById("txtMean").innerText = "";
    document.getElementById("txtMedian").innerText = "";
    document.getElementById("txtMode").innerText = "";
};

/**
 * Register our event listener to listen for the enter button keypress.
 * Once the enter keys is pressed the mean median and mode will be calculated and outputted in the card holders.
 */
document.getElementById("inputNumberList").addEventListener("keydown", (event) => {
    if (event.which === 13 || event.keyCode === 13) {
        event.preventDefault();
        var numList = document.getElementById("inputNumberList").value;

        if (isValidFormat(numList)) {
            calcMeanMedianMode(getNumberList());
        }
    }
});


/**
 * Register our event listener to listen for the calculate button click.
 * Once clicked the mean median and mode will be calculated and outputted in the card holders.
 */
document.getElementById("btnCalculate").addEventListener("click", (event) => {
    event.preventDefault();
    var numList = document.getElementById("inputNumberList").value;

    if (isValidFormat(numList)) {
        calcMeanMedianMode(getNumberList());
    }
});

/**
 * Register our event listener to listen for the clear button click.
 * Once clicked the form will be cleared out
 */
document.getElementById("btnClearForm").addEventListener("click", () => {
    document.getElementById("inputNumberList").value = "";
    clearCards();
});






////////////////////////////JAVASCRIPT VERSION///////////////////////////////////////////////////////////////////////////

/**
 * Provides functions to Calculates the Mean, Median, Mode value from the list of numbers.
 * @returns { MeanMedianMode } List of function to calculate mean median mode
 */
//const meanMedianModeAlgorithm = () => {
//    "use strict";

//    var arr = [];

//    /**
//     * Calculates and the mean value from the array list of numbers.
//     * @param {number[]} arr List Of Numbers
//     * @returns {number} Mean value from the list of numbers
//     */
//    var getMean = (arr) => {
//        var total = 0;
//        arr.forEach(item => {
//            total += item;
//        });
//        var mean = total / arr.length;
//        return mean;
//    };

//    /**
//     * Calculates and the mode value from the array list of numbers.
//     * @param {number[]} arr List Of Numbers
//     * @returns {number} Median value from the list of numbers
//     */
//    var getMedian = (arr) => {
//        arr.sort((a, b) => {
//            return a - b;
//        });

//        var median;
//        if (arr.length % 2 === 0) { // if even
//            const midIndex1 = (arr.length / 2) - 1;
//            const midIndex2 = (arr.length / 2);
//            median = (arr[midIndex1] + arr[midIndex2]) / 2;
//        } else { // if odd
//            const midIndex = Math.floor(arr.length / 2);
//            median = arr[midIndex];
//        }

//        return median;
//    };


//    /**
//     * Calculates and the mode value from the array list of numbers.
//     * @param {number[]} arr List Of Numbers
//     * @returns {number} Mode value(s) from the list of numbers
//     */
//    var getMode = (arr) => {
//        var occurence = {};
//        arr.forEach(item => {
//            if (!occurence.hasOwnProperty(item)) {
//                occurence[item] = 0;
//            }
//            occurence[item]++;
//        });

//        var maxOccurence = 0;
//        var modes = [];
//        for (const num in occurence) {
//            if (occurence.hasOwnProperty(num)) {
//                if (occurence[num] > maxOccurence) {
//                    modes = [num];
//                    maxOccurence = occurence[num];
//                } else if (occurence[num] === maxOccurence) {
//                    modes.push(num);
//                }
//            }
//        }

//        if (modes.length === Object.keys(occurence).length) {
//            modes = [];
//        }
//        return modes;
//    };


//    /**
//     * Functions exposed returned as an object
//     *
//     * @typedef {Object} MeanMedianMode
//     * @property {function} mean Function to calculate the mean
//     * @property {function} median Function to calculate the median
//     * @property {function} median Function to calculate the mode
//     */
//    return {
//        mean: getMean,
//        median: getMedian,
//        mode: getMode
//    };

//};



//**
// * Returns the list of numbers entered in the input field.
// * @returns {number[]} An array of numbers 
// */
//const getNumberList = () => {
//    return document.getElementById("inputNumberList").value.split(",").map((num) => {
//        return parseInt(num);
//    });
//};

//**
// * Formats the returned result.
// * @param {number} result The result from calculating either the mean, median, or mode.
// * @returns {number|string} the computed value or error message.
// */
//const formatResult = (result) => {

//    if (Array.isArray(result) && result.length > 0) { // to handle edge case for mode
//        return result.join(",");
//    }

//    if (result.length === 0 || Number.isNaN(result)) {
//        return "Cannot Calculate";
//    }

//    return result;
//};

//var meanMedianMode = meanMedianModeAlgorithm();

//document.getElementById("inputNumberList").addEventListener("keydown", (event) => {
//    if (event.which === 13 || event.keyCode === 13) {
//        event.preventDefault();
//        calcMeanMedianMode(getNumberList());
//    }
//});

//var calcMeanMedianMode = (numberList) => {
//    document.getElementById("txtMean").innerText = formatResult(meanMedianMode.mean(numberList));
//    document.getElementById("txtMedian").innerText = formatResult(meanMedianMode.median(numberList));
//    document.getElementById("txtMode").innerText = formatResult(meanMedianMode.mode(numberList));
//};

//**
// * Register our event listener to listen for the calculate button click.
// * Once clicked the mean median and mode will be calculated and outputted in the card holders.
// */
//document.getElementById("btnCalculate").addEventListener("click", (event) => {
//    event.preventDefault();
//    calcMeanMedianMode(getNumberList());
//});

//**
// * Register our event listener to listen for the clear button click.
// * Once clicked the form will be cleared out
// */
//document.getElementById("btnClearForm").addEventListener("click", () => {
//    document.getElementById("inputNumberList").value = "";
//});





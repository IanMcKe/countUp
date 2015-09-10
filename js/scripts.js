var countUp = function(multiple, maxNum) {
    var countArray = [];
    if ((multiple !== 0) && (maxNum !== 0)) {
        if (multiple > maxNum) {
            var holding = multiple;
            multiple = maxNum;
            maxNum = holding;
        }

        for(var i = multiple; i <= maxNum; i += multiple) {
            countArray.push(i);
        }
    } else {
        countArray.push("0 doesn't work!");
    }
         return countArray;
};

$(document).ready(function() {
    $('form#numbers').submit(function(event) {
        var maxNum = parseInt($('input#maxNum').val());
        var multiple = parseInt($('input#multiple').val());
        var result = countUp(maxNum, multiple);

        result.forEach(function(number) {
            $('.countUp').append(number + " ");
        });

        event.preventDefault();
    });
});

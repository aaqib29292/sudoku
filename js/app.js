var hasSolution =
    [1,2,7,8,9,4,3,5,6,4,5,6,1,2,3,7,8,9,9,8,3,5,6,7,1,4,2,4,3,9,7,1,8,2,6,5,6,1,5,3,4,2,9,7,8,7,2,8,6,9,5,3,1,4,5,7,1,9,8,2,6,4,3,2,6,4,5,3,1,8,9,7,8,3,9,4,7,6,2,5,1];

var wrongSolution =
    [5,2,7,8,9,4,3,5,6,4,5,6,1,2,3,7,8,9,9,8,3,5,6,7,1,4,2,4,3,9,7,1,8,2,6,5,6,1,5,3,4,2,9,7,8,7,2,8,6,9,5,3,1,4,5,7,1,9,8,2,6,4,3,2,6,4,5,3,1,8,9,7,8,3,9,4,7,6,2,5,1];

var blanks = [1,2,,,,4,3,,6,4,5,,,,3,7,,,,8,,5,,,,4,2,4,,9,,1,,2,,5,,,5,3,4,,9,,,7,2,,6,,5,3,1,4,,7,,9,,,,4,3,,,,5,,,8,,7,8,,,,,6,2,,1];


$(document).ready(function(){
    $.each($('input'), function (j, col) {
      $(col).attr("value", blanks[j]);
      if (col.hasAttribute("value")) {
        $(col).attr("disabled", "disabled");
      };
      $(col).focus( function() {
        $(col).keyup(function() {
          $(col).attr("value",$(col).val());
        });
      })
    });
    $("button").click(function() {
      wrong = false
      $.each($('input'), function (j, col) {
        var checkSolution = $(col).attr("value");
        if (checkSolution != hasSolution[j]) {
          wrong = true;
        }
      });
      if (wrong == false) {
        alert("You have solved sudoku correctly");
      }
      else {
        alert("Some mistakes, Please Check your solved sudoku once again");
      }
    });
});

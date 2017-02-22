var year = 0;

$(function(){


  $(".leapForm").submit(function(){
    event.preventDefault();
    year = parseInt($("#year").val());

    if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        $(".output").text(year + " is leap year!");
      } else {
        $(".output").text(year + " is NOT leap year!");
      };
    });

});

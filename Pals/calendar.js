var today = new Date();
var currentMonth = today.getMonth();
var currentYear = today.getFullYear();
var selectYear = document.getElementById("year");
var selectMonth = document.getElementById("month");
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var monthAndYear = document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);


function next() {
    if(currentMonth===11){
        currentYear += 1;
    }else{
        currentYear;
    }
    currentMonth = (currentMonth + 1) % 12;
    showCalendar(currentMonth, currentYear);
    // currentYear = (currentMonth === 11) ? currentYear + 1 : currentYear;
    // currentMonth = (currentMonth + 1) % 12;
    // showCalendar(currentMonth, currentYear);
}

function previous() {
    if(currentMonth === 0){
        currentYear -= 1;
    }else{
        currentYear;
    }

    if(currentMonth === 0){
        currentMonth = 11;
    }else{
        currentMonth -=1;
    }
    showCalendar(currentMonth, currentYear);

    // currentYear = (currentMonth === 0) ? currentYear - 1 : currentYear;
    // currentMonth = (currentMonth === 0) ? 11 : currentMonth - 1;
    // showCalendar(currentMonth, currentYear);
}

function jump() {
    currentYear = parseInt(selectYear.value);
    currentMonth = parseInt(selectMonth.value);
    showCalendar(currentMonth, currentYear);
}



function showCalendar(month, year) {

    var firstDay = (new Date(year, month)).getDay();
    var daysInMonth = 32 - new Date(year, month, 32).getDate();//calculate how many days in month

    var tbl = document.getElementById("calendarDays"); // body of the calendar or contains days in calendar

    
    tbl.innerHTML = "";

  
    monthAndYear.innerHTML = year+ " "+months[month];//displays year and month
    monthAndYear.style.color = "darkblue";
    monthAndYear.style.fontSize = "xx-large";
    selectYear.value = year;//gets the value of year
    selectMonth.value = month;//gets the month value

    
    var date = 1;
    for (var i = 0; i < 6; i++) {
        
        var row = document.createElement("tr");    
        for (var j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                var cell = document.createElement("td");
                var cellText = document.createTextNode("");
                cell.appendChild(cellText);
                row.appendChild(cell);
            }
            else if (date > daysInMonth) {
                break;
            }

            else {
                var cell = document.createElement("td");
                var cellText = document.createTextNode(date);
                if (date === today.getDate() && year === today.getFullYear() && month === today.getMonth()) {
                    cell.classList.add("bg-info");
                } 
                cell.appendChild(cellText);
                row.appendChild(cell);
                date++;
            }


        }

        tbl.appendChild(row); // appending each row of calendar days
    }

var color = "gray";
    $(document).ready(function(){ 

         $("td").click(function(){
            color = "red";
            $(this).css("background-color","red");
            $(this).mouseout(function(){
               $(this).css("background-color", "red");
            });

            $("td").click(function() {
                color = "gray";
                $(this).css("background-color", "red");
            })
        });
         
        if (color == "gray") {
            $("td").mouseover(function(){
                $(this).css("background-color", "gray");
                $(this).mouseout(function() {
                    $(this).css("background-color", "white");
                });
            });
        }
        if (color == "red") {
            $("td").mouseover(function(){
                $(this).css("background-color", "red");
                $(this).mouseout(function() {
                    $(this).css("background-color", "red");
                });
            });
            $("td").click(function() {
                color = "gray";
                $(this).css("background-color", "white");
            })
        }
    });

}
$(document).ready(function(){
$('#ajax').click(function(){
var proxy = 'https://cors-anywhere.herokuapp.com/';
 var apiLinkDS = 'https://api.darksky.net/forecast/e2c8b7bba44a193f5ef7d56f5cc0ede3/10.3539171,123.9114687';
 $.get({ 
   url: proxy + apiLinkDS,
   success: function( data ) {
     alert("Temperature is\xa0\xa0" + data.currently.temperature +"\xa0\xa0degree Celsius.");
   }
 });
});
});
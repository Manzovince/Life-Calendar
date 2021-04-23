function createCal() {
    var bDay = document.getElementById("bDay").value;
    var bMonth = document.getElementById("bMonth").value;
    var bYear = document.getElementById("bYear").value;

    // Check if birthday is OK
    if (bDay.length == 0 || bMonth.length == 0 || bYear.length == 0) {
        alert("You need to provide your birthdate !");
        return false;
    }

    // Init dates
    var birthday = new Date(bYear, bMonth, bDay);
    var now = new Date();

    var msecPassed = now - birthday;
    var daysPassed = Math.round((now-birthday)/(1000*60*60*24));
    var weeksPassed = Math.round(daysPassed/7);

    console.log(msecPassed, daysPassed, weeksPassed);

    var html = "";
    var age = 0;

    for (i = 0; i < daysPassed; i++) {
        html += `<div class="cell">-</div>`
    }
    
    document.getElementById("calendar").innerHTML += html;
}
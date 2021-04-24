function inDays(start, end) {
    return Math.round((end-start)/(1000*60*60*24))-1;
}

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
    var end = new Date(Number(bYear)+40, bMonth, bDay);
    var now = new Date();

    //var msecPassed = now - birthday;
    //var daysPassed = Math.round((now-birthday)/(1000*60*60*24))-1;
    //var weeksPassed = Math.round(daysPassed/7);

    var html = "";
    var age = 0;

    var t = new Date(birthday);

    while (t <= end){
        // Happy birthday
        if (t.getFullYear() == bYear && t.getMonth() == 9 && t.getDate() == 14) {
            html += `<div class="cell hbd"><span class="tooltip">`+t.getDate()+`-`+(t.getMonth()+1)+`-`+t.getFullYear()+` (`+age+`yo 🥳)</span></div>`;
        }
        console.log(t == now);
        if (t == now) {
            console.log("Hello");
            html += `<div class="cell now"><span class="tooltip">`+t.getDate()+`-`+(t.getMonth()+1)+`-`+t.getFullYear()+`</span></div>`;
        }
        else {
            html += `<div class="cell"><span class="tooltip">`+t.getDate()+`-`+(t.getMonth()+1)+`-`+t.getFullYear()+`</span></div>`;
        }
        var newDate = t.setDate(t.getDate() + 1);
        if (t.getMonth() == 9 && t.getDate() == 14) {
            bYear++;
            age++;
        }
        t = new Date(newDate);
    }

//    for (var t = birthday; t < end; t.setDate(t.getDate() + 1)) {
//        console.log(t, new Date(t));
//        html += `<div class="cell"><span class="tooltip">`+t.getDate()+`-`+(t.getMonth()+1)+`-`+t.getFullYear()+`</span></div>`;
//    }

//    for (i = 0; i < daysPassed; i++) {
//        html += `<div class="cell"><span class="tooltip">`+start.getDate()+`-`+(start.getMonth()+1)+`-`+start.getFullYear()+`(`+i+`)`+`</span></div>`;
//        if (i % 53 == 0) {
//            html += `<div class="cell hbd"><span class="tooltip">`+start.getDate()+`-`+(start.getMonth()+1)+`-`+start.getFullYear()+`(`+i+`)`+`</span>`+age+`</div>`;
//            age++;
//        }
//        start.setDate(start.getDate()+7);
//    }

    document.getElementById("calendar").innerHTML = html;
}
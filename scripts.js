function getPastWeek(d) {
    return d / (31536000000 / 52);
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

    console.log(bDay, bMonth, bYear)

    // Init dates
    var birthday = new Date(bYear, bMonth, bDay);

    if (gDay.length != 0 && gMonth.length != 0 && gYear.length != 0) {
        var graduate = new Date(document.getElementById("gYear").value, document.getElementById("gMonth").value, document.getElementById("gDay").value);
    }
    if (dDay.length != 0 && dMonth.length != 0 && dYear.length != 0) {
        var driver = new Date(document.getElementById("dYear").value, document.getElementById("dMonth").value, document.getElementById("dDay").value);
    }
    if (mDay.length != 0 && mMonth.length != 0 && mYear.length != 0) {
        var married = new Date(document.getElementById("mYear").value, document.getElementById("mMonth").value, document.getElementById("mDay").value);
    }

    var startCal = new Date(bYear, bMonth, bDay);
    var now = new Date();
    var timePassed = now - birthday;

    var html = "";
    var age = 0;

    // Create Calendar
    for (i = 0; i < 5252; i++) {
        // Birthday case
        if (i % 53 == 0) {
            html += `<div class="tooltip bg-green-500 m-px flex justify-center items-center text-white text-xs cursor-default hover:bg-green-700" x-bind:class="{ 'h-4 w-4': size===4, 'h-5 w-5': size===5, 'h-6 w-6': size===6 }"><span class="tooltip-text text-xs bg-gray-900 px-2 py-1 rounded text-white opacity-75 transform -translate-y-8">` + startCal.getDate() +`-`+ (startCal.getMonth()+1) +`-`+ startCal.getFullYear() + ` (`+ i + `)` + `</span>` + age + `</div>`;
            age++;
        }
        // Now case
        else if (i == Math.floor(getPastWeek(timePassed))) {
            html += `<div class="tooltip bg-blue-500 m-px hover:bg-blue-700" x-bind:class="{ 'h-4 w-4': size===4, 'h-5 w-5': size===5, 'h-6 w-6': size===6 }"><span class="tooltip-text text-xs bg-gray-900 px-2 py-1 rounded text-white opacity-75 transform -translate-y-8">` + startCal.getDate() +`-`+ (startCal.getMonth()+1) +`-`+ startCal.getFullYear() + ` (`+ i + `)` + `</span></div>`;
        }
        // Graduate case 
        else if (i == Math.floor(getPastWeek(graduate - birthday))) {
            html += `<div class="tooltip flex justify-center items-center bg-orange-500 ion-ios-bookmark text-white m-px text-sm hover:bg-orange-700" x-bind:class="{ 'h-4 w-4': size===4, 'h-5 w-5': size===5, 'h-6 w-6': size===6 }">` + `<span class="tooltip-text text-xs bg-gray-900 px-2 py-1 rounded text-white opacity-75 transform -translate-y-6">` + startCal.getDate() +`-`+ (startCal.getMonth()+1) +`-`+ startCal.getFullYear() + ` (`+ i + `)` + `</span></div>`;
        }
        // Driver case 
        else if (i == Math.floor(getPastWeek(driver - birthday))) {
            html += `<div class="tooltip flex justify-center items-center bg-yellow-600 ion-ios-car text-white m-px text-sm hover:bg-yellow-700" x-bind:class="{ 'h-4 w-4': size===4, 'h-5 w-5': size===5, 'h-6 w-6': size===6 }">` + `<span class="tooltip-text text-xs bg-gray-900 px-2 py-1 rounded text-white opacity-75 transform -translate-y-8">` + startCal.getDate() +`-`+ (startCal.getMonth()+1) +`-`+ startCal.getFullYear() + ` (`+ i + `)` + `</span></div>`;
        }
        // Married case 
        else if (i == Math.floor(getPastWeek(married - birthday))) {
            html += `<div class="tooltip flex justify-center items-center bg-red-400 ion-ios-heart text-white m-px text-sm hover:bg-red-500" x-bind:class="{ 'h-4 w-4': size===4, 'h-5 w-5': size===5, 'h-6 w-6': size===6 }">` + `<span class="tooltip-text text-xs bg-gray-900 px-2 py-1 rounded text-white opacity-75 transform -translate-y-8">` + startCal.getDate() +`-`+ (startCal.getMonth()+1) +`-`+ startCal.getFullYear() + ` (`+ i + `)` + `</span></div>`;
        }
        // Past case 
        else if (i < getPastWeek(timePassed)) {
            html += `<div class="tooltip bg-gray-500 m-px text-xs hover:bg-gray-600" x-bind:class="{ 'h-4 w-4': size===4, 'h-5 w-5': size===5, 'h-6 w-6': size===6 }"><span class="tooltip-text text-xs bg-gray-900 px-2 py-1 rounded text-white opacity-75 transform -translate-y-8">` + startCal.getDate() +`-`+ (startCal.getMonth()+1) +`-`+ startCal.getFullYear() + ` (`+ i + `)` + `</span></div>`;
        }
        // Futur case
        else {
            html += `<div class="tooltip bg-gray-300 m-px hover:bg-gray-400" x-bind:class="{ 'h-4 w-4': size===4, 'h-5 w-5': size===5, 'h-6 w-6': size===6 }"><span class="tooltip-text text-xs bg-gray-900 px-2 py-1 rounded text-white opacity-75 transform -translate-y-8">` + startCal.getDate() +`-`+ (startCal.getMonth()+1) +`-`+ startCal.getFullYear() + ` (`+ i + `)` + `</span></div>`;
        }
        startCal.setDate(startCal.getDate() + 7);
    }
    document.getElementById("calendar").innerHTML += html;
}
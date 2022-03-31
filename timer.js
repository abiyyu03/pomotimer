let intervals = 0;
let checkTimerOrBreak = 0;
//for check active function
// let running = false;

function timer() 
{
    let setTimer = parseInt(document.getElementById("setTimer").value);
    let audioBreak = document.getElementById("audioBreak");
    audioBreak.src = "alarm/"+alarmBreak.value;
    //   running = !running;
    document.getElementById("title").innerHTML = "Focus - Pomotimer ";
    document.getElementById("titleText").innerHTML = "Yuk fokus bekerja..";
    document.getElementById("titleHeader").className = "card-header bg-primary";
    document.getElementById("option").style.display = 'none';
    document.getElementById("buttonReset").disabled = false;
    document.getElementById("buttonStart").disabled = true;
    // document.getElementById("alarmBreak").disabled = true;
    // document.getElementById("alarmTimer").disabled = true;
    // document.getElementById("setTimer").disabled = true;
    // document.getElementById("setBreak").disabled = true;
    // document.getElementById("setIntervals").disabled = true; 
    document.getElementById("imgIllustration").src="illustration/work-illustration.png";
    document.getElementById("imgIllustration").style.display="";
    document.getElementById("labelTimer").innerHTML = setTimer + " : " + "0";
    
    checkTimerOrBreak+=1;

    if(checkTimerOrBreak == 1){
        seconds = 60;
        setTimer -= 1;
    } else {
        setTimer -= 1;
        seconds = 59;
    }
    
    runTimer = setInterval(function () {
        seconds--;
        if (setTimer == 0 && seconds == -1) {
            clearTimeout(runTimer);
            audioBreak.play();
            breakTimer();
        }
        if (seconds == -1) {
            setTimer -= 1;
            seconds = 59;
        }
        document.getElementById("labelTimer").innerHTML =
        setTimer + " : " + seconds;
    }, 1000);
}

function breakTimer() 
{
    let setBreak = parseInt(document.getElementById("setBreak").value);
    let setIntervals = parseInt(document.getElementById("setIntervals").value);
    let audioTimer = document.getElementById("audioTimer");
    audioTimer.src = "alarm/"+alarmTimer.value;
    
    document.getElementById("title").innerHTML = "Istirahat - Pomotimer ";
    document.getElementById("titleText").innerHTML = "Rileks dulu kawan..";
    document.getElementById("titleHeader").className = "card-header bg-secondary";
    document.getElementById("labelTimer").innerHTML = setBreak + " : " + "0";
    document.getElementById("imgIllustration").src="illustration/break-illustration.png";
    document.getElementById("imgIllustration").style.display="";
    
    checkTimerOrBreak+=1;
    if(checkTimerOrBreak == 2)
    {
        seconds = 59;
        setBreak -= 1;
    }else {
        setBreak -= 1;
        seconds = 59;
    }
    
    runBreak = setInterval(function () {
        seconds--;
        if (setBreak == 0 && seconds == -1) {
            intervals += 1;
            if (intervals == setIntervals) {
                document.getElementById("titleHeader").className = "card-header bg-success";
                document.getElementById("titleText").innerHTML = "Atur Pomotimer";
                document.getElementById("buttonStart").disabled = false;
                document.getElementById("buttonReset").disabled = true;
                // document.getElementById("alarmBreak").disabled = false;
                // document.getElementById("alarmTimer").disabled = false;
                // document.getElementById("setTimer").disabled = false;
                // document.getElementById("setBreak").disabled = false;
                // document.getElementById("setIntervals").disabled = false;
                document.getElementById("buttonModal").click();
                clearTimeout(runBreak);
                document.getElementById("option").style.display = '';
                document.getElementById("imgIllustration").style.display="none";
                return;
            } else {
                audioTimer.play();
                clearTimeout(runBreak);
                timer();
            }
        }
        if (seconds == -1) {
            setBreak -= 1;
            seconds = 59;
        }
        document.getElementById("labelTimer").innerHTML =
        setBreak + " : " + seconds;
    }, 1000);
}

// Reset Timer
function resetTimer() 
{
    //check if in work
    if(checkTimerOrBreak == 1 || checkTimerOrBreak % 2 != 0)
    {
        intervals = 0;
        checkTimerOrBreak = 0;
        document.getElementById("labelTimer").innerHTML = "0:0";
        setTimer = "Set Minutes";
        setBreak = "Set Minutes of Break";
        document.getElementById("title").innerHTML = "Atur Pomotimer";
        document.getElementById("titleHeader").className = "card-header bg-success";
        document.getElementById("titleText").innerHTML = "Atur Pomotimer";
        document.getElementById("buttonReset").disabled = true;
        document.getElementById("buttonStart").disabled = false;
        // document.getElementById("alarmBreak").disabled = false;
        // document.getElementById("alarmTimer").disabled = false;
        // document.getElementById("setTimer").disabled = false;
        // document.getElementById("setBreak").disabled = false;
        // document.getElementById("setIntervals").disabled = false;
        document.getElementById("option").style.display = '';
        document.getElementById("imgIllustration").style.display="none";
        document.getElementById("imgIllustration").src="";
        clearInterval(runTimer);

    //check if in break
    } else if(checkTimerOrBreak % 2 == 0) {
        intervals = 0
        checkTimerOrBreak = 0;
        setTimer = "Set Minutes"
        setBreak = "Set Minutes of Break"
        document.getElementById("titleText").innerHTML = "Atur Pomotimer";
        document.getElementById("title").innerHTML = "Atur Pomotimer";
        document.getElementById("titleHeader").className = "card-header bg-success";
        document.getElementById("labelTimer").innerHTML = "0:0";
        document.getElementById("buttonReset").disabled = true;
        document.getElementById("buttonStart").disabled = false;
        // document.getElementById("alarmBreak").disabled = false;
        // document.getElementById("alarmTimer").disabled = false;
        // document.getElementById("setTimer").disabled = false;
        // document.getElementById("setBreak").disabled = false;
        // document.getElementById("setIntervals").disabled = false;
        document.getElementById("option").style.display = '';
        document.getElementById("imgIllustration").style.display="none";
        document.getElementById("imgIllustration").src="";
        clearInterval(runBreak);
    }
}

function enableStartButton() 
{
    if (setTimer != "none" ) {
        document.getElementById("buttonStart").disabled = false;
    }
}

// function demoTimer()
// {
//     let audioTimer = document.getElementById("audioTimer");
//     audioTimer.src = "alarm/"+alarmTimer.value;
//     audioTimer.play();

// }

// function demoBreak()
// {
//     if(alarmBreak.value == "none")
//     {
//         audioBreak.stop();
//     } else {
//         let audioBreak = document.getElementById("audioBreak");
//         audioBreak.src = "alarm/"+alarmBreak.value;
//         audioBreak.play();
//     }
// }
// / setTimer = new Date(today.getMonth(), today.getDate(), today.getFullYear(), today.getHours(), parseInt(timer), today.getSeconds()).getMinutes();
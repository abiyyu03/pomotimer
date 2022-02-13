let intervals = 0;
let checkTimerOrBreak = 0;
//for check active function
// let running = false;
function timer() 
{
    let setTimer = parseInt(document.getElementById("setTimer").value);
    let alarmBreak = document.getElementById("alarmBreak");
    alarmBreak.src = "alarm/break.m4a"
    //   running = !running;
    document.getElementById("titleHeader").class = "bg-primary";
    document.getElementById("buttonStart").disabled = true;
    document.getElementById("buttonReset").disabled = false;
    document.getElementById("setTimer").disabled = true;
    document.getElementById("setBreak").disabled = true;
    document.getElementById("setIntervals").disabled = true;
    document.getElementById("labelTimer").innerHTML = setTimer + " : " + "00";
    
    checkTimerOrBreak+=1;
    if(checkTimerOrBreak == 1){
        seconds = 60;
        setTimer -= 1;
    } else {
        setTimer -= 1;
        seconds = 59;
            
    }
    // console.log(checkTimerOrBreak)
    
    runTimer = setInterval(function () {
        seconds--;
        if (setTimer === 0 && seconds === -1) {
            clearInterval(runTimer);
            alarmBreak.play();
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
    let alarmTimer = document.getElementById("alarmTimer");
    alarmTimer.src = "alarm/alarm.mp3";
    //   running = !running;
    document.getElementById("labelTimer").innerHTML = setBreak + " : " + "00";

    checkTimerOrBreak+=1;
    if(checkTimerOrBreak == 2)
    {
        seconds = 59;
        setBreak -= 1;
    }else {
        setBreak -= 1;
        seconds = 59;
    }
    // console.log(checkTimerOrBreak)

    runBreak = setInterval(function () {
        seconds--;
        if (setBreak === 0 && seconds === -1) {
            intervals += 1;
            if (intervals === setIntervals) {
                alert(
                    "SELAMAT, KAMU TELAH MENJALANKAN TEKNIK POMODORO HINGGA TUNTAS. JANGAN LUPA DI EVALUASI YAA !"
                    );
                    clearInterval(runBreak);
                    return;
                } else {
                    alarmTimer.play();
                    clearInterval(runBreak);
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
        if(checkTimerOrBreak == 1 || checkTimerOrBreak % 2 != 0)
        {
            intervals = 0;
            checkTimerOrBreak = 0;
            clearInterval(runTimer);
            document.getElementById("labelTimer").innerHTML = "00:00";
            setTimer = "Set Minutes";
            setBreak = "Set Minutes of Break";
            document.getElementById("buttonReset").disabled = true;
            document.getElementById("buttonStart").disabled = false;
            document.getElementById("setTimer").disabled = false;
            document.getElementById("setBreak").disabled = false;
            document.getElementById("setIntervals").disabled = false;
        } else {
            intervals = 0
            clearInterval(runBreak)
            checkTimerOrBreak = 0;
            setTimer = "Set Minutes"
            setBreak = "Set Minutes of Break"
            document.getElementById("labelTimer").innerHTML = "00:00";
            document.getElementById("buttonReset").disabled = true;
            document.getElementById("buttonStart").disabled = false;
            document.getElementById("setTimer").disabled = false;
            document.getElementById("setBreak").disabled = false;
            document.getElementById("setIntervals").disabled = false;
        }
    }
    
    function enableStartButton() {
        if (setTimer != "none") {
            document.getElementById("buttonStart").disabled = false;
        }
    }
    // / setTimer = new Date(today.getMonth(), today.getDate(), today.getFullYear(), today.getHours(), parseInt(timer), today.getSeconds()).getMinutes();
    /**
     * nilai awal 1.00
     * nilai detik 59
     * kurangi hingga sampai 0
     * dari 0, menit berkurang 1 dan detik dimulai dari 59
     * detik 0 dan menit 0, jalankan break, menit = 1, detik = 59
     * dari 0, menit berkurang 1 dan detik dimulai dari 59
     * detik 0 dan menit 0, jalankan timer, menit = 1, detik = 59
     */
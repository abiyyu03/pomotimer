let intervals = 0;
let checkTimerOrBreak = 0;
//for check active function
// let running = false;
function timer() 
{
    let setTimer = parseInt(document.getElementById("setTimer").value);
    let audioBreak = document.getElementById("audioBreak");
    audioBreak.src = "alarm/break.m4a"
    //   running = !running;
    document.getElementById("title").innerHTML = "Focus - Pomotimer ";
    document.getElementById("titleText").innerHTML = "Yuk fokus bekerja..";
    document.getElementById("titleHeader").className = "card-header bg-primary";
    document.getElementById("buttonStart").disabled = true;
    document.getElementById("buttonReset").disabled = false;
    document.getElementById("alarmBreak").disabled = true;
    document.getElementById("alarmTimer").disabled = true;
    document.getElementById("setTimer").disabled = true;
    document.getElementById("setBreak").disabled = true;
    document.getElementById("setIntervals").disabled = true;
    document.getElementById("labelTimer").innerHTML = setTimer + " : " + "00";
    
    checkTimerOrBreak+=1;

    //validation 
    // if(document.getElementById("alarmBreak").value == "none" || 
    //     document.getElementById("alarmTimer").value == "none" ||  
    //     document.getElementById("setTimer").value == "none" || 
    //     document.getElementById("setBreak").value== "none" ||  
    //     document.getElementById("setIntervals").value == "none")
    // {
    //     alert('Tidak boleh ada field yang kosong');
    //     window.location.href = "index.html";
    // }

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
    }, 200);
}
function breakTimer() 
{
    let setBreak = parseInt(document.getElementById("setBreak").value);
    let setIntervals = parseInt(document.getElementById("setIntervals").value);
    let audioTimer = document.getElementById("audioTimer");
    audioTimer.src = "alarm/alarm.mp3";
    //   running = !running;
    document.getElementById("title").innerHTML = "Break - Pomotimer ";
    document.getElementById("titleText").innerHTML = "Rileks dulu kawan..";
    document.getElementById("titleHeader").className = "card-header bg-secondary";
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
                // alert(
                //     "SELAMAT, KAMU TELAH MENJALANKAN TEKNIK POMODORO HINGGA TUNTAS. JANGAN LUPA DI EVALUASI YAA !"
                //     );
                    document.getElementById("buttonModal").click();
                    clearTimeout(runBreak);
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
        if(checkTimerOrBreak == 1 || checkTimerOrBreak % 2 != 0)
        {
            intervals = 0;
            checkTimerOrBreak = 0;
            clearInterval(runTimer);
            document.getElementById("labelTimer").innerHTML = "00:00";
            setTimer = "Set Minutes";
            setBreak = "Set Minutes of Break";
            document.getElementById("titleText").innerHTML = "Pomotimer Setup";
            document.getElementById("titleHeader").className = "card-header bg-success";
            document.getElementById("buttonReset").disabled = true;
            document.getElementById("buttonStart").disabled = false;
            document.getElementById("alarmBreak").disabled = false;
            document.getElementById("alarmTimer").disabled = false;
            document.getElementById("setTimer").disabled = false;
            document.getElementById("setBreak").disabled = false;
            document.getElementById("setIntervals").disabled = false;
        } else if(checkTimerOrBreak % 2 == 0) {
            intervals = 0
            clearInterval(runBreak)
            checkTimerOrBreak = 0;
            setTimer = "Set Minutes"
            setBreak = "Set Minutes of Break"
            document.getElementById("titleText").innerHTML = "Pomotimer Setup";
            document.getElementById("titleHeader").className = "card-header bg-success";
            document.getElementById("labelTimer").innerHTML = "00:00";
            document.getElementById("buttonReset").disabled = true;
            document.getElementById("buttonStart").disabled = false;
            document.getElementById("alarmBreak").disabled = false;
            document.getElementById("alarmTimer").disabled = false;
            document.getElementById("setTimer").disabled = false;
            document.getElementById("setBreak").disabled = false;
            document.getElementById("setIntervals").disabled = false;
        }
    }
    
    function enableStartButton() {
        if (setTimer != "none" ) {
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
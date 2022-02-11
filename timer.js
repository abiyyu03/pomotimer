let intervals = 0;
//for check active function
// let running = false;
function timer() 
{
    let setTimer = parseInt(document.getElementById("setTimer").value);
    let alarm = document.getElementById("alarm");
    //   running = !running;
    document.getElementById("titleHeader").class = "bg-primary";
    document.getElementById("buttonStart").disabled = true;
    document.getElementById("buttonReset").disabled = false;
    document.getElementById("setTimer").disabled = true;
    document.getElementById("setBreak").disabled = true;
    document.getElementById("setIntervals").disabled = true;
    document.getElementById("labelTimer").innerHTML = setTimer + " : " + "00";
    
    setTimer -= 1;
    seconds = 60;
    
    runTimer = setInterval(function () {
        seconds--;
        if (setTimer === 0 && seconds === -1) {
            clearInterval(runTimer);
            alarm.play();
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
    //   running = !running;
    document.getElementById("labelTimer").innerHTML = setBreak + " : " + "00";
    seconds = 59;
    setBreak -= 1;
    
    runBreak = setInterval(function () {
        seconds--;
        if (setBreak === 0 && seconds === 0) {
            intervals += 1;
            if (intervals === setIntervals) {
                alert(
                    "SELAMAT, KAMU TELAH MENJALANKAN TEKNIK POMODORO HINGGA TUNTAS. JANGAN LUPA DI EVALUASI YAA !"
                    );
                    clearInterval(runBreak);
                    return;
                } else {
                    alarm.play();
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
        clearInterval(runTimer);
        clearInterval(runBreak);
        intervals = 0;
        document.getElementById("labelTimer").innerHTML = "00:00";
        setTimer = "Set Minutes";
        setBreak = "Set Minutes of Break";
        document.getElementById("buttonReset").disabled = true;
        document.getElementById("buttonStart").disabled = false;
        document.getElementById("setTimer").disabled = false;
        document.getElementById("setBreak").disabled = false;
    }
    
    function enableStartButton() {
        if (setTimer != "none") {
            document.getElementById("buttonStart").disabled = false;
        }
    }
    // / setTimer = new Date(today.getMonth(), today.getDate(), today.getFullYear(), today.getHours(), parseInt(timer), today.getSeconds()).getMinutes();
    
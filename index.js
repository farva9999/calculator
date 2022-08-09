//set button listeners

let buttonsAll = document.querySelectorAll('.calc-button');
buttonsAll.forEach(element => {
    element.addEventListener('click', addToRunningLog);
});

function add(a,b){
    return a+b;
}

function addToRunningLog(){
    //see if it's a number and convert to int
    let number = 0;
    let currentRunningLog = document.getElementById('runningLog');

    if (parseInt(this.id)) {
        number = parseInt((this.id));
        currentRunningLog.textContent = currentRunningLog.textContent + number;
    } else if (this.id == 'clear') {
        currentRunningLog.textContent = "";
    }else {
        number = (this.id);
    }
    



}
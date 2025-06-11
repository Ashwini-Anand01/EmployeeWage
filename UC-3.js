function Check_Employee(){
    let attendance=Math.floor(Math.random()*2);
    let present=0
    if(attendance==1){
        present=1;
    }
    return present;
}
let present=Check_Employee();
 console.log(present);
//uc-2
function worktimes(){
    let time=Math.floor(Math.random()*3);
    let workertime=0
    if(time==1){
        workertime=1;
    }
    else if(time==2){
        workertime=2;
    }
    return workertime;
}
//uc-3
function DailyWorkHours(){
    let WorkerTypes=worktimes();
    let hour=0
    switch (WorkerTypes) {
        case 0:
            hour=0
            break;
        case 1:
            hour=4
            break;
        case 2:
            hour=8
            break;
    }
    return hour
}
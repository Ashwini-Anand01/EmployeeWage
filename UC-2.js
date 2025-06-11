//uc-1
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
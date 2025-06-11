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
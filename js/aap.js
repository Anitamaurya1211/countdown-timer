
const endDate = "25 May 2023 10:00 PM"
document.getElementById

document.getElementById("end-date").innerText = endDate;
const inputs =document.querySelectorAll("input")

function clock(){
    const end =new Date(endDate);
    const now =new Date();
    const diff= (end - now) /1000;

    if(diff < 0) return;
    //console.log(end);
    //console.log(now);
    //console.log(diff);
     //convert into days
    inputs[0].value=Math.floor(diff / 3600 / 24);
     //convert into hours
    inputs[1].value=Math.floor(diff / 3600 % 24);
    //convert into Minutes
    inputs[2].value=Math.floor(diff/60) % 60;
    //convert in seconds
    inputs[3].value =Math.floor(diff) % 60;


}

//initial call
clock();
// 
//  1 day = 24hrs
//  1 hr = 60mins
//  60 min=3600 sec

setInterval(
    () =>{
        clock()
    },
    1000
)
    

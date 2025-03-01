// text jodi kono html tag er moddhe thake sei text ke dhorar function
function getInnerTextById(id){
    const value = document.getElementById(id).innerText;
    const convertValue = parseInt(value);
    return convertValue;
}

function setInnerTextByIDandValue(id,value){
    document.getElementById(id).innerText = value;
}

// time print korar function

function showTime(){
    let time = new Date();
    let hours = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let getTime = `${hours}:${min}:${sec}`;
    return getTime;
}
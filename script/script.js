document.getElementById('ShopEase-btn').addEventListener('click',function(e){
    e.preventDefault();
    alert('Board updated Successfully')
    const taskValue = getInnerTextById('task-id');
    const bordValue = getInnerTextById('board-id');
    const sub = taskValue - 1;
    const sum = bordValue + 1;
    setInnerTextByIDandValue('task-id',sub);
    setInnerTextByIDandValue('board-id',sum);
    document.getElementById("ShopEase-btn").disabled = true;    
});

document.getElementById('CloudSync-btn').addEventListener('click',function(e){
    e.preventDefault();
    alert('Board updated Successfully')
    const taskValue = getInnerTextById('task-id');
    const bordValue = getInnerTextById('board-id');
    const sub = taskValue - 1;
    const sum = bordValue + 1;
    setInnerTextByIDandValue('task-id',sub);
    setInnerTextByIDandValue('board-id',sum);
    document.getElementById("CloudSync-btn").disabled = true;    
});

document.getElementById('SwiftPay-btn').addEventListener('click',function(e){
    e.preventDefault();
    alert('Board updated Successfully')
    const taskValue = getInnerTextById('task-id');
    const bordValue = getInnerTextById('board-id');
    const sub = taskValue - 1;
    const sum = bordValue + 1;
    setInnerTextByIDandValue('task-id',sub);
    setInnerTextByIDandValue('board-id',sum);
    document.getElementById("SwiftPay-btn").disabled = true;    
});
document.getElementById('Meta-btn').addEventListener('click',function(e){
    e.preventDefault();
    alert('Board updated Successfully')
    const taskValue = getInnerTextById('task-id');
    const bordValue = getInnerTextById('board-id');
    const sub = taskValue - 1;
    const sum = bordValue + 1;
    setInnerTextByIDandValue('task-id',sub);
    setInnerTextByIDandValue('board-id',sum);
    document.getElementById("Meta-btn").disabled = true;    
});
document.getElementById('Google-btn').addEventListener('click',function(e){
    e.preventDefault();
    alert('Board updated Successfully')
    const taskValue = getInnerTextById('task-id');
    const bordValue = getInnerTextById('board-id');
    const sub = taskValue - 1;
    const sum = bordValue + 1;
    setInnerTextByIDandValue('task-id',sub);
    setInnerTextByIDandValue('board-id',sum);
    document.getElementById("Google-btn").disabled = true;    
});
document.getElementById('Glassdoar-btn').addEventListener('click',function(e){
    e.preventDefault();
    alert('Board updated Successfully')
    const taskValue = getInnerTextById('task-id');
    const bordValue = getInnerTextById('board-id');
    const sub = taskValue - 1;
    const sum = bordValue + 1;
    setInnerTextByIDandValue('task-id',sub);
    setInnerTextByIDandValue('board-id',sum);
    document.getElementById("Glassdoar-btn").disabled = true;    
});

// random color

function genColorFn() {
    return '#' + Math.floor(Math.random()*16777215).toString(16);
}

document.getElementById('random-color').addEventListener('click',function(){
    document.body.style.backgroundColor = genColorFn();
});
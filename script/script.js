document.getElementById('ShopEase-btn').addEventListener('click',function(e){
    e.preventDefault();
    alert('Board updated Successfully')
    const taskValue = getInnerTextById('task-id');
    const bordValue = getInnerTextById('board-id');
    const sub = taskValue - 1;
    const sum = bordValue + 1;
    setInnerTextByIDandValue('task-id',sub);
    setInnerTextByIDandValue('board-id',sum);
});
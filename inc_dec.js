const inc = document.getElementById("increment");
const input = document.getElementById("input");
const dec= document.getElementById("decrement");

let num = 0;

function updateNum(val){
    num += val;
    input.textContent = num;
}

inc.addEventListener('click',()=>{
    updateNum(1);
});

dec.addEventListener('click',()=>{
    updateNum(-1);
});

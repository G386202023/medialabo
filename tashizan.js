b = document.querySelector('button#calc');
b.addEventListener('click', greeting);
function greeting(){
    let i =document.querySelector('input[name="left"]');
    let a =document.querySelector('input[name="right"]');
    hidari = i.value;
    migi = a.value;
    let n = Number(hidari);
    let m = Number(migi);
    keisan = n + m;
    let span =document.querySelector('span#answer');
    span.textContent = keisan;
  }
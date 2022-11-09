document.getElementById("title").addEventListener("click",changeColor);
function changeColor(){
    let n = "#"+(Math.random() * 0xfffff * 1000000).toString(16).slice(0,6);
    document.getElementById("title").style.textShadow= "0px 8px 1px"+n;
}
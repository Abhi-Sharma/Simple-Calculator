let btn = document.querySelectorAll(".btn");
let res = document.querySelector(".result")
console.log(btn[0]);

btn[0].addEventListener("click",()=>{
    location.reload();
});


btn[1].addEventListener("click",()=>{
    res.innerHTML=res.innerHTML.slice(0,-1);
});

btn[2].addEventListener("click",()=>{
    location.reload();
});

btn[3].addEventListener("click",()=>{
    res.innerHTML += "/";
});

btn[4].addEventListener("click",()=>{
    res.innerHTML += "7";
});

btn[5].addEventListener("click",()=>{
    res.innerHTML += "8";
});

btn[6].addEventListener("click",()=>{
    res.innerHTML += "9";
});

btn[7].addEventListener("click",()=>{
    res.innerHTML += "*";
});

btn[8].addEventListener("click",()=>{
    res.innerHTML += "4";
});

btn[9].addEventListener("click",()=>{
    res.innerHTML += "5";
});

btn[10].addEventListener("click",()=>{
    res.innerHTML += "6";
});

btn[11].addEventListener("click",()=>{
    res.innerHTML += "-";
});

btn[12].addEventListener("click",()=>{
    res.innerHTML += "1";
});

btn[13].addEventListener("click",()=>{
    res.innerHTML += "2";
});

btn[14].addEventListener("click",()=>{
    res.innerHTML += "3";
});

btn[15].addEventListener("click",()=>{
    res.innerHTML += "+";
});

btn[16].addEventListener("click",()=>{
    res.innerHTML += "%";
});

btn[17].addEventListener("click",()=>{
    res.innerHTML += "0";
});

btn[18].addEventListener("click",()=>{
    res.innerHTML += ".";
});

btn[19].addEventListener("click",()=>{
    res.innerHTML=eval(res.innerHTML);
});
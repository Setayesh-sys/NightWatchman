const body=document.getElementById("body");
const torch=document.getElementById("torch");
const btn=document.getElementById("btn");

document.addEventListener("mousemove",(event)=>{
    console.log(event.clientX,event.clientY);
    let x=event.clientX;
    let y=event.clientY;
    torch.style.left=x-75+"px";
    torch.style.top=y-75+"px";

});

btn.addEventListener("click",(event)=>{
    torch.style.boxShadow="none";
    torch.style.transitionDuration=`5s`;
    btn.style.display="none";
    torch.style.border="none";
})
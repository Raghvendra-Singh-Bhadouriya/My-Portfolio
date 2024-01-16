let typed = new Typed(".frontend",{
    strings:["Frontend Developer", "Programmer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true,
});


function downloadResume(){
    var link = document.createElement('a');
    link.href="pictures/Raghvendra.pdf";
    link.download='pictures/Raghvendra.pdf';
    link.click();
}

let menuBar=document.getElementById("menu");
let sideBar=document.getElementById("side-bar");
menuBar.addEventListener("click",function(){
    sideBar.style.display = sideBar.style.display === "none" ? "block" : "none";
    
    
})



/*var sidemenu = document.getElementById("sidemenu")
function openmenu() {
     sidemenu.style.right = "0";
}
function closemenu() {
     sidemenu.style.right = "-200px";
}*/
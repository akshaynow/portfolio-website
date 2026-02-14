/* =========================
   RUN AFTER PAGE READY
========================= */

document.addEventListener("DOMContentLoaded", function(){

/* =========================
   DARK MODE DEFAULT (FIRST)
========================= */

const toggle=document.getElementById("themeToggle");

if(localStorage.getItem("theme")==="light"){
document.body.classList.remove("dark");
}else{
document.body.classList.add("dark");
}

if(toggle){
toggle.onclick=()=>{
document.body.classList.toggle("dark");
localStorage.setItem(
"theme",
document.body.classList.contains("dark")?"dark":"light"
);
};
}


/* =========================
   ROLE ROTATION
========================= */

const roleText=document.querySelector(".role-text");

if(roleText){
const roles=[
"IT Infrastructure Specialist",
"Network Administrator",
"System Support Engineer"
];

let i=0;

setInterval(()=>{
i=(i+1)%roles.length;
roleText.textContent=roles[i];
},2600);
}


/* =========================
   PHOTO POPUP
========================= */

const profileBtn=document.getElementById("profileBtn");
const photoModal=document.getElementById("photoModal");

if(profileBtn && photoModal){
profileBtn.onclick=()=>photoModal.classList.add("show");
photoModal.onclick=()=>photoModal.classList.remove("show");
}


/* =========================
   RESUME POPUP
========================= */

const resumeBtn=document.getElementById("resumeBtn");
const resumeModal=document.getElementById("resumeModal");

if(resumeBtn && resumeModal){
resumeBtn.onclick=()=>resumeModal.classList.add("show");
resumeModal.onclick=()=>resumeModal.classList.remove("show");
}


/* =========================
   SCROLL PROGRESS BAR
========================= */

const progress=document.querySelector(".progress");

window.addEventListener("scroll",()=>{
if(!progress) return;

const scrollTop=document.documentElement.scrollTop;
const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

progress.style.width=(scrollTop/height)*100+"%";
});


/* =========================
   REVEAL ANIMATION (FIXED)
========================= */

const reveals=document.querySelectorAll(".reveal");

function revealNow(){
reveals.forEach(el=>{
if(el.getBoundingClientRect().top < window.innerHeight-80){
el.classList.add("visible");
}
});
}

window.addEventListener("scroll",revealNow);
revealNow(); // IMPORTANT: run once on page load


});

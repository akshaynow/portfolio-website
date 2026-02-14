/* LOADER */
window.onload=()=>{
document.getElementById("loader").style.display="none";
};

/* ROLE ROTATE */
const roles=[
"IT Infrastructure Specialist",
"Network Administrator",
"System Support Engineer"
];
let i=0;
setInterval(()=>{
i=(i+1)%roles.length;
document.querySelector(".role-text").textContent=roles[i];
},2600);

/* PHOTO */
profileBtn.onclick=()=>photoModal.classList.add("show");
photoModal.onclick=()=>photoModal.classList.remove("show");

/* RESUME */
resumeBtn.onclick=()=>resumeModal.classList.add("show");
resumeModal.onclick=()=>resumeModal.classList.remove("show");

/* SCROLL PROGRESS */
window.addEventListener("scroll",()=>{
const s=document.documentElement.scrollTop;
const h=document.documentElement.scrollHeight-document.documentElement.clientHeight;
document.querySelector(".progress").style.width=(s/h)*100+"%";
});

/* REVEAL */
document.addEventListener("scroll",()=>{
document.querySelectorAll(".reveal").forEach(el=>{
if(el.getBoundingClientRect().top<window.innerHeight-100){
el.classList.add("visible");
}
});
});

/* DARK MODE */
const toggle=document.getElementById("themeToggle");
toggle.onclick=()=>{
document.body.classList.toggle("dark");
localStorage.setItem("theme",document.body.classList.contains("dark"));
};
if(localStorage.getItem("theme")==="true"){
document.body.classList.add("dark");
}

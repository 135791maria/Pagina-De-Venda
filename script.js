let show = true;
const Content = document.querySelector(".content") ;
const menuToggle = document.querySelector(".menu-toggle");





menuToggle.addEventListener("click", () =>{



Content.classList.toggle("on", show);
show  = !show;

});

const sidebarToggle = document.querySelector(".navbar-toggler-icon");
sidebarToggle.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed")
});
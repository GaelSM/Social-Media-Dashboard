const circle = document.getElementById("circle")
window.addEventListener("load", initialScheme())
document.querySelector("button").addEventListener("click", () => setScheme())

function setScheme (){
  if(localStorage.getItem("scheme") === "dark"){
    document.documentElement.setAttribute("scheme", "white")
    localStorage.setItem("scheme", "white")
    circle.classList.remove("active")
  }
  else{
    document.documentElement.setAttribute("scheme", "dark")
    localStorage.setItem("scheme", "dark")
    circle.classList.add("active")
  }
}

function initialScheme(){
  if(localStorage.length < 1){
    localStorage.setItem("scheme", "white")
    document.documentElement.setAttribute("scheme", "white")
  }else{
    let scheme = localStorage.getItem("scheme")
    document.documentElement.setAttribute("scheme", scheme)
    if(scheme === "dark") circle.classList.add("active")
    else circle.classList.remove("active")
  }
}

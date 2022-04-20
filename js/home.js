window.onload = function () {
  var user = localStorage.getItem("user");
  if (user) {
    document.querySelector("#login").style.display = "none";
    document.querySelector("#register").innerHTML = "Logout";
    document.querySelector("#register").classList.add("logout");
    document.querySelector("#register").href = "./login.html";
    document.querySelector(".hero-desc-user").innerHTML = user;
  } else {
    window.location.href = "./login.html";
  }

  document.querySelector(".logout").onclick = function () {
    localStorage.removeItem("user");
  };
};

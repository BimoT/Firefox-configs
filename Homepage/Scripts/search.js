function toggleEngine() {

  var gSearch = document.getElementById("gSearch");
  var dSearch = document.getElementById("dSearch");
  var sSearch = document.getElementById("sSearch");
  var logo = document.getElementById("engineLogo").src;
  localStorage.setItem('preferredEngine', logo);
  // DuckDuckGo -> Google -> Startpage
  if (logo.includes("DDGlogo.svg")) {
    document.getElementById("engineLogo").src = "Icons/Googlelogo.svg";
    gSearch.style.display = "block";
    dSearch.style.display = "none";
    sSearch.style.display = "none";
  } else if (logo.includes("Googlelogo.svg")){
    document.getElementById("engineLogo").src = "Icons/Startpagelogo.svg";
    sSearch.style.display = "block";
    dSearch.style.display = "none";
    gSearch.style.display = "none";
  } else {
    document.getElementById("engineLogo").src = "Icons/DDGlogo.svg";
    dSearch.style.display = "block";
    gSearch.style.display = "none";
    sSearch.style.display = "none";
  }

  document.getElementById("textField").reset();
}

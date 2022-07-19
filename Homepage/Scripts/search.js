function toggleEngine() {
  
  var mySearch = document.getElementById("mySearch");
  var myInput = document.getElementById("myInput");
  var textField = document.getElementById("textField");

  var logo = document.getElementById("engineLogo").src;
  localStorage.setItem('preferredEngine', logo);
  // DuckDuckGo -> Startpage

  if (logo.includes("DDGlogo.svg"))
  {
    document.getElementById("engineLogo").src = "Icons/Googlelogo.svg";
    textField.setAttribute("action", "https://google.com/search");
    myInput.setAttribute("placeholder", "Search with Google");
  } else
  {
    document.getElementById("engineLogo").src = "Icons/DDGlogo.svg";
    textField.setAttribute("action", "https://duckduckgo.com/");
    myInput.setAttribute("placeholder", "Search with DuckDuckGo");
  }
}

window.onload = function()
    {
        var gSearch = document.getElementById("gSearch");
        var dSearch = document.getElementById("dSearch");
        var sSearch = document.getElementById("sSearch");

        let storedLogo = localStorage.getItem('preferredEngine');
        let currentLogo;
        // DuckDuckGo -> Google -> Startpage

        if (!storedLogo)
        {
          currentLogo = document.getElementById("engineLogo").src;
          localStorage.setItem('preferredEngine', currentLogo);
        } else
        {
          if (storedLogo.includes("DDGlogo.svg"))
          {
            document.getElementById("engineLogo").src = "Icons/Googlelogo.svg";
            gSearch.style.display = "block";
            dSearch.style.display = "none";
            sSearch.style.display = "none";
          } else if (storedLogo.includes("Googlelogo.svg")) 
          {
            document.getElementById("engineLogo").src = "Icons/Startpagelogo.svg";
            sSearch.style.display = "block";
            gSearch.style.display = "none";
            dSearch.style.display = "none";
          } else
          {
            document.getElementById("engineLogo").src = "Icons/DDGlogo.svg";
            dSearch.style.display = "block";
            gSearch.style.display = "none";
            sSearch.style.display = "none";
          }
        }
    }

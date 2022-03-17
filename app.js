    // selectar inputen med classen inputBOI
    let theGodofNumbers = document.querySelector(".inputBOI");
    // selectar h1 text med classen number
    let daINPUT = document.querySelector(".number");
    // gör en eventlistener som lyssnar för en change med en funktion
    theGodofNumbers.addEventListener("change", () => {

        if
        // om det va true och hör en change blir de false och lägger till klassen hidden
        (theGodofNumbers.getAttribute("data-active") === "true")
        {
            // gör det till false
            theGodofNumbers.setAttribute("data-active", "false");
            // ger den klassen hidden
            daINPUT.classList.add("hidden");


        }
        else
        {
            // gör det till true
            theGodofNumbers.setAttribute("data-active", "true");
            // tar bort classen hidden
            daINPUT.classList.remove("hidden");

        }
    }
    )       

//let currentPage = window.location.pathname.substring("/season".length, "/season".length + 1);

//localStorage.setItem(`answer${currentPage}`, Math.PI);
//let thingy = localStorage.getItem(`answer${currentPage}`);
//console.log(thingy);
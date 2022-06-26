var DATA_CONVERT_ATTRIBUTE = "data-convert";
var CONVERT_C_F = "cf";
var CONVERT_F_C = "fc";
var DATA_THEME_ATTRIBUTE = "data-theme";
var LIGHT_THEME = "light";
var DARK_THEME = "dark";
var outputValueLabel = document.getElementById("lblOutputValue");
var txtInputValue = document.getElementById("txtInputValue");
var remarksLabel = document.getElementById("lblRemarks");
var convert = function() {
    var input = parseFloat(txtInputValue.value);
    outputValueLabel.innerHTML = "-";
    if(txtInputValue.value != "") {
        // Celsius to Fahrenheit
        var output = 0;
        var outputValueInCelsius = 0;
        if(document.querySelector(`[${DATA_CONVERT_ATTRIBUTE}]`).getAttribute(DATA_CONVERT_ATTRIBUTE) == CONVERT_C_F) {
            outputValueInCelsius = input.toFixed(0);
            output = (input * 9 / 5) + 32;
        } else {
            output = (input - 32) * 5 / 9;
            outputValueInCelsius = output.toFixed(0);
        }
        outputValueLabel.innerHTML = output.toFixed(2);
        remarksLabel.innerText = "";
        if(outputValueInCelsius == 100) {
            remarksLabel.innerText = "Boiling point of water";
        } else if(outputValueInCelsius <= 0) {
            remarksLabel.innerText = "Brrr. That's cold"
        } else if(outputValueInCelsius >= 50) {
            remarksLabel.innerText = "That's hot"
        }
    }
}
txtInputValue.addEventListener("keyup", convert);
txtInputValue.addEventListener("change", convert);
document.getElementById("btnConvert").addEventListener("click", function() {
    document.querySelector(`[${DATA_CONVERT_ATTRIBUTE}]`).setAttribute(DATA_CONVERT_ATTRIBUTE, 
        document.querySelector(`[${DATA_CONVERT_ATTRIBUTE}]`).getAttribute(DATA_CONVERT_ATTRIBUTE) == CONVERT_C_F ? CONVERT_F_C : CONVERT_C_F
    );
    var keyupEvent = new Event('keyup');
    document.getElementById("txtInputValue").dispatchEvent(keyupEvent)
})
document.getElementById("btnThemeToggle").addEventListener("click", function() {
    document.querySelector(`[${DATA_THEME_ATTRIBUTE}]`).setAttribute(DATA_THEME_ATTRIBUTE, 
        document.querySelector(`[${DATA_THEME_ATTRIBUTE}]`).getAttribute(DATA_THEME_ATTRIBUTE) == LIGHT_THEME ? DARK_THEME : LIGHT_THEME
    );
    localStorage.setItem("theme", document.querySelector(`[${DATA_THEME_ATTRIBUTE}]`).getAttribute(DATA_THEME_ATTRIBUTE));
})
document.querySelectorAll("[data-mode]").forEach(el => {
    el.addEventListener("click", function() {
        document.querySelectorAll("[data-mode]").forEach(el2 => {
            el2.classList.remove("active");
        })
        el.classList.add("active");
        var mode = this.getAttribute("data-mode");
        if(mode == "form") {
            document.querySelector(".converter").style.display = "block";
            document.querySelector(".chatbot").style.display = "none";
        } else {
            if(navigator.onLine) {
                document.querySelector(".chatbot").style.display = "block";
                document.querySelector(".offline").style.display = "none";
            } else {
                document.querySelector(".offline").style.display = "block";
                document.querySelector(".chatbot").style.display = "none";
            }
            document.querySelector(".converter").style.display = "none";
        }
    })
})

var theme = localStorage.getItem("theme");
if(theme != null) {
    document.querySelector(`[${DATA_THEME_ATTRIBUTE}]`).setAttribute(DATA_THEME_ATTRIBUTE, theme);
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', {
        scope: '.' 
    }).then(function (registration) {
        
    }, function (err) {

    });

}
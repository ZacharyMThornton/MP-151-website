const primary = document.getElementById("mainColor");
const secondary = document.getElementById("secondColor");
const tertiary = document.getElementById("thirdColor");

const text1 = document.getElementById("textColor1");
const text2 = document.getElementById("textColor2");

const submit = document.getElementById("submit");
const reset = document.getElementById("reset");
var r = document.querySelector(':root');

//gets the hard coded css value of the root sytles
let styles = getComputedStyle(r);
const defaultPrimary = styles.getPropertyValue("--primary").split("(")[1].slice(0,-1);
const defaultSecondary = styles.getPropertyValue("--secondary").split("(")[1].slice(0,-1);
const defaultTertiary = styles.getPropertyValue("--tertiary").split("(")[1].slice(0,-1);

const defaultPrimaryText = styles.getPropertyValue("--Ptext").split("(")[1].slice(0,-1);
const defaultSecondaryText = styles.getPropertyValue("--Stext").split("(")[1].slice(0,-1);
//.split("(")[1] returns the value number, number, number) 
//use .slice(0,-1) to get rid of the ")" at the end of the string

// apply the colors every time there is a color change
function applyColors() {
    //let primaryColor = localStorage.getItem("primary") || "12,12,12";
    let primaryColor = localStorage.getItem("primary") || defaultPrimary;
    let secondaryColor = localStorage.getItem("secondary") || defaultSecondary;
    let tertiaryColor = localStorage.getItem("tertiary") || defaultTertiary;

    let primaryText = localStorage.getItem("text1") || defaultPrimaryText;
    let secondaryText = localStorage.getItem("text2") || defaultSecondaryText;


    r.style.setProperty("--primary", `rgb(${primaryColor})`);
    r.style.setProperty("--secondary", `rgb(${secondaryColor})`);
    r.style.setProperty("--tertiary", `rgb(${tertiaryColor})`);
    r.style.setProperty("--Ptext", `rgb(${primaryText})`);
    r.style.setProperty("--Stext", `rgb(${secondaryText})`);


    primary.placeholder = localStorage.getItem("primary") || defaultPrimary;
    secondary.placeholder = localStorage.getItem("secondary") || defaultSecondary;
    tertiary.placeholder =  localStorage.getItem("tertiary") || defaultTertiary;

    text1.placeholder = localStorage.getItem("text1") || defaultPrimaryText;
    text2.placeholder = localStorage.getItem("text2") || defaultSecondaryText;
}

// submit the colors chosen to change webpage
submit.addEventListener("click", function () {
    location.reload();
    if (primary.value != ""){
        localStorage.setItem("primary", primary.value);
    }
    if (secondary.value != ""){
        localStorage.setItem("secondary", secondary.value);
    }
    if (tertiary.value != ""){
        localStorage.setItem("tertiary", tertiary.value);
    }
    if (text1.value != "") {
        localStorage.setItem("text1", text1.value);
    }
    if (text2.value != "") {
        localStorage.setItem("text2", text2.value);
    }
})

// go back to original color scheme
function set_default_color(){
    localStorage.setItem("primary", defaultPrimary)
    localStorage.setItem("secondary", defaultSecondary);
    localStorage.setItem("tertiary", defaultTertiary);
    localStorage.setItem("text1", defaultPrimaryText);
    localStorage.setItem("text2", defaultSecondaryText);
    applyColors();
}

// go back to original color scheme when pressing reset
reset.addEventListener("click", function() {
    location.reload();
    set_default_color();
})

//apply the colors on the webpage upon load
applyColors();

//log the current colors for user 
console.log(localStorage.getItem("primary"));
console.log(localStorage.getItem("secondary"));
console.log(localStorage.getItem("tertiary"));
console.log(localStorage.getItem("text1"));
console.log(localStorage.getItem("text2"));

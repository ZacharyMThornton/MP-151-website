var r = document.querySelector(':root');

//gets the hard coded css value of the root sytles
let styles = getComputedStyle(r);
const defaultPrimary = styles.getPropertyValue("--primary").split("(")[1].slice(0,-1);
const defaultSecondary = styles.getPropertyValue("--secondary").split("(")[1].slice(0,-1);
const defaultTertiary = styles.getPropertyValue("--tertiary").split("(")[1].slice(0,-1);

const defaultPrimaryText = styles.getPropertyValue("--Ptext").split("(")[1].slice(0,-1);
const defaultSecondaryText = styles.getPropertyValue("--Stext").split("(")[1].slice(0,-1);
//.split("(")[1] returns the value number, number, number) 
//use .slice(0,-1) to get rid of the ")" at the end of the string*/

// apply the colors every time there is a color change
function applyColors() {
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
}

// go back to original color scheme
function set_default_color(){
    localStorage.setItem("primary", defaultPrimary)
    localStorage.setItem("secondary", defaultSecondary);
    localStorage.setItem("tertiary", defaultTertiary);
    localStorage.setItem("text1", defaultPrimaryText);
    localStorage.setItem("text2", defaultSecondaryText);
    applyColors();
}

applyColors();

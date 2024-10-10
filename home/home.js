//input fields for colors
const primary = document.getElementById("mainColor");
const secondary = document.getElementById("secondColor");
const tertiary = document.getElementById("thirdColor");

const text1 = document.getElementById("textColor1");
const text2 = document.getElementById("textColor2");

const submit = document.getElementById("submit");
const reset = document.getElementById("reset");

primary.placeholder = localStorage.getItem("primary") || defaultPrimary;
secondary.placeholder = localStorage.getItem("secondary") || defaultSecondary;
tertiary.placeholder =  localStorage.getItem("tertiary") || defaultTertiary;

text1.placeholder = localStorage.getItem("text1") || defaultPrimaryText;
text2.placeholder = localStorage.getItem("text2") || defaultSecondaryText;


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

// go back to original color scheme when pressing reset
reset.addEventListener("click", function() {
    location.reload();
    set_default_color();
})

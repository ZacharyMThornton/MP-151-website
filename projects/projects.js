const links = ["../home/home.html", "../lightningTalks/lightningTalks.html", "../maintenance/maintenance.html"];

const linkButtons = document.getElementsByClassName("link");

for (let i=0; i <= linkButtons.length - 1; i++){
    linkButtons[i].addEventListener("click", () => {
        window.location.replace(links[i]);
    })
}
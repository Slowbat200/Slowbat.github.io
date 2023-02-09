var docTitle = document.title;
window.addEventListener("blur", ()=>{
    document.title = "Vrať se prosím :(";
})
window.addEventListener("focus", ()=>{
    document.title = docTitle;
})
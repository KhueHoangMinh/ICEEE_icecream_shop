// js code for fade-out effect, function will be call in html files when navigate to different pages
function fadeOutEffect(link) {
    // get the "overlay" div generated when page load
    const overlay = document.getElementById("overlay")
    // set z-index to 2000 to cover every element of the page 
    overlay.style.zIndex = "2000"
    // change to black
    setTimeout(()=>{
        overlay.style.backgroundColor = "black"
    },100)
    setTimeout(()=>{
        if(link) location.href = link
    },300)
}

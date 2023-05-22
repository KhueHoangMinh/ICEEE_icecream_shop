// js code for fade-in effect when page load
function fadeInEffect() {
    // create div with id "overlay"
    const overlay = document.createElement("div")
    overlay.id = "overlay"
    overlay.style.position = "fixed"
    overlay.style.backgroundColor = "black"
    overlay.style.transition = "background-color 0.2s ease-in-out"
    overlay.style.zIndex = "2000"
    overlay.style.width = "100vw"
    overlay.style.height = "100vh"
    overlay.style.top = "0"
    overlay.style.left = "0"

    document.body.appendChild(overlay)

    // change to transparent and z-index to -1
    setTimeout(()=>{
        overlay.style.backgroundColor = "transparent"
    },100)
    setTimeout(()=>{
        overlay.style.zIndex = "-100"
    },300)
}
// generate div
window.onload = fadeInEffect()
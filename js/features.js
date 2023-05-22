// js code for animations at features.html page
const fea1 = document.getElementById("fea1")
const fea2 = document.getElementById("fea2")
const fea3 = document.getElementById("fea3")

const fea1Heading = fea1.getElementsByTagName("h1")[0]
const fea2Heading = fea2.getElementsByTagName("h1")[0]
const fea3Heading = fea3.getElementsByTagName("h1")[0]

fea1Heading.innerHTML = ""
fea1Heading.appendChild(document.createTextNode("Feature 1"))
fea1Heading.style.transition = "0.2s ease-in-out"
fea1Heading.style.transform = "rotateY(0deg)"

fea2Heading.innerHTML = ""
fea2Heading.appendChild(document.createTextNode("Feature 2"))
fea2Heading.style.transition = "0.2s ease-in-out"
fea2Heading.style.transform = "rotateY(0deg)"


fea3Heading.innerHTML = ""
fea3Heading.appendChild(document.createTextNode("Feature 3"))
fea3Heading.style.transition = "0.2s ease-in-out"
fea3Heading.style.transform = "rotateY(0deg)"

const feaContent = document.getElementById("feature-content")


// mouse hovers on buttons effects
fea1.addEventListener("mouseenter", () => {
    feaContent.style.left = "0vw"
    fea1Heading.style.transform = "rotateY(90deg)"
    setTimeout(()=>{
        fea1Heading.innerHTML = ""
        fea1Heading.appendChild(document.createTextNode("Banner animation"))
        fea1Heading.style.transform = "rotateY(0deg)"
    },200)
})

fea1.addEventListener("mouseleave", () => {
    fea1Heading.style.transform = "rotateY(-90deg)"
    setTimeout(()=>{
        fea1Heading.innerHTML = ""
        fea1Heading.appendChild(document.createTextNode("Feature 1"))
        fea1Heading.style.transform = "rotateY(0deg)"
    },200)
})

fea2.addEventListener("mouseenter", () => {
    feaContent.style.left = "-100vw"
    fea2Heading.style.transform = "rotateY(90deg)"
    setTimeout(()=>{
        fea2Heading.innerHTML = ""
        fea2Heading.appendChild(document.createTextNode("Page transition effect"))
        fea2Heading.style.transform = "rotateY(0deg)"
    },200)
})

fea2.addEventListener("mouseleave", () => {
    fea2Heading.style.transform = "rotateY(-90deg)"
    setTimeout(()=>{
        fea2Heading.innerHTML = ""
        fea2Heading.appendChild(document.createTextNode("Feature 2"))
        fea2Heading.style.transform = "rotateY(0deg)"
    },200)
})

fea3.addEventListener("mouseenter", () => {
    feaContent.style.left = "-200vw"
    fea3Heading.style.transform = "rotateY(90deg)"
    setTimeout(()=>{
        fea3Heading.innerHTML = ""
        fea3Heading.appendChild(document.createTextNode("Responsive nav bar"))
        fea3Heading.style.transform = "rotateY(0deg)"
    },300)
})

fea3.addEventListener("mouseleave", () => {
    fea3Heading.style.transform = "rotateY(-90deg)"
    setTimeout(()=>{
        fea3Heading.innerHTML = ""
        fea3Heading.appendChild(document.createTextNode("Feature 3"))
        fea3Heading.style.transform = "rotateY(0deg)"
    },300)
})


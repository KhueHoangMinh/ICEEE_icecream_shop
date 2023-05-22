// js code for banner animations and functions
const header = document.getElementById("header")
const main = document.getElementsByTagName("html")[0]

var currentImg = 0;
const bannerDir = "images/banner/"
const bannerImgs = ["banner1.jpg","banner2.jpg","banner3.jpg"]
const banner = document.getElementById("banner")
const bannerBg = document.getElementById("bg-banner-img")
const bannerImg = document.getElementById("banner-img")
const bannerSlogan = document.getElementById("slogans")
bannerBg.src = bannerDir + bannerImgs[currentImg]
bannerImg.src = bannerDir + bannerImgs[currentImg]


const introImgs = document.getElementById("intro-imgs")
const imgIndexes = document.getElementById("img-indexes")
const intros = ["https://static.wixstatic.com/media/83dd3c_802f17f659b64b7789c3215a66c2dfba~mv2_d_3744_5616_s_4_2.jpg/v1/crop/x_13,y_686,w_3718,h_4930/fill/w_198,h_266,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/CM_EWEB_SweetLife31%20copy.jpg"
                ,"https://static.wixstatic.com/media/83dd3c_21998ee4b0b0434fbf239cf78bc687a0~mv2_d_2048_1536_s_2.jpg/v1/fill/w_215,h_154,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/cheryl%20and%20cath%20decorating.jpg"
                ,]

var currentIntroImg = 0;
introImgs.src = intros[currentIntroImg]
imgIndexes.innerHTML = ""
for(var i = 0; i < intros.length; i++) {
    imgIndexes.innerHTML += `
                                <label class='option-group' for='page-btn-${i}' id='label-${i}'>
                                    <input type='radio' id='page-btn-${i}' name='intro-indexes' onclick='changeIntroImg(${i},true)' ${i == currentIntroImg? 'checked':''}/>
                                    <span class='radio-checkmark'></span>
                                </label>
                            `
}



function changeIntroImg(i,auto) {
    currentIntroImg = i
    if(auto) {
        introPaused = true
    }
    imgChange(introImgs, intros[currentIntroImg])
}


if(scrollY < 10 ) {
    header.style.backgroundColor = "transparent"
    header.style.boxShadow = "none"
} else {
    header.style.backgroundColor = "black"
}
addEventListener("scroll", () => {
    if(scrollY < 10 ) {
        header.style.backgroundColor = "transparent"
        header.style.boxShadow = "none"
    } else {
        header.style.backgroundColor = "black"
        header.style.boxShadow = "0 3px 15px rgba(0,0,0,0.6)"
    }

    banner.style.top = -scrollY/5 + "px"

    bannerImg.style.opacity = 1/(scrollY/20+1)
    bannerSlogan.style.opacity = 1/(scrollY/20+1)
})

addEventListener("mousemove",()=>{
    // console.log()
    bannerBg.style.marginLeft = "-50vw"
    bannerBg.style.marginTop = "-50vh"
    bannerBg.style.left = `calc(50% - ${window.event.clientX/10}px)`
    bannerBg.style.top = `calc(50% - ${window.event.clientY/10}px)`
})

var paused = false
setInterval(()=>{
    if(paused) {
        paused = false
    } else {
        nextImg(false)
    }
}, 5000)


function prevImg(auto) {
    if(currentImg == 0) {
        currentImg = bannerImgs.length - 1
    } else {
        currentImg --
    }
    if(auto) {
        paused = true
    }
    imgChange(bannerBg, bannerDir + bannerImgs[currentImg],true)
    imgChange(bannerImg, bannerDir + bannerImgs[currentImg],false)
}

function nextImg(auto) {
    if(currentImg == bannerImgs.length - 1) {
        currentImg = 0
    } else {
        currentImg ++
    }
    if(auto) {
        paused = true
    }
    imgChange(bannerBg, bannerDir + bannerImgs[currentImg],true)
    imgChange(bannerImg, bannerDir + bannerImgs[currentImg],false)
}

function imgChange(img, newImgDir, isBg) {
    img.style.transition = "filter 0.4s ease-in-out, transform 0.4s ease-in-out"
    img.style.filter = `brightness(0) 
    `
    if(isBg) img.style.transform = "scale(1.5)"
    setTimeout(()=>{
        img.src = newImgDir
    }, 400)
    setTimeout(()=>{
        if(isBg) img.style.transform = "scale(1)"
        img.style.filter = `brightness(${isBg?'0.2':'1'})
         `
    }, 400)
}
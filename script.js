// const mainElement = document.documentElement;
// const mainWidth = mainElement.clientWidth;
// const mainHeight = mainElement.clientHeight;

const mainWidth = window.innerWidth;

if(mainWidth <= 1085){
    const menuPositions = document.querySelectorAll('.nav li').forEach((el) => {
        el.classList.add('none')
    })
}

const menuBtn = document.querySelector('.menu')

menuBtn.addEventListener('click', () => {
    const menuPositions = document.querySelectorAll('.nav li').forEach((el) => {
        el.classList.toggle('none')
        el.classList.toggle('menu-active')
    })
    
})

if(mainWidth >= 1085){
    const menuBtn = document.querySelector('.menu')
    menuBtn.classList.add('none')
    let scrollDistance = window.scrollY
const targetServices = document.querySelector('.services')
const positionServices = targetServices.getBoundingClientRect().top

const targetPortfolio = document.querySelector('.portfolio')
const positionPortfolio = targetPortfolio.getBoundingClientRect().top

const targetAbout = document.querySelector('.about')
const positionAbout = targetAbout.getBoundingClientRect().top

const targetNews = document.querySelector('.news')
const newsPosition = targetNews.getBoundingClientRect().top

const targetVideo = document.querySelector('.video')
const videoPosition = targetVideo.getBoundingClientRect().top

const targetSkills = document.querySelector('.skills')
const skillsPosition = targetSkills.getBoundingClientRect().top

const targetContact = document.querySelector('.contact')
const contactPosition = targetContact.getBoundingClientRect().top

window.addEventListener('scroll', () => {
    let scrollDistance = window.pageYOffset

    if(positionServices - document.querySelector('header').clientHeight <= scrollDistance ){
        document.querySelector('header').classList.add('services-header')
        // if(document.querySelector('header').classList.length > 0){
        //     document.querySelector('header').classList.remove()
        // }
    } else{
        document.querySelector('header').classList.remove('services-header')
    }
})

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY
    
    if(positionPortfolio - document.querySelector('header').clientHeight <= scrollDistance ){
            document.querySelector('header').classList.add('portfolio-header')
            document.querySelector('header').classList.remove('services-header')
    } else{
        document.querySelector('header').classList.remove('portfolio-header')
    }
})

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY
    
    if(positionAbout - document.querySelector('header').clientHeight <= scrollDistance ){
            document.querySelector('header').classList.add('about-header')
            document.querySelector('header').classList.remove('portfolio-header')
    } else{
        document.querySelector('header').classList.remove('about-header')
    }
})

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY
    
    if(newsPosition - document.querySelector('header').clientHeight <= scrollDistance ){
            document.querySelector('header').classList.add('news-header')
            document.querySelector('header').classList.remove('about-header')
    } else{
        document.querySelector('header').classList.remove('news-header')
    }
})

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY
    
    if(videoPosition - document.querySelector('header').clientHeight <= scrollDistance ){
            document.querySelector('header').classList.add('video-header')
            document.querySelector('header').classList.remove('news-header')
    } else{
        document.querySelector('header').classList.remove('video-header')
    }
})

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY
    
    if(skillsPosition - document.querySelector('header').clientHeight <= scrollDistance ){
        document.querySelector('header').classList.add('skills-header')
        document.querySelector('header').classList.remove('video-header')
    } else{
        document.querySelector('header').classList.remove('skills-header')
    }
})

window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY
    
    if(contactPosition - document.querySelector('header').clientHeight <= scrollDistance ){
            document.querySelector('header').classList.add('contact-header')
            document.querySelector('header').classList.remove('skills-header')
    } else{
        document.querySelector('header').classList.remove('contact-header')
    }
})
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

(window.addEventListener('scroll', () => {
    let scrollDistance = window.scrollY

    document.querySelectorAll('.section').forEach((element, i) => {
        if(element.offsetTop - document.querySelector('header').clientHeight <= scrollDistance ){
            document.querySelectorAll('.nav li').forEach((element) => {
                if(element.classList.contains('selected')) { 
                    element.classList.remove('selected')
                }
            })
            document.querySelectorAll('ul li')[i].classList.add('selected')
        }
    })
}))

// <--------------------------------------------------------------------------------->
// =====================================SCROLL========================================
// <--------------------------------------------------------------------------------->
// let scrollDistance = window.scrollY
// const targetServices = document.querySelector('.services')
// const positionServices = targetServices.getBoundingClientRect().top

// const targetPortfolio = document.querySelector('.portfolio')
// const positionPortfolio = targetPortfolio.getBoundingClientRect().top

// const targetAbout = document.querySelector('.about')
// const positionAbout = targetAbout.getBoundingClientRect().top

// const targetNews = document.querySelector('.news')
// const newsPosition = targetNews.getBoundingClientRect().top

// const targetVideo = document.querySelector('.video')
// const videoPosition = targetVideo.getBoundingClientRect().top

// const targetSkills = document.querySelector('.skills')
// const skillsPosition = targetSkills.getBoundingClientRect().top

// const targetContact = document.querySelector('.contact')
// const contactPosition = targetContact.getBoundingClientRect().top

// window.addEventListener('scroll', () => {
//     let scrollDistance = window.pageYOffset

//     if(positionServices - document.querySelector('header').clientHeight <= scrollDistance ){
//         document.querySelector('header').classList.add('services-header')
//         // if(document.querySelector('header').classList.length > 0){
//         //     document.querySelector('header').classList.remove()
//         // }
//     } else{
//         document.querySelector('header').classList.remove('services-header')
//     }
// })

// window.addEventListener('scroll', () => {
//     let scrollDistance = window.scrollY
    
//     if(positionPortfolio - document.querySelector('header').clientHeight <= scrollDistance ){
//             document.querySelector('header').classList.add('portfolio-header')
//             document.querySelector('header').classList.remove('services-header')
//     } else{
//         document.querySelector('header').classList.remove('portfolio-header')
//     }
// })

// window.addEventListener('scroll', () => {
//     let scrollDistance = window.scrollY
    
//     if(positionAbout - document.querySelector('header').clientHeight <= scrollDistance ){
//             document.querySelector('header').classList.add('about-header')
//             document.querySelector('header').classList.remove('portfolio-header')
//     } else{
//         document.querySelector('header').classList.remove('about-header')
//     }
// })

// window.addEventListener('scroll', () => {
//     let scrollDistance = window.scrollY
    
//     if(newsPosition - document.querySelector('header').clientHeight <= scrollDistance ){
//             document.querySelector('header').classList.add('news-header')
//             document.querySelector('header').classList.remove('about-header')
//     } else{
//         document.querySelector('header').classList.remove('news-header')
//     }
// })

// window.addEventListener('scroll', () => {
//     let scrollDistance = window.scrollY
    
//     if(videoPosition - document.querySelector('header').clientHeight <= scrollDistance ){
//             document.querySelector('header').classList.add('video-header')
//             document.querySelector('header').classList.remove('news-header')
//     } else{
//         document.querySelector('header').classList.remove('video-header')
//     }
// })

// window.addEventListener('scroll', () => {
//     let scrollDistance = window.scrollY
    
//     if(skillsPosition - document.querySelector('header').clientHeight <= scrollDistance ){
//         document.querySelector('header').classList.add('skills-header')
//         document.querySelector('header').classList.remove('video-header')
//     } else{
//         document.querySelector('header').classList.remove('skills-header')
//     }
// })

// window.addEventListener('scroll', () => {
//     let scrollDistance = window.scrollY
    
//     if(contactPosition - document.querySelector('header').clientHeight <= scrollDistance ){
//             document.querySelector('header').classList.add('contact-header')
//             document.querySelector('header').classList.remove('skills-header')
//     } else{
//         document.querySelector('header').classList.remove('contact-header')
//     }
// })

// <--------------------------------------------------------------------------------->
// =====================================SCROLL========================================
// <--------------------------------------------------------------------------------->

const buttonServices = document.querySelector('#services')
const buttonHome = document.querySelector('#home')
const buttonPortfolio = document.querySelector('#portfolio')
const buttonAbout = document.querySelector('#about')
const buttonNews = document.querySelector('#news')
const buttonVideo = document.querySelector('#video')
const buttonSkills = document.querySelector('#skills')
const buttonContact = document.querySelector('#contact')

const buttonsNav = document.querySelectorAll('li')

const btnNews = document.querySelector('.news-link')
const mainContent = document.querySelector('.main-content')

btnNews.addEventListener('click', (event) => {
    event.preventDefault()

    mainContent.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    })
})

// =============================================================
// =============================================================
//  <-----------------HOVERING PORTFOLIO-------------------->
// =============================================================
// =============================================================

const displayPortfolioTwice = document.querySelector('.content-portfolio-box-block-twice')

displayPortfolioTwice.addEventListener('mouseenter', () => {
    const blockPortfolioTwice = document.querySelector('.block-portfolio-twice')

    blockPortfolioTwice.classList.remove('none')
})

displayPortfolioTwice.addEventListener('mouseleave', () => {
    const blockPortfolioTwice = document.querySelector('.block-portfolio-twice')
    
    blockPortfolioTwice.classList.add('none')
})

const displaySingleOne = document.querySelector('#block-single-1')

displaySingleOne.addEventListener('mouseenter', () => {
    const blockPortfolioTwice = document.querySelector('#block-1')

    blockPortfolioTwice.classList.remove('none')
})

displaySingleOne.addEventListener('mouseleave', () => {
    const blockPortfolioTwice = document.querySelector('#block-1')

    blockPortfolioTwice.classList.add('none')
})

const displaySingleTwo = document.querySelector('#block-single-2')

displaySingleTwo.addEventListener('mouseenter', () => {
    const blockPortfolioTwice = document.querySelector('#block-2')

    blockPortfolioTwice.classList.remove('none')
})

displaySingleTwo.addEventListener('mouseleave', () => {
    const blockPortfolioTwice = document.querySelector('#block-2')

    blockPortfolioTwice.classList.add('none')
})

const displayQuarter = document.querySelector('.content-portfolio-box-block-quarter')

displayQuarter.addEventListener('mouseenter', () => {
    const blockPortfolioQuarter = document.querySelector('.block-portfolio-quarter')

    blockPortfolioQuarter.classList.remove('none')
})

displayQuarter.addEventListener('mouseleave', () => {
    const blockPortfolioQuarter = document.querySelector('.block-portfolio-quarter')

    blockPortfolioQuarter.classList.add('none')
})

// =============================================================
// =============================================================
//  <-----------------HOVERING PORTFOLIO-------------------->
// =============================================================
// =============================================================


//------------------------------------------------------------------------


// =============================================================
// =============================================================
//  <---------------------CAROUSELE IMAGES--------------------->
// =============================================================
// =============================================================

const carouseleFirstBtn = document.querySelector('#first-btn')
const carouseleFirstImage = document.querySelector('#first-img')
const carouseleSecondBtn = document.querySelector('#second-btn')
const carouseleSecondImage = document.querySelector('#second-img')
const carouseleThirdBtn = document.querySelector('#third-btn')
const carouseleThirdImage = document.querySelector('#third-img')

carouseleFirstBtn.addEventListener('click', () => {
    carouseleFirstBtn.classList.add('none')
    carouseleFirstImage.classList.add('none')
    carouseleSecondBtn.classList.remove('none')
    carouseleSecondImage.classList.remove('none')
})

carouseleSecondBtn.addEventListener('click', () => {
    carouseleSecondBtn.classList.add('none')
    carouseleSecondImage.classList.add('none')
    carouseleThirdBtn.classList.remove('none')
    carouseleThirdImage.classList.remove('none')
})

carouseleThirdBtn.addEventListener('click', () => {
    carouseleThirdBtn.classList.add('none')
    carouseleThirdImage.classList.add('none')
    carouseleFirstBtn.classList.remove('none')
    carouseleFirstImage.classList.remove('none')
})

// =============================================================
// =============================================================
//  <---------------------CAROUSELE IMAGES--------------------->
// =============================================================
// =============================================================


//------------------------------------------------------------------------


// =============================================================
// =============================================================
//  <---------------------CAROUSELE IMAGES--------------------->
// =============================================================
// =============================================================

const carouseleFirstBtnSingle = document.querySelector('#first-btn-single')
const carouseleFirstImageSingle = document.querySelector('#first-img-single')
const carouseleSecondBtnSingle = document.querySelector('#second-btn-single')
const carouseleSecondImageSingle = document.querySelector('#second-img-single')
const carouseleThirdBtnSingle = document.querySelector('#third-btn-single')
const carouseleThirdImageSingle = document.querySelector('#third-img-single')

const textAreaFirst = document.querySelector('.first-text')
const textAreaSecond = document.querySelector('.second-text')
const textAreaThird = document.querySelector('.third-text')

carouseleFirstBtnSingle.addEventListener('click', () => {
    carouseleFirstBtnSingle.classList.add('none')
    carouseleFirstImageSingle.classList.add('none')
    carouseleSecondBtnSingle.classList.remove('none')
    carouseleSecondImageSingle.classList.remove('none')

    textAreaFirst.classList.add('none')
    textAreaSecond.classList.remove('none')
}, 5000)

carouseleSecondBtnSingle.addEventListener('click', () => {
    carouseleSecondBtnSingle.classList.add('none')
    carouseleSecondImageSingle.classList.add('none')
    carouseleThirdBtnSingle.classList.remove('none')
    carouseleThirdImageSingle.classList.remove('none')

    textAreaSecond.classList.add('none')
    textAreaThird.classList.remove('none')
}, 5000)

carouseleThirdBtnSingle.addEventListener('click', () => {
    carouseleThirdBtnSingle.classList.add('none')
    carouseleThirdImageSingle.classList.add('none')
    carouseleFirstBtnSingle.classList.remove('none')
    carouseleFirstImageSingle.classList.remove('none')

    textAreaThird.classList.add('none')
    textAreaFirst.classList.remove('none')
}, 5000)

// =============================================================
// =============================================================
//  <---------------------CAROUSELE IMAGES--------------------->
// =============================================================
// =============================================================


//------------------------------------------------------------------------


// =============================================================
// =============================================================
//  <---------------------CAROUSELE TEXT--------------------->
// =============================================================
// =============================================================



const textBtnFirst = document.querySelector('#citates-nav-one')
const citateFirst = document.querySelector('.citates-text-one')
const textBtnSecond = document.querySelector('#citates-nav-two')
const citateSecond = document.querySelector('.citates-text-two')
const textBtnThird = document.querySelector('#citates-nav-three')
const citateThird = document.querySelector('.citates-text-three')

textBtnFirst.addEventListener('click', () => {
    textBtnFirst.classList.add('none')
    citateFirst.classList.add('none')
    textBtnSecond.classList.remove('none')
    citateSecond.classList.remove('none')
})

textBtnSecond.addEventListener('click', () => {
    textBtnSecond.classList.add('none')
    citateSecond.classList.add('none')
    textBtnThird.classList.remove('none')
    citateThird.classList.remove('none')
})

textBtnThird.addEventListener('click', () => {
    textBtnThird.classList.add('none')
    citateThird.classList.add('none')
    textBtnFirst.classList.remove('none')
    citateFirst.classList.remove('none')
})
 



// =============================================================
// =============================================================
//  <---------------------CAROUSELE TEXT--------------------->
// =============================================================
// =============================================================

//------------------------------------------------------------------------


buttonSkills.addEventListener('click', (event) => {
    event.preventDefault()

    const setScrollSkills = document.querySelector('.content-skills')
    setScrollSkills.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    })

})

buttonContact.addEventListener('click', (event) => {
    event.preventDefault()

    const setScrollContact = document.querySelector('.content-contact')
    setScrollContact.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    })
})

buttonVideo.addEventListener('click', (event) => {
    event.preventDefault()

    const setScrollVideo = document.querySelector('.content-video')
    setScrollVideo.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    })
})

buttonNews.addEventListener('click', (event) => {
    event.preventDefault()

    const setScrollNews = document.querySelector('.content-news')
    setScrollNews.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    })
})

buttonAbout.addEventListener('click', (event) => {
    event.preventDefault()

    const setScrollAbout = document.querySelector('.content-about')
    setScrollAbout.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    })
})

buttonPortfolio.addEventListener('click', (event) => {
    event.preventDefault()

    const setScrollPortfolio = document.querySelector('.content-portfolio')
    setScrollPortfolio.scrollIntoView({
        block: 'start',
        behavior: 'smooth'
    })
})

buttonHome.addEventListener('click', (event) => {
    event.preventDefault()

    const setScrollHome = document.querySelector('.main-content')

    setScrollHome.scrollIntoView({
        block: "start",
        inline: "nearest",
        behavior: "smooth"
    })
})

buttonServices.addEventListener('click', (event) => {
    event.preventDefault()

    const setScrollServices = document.querySelector('.content-services')

    setScrollServices.scrollIntoView({
        block: "start",
        inline: "nearest",
        behavior: "smooth"
    })
})

// <---------------------------------------------------------------------------------------------->
// ===============================================================================================
// ==========================================MAIL=================================================
// ===============================================================================================
// <---------------------------------------------------------------------------------------------->

const mailArea = document.querySelector('#mail')
const btn = document.querySelector('#btn')
const inputs = document.querySelectorAll('.input')
let pattern = /@/;

btn.addEventListener('click', () => {
    if (pattern.test(mailArea.value)) {
        inputs.forEach((el) => {
            el.value = ''
            mailArea.classList.add('input')
            if (mailArea.classList.contains('mail-null')){
                mailArea.classList.remove('mail-null')
            }
            mailArea.value = ''
            mailArea.placeholder = 'Enter email'
        })
    } else {
        mailArea.classList.add('mail-null')
        mailArea.classList.remove('input')
        mailArea.value = ''
        mailArea.placeholder = 'Input email!'
        // mailArea.insertAdjacentHTML('afterend', '<p class="mail-not-entered" style="color:rgb(250, 54, 54); font-size: 13px; margin-top: 0; margin-bottom: 0; margin-left: 10px;"><b>Enter mail!</b></p>')
    }
})

// <---------------------------------------------------------------------------------------------->
// ===============================================================================================
// ==========================================MAIL=================================================
// ===============================================================================================
// <---------------------------------------------------------------------------------------------->

const videoPlayerBtn = document.querySelector('.video-box-twice')
const videoPlayer = document.querySelector('.video-player')

videoPlayerBtn.addEventListener('click', () => {
    videoPlayer.classList.remove('none')
})

videoPlayer.addEventListener('click', () => {
    videoPlayer.classList.add('none')
})
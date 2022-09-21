/// variabels ////

const sections = Array.from( document.getElementsByClassName('section'))
const control =  Array.from(document.getElementsByClassName('control')) 
const allSections = document.querySelector('.main-content')
const themeBtn = document.querySelector('.theme-btn')
control.forEach(element => {
    element.addEventListener('click',(e)=>{
        let currentBtn = document.querySelector('.active_btn')
        currentBtn.classList.remove('active_btn')
        currentBtn.classList.remove('active')
        e.target.classList.add('active_btn')
        e.target.classList.add('active')
    })
});

allSections.addEventListener('click',(e)=>{
    let id = e.target.dataset.id
    let element = document.getElementById(id)
    if(id){
        sections.forEach(sec=>{
            sec.classList.remove('active')
        })
        element.classList.add('active')
    }
})

themeBtn.addEventListener('click',()=>{
    let element = document.body
    element.classList.toggle('light_mode')
})
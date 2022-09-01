/// variabels ////

const sections = Array.from( document.getElementsByClassName('section'))
const control =  Array.from(document.getElementsByClassName('control')) 
const allSections = document.querySelector('.main-content')

control.forEach(element => {
    element.addEventListener('click',(e)=>{
        let currentBtn = document.querySelector('.active_btn')
        currentBtn.classList.remove('active_btn')
        e.target.classList.add('active_btn')
        
    })
});

allSections.addEventListener('click',(e)=>{
    let id = e.target.dataset.id
    let element = document.getElementById(id)
    console.log(id)
    if(id){
        sections.forEach(sec=>{
            sec.classList.remove('active')
        })
        element.classList.add('active')
    }
})


document.addEventListener('DOMContentLoaded', () => {


// ei part ta shobti panel re ekta array te dhukaye
const panels = document.querySelectorAll('.panel')


// ei jagat array re traverse koira amra ekta eventlistener lagai
// jeida first function dia ager click ta shorai de
// er por active e add kore click porle
panels.forEach((panel)=>{
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})


// eida oi ager click poroinna di shoraye je 
function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

})
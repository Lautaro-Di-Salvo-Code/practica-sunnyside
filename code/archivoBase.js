export default function HamMenu(hamButton, insideBtn1 ,insideBtn2, menuOptions){
    let d = document
    
    d.addEventListener('click', (e)=>{
        if(e.target.matches(hamButton)|| e.target.matches(insideBtn1)|| e.target.matches(insideBtn2)){
            d.querySelector(menuOptions).classList.toggle('on');
            d.querySelector(hamButton).classList.toggle('is-active');
        }
    })
    
    }
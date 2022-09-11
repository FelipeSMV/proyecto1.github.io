(function(){
    const slider = [...document.querySelectorAll('.slide__body')];
    const buttonNext = document.querySelector('#next'); 
    const buttonBefore = document.querySelector('#before');
    let value; 
    buttonNext.addEventListener('click',()=>{
        changePosition(1);

    });

    buttonBefore.addEventListener('click', ()=> {
        changePosition(-1);

    });
    
    const changePosition = (add)=> {
        const currentSlide = document.querySelector('.slide__body--show').dataset.id;
        value = Number(currentSlide); 
        value += add; 
        
        slider[Number(currentSlide)-1].classList.remove('slide__body--show');
        if(value===slider.length+1 || value===0 ){
            value = value === 0 ? slider.length :  1; 
        }
        slider[value-1].classList.add('slide__body--show'); 

    }


})();
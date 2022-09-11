(function (){
    const titleDescrip =[...document.querySelectorAll('.variedad__title')]; 

     titleDescrip.forEach(variedad => {
        variedad.addEventListener('click', ()=>{
            let height = 0; 
            let foto = variedad.nextElementSibling;
            let addPadding = variedad.parentElement.parentElement; 

            addPadding.classList.toggle('variedad__padding--add'); 


            variedad.children[0].classList.toggle('variedad__flecha--rotate'); 
            if(foto.clientHeight === 0){
                height = foto.scrollHeight; 
            }
            foto.style.height = `${height}px`;
        } )
     })
})();  
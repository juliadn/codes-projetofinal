document.addEventListener('DOMContentLoaded', function(){

coluna = document.querySelector('.coluna')
texto = document.querySelector('input')
botao = document.querySelector('.img_texto')
botao.addEventListener('click', function(event){
    value = texto.value
    if(value!=''){
        localStorage.setItem('texto', value)
        li = document.createElement('li')
        coluna.appendChild(li)
        li.classList.add('padding_itens')
        p = document.createElement('p')
        li.appendChild(p)
        p.innerHTML = '- ' + localStorage.getItem('texto')


    }


})



})
document.getElementById('btnDev').addEventListener('click', ()=>{
    const cod = 'cotovelo'
    if(document.getElementById('senha').value.toUpperCase() == cod.toUpperCase()){
        document.getElementById('cx_verso').classList.add('destaque')
        document.getElementById('login').classList.add('semdestaque')
    }else if(document.getElementById('senha').value == ''){
        alert('Preencha todos os dados solicitados')
    } else{
        alert('senha incorreta')
    }
})
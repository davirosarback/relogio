function mostrarData(){
    const horario = new Date()
    const hora = horario.getHours()
    const minutos = horario.getMinutes()
    const segundos = horario.getSeconds()
    const circulo1 = document.getElementById('circulo1')
    circulo1.innerText = hora + 'h'
    const circulo2 = document.getElementById('circulo2')
    circulo2.innerText = minutos +'m'
    const circulo3 = document.getElementById('circulo3')
    circulo3.innerText = segundos + 's'
    
  }
  setInterval(mostrarData,500)
   
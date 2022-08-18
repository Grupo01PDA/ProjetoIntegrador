const input = document.querySelector('#checkbox')


input.addEventListener('change', function () {
  if(input.checked == true){
    console.log('Funcionou?')
    document.getElementById('tema').href = 'darkMode.css'
  } else{
    document.getElementById('tema').href = 'lightMode.css'
  }
})




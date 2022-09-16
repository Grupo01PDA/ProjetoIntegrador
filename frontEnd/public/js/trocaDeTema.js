const input = document.querySelector('#checkbox')


input.addEventListener('change', function () {
  if(input.checked == true){
    document.getElementById('tema').href = './css/rootdark.css'
  } else{
    document.getElementById('tema').href = './css/root.css'
  }
})
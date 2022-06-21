const input = document.querySelector('#checkbox')


input.addEventListener('change', function () {
  if(input.checked == true){
    document.getElementById('tema').href = './css/styledark.css'
    document.getElementById('temaHeader').href = './css/headerdark.css'
    document.getElementById('temaFooter').href = './css/footerdark.css'

  } else{
    document.getElementById('tema').href = './css/style.css'
    document.getElementById('temaHeader').href = './css/header.css'
    document.getElementById('temaFooter').href = './css/footer.css'
  }
})

const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event) {
  if (event.type === 'touchstart') event.preventDefaut();
  const nav = document.getElementById('nav');
  nav.classList.toggle('active');
  const active = nav.classList.contains('active');
  event.currentTarget.setAttribute('aria-expanded', 'active' )
  if (active) {
    event.currentTarget.setAttribute('aria-label', 'Fechar Menu')
  } else {
    event.currentTarget.setAttribute('aria-label', 'Abrir Menu')
  }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);
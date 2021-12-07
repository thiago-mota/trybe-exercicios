document.getElementById('paragraph').style.color = 'green';

document.getElementById('page-title').innerText = 'Viva, a vida é uma festa';

document.getElementById('subtitle').innerText = 'Outros filmes interessantes:';

//a função abaixo não está funcionando corretamente pois o querySelector puxa apenas um único elemento (e o primeiro que for), não sendo possível puxar o h2 e o h2 juntos.
document.querySelector('h2', 'h3').classList.add('paragrafo');

document.getElementsByClassName('paragrafo')[0].style.color = 'blue';

document.getElementsByTagName('h4')[0].style.color = 'red'
document.getElementsByTagName('h4')[1].style.color = 'yellow'
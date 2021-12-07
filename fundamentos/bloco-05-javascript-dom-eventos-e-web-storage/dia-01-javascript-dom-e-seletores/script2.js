document.querySelector('h1').style.backgroundColor = 'rgb(29, 176, 104)';
document.querySelector('.emergency-tasks').style.backgroundColor = '#FF9F84';
const emergencyBG = document.querySelectorAll('.emergency-tasks h3')

for (let i = 0; i < emergencyBG.length; i += 1) {
emergencyBG[i] = document.querySelectorAll('.emergency-tasks h3')[i].style.backgroundColor = 'rgb(165, 0, 243)';
  }
// ou
// bg.forEach((bgColor) => bgColor.style.backgroundColor = 'rgb(165, 0, 243)');
//ou
// document.querySelectorAll('.emergency-tasks h3')[0].style.backgroundColor = 'rgb(165, 0, 243)';
// document.querySelectorAll('.emergency-tasks h3')[1].style.backgroundColor = 'rgb(165, 0, 243)';

document.querySelector('.no-emergency-tasks').style.backgroundColor = '#F9DB5E'

const noEmergencyBG = document.querySelectorAll('.no-emergency-tasks h3')

for (let i = 0; i < noEmergencyBG.length; i+= 1) {
	noEmergencyBG[i] = document.querySelectorAll('.no-emergency-tasks h3')[i].style.backgroundColor = 'black'
}

document.querySelector('#footer-container').style.backgroundColor = '#013533';

document.querySelector('#header-container').style.backgroundColor = 'rgb(29, 176, 104)'
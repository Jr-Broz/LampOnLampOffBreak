const turnOn = document.getElementById('turnOn');
const turnOff = document.getElementById('turnOff');
const lamp = document.getElementById('lamp');


function lampOn (){
  if(!isLampBroken()){
     lamp.src = 'ligada.jpg'
  }

}

function lampOff(){
  if(!isLampBroken () ){
  lamp.src ='desligada.jpg'
 }
}

function quebrou (){
  lamp.src ='quebrada.jpg'
}

function isLampBroken(){
  
  return lamp.src.indexOf('quebrada') > - 1
}

  
turnOn.addEventListener ('click', lampOn);
turnOff.addEventListener('click', lampOff);
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', quebrou);

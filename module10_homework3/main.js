
const sendMessage = document.querySelector('#chat__btn');
const sendLocation = document.querySelector('.chat_location');
const chatText = document.querySelector('.chat__text')
console.log(sendLocation, sendMessage)
const wrUrl = 'wss://echo-ws-service.herokuapp.com'

const error = () => {
  chatText.textContent = 'Невозможно получить ваше местоположение';
}
const success = (position) => {
  console.log('position', position);
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;

  chatText.textContent = `Широта: ${latitude} °, Долгота: ${longitude} °`;
}

sendLocation.addEventListener('click', () => {
  
  if (!navigator.geolocation) {
    chatText.textContent = 'Geolocation не поддерживается вашим браузером';
  } else {
    chatText.textContent = 'Определение местоположения…';
    navigator.geolocation.getCurrentPosition(success, error);
  }
});

let websocket;

function writeToScreen(message){
	let pre = document.createElement("p");	
  	pre.innerHTML = message;
  	chatText.appendChild(pre);
}

sendMessage.addEventListener('click', () => {
	websocket = new WebSocket(wrUrl);
	const message = document.querySelector('input').value;
  	writeToScreen(message);
  	websocket.send(writeToScreen(
      message));
	});

if('geolocation' in navigation){
	 navigator.geolocation.getCurrentPosition((position) => {
    const { coords } = position;
    console.log(coords.latitude, coords.longitude);
  });

}
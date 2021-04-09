// импортируем функцию
import { getMap } from './map.js'


  
// находим кнопку и добавляем к ней обработчик
document.getElementById('my_position').onclick = () => {
  navigator.geolocation.getCurrentPosition(success, error, {
    enableHighAccuracy: true
  })
}

function success({ coords }) {
  const { latitude, longitude } = coords
  const currentPosition = [48.757632, 30.2247611]
  console.log(latitude, longitude)
  // вызываем функцию, передавая ей текущую позицию и сообщение
  getMap(currentPosition, 'You are here')
}

function error({ message }) {
  console.log(message)
}



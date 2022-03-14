const magic8 = () => {
  var randomNum = Math.floor(Math.random() * 3)
  if(randomNum === 0) {
    return "It is decidedly so"
  } else if(randomNum === 1) {
    return "Ask again tomorrow"
  } else if(randomNum === 2) {
    return "Looks promising"
  } else {
    return "Ooops, something went wrong!"
  }
}

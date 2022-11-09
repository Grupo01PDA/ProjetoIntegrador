function clearInput(id){
  let element = document.getElementById(id)
  if (element.value !== ""){
      element.value = ""
  }
}

export default clearInput
import API from "./api.js"
const api = new API
const home = "../index.html"

function startButtons(requisition, url){
  const cancelButton = document.getElementById('cancel-button')
  cancelButton.addEventListener('click', () => {
    location.href = home
  })
  const form = document.getElementById('character-form')
  form.addEventListener('submit', () => {
    event.preventDefault()
    sendRequisition(requisition, url)
    location.href = home
  })
}

function sendRequisition(requisition, url){
  const formData = new FormData(document.getElementById('character-form'))
  const propertys = ['name', 'gender', 'specie', 'profession']

  let char = {
    'appearances': Number(formData.get('appearances'))
  }

  propertys.map(property => {
    char[property] = formData.get(property)
  })

  if(formData.get('alive') != null){
    char['alive'] = Boolean(formData.get('alive'))
  }

  if(requisition == 'PUT'){
    console.log(api.put(url, char))
  }
  if(requisition == 'POST'){
    console.log(api.post(url, char))

  }
  if(requisition == 'DELETE'){
    console.log(api.delete(url))
  }
}

export default startButtons
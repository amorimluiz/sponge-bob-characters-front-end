import API from "../services/api.js"
import startButtons from "../services/start-buttons.js"
const api = new API

function main(){
  startButtons('POST', 'add-character')
}

main()
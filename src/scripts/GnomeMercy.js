/*
  Responsibility
    Generate the entire HTML string template for 
    Gnome Mercy by using all other HTML generation
    components.
*/

import { CraftRequests } from "./CraftRequests.js"
import { Crafters } from "./Crafters.js"
import { CraftingIngredients } from "./Ingredients.js"
import { RequestForm } from "./RequestForm.js"

document.addEventListener(
  "click",
  (clickEvent) => {
    const submitButtonClicked = clickEvent.target

      if(submitButtonClicked.dataset.id === "submitRequest"){
        
        window.alert(`Thank you for your submission!`)
      }

  }
)


export const GnomeMercy = () => {
let html = "<h1>Gnome Mercy</h1>"


  html += `
  ${RequestForm()}
  ${CraftRequests()}
  ${Crafters()}
  ${CraftingIngredients()}
`;
  return html
}

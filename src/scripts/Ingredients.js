/*
  Responsibility
    Generate HTML for checkboxes for each ingredient and
    store each choice in transient state.
*/
export const CraftingIngredients = () =>{
let html = "<h2>Crafting Ingredients</h2>"

html +=`
<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
<label for="vehicle1"> I have a bike</label><br>

<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
<label for="vehicle1"> I have another bike</label><br>

<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
<label for="vehicle1"> I have several bikes</label><br>

<input type="checkbox" id="vehicle1" name="vehicle1" value="Bike">
<label for="vehicle1"> I have no bike</label><br>



`
return html
}
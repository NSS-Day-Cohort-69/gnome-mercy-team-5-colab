/*
  Responsibility
    Generate the entire HTML string template for 
    Gnome Mercy by using all other HTML generation
    components.
*/

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

  html += `<div id="requestForm">
            <label>Name:</label>
              <div>
                <input type="text" />
              </div>

            <label>Purpose:</label>
              <div>
                <input type="text" />
              </div>
              
            <label for="dropdown">Type:</label>
              <div>
                <select id="dropdown">
                  <option value="select">Select a type:</option>
                  <option value="potion">Potion</option>
                  <option value="elixir">Elixir</option>
                </select>
              </div>
            <button data-id="submitRequest">Submit Request</button> 
  
  
  
  </div>
  
`;
  return html
}

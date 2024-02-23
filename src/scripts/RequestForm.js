/*
  Responsibility
    Generate HTML for the request form. When Submit button
    is clicked, POST a new request to the API.
*/

document.addEventListener("click", (clickEvt) => {
  if (clickEvt.target.id === "submitRequest") {
    window.alert(`Thank you for your submission!`)
  }
});

export const RequestForm = () => {
  let html = `
    <div class="field flex column">
     <label class="label" for="name">Name</label>
     <input type="text" id="name" class="input">

     <label class="label" for="purpose">Purpose</label>
     <input type="text" id="purpose" class="input">

     <label for="dropdown">Type:</label>
              <div>
                <select id="dropdown">
                  <option value="select">Select a type:</option>
                  <option value="potion">Potion</option>
                  <option value="elixir">Elixir</option>
                </select>
              </div>



     <button class="button" id="submitRequest">Submit Request</button>
    </div>
    `;
  return html;
};

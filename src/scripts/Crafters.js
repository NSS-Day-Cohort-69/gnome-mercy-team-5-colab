/*
  Responsibility
    Generate HTML for the dropdown of crafters. When one is
    selected, update transient state.
*/

export const Crafters = () => {
  // const crafters = getCrafters();

  let html = "<h2>Crafters</h2>"

  html += `<label for="dropdown">


              <select id="crafterdropdown">
                <option value="0">--Choose A Crafter--</option>
              </select>
  `;
  return html
};

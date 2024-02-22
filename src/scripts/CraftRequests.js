/*
  Responsibility
    Generate HTML for the dropdown of craftRequests.

    Criteria:
      * Only incomplete requests should be converted to options
*/
export const CraftRequests = () => {
  let html = "<h2>Craft Requests</h2>"
  
    html += `<label for="dropdown">Type:</label>
                <div>
                  <select id="dropdown">
                    <option value="select"> --Choose a request--</option>
                    <option value="beautification">Beautification</option>
                    <option value="ugly potion">Ugly Potion</option>
                  </select>
                </div>
             
    
    
    
    </div>
    
  `;
    return html
  }
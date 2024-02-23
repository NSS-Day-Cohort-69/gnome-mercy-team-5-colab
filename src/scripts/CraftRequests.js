/*
  Responsibility
    Generate HTML for the dropdown of craftRequests.

    Criteria:
      * Only incomplete requests should be converted to options
*/

export const CraftRequests = async () => {
  const response = await fetch ("http://localhost:8088/craftRequests")
  const requests = await response.json()

  let html = "<h2>Craft Requests</h2>"
  for (const request of requests) {
    
  
    html += `<label for="dropdown">Type:</label>
                <div>
                  <select id="dropdown">
                    <option value="select"> --Choose a request--</option>
                    <option value="beautification">${request.name}</option>
                    <option value="ugly potion">Ugly Potion</option>
                  </select>
                </div>
             
    
    
    
    </div>
    
  `;
  }
    return html
  }
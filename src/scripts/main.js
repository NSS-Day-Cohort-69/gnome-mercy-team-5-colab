/* 
    Responsibiity: 

    Initiate process to covert all state to HTML (via the
    GnomeMercy component) and update the DOM with the 
    final result.

    Also, listen for any state change and covert state to
    HTML again.
*/

import { GnomeMercy } from "./GnomeMercy.js";
// import { CraftRequests } from "./CraftRequests.js";
// import { Crafters } from "./Crafters.js";

const mainContainer = document.querySelector("#container");

const render = () => {
    const gnomeMercyHTML = GnomeMercy()
 
  /*
        Fetch all of the database so that it's stored in 
        application state. After all data is fetched, 
        invoke GnomeMercy component to kick off the conversion
        of state to HTML
    */
    container.innerHTML = gnomeMercyHTML;
 
};

render();

// Listen for state changes and invoke render() when it does

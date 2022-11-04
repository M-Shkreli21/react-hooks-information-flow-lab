import React from 'react'

function Header({darkMode, darkModeCheck}) {

    return(
   <header>
     <h2>Shopster</h2>
     <button onClick={darkMode}>
       {darkModeCheck ? "Dark" : "Light"} Mode
     </button>
   </header>
)}

export default Header;
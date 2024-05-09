import React from 'react';

function Footer() {
  const today = new Date();
  const current_year = today.getFullYear();

  return(
    <footer>
      <p>Copyright {current_year}</p>
    </footer>
  )
}

export default Footer;

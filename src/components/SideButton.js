import Button from 'react-bootstrap/Button';

import { Nav } from 'react-bootstrap';
function SideButton({onClick}) {

    return (
      <>
        <Button
        onClick={onClick}
        aria-controls="example-collapse-text"
        aria-expanded={onClick}
        variant="outline-dark"
      >
{/*         <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 1024 1024" height="1em" width="1em" ><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" /></svg>   
 */}
      <span class="navbar-toggler-icon"></span>
      </Button>
     
      </>
      
     
    )


    
}
  
  export default SideButton;
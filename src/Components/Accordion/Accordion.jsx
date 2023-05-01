import { useAccordionButton } from 'react-bootstrap/AccordionButton';

// function AccordionToggle({ children, eventKey }) {
//     const decoratedOnClick = useAccordionButton(eventKey, () =>
//         console.log('totally custom'),
//     );
//     return (
//         <a href='javascript:;' className='text-decoration-none'
//             onClick={decoratedOnClick}
//         >
//             {children}
//         </a>
//     );
// }
function ContextAwareToggle({ children, eventKey }) {
  
    const decoratedOnClick = useAccordionButton(
      eventKey,
      () => 
      console.log('custom'),
    );
  
  
    return (
      <a className='text-decoration-none'
        href='javascript:;'
        onClick={decoratedOnClick}
      >
        {children}
      </a>
    );
  }

export default ContextAwareToggle;
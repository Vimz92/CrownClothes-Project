import ButtonMain from '../button/button-main'
import '../card-drop-down/card-drop.scss'


const CardDropDown = () => {
    
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items' />
 
        <ButtonMain buttonType='inverted'> CHECKOUT </ButtonMain>
    </div>
  )
}

export default CardDropDown
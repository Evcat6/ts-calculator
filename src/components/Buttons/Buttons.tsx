import { FC } from 'react';
import Button from '../Button/Button';
import styles from './Buttons.module.css';
import { ButtonsProps } from '../../interfaces/interfaces';


const Buttons: FC<ButtonsProps> = ({clear, backspace, addItem, calculate}) => {
    return (
        <div className={styles.btns}>
          <Button id="clear" onClick={clear} > Clear </Button>
          <Button id='backspace' onClick={backspace}>C</Button>
          <Button name="/" onClick={(e) => addItem(e)}>&divide;</Button>
          <Button name="7" onClick={(e) => addItem(e)}>7</Button>
          <Button name="8" onClick={(e) => addItem(e)}>8</Button>
          <Button name="9" onClick={(e) => addItem(e)}>9</Button>
          <Button name="*" onClick={(e) => addItem(e)}>&times;</Button>
          <Button name="4" onClick={(e) => addItem(e)}>4</Button>
          <Button name="5" onClick={(e) => addItem(e)}>5</Button>
          <Button name="6" onClick={(e) => addItem(e)}>6</Button>
          <Button name="-" onClick={(e) => addItem(e)}>&ndash;</Button>
          <Button name="1" onClick={(e) => addItem(e)}>1</Button>
          <Button name="2" onClick={(e) => addItem(e)}>2</Button>
          <Button name="3" onClick={(e) => addItem(e)}>3</Button>
          <Button name="+" onClick={(e) => addItem(e)} >+</Button>
          <Button name="0" onClick={(e) => addItem(e)} >0</Button>
          <Button name="." onClick={(e) => addItem(e)}>.</Button>
          <Button id='result' onClick={calculate}>=</Button>
        </div>
    )
}

export default Buttons;
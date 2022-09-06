import { FC } from 'react';
import styles from './CalcInput.module.css';
import { InputProps } from '../../interfaces/interfaces';


const CalcInput: FC<InputProps> = ({result}) => {
    return <input type='text' value={result} className={styles.app_input} disabled/>
}

export default CalcInput;
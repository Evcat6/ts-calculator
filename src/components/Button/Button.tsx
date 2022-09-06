import { FC } from 'react'
import './Button.module.css';
import { ButtonProps } from '../../interfaces/interfaces';

const Button: FC<ButtonProps> = ({id, name, children, ...rest}) => {
    return <button name={name} id={id} {...rest} > {children} </button>
}

export default Button;
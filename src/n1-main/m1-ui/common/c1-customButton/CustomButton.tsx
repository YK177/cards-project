import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './CustomButton.module.css'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

export const CustomButton: React.FC<SuperButtonPropsType> = (
    {
        red,
        className,
        ...restProps
    }
) => {
    const finalClassName = `${className} ${s.default} ${red && s.red}`

    return (
        <button
            className={finalClassName}
            {...restProps}
        />
    )
}

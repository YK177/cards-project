import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react'
import s from './CustomCheckbox.module.css'

type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperCheckboxPropsType = DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
}

export const CustomCheckbox: React.FC<SuperCheckboxPropsType> = (
    {
        type,
        onChange,
        onChangeChecked,
        className,
        spanClassName,
        children,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChange && onChange(e)
        onChangeChecked && onChangeChecked(e.currentTarget.checked)
    }

    const finalInputClassName = `${s.checkbox} ${className ? className : ''}`

    return (
        <label className={s.label}>
                <span className={s.checkbox}>
                    <input
                        type={'checkbox'}
                        onChange={onChangeCallback}
                        className={finalInputClassName}
                        {...restProps}
                    />
                     <span className={s.control}>
                         <svg
                             xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 24 24"
                             aria-hidden="true"
                             focusable="false"
                         >
                            <path
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                d="M1.73 12.91l6.37 6.37L22.79 4.59"
                            />
                        </svg>
                    </span>
                </span>
            {children && <span className={s.spanClassName}>{children}</span>}
        </label>
    )
}

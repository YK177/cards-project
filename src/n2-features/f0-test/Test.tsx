import React from 'react'
import {CustomButton} from '../../n1-main/m1-ui/common/c1-customButton/CustomButton'
import {CustomInputText} from '../../n1-main/m1-ui/common/c2-customInputText/CustomInputText'
import {CustomCheckbox} from '../../n1-main/m1-ui/common/c3-customCheckbox/CustomCheckbox'

export const Test = () => {
    return (
        <div>
            <CustomInputText/>
            <CustomButton red>Submit</CustomButton>
            <CustomCheckbox/>
        </div>
    )
}

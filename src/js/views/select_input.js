import { elements } from './base';
import * as selectController from '../controllers/select'

selectController.getSelectValue(elements.selectMonth, (val) => {
    console.log(val)
})

selectController.getSelectValue(elements.selectYear, (val) => {
    console.log(val)
})
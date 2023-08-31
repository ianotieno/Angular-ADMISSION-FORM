import { RadioOption } from "./radio-option";

export interface CheckboxContent {
    type: string;
    name: string;
    label: string;
    options: RadioOption[]
    alignment: 'vertical' | 'horizontal';
}

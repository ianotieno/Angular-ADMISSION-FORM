import { DateRangeContent } from './date-range-content';
import { GroupedInputsContent } from './grouped-inputs-content';
import { RadiosContent } from './radios-content';
import { TextAreaContent } from './text-area-content';
import { TextContent } from './text-content';
import { FormTitleContent } from './form-title-content';

export type FormContent =
  | TextContent
  | TextAreaContent
  | GroupedInputsContent
  | DateRangeContent
  | RadiosContent
  | FormTitleContent;

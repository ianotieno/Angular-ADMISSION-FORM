import { DateRangeInput } from "./date-range-input";

export interface DateRangeContent {
  name?: string;
  label: string;
  hint?: string;
  inputs: DateRangeInput;
}

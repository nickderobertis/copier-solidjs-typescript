import { IFormControl } from "solid-forms";

export type WithFormControl<T> = {
  control: IFormControl<T>;
  name: string;
};

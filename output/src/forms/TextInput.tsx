import { Show, mergeProps, Component, createEffect } from "solid-js";
import { createFormControl } from "solid-forms";
import { WithFormControl } from "../types";
import { FormErrors } from "./validators";

type Props = {
  type?: string;
  placeholder?: string;
} & WithFormControl<string>;

export const TextInput: Component<Props> = props => {
  // here we provide a default form control in case the user doesn't supply one
  props = mergeProps({ control: createFormControl(""), type: "text" }, props);
  const errors: FormErrors | null = props.control.errors;

  createEffect(() => {
    console.log("errors", errors);
  });

  return (
    <div
      classList={{
        "is-invalid": !!props.control.errors,
        "is-touched": props.control.isTouched,
        "is-required": props.control.isRequired,
      }}
    >
      <input
        name={props.name}
        type={props.type}
        value={props.control.value}
        placeholder={props.placeholder}
        oninput={e => {
          props.control.setValue(e.currentTarget.value);
        }}
        onblur={() => props.control.markTouched(true)}
        required={props.control.isRequired}
        class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
      />

      <Show when={props.control.isTouched && errors?.isMissing}>
        <small>Answer required.</small>
      </Show>
      <Show when={props.control.isTouched && errors?.isTooShort}>
        <small>Please pick a longer entry.</small>
      </Show>
    </div>
  );
};

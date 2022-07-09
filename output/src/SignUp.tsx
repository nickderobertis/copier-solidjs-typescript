import { createEffect, Component } from "solid-js";
import { createFormGroup, createFormControl } from "solid-forms";
import { TextInput } from "./forms/TextInput";
import { minLengthValidator, requiredValidator } from "./forms/validators";

export const SignUp: Component = () => {
  const group = createFormGroup({
    name: createFormControl("", { required: true }),
    email: createFormControl("", {
      required: true,
      validators: requiredValidator,
    }),
    password: createFormControl("", {
      required: true,
      validators: [requiredValidator, minLengthValidator(8)],
    }),
  });

  createEffect(() => {
    if (group.isDisabled || !group.isValid) return;
  });

  const onSubmit = async (event: Event) => {
    if (group.isSubmitted || !group.isValid) return;

    group.markSubmitted(true);
    event.preventDefault();
    const { name, email } = group.value;
    console.log(`Submitting ${name} ${email}`);
  };

  return (
    <div class="block rounded-lg shadow-lg bg-white px-6 py-12 md:px-12">
      <form onSubmit={onSubmit}>
        <div class="grid gap-3 md:gap-6">
          <TextInput
            name="name"
            placeholder="Name"
            type="text"
            control={group.controls.name}
          />
          <TextInput
            name="email"
            placeholder="Email address"
            type="email"
            control={group.controls.email}
          />
          <TextInput
            name="password"
            type="password"
            placeholder="Password"
            control={group.controls.password}
          />
        </div>
        <div class="mt-6 md:mt-9"></div>
        <button
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          class="inline-block px-6 py-2.5 mb-6 w-full bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

type CanHaveMissing = {
  isMissing: boolean;
};

export function requiredValidator(value: string): CanHaveMissing | null {
  return value.length === 0 ? { isMissing: true } : null;
}

type CanBeTooShort = {
  isTooShort: boolean;
};

export function minLengthValidator(
  minLength: number
): (value: string) => CanBeTooShort | null {
  return (value: string) =>
    value.length < minLength ? { isTooShort: true } : null;
}

export type FormErrors = CanBeTooShort & CanHaveMissing;

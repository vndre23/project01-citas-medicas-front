import { AbstractControl, FormGroup } from '@angular/forms';

export function isInvalid(
  form: FormGroup,
  controlName: string
): boolean {
  const control: AbstractControl | null = form.get(controlName);
  return !!(control && control.invalid && (control.touched || control.dirty));
}

import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'lib-flexi-fields',
  templateUrl: './flexi-fields.component.html',
  styleUrls: ['./flexi-fields.component.scss']
})

export class FlexiFieldsComponent {
  @Input() fields: any = []; // Array of field objects
  @Output() formValueChanged = new EventEmitter<any>();
  @Output() fieldFocusOut = new EventEmitter<any>();

  public form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }

  private createForm(): void {
    let group: any = {};
    for (const field of this.fields) {
      group[field.name] = [field.value || null, field.required ? Validators.required : null];
    }
    this.form = this.fb.group(group);

    // Subscribe to form value changes
    this.form.valueChanges.subscribe((formValues: any) => {
      this.formValueChanged.emit(formValues);
    });
  }

  onFieldFocusOut(field: any): void {
    this.fieldFocusOut.emit({ fieldName: field.name, fieldValue: this.form?.get(field?.name)?.value });
  }
}

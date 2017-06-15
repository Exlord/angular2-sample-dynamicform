import {Component, OnInit, EventEmitter, Input, Output, OnChanges, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators,FormsModule } from '@angular/forms';

import {Field} from '../field';
import {FieldType} from '../field-type.enum';
import {FieldService} from '../field.service';

@Component({
  selector: 'app-field-form',
  templateUrl: './field-form.component.html',
  styleUrls: ['./field-form.component.css'],
  providers : [FormBuilder, FieldService]
})

export class FieldFormComponent implements OnInit,OnChanges {


  fieldTypes: string[];
  FieldTypes: typeof FieldType = FieldType;
  form: FormGroup;
  submitted: boolean = false;
  @Output() onSave = new EventEmitter();
  @Input() public field: Field;

  constructor(private fieldService: FieldService, private  fb: FormBuilder) {
  }

  ngOnInit() {
    let fieldTypes = Object.keys(FieldType);
    this.fieldTypes = fieldTypes.splice(fieldTypes.length / 2);
    this.form = this.fb.group({
      'id': [null],
      'name': [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(50)])],
      'type': [FieldType.Text, Validators.required],
      'label': [null, Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(50)])],
      'help': [null],
    });
  }

  save(value: any): void {
    this.submitted = true;
    this.fieldService.save(<Field>value).then((field) => {
      this.submitted = false;
      this.form.reset();
      this.onSave.emit();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.field.currentValue) {
      (<FormGroup>this.form).setValue(changes.field.currentValue as Field, {onlySelf: true});
    }
  }
}

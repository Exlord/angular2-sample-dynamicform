import {Component, OnInit, EventEmitter, Input, Output, OnChanges, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, FormsModule} from '@angular/forms';

import {Field} from '../../field/field';
import {FieldType} from '../../field/field-type.enum';
import {FieldService} from '../../field/field.service';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.component.html',
  styleUrls: ['./form-field.component.css']
})
export class FormFieldComponent implements OnInit {

  FieldTypes: typeof FieldType = FieldType;
  @Input() field: Field;
  @Input() formField: FormControl;
  @Input() form: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}

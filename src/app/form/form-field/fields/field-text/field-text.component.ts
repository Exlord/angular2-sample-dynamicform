import {Component, OnInit, EventEmitter, Input, Output, OnChanges, SimpleChanges} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators, FormsModule} from '@angular/forms';

import {Field} from '../../../../field/field';
import {FieldType} from '../../../../field/field-type.enum';
import {FieldService} from '../../../../field/field.service';

@Component({
  selector: 'app-field-text',
  templateUrl: './field-text.component.html',
  styleUrls: ['./field-text.component.css']
})
export class FieldTextComponent implements OnInit {

  @Input() field: Field;
  @Input() formField: FormControl;
  @Input() form: FormGroup;

  constructor() {
  }

  ngOnInit() {
  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormData } from '../../interfaces/form-data';
@Component({
  selector: 'app-dynamic-forms',
  templateUrl: './dynamic-forms.component.html',
  styleUrls: ['./dynamic-forms.component.css'],
})
export class DynamicFormsComponent implements OnInit {
  @Input() formData: FormData[];
  @Output() form: FormGroup;
  @Output() loginEvent = new EventEmitter<{}>();

  constructor() {}

  ngOnInit(): void {
    this.processDynamicForm();
  }

  private processDynamicForm() {
    const formGroup = {};

    this.formData.forEach((formControl) => {
      formGroup[formControl.controlName] = new FormControl('');
    });
    this.form = new FormGroup(formGroup);
  }

  public login() {
    const loginDetails = {
      username: this.form.value.Name,
      password: this.form.value.Password,
    };
    this.loginEvent.emit(loginDetails);
  }
  public category() {
    const categoryDetails = {
      category_id: this.form.value.category_id,
      category_description: this.form.value.category_description,
    };
    this.loginEvent.emit(categoryDetails);
  }

  public componentCall() {
    if (this.form.controls?.login) {
      this.login();
    } else if (this.form.controls?.category) {
      this.category();
    } else if (this.form.controls?.project) {
      this.project();
    }
  }
  public project() {
    console.log(this.form)
    const projectDetails = {
      project_id: this.form.value.project_id,
      project_description: this.form.value.project_description,
      project_category: this.form.value.project_category,
      project_location: this.form.value.project_location,
      project_owner: this.form.value.project_owner
    }
    this.loginEvent.emit(projectDetails);
  }
}

import { Component } from '@angular/core';
import { Faculty } from '../faculty';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  idToEdit: number = -1;
  myForm = new FormGroup({
    name: new FormControl(""),
    age: new FormControl(0),
  });
  faculties: Faculty[] = [
    { "name": "yash", "age": 18 },
    { "name": "himanshu", "age": 17 },
    { "name": "raj", "age": 20 },
    { "name": "yagnik", "age": 21 }]
  submit() {
    const formValues = this.myForm.value;
    console.log(formValues);
    if (this.idToEdit === -1) {
      this.faculties.push(<Faculty>formValues);
    } else {
      this.faculties[this.idToEdit] = <Faculty>formValues;
      this.idToEdit = -1;
    }
    this.myForm.controls.name.setValue("");
    this.myForm.controls.age.setValue(0);
  }
  setValue(id: number) {
    this.idToEdit = id;
    this.myForm.controls.name.setValue(this.faculties[id].name);
    this.myForm.controls.age.setValue(this.faculties[id].age);
  }
  delete(id: number) {
    this.faculties.splice(id, 1)
  }
}

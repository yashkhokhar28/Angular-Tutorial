import { Component } from '@angular/core';

@Component({
  selector: 'app-sform',
  templateUrl: './sform.component.html',
  styleUrl: './sform.component.css'
})
export class SformComponent {
  idToEdit: number = -1;
  FacultyName = '';
  FacultyAge = 0;

  faculty = [
    { name: "arjun", age: 34 },
    { name: "yash", age: 20 },
    { name: "himanshu", age: 20 }
  ];

  delete(i: any) {
    this.faculty.splice(i, 1);
  }

  submit() {
    if (this.idToEdit === -1) {
      this.faculty.push({ name: this.FacultyName, age: this.FacultyAge });
    } else {
      this.faculty[this.idToEdit] = { name: this.FacultyName, age: this.FacultyAge };
    }
    this.FacultyName = '';
    this.FacultyAge = 0;
  }
  setValue(id: any) {
    this.idToEdit = id;
    this.FacultyName = this.faculty[id].name
    this.FacultyAge = this.faculty[id].age
  }
}

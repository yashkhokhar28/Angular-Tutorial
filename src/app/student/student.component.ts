import { Component } from '@angular/core';
import { ApiStudentService } from '../api-student.service';
import { Student } from '../../student';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  studnets: Student[] = [];
  constructor(private _api: ApiStudentService) {
  }

  ngOnInit(): void {
    this._api.getAll().subscribe((res: any) => {
      this.studnets = res;
      console.log(this.studnets);
    })
  }

  delete(id: any) {
    this._api.deleteByID(id).subscribe((res: any) => {
      console.log(res);
      this.ngOnInit()
    });
  }
}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Student } from '../../student';
import { ApiStudentService } from '../api-student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent {
  studentDetails: Student = new Student();

  constructor(private _activatedRoute: ActivatedRoute,
    private _api: ApiStudentService,
    private router: Router) {
  }

  ngOnInit() {
    let id = this._activatedRoute.snapshot.params["id"];
    this._api.getByID(id).subscribe((res: any) => {
      this.studentDetails = res;
      console.log(this.studentDetails);
    });
  }

  delete() {
    let id = this._activatedRoute.snapshot.params["id"];
    this._api.deleteByID(id).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['student']);
    });
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiStudentService } from '../api-student.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrl: './student-add.component.css'
})
export class StudentAddComponent {
  id: number = -1
  constructor(private _api: ApiStudentService, private router: Router, private _activatedRoute: ActivatedRoute) {

  }
  myForm = new FormGroup({
    name: new FormControl(""),
    phoneNumber: new FormControl(""),
    image: new FormControl("")
  })

  submit() {
    if (this.id === -1) {
      this._api.insert(this.myForm.value).subscribe((res) => {
        this.router.navigate(['student'])
      })
    } else {
      this._api.edit(this.id, this.myForm.value,).subscribe((res) => {
        this.router.navigate(['student'])
      })
    }

    console.log(this.myForm.value)
  }

  ngOnInit(): void {
    if (this._activatedRoute.snapshot.params["id"] != null) {
      console.log("value set");
      this.id = this._activatedRoute.snapshot.params["id"];
    }
    this._api.getByID(this.id).subscribe((res: any) => {
      this.myForm.controls.name.setValue(res.name)
      this.myForm.controls.image.setValue(res.image)
      this.myForm.controls.phoneNumber.setValue(res.phoneNumber)
    });
  }
}

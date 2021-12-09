import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/app/ticket';

import { EnrollmentService } from 'src/app/enrollment.service';

@Component({
  selector: 'app-input-fields',
  templateUrl: './input-fields.component.html',
  styleUrls: ['./input-fields.component.css']
})
export class InputFieldsComponent implements OnInit {



  topics=[];
  userModel = new Ticket('','','','')




  constructor(private _enrollmentService:EnrollmentService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        data => alert("Success"),
        error => alert("error")
        );

  }

}

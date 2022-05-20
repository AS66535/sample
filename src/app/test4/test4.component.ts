import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-test4',
  templateUrl: './test4.component.html',
  styleUrls: ['./test4.component.css']
})
export class Test4Component implements OnInit {

  constructor(private fb:FormBuilder) { }

simpleForm=this.fb.group({
  myid:['0',Validators.required],
  myname:['Zensar', [Validators.minLength(5), Validators.maxLength(15)]],
  mym1:['0',[Validators.min(0),Validators.max(100)]],
  mym2:['0',[Validators.min(0),Validators.max(100)]],
  mym3:['0',[Validators.min(0),Validators.max(100)]]
})
  ngOnInit() {
  }

}

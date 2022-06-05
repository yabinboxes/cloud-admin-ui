import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Unit } from './deployed-unit-list.model';
import { DeployedUnit } from './deployed-unit.model';
import { DevUnitHttpService } from './dev-unit-http.service';

/*export interface Section {
  name: string;
  updated: Date;
}*/

@Component({
  selector: 'app-dev-unit',
  templateUrl: './dev-unit.component.html',
  styleUrls: ['./dev-unit.component.scss']
})
export class DevUnitComponent implements OnInit {
  panelOpenState = false;

  /*folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    },
  ];*/



  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  codeLocation: 'github' | 'local' = 'github';
  pipelineOptions: FormGroup;

  data = {
    'location': 'http://gitlab',
    'type': 'gitlab'
  };

  public deployedList: Unit[] = [];
  public deployedUnit: DeployedUnit = {
    msg: "pending",
    url: ""
  };

  constructor(private _devUnitHttpService: DevUnitHttpService, private _formBuilder: FormBuilder) { }

  

  ngOnInit(): void {
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.pipelineOptions = this._formBuilder.group({
      security: false,
      unittest: false,
      sonar: false,
      performancce: false
    });

    this._devUnitHttpService.getDevUnits().subscribe((response) => {
      let temp:any = response;
      this.deployedList = temp.list; 
    }, (error) => {
      console.log('error is ', error)
    });


  }

  deployApp() {
    this._devUnitHttpService.deployDevUnit(this.data).subscribe((response) => {
      console.log("response => ", response);
      this.deployedUnit = response;
    }, (error) => {
      console.log('error is ', error)
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InventoryHttpService } from './inventory-http.service';
import { OrgsModel } from './orgs.model';
import { ProjectModel } from './project.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnInit {

  public orgList : OrgsModel[] = [];
  public prjList : ProjectModel[] = [];
  public 


  FormInputs: FormGroup;
  constructor(private _inventoryHttpService: InventoryHttpService) { }

  ngOnInit(): void {
    this.FormInputs = new FormGroup({
      orgName: new FormControl(''),
      projectName: new FormControl('')
    });

    this._inventoryHttpService.getInventory().subscribe((response) => {
      let temp:any = response;
      console.log("org  -> ", temp);
      this.orgList = temp.orgs; 
    }, (error) => {
      console.log('error is ', error)
    });

  }

  addOrg(form: FormGroup) {
    
    let myOrg = new OrgsModel();
    //myOrg.id = "1";
    myOrg.name = form.value.orgName;
    this.orgList.push(myOrg);
  }

  removeOrg(index: number) {
    if(index > -1) {
      this.orgList.splice(index,1);
    }
  }

  selectOrg(index: number) {
    if(index > -1) {
      this.prjList = this.orgList[index].projects;
    }
  }

  addProject(form: FormGroup) {
   
    let myProject = new ProjectModel();
    //myProject.id = "1";
    myProject.name = form.value.projectName;
    this.prjList.push(myProject);
  }

  removeProject(index:number) {
    if(index > -1) {
      this.prjList.splice(index,1);
    }
  }


}

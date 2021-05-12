import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from 'src/app/services/commonservice.service';
import { ProjectData } from '../../../assets/form-meta/project';
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css'],
})
export class ProjectComponent implements OnInit {
  public data = ProjectData;
  public categoryList;
  public userList;
  public projectList;
  constructor(private commonService: CommonserviceService) {}

  ngOnInit(): void {
    this.commonService.categoryList().subscribe((data) => {
      this.categoryList = data;
      this.addProjectCategory();
    });
    this.commonService.userList().subscribe((data) => {
      this.userList = data;
      this.addUserDetails();
    });
  }

  public addProjectCategory() {
    if (this.categoryList) {
      this.data.map((row) => {
        if (row.controlName === 'project_category') {
          for (let cat of this.categoryList) {
            row.options.push({
              optionName: cat.category_description,
              value: cat.category_id,
            });
          }
        }
      });
    }
  }

  public addUserDetails() {
    if (this.userList) {
      this.data.map((row) => {
        if (row.controlName === 'project_owner') {
          for (let user of this.userList) {
            row.options.push({
              optionName: user.username,
              value: user.id,
            });
          }
        }
      });
    }
  }
  public project(event){
    this.commonService.project(event);
  }
}

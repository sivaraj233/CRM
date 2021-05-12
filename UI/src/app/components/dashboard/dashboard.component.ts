import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from 'src/app/services/commonservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  public categoryList;
  public projectList;
  constructor(private commonService: CommonserviceService) {}

  ngOnInit(): void {
    this.listCategory();
    this.projectListAll()
  }

  public listCategory() {
    this.commonService.categoryList().subscribe((data) => {
      this.categoryList = data;
    });
  }

  public projectListAll(){
    this.commonService.projectList().subscribe((data) => {
      this.projectList = data;
    });
  }
}

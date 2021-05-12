import { Component, OnInit } from '@angular/core';
import { CommonserviceService } from 'src/app/services/commonservice.service';
import { CategoryData } from '../../../assets/form-meta/category';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent implements OnInit {
  public data = CategoryData;
  constructor(private categoryService: CommonserviceService) {}

  ngOnInit(): void {}
  public category(category) {
    this.categoryService.category(category);
  }
}

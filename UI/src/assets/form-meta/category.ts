import { FormData } from '../../app/interfaces/form-data';

export const CategoryData: FormData[] = [
  {
    controlName: 'category_id',
    controlType: 'text',
    valueType: 'number',
    placeholder: 'Enter Category ID',
    labelName: 'Category ID',
  },
  {
    controlName: 'category_description',
    controlType: 'text',
    valueType: 'text',
    placeholder: 'Enter Category Name',
    labelName: 'Category Name',
  },
  {
      controlName: 'category',
      controlType: 'button',
      valueType: 'button',
      placeholder: 'Enter Password',
      labelName: 'Password',
  }
];
import { FormData } from '../../app/interfaces/form-data';

export const ProjectData: FormData[] = [
  {
    controlName: 'project_id',
    controlType: 'text',
    valueType: 'number',
    placeholder: 'ID',
    labelName: 'Project ID',
  },
  {
    controlName: 'project_description',
    controlType: 'text',
    valueType: 'text',
    placeholder: 'Project Description',
    labelName: 'Project Description',
  },
  {
    controlName: 'project_category',
    placeholder: 'Project Category',
    labelName: 'Project Category',
    controlType: 'select',
    options: []
  },
  {
    controlName: 'project_location',
    controlType: 'text',
    valueType: 'text',
    placeholder: 'Project Location',
    labelName: 'Project Location',
  },
  {
    controlName: 'project_owner',
    labelName: 'Project Owner',
    placeholder: 'Project Owner',
    controlType: 'select',
    options: []
  },

  {
    controlName: 'project',
    controlType: 'button',
    valueType: 'button',
  },
];

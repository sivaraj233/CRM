import { FormData } from '../../app/interfaces/form-data';
 
export const LoginData:  FormData[] = [

    {
        controlName: 'Name',
        controlType: 'text',
        valueType: 'text',
        placeholder: 'Enter username',
        labelName: 'User Name'
    },
    {
        controlName: 'Password',
        controlType: 'password',
        valueType: 'password',
        placeholder: 'Enter Password',
        labelName: 'Password'
    },
    {
        controlName: 'login',
        controlType: 'button',
        valueType: 'button',
        placeholder: 'Enter Password',
        labelName: 'Password',
        functionName: 'login'
    }

];
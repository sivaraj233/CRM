export interface FormData {

    controlName: string;
    controlType: string;
    description?: string;
    valueType?: string;
    value?:string;
    currentValue?: string;
    functionName?:string;
    placeholder?: string;
    labelName?:string;
    options?: Array<{
        optionName: string;
        value: string;
    }>
    validators?: {
        required?: boolean;
        maxlength?: number;
        minlength?: number;
    };
}

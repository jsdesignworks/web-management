/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type BlankFormCreateFormInputValues = {
    email?: string;
    websiteIfOwned?: string;
    phoneNumber?: number;
    firstName?: string;
    lastName?: string;
    questions?: string;
};
export declare type BlankFormCreateFormValidationValues = {
    email?: ValidationFunction<string>;
    websiteIfOwned?: ValidationFunction<string>;
    phoneNumber?: ValidationFunction<number>;
    firstName?: ValidationFunction<string>;
    lastName?: ValidationFunction<string>;
    questions?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type BlankFormCreateFormOverridesProps = {
    BlankFormCreateFormGrid?: FormProps<GridProps>;
    email?: FormProps<TextFieldProps>;
    websiteIfOwned?: FormProps<TextFieldProps>;
    phoneNumber?: FormProps<TextFieldProps>;
    firstName?: FormProps<TextFieldProps>;
    lastName?: FormProps<TextFieldProps>;
    questions?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type BlankFormCreateFormProps = React.PropsWithChildren<{
    overrides?: BlankFormCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: BlankFormCreateFormInputValues) => BlankFormCreateFormInputValues;
    onSuccess?: (fields: BlankFormCreateFormInputValues) => void;
    onError?: (fields: BlankFormCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: BlankFormCreateFormInputValues) => BlankFormCreateFormInputValues;
    onValidate?: BlankFormCreateFormValidationValues;
} & React.CSSProperties>;
export default function BlankFormCreateForm(props: BlankFormCreateFormProps): React.ReactElement;

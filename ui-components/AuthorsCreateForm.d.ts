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
export declare type AuthorsCreateFormInputValues = {
    first_name?: string;
    last_name?: string;
};
export declare type AuthorsCreateFormValidationValues = {
    first_name?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AuthorsCreateFormOverridesProps = {
    AuthorsCreateFormGrid?: FormProps<GridProps>;
    first_name?: FormProps<TextFieldProps>;
    last_name?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AuthorsCreateFormProps = React.PropsWithChildren<{
    overrides?: AuthorsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AuthorsCreateFormInputValues) => AuthorsCreateFormInputValues;
    onSuccess?: (fields: AuthorsCreateFormInputValues) => void;
    onError?: (fields: AuthorsCreateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: AuthorsCreateFormInputValues) => AuthorsCreateFormInputValues;
    onValidate?: AuthorsCreateFormValidationValues;
} & React.CSSProperties>;
export default function AuthorsCreateForm(props: AuthorsCreateFormProps): React.ReactElement;

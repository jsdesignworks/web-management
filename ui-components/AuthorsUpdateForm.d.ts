/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Authors } from "../models";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AuthorsUpdateFormInputValues = {
    first_name?: string;
    last_name?: string;
};
export declare type AuthorsUpdateFormValidationValues = {
    first_name?: ValidationFunction<string>;
    last_name?: ValidationFunction<string>;
};
export declare type FormProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AuthorsUpdateFormOverridesProps = {
    AuthorsUpdateFormGrid?: FormProps<GridProps>;
    first_name?: FormProps<TextFieldProps>;
    last_name?: FormProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AuthorsUpdateFormProps = React.PropsWithChildren<{
    overrides?: AuthorsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    authors?: Authors;
    onSubmit?: (fields: AuthorsUpdateFormInputValues) => AuthorsUpdateFormInputValues;
    onSuccess?: (fields: AuthorsUpdateFormInputValues) => void;
    onError?: (fields: AuthorsUpdateFormInputValues, errorMessage: string) => void;
    onCancel?: () => void;
    onChange?: (fields: AuthorsUpdateFormInputValues) => AuthorsUpdateFormInputValues;
    onValidate?: AuthorsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AuthorsUpdateForm(props: AuthorsUpdateFormProps): React.ReactElement;

/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { BlankForm } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function BlankFormCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onCancel,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    email: undefined,
    websiteIfOwned: undefined,
    phoneNumber: undefined,
    firstName: undefined,
    lastName: undefined,
    questions: undefined,
  };
  const [email, setEmail] = React.useState(initialValues.email);
  const [websiteIfOwned, setWebsiteIfOwned] = React.useState(
    initialValues.websiteIfOwned
  );
  const [phoneNumber, setPhoneNumber] = React.useState(
    initialValues.phoneNumber
  );
  const [firstName, setFirstName] = React.useState(initialValues.firstName);
  const [lastName, setLastName] = React.useState(initialValues.lastName);
  const [questions, setQuestions] = React.useState(initialValues.questions);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setEmail(initialValues.email);
    setWebsiteIfOwned(initialValues.websiteIfOwned);
    setPhoneNumber(initialValues.phoneNumber);
    setFirstName(initialValues.firstName);
    setLastName(initialValues.lastName);
    setQuestions(initialValues.questions);
    setErrors({});
  };
  const validations = {
    email: [],
    websiteIfOwned: [],
    phoneNumber: [],
    firstName: [],
    lastName: [],
    questions: [],
  };
  const runValidationTasks = async (fieldName, value) => {
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          email,
          websiteIfOwned,
          phoneNumber,
          firstName,
          lastName,
          questions,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          await DataStore.save(new BlankForm(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "BlankFormCreateForm")}
    >
      <TextField
        label="Email"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email: value,
              websiteIfOwned,
              phoneNumber,
              firstName,
              lastName,
              questions,
            };
            const result = onChange(modelFields);
            value = result?.email ?? value;
          }
          if (errors.email?.hasError) {
            runValidationTasks("email", value);
          }
          setEmail(value);
        }}
        onBlur={() => runValidationTasks("email", email)}
        errorMessage={errors.email?.errorMessage}
        hasError={errors.email?.hasError}
        {...getOverrideProps(overrides, "email")}
      ></TextField>
      <TextField
        label="Website if owned"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              websiteIfOwned: value,
              phoneNumber,
              firstName,
              lastName,
              questions,
            };
            const result = onChange(modelFields);
            value = result?.websiteIfOwned ?? value;
          }
          if (errors.websiteIfOwned?.hasError) {
            runValidationTasks("websiteIfOwned", value);
          }
          setWebsiteIfOwned(value);
        }}
        onBlur={() => runValidationTasks("websiteIfOwned", websiteIfOwned)}
        errorMessage={errors.websiteIfOwned?.errorMessage}
        hasError={errors.websiteIfOwned?.hasError}
        {...getOverrideProps(overrides, "websiteIfOwned")}
      ></TextField>
      <TextField
        label="Phone number"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        onChange={(e) => {
          let value = parseInt(e.target.value);
          if (isNaN(value)) {
            setErrors((errors) => ({
              ...errors,
              phoneNumber: "Value must be a valid number",
            }));
            return;
          }
          if (onChange) {
            const modelFields = {
              email,
              websiteIfOwned,
              phoneNumber: value,
              firstName,
              lastName,
              questions,
            };
            const result = onChange(modelFields);
            value = result?.phoneNumber ?? value;
          }
          if (errors.phoneNumber?.hasError) {
            runValidationTasks("phoneNumber", value);
          }
          setPhoneNumber(value);
        }}
        onBlur={() => runValidationTasks("phoneNumber", phoneNumber)}
        errorMessage={errors.phoneNumber?.errorMessage}
        hasError={errors.phoneNumber?.hasError}
        {...getOverrideProps(overrides, "phoneNumber")}
      ></TextField>
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              websiteIfOwned,
              phoneNumber,
              firstName: value,
              lastName,
              questions,
            };
            const result = onChange(modelFields);
            value = result?.firstName ?? value;
          }
          if (errors.firstName?.hasError) {
            runValidationTasks("firstName", value);
          }
          setFirstName(value);
        }}
        onBlur={() => runValidationTasks("firstName", firstName)}
        errorMessage={errors.firstName?.errorMessage}
        hasError={errors.firstName?.hasError}
        {...getOverrideProps(overrides, "firstName")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              websiteIfOwned,
              phoneNumber,
              firstName,
              lastName: value,
              questions,
            };
            const result = onChange(modelFields);
            value = result?.lastName ?? value;
          }
          if (errors.lastName?.hasError) {
            runValidationTasks("lastName", value);
          }
          setLastName(value);
        }}
        onBlur={() => runValidationTasks("lastName", lastName)}
        errorMessage={errors.lastName?.errorMessage}
        hasError={errors.lastName?.hasError}
        {...getOverrideProps(overrides, "lastName")}
      ></TextField>
      <TextField
        label="Questions"
        isRequired={false}
        isReadOnly={false}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              email,
              websiteIfOwned,
              phoneNumber,
              firstName,
              lastName,
              questions: value,
            };
            const result = onChange(modelFields);
            value = result?.questions ?? value;
          }
          if (errors.questions?.hasError) {
            runValidationTasks("questions", value);
          }
          setQuestions(value);
        }}
        onBlur={() => runValidationTasks("questions", questions)}
        errorMessage={errors.questions?.errorMessage}
        hasError={errors.questions?.hasError}
        {...getOverrideProps(overrides, "questions")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex {...getOverrideProps(overrides, "RightAlignCTASubFlex")}>
          <Button
            children="Cancel"
            type="button"
            onClick={() => {
              onCancel && onCancel();
            }}
            {...getOverrideProps(overrides, "CancelButton")}
          ></Button>
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}

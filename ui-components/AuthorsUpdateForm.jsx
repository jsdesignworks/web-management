/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { fetchByPath, validateField } from "./utils";
import { Authors } from "../models";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { DataStore } from "aws-amplify";
export default function AuthorsUpdateForm(props) {
  const {
    id,
    authors,
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
    first_name: undefined,
    last_name: undefined,
  };
  const [first_name, setFirst_name] = React.useState(initialValues.first_name);
  const [last_name, setLast_name] = React.useState(initialValues.last_name);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = { ...initialValues, ...authorsRecord };
    setFirst_name(cleanValues.first_name);
    setLast_name(cleanValues.last_name);
    setErrors({});
  };
  const [authorsRecord, setAuthorsRecord] = React.useState(authors);
  React.useEffect(() => {
    const queryData = async () => {
      const record = id ? await DataStore.query(Authors, id) : authors;
      setAuthorsRecord(record);
    };
    queryData();
  }, [id, authors]);
  React.useEffect(resetStateValues, [authorsRecord]);
  const validations = {
    first_name: [],
    last_name: [],
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
          first_name,
          last_name,
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
          const original = await DataStore.query(Authors, id);
          await DataStore.save(
            Authors.copyOf(original, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...rest}
      {...getOverrideProps(overrides, "AuthorsUpdateForm")}
    >
      <TextField
        label="First name"
        isRequired={false}
        isReadOnly={false}
        defaultValue={first_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name: value,
              last_name,
            };
            const result = onChange(modelFields);
            value = result?.first_name ?? value;
          }
          if (errors.first_name?.hasError) {
            runValidationTasks("first_name", value);
          }
          setFirst_name(value);
        }}
        onBlur={() => runValidationTasks("first_name", first_name)}
        errorMessage={errors.first_name?.errorMessage}
        hasError={errors.first_name?.hasError}
        {...getOverrideProps(overrides, "first_name")}
      ></TextField>
      <TextField
        label="Last name"
        isRequired={false}
        isReadOnly={false}
        defaultValue={last_name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              first_name,
              last_name: value,
            };
            const result = onChange(modelFields);
            value = result?.last_name ?? value;
          }
          if (errors.last_name?.hasError) {
            runValidationTasks("last_name", value);
          }
          setLast_name(value);
        }}
        onBlur={() => runValidationTasks("last_name", last_name)}
        errorMessage={errors.last_name?.errorMessage}
        hasError={errors.last_name?.hasError}
        {...getOverrideProps(overrides, "last_name")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={resetStateValues}
          {...getOverrideProps(overrides, "ResetButton")}
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

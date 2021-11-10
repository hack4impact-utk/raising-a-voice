import React, { useEffect, useState } from 'react';
import '../styles/NewMember.css';
import Input from '../components/Input/Input';
import RadioGroup from '../components/RadioGroup/RadioGroup';
import DatePicker from '../components/DatePicker/DatePicker';
import PhoneNumber from '../components/PhoneNumber/PhoneNumber';
import Button from '../components/Button/Button';
import Grid from '@mui/material/Grid';

const genderItems = [
  {id: 'male', title: 'Male'},
  {id: 'female', title: 'Female'},
  {id: 'other', title: 'Other'}
]

const maritalItems = [
  {id: 'single', title: 'Single'},
  {id: 'divorced', title: 'Divorced'},
  {id: 'widowed', title: 'Widowed'},
  {id: 'married', title: 'Married'}
]

const employmentItems = [
  {id: 'yes', title: 'Yes'},
  {id: 'no', title: 'No'},
]

const initialValues = {
  legalName: '',
  preferredName: '',
  DoB: null,
  sex: '',
  ssn: '',
  driversLicense: '',
  maritalStatus: '',
  residencyStatus: '',
  address: '',
  city: '',
  county: '',
  state: '',
  zip: '',
  cellNumber: '',
  email: '',
  employmentStatus: '',
  placeOfEmployment: ''
}

const NewMember = () => {
  const [values, setValues] = useState(initialValues);

  const handleInputChange = e => {
      const {name, value} = e.target;
      setValues({
          ...values,
          [name]: value
      });
  }

  const createProfile = async event => {
      event.preventDefault();

      /* Insert code to connect to backend */
  }

  return (
    <div style={{ marginLeft: 64 }}>
      <>
            <h1>Profile Creation</h1>
            <form id="creation">
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Input
                            label="Legal Name"
                            name="legalName"
                            value={values.legalName}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Input
                            label="Preferred Name"
                            name="preferredName"
                            value={values.preferredName}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <DatePicker
                            label="Date of Birth"
                            name="DoB"
                            value={values.DoB}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <RadioGroup
                            label="Sex"
                            name="sex"
                            value={values.sex}
                            onChange={handleInputChange}
                            items={genderItems}
                        />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <RadioGroup
                            label="Marital Status"
                            name="maritalStatus"
                            value={values.maritalStatus}
                            onChange={handleInputChange}
                            items={maritalItems}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <RadioGroup
                            label="Employment Status"
                            name="employmentStatus"
                            value={values.employmentStatus}
                            onChange={handleInputChange}
                            items={employmentItems}
                        />
                    </Grid>
                    <Grid item xs={12} md={9}>
                        <Input
                                label="Place of Employment (if necessary)"
                                name="placeOfEmployment"
                                value={values.placeOfEmployment}
                                onChange={handleInputChange}
                            />
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Input
                            label="Where does the client typically reside?"
                            name="residencyStatus"
                            value={values.residencyStatus}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Input
                            label="Address"
                            name="address"
                            value={values.address}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Input
                            label="City"
                            name="city"
                            value={values.city}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Input
                            label="County"
                            name="county"
                            value={values.county}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Input
                            label="State"
                            name="state"
                            value={values.state}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Input
                            label="Zip"
                            name="zip"
                            value={values.zip}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <PhoneNumber
                            label="Cell Number"
                            name="cellNumber"
                            value={values.cellNumber}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Input
                            label="Social Security #"
                            name="ssn"
                            value={values.ssn}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Input
                            label="Driver's License/ID #"
                            name="driversLicense"
                            value={values.driversLicense}
                            onChange={handleInputChange}
                        />
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <Button
                            variant="contained"
                            size="large"
                            color="primary"
                            text="create"
                            onClick={createProfile}
                            type="submit"
                        />
                    </Grid>
                </Grid>
            </form>
        </>
    </div>
  );
}
export default NewMember;
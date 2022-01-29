import Grid from '@mui/material/Grid';
import React, { useEffect, useState } from 'react';

import Button from '../components/Button/Button';
import DatePicker from '../components/DatePicker/DatePicker';
import Input from '../components/Input/Input';
import MultilineInput from '../components/MultilineInput/MultilineInput';
import PhoneNumber from '../components/PhoneNumber/PhoneNumber';
import RadioGroup from '../components/RadioGroup/RadioGroup';
import '../styles/NewMember.css';

const axios = require('axios');

/* Options for multiple choice questions */
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

const raceItems = [
  {id: 'white', title: 'White'},
  {id: 'black_or_african_american', title: 'Black or African American'},
  {id: 'american_indian_or_alaska_native', title: 'American Indian or Alaska Native'},
  {id: 'asian', title: 'Asian'},
  {id: 'native_hawaiian_or_other_pacific_islander', title: 'Native Hawaiian or Other Pacific Islander'}
]

const yesNoItems = [
  {id: 'Y', title: 'Yes'},
  {id: 'N', title: 'No'},
]

/* Starting state of the profile values */
const initialValues = {
  legal_name: '',
  nickname: '',
  DoB: null,
  marital_status: '',
  sex: '',
  race: '',
  address: '',
  city: '',
  county: '',
  state: '',
  zip: '',
  contact_number: '',
  social_security: '',
  drivers_license: '',
  employed: '',
  disability: '',
  insurance: '',
  veteran: '',
  dependents: '',
  substance_use: '',
  criminal_history: '',
  disabilities: '',
  disorders_and_health: '',
  medication_boolean: '',
  medication: '',
  notes: ''
}

const NewMember = () => {
  const [values, setValues] = useState(initialValues);

  /* Updates all profile values except DOB */
  const handleInputChange = e => {
    const {name, value} = e.target;
    setValues({
      ...values,
      [name]: value
    });
  }

  /* Updated the DOB profile value */
  const handleDoBChange = e => {
    const {name, value} = e.target;
    if (value === null) {
      setValues({
        ...values,
        [name]: null
      });
    } else {

      /* Get the month (MM) */
      let month;
      switch(value.getMonth()) {
        case 0:
          month = '01';
          break;
        case 1:
          month = '02';
          break;
        case 2:
          month = '03';
          break;
        case 3:
          month = '04';
          break;
        case 4:
          month = '05';
          break;
        case 5:
          month = '06';
          break;
        case 6:
          month = '07';
          break;
        case 7:
          month = '08';
          break;
        case 8:
          month = '09';
          break;
        case 9:
          month = '10';
          break;
        case 10:
          month = '11';
          break;
        case 11:
          month = '12';
          break;
      }

      /* Get the day (DD) */
      const day_num = value.getDate();
      let day;
      if (day_num.toString().length === 1) {
        day = '0' + day_num;
      } else {
        day = day_num
      }

      /* Get the year (YYYY) */
      const year = value.getFullYear();

      /* Format the DOB and convert dependents to an int */
      setValues({
        ...values,
        [name]: year + '-' + month + '-' + day,
      });
    }
  }

  const handleZipChange = e => {
    let {name, value} = e.target;
    
    /* Verify the zip is five characters in length */
    if (value.length > 5) {
      value = value.substr(0, 5);
    }
    setValues({
      ...values,
      [name]: value
    });
  }

  const handleDependentsChange = e => {
    let {name, value} = e.target;

    /* Convert the number of dependents to an int */
    if (value[value.length-1] >= '0' && value[value.length-1] <= '9') {
      value = parseInt(value, 10);
      setValues({
        ...values,
        [name]: value
      });
    } else if (value.length === 0) {
      setValues({
        ...values,
        [name]: value
      });
    }
  }

  /* Store profile in database */
  const createProfile = event => {
    event.preventDefault();  
    console.log(values);
    axios.post('https://raising-a-voice.vercel.app/profile/create', values);
  }

  return (
  <div>
    <h1>Profile Creation</h1>
    <form id="info-page">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Input
            label="Legal Name"
            name="legal_name"
            value={values.legal_name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input
            label="Nickname"
            name="nickname"
            value={values.nickname}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePicker
            label="Date of Birth"
            name="DoB"
            value={values.DoB === null ? values.DoB : values.DoB.replace(/-/g, '\/')}
            onChange={handleDoBChange}
          />
        </Grid>
        <Grid item xs={12} md={12} id="radio-group">
          <RadioGroup
            label="Marital Status"
            name="marital_status"
            value={values.marital_status}
            onChange={handleInputChange}
            items={maritalItems}
          />
        </Grid>
        <Grid item xs={12} md={12} id="radio-group">
          <RadioGroup
            label="Sex"
            name="sex"
            value={values.sex}
            onChange={handleInputChange}
            items={genderItems}
          />
        </Grid>
        <Grid item xs={12} md={12} id="radio-group">
          <RadioGroup
            label="Race"
            name="race"
            value={values.race}
            onChange={handleInputChange}
            items={raceItems}
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
            onChange={handleZipChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <PhoneNumber
            label="Contact Number"
            name="contact_number"
            value={values.contact_number}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input
            label="Social Security #"
            name="social_security"
            value={values.social_security}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input
            label="Driver's License"
            name="driver_license"
            value={values.driver_license}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} md={12} id="radio-group">
          <RadioGroup
            label="Employed"
            name="employed"
            value={values.employed}
            onChange={handleInputChange}
            items={yesNoItems}
          />
        </Grid>
        <Grid item xs={12} md={12} id="radio-group">
          <RadioGroup
            label="Insurance"
            name="insurance"
            value={values.insurance}
            onChange={handleInputChange}
            items={yesNoItems}
          />
        </Grid>
        <Grid item xs={12} md={12} id="radio-group">
          <RadioGroup
            label="Veteran"
            name="veteran"
            value={values.veteran}
            onChange={handleInputChange}
            items={yesNoItems}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Input
            label="Number of Dependents"
            name="dependents"
            value={values.dependents}
            onChange={handleDependentsChange}
          />
        </Grid>
        <Grid item xs={12}>
          <MultilineInput
            label="Substance Use"
            name="substance_use"
            value={values.substance_use}
            onChange={handleInputChange}
            rows={3}
          />
        </Grid>
        <Grid item xs={12}>
          <MultilineInput
            label="Criminal History"
            name="criminal_history"
            value={values.criminal_history}
            onChange={handleInputChange}
            rows={3}
          />
        </Grid>
        <Grid item xs={12} md={12} id="radio-group">
          <RadioGroup
            label="Disability"
            name="disability"
            value={values.disability}
            onChange={handleInputChange}
            items={yesNoItems}
          />
        </Grid>
        <Grid item xs={12}>
          <MultilineInput
            label="Please specify any disabilities (if applicable)"
            name="disabilities"
            value={values.disabilities}
            onChange={handleInputChange}
            rows={3}
          />
        </Grid>
        <Grid item xs={12}>
          <MultilineInput
            label="Disorders and Health"
            name="disorders_and_health"
            value={values.disorders_and_health}
            onChange={handleInputChange}
            rows={3}
          />
        </Grid>
        <Grid item xs={12} md={12} id="radio-group">
          <RadioGroup
            label="Any Current Medications?"
            name="medication_boolean"
            value={values.medication_boolean}
            onChange={handleInputChange}
            items={yesNoItems}
          />
        </Grid>
        <Grid item xs={12}>
          <MultilineInput
            label="Please specify any medication (if applicable)"
            name="medication"
            value={values.medication}
            onChange={handleInputChange}
            rows={3}
          />
        </Grid>
        <Grid item xs={12}>
          <MultilineInput
            label="Notes"
            name="notes"
            value={values.notes}
            onChange={handleInputChange}
            rows={7}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Button
            variant="contained"
            size="large"
            text="create"
            onClick={createProfile}
            type="submit"
          />
        </Grid>
      </Grid>
    </form>
  </div>
  );
}
export default NewMember;
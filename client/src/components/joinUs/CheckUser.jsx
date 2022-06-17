import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const CheckUser = ({ user, onCheck, handleChange }) => {
  const { parent, consultant } = user;
  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">I'm a</FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        onChange={handleChange}
      >
        <FormControlLabel
          checked={parent === true}
          value={parent}
          onChange={onCheck}
          control={<Radio />}
          label="Parent"
          name="parent"
        />
        <FormControlLabel
          checked={consultant === true}
          value={consultant}
          onChange={onCheck}
          control={<Radio />}
          label="Consultant"
          name="consultant"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default CheckUser;

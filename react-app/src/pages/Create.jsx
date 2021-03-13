import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  makeStyles,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { createUser } from "./../actions/user";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "50ch",
    },
    buttonProgress: {
      color: "#fff",
      position: "absolute",
      top: "50%",
      left: "50%",
      marginTop: -12,
      marginLeft: -12,
    },
  },
}));

function Create() {
  const classes = useStyles();
  const history = useHistory();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.users?.loading);
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    handleValidate(inputs);
  }, [inputs]);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (handleValidate(inputs)) {
      dispatch(createUser(inputs, history));
    }
  }

  function handleValidate(values) {
    let errors = {};
    let isValid = true;
    if (!values["firstName"]) {
      isValid = false;
      errors["firstName"] = "Please enter first name";
    }
    if (!values["lastName"]) {
      isValid = false;
      errors["lastName"] = "Please enter last name.";
    }
    if (!values["email"]) {
      isValid = false;
      errors["email"] = "Please enter email address";
    }
    setErrors(errors);
    return isValid;
  }

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>Create User</h1>
      <form
        className={classes.root}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          type="text"
          name="firstName"
          label="First Name"
          value={inputs.firstName}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          type="text"
          name="lastName"
          label="Last Name"
          value={inputs.lastName}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          type="email"
          name="email"
          label="Email"
          value={inputs.email}
          onChange={handleChange}
          fullWidth
        />
        <Button
          disabled={loading}
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
        {loading && (
          <CircularProgress size={24} className={classes.buttonProgress} />
        )}
      </form>
    </React.Fragment>
  );
}

export default Create;

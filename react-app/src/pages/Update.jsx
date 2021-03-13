import React, { useState, useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import {
  makeStyles,
  TextField,
  Button,
  CircularProgress,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getUserById, updateUserById } from "./../actions/user";

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

function Update() {
  const classes = useStyles();
  const history = useHistory();
  const { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.users?.loading);
  const user = useSelector((state) => state.users?.item);
  const [inputs, setInputs] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    dispatch(getUserById(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (user) {
      setInputs(user);
    }
  }, [user]);

  function handleChange(e) {
    const { name, value } = e.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    if (!inputs.firstName || !inputs.lastName || !inputs.email) {
      return;
    }
    dispatch(updateUserById(id, inputs, history));
  }

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>Update User</h1>
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
          name="firstName"
          label="First Name"
          value={inputs.firstName}
          onChange={handleChange}
          fullWidth
        />
        <TextField
          name="lastName"
          label="Last Name"
          value={inputs.lastName}
          onChange={handleChange}
          fullWidth
        />
        <TextField
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

export default Update;

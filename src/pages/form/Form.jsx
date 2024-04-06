import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Alert,
  Button,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Snackbar from "@mui/material/Snackbar";
import { useForm } from "react-hook-form";
import { useTheme } from "@emotion/react";

export const Form = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    handleClick();
  };

  const data = [
    {
      value: "Admin",
      label: "Admin",
    },
    {
      value: "Manager",
      label: "Manager",
    },
    {
      value: "User",
      label: "User",
    },
  ];
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneNumberPattern = /^(01)[0-9]{9}$/;

  const theme = useTheme();
  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component="form"
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
      noValidate
      autoComplete="off"
    >
      <Box>
        <Typography
          sx={{
            fontSize: "23px",
            fontWeight: "bold",
            color: theme.palette.primary.main,
          }}
        >
          Create User
        </Typography>
        <Typography>Create a new user profile</Typography>
      </Box>
      <Stack direction={"row"} gap={2}>
        <TextField
          label="First name"
          variant="filled"
          sx={{ flex: 1 }}
          error={Boolean(errors.firstName)}
          helperText={
            Boolean(errors.firstName) ? "this field is required" : null
          }
          {...register("firstName", { required: true, minLength: 3 })}
        />
        <TextField
          label="Last name"
          variant="filled"
          sx={{ flex: 1 }}
          error={Boolean(errors.lastName)}
          helperText={
            Boolean(errors.lastName) ? "this field is required" : null
          }
          {...register("lastName", { required: true, minLength: 3 })}
        />
      </Stack>
      <TextField
        label="Email"
        variant="filled"
        error={Boolean(errors.email)}
        helperText={Boolean(errors.email) ? "this field is required" : null}
        {...register("email", { required: true, pattern: emailPattern })}
      />
      <TextField
        label="Contact number"
        variant="filled"
        error={Boolean(errors.contact)}
        helperText={Boolean(errors.contact) ? "this field is required" : null}
        {...register("contact", {
          required: true,
          pattern: phoneNumberPattern,
        })}
      />
      <TextField
        label="Address1"
        variant="filled"
        error={Boolean(errors.Address1)}
        helperText={Boolean(errors.Address1) ? "this field is required" : null}
        {...register("Address1", { required: true, minLength: 3 })}
      />
      <TextField
        label="Address2"
        variant="filled"
        error={Boolean(errors.Address2)}
        helperText={Boolean(errors.Address2) ? "this field is required" : null}
        {...register("Address2", { required: true, minLength: 3 })}
      />
      <TextField
        id="filled-select-currency"
        select
        label="Role"
        defaultValue="User"
        variant="filled"
        error={Boolean(errors.role)}
        helperText={Boolean(errors.role) ? "this field is required" : null}
        {...register("role", { required: true })}
      >
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ textAlign: "right" }}>
        <Button
          type="submit"
          variant="contained"
          sx={{ py: 1, textTransform: "capitalize" }}
        >
          Create new user
        </Button>

        <Snackbar
          open={open}
          autoHideDuration={2000}
          onClose={handleClose}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert variant="filled" severity="info">
            Account Created Successfully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

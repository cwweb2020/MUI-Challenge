/* eslint-disable react/prop-types */
import { Box, Button, FormHelperText, TextField } from "@mui/material";
import { useSwiper } from "swiper/react";

const CreditCardForm = ({ formik, handleFocusField }) => {
  const swiper = useSwiper();

  const handleFocus = (number, field) => {
    swiper.slideTo(number);
    handleFocusField(field);
  };
  return (
    <Box
      onSubmit={formik.handleSubmit}
      component={"form"}
      sx={{ my: 5, mx: "auto" }}
      maxWidth={400}
    >
      {formik.errors.card_name && (
        <FormHelperText sx={{ mb: 2 }} error={true}>
          {formik.errors.card_name}
        </FormHelperText>
      )}
      <TextField
        error={formik.errors.card_name}
        onFocus={() => handleFocus(0, 1)}
        name="card_name"
        onChange={formik.handleChange}
        type="text"
        sx={{ mb: 2 }}
        fullWidth
        label={"Card Name"}
      />
      {formik.errors.card_number && (
        <FormHelperText sx={{ mb: 1 }} error={true}>
          {formik.errors.card_number}
        </FormHelperText>
      )}
      <TextField
        onFocus={() => handleFocus(0, 2)}
        error={formik.errors.card_number}
        name="card_number"
        onChange={formik.handleChange}
        inputProps={{ maxLength: 16 }}
        type="text"
        sx={{ mb: 2 }}
        fullWidth
        label={"Card Number"}
      />
      {formik.errors.exp_date && (
        <FormHelperText sx={{ mb: 1 }} error={true}>
          {formik.errors.exp_date}
        </FormHelperText>
      )}
      <TextField
        onFocus={() => handleFocus(0, 3)}
        error={formik.errors.exp_date}
        name="exp_date"
        onChange={formik.handleChange}
        inputProps={{
          maxLength: 4,
        }}
        type="text"
        sx={{ mb: 2 }}
        fullWidth
        label={"Valid Date"}
      />
      {formik.errors.card_holder && (
        <FormHelperText sx={{ mb: 1 }} error={true}>
          {formik.errors.card_holder}
        </FormHelperText>
      )}
      <TextField
        onFocus={() => handleFocus(0, 4)}
        name="card_holder"
        error={formik.errors.card_holder}
        onChange={formik.handleChange}
        type="text"
        sx={{ mb: 2 }}
        fullWidth
        label={"Card Holder"}
      />
      {formik.errors.cvv && (
        <FormHelperText sx={{ mb: 1 }} error={true}>
          {formik.errors.cvv}
        </FormHelperText>
      )}
      <TextField
        onFocus={() => handleFocus(1, 5)}
        error={formik.errors.cvv}
        name="cvv"
        onChange={formik.handleChange}
        type="text"
        sx={{ mb: 2 }}
        inputProps={{
          maxLength: 3,
        }}
        fullWidth
        label={"CVV"}
      />
      <Button
        disabled={
          Object.values(formik.values).some((val) => !val) ||
          Object.keys(formik.errors).length
        }
        type="submit"
        fullWidth
        mb={4}
        color="secondary"
        size="large"
        variant="contained"
      >
        Add Card
      </Button>
    </Box>
  );
};

export default CreditCardForm;

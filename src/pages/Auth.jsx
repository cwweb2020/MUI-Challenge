import {
  Box,
  Button,
  Container,
  FormHelperText,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import useAuth from "../hooks/useAuth";

const Auth = () => {
  const { formik } = useAuth();
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "90vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
   <Paper sx={{px:15,py:5}} square elevation={1}>
      <Typography variant="h4" textTransform={"uppercase"} mb={3}>
        Ingresa tu nombre
      </Typography>
        <Box
          onSubmit={formik.handleSubmit}
          width={"70%"}
          display={"flex"}
          flexDirection={"column"}
          mx="auto"
          component={"form"}
        >
          <TextField
            error={formik.errors.name && true}
            name="name"
            onChange={formik.handleChange}
            sx={{ my: 2 }}
            label="Nombre"
          />
          {formik.errors.name && (
            <FormHelperText sx={{ my: 1 }} error>
              {formik.errors.name}
            </FormHelperText>
          )}
          <Button
            disabled={
              formik.values.name.length < 1 ||
              Object.keys(formik.errors).length > 0
            }
            sx={{ mt: 2 }}
            size="large"
            type="submit"
            variant="contained"
            color="secondary"
          >
            Ingresar
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Auth;

import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { AuthSchema } from "../validations/auth.validation";
import { useContext } from "react";
import { AppContext } from "../context/AppProvider";

const useAuth = () => {
  const navigate = useNavigate();
  const { login } = useContext(AppContext);
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    validationSchema: AuthSchema,
    onSubmit: (values) => {
      login(values.name);
      navigate("/");
    },
  });
  return {
    formik,
  };
};

export default useAuth;

import { Box, Button, TextField, useMediaQuery } from "@mui/material";
import Header from "../../components/Header";
import { Formik } from "formik";
import * as yup from "yup";
import { useTheme } from "@emotion/react";
import { tokens } from "../../theme";
import { Link } from "react-router-dom";

const Item = ({ to }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return <Link to={to} />;
};

const initialValues = {
  id: "",
  password: "",
};

const userSchema = yup.object().shape({
  id: yup.string().required("필수"),
  password: yup.string().required("필수"),
});

const Signin = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="로그인" subtitle="" />
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={userSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="20px"
              gridTemplateColumns="repeat(1, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="아이디"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.id}
                name="id"
                error={!!touched.id && !!errors.id}
                helperText={touched.id && errors.id}
                sx={{ gridColumn: "span 4" }}
              />
              <br />
              <TextField
                fullWidth
                variant="filled"
                type="password"
                label="비밀번호"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.password}
                name="password"
                error={!!touched.password && !!errors.password}
                helperText={touched.password && errors.password}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="center" mt="20px">
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button type="submit" color="secondary" variant="contained">
                  로그인
                </Button>
              </Link>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <Button type="submit" color="secondary" variant="contained">
                  회원가입
                </Button>
              </Link>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Signin;

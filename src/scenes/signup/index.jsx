import { Box, Button, TextField } from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import { Link } from "react-router-dom";

const initialValues = {
  firstName: "",
  lastName: "",
  phone: "",
  hostipal: "",
  disName: "",
  date: "",
  birdate: "",
  time: "",
};

const phoneRegExp =
  /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

const userSchema = yup.object().shape({
  firstName: yup.string().required("필수"),
  lastName: yup.string().required("필수"),
  docName: yup.string().required("필수"),
  disName: yup.string().required("필수"),
  phone: yup
    .string()
    .matches(phoneRegExp, "핸드폰 번호가 올바르지 않습니다.")
    .required("필수"),
  date: yup.string().required("필수"),
  birdate: yup.string().required("필수"),
  time: yup.string().required("필수"),
});

const Signup = () => {
  const isNonMobile = useMediaQuery("(min-width: 600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    <Box m="20px">
      <Header title="회원가입" subtitle="" />
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
              gap="30px"
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="성"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="firstName"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="이름"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.lastName}
                name="lastName"
                error={!!touched.lastName && !!errors.lastName}
                helperText={touched.lastName && errors.lastName}
                sx={{ gridColumn: "span 2" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="전화번호"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.phone}
                name="phone"
                error={!!touched.phone && !!errors.phone}
                helperText={touched.phone && errors.phone}
                sx={{ gridColumn: "span 4" }}
              />
              <TextField
                fullWidth
                variant="filled"
                type="date"
                label="생년월일"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.birdate}
                name="birdate"
                error={!!touched.birdate && !!errors.birdate}
                helperText={touched.birdate && errors.birdate}
                sx={{ gridColumn: "span 4" }}
              />
            </Box>
            <Box display="flex" justifyContent="center" mt="20px">
              <Link to="/signin" style={{ textDecoration: "none" }}>
                <Button type="submit" color="secondary" variant="contained">
                  가입하기
                </Button>
              </Link>
            </Box>
            <Box display="flex" justifyContent="end" mt="20px">
              <Link to="/" style={{ textDecoration: "none" }}>
                <Button type="submit" color="secondary" variant="contained">
                  로그인
                </Button>
              </Link>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default Signup;

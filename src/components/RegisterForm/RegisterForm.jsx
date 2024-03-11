import { useFormik } from "formik";
import { Form, Input, InputWrap, RegisterBtn, Text, Title } from "./RegistrationForm.styled";

export const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <div>
        <Title>Registration</Title>
        <Text>
          Thank you for your interest in our platform! In order to register, we
          need some information. Please provide us with the following
          information
        </Text>
      </div>
      <InputWrap>
        <Input
          id="firstName"
          name="firstName"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.firstName}
          placeholder="Name"
        />

        <Input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.lastName}
          placeholder="Email"
        />

        <Input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.email}
          placeholder="Password"
        />
      </InputWrap>

      <RegisterBtn type="submit">Sign up</RegisterBtn>
    </Form>
  );
};

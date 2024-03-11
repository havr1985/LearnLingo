import { useFormik } from "formik";
import {
  Form,
  Input,
  InputWrap,
  RegisterBtn,
  Text,
  Title,
} from '../RegisterForm/RegistrationForm.styled'


export const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
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
        <Title>Login</Title>
        <Text>
          Welcome back! Please enter your credentials to access your account and
          continue your search for an teacher.
        </Text>
      </div>
      <InputWrap>
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

      <RegisterBtn type="submit">Log in</RegisterBtn>
    </Form>
  );
};

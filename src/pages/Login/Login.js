import React from "react";
import {
  Box,
  Form,
  FormField,
  TextInput,
  Button,
  Text,
  CheckBox,
  Spinner,
  Layer,
} from "grommet";
import { MailOption, ShieldSecurity } from "grommet-icons";
import useLogin from "../../auth/hooks/useLogin";
import { theme } from "../../theme/default";
import { useHistory } from "react-router-dom";

export const Login = () => {
  const { login, error, isLoading } = useLogin();
  let history = useHistory();

  const handleSubmit = async (value) => {
    await login(value);
    setTimeout(() => {
      history.push("/ecomerce");
    }, 2000);
  };

  return (
    <Box>
      <Box
        align="center"
        pad="large"
        animation={{ type: "slideUp", delay: 200, size: "medium" }}
      >
        <Form onSubmit={({ value }) => handleSubmit(value)}>
          <Box
            border
            gap="medium"
            pad="large"
            width="medium"
            style={{ borderRadius: 9 }}
          >
            <Text size="large" weight="bold">
              Login
            </Text>

            <FormField htmlFor="identifier" name="enabled" label="Email">
              <TextInput
                id="identifier"
                name="identifier"
                type="email"
                icon={<MailOption />}
                required
                placeholder="Escriba su email"
              />
            </FormField>
            <FormField htmlFor="password" name="focus" label="Contraseña">
              <TextInput
                id="password"
                name="password"
                type="password"
                icon={<ShieldSecurity />}
                required
                placeholder="Escriba su contraseña"
              />
            </FormField>
            <CheckBox
              id="rememberMe"
              name="rememberMe"
              label="Recuérdame"
              defaultChecked={true}
            />
            <Box direction="row" gap="medium">
              <Button
                type="submit"
                label={isLoading ? <Spinner /> : "Enviar"}
                secondary
                alignSelf="center"
              />
              <Button primary type="reset" label="Resetear" />
            </Box>
          </Box>
        </Form>
      </Box>
      {error && (
        <Layer
          position="bottom"
          modal={false}
          style={{
            background: theme.global.colors.background.secundary,
            color: theme.global.colors.background.light,
            borderRadius: 15,
            padding: 20,
            marginBottom: 5,
          }}
          responsive={false}
          plain
          fill="horizontal"
          // onClickOutside={() => setShow(false)}
        >
          {error}
        </Layer>
      )}
    </Box>
  );
};

export default Login;

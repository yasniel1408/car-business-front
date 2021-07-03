import React, { useState } from "react";
import {
  Box,
  Form,
  FormField,
  TextInput,
  Button,
  Text,
  Layer,
  Spinner,
} from "grommet";
import { User, ShieldSecurity, MailOption } from "grommet-icons";
import { theme } from "../../theme/default";
import { useHistory } from "react-router-dom";
import useRegister from "../../auth/hooks/useRegister";

export const Register = () => {
  const { register, error, isLoading, data } = useRegister();
  const [errorPasswordDif, setErrorPasswordDif] = useState();
  let history = useHistory();

  const handleSubmit = (value) => {
    if (value.password !== value.passwordRepeat) {
      setErrorPasswordDif("Las contraseñas no son iguales");
    } else {
      register(value);
      setTimeout(() => {
        history.push("/login");
      }, 1000);
    }
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
              Register
            </Text>
            <FormField
              htmlFor="identifier"
              name="enabled"
              label="Nombre de usuario"
            >
              <TextInput
                id="username"
                type="text"
                name="username"
                icon={<User />}
                required
                placeholder="Escriba su nombre de usuario"
              />
            </FormField>
            <FormField htmlFor="email" name="enabled" label="Email">
              <TextInput
                id="email"
                type="email"
                name="email"
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
            <FormField htmlFor="password" name="focus" label="Contraseña">
              <TextInput
                id="passwordRepeat"
                name="passwordRepeat"
                type="password"
                icon={<ShieldSecurity />}
                required
                placeholder="Escriba nuevamente su contraseña"
              />
            </FormField>
            <Box direction="row" gap="medium">
              <Button
                type="submit"
                label={isLoading ? <Spinner /> : "Enviar"}
                secondary
                alignSelf="center"
              />

              <Button type="reset" label="Resetear" primary />
            </Box>
          </Box>
        </Form>
      </Box>
      {(error || errorPasswordDif) && (
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
          {error || errorPasswordDif}
        </Layer>
      )}
      {!!data.user && (
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
          Usted ha sido registrado correctamente
        </Layer>
      )}
    </Box>
  );
};

export default Register;

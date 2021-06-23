import React from "react";
import { Box, Form, FormField, TextInput, Button, Text } from "grommet";
import { User, ShieldSecurity } from "grommet-icons";

export const Register = () => {
  return (
    <Box>
      <Box align="center" pad="large" animation={{ type: "slideUp", delay: 200, size: "medium" }}>
        <Form onSubmit={({ value }) => alert(JSON.stringify(value))}>
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
              htmlFor="username"
              name="enabled"
              label="Nombre de usuario"
            >
              <TextInput
                id="username"
                name="username"
                icon={<User />}
                required
                placeholder="Escriba su nombre de usuario"
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
                id="password"
                name="password"
                type="password"
                icon={<ShieldSecurity />}
                required
                placeholder="Escriba nuevamente su contraseña"
              />
            </FormField>
            <Box direction="row" gap="medium">
              <Button type="submit" primary label="Enviar" />
              <Button type="reset" label="Resetear" />
            </Box>
          </Box>
        </Form>
      </Box>
    </Box>
  );
};

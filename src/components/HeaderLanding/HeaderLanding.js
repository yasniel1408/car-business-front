import React, { useContext } from "react";
import { Box, Header, Nav, Button, Text, Avatar, Menu } from "grommet";
import { User } from "grommet-icons";
import { Login, List } from "grommet-icons";
import { theme } from "../../theme/default";
import { NavLink } from "react-router-dom";
import { DataUserContext } from "../../auth/context/UserContextProvider";
import useLogout from "../../auth/hooks/useLogout";

export const HeaderLanding = () => {
  const { user } = useContext(DataUserContext);
  const { logout } = useLogout()

  return (
    <Header
      align="end"
      direction="row-responsive"
      flex={false}
      justify="between"
      gap="medium"
      fill="horizontal"
      background={{
        color: theme.global.colors.background.primaryDark,
        position: "top",
      }}
      border={{ side: "all", style: "solid" }}
      pad="small"
    >
      <Box
        align="center"
        justify="center"
        animation={{ type: "slideUp", delay: 700 }}
      >
        <NavLink to="/">
          <Nav align="center" flex={false}>
            <Text
              size="2xl"
              weight="bold"
              color={theme.global.colors.background.light}
            >
              Car Business
            </Text>
          </Nav>
        </NavLink>
      </Box>
      <Box
        align="center"
        justify="center"
        direction="row"
        animation={{
          type: "pulse",
          delay: 300,
          size: "small",
          duration: 300,
        }}
      >
        {!user ? (
          <>
            <Nav
              align="center"
              flex={false}
              animation={{ type: "slideLeft", delay: 200, size: "xlarge" }}
            >
              <NavLink to="/login">
                <Button
                  label="Login"
                  icon={<Login color="white" />}
                  active={false}
                  color="accent-2"
                  primary
                  secondary
                  margin={{ right: "10px" }}
                  style={{ color: "white" }}
                  hoverIndicator={{ color: "accent-2" }}
                />
              </NavLink>
            </Nav>
            <Nav
              align="center"
              flex={false}
              animation={{ type: "slideLeft", delay: 300, size: "xlarge" }}
            >
              <NavLink to="/register">
                <Button
                  label="Register"
                  icon={<List color="white" />}
                  color="accent-2"
                  primary
                  secondary
                  style={{ color: "white" }}
                  hoverIndicator={{ color: "accent-2" }}
                />
              </NavLink>
            </Nav>
          </>
        ) : (
          <>
            <Box direction="row" gap="small">
              <Avatar background="accent-2">
                <User color="accent-1" />
              </Avatar>
            </Box>

            <Menu
              label={user.username}
              style={{color: "white"}}
              items={[
                { label: "Card", onClick: () => {} },
                { label: "Logout", onClick: () => logout() },
              ]}
            />
          </>
        )}
      </Box>
    </Header>
  );
};

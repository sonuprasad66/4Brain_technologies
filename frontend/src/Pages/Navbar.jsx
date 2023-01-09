import { Box, Button, Flex } from "@chakra-ui/react";
import { LinkIcon } from "@chakra-ui/icons";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { USER_LOGOUT_SUCCESS } from ".././Redux/Auth/actionTypes";

export const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuth = useSelector((state) => state.AuthReducer.isAuth);

  const handleLogout = () => {
    dispatch({ type: USER_LOGOUT_SUCCESS });
    navigate("/login");
  };

  return (
    <>
      <Flex
        w={"100%"}
        p={5}
        justifyContent={"space-around"}
        alignItems={"center"}
        style={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <Link to="/webcam">
          <Flex gap={1}>
            <Box
              p={"4px 10px"}
              color={"white"}
              bg={"red"}
              borderRadius={2}
              mt={1}
            >
              H
            </Box>
            <Box
              color={"white"}
              bg={"blue"}
              borderRadius={2}
              p={"4px 10px"}
              mb={1}
            >
              O
            </Box>
            <Box
              color={"white"}
              bg={"black"}
              borderRadius={2}
              p={"4px 10px"}
              mt={1}
            >
              M
            </Box>
            <Box
              color={"white"}
              bg={"green"}
              borderRadius={2}
              p={"4px 10px"}
              mb={1}
            >
              E
            </Box>
          </Flex>
        </Link>

        {isAuth ? (
          <Button colorScheme={"blue"} onClick={handleLogout}>
            Logout
          </Button>
        ) : (
          <>
            <Flex gap={5}>
              <Link to="/login">
                <Button
                  rounded={"20px"}
                  p={"10px 30px"}
                  colorScheme={"blue"}
                  gap={2}
                >
                  <LinkIcon /> Login
                </Button>
              </Link>
              <Link to="/">
                <Button rounded={"20px"} p={"10px 30px"} boxShadow="xs" gap={2}>
                  <LinkIcon /> SignUp
                </Button>
              </Link>
            </Flex>
          </>
        )}
      </Flex>
    </>
  );
};

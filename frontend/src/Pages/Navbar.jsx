import { Flex } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <Flex
        w={"100%"}
        p={5}
        justifyContent={"space-around"}
        alignItems={"center"}
        border={"1px solid red"}
      >
        <Link>Home</Link>
        <Link to="/login">Login</Link>
        <Link to="/">Sign Up</Link>
      </Flex>
    </>
  );
};

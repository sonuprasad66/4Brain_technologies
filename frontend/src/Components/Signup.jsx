import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSignup } from "../Redux/Auth/action";

export const Signup = () => {
  const [data, setData] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();

  const isLoading = useSelector((state) => state.AuthReducer.isLoading);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userSignup(data)).then((res) => {
      if (res.payload.message === "User Register Successful") {
        toast({
          title: res.payload.message,
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        navigate("/login");
      } else {
        toast({
          title: res.payload.message,
          status: "error",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
      }
    });
  };

  return (
    <>
      <Box
        w="350px"
        m="100px auto"
        p={5}
        rounded={5}
        style={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <form id="form" onSubmit={handleSubmit}>
          <Heading textAlign={"center"} size="md">
            Sign Up
          </Heading>
          <FormControl isRequired>
            <FormLabel>User Name </FormLabel>
            <Input
              type="text"
              placeholder="Enter User Name "
              name="name"
              onChange={handleChange}
            />

            <FormLabel>User Email</FormLabel>
            <Input
              type="email"
              placeholder="Enter User Email "
              name="email"
              onChange={handleChange}
            />

            <FormLabel>Mobile Number </FormLabel>
            <Input
              type="number"
              placeholder="Enter Mobile Number"
              name="mobile_number"
              onChange={handleChange}
            />
          </FormControl>

          <Button type="submit" w="full" mt={5} colorScheme="blue">
            {isLoading ? (
              <>
                <Spinner
                  thickness="4px"
                  speed="0.65s"
                  emptyColor="gray.200"
                  color="blue.500"
                  size="md"
                />
              </>
            ) : (
              "Register"
            )}
          </Button>
        </form>
      </Box>
    </>
  );
};

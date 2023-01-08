import React, { useState } from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  PinInput,
  PinInputField,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { matchOtp } from "../Redux/Auth/action";

export const Otp = () => {
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useToast();
  const isLoading = useSelector((state) => state.AuthReducer.isLoading);
  const currentUser = useSelector((state) => state.AuthReducer.currentUser);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(matchOtp({ email: currentUser, otp: value })).then((res) => {
      if (res.payload.message === "Login Successful") {
        toast({
          title: res.payload.message,
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "top",
        });
        navigate("/home");
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
        w="300px"
        m="100px auto"
        p={5}
        rounded={5}
        style={{
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Heading textAlign={"center"} size="md">
            OTP Page
          </Heading>
          <FormControl isRequired>
            <FormLabel>Enter OTP </FormLabel>
            <HStack>
              <PinInput onChange={(e) => setValue(e)}>
                <PinInputField />
                <PinInputField />
                <PinInputField />
                <PinInputField />
              </PinInput>
            </HStack>
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
              "Submit"
            )}
          </Button>
        </form>
      </Box>
    </>
  );
};

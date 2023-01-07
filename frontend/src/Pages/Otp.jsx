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
} from "@chakra-ui/react";

export const Otp = () => {
  const [value, setValue] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(value);
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
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
};

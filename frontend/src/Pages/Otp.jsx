import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";

export const Otp = () => {
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
        <form>
          <Heading textAlign={"center"} size="md">
            OTP Page
          </Heading>
          <FormControl>
            <FormLabel>Enter OTP </FormLabel>

            {new Array(4).fill(1).map((item, index) => {
              return (
                <Input type="number" key={index} w={"50px"} h={"50px"} m={1} />
              );
            })}
          </FormControl>

          <Button type="submit" w="full" mt={5} colorScheme="blue">
            Submit
          </Button>
        </form>
      </Box>
    </>
  );
};

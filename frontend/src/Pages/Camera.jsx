import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Img,
  useToast,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import { getDetails } from "../Redux/App/action";

const videoConstraints = {
  width: 640,
  facingMode: "environment",
};

export const Camera = () => {
  const webcamRef = useRef(null);
  const [url, setUrl] = React.useState(null);
  const [userDetails, setUserDetails] = useState({});
  const dispatch = useDispatch();
  const toast = useToast();
  const currentUser = useSelector((state) => state.AuthReducer.currentUser);

  const capturePhoto = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
    dispatch(getDetails(currentUser)).then((res) => {
      toast({
        title: "Image Capture Success",
        status: "success",
        duration: 2000,
        isClosable: true,
        position: "top",
      });
      setUserDetails(res.payload);
    });
  }, [webcamRef]);

  const onUserMedia = (e) => {
    // console.log(e);
  };

  return (
    <>
      <Center>
        <Box mt={5}>
          {url ? (
            <>
              <Box>
                <Img src={url} alt="Screenshot" w={"500px"} h={"300px"} />
              </Box>
              <Box>
                <Heading size={"20px"}>Name:- {userDetails.name}</Heading>
                <Heading size={"20px"}>Email:- {userDetails.email}</Heading>
                <Heading size={"20px"}>
                  Mobile Number:- {userDetails.mobile_number}
                </Heading>
              </Box>
              <Button onClick={() => setUrl(null)} colorScheme={"blue"}>
                Refresh
              </Button>
            </>
          ) : (
            <>
              <Webcam
                ref={webcamRef}
                audio={false}
                screenshotFormat="image/jpeg"
                videoConstraints={videoConstraints}
                onUserMedia={onUserMedia}
              />
              <Flex justifyContent={"center"} mt={3} gap={"10px"}>
                <Button onClick={capturePhoto} colorScheme={"blue"}>
                  Capture
                </Button>
                <Button onClick={() => setUrl(null)} colorScheme={"blue"}>
                  Refresh
                </Button>
              </Flex>
            </>
          )}
        </Box>
      </Center>
    </>
  );
};

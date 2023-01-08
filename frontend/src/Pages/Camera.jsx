import { Box, Button, Center, Flex } from "@chakra-ui/react";
import React, { useRef } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 640,
  facingMode: "environment",
};

export const Camera = () => {
  const webcamRef = useRef(null);
  const [url, setUrl] = React.useState(null);

  const capturePhoto = React.useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUrl(imageSrc);
  }, [webcamRef]);

  const onUserMedia = (e) => {
    console.log(e);
  };

  const handleSave = () => {
    console.log(url);
  };

  return (
    <>
      <Center>
        <Box mt={5}>
          {url ? (
            <>
              <div>
                <img src={url} alt="Screenshot" />
              </div>
              <Flex justifyContent={"center"} mt={3} gap={"10px"}>
                <Button onClick={() => setUrl(null)} colorScheme={"blue"}>
                  Refresh
                </Button>
                <Button onClick={handleSave} colorScheme={"blue"}>
                  Save
                </Button>
              </Flex>
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

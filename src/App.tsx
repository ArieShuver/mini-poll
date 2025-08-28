import React, { useState } from "react";
import { Box, Button, Heading, VStack, Text ,HStack, Flex } from "@chakra-ui/react";
import Head from "./components/haeder";
import Buttonmy from "./components/button";

type ButtonmyProps = {
  label: string;
  onClick: () => void;
};

export default function App() {
  const [types] = useState<string[]>(["React", "Vue", "Svelte"]);
  const [counter, setCounter] = useState<number[]>([0, 0, 0]);
  const [showResults, setShowResults] = useState<boolean>(false);


  return (
    <Box p={5} maxW="400px" mx="auto">
      <Heading mb={4}>
        <Head>Mini Poll</Head>
      </Heading>

      <VStack align="start" spacing={3}>
        {types.map((type, index) => (
          <Box
            key={type}
            p={3}
            borderWidth="1px"
            borderRadius="md"
            w="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text fontWeight={"normal"}>
              {type} {showResults ? `- ${counter[index]} הצבעות` : ""}
            </Text>
            <Buttonmy
              label="Click"
              onClick={() =>
                setCounter((prevCounter) => {
                  const newCounter = [...prevCounter];
                  newCounter[index]++;
                  return newCounter;
                })
              }
            />
          </Box>
        ))}
      </VStack>
      <HStack mt={4} spacing={3} display="flex" justifyContent="center">
        <Button
          colorScheme="blue"
          onClick={() => setShowResults((prev) => !prev)} 
        >
          {showResults ? "הסתר תוצאות" : "הצג תוצאות"} 
        </Button>

        <Button
          colorScheme="red"
          onClick={() => {
            setCounter([0, 0, 0]); 
            setShowResults(false); 
          }}
        >
          Reset
        </Button>
      </HStack>
      <input type="text" 
      />
    </Box>
  );
}

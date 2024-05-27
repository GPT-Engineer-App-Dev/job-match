import { Box, Container, Text, VStack, Heading, Flex, Link, Spacer, HStack } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const jobListings = [
  {
    title: "Software Engineer",
    company: "Tech Corp",
    location: "San Francisco, CA",
    description: "Develop and maintain web applications."
  },
  {
    title: "Product Manager",
    company: "Innovate LLC",
    location: "New York, NY",
    description: "Lead product development teams to success."
  },
  {
    title: "UX Designer",
    company: "Design Studio",
    location: "Remote",
    description: "Create user-friendly interfaces and experiences."
  }
];

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} mb={8} borderRadius="md">
        <HStack spacing={8}>
          <Link as={RouterLink} to="/" fontWeight="bold">Home</Link>
          <Link as={RouterLink} to="/jobs">Jobs</Link>
          <Link as={RouterLink} to="/about">About</Link>
          <Link as={RouterLink} to="/contact">Contact</Link>
        </HStack>
      </Flex>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">Job Listings</Heading>
        {jobListings.map((job, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px" borderRadius="md">
            <Heading fontSize="xl">{job.title}</Heading>
            <Text mt={4}><strong>Company:</strong> {job.company}</Text>
            <Text><strong>Location:</strong> {job.location}</Text>
            <Text mt={4}>{job.description}</Text>
          </Box>
        ))}
      </VStack>
    </Container>
  );
};

export default Index;
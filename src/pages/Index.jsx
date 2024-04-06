import React from "react";
import { Box, Heading, Text, VStack, HStack, Wrap, WrapItem, Link, Image, Container, IconButton, useColorModeValue } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const projects = [
    {
      title: "Project 1",
      description: "A brief description of project 1",
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9ncmFtbWluZyUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDB8fHx8MTcxMjQ0Njc0MXww&ixlib=rb-4.0.3&q=80&w=1080",
      link: "#",
    },
    {
      title: "Project 2",
      description: "A brief description of project 2",
      image: "https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxwcm9ncmFtbWluZyUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDB8fHx8MTcxMjQ0Njc0MXww&ixlib=rb-4.0.3&q=80&w=1080",
      link: "#",
    },
    {
      title: "Project 3",
      description: "A brief description of project 3",
      image: "https://images.unsplash.com/photo-1607798748738-b15c40d33d57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxwcm9ncmFtbWluZyUyMHByb2plY3QlMjBzY3JlZW5zaG90fGVufDB8fHx8MTcxMjQ0Njc0MXww&ixlib=rb-4.0.3&q=80&w=1080",
      link: "#",
    },
  ];

  const posts = [
    {
      title: "Blog Post 1",
      excerpt: "A brief excerpt of blog post 1",
      link: "#",
    },
    {
      title: "Blog Post 2",
      excerpt: "A brief excerpt of blog post 2",
      link: "#",
    },
  ];

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")}>
      <Container maxW="container.lg" py={8}>
        <VStack spacing={8} align="stretch">
          {/* About Section */}
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              About Me
            </Heading>
            <Text fontSize="xl">Hi, I'm a passionate programmer with expertise in web development and a love for creating innovative solutions. I enjoy tackling complex problems and bringing ideas to life through code.</Text>
          </Box>

          {/* Portfolio Section */}
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Portfolio
            </Heading>
            <Wrap spacing={4}>
              {projects.map((project, index) => (
                <WrapItem key={index}>
                  <Link href={project.link}>
                    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
                      <Image src={project.image} alt={project.title} />
                      <Box p={4}>
                        <Heading as="h3" size="md" mb={2}>
                          {project.title}
                        </Heading>
                        <Text>{project.description}</Text>
                      </Box>
                    </Box>
                  </Link>
                </WrapItem>
              ))}
            </Wrap>
          </Box>

          {/* Blog Section */}
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Blog
            </Heading>
            <VStack spacing={4} align="stretch">
              {posts.map((post, index) => (
                <Link key={index} href={post.link}>
                  <Box p={4} borderWidth="1px" borderRadius="lg" _hover={{ bg: useColorModeValue("gray.200", "gray.700") }}>
                    <Heading as="h3" size="md" mb={2}>
                      {post.title}
                    </Heading>
                    <Text>{post.excerpt}</Text>
                  </Box>
                </Link>
              ))}
            </VStack>
          </Box>

          {/* Contact Section */}
          <Box>
            <Heading as="h2" size="xl" mb={4}>
              Contact
            </Heading>
            <Text fontSize="xl" mb={4}>
              Feel free to reach out to me through any of the following channels:
            </Text>
            <HStack spacing={4}>
              <Link href="https://github.com/yourusername" isExternal>
                <IconButton icon={<FaGithub />} aria-label="GitHub" size="lg" variant="ghost" />
              </Link>
              <Link href="https://linkedin.com/in/yourusername" isExternal>
                <IconButton icon={<FaLinkedin />} aria-label="LinkedIn" size="lg" variant="ghost" />
              </Link>
              <Link href="mailto:youremail@example.com" isExternal>
                <IconButton icon={<FaEnvelope />} aria-label="Email" size="lg" variant="ghost" />
              </Link>
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;

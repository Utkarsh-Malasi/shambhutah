import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Header from './Header';

const AboutContainer = styled.div`
  padding: 4rem 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h1)`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #8b5cf6, #6366f1);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Section = styled(motion.section)`
  margin-bottom: 3rem;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const SectionTitle = styled.h2`
  font-size: 2rem;
  color: #e0e0e0;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: #a0a0a0;
  margin-bottom: 1rem;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const Card = styled(motion.div)`
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.05);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  }
`;

const About = () => {
  const containerRef = useRef();

  return (
    <>
    <Header />
    <AboutContainer ref={containerRef}>
      <Title
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Us
      </Title>

      <Section
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <SectionTitle>Our Story</SectionTitle>
        <Text>
          We are a team of extraordinary enthusiastic individuals ,whose sole purpose is to help ... 
          Started in late 2024 ,we have been delivering quality works ,whether our free  or paid services we excel in every department...
          This is not just bragging ,but a commitment of what you could expect ...
          You name it and we'll deliver ...
        </Text>
      </Section>

      <GridContainer>
        <Card
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <SectionTitle>Our Mission</SectionTitle>
          <Text>
           To help every individual in fulfilling there dreams ,because we know how much importent it is to you ....
          </Text>
        </Card>

        <Card
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <SectionTitle>Our Vision</SectionTitle>
          <Text>
            To be the leading force in digital transformation, setting new standards
            for excellence and innovation.
          </Text>
        </Card>
      </GridContainer>
    </AboutContainer>
</>  );
};

export default About;
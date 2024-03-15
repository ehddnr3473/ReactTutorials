import React from 'react'
import Section from './Section'
import Heading from './Heading';

const Profile = () => {
  return (
    <Section>
      <Heading>Profile</Heading>
      <Post title="Hello" body="My name is yeolmok"/>
      <Section>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Heading>Heading</Heading>
        <Section>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Heading>Sub-heading</Heading>
          <Section>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
            <Heading>Sub-sub-heading</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}

function Post({ title, body }) {
  return (
    <Section>
      <Heading>{title}</Heading>
      <p>{body}</p>
    </Section>
  );
}

export default Profile;
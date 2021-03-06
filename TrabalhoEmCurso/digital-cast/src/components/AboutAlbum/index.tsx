import React from "react";
import { View } from "react-native";
import { useAudio } from "../../hooks/audio";

import { Container, Album, Title } from "./style";

const AboutAlbum: React.FC = () => {
  const { currentAudioInfo } = useAudio();

  return (
    <Container>
      <Title>{currentAudioInfo?.title || "Selecione um audio"}</Title>
      <Album
        source={{
          uri:
            currentAudioInfo?.imageSource ||
            "https://complianz.io/wp-content/uploads/2019/03/placeholder-300x202.jpg",
        }}
      />
    </Container>
  );
};

export default AboutAlbum;

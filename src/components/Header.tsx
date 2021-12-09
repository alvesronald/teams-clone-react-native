import React from "react";
import styled from "styled-components/native";
import { useNavigationState } from "@react-navigation/core";
import { EvilIcons } from "@expo/vector-icons";

const Container = styled.View`
  height: 100px;
  background-color: #ffff;
`;
const MainSection = styled.View`
  width: auto;
  flex-direction: row;
  padding: 10px;
`;
const IconProfile = styled.Image`
  height: 35px;
  width: 35px;
  border-radius: 50px;
  background-color: black;
`;
const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  margin-left: 10px;
`;

const SearchSection = styled.View`
  /* background-color: red; */
  height: 45px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const SearchContainer = styled.View`
  flex-direction: row;
  background-color: #eeeeee;
  height: 35px;
  width: 98%;
  border-radius: 50px;
  align-items: center;
`;
const SearchInput = styled.TextInput`
  height: 100%;
  width: 90%;
  align-self: flex-end;
  font-size: 17px;
`;

const SearchIcon = styled(EvilIcons)`
  padding: 5px;
`;

export const Header = () => {
  const { index, routeNames } = useNavigationState((state) => state);
  const routeName = routeNames[index];
  return (
    <Container>
      <MainSection>
        <IconProfile
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/1/14/Mark_Zuckerberg_F8_2018_Keynote_%28cropped_2%29.jpg",
          }}
          resizeMode="cover"
        />
        <Title>{routeName}</Title>
      </MainSection>
      <SearchSection>
        <SearchContainer>
          <SearchIcon name="search" size={20} color="black" />
          <SearchInput
            placeholder="Pesquisar"
            placeholderTextColor={"#707070"}
          />
        </SearchContainer>
      </SearchSection>
    </Container>
  );
};

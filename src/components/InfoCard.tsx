import React from "react";
import { View, Dimensions } from "react-native";
import styled from "styled-components/native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

console.log(typeof windowHeight);

const Container = styled.View`
  background-color: #fff;
  height: 65px;
  padding: 10px;
  flex-direction: row;
  width: ${windowWidth};
  margin: 0.2px;
`;

interface RowProps {
  flexDirection?: string;
  justifyContent?: string;
  alignItems?: string;
  width?: number | string;
  mt?: number | string;
  mb?: number | string;
  ml?: number | string;
  mr?: number | string;
}

const IconSection = styled.View``;
const InfoSection = styled.View``;

const Row = styled.View<RowProps>`
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : "row"};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "flex-start"};
  width: ${({ width }) => (width ? width : 0)};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : "flex-start")};
  margin-left: ${({ ml }) => (ml ? ml : 0)};
  margin-top: ${({ mt }) => (mt ? mt : 0)};
  margin-bottom: ${({ mb }) => (mb ? mb : 0)};
  margin-right: ${({ mr }) => (mr ? mr : 0)};
`;

const IconProfile = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  background-color: black;
`;

const Division = styled.View`
  height: 0.2px;
  background-color: gray;
  width: 80%;
  align-self: flex-end;
`;

const NameText = styled.Text`
  font-weight: bold;
`;
const StatusText = styled.Text`
  font-size: 12px;
  color: gray;
`;
const WriteText = styled.Text`
  font-size: 12px;
  color: gray;
  font-weight: 400;
`;

interface InfoCardProps {
  contact?: string;
  writeText?: string;
  writedTextDay?: string;
  picture?: string;
  id?: number;
  index: number;
}

export const InfoCard = ({
  contact,
  writeText,
  writedTextDay,
  picture,
  id,
  index,
}: InfoCardProps) => {
  return (
    <>
      <Container key={id}>
        <IconSection>
          <IconProfile
            source={{
              uri: picture
                ? picture
                : "https://upload.wikimedia.org/wikipedia/commons/1/14/Mark_Zuckerberg_F8_2018_Keynote_%28cropped_2%29.jpg",
            }}
            resizeMode="cover"
          />
        </IconSection>
        <InfoSection>
          <Row width={"250"} justifyContent="space-between" ml={20}>
            <NameText>{contact || "Mark Zuckeberg"}</NameText>
            <StatusText>{writedTextDay || "Ontem"}</StatusText>
          </Row>
          <Row width={"250"} ml={20} mt={10}>
            <WriteText>{writeText || "Você: Hello Mark"}</WriteText>
          </Row>
        </InfoSection>
      </Container>
      {/* <Division /> */}
    </>
  );
};

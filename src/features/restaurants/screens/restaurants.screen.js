import React from "react";
import { StatusBar, View, SafeAreaView } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info.component";
import styled from "styled-components/native";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  background-color: #fff;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
  padding: 16px;
`;

const RestaurantsListContainer = styled(View)`
  flex: 1;
  padding: 16px;
  background-color: white;
`;

export const RestaurantsScreen = () => {
  return (
    <SafeArea>
      <SearchContainer>
        <Searchbar />
      </SearchContainer>
      <RestaurantsListContainer>
        <RestaurantInfoCard restaurant={{ name: "The Best Restaurant" }} />
      </RestaurantsListContainer>
    </SafeArea>
  );
};

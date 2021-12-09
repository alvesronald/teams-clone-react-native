import React, { useMemo } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Chat } from "../../modules/Chat";
import { Activities } from "../../modules/Activities";
import { Teams } from "../../modules/Teams";
import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const icons = {
  Chat: {
    lib: Ionicons,
    name: "md-chatbubble-ellipses-sharp",
  },
  Activities: {
    lib: Ionicons,
    name: "ios-notifications",
  },
  Teams: {
    lib: MaterialCommunityIcons,
    name: "microsoft-teams",
  },
  Calendar: {
    lib: AntDesign,
    name: "calendar",
  },
  Calls: {
    lib: Feather,
    name: "phone",
  },
  Plus: {
    lib: MaterialCommunityIcons,
    name: "dots-horizontal",
  },
};

console.log(icons.Chat.name);

export const Tabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const routeName = icons[route.name];
            const { lib: Icon, name } = routeName;
            return <Icon name={name} size={size} color={color} />;
          },
          tabBarActiveTintColor: "#585AC5",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Activities" component={Activities} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Teams" component={Teams} />
        <Tab.Screen name="Calendar" component={Chat} />
        <Tab.Screen name="Calls" component={Chat} />
        <Tab.Screen name="Plus" component={Chat} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

import React from "react";
import { Tabs } from "./src/navigation/Tabs";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs />
    </SafeAreaView>
  );
}

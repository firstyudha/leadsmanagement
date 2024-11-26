import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import {LeadForm} from 'sdkleads'

const LeadScreen = ({ route }) => {
  const { event } = route.params;

  return (
    <>
      <LeadForm />
    </>
  );
};

export default LeadScreen;

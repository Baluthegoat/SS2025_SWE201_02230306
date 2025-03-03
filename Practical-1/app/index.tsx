import React from "react";
import { Link } from "expo-router";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Get going with us</Text>
      <Text style={styles.subtitle}>
        Use GoCar to get across town - from anywhere, at any time.
      </Text>

      <View style={styles.paginationDots}>
        <View style={[styles.dot, styles.activeDot]} />
        <View style={styles.dot} />
      </View>

      <TouchableOpacity style={styles.loginButton}>
        <Link href={"/Login"} style={styles.button}>
          Login
        </Link>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signupButton}>
        <Text style={styles.signupButtonText}>I'm new, sign me up</Text>
      </TouchableOpacity>

      <Text style={styles.termsText}>
        By logging in or registering, you agree to our Terms of service and
        Privacy policy
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    fontSize: 20,
    // textDecorationLine: 'underline',
    color: "#007bff",
  },
  paginationDots: {
    flexDirection: "row",
    marginBottom: 30,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#DDD",
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#00AA13",
  },
  loginButton: {
    backgroundColor: "#00AA13", // GoJek green
    width: "100%",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 12,
  },

  signupButton: {
    backgroundColor: "white",
    width: "100%",
    height: 50,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDD",
    marginBottom: 16,
  },
  signupButtonText: {
    color: "#333",
    fontSize: 16,
  },
  termsText: {
    fontSize: 12,
    color: "#999",
    textAlign: "center",
  },
});

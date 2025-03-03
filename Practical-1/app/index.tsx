// import React from 'react';
// import { Link } from "expo-router";
// import { View, Text, StyleSheet, Button } from 'react-native';

// export default function  HomePage () {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>GoJek</Text>
//       <Link href={"/Login"} style={styles.button}>Login</Link>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     color: '#333',
//   },
//   button: {
//     fontSize: 20,
//     textDecorationLine: 'underline',
//     color: '#007bff',
//   }
// });
import React from 'react';
import { Link } from "expo-router";
import { View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView } from 'react-native';

export default function HomePage() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image 
        //   source={require('../assets/images/gojek.png')} 
          style={styles.logo} 
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.languageButton}>
          <Text style={styles.languageText}>🇬🇧 English</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        <View style={styles.illustrationContainer}>
          <Image 
            // source={require('../assets/images/gojek.png')} 
            style={styles.illustration} 
            resizeMode="contain"
          />
        </View>
        
        <Text style={styles.title}>Get going with us</Text>
        <Text style={styles.subtitle}>
          Use GoCar to get across town - from anywhere, at any time.
        </Text>
        
        <View style={styles.paginationDots}>
          <View style={[styles.dot, styles.activeDot]} />
          <View style={styles.dot} />
        </View>
        
        <Link href="/Login" asChild>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Log in</Text>
          </TouchableOpacity>
        </Link>
        
        <TouchableOpacity style={styles.signupButton}>
          <Text style={styles.signupButtonText}>I'm new, sign me up</Text>
        </TouchableOpacity>
        
        <Text style={styles.termsText}>
          By logging in or registering, you agree to our Terms of service and Privacy policy
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 15,
  },
  logo: {
    width: 80,
    height: 30,
  },
  languageButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  languageText: {
    fontSize: 14,
    color: '#333',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  illustrationContainer: {
    width: '100%',
    height: 200,
    backgroundColor: '#E4F5FF',
    borderRadius: 16,
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  illustration: {
    width: '80%',
    height: '80%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  paginationDots: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#DDD',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#00AA13', // GoJek green
  },
  loginButton: {
    backgroundColor: '#00AA13', // GoJek green
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  loginButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signupButton: {
    backgroundColor: 'white',
    width: '100%',
    height: 50,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#DDD',
    marginBottom: 16,
  },
  signupButtonText: {
    color: '#333',
    fontSize: 16,
  },
  termsText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
  },
});
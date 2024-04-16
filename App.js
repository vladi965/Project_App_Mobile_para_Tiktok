import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View, Image, TextInput, Pressable } from "react-native";
import { STYLES } from "./src/styles/StylesPrincipal";

const img = require("./src/assets/login.png");
const lock = require("./src/assets/icon-lock.png");

export default function App() {
  const [text, onChangeText] = useState("");

  return (
    <View style={STYLES.container}>
      <StatusBar style="auto" />
      <Image source={img} style={{ width: 235, height: 213 }} />
      <Text style={STYLES.title}>Iniciar Sesión</Text>
      <View style={STYLES.content}>
        <Text style={STYLES.subTitle}>Usuario</Text>
        <View style={STYLES.boxInput}>
          <TextInput
            style={STYLES.input}
            onChangeText={onChangeText}
            value={text}
            placeholder="Ingresa tu usuario"
          />
        </View>
        <Text>Contraseña</Text>
        <View>
          <TextInput style={STYLES.input} secureTextEntry={true} placeholder="Ingresa tu contraseña"/>
          <Image source={lock} />
        </View>
        <View>
          <Pressable title="Ingresar" value="Ingresar">
            <Text>Ingresar</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

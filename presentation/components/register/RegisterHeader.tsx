import { Image, Text, View } from "react-native";

export const RegisterHeader = () => {
  return (
    <View className="items-center mb-6">
      <Image
        source={require("../../../assets/images/logo-empresa.png")}
        className="w-36 h-12 mb-2"
        resizeMode="contain"
      />
      <Text className="text-xl font-black text-slate-800 text-center">
        Crear Cuenta Nueva
      </Text>
      <Text className="text-slate-400 text-center mt-1 text-sm">
        Regístrate para acceder al portal corporativo
      </Text>
    </View>
  );
};

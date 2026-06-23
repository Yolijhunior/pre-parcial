import { Image, Text, View } from "react-native";

export const LoginHeader = () => {
  return (
    <View className="items-center mb-6">
      <Image
        source={require("../../../assets/logo-empresa.png")}
        className="w-48 h-16 object-contain mb-4"
        resizeMode="contain"
      />
      <Text className="text-2xl font-black text-slate-800 text-center">
        Portal de Clientes
      </Text>
      <Text className="text-slate-400 text-center mt-1 text-sm">
        Ingresa a tu cuenta de cliente
      </Text>
    </View>
  );
};

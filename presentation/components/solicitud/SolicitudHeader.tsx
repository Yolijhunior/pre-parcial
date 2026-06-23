import { Image, Text, View } from "react-native";

export const SolicitudHeader = () => {
  return (
    <View className="items-center mb-6">
      <Image
        source={require("../../../assets/images/logo-empresa.png")}
        className="w-36 h-12 mb-2"
        resizeMode="contain"
      />
      <Text className="text-xl font-extrabold text-slate-800 text-center">
        Nueva Solicitud de Servicio
      </Text>
      <Text className="text-slate-400 text-center mt-1 text-sm">
        Registra un requerimiento técnico de cliente
      </Text>
    </View>
  );
};

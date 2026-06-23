import { useRouter } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function HomeRoute() {
  const router = useRouter();

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingHorizontal: 24,
        paddingTop: 60,
        paddingBottom: 24,
      }}
      className="bg-slate-100"
    >
      {}
      <View className="flex-row justify-between items-center mb-6 w-full">
        <TouchableOpacity
          onPress={() => router.replace("/login")}
          className="bg-red-50 px-3.5 py-1.5 rounded-full border border-red-100 active:bg-red-100"
        >
          <Text className="text-red-600 font-bold text-xs">
            ← Cerrar Sesión
          </Text>
        </TouchableOpacity>

        <View className="w-10 h-10 bg-slate-200 rounded-full items-center justify-center">
          <Text className="text-base">⚙️</Text>
        </View>
      </View>

      <Text className="text-slate-400 font-bold text-xs uppercase tracking-wider mb-0.5">
        Bienvenido de vuelta
      </Text>
      <Text className="text-2xl font-black text-slate-800 mb-6">
        Panel Principal
      </Text>

      {}
      <View className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm items-center mb-6 w-full">
        <Image
          source={require("../assets/images/logo-empresa.png")}
          className="w-44 h-14 mb-2"
          resizeMode="contain"
        />
        <Text className="text-slate-400 text-xs font-medium text-center">
          Sistema de Gestión Operativa - Industrias del Espino
        </Text>
      </View>

      <Text className="text-slate-700 font-bold text-sm mb-4">
        Funcionalidades Disponibles
      </Text>

      <TouchableOpacity
        className="bg-white border border-slate-50 w-full rounded-2xl p-4 flex-row items-center shadow-xs active:bg-slate-50"
        onPress={() => router.push("/solicitud")}
      >
        <View className="w-12 h-12 bg-indigo-50 rounded-xl items-center justify-center mr-4">
          <Text className="text-xl">📝</Text>
        </View>
        <View className="flex-1">
          <Text className="text-slate-800 font-bold text-base">
            Registrar Solicitud
          </Text>
          <Text className="text-slate-400 text-xs mt-0.5">
            Crear requerimiento de clientes
          </Text>
        </View>
        <Text className="text-indigo-600 font-bold text-lg">➔</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

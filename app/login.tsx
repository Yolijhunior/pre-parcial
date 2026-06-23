import { router } from "expo-router";
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomTextInput from "../presentation/components/shared/CustomTextInput";
import { PrimaryButton } from "../presentation/components/shared/PrimaryButton";
import { useLoginForm } from "../presentation/hooks/useLoginForm";

const { height } = Dimensions.get("window");

export default function LoginRoute() {
  const { email, setEmail, password, setPassword, errors, handleLogin } =
    useLoginForm();

  const botonDeshabilitado =
    !email || !password || !!errors.email || !!errors.password;

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1 }} className="bg-slate-100">
        {}
        <View
          style={{ height: height * 0.45 }}
          className="bg-indigo-600 w-full absolute top-0 left-0 right-0 rounded-b-[45px]"
        />

        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            paddingHorizontal: 24,
            paddingVertical: 40,
          }}
          bounces={false}
          showsVerticalScrollIndicator={false}
        >
          <View className="bg-white rounded-3xl p-8 shadow-xl shadow-slate-400/30 items-center w-full my-auto">
            <Image
              source={require("../assets/images/logo-empresa.png")}
              className="w-40 h-12 mb-2"
              resizeMode="contain"
            />
            <Text className="text-xl font-extrabold text-slate-800 text-center mb-1">
              Portal de Clientes
            </Text>
            <Text className="text-slate-400 text-xs text-center mb-6">
              Ingresa a tu cuenta de cliente
            </Text>

            <CustomTextInput
              label="Correo Electrónico"
              placeholder="alumno@industriasdelespino.pe"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              error={errors.email}
            />
            <CustomTextInput
              label="Contraseña"
              placeholder="••••••••"
              value={password}
              onChangeText={setPassword}
              isPassword={true}
              error={errors.password}
            />

            <PrimaryButton
              title="Ingresar"
              onPress={handleLogin}
              disabled={botonDeshabilitado}
            />

            <TouchableOpacity
              className="mt-6 p-2"
              onPress={() => router.push("/registro")}
            >
              <Text className="text-center text-slate-500 text-sm">
                ¿Aún no tienes cuenta?{" "}
                <Text className="text-indigo-600 font-bold">
                  Regístrate aquí
                </Text>
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </KeyboardAvoidingView>
  );
}

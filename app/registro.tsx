import { useRouter } from "expo-router";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CustomTextInput from "../presentation/components/shared/CustomTextInput";
import { useRegisterForm } from "../presentation/hooks/useRegisterForm";

export default function RegistroRoute() {
  const router = useRouter();
  const {
    dni,
    setDni,
    email,
    setEmail,
    password,
    setPassword,
    confirmar,
    setConfirmar,
    errors,
    handleRegistro,
  } = useRegisterForm();

  const botonDeshabilitado =
    !dni ||
    !email ||
    !password ||
    !confirmar ||
    Object.values(errors).some((e) => e !== "");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      className="flex-1 bg-slate-100"
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 24,
          justifyContent: "center",
        }}
        className="bg-slate-100"
      >
        <View className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm w-full items-center">
          <Image
            source={require("../assets/images/logo-empresa.png")}
            className="w-36 h-10 mb-2"
            resizeMode="contain"
          />
          <Text className="text-xl font-extrabold text-slate-800 text-center mb-6">
            Crear Cuenta Nueva
          </Text>

          <CustomTextInput
            label="Documento de Identidad (DNI)"
            value={dni}
            onChangeText={setDni}
            placeholder="Ej. 74589632"
            keyboardType="numeric"
            maxLength={8}
            error={errors.dni}
          />

          <CustomTextInput
            label="Correo Electrónico"
            value={email}
            onChangeText={setEmail}
            placeholder="correo@idat.pe"
            keyboardType="email-address"
            autoCapitalize="none"
            error={errors.email}
          />

          <CustomTextInput
            label="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            placeholder="******"
            error={errors.password}
          />

          <CustomTextInput
            label="Confirmar Contraseña"
            value={confirmar}
            onChangeText={setConfirmar}
            secureTextEntry
            placeholder="******"
            error={errors.confirmar}
          />

          <TouchableOpacity
            onPress={handleRegistro}
            disabled={botonDeshabilitado}
            className={`w-full py-3.5 rounded-xl mt-4 items-center ${
              botonDeshabilitado
                ? "bg-indigo-400"
                : "bg-indigo-600 active:bg-indigo-700"
            }`}
          >
            <Text className="text-white font-bold text-base">Registrarse</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.replace("/login")}
            className="mt-5 items-center"
          >
            <Text className="text-slate-400 text-xs font-medium">
              ¿Ya tienes cuenta?{" "}
              <Text className="text-indigo-600 font-bold">Ingresa aquí</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

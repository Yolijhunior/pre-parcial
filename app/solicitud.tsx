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
import { useSolicitudForm } from "../presentation/hooks/useSolicitudForm";

export default function SolicitudRoute() {
  const router = useRouter();
  const {
    nombre,
    setNombre,
    telefono,
    setTelefono,
    tipoSolicitud,
    setTipoSolicitud,
    descripcion,
    setDescripcion,
    errors,
    handleGuardarSolicitud,
  } = useSolicitudForm();

  const formInvalido =
    !nombre ||
    !telefono ||
    !tipoSolicitud ||
    !descripcion ||
    Object.values(errors).some((e) => e !== "");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "android" ? 30 : 0} // Espacio extra en Android para que el teclado no muerda el formulario
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          paddingHorizontal: 24,
          paddingVertical: 32,
          justifyContent: "center",
        }}
        className="bg-slate-100"
        showsVerticalScrollIndicator={false}
      >
        <View className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm w-full items-center my-auto">
          <Image
            source={require("../assets/images/logo-empresa.png")}
            className="w-36 h-10 mb-2"
            resizeMode="contain"
          />
          <Text className="text-xl font-extrabold text-slate-800 text-center mb-6">
            Nueva Solicitud de Servicio
          </Text>

          <CustomTextInput
            label="Nombre Completo del Cliente"
            value={nombre}
            onChangeText={setNombre}
            placeholder="Ej. Juan Pérez"
            error={errors.nombre}
          />

          <CustomTextInput
            label="Teléfono de Contacto"
            value={telefono}
            onChangeText={setTelefono}
            placeholder="Ej. 987654321"
            keyboardType="phone-pad"
            maxLength={9}
            error={errors.telefono}
          />

          <CustomTextInput
            label="Tipo de Solicitud"
            value={tipoSolicitud}
            onChangeText={setTipoSolicitud}
            placeholder="Ej. Soporte Técnico"
            error={errors.tipoSolicitud}
          />

          <CustomTextInput
            label="Descripción del Requerimiento"
            value={descripcion}
            onChangeText={setDescripcion}
            placeholder="Ej. Falla en el motor principal"
            error={errors.descripcion}
          />

          <TouchableOpacity
            onPress={handleGuardarSolicitud}
            disabled={formInvalido}
            className={`w-full py-3.5 rounded-xl mt-4 items-center ${
              formInvalido
                ? "bg-indigo-400"
                : "bg-indigo-600 active:bg-indigo-700"
            }`}
          >
            <Text className="text-white font-bold text-base">
              Guardar Solicitud
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.replace("/home")}
            className="mt-5 items-center"
          >
            <Text className="text-slate-400 text-xs font-bold">
              Volver al Menú
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

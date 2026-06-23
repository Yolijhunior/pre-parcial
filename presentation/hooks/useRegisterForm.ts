import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { registeredUsers } from "../components/shared/userStore";

export function useRegisterForm() {
  const router = useRouter();
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [errors, setErrors] = useState({
    dni: "",
    email: "",
    password: "",
    confirmar: "",
  });

  useEffect(() => {
    let errDni = "";
    if (dni && !/^\d{8}$/.test(dni))
      errDni = "El DNI debe contener exactamente 8 números.";

    let errEmail = "";
    if (email && !email.includes("@")) errEmail = "Formato de correo inválido.";
    if (
      email &&
      registeredUsers.some(
        (u) => u.email.toLowerCase() === email.trim().toLowerCase(),
      )
    ) {
      errEmail = "Este correo ya está registrado.";
    }

    let errPass = "";
    if (password && password.length < 6) errPass = "Mínimo 6 caracteres.";

    let errConf = "";
    if (confirmar && password !== confirmar)
      errConf = "Las contraseñas no coinciden.";

    setErrors({
      dni: errDni,
      email: errEmail,
      password: errPass,
      confirmar: errConf,
    });
  }, [dni, email, password, confirmar]);

  const handleRegistro = () => {
    const tieneErrores = Object.values(errors).some((e) => e !== "");
    if (!dni || !email || !password || !confirmar || tieneErrores) return;

    registeredUsers.push({ email: email.trim().toLowerCase(), password });

    Alert.alert("¡Registro Exitoso! 🎉", "Usuario guardado en el sistema.", [
      { text: "Ir al Login", onPress: () => router.replace("/login") },
    ]);
  };

  return {
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
  };
}

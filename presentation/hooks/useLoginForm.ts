import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { registeredUsers } from "../components/shared/userStore";

export function useLoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });

  useEffect(() => {
    let errEmail = "";
    let errPass = "";

    if (email && !email.includes("@")) {
      errEmail = "El formato del correo electrónico no es válido.";
    }

    setErrors({ email: errEmail, password: errPass });
  }, [email, password]);

  const handleLogin = () => {
    const usuarioValido = registeredUsers.find(
      (user) =>
        user.email.toLowerCase() === email.trim().toLowerCase() &&
        user.password === password,
    );

    if (usuarioValido) {
      router.replace("/home");
    } else {
      setErrors((prev) => ({
        ...prev,
        password:
          "Las credenciales no coinciden con ningún usuario registrado.",
      }));
    }
  };

  return { email, setEmail, password, setPassword, errors, handleLogin };
}

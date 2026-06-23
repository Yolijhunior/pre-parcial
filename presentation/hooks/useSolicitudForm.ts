import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Alert } from "react-native";

export function useSolicitudForm() {
  const router = useRouter();

  const [nombre, setNombre] = useState("");
  const [telefono, setTelefono] = useState("");
  const [tipoSolicitud, setTipoSolicitud] = useState("");
  const [descripcion, setDescripcion] = useState("");

  const [errors, setErrors] = useState({
    nombre: "",
    telefono: "",
    tipoSolicitud: "",
    descripcion: "",
  });

  useEffect(() => {
    let errNombre = "";
    if (nombre && nombre.trim().length < 4)
      errNombre = "El nombre debe tener mínimo 4 letras.";

    let errTelf = "";
    if (telefono && !/^\d{9}$/.test(telefono.trim()))
      errTelf = "El teléfono debe tener exactamente 9 dígitos.";

    let errTipo = "";
    if (tipoSolicitud && tipoSolicitud.trim().length < 5)
      errTipo = "El tipo debe tener al menos 5 letras.";

    let errDesc = "";
    const palabras = descripcion
      .trim()
      .split(/\s+/)
      .filter((p) => p.length > 0);
    if (descripcion && palabras.length < 4)
      errDesc = "La descripción debe detallar al menos 4 palabras.";

    setErrors({
      nombre: errNombre,
      telefono: errTelf,
      tipoSolicitud: errTipo,
      descripcion: errDesc,
    });
  }, [nombre, telefono, tipoSolicitud, descripcion]);

  const handleGuardarSolicitud = () => {
    const tieneErrores = Object.values(errors).some((e) => e !== "");
    if (!nombre || !telefono || !tipoSolicitud || !descripcion || tieneErrores)
      return;

    Alert.alert("Éxito 🎉", "Solicitud validada y registrada perfectamente.");
    router.replace("/home");
  };

  return {
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
  };
}

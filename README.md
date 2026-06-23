# Sistema de Gestión Operativa - Industrias del Espino

### Portal de Clientes & Registro de Solicitudes

<img src="assets/images/logo-empresa.png" alt="Logo Industrias del Espino" width="250" />

<p align="left">
  <img src="https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React Native" />
  <img src="https://img.shields.io/badge/expo-%23000020.svg?style=for-the-badge&logo=expo&logoColor=white" alt="Expo" />
  <img src="https://img.shields.io/badge/typescript-%23007acc.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/tailwindcss-%230F172A.svg?style=for-the-badge&logo=tailwind-css&logoColor=%2338B2AC" alt="Tailwind CSS" />
</p>

Este proyecto es una aplicación móvil nativa desarrollada con **React Native** y **Expo **, estructurada bajo una arquitectura modular limpia (Clean Architecture) que desacopla la UI de la lógica de negocio mediante Hooks personalizados.

---

##  Tecnologías y Herramientas Utilizadas

- **Framework:** Expo (SDK 51) con File-based Routing (`expo-router`).
- **Estilos:** Tailwind CSS mediante NativeWind (diseño responsivo y utilitario).
- **Iconos:** `@expo/vector-icons` (Ionicons).
- **Lenguaje:** TypeScript (Tipado estricto para contratos de interfaces y hooks).

---

## Arquitectura del Proyecto

El código fuente está organizado siguiendo principios de desacoplamiento modular para garantizar escalabilidad y facilidad en la revisión académica:

- **app/**: Capa de Enrutamiento Dinámico (Expo Router)
  - `_layout.tsx`: Contenedor base de navegación y configuración del Stack.
  - `home.tsx`: Pantalla principal de la aplicación post-autenticación.
  - `index.tsx`: Raíz del proyecto con lógica de redirección automática.
  - `login.tsx`: Pantalla del Portal de Clientes (Acceso Institucional).
  - `registro.tsx`: Pantalla de creación de cuenta nueva (Validación por DNI).
  - `solicitud.tsx`: Formulario de Registro de Solicitudes Técnico-Comerciales.
- **assets/**: Recursos estáticos globales (Fuentes y el archivo `logo-empresa.png`).
- **presentation/**: Capa de Presentación (UI y Estado Visual)
  - **components/**: Componentes Atómicos de la Interfaz
    - **login/**: `LoginHeader.tsx` (Encabezado gráfico exclusivo del Login).
    - **register/**: `RegisterHeader.tsx` (Encabezado gráfico exclusivo del Registro).
    - **solicitud/**: `SolicitudHeader.tsx` (Encabezado del módulo de solicitudes).
    - **shared/**: Elementos globales reutilizables (`CustomTextInput.tsx`, `PrimaryButton.tsx`, `userStore.ts`).
  - **hooks/**: Capa de Lógica de Negocio Desacoplada (Custom Hooks)
    - `useLoginForm.ts`: Manejo de estados y validación de acceso al portal.
    - `useRegisterForm.ts`: Validaciones asíncronas en tiempo real para el registro de nuevos usuarios.
    - `useSolicitudForm.ts`: Reglas de consistencia operativa para el envío de formularios.

---

## Características Implementadas y Reglas de Negocio

### 1. Control de Autenticación y Registro (userStore)

- Se implementó un almacén de estado centralizado temporal (`userStore.ts`) que comparte memoria reactiva en la sesión para permitir que un usuario registrado desde la app pueda iniciar sesión de forma inmediata.
- Credenciales globales configuradas por defecto para la evaluación rápida:
  - **Usuario:** `alumno@idat.pe`
  - **Contraseña:** `123456`

### 2. Validaciones en Tiempo Real (UX Avanzada)

- **Módulo Registro:** Validación estricta de DNI (obligatoriamente 8 dígitos numéricos), formato de correo electrónico electrónico institucional (`@`), longitud de contraseña mínima de 6 caracteres y verificación de coincidencia idéntica para la confirmación de la contraseña.
- **Módulo Solicitud de Servicio:** El botón de envío se mantiene deshabilitado (`disabled`) hasta que todos los campos del formulario cumplan con las reglas de consistencia de datos (Nombre mínimo de 4 letras, teléfono celular válido de 9 dígitos, tipo de servicio con longitud mínima de 5 caracteres y descripción detallada de al menos 4 palabras).

### 3. Adaptabilidad de Layout ante el Teclado (Mobile-First)

- Integración avanzada de componentes nativos `KeyboardAvoidingView` adaptando dinámicamente el comportamiento del layout (`padding` optimizado en entornos iOS y `height` en terminales Android), previniendo obstrucciones visuales del teclado físico sobre los campos de entrada de texto.

---

##  Instrucciones de Instalación y Ejecución

Sigue estos pasos para clonar y ejecutar el entorno de desarrollo local:

### Prerrequisitos

- Tener instalado **Node.js** (versión LTS recomendada).
- Tener la aplicación **Expo Go** instalada en tu dispositivo físico (iOS/Android) o un emulador configurado mediante Android Studio / Xcode.
### Clonar el repositorio
git clone [https://github.com/Yolijhunior/pre-parcial.git](https://github.com/Yolijhunior/pre-parcial.git)
### 1. Instalar las Dependencias

Abre una terminal en la carpeta raíz del proyecto y ejecuta:
npm install

### 2. Iniciar el Servidor de Desarrollo de Expo

Lanza el empaquetador Metro bundler mediante el comando:
npx expo start

### 3. Despliegue en Dispositivo

- **Dispositivo Físico:** Escanea el código QR que se despliega en la consola usando la cámara de tu celular (iOS) o directamente desde la app Expo Go (Android).
- **Emulador Android:** Presiona la tecla `a` en la terminal con tu entorno virtual activo.
- **Simulador iOS:** Presiona la tecla `i` en la terminal.

### 4. Integrantes grupo 13:
- ZURITA RIMAICUNA ABNER
- VALDIVIEZO ATERO JHUNIOR

---



[def]: assets/images/logo-empresa.png

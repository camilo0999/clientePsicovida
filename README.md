# PsicoVida - Cliente React

Aplicación web del cliente para PsicoVida, desarrollada con React y Vite.

## 🚀 Despliegue en Netlify

### Opción 1: Despliegue Automático desde GitHub

1. **Conecta tu repositorio a Netlify:**

   - Ve a [netlify.com](https://netlify.com)
   - Inicia sesión o crea una cuenta
   - Haz clic en "New site from Git"
   - Selecciona tu proveedor de Git (GitHub, GitLab, etc.)
   - Selecciona tu repositorio

2. **Configuración automática:**

   - Netlify detectará automáticamente que es un proyecto Vite/React
   - Los valores por defecto serán:
     - **Build command:** `npm run build`
     - **Publish directory:** `dist`

3. **Despliega:**
   - Haz clic en "Deploy site"
   - Netlify construirá y desplegará tu aplicación automáticamente

### Opción 2: Despliegue Manual

1. **Construye la aplicación localmente:**

   ```bash
   npm run build
   ```

2. **Sube la carpeta `dist` a Netlify:**
   - Ve a [netlify.com](https://netlify.com)
   - Arrastra y suelta la carpeta `dist` en el área de despliegue
   - Tu sitio estará disponible inmediatamente

### Configuración de Dominio Personalizado

1. En el dashboard de Netlify, ve a **Site settings > Domain management**
2. Haz clic en **Add custom domain**
3. Sigue las instrucciones para configurar tu dominio

## 🛠️ Desarrollo Local

### Instalación

```bash
npm install
```

### Ejecutar en desarrollo

```bash
npm run dev
```

### Construir para producción

```bash
npm run build
```

### Vista previa de la construcción

```bash
npm run preview
```

## 📁 Estructura del Proyecto

```
src/
├── Componentes/          # Componentes reutilizables
│   ├── Navbar.jsx       # Barra de navegación
│   └── Footer.jsx       # Pie de página
├── Paginas/             # Páginas de la aplicación
│   ├── Inicio.jsx       # Página principal
│   ├── Login.jsx        # Página de inicio de sesión
│   ├── Registro.jsx     # Página de registro
│   ├── Citas.jsx        # Gestión de citas
│   └── ...
└── services/            # Servicios para APIs
    ├── authService.js   # Servicio de autenticación
    └── ...
```

## 🔧 Tecnologías Utilizadas

- **React 19** - Biblioteca de interfaz de usuario
- **Vite** - Herramienta de construcción
- **React Router** - Enrutamiento de la aplicación
- **CSS3** - Estilos personalizados

## 📝 Notas de Despliegue

- La aplicación está configurada para funcionar con React Router
- Se incluyen redirecciones para manejar rutas SPA
- Los headers de seguridad están configurados para producción
- El build está optimizado para rendimiento en producción

## 🌐 URLs Importantes

- **Aplicación Cliente:** [Tu URL de Netlify]
- **Panel de Administración:** https://adminpsicovida.netlify.app/

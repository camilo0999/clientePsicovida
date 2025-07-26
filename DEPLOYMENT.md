# 🚀 Guía de Despliegue en Netlify

## Configuración Completada ✅

Tu aplicación React está completamente configurada para el despliegue en Netlify. Se han creado todos los archivos necesarios:

### Archivos de Configuración Creados:

- ✅ `netlify.toml` - Configuración principal de Netlify
- ✅ `public/_redirects` - Redirecciones para React Router
- ✅ `public/_headers` - Headers de seguridad y caché
- ✅ `scripts/build.sh` - Script de construcción optimizado
- ✅ `env.example` - Ejemplo de variables de entorno

## 🎯 Pasos para Desplegar

### Opción 1: Despliegue Automático (Recomendado)

1. **Sube tu código a GitHub:**

   ```bash
   git add .
   git commit -m "Configuración para despliegue en Netlify"
   git push origin main
   ```

2. **Conecta con Netlify:**

   - Ve a [netlify.com](https://netlify.com)
   - Inicia sesión o crea una cuenta
   - Haz clic en **"New site from Git"**
   - Selecciona **GitHub** como proveedor
   - Selecciona tu repositorio

3. **Configuración automática:**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - Haz clic en **"Deploy site"**

### Opción 2: Despliegue Manual

1. **Construye la aplicación:**

   ```bash
   npm run build:prod
   ```

2. **Sube a Netlify:**
   - Ve a [netlify.com](https://netlify.com)
   - Arrastra la carpeta `dist` al área de despliegue
   - Tu sitio estará disponible inmediatamente

## 🔧 Configuraciones Específicas

### React Router

- ✅ Configurado para manejar rutas SPA
- ✅ Redirecciones automáticas a `/index.html`

### Seguridad

- ✅ Headers de seguridad configurados
- ✅ Protección contra XSS y clickjacking
- ✅ Políticas de contenido seguras

### Rendimiento

- ✅ Caché optimizado para archivos estáticos
- ✅ Compresión automática (gzip)
- ✅ Chunks separados para vendor y router

## 🌐 URLs Importantes

Una vez desplegado, tendrás:

- **Sitio principal:** `https://tu-sitio.netlify.app`
- **Panel de admin:** `https://adminpsicovida.netlify.app/`

## 📝 Comandos Útiles

```bash
# Construir para producción
npm run build

# Construir con script optimizado
npm run build:prod

# Vista previa local
npm run preview

# Desplegar (construye y muestra instrucciones)
npm run deploy:netlify
```

## 🔍 Verificación Post-Despliegue

1. **Verifica que todas las rutas funcionen:**

   - `/` - Página principal
   - `/quienes` - Quiénes somos
   - `/citas` - Gestión de citas
   - `/contacto` - Contacto

2. **Prueba la funcionalidad:**

   - Navegación entre páginas
   - Botón "Inicio de sesión" (debe abrir admin)
   - Responsive design en móviles

3. **Verifica el rendimiento:**
   - Tiempo de carga
   - Optimización de imágenes
   - Caché funcionando

## 🛠️ Solución de Problemas

### Error: "Page not found"

- Verifica que `public/_redirects` esté presente
- Asegúrate de que el archivo contenga: `/* /index.html 200`

### Error: "Build failed"

- Verifica que Node.js versión 18+ esté instalado
- Ejecuta `npm install` antes del build
- Revisa los logs de Netlify

### Problemas de rutas

- Asegúrate de que React Router esté configurado correctamente
- Verifica que `BrowserRouter` esté envolviendo tu app

## 📞 Soporte

Si tienes problemas con el despliegue:

1. Revisa los logs de construcción en Netlify
2. Verifica que todos los archivos de configuración estén presentes
3. Prueba la construcción localmente con `npm run build`

¡Tu aplicación está lista para ser desplegada! 🎉

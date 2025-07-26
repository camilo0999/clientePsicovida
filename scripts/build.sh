#!/bin/bash

echo "🚀 Construyendo aplicación para producción..."

# Limpiar construcción anterior
rm -rf dist

# Instalar dependencias si no están instaladas
if [ ! -d "node_modules" ]; then
    echo "📦 Instalando dependencias..."
    npm install
fi

# Construir la aplicación
echo "🔨 Construyendo con Vite..."
npm run build

# Verificar que la construcción fue exitosa
if [ -d "dist" ]; then
    echo "✅ Construcción completada exitosamente!"
    echo "📁 Carpeta 'dist' creada y lista para despliegue"
    echo "🌐 Para desplegar en Netlify:"
    echo "   1. Ve a netlify.com"
    echo "   2. Arrastra la carpeta 'dist' al área de despliegue"
    echo "   3. ¡Tu sitio estará listo!"
else
    echo "❌ Error en la construcción"
    exit 1
fi 
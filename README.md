# CUN DASHBOARD - Front End
Interfaz de usuario moderna construida con Next.js 14 que consume la API cun-management-api.

## 🛠️ Instalación y configuración

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- API backend ejecutándose en puerto 3000

### Pasos de instalación

1. **Navegar al directorio frontend:**
```bash
cd cun-dashboard
```

2. **Instalar dependencias:**
```bash
npm install
```

3. **Configurar variables de entorno:**
```bash
# Copiar el archivo de ejemplo
cp .env.local

# Editar las variables
NEXT_PUBLIC_API_URL=http://localhost:3000
PORT=3001
```

4. **Iniciar el servidor de desarrollo:**
```bash
npm run dev
```

La aplicación estará disponible en `http://localhost:3001`
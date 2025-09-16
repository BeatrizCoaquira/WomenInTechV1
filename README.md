# WomanInTech Analytics Dashboard

Una aplicación web moderna para el análisis de datos de Facebook con enfoque en la comunidad WomanInTech.

## 🚀 Características

- **Autenticación con Facebook**: Login seguro usando Facebook SDK
- **Dashboard Interactivo**: Visualización de métricas y tendencias
- **Análisis de Contenido**: Trending topics y engagement insights
- **Diseño Responsive**: Interfaz moderna con paleta azul-morado
- **Protección de Privacidad**: Análisis solo de datos públicos agregados

## 🛠️ Tecnologías Utilizadas

- **React 18** con TypeScript
- **Tailwind CSS** para estilos
- **Recharts** para gráficos
- **Lucide React** para iconos
- **Facebook SDK** para autenticación

## 📋 Requisitos Previos

- Node.js (versión 16 o superior)
- npm o yarn
- Facebook App ID (para autenticación)

## 🔧 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone <repository-url>
   cd womanintech-analytics
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar Facebook App**
   - Ve a [Facebook Developers](https://developers.facebook.com/)
   - Crea una nueva aplicación
   - Obtén tu App ID
   - Configura los dominios permitidos

4. **Configurar variables de entorno**
   - Edita `src/context/AuthContext.tsx`
   - Reemplaza `'YOUR_FACEBOOK_APP_ID'` con tu App ID real

5. **Ejecutar la aplicación**
   ```bash
   npm start
   ```

## 🎨 Características del Diseño

### Paleta de Colores
- **Primario**: Azul (#6366f1)
- **Secundario**: Morado (#a855f7)
- **Fondo**: Gradiente azul-morado
- **Efectos**: Glass morphism y transparencias

### Componentes Principales
- **LoginPage**: Página de inicio con autenticación Facebook
- **Dashboard**: Panel principal con métricas
- **TrendingTopics**: Lista de hashtags populares
- **EngagementChart**: Gráfico de tendencias de engagement
- **ContentTypes**: Análisis de tipos de contenido

## 📊 Funcionalidades

### 1. Autenticación
- Login con Facebook
- Permisos: public_profile, email, pages_read_engagement
- Logout seguro

### 2. Dashboard
- Métricas generales (posts, engagement, etc.)
- Trending topics con crecimiento
- Gráficos de engagement temporal
- Análisis de tipos de contenido

### 3. Datos de Ejemplo
La aplicación incluye datos mock para demostración:
- Trending topics con hashtags populares
- Tendencias de engagement de 7 días
- Tipos de contenido con métricas

## 🔒 Privacidad y Seguridad

- Solo se accede a contenido público
- No se almacena información personal
- Análisis agregado sin identificación individual
- Cumplimiento con políticas de Facebook

## 🚀 Despliegue

### Build para Producción
```bash
npm run build
```

### Variables de Entorno para Producción
- Configura tu Facebook App ID
- Actualiza los dominios permitidos en Facebook
- Configura HTTPS (requerido por Facebook)

## 📱 Responsive Design

La aplicación está optimizada para:
- Desktop (1024px+)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Soporte

Para soporte técnico o preguntas:
- Abre un issue en GitHub
- Contacta al equipo de desarrollo

---

**Nota**: Esta aplicación es para fines educativos y de demostración. Para uso en producción, asegúrate de configurar correctamente la autenticación de Facebook y cumplir con todas las políticas de la plataforma.

# GUIA DEL CODIGO - SISTEMA DE TUTORIAS ULEAM

## Descripcion del Proyecto
Sistema web completo de gestion de tutorias para la Universidad Laica Eloy Alfaro de Manabi (ULEAM). Permite gestionar tutorias individuales y grupales entre tutores y alumnos, con supervision del coordinador.

---

## Estructura del Proyecto

```
PAGINA WEB - TUTORIA/
│
├── index.html                      <- Archivo principal (TODO EL CODIGO ESTA AQUI)
├── index_BACKUP_COMPLETO.html      <- Respaldo de seguridad
├── img/
│   └── logo-uleam.png             <- Logo institucional
└── GUIA_CODIGO.md                 <- Este archivo
```

---

## ESTRUCTURA DEL ARCHIVO index.html

El archivo index.html contiene TODO el sistema en un solo archivo (3,101 lineas). Esta organizado en 3 secciones principales con comentarios claros:

### 1. SECCION CSS (Lineas 17-272)
Contiene todos los estilos visuales del sistema.

Comentario de inicio:
```html
<!-- ============================================ -->
<!-- INICIO DE LA SECCION CSS                     -->
<!-- Estilos completos del sistema (lineas 17-250)-->
<!-- Incluye: diseño, formularios, dashboard,     -->
<!-- modales, animaciones y responsive            -->
<!-- ============================================ -->
<style>
    /* Aqui estan todos los estilos */
</style>
```

Contenido del CSS:
- Estilos base (body, contenedores, tipografia)
- Formularios de login y registro
- Diseño del dashboard horizontal con sidebar
- Tarjetas de tutorias y botones
- Modales de edicion
- Animaciones y transiciones
- Mensajes de notificacion

---

### 2. SECCION HTML (Lineas 273-976)
Contiene toda la estructura visual y formularios.

Comentario de inicio:
```html
<!-- ============================================ -->
<!-- INICIO DE LA SECCION HTML                    -->
<!-- Estructura completa del sistema              -->
<!-- (lineas 251-950 aprox.)                      -->
<!-- Incluye: formularios de login/registro,      -->
<!-- dashboards (coordinador, tutor, alumno),     -->
<!-- modales de edicion                           -->
<!-- ============================================ -->
```

Contenido del HTML:
- Formulario de Registro (alumnos)
- Formulario de Login (todos los roles)
- Dashboard del Coordinador:
  - Ver todas las tutorias del sistema
  - Registrar nuevos tutores
  - Listar y editar tutores/alumnos
  - Generar reportes (PDF/Excel)
  - Exportar base de datos (JSON/CSV)
- Dashboard del Tutor:
  - Crear tutorias grupales
  - Ver tutorias pendientes, confirmadas y rechazadas
  - Confirmar/rechazar solicitudes
  - Registrar asistencia
- Dashboard del Alumno:
  - Solicitar tutorias individuales
  - Ver tutorias disponibles (grupales)
  - Inscribirse en tutorias grupales
  - Ver mis tutorias
- Modales:
  - Editar usuario
  - Rechazar tutoria
  - Editar perfil
  - Cambiar contraseña

---

### 3. SECCION JAVASCRIPT (Lineas 977-3101)
Contiene toda la logica funcional del sistema.

Comentario de inicio:
```html
<!-- ============================================ -->
<!-- INICIO DE LA SECCION JAVASCRIPT              -->
<!-- Logica completa del sistema                  -->
<!-- (lineas 950-2973 aprox.)                     -->
<!-- ============================================ -->
```

El JavaScript esta dividido en 8 subsecciones claramente comentadas:

#### Subseccion 1: Funciones Auxiliares
```javascript
// ============================================
// SECCION 1: FUNCIONES AUXILIARES Y UTILIDADES
// ============================================
```
- mostrarMensaje(texto, tipo) - Notificaciones toast
- validarEmailUleam(email) - Valida dominio @live.uleam.edu.ec
- mostrarEquivalenteHora() - Convierte 24h a 12h (AM/PM)
- mostrarLogin(), mostrarRegistro() - Navegacion entre vistas

#### Subseccion 2: Autenticacion
```javascript
// ============================================
// SECCION 2: AUTENTICACION (REGISTRO Y LOGIN)
// ============================================
```
- Registro de alumnos (con validacion de email ULEAM)
- Login de usuarios (coordinador, tutor, alumno)
- mostrarDashboard(usuario) - Muestra panel segun rol
- cerrarSesion() - Cierra sesion y limpia UI

#### Subseccion 3: Gestion de Usuarios
```javascript
// ============================================
// SECCION 3: GESTION DE USUARIOS
// (Registrar tutores, editar, eliminar, listar)
// ============================================
```
- Registrar tutores (solo coordinador)
- Editar usuarios (nombre, carrera, materia, contraseña)
- Eliminar usuarios (con eliminacion cascada de tutorias)
- Listar tutores y alumnos
- Exportar datos a JSON/CSV con metadatos

#### Subseccion 4: Gestion de Tutorias
```javascript
// ============================================
// SECCION 4: GESTION DE TUTORIAS
// (Solicitar, crear, confirmar, rechazar, completar, asistencia)
// ============================================
```
- Solicitar tutoria individual (alumno a tutor)
- Crear tutoria grupal (tutor)
- Confirmar/Rechazar tutorias (tutor)
- Inscribirse en tutoria grupal (alumno)
- Completar tutorias (individual y grupal)
- Registrar asistencia:
  - Individual: alumno confirma
  - Grupal: doble confirmacion (alumno + coordinador)
- Filtros por fecha para todas las vistas

#### Subseccion 5: Reportes
```javascript
// ============================================
// SECCION 5: GENERACION DE REPORTES
// (Filtrar datos, exportar a PDF y Excel)
// ============================================
```
- generarReporte() - Filtra tutorias por fecha, tutor, estado
- exportarPDF() - Genera PDF con jsPDF + autoTable
- exportarExcel() - Genera Excel con SheetJS (XLSX)

#### Subseccion 6: Perfil de Usuario
```javascript
// ============================================
// SECCION 6: GESTION DE PERFIL DE USUARIO
// (Ver perfil, editar datos, cambiar contraseña)
// ============================================
```
- mostrarPerfil() - Muestra datos segun rol
- editarPerfil() - Actualiza nombre y datos especificos
- cambiarPassword() - Cambia contraseña con validacion

#### Subseccion 7: Renderizado de Dashboards
```javascript
// ============================================
// SECCION 7: RENDERIZADO DE DASHBOARDS
// (Funciones que muestran tutorias segun el rol)
// ============================================
```
- cargarMisTutorias(emailAlumno) - Vista del alumno
- cargarTutoriasTutor(emailTutor) - Vista del tutor (3 paneles)
- cargarTutoriasDisponibles(emailAlumno) - Tutorias grupales disponibles
- cargarTodasTutorias() - Vista del coordinador (todas las tutorias)

#### Subseccion 8: Inicializacion
```javascript
// ============================================
// SECCION 8: INICIALIZACION DEL SISTEMA
// (Se ejecuta al cargar la pagina)
// ============================================
```
- window.onload - Se ejecuta al cargar la pagina
- Crea usuario coordinador por defecto si no existe
- Verifica si hay sesion activa y restaura dashboard

---

## CREDENCIALES POR DEFECTO

### Coordinador (creado automaticamente)
```
Email: coordinador@live.uleam.edu.ec
Contraseña: admin123
```

### Usuarios de Prueba (debes registrarlos)
- Tutores: Registrados por el coordinador
- Alumnos: Pueden auto-registrarse con email @live.uleam.edu.ec

---

## ALMACENAMIENTO DE DATOS

El sistema usa localStorage del navegador para persistir datos:

| Clave | Descripcion |
|-------|-------------|
| usuarios | Array de todos los usuarios (coordinador, tutores, alumnos) |
| tutorias | Array de tutorias individuales |
| tutoriasGrupales | Array de tutorias grupales |
| sesion | Objeto con datos del usuario actual (email, rol, nombre) |

---

## TECNOLOGIAS UTILIZADAS

| Tecnologia | Uso |
|------------|-----|
| HTML5 | Estructura semantica |
| CSS3 | Estilos, gradientes, animaciones |
| JavaScript ES6 | Logica funcional (sin frameworks) |
| localStorage | Persistencia de datos |
| jsPDF | Generacion de reportes PDF |
| jsPDF-AutoTable | Tablas en PDF |
| SheetJS (XLSX) | Exportacion a Excel |

---

## COMO EJECUTAR EL PROYECTO

### Opcion 1: Abrir directamente (recomendado para desarrollo)
1. Hacer doble clic en index.html
2. Se abrira en tu navegador predeterminado

### Opcion 2: Servidor local (recomendado para produccion)
```bash
# Opcion A: Python
python -m http.server 8000

# Opcion B: Node.js (npx)
npx http-server -p 8000

# Opcion C: PHP
php -S localhost:8000
```
Luego abrir: http://localhost:8000

---

## CARACTERISTICAS DESTACADAS

### Sistema de Roles
- Coordinador: Control total del sistema
- Tutor: Gestiona sus tutorias y confirma solicitudes
- Alumno: Solicita tutorias y se inscribe en grupales

### Validaciones
- Email institucional obligatorio (@live.uleam.edu.ec)
- Horarios por paralelo (A: 7AM-1PM, B: 2PM-8PM)
- Fechas no pueden ser en el pasado
- Duplicados de email no permitidos

### Funcionalidades Avanzadas
- Reportes personalizados con multiples filtros
- Exportacion de datos (PDF, Excel, JSON, CSV)
- Gestion completa de usuarios (CRUD)
- Filtros por fecha en todas las vistas
- Sistema de asistencia con doble confirmacion

---

## NAVEGACION DEL CODIGO

Si deseas modificar algo especifico, aqui esta el mapa:

| Quiero modificar... | Buscar en linea... | Seccion |
|---------------------|-------------------|---------|
| Colores del sistema | 17-50 | CSS - Variables y body |
| Estilos de formularios | 60-120 | CSS - Formularios |
| Diseño del dashboard | 150-200 | CSS - Dashboard |
| Estructura de login | 300-350 | HTML - Formularios |
| Panel del coordinador | 450-650 | HTML - Dashboard Coordinador |
| Panel del tutor | 650-750 | HTML - Dashboard Tutor |
| Panel del alumno | 750-850 | HTML - Dashboard Alumno |
| Logica de registro | 1050-1150 | JS - Autenticacion |
| Gestion de usuarios | 1200-1550 | JS - CRUD Usuarios |
| Solicitar tutoria | 1900-2000 | JS - Gestion Tutorias |
| Generar reportes | 1350-1650 | JS - Reportes |
| Ver perfil | 2370-2550 | JS - Perfil |
| Renderizar dashboards | 1970-2850 | JS - Renderizado |

---

## SOLUCION DE PROBLEMAS

### No guarda datos
Solucion: Asegurate de que localStorage este habilitado en tu navegador (modo incognito puede bloquearlo).

### Los reportes PDF/Excel no se descargan
Solucion: Verifica que tienes conexion a internet (librerias CDN). En consola verifica que jsPDF y XLSX se cargaron.

### El coordinador no aparece
Solucion: Abre la consola (F12) y ejecuta:
```javascript
localStorage.clear();
location.reload();
```

---

## AUTOR
Proyecto desarrollado para ULEAM  
Sistema de Gestion de Tutorias Academicas  
2025

---

## NOTAS FINALES

- El codigo esta completamente comentado con explicaciones claras  
- Funciona sin necesidad de instalacion de dependencias  
- No requiere base de datos externa (usa localStorage)  
- Responsive design para diferentes dispositivos  
- Codigo limpio y organizado en secciones logicas

---

Tienes dudas? Revisa los comentarios dentro de index.html - cada seccion tiene su explicacion detallada.

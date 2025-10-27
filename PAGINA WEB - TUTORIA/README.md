# Sistema de Gestion de Tutorias Academicas - ULEAM

Sistema web completo para la gestion de tutorias academicas de la Universidad Laica Eloy Alfaro de Manabi.

## Descripcion

Aplicacion web de una sola pagina (Single Page Application) que permite gestionar tutorias academicas entre alumnos, tutores y coordinadores. Incluye control de asistencia, gestion de usuarios, y seguimiento completo del ciclo de vida de las tutorias.

## Caracteristicas

### Sistema de Autenticacion
- Registro e inicio de sesion con validacion de correos institucionales (@live.uleam.edu.ec)
- Tres roles de usuario: Coordinador, Tutor y Alumno
- Sistema de gestion de contraseñas con validacion

### Gestion de Usuarios
- Coordinador: Registra tutores, gestiona usuarios, supervisa todas las tutorias
- Tutor: Confirma o rechaza solicitudes, marca tutorias completadas
- Alumno: Solicita tutorias, confirma asistencia

### Gestion de Tutorias
- Solicitud de tutorias por parte de alumnos
- Confirmacion/rechazo por parte de tutores
- Estados: Pendiente, Confirmada/Rechazada, Completada
- Sistema de observaciones y motivos de rechazo

### Control de Asistencia
- Confirmacion de asistencia por parte del alumno
- Verificacion de asistencia por parte del coordinador
- Doble validacion para mayor confiabilidad

### Perfil de Usuario
- Visualizacion de informacion personal
- Edicion de datos (nombre, materia para tutores)
- Cambio de contraseña con validacion

## Instalacion y Uso

### Requisitos
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- No requiere servidor ni base de datos (usa localStorage)

### Instrucciones
1. Descarga el archivo simple-login.html
2. Abre el archivo en tu navegador web
3. Listo! El sistema esta funcionando

### Usuario Predeterminado
```
Email: coordinador@live.uleam.edu.ec
Contraseña: admin123
Rol: Coordinador
```

## Estructura del Proyecto

```
PAGINA WEB - TUTORIA/
│
├── simple-login.html    # Aplicacion completa (HTML + CSS + JavaScript)
├── img/
│   └── logo-uleam.png  # Logo de la universidad
└── README.md           # Este archivo
```

## Colores Institucionales ULEAM

- Rojo: #e31e24
- Verde: #75b532
- Negro: #1a1a1a
- Blanco: #ffffff

## Tecnologias Utilizadas

- HTML5: Estructura de la aplicacion
- CSS3: Estilos y diseño responsivo
- JavaScript (Vanilla): Logica de la aplicacion
- localStorage: Almacenamiento de datos en el navegador

## Flujo de Trabajo

1. Registro/Login: Usuario ingresa al sistema
2. Solicitud: Alumno solicita una tutoria
3. Confirmacion: Tutor acepta o rechaza la solicitud
4. Realizacion: Se lleva a cabo la tutoria
5. Asistencia: Alumno confirma su asistencia
6. Verificacion: Coordinador valida la asistencia
7. Completado: Tutor marca la tutoria como completada

## Validaciones de Seguridad

- Correos institucionales obligatorios (@live.uleam.edu.ec)
- Contraseñas con minimo 6 caracteres
- Validacion de campos requeridos
- Proteccion del usuario coordinador principal
- Confirmacion de acciones criticas (eliminar usuarios, rechazar tutorias)

## Almacenamiento de Datos

Los datos se almacenan localmente en el navegador usando localStorage:

- usuarios: Array de todos los usuarios registrados
- tutorias: Array de todas las tutorias del sistema
- sesion: Objeto del usuario actualmente logueado

Nota: Los datos se mantienen solo en el navegador local. Para uso en produccion, se recomienda implementar un backend con base de datos.

## Caracteristicas Avanzadas

- Interfaz de usuario moderna y responsiva
- Modales elegantes para edicion de datos
- Sistema de mensajes con retroalimentacion visual
- Animaciones suaves y transiciones
- Confirmacion de asistencia con doble verificacion
- Gestion completa del ciclo de vida de tutorias

## Notas de Desarrollo

- Arquitectura de una sola pagina para facilitar el despliegue
- Sin dependencias externas
- Compatible con todos los navegadores modernos
- Codigo limpio y comentado
- Facil de mantener y extender

## Autor

Proyecto desarrollado para la Universidad Laica Eloy Alfaro de Manabi (ULEAM)

## Licencia

Este proyecto es de uso academico para la ULEAM.

---

Universidad Laica Eloy Alfaro de Manabi

# Frontend Practice App

Este proyecto es una simulación de trabajo real como desarrollador frontend junior.  
Cada día se agregan nuevas tareas y retos para mejorar habilidades técnicas y de organización.

## Día 1 - Configuración del entorno
- Crear estructura base del proyecto.
- Configurar entorno con VS Code, GitHub y extensiones.
- Preparar todo para comenzar el desarrollo

### Objetivo:
Crear un header fijo con logo, menú de navegación y botón de login.  
El header debe cambiar de color al hacer scroll.

### Tareas realizadas:
- Estructura HTML del header y hero section.
- Estilos base con Flexbox.
- Comportamiento dinámico en JavaScript para cambiar color al hacer scroll.
- Confirmación de funcionamiento con Live Server.
- Commit y push al repositorio GitHub.

### Pendiente:
- Hacer el header responsive (se implementará más adelante).

## Día 2 - Sección dinámica de productos

### Objetivo:
- Renderizar dinámicamente tarjetas de productos usando un arreglo de objetos en JavaScript.
- Simular una revisión de código en un entorno laboral real, analizando y corrigiendo errores en un módulo desarrollado por otro integrante del equipo.

### Tareas realizadas:
- Estructura HTML de la sección de productos.
- Estilos con CSS Grid.
- Generación dinámica con JavaScript.
- Analicé el código HTML y JavaScript del módulo `user-profiles`.
- Detecté un error de vinculación entre las clases del HTML y las referencias en el JS.
- Apliqué la corrección agregando las clases específicas (`.maria-detail` y `.pedro-detail`).
- Implementé una validación adicional para evitar errores si un elemento no existe (`if (target)`).
- Verifiqué la correcta ejecución de los eventos y el comportamiento esperado de los botones.
- Confirmé que el código funcionara sin errores en consola.

## Día 3 - Formulario de registro con validación

### Objetivo:
Implementar un formulario de registro de usuario con validación de datos en tiempo real usando JavaScript, mostrando mensajes de error claros y un mensaje de éxito al completar correctamente.

### Tareas realizadas:
- Agregué una sección de registro con campos: nombre, correo electrónico y contraseña.
- Validación de campos obligatorios y formato del correo.
- Validación de longitud mínima de la contraseña (8 caracteres).
- Implementación de mensajes de error dinámicos debajo de cada campo.
- Mensaje de éxito al completar el formulario correctamente, con efecto de desaparición después de 3 segundos.

### Resultado:
Formulario completamente funcional, con feedback visual para el usuario y manejo seguro de errores.

## Día 4 - Menú responsive con comportamiento dinámico

### Objetivo:
Implementar un menú de navegación responsive que cambie su estructura y comportamiento según el tamaño de la pantalla.

### Tareas realizadas:
- Se agregó un botón toggle para mostrar u ocultar el menú en dispositivos móviles.
- Se aplicaron estilos condicionales con CSS para adaptar el diseño al tamaño de pantalla.
- Se implementó la lógica en JavaScript para alternar la visibilidad del menú.
- Se corrigió la posición y el comportamiento del botón toggle.
- Se validó el correcto funcionamiento en distintos tamaños de ventana.

## Día 5 - Mejora de usabilidad y accesibilidad del formulario

### Objetivo:
Optimizar la experiencia de usuario del formulario de registro implementado el día 3, asegurando accesibilidad, legibilidad y feedback visual coherente con buenas prácticas de UI/UX.

###  Tareas realizadas:
- Accesibilidad y UI/UX
- aria-live="polite" agregado a los small.error-message y al #successMessage.
- Labels correctamente vinculados con for y id.
- Feedback visual en los campos: .error y .correct.
- Toggle de visibilidad de contraseña funcional
- Botón de login dentro del menú móvil ya está incluido en el HTML.
- Validaciones por input (email y password) funcionando en tiempo real.
- Mensajes de error dinámicos y específicos, incluso con requerimientos de mayúsculas, números y caracteres especiales.
- Prevent default en submit y feedback de éxito.
<div align="center">

  # SourceSmart
</div>

### Descripción General
**SourceSmart** es una herramienta diseñada para facilitar la creación automática de citas y referencias en diversos formatos (APA, MLA, IEEE, entre otros). Está dirigida a estudiantes, investigadores y profesionales que necesitan referenciar fuentes de manera precisa y eficiente en sus trabajos.
La plataforma permite generar citas a partir de enlaces de recursos y también ofrece la opción de ingresar manualmente los datos bibliográficos, brindando flexibilidad en la gestión de referencias. Además, incluye características para organizar y acceder a las referencias, ayudando a mantener un registro claro de las fuentes.
Con una interfaz intuitiva, **SourceSmart** es fácil de usar para todos los niveles de experiencia, permitiendo que los usuarios se concentren más en el contenido de sus trabajos que en los detalles formales de la citación.

## Funcionalidades Principales
- **Generación Automática de Citas**: Permite a los usuarios ingresar datos (autor, título, año, etc.) para generar citas en múltiples formatos (APA, MLA, IEEE, etc.).
- **Entrada de Datos por URL**: Los usuarios pueden ingresar enlaces a libros, artículos, o sitios web y el sistema extraerá automáticamente la información relevante para generar citas.
- **Soporte para Diferentes Tipos de Fuentes**: Genera citas para libros, artículos de revistas, sitios web, documentos en PDF, tesis, y más.
- **Almacenamiento de Citas**: Los usuarios pueden guardar y gestionar las citas generadas para un proyecto o documento específico.
- **Interfaz de Usuario Intuitiva**: Diseño amigable donde los usuarios pueden ingresar datos y ver los resultados en tiempo real.
- **Exportación de Citas**: Permite exportar las citas generadas en formatos de texto o como archivos de bibliografía (BibTeX, RIS) para gestores como Mendeley o Zotero.

## Funcionalidades Secundarias
- **Integración con APIs**: Conexión con APIs como Google Books o CrossRef para obtener información bibliográfica de libros y artículos de manera automática.
- **Copiar y Pegar Fácilmente**: Opción para copiar las citas generadas al portapapeles para pegarlas fácilmente en documentos.
- **Gestión de Proyectos**: Funcionalidad para organizar citas por proyectos, permitiendo a los usuarios mantener un seguimiento de sus referencias.
- **Versión de Formato**: Permitir a los usuarios seleccionar entre diferentes versiones de un mismo formato (ej. APA 6ª y 7ª edición).
- **Historial de Citas**: Registro de todas las citas generadas por el usuario, permitiendo acceder y reutilizar citas previas.

## Funcionalidades Clave
- **Verificación de Datos**: Comprobación automática de errores en los datos ingresados para asegurar la calidad de las citas generadas.
- **Asistente de Citas**: Un guía interactivo que ayuda a los usuarios a llenar los campos necesarios para generar citas, mostrando ejemplos.
- **Opciones de Personalización**: Permitir a los usuarios personalizar el formato de salida (fuentes, tamaño de texto, estilos).
- **Ayuda y Documentación**: Proporcionar tutoriales y ejemplos sobre cómo utilizar la herramienta y entender diferentes formatos de citación.
- **Actualizaciones de Normativas**: Mantenimiento de la base de datos de formatos de citación para incluir las últimas actualizaciones y normas.
- **Funcionalidad Multilingüe**: Soporte para varios idiomas en la interfaz y ejemplos de citación.

## Beneficios de las Funcionalidades
- **Eficiencia**: Ahorra tiempo a los usuarios al eliminar la necesidad de formatear manualmente las citas.
- **Precisión**: Reduce errores comunes en la citación, asegurando que las referencias sean correctas y adecuadas.
- **Facilidad de Uso**: Una interfaz intuitiva y asistencia hace que la herramienta sea accesible para todos los niveles de usuarios, desde estudiantes hasta investigadores profesionales.

## Tipos de Formatos de Citas y Referencias
- APA (American Psychological Association)
- MLA (Modern Language Association)
- Chicago/Turabian
- IEEE (Institute of Electrical and Electronics Engineers)
- Vancouver
- Harvard
- ISO 690
- CSE (Council of Science Editors)
- APA 7th Edition
- ACS (American Chemical Society)
- NLM (National Library of Medicine)
- Bluebook

## Tipos de Fuentes Soportadas
- **Libros**: Citas de libros impresos o electrónicos.
- **Artículos de revistas**: Citas de artículos académicos en revistas científicas.
- **Sitios web**: Citas de páginas web y artículos en línea.
- **Documentos en PDF**: Citas de documentos académicos en formato PDF.
- **Tesis y disertaciones**: Citas de trabajos de investigación.
- **Conferencias**: Citas de ponencias o presentaciones en conferencias.
- **Videos y medios visuales**: Citas de contenido audiovisual, como películas o documentales.
- **Entrevistas**: Citas de entrevistas personales o grabadas.

## Beneficios de Soportar Múltiples Formatos:
- **Versatilidad**: Los usuarios pueden generar citas en el formato que necesiten para sus trabajos específicos, lo que aumenta la utilidad del sistema.
- **Adaptabilidad**: Facilita a estudiantes y profesionales de diversas disciplinas utilizar SourceSmart sin preocuparse por el formato correcto de citación.
- **Actualización Continua**: La posibilidad de incluir nuevas normativas o formatos a medida que evolucionan las pautas de citación.

## Tecnologías utilizadas
### Base de datos:
**MySQL**: Bases de datos relacionales que son robustas y bien soportadas en el ecosistema de Node.js.
### Frontend:
1.	**React**: Biblioteca de JavaScript para construir interfaces de usuario.
2.	**Redux**: Para la gestión del estado global de la aplicación.
3.	**Axios**: Para realizar solicitudes HTTP desde el frontend.
4.	**React Router**: Para la gestión de rutas en la aplicación React.
5.	**CSS Modules**: Para el manejo de estilos locales y evitar conflictos.
### Backend:
1.	**Node.js**: Entorno de ejecución para JavaScript en el servidor.
2.	**Express.js**: Framework para crear APIs y manejar rutas.
3.	**MySQL**: Base de datos relacional para almacenar información de los usuarios y citas.
4.	**Sequelize**: ORM para interactuar con la base de datos MySQL.
5.	**bcrypt**: Para encriptar las contraseñas de los usuarios.
6.	**jsonwebtoken (JWT)**: Para gestionar la autenticación basada en tokens.
### Desarrollo y Herramientas:
1.	**Git**: Para control de versiones del código.
2.	**GitHub**: Para alojar el repositorio y colaborar.
3.	**ESLint**: Para asegurar la calidad y estilo del código.
4.	**Prettier**: Para el formateo automático del código.
### Despliegue:
1. **Heroku**: Plataformas para desplegar aplicaciones web fácilmente.
### Otras Herramientas Opcionales:
1. **GraphQL**: Alternativa a REST para la gestión de API.
2. **Sentry**: Para monitoreo de errores y rendimiento de la aplicación.


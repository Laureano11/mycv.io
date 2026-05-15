[Repositorio](https://github.com/Laureano11/questioningAPP)
# Questioning App

Una aplicación web de preguntas y respuestas (Q&A) que permite a los usuarios crear, visualizar y responder preguntas de forma anónima o autenticada.

---

## 🛠️ Stack Tecnológico

| Tecnología | Descripción |
|-----------|-------------|
| **FastAPI** | Framework web moderno y de alto rendimiento para construir APIs REST |
| **SQLModel** | ORM que combina SQLAlchemy + Pydantic para gestión de datos y validación |
| **SQLite** | Base de datos ligera y sin servidor |
| **Jinja2** | Motor de plantillas para renderizar HTML dinámico |
| **Python 3.x** | Lenguaje de programación principal |

---

## 📋 Descripción del Proyecto

**Questioning App** es una plataforma de preguntas y respuestas construida con FastAPI. Permite a los usuarios:

- **Crear una cuenta** mediante registro con usuario y contraseña
- **Iniciar sesión** para identificarse en la plataforma
- **Formular preguntas** de forma anónima o identificada
- **Ver el listado de preguntas** ordenadas por fecha más reciente
- **Responder a preguntas** con la opción de hacerlo de forma anónima
- **Consultar respuestas** a preguntas específicas

La aplicación utiliza **sesiones** para mantener a los usuarios autenticados y **SQLite** como base de datos para almacenar usuarios, preguntas y respuestas.

---

## 🚀 Guía de Instalación y Ejecución

### Requisitos Previos

- **Python 3.8** o superior
- **pip** (gestor de paquetes de Python)
- **Git** (para clonar el repositorio)

### Paso 1: Clonar el Repositorio

```bash
git clone https://github.com/tu-usuario/questioningAPP.git
cd questioningAPP
```

### Paso 2: Crear un Entorno Virtual

Es recomendable usar un entorno virtual para evitar conflictos de dependencias:

```bash
# En macOS/Linux
python3 -m venv venv
source venv/bin/activate

# En Windows
python -m venv venv
venv\Scripts\activate
```

### Paso 3: Instalar las Dependencias

Primero, asegúrate de tener las siguientes dependencias en `requirements.txt`:

```bash
pip install fastapi uvicorn sqlmodel starlette python-multipart jinja2
```

O si prefieres crear un archivo `requirements.txt`:

```
fastapi==0.104.1
uvicorn==0.24.0
sqlmodel==0.0.14
starlette==0.27.0
python-multipart==0.0.6
jinja2==3.1.2
```

Luego instala:

```bash
pip install -r requirements.txt
```

### Paso 4: Ejecutar la Aplicación

Desde la raíz del proyecto:

```bash
uvicorn app.main:app --reload
```

- `--reload` habilita el recargamiento automático durante el desarrollo (opcional)

### Paso 5: Acceder a la Aplicación

Abre tu navegador y dirígete a:

```
http://localhost:8000
```

---

## 📁 Estructura del Proyecto

```
questioningAPP/
├── README.md                 # Este archivo
├── requirements.txt          # Dependencias del proyecto
└── app/
    ├── __init__.py
    ├── main.py              # Punto de entrada de la aplicación
    ├── models.py            # Modelos de datos (User, Question, Answer)
    ├── database.py          # Configuración de la base de datos
    ├── routers/
    │   ├── __init__.py
    │   ├── auth.py          # Rutas de autenticación (login/register)
    │   └── questions.py     # Rutas de preguntas y respuestas
    ├── static/
    │   └── css/
    │       └── styles.css   # Estilos CSS
    └── templates/
        ├── base.html        # Plantilla base
        ├── index.html       # Página de inicio
        ├── login.html       # Formulario de login
        ├── register.html    # Formulario de registro
        ├── question.html    # Listado de preguntas
        ├── questioninfo.html # Detalle de una pregunta
        └── base.html        # Plantilla base reutilizable
```

---

## 🔑 Funcionalidades Principales

### Autenticación
- **Registro**: Crear nueva cuenta con usuario, email y contraseña
- **Login**: Iniciar sesión para acceder a funcionalidades autenticadas
- **Sesiones**: Los usuarios se mantienen logueados durante su sesión

### Preguntas y Respuestas
- **Crear preguntas**: Los usuarios pueden formular preguntas de forma anónima o identificada
- **Listar preguntas**: Ver todas las preguntas ordenadas por fecha más reciente
- **Ver detalles**: Consultar una pregunta específica con todas sus respuestas
- **Responder**: Añadir respuestas a cualquier pregunta de forma anónima o identificada

---

## 🛠️ Desarrollo

### Comandos Útiles

```bash
# Ejecutar la aplicación con recargamiento automático
uvicorn app.main:app --reload

# Ejecutar en puerto diferente
uvicorn app.main:app --reload --port 8001

# Ver documentación interactiva de API (Swagger)
http://localhost:8000/docs

# Ver documentación alternativa (ReDoc)
http://localhost:8000/redoc
```

---

## 📝 Notas Importantes

- **Base de datos**: SQLite crea automáticamente el archivo `database.db` al iniciar la aplicación
- **Seguridad**: Las contraseñas se almacenan en texto plano. Para producción, implementar encriptación con `bcrypt` o `passlib`
- **Secret Key**: Cambiar el `secret_key` en `SessionMiddleware` antes de desplegar a producción
- **CORS**: Añadir configuración de CORS si se planea consumir desde cliente externo

---



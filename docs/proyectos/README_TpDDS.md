[Repositorio](https://github.com/Laureano11/TP-DDS)
# MetaMapa

MetaMapa es una plataforma web modular para gestionar hechos, colecciones y estadisticas de forma colaborativa. El sistema integra varias fuentes de informacion: carga de archivos CSV, solicitudes dinamicas de usuarios, proxies hacia fuentes externas y una API central que unifica y expone los datos.

## Stack Tecnologico

- Java 17
- Maven
- Spring Boot 3.5.6
- Spring MVC / Spring Web
- Spring WebFlux / WebClient
- Spring Security
- Spring Data JPA + Hibernate
- Thymeleaf
- Jakarta Validation
- JJWT para JWT
- Lombok
- OpenCSV
- MySQL 8
- Docker y Docker Compose
- Nginx

## Que incluye el proyecto

- `frontend`: interfaz web renderizada del lado del servidor con Thymeleaf.
- `agregador`: servicio principal que consolida hechos y colecciones.
- `dinamica`: gestion de solicitudes dinamicas y contribuciones de usuarios.
- `estatica`: carga y procesamiento de archivos CSV.
- `estadistica`: calculo y exposicion de estadisticas.
- `users`: autenticacion, autorizacion y generacion/validacion de JWT.
- `proxy_ong`: integracion con una API externa de ONG.
- `proxy_metamapa`: integracion con otra instancia de MetaMapa.

## Requisitos

- Git
- Java 17
- Docker Desktop o Docker Engine
- Docker Compose

El proyecto ya trae el wrapper de Maven, asi que no necesitas instalar Maven globalmente si no queres.

## Como levantarlo en local

### 1. Clonar el repositorio

```bash
git clone <URL-del-repositorio>
cd 2025-tpa-mi-no-grupo-10
```

### 2. Crear el archivo de variables de entorno

El entorno local usa un archivo obligatorio llamado `.env.local` en la raiz del proyecto.

```bash
cp .env.local.example .env.local
```

Revisar y ajustar al menos estas variables segun tu entorno:

- `DB_PASSWORD`
- `DB_PORT`
- `ADMIN_USERNAME`
- `ADMIN_PASSWORD`
- `PROXY_ONG_EMAIL`
- `PROXY_ONG_PASSWORD`
- `PROXY_ONG_API_URL`

Si no vas a usar la integracion real con la ONG, podes dejar esos datos con valores de prueba, pero el servicio `proxy_ong` solo funcionara completo cuando esten correctamente configurados.

### 3. Compilar el proyecto

Si queres validar que todo compila antes de levantar contenedores:

```bash
./mvnw clean package -DskipTests
```

### 4. Levantar todo el stack local

```bash
docker compose up --build
```

Ese comando construye las imagenes, arranca MySQL y luego levanta todos los servicios del sistema.

### 5. Abrir la aplicacion

Cuando termine el arranque, abre:

- Frontend: `http://localhost:8080`

### 6. Puertos locales de referencia

- Frontend: `8080`
- Dinamica: `8081`
- Estatica: `8082`
- Proxy ONG: `8083`
- Agregador: `8084`
- Estadistica: `8085`
- Proxy MetaMapa: `8086`
- Users: `8087`
- MySQL local: `3308`

## Flujo de ejecucion

El orden recomendado para el stack local es:

1. MySQL
2. `users`, `estatica`, `dinamica`, `proxy_ong` y `proxy_metamapa`
3. `agregador`
4. `estadistica`
5. `frontend`

Con Docker Compose ese orden se maneja automaticamente mediante `depends_on` y los health checks.

## Ejecucion manual sin Docker

Si preferis no usar contenedores, el proyecto tambien puede compilarse con Maven y correr cada modulo por separado, siempre que tengas una instancia local de MySQL disponible y las variables de entorno configuradas.

1. Iniciá MySQL localmente.
2. Cargá las variables necesarias del `.env.local` en tu entorno.
3. Compilá el monorepo con `./mvnw clean package -DskipTests`.
4. Levantá el modulo que quieras ejecutar con Maven, por ejemplo:

```bash
./mvnw -pl frontend -am spring-boot:run
```

Para trabajar con el backend completo, repetis el mismo esquema para cada modulo dentro de `backend/`.

## Notas utiles

- La configuracion local usa el archivo `docker-compose.yml`.
- La configuracion de despliegue usa `docker-compose.prod.yml`.
- Los datos multimedia y CSV se montan como volumenes para no perder informacion entre reinicios.

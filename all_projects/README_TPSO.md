[Repositorio](https://github.com/Laureano11/TP-SO)
# TP-SO T.U.K.I.

## Stack Tecnológico

- Lenguaje: C
- Compilación: GCC + GNU Make
- Automatización: Bash
- Librerías: so-commons-library, pthread, readline y sockets POSIX
- Plataforma objetivo: Linux

## Descripción

T.U.K.I. es un sistema distribuido que simula el funcionamiento de un sistema operativo con módulos separados de consola, kernel, CPU, memoria y filesystem.

El proyecto corresponde a un Trabajo Práctico de Sistemas Operativos de la carrera de Ingeniería en Sistemas de Información de la UTN-FRBA. Cada módulo se comunica con el resto por sockets y trabaja con archivos de configuración propios para levantar puertos, IPs, algoritmos de planificación y parámetros internos.

## Qué hace cada módulo

- Consola: lee un archivo de instrucciones y se lo envía al kernel.
- Kernel: planifica procesos y coordina la comunicación entre consola, CPU, memoria y filesystem.
- CPU: recibe procesos del kernel, interpreta instrucciones y ejecuta el ciclo de instrucción.
- Memoria: administra segmentación, tablas de segmentos y atención de pedidos de CPU, kernel y filesystem.
- Filesystem: administra archivos, bloques, bitmap y estructuras de control del sistema de archivos.

## Requisitos

Antes de compilar, necesitás tener instalado lo siguiente en Linux:

- `gcc`
- `make`
- `git`
- `bash`
- `libreadline` y herramientas de compilación básicas
- `so-commons-library` instalada en el sistema

En Debian o Ubuntu, una base típica es:

```bash
sudo apt update
sudo apt install build-essential git libreadline-dev
```

## Clonar el proyecto

```bash
git clone <URL-del-repositorio>
cd TP-SO
```

## Instalar so-commons-library

Si todavía no la tenés instalada, hacelo una sola vez:

```bash
git clone https://github.com/sisoputnfrba/so-commons-library.git
cd so-commons-library
make install
```

Si tu sistema requiere permisos de administrador para instalar bibliotecas globales, agregá `sudo` al comando correspondiente.

## Compilación local

Desde la raíz del repositorio podés compilar todos los módulos con el script provisto:

```bash
./make.sh
```

Si preferís hacerlo manualmente, también podés compilar módulo por módulo:

```bash
cd consola && make
cd ../cpu && make
cd ../fileSystem && make
cd ../kernel && make
cd ../memoria && make
```

## Configuración

Cada módulo trae sus propios archivos de configuración dentro de su carpeta `cfg/`.

- `consola/cfg/consola.config`
- `cpu/cfg/*.config`
- `fileSystem/cfg/*.config`
- `kernel/cfg/*.config`
- `memoria/cfg/*.config`

Si querés apuntar todos los módulos a la misma máquina local, revisá que las IPs y puertos coincidan entre archivos. El script `changeip.sh` puede ayudarte a sincronizar las IPs de los módulos cuando ya tengas definidos los valores que vas a usar.

## Ejecución

El orden de arranque importa porque cada proceso espera conexiones del resto.

1. Levantá memoria.
2. Levantá CPU.
3. Levantá filesystem.
4. Levantá kernel.
5. Finalmente, ejecutá la consola con un archivo de instrucciones.

Ejemplo de ejecución local:

```bash
cd memoria
./memoria cfg/memoria.config

cd ../cpu
./cpu cfg/cpu.config

cd ../fileSystem
./fileSystem cfg/fileSystem.config

cd ../kernel
./kernel cfg/kernel.config

cd ../consola
./consola archivo1.txt
```

Podés reemplazar cada archivo `.config` por cualquiera de los perfiles disponibles en su carpeta `cfg/`, según la práctica que quieras correr. En consola, el argumento debe ser un archivo de instrucciones válido.

## Limpieza

Para borrar binarios y objetos generados, podés limpiar cada módulo con `make clean`:

```bash
cd consola && make clean
cd ../cpu && make clean
cd ../fileSystem && make clean
cd ../kernel && make clean
cd ../memoria && make clean
```

## Estructura del repositorio

- `consola/`: cliente que envía instrucciones al kernel.
- `cpu/`: módulo de ejecución de instrucciones.
- `fileSystem/`: módulo de persistencia y administración de archivos.
- `kernel/`: planificador y coordinador principal.
- `memoria/`: módulo de segmentación y administración de memoria.
- `shared/`: código compartido entre módulos.

## Notas

- El proyecto está pensado para ejecutarse en varias terminales, una por módulo.
- Si cambias la ubicación del repositorio, no dependas de scripts con rutas absolutas: preferí `make.sh` y los comandos manuales de arriba.
- Las configuraciones de ejemplo incluidas en `cfg/` te sirven como base para correr los distintos escenarios de la cátedra.

# Informe de Accesibilidad Web

**Herramientas utilizadas:** TAWDIS, validadores automáticos, revisión manual

---

## 1. Resumen de Problemas Detectados

Tras el análisis de accesibilidad realizado con TAWDIS y revisión manual, se detectaron los siguientes problemas principales:

### 1.3.1 Información y relaciones (WCAG 2.1)

- **Estructura y semántica:**  
  - **Problema:** Existencia de dos encabezados del mismo nivel (por ejemplo, dos `<h2>`) seguidos sin contenido relevante entre ellos.  
  - **Referencia:** H42  
  - **Impacto:** Los usuarios de lectores de pantalla pueden confundirse al navegar, ya que la estructura jerárquica del contenido no es clara.

### Navegación

- **Enlaces sin contenido:**  
  - **Problema:** Se encontraron enlaces (`<a>`) sin texto o contenido visible.  
  - **Referencia:** F89  
  - **Impacto:** Los usuarios de lectores de pantalla no pueden saber a dónde lleva el enlace, dificultando la navegación.

---

## 2. Mejoras Implementadas

A continuación, se detallan las acciones concretas realizadas para solucionar los problemas detectados:

### 2.1 Encabezados y estructura semántica

- **Solución aplicada:**  
  - Se revisó toda la estructura de encabezados para asegurar que no existan dos encabezados del mismo nivel seguidos sin contenido entre ellos.  
  - Se añadió contenido relevante o se reorganizaron los encabezados para mantener una jerarquía lógica y comprensible.
  - **Ejemplo:** Si había dos `<h2>` seguidos, se añadió un párrafo descriptivo, o se fusionaron si correspondía.

### 2.2 Enlaces sin contenido

- **Solución aplicada:**  
  - Se eliminaron los enlaces vacíos o se añadió texto descriptivo o etiquetas `aria-label` cuando el enlace solo contenía un icono.
  - Para los enlaces decorativos (por ejemplo, iconos SVG sin función de navegación), se les añadió `aria-hidden="true"` y se retiró el `role="img"` para que los lectores de pantalla los ignoren.
  - **Ejemplo:**
    ```
    <a href="#" aria-label="Ir a la página principal">
      <svg aria-hidden="true" ...></svg>
    </a>
    ```

### 2.3 Imágenes e iconos

- **Solución aplicada:**  
  - Se añadieron atributos `alt` descriptivos en todas las imágenes relevantes.
  - En los SVG decorativos, se añadió `aria-hidden="true"` y se eliminó el atributo `role="img"` para evitar que sean anunciados por los lectores de pantalla.
  - Las imágenes que no aportan información relevante se marcaron correctamente como decorativas (`alt=""`).

### 2.4 Buenas prácticas adicionales

- No se saltaron niveles de encabezado (por ejemplo, de `<h2>` a `<h4>` sin un `<h3>` intermedio).
- Se revisó que todos los elementos interactivos sean accesibles mediante teclado.
- Se comprobó que no existen enlaces vacíos o botones sin texto visible o alternativo.

---

## 3. Resultados tras la mejora

- **Estructura semántica:** Ahora la jerarquía de encabezados es clara y consistente, facilitando la navegación por parte de usuarios de lectores de pantalla y mejorando la comprensión del contenido.
- **Enlaces accesibles:** Todos los enlaces tienen contenido textual o alternativo adecuado, eliminando los enlaces vacíos y mejorando la experiencia de navegación.
- **Imágenes e iconos:** Todas las imágenes relevantes tienen texto alternativo, y los iconos decorativos no interfieren con los lectores de pantalla.
- **Cumplimiento:** Se ha mejorado el cumplimiento de los criterios WCAG 2.1, especialmente los relacionados con la información y relaciones semánticas, y la navegación accesible.

---

**Conclusión:**  
Las mejoras implementadas han solucionado los problemas detectados por TAWDIS y la revisión manual, haciendo el sitio más accesible para todos los usuarios, especialmente aquellos que utilizan lectores de pantalla o navegan mediante teclado. Se recomienda seguir aplicando estas buenas prácticas en futuras actualizaciones.

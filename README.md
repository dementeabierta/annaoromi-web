# Anna Oromi — Web estática para GitHub Pages

Web personal de Anna Oromi: psicóloga, escritora y exploradora del alma.

---

## Estructura de archivos

```
annaoromi/
├── index.html          ← Portada principal
├── sobre-mi.html       ← Biografía y filosofía
├── psicologia.html     ← Servicios de psicología
├── escritura.html      ← Libros y servicios editoriales
├── almasaje.html       ← Sesiones Almasaje
├── oraculo.html        ← Oráculo Luz o Cruz
├── contacto.html       ← Formulario de contacto
├── css/
│   └── style.css       ← Todos los estilos
├── js/
│   └── main.js         ← JavaScript mínimo (menú + formulario)
└── README.md
```

---

## Cómo subir a GitHub Pages

### Opción A — Repositorio nuevo (recomendada)

1. Crea un repositorio en GitHub con el nombre `annaoromi.github.io`
   (o el nombre que prefieras, por ejemplo `anna-oromi-web`)

2. Sube todos los archivos de esta carpeta al repositorio:
   ```bash
   cd /ruta/a/annaoromi
   git init
   git add .
   git commit -m "Primer despliegue"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/annaoromi.github.io.git
   git push -u origin main
   ```

3. En GitHub → Settings → Pages → Source: `main` / `/ (root)` → Save

4. Tu web estará en: `https://TU_USUARIO.github.io` (si el repo se llama `usuario.github.io`)
   o en: `https://TU_USUARIO.github.io/anna-oromi-web/` (si tiene otro nombre)

### Opción B — Dominio personalizado (annaoromi.com)

1. Sigue los pasos de la Opción A
2. En GitHub Pages → Custom domain → escribe `www.annaoromi.com` → Save
3. En tu proveedor de DNS añade estos registros:
   ```
   CNAME  www   TU_USUARIO.github.io
   ```
   O para el dominio raíz (@), añade los 4 registros A de GitHub:
   ```
   A  @  185.199.108.153
   A  @  185.199.109.153
   A  @  185.199.110.153
   A  @  185.199.111.153
   ```
4. Activa "Enforce HTTPS" en GitHub Pages Settings

---

## Personalizar antes de publicar

### 1. Formulario de contacto (Formspree)
El formulario usa [Formspree](https://formspree.io) — un servicio gratuito para formularios en sitios estáticos.

- Crea una cuenta gratuita en formspree.io
- Crea un nuevo formulario y copia el ID (ej: `xpwzblkq`)
- En `contacto.html`, línea del `<form>`, sustituye `TU_ID_FORMSPREE`:
  ```html
  action="https://formspree.io/f/xpwzblkq"
  ```

### 2. Fotografías
Sustituye los placeholders `✦` por tus fotos reales:
- Crea una carpeta `img/` dentro de `annaoromi/`
- Añade tus fotos: `anna-oromi.jpg`, `anna-oromi-retrato.jpg`, `almasaje-espacio.jpg`
- En cada página, descomenta y ajusta la línea `<img src="img/...">` que hay comentada

### 3. Instagram
En cada footer, actualiza los enlaces de Instagram con tus handles reales:
```html
<a href="https://instagram.com/TU_HANDLE">Instagram</a>
```

### 4. Dominio canonical
Una vez tengas el dominio definitivo, actualiza la etiqueta `<link rel="canonical">` en cada HTML:
```html
<link rel="canonical" href="https://www.annaoromi.com/PAGINA.html">
```

### 5. Año en el footer
Actualiza `© 2025` por el año actual cuando lo publiques.

---

## Sugerencias visuales

### Paleta de colores
| Variable CSS       | Color     | Uso                          |
|--------------------|-----------|------------------------------|
| `--bg`             | `#FAFAF7` | Fondo principal (blanco cálido) |
| `--bg-alt`         | `#F4EFE6` | Secciones alternativas (crema) |
| `--bg-dark`        | `#1A2B35` | Hero, CTA (azul noche profundo) |
| `--primary`        | `#2D4A5C` | Encabezados, color principal   |
| `--violet`         | `#8B6FA6` | Acento psicología/profundidad  |
| `--rose`           | `#C4876E` | Acento escritura/calidez       |
| `--sage`           | `#7A9E8E` | Acento Almasaje/naturaleza     |

### Tipografía
- **Encabezados**: Cormorant Garamond (Google Fonts) — elegante, literaria, con personalidad
- **Cuerpo**: Jost (Google Fonts) — limpia, moderna, altamente legible

### Estilo visual
- Mucho espacio en blanco
- Líneas finas como elementos decorativos
- Símbolos ornamentales: `◇ ✦ · —`
- Tipografía como elemento visual principal
- Sin imágenes decorativas artificiales (las fotos reales son el único elemento visual pesado)

---

## Versión en inglés (opcional)

Para añadir una versión en inglés, crea una subcarpeta `/en/` y duplica los HTML con textos traducidos:
```
annaoromi/
├── en/
│   ├── index.html
│   ├── about.html
│   ├── psychology.html
│   └── contact.html
```

En la navegación, añade un selector de idioma:
```html
<a href="index.html" lang="es">ES</a> / <a href="en/index.html" lang="en">EN</a>
```

---

## Checklist antes de publicar

- [ ] Sustituir `TU_ID_FORMSPREE` por el ID real en `contacto.html`
- [ ] Añadir fotos reales en `img/` y activar los `<img>` comentados
- [ ] Actualizar los dos enlaces de Instagram en todos los footers
- [ ] Actualizar las etiquetas `<link rel="canonical">` con el dominio definitivo
- [ ] Configurar el dominio personalizado en GitHub Pages (opcional)
- [ ] Activar HTTPS en GitHub Pages
- [ ] Revisar la vista en móvil antes de publicar

---

*Hecho con curiosidad y cuidado.*

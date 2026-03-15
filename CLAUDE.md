# Tartas de Tina — Proyecto Web

> Guía para Claude Code al trabajar en este repositorio.

## Descripción del negocio
Pastelería artesanal en Tarragona. La web permite a los clientes
explorar el catálogo, conocer el negocio y realizar pedidos.
Proyecto portfolio principal de IK Digital Services.

## Stack tecnológico
- HTML5 / CSS3 / JS vanilla puro
- Sin frameworks, sin npm, sin build steps
- Hosting: GitHub Pages → https://cryptosuar.github.io/tartas-de-tina
- EmailJS — integración PENDIENTE
- Google Sheets — base de datos de pedidos PENDIENTE

## Cómo previsualizar en local
```bash
python3 -m http.server 8000
```
Abrir cualquier `.html` directamente en el navegador también funciona.

---

## Estructura de archivos

### Páginas HTML (16 en total)
- `index.html` — Inicio
- `productos.html` — Catálogo general
- `tartas.html` — Tartas personalizadas
- `cheesecakes.html` — Cheesecakes
- `macarons.html` — Macarons
- `mousses.html` — Mousses
- `tartas-numeros.html` — Tartas con números
- `vasos-postre.html` — Vasos postre
- `otros-postres.html` — Otros postres
- `galeria.html` — Galería interactiva con filtros
- `carrito.html` — Carrito de compra
- `quienes-somos.html` — Quiénes somos
- `contacto.html` — Contacto (en index.html)
- `aviso-legal.html` / `cookies.html` / `privacidad.html` / `terminos-condiciones.html`

### Archivos clave
- `style.css` — hoja de estilos global única (~3000+ líneas)
- `js/header.js` — lógica compartida del header (menú móvil, sticky, dropdown)
- `images/` — organizado por categorías:
  - `productos/tartas/`
  - `productos/cheesecakes/`
  - `about/`
  - `heroes/`

---

## Arquitectura CSS
Usa CSS custom properties (variables) para todo el sistema de diseño:
colores, espaciado, tipografía, sombras y transiciones.
Las clases de componentes son compartidas entre todas las páginas via `style.css`.

## Arquitectura JS
- `js/header.js` — cargado en todas las páginas, gestiona:
  - Mobile menu toggle
  - Sticky header (scroll > 100px → clase `.scrolled`)
  - Dropdown menú móvil
- Cada página tiene su propio JS embebido al final del body para lógica específica
- FAQ accordion (patrón single-open con `.faq-item.active`)

## Plantilla de página (todas siguen esta estructura)
1. `<script src="js/header.js"></script>` — antes del cierre body
2. Header sticky con menú hamburguesa en móvil
3. Sección Hero / banner
4. Contenido principal
5. Footer con contacto y redes sociales

## Dependencias externas (solo CDN)
- Google Fonts: Montserrat, Playfair Display, Poppins
- Font Awesome 6.4.0

---

## Estado actual del proyecto

### ✅ Completado
- Estructura HTML de las 16 páginas
- Navegación entre todas las páginas (sin 404s)
- Sistema de diseño completo (variables CSS)
- Header JS extraído a `js/header.js` (eliminado código duplicado en 16 páginas)
- Menú hamburguesa móvil + sticky header
- FAQ accordion
- Galería interactiva con filtros por categoría y lightbox
- Carrito de compra (UI básica)
- Formularios de pedido → redirigen a WhatsApp con datos pre-rellenados
- Responsive móvil corregido (breakpoints 480px, 768px, 992px)
- Subido a GitHub: https://github.com/CryptoSuar/tartas-de-tina
- Publicado en GitHub Pages: https://cryptosuar.github.io/tartas-de-tina

### 🔧 En progreso / próximas modificaciones
- Cambios visuales (secciones, botones, tipografía, colores)
- Fotos propias de Tina (actualmente imágenes de stock)
- Precios reales de los productos

### ❌ Pendiente
- EmailJS — envío real de emails con cada pedido
- Google Sheets — guardar pedidos automáticamente
- Carrito de compra funcional (lógica completa)

## Flujo de pedido actual (provisional)
1. Cliente navega el catálogo
2. Rellena formulario de pedido
3. Al hacer submit → abre WhatsApp con mensaje pre-rellenado
4. Tina recibe el pedido por WhatsApp

## Flujo de pedido objetivo (futuro)
1. Cliente navega → añade al carrito → checkout
2. Email enviado via EmailJS
3. Pedido guardado en Google Sheets

---

## Integraciones pendientes

### EmailJS
- Service ID: [PENDIENTE]
- Template ID: [PENDIENTE]
- Public Key: [PENDIENTE]

### Google Sheets
- URL de la hoja: [PENDIENTE]
- Nombre de la pestaña: [PENDIENTE]

---

## Datos del negocio
- Teléfono / WhatsApp: +34 627 189 264
- Email: tartasdetina@gmail.com
- Instagram: @tartas_de_tina
- Ubicación: Tarragona, España 43007

---

## Reglas importantes (NO ignorar nunca)
- Nunca usar frameworks externos (React, Vue, jQuery, Bootstrap...)
- Mantener compatibilidad total con GitHub Pages
- No añadir dependencias npm ni pasos de build
- Nuevas dependencias solo via CDN si son estrictamente necesarias
- Antes de tocar cualquier archivo, indicar exactamente qué se va a cambiar
- No romper funcionalidades ya operativas
- Hacer commit después de cada bloque de cambios terminado
- CSS mobile-first — la mayoría del tráfico es móvil
- Todos los textos en español (castellano)
- Cuidar los detalles visuales — es proyecto para clienta real
- El JS del header está en js/header.js — no duplicar en páginas individuales
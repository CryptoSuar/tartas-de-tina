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
- EmailJS — código integrado, pendiente de credenciales
- Google Sheets — pendiente de Google Apps Script

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
- `style.css` — hoja de estilos global única (~3300+ líneas)
- `js/header.js` — lógica compartida del header (menú móvil, sticky, dropdown)
- `js/cart.js` — lógica compartida del carrito (cargado en TODAS las páginas)
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
- `js/cart.js` — cargado en todas las páginas, gestiona:
  - `getCart()` / `saveCart()` / `addToCart(nombre, imagen, categoria, detalles)`
  - `removeFromCart(id)` / `clearCart()`
  - `updateCartCount()` — actualiza el badge del carrito en el header
  - `showToast(message, type)` — notificaciones tipo toast
  - Persistencia: `localStorage` con clave `'cart'`
  - Estructura de un item: `{id, nombre, imagen, categoria, detalles, fechaAdded}`
- Cada página tiene su propio JS embebido al final del body para lógica específica
- FAQ accordion (patrón single-open con `.faq-item.active`)

## Plantilla de página (todas siguen esta estructura)
1. `<script src="js/cart.js"></script>` — antes del cierre body
2. `<script src="js/header.js"></script>` — después de cart.js
3. Header sticky con menú hamburguesa en móvil
4. Sección Hero / banner
5. Contenido principal
6. Footer con contacto y redes sociales

## Dependencias externas (solo CDN)
- Google Fonts: Montserrat, Playfair Display, Poppins
- Font Awesome 6.4.0
- EmailJS Browser v4 (en index.html — requiere credenciales para activarse)

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
- **Carrito de compra funcional:**
  - `js/cart.js` — módulo compartido de carrito
  - Botones "Añadir al Carrito" en TODAS las páginas de producto
  - `carrito.html` — muestra productos, elimina items, vaciar carrito, checkout por WhatsApp
- Formularios de pedido → redirigen a WhatsApp con datos pre-rellenados
- Responsive móvil corregido (breakpoints 480px, 768px, 992px)
- **EmailJS integrado** en formulario de contacto (código listo, faltan credenciales)
- Subido a GitHub: https://github.com/CryptoSuar/tartas-de-tina
- Publicado en GitHub Pages: https://cryptosuar.github.io/tartas-de-tina

### 🔧 Pendiente de datos externos (no requiere código)
- Fotos propias de Tina (actualmente imágenes de stock)
- Precios reales de los productos (mostrar en fichas de producto)

### ❌ Pendiente de configuración / credenciales
- **EmailJS** — rellenar `EMAILJS_PUBLIC_KEY`, `EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID` en `index.html`
- **Google Sheets** — crear Google Apps Script y añadir URL en formularios de pedido

## Flujo de pedido actual (funcional)
1. Cliente navega el catálogo
2. Añade productos al carrito (botón "Añadir al Carrito")
3. Va a `carrito.html`, revisa su selección
4. Pulsa "Confirmar Pedido por WhatsApp" → abre WhatsApp con todos los productos listados
5. Tina recibe el pedido y confirma disponibilidad y precio

## Flujo de contacto actual (funcional)
1. Cliente rellena formulario en `index.html#contacto`
2. Si EmailJS configurado → envía email a Tina automáticamente
3. Si no configurado → abre WhatsApp con el mensaje

---

## Integraciones pendientes

### EmailJS
- **Cómo activar:** Registrarse en https://www.emailjs.com
  1. Crear servicio (Gmail recomendado) → anotar `Service ID`
  2. Crear plantilla con variables: `{{nombre}}`, `{{telefono}}`, `{{email}}`, `{{mensaje}}` → anotar `Template ID`
  3. En Account → API Keys → copiar `Public Key`
  4. Editar `index.html` líneas ~18-22, rellenar las tres constantes
- Service ID: [PENDIENTE]
- Template ID: [PENDIENTE]
- Public Key: [PENDIENTE]

### Google Sheets
- **Cómo activar:**
  1. Crear hoja de cálculo en Google Drive
  2. Herramientas → Editor de secuencias de comandos → pegar script Apps Script que acepta POST y appends filas
  3. Publicar como aplicación web → copiar URL
  4. Añadir `fetch(APPS_SCRIPT_URL, { method:'POST', body: JSON.stringify(datos) })` en cada submit de formulario de pedido
- URL del Apps Script: [PENDIENTE]
- ID de la hoja de cálculo: [PENDIENTE]

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
- El JS del carrito está en js/cart.js — no duplicar en páginas individuales
- Orden de scripts al final del body: cart.js → header.js → JS específico de la página
- Para añadir un producto al carrito: `addToCart(nombre, imagen, categoria, detalles)`
  - `detalles` es opcional, objeto con campos extra (tamano, relleno, sabor, etc.)
- El carrito usa `localStorage` — persiste entre páginas pero NO entre dispositivos
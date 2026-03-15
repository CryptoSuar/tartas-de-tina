# Tartas de Tina — Proyecto Web

> Guía para Claude Code al trabajar en este repositorio.

## Descripción del negocio
Pastelería artesanal en Tarragona. La web permite a los clientes
explorar el catálogo, conocer el negocio y realizar pedidos.
Proyecto portfolio principal de IK Digital Services.

## Stack tecnológico
- HTML5 / CSS3 / JS vanilla puro
- Sin frameworks, sin npm, sin build steps
- Hosting: GitHub Pages (deploy directo desde rama main)
- EmailJS — integración de emails PENDIENTE
- Google Sheets — base de datos de pedidos PENDIENTE

## Cómo previsualizar en local
```bash
# Python
python3 -m http.server 8000

# Node.js
npx serve .
```
Abrir cualquier `.html` directamente en el navegador también funciona.

---

## Estructura de archivos

- 14 páginas HTML — cada una autocontenida con JS inline al final
- `style.css` — hoja de estilos global única (~3000 líneas)
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
Cada página tiene su propio JS embebido al final del body.
Patrones comunes repetidos en todas las páginas:
- Mobile menu toggle (`.menu-toggle` / `.nav-links`)
- Sticky header (`scroll` → clase `.scrolled` a los 100px)
- FAQ accordion (patrón single-open con `.faq-item.active`)
- Formulario de contacto (simulado — sin backend real todavía)
- Smooth scroll para anclas

## Plantilla de página (todas siguen esta estructura)
1. Header sticky con menú hamburguesa en móvil
2. Sección Hero / banner
3. Contenido principal (grids de productos, FAQs, formularios)
4. Footer con contacto y redes sociales

## Dependencias externas (solo CDN)
- Google Fonts: Montserrat, Playfair Display, Poppins
- Font Awesome 6.4.0

---

## Secciones existentes
- ✅ Inicio / Hero
- ✅ Catálogo de tartas
- ✅ Sobre nosotros
- ✅ Contacto
- ✅ Header con menú móvil
- ✅ Footer

## Estado actual del proyecto

### ✅ Funcionando
- Estructura HTML de las 14 páginas
- Navegación entre páginas
- Sistema de diseño completo (variables CSS)
- Header sticky + menú hamburguesa
- FAQ accordion
- Galería de imágenes organizada

### ❌ Pendiente por completar
- Carrito de compra (lógica y UI)
- Galería de fotos interactiva
- EmailJS — envío real de emails al negocio con cada pedido
- Google Sheets — guardar pedidos automáticamente
- Responsive móvil — revisar y pulir todas las páginas
- Formulario de contacto — conectar con backend real

## Flujo de pedido (objetivo final)
1. Cliente navega el catálogo
2. Selecciona producto y lo añade al carrito
3. Revisa el carrito
4. Rellena formulario con datos de contacto y entrega
5. Email enviado al negocio via EmailJS
6. Pedido guardado en Google Sheets automáticamente

## Prioridad de desarrollo
1. Responsive móvil (todas las páginas)
2. Carrito de compra
3. Integración EmailJS
4. Integración Google Sheets
5. Galería de fotos interactiva

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

## Datos del negocio (presentes en el código)
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
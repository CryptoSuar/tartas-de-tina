// ==========================================
// CARRITO COMPARTIDO — Tartas de Tina
// js/cart.js — Cargado en todas las páginas
// ==========================================

// Obtener carrito desde localStorage
function getCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
}

// Guardar carrito en localStorage
function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

// Actualizar el contador visual del header
function updateCartCount() {
    const cart = getCart();
    const cartCount = document.getElementById('cartCount');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Añadir producto al carrito
function addToCart(nombre, imagen, categoria, detalles) {
    const cart = getCart();
    const producto = {
        id: Date.now() + Math.floor(Math.random() * 10000),
        nombre: nombre,
        imagen: imagen || '',
        categoria: categoria || 'Producto',
        detalles: detalles || {},
        fechaAdded: new Date().toISOString()
    };
    cart.push(producto);
    saveCart(cart);
    showToast('Producto añadido al carrito', 'success');
}

// Eliminar producto del carrito por ID
function removeFromCart(id) {
    const cart = getCart().filter(item => item.id !== id);
    saveCart(cart);
    return cart;
}

// Vaciar carrito completo
function clearCart() {
    saveCart([]);
}

// Mostrar notificación tipo toast
function showToast(message, type) {
    type = type || 'success';

    // Eliminar toast anterior si existe
    var existing = document.querySelector('.toast-notification');
    if (existing) existing.remove();

    var colors = {
        success: { bg: '#B5EAD7', color: '#1a4a2e' },
        error:   { bg: '#FF6B7A', color: '#fff' },
        info:    { bg: '#C7CEEA', color: '#2c3e6e' }
    };
    var c = colors[type] || colors.success;

    var icons = {
        success: 'check-circle',
        error:   'exclamation-circle',
        info:    'info-circle'
    };

    var toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.innerHTML = '<i class="fas fa-' + (icons[type] || 'check-circle') + '" style="margin-right:0.5rem"></i>' + message;
    toast.style.cssText = [
        'position:fixed',
        'top:100px',
        'right:20px',
        'background:' + c.bg,
        'color:' + c.color,
        'padding:0.875rem 1.25rem',
        'border-radius:12px',
        'box-shadow:0 4px 20px rgba(0,0,0,0.15)',
        'z-index:10000',
        'font-weight:600',
        'font-family:Poppins,sans-serif',
        'font-size:0.9375rem',
        'display:flex',
        'align-items:center',
        'max-width:320px',
        'animation:toastIn 0.35s cubic-bezier(0.175,0.885,0.32,1.275) forwards'
    ].join(';');

    // Añadir keyframes si no existen
    if (!document.getElementById('toast-styles')) {
        var style = document.createElement('style');
        style.id = 'toast-styles';
        style.textContent = [
            '@keyframes toastIn{from{transform:translateX(350px);opacity:0}to{transform:translateX(0);opacity:1}}',
            '@keyframes toastOut{from{transform:translateX(0);opacity:1}to{transform:translateX(350px);opacity:0}}'
        ].join('');
        document.head.appendChild(style);
    }

    document.body.appendChild(toast);

    setTimeout(function() {
        toast.style.animation = 'toastOut 0.3s ease forwards';
        setTimeout(function() { toast.remove(); }, 320);
    }, 3000);
}

// Inicializar al cargar cualquier página
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();
});

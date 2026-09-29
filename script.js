// بيانات المنتجات
const productsData = [
    {
        id: 1,
        title: "سبحه الاكترونيه",
        price: "1500 ج.م",
        image: "https://cdn.phototourl.com/member/2026-09-29-9b1a1102-590c-4e5c-82e1-22de73b49448.jpg"
    },
    {
        id: 2,
        title: "فانوس رمضان",
        price: "2300 ج.م",
        image: "https://cdn.phototourl.com/member/2026-09-29-e0c2a94a-4596-4d00-b18e-555ebc4d3c77.jpg"
    },
    {
        id: 3,
        title: "ساعه كلاسيك",
        price: "950 ج.م",
        image: "https://cdn.phototourl.com/member/2026-09-29-e64911aa-6404-464d-99f1-a5d95dd29605.jpg"
    },
    {
        id: 4,
        title: "مكعب روبيك",
        price: "4200 ج.م",
        image: "https://cdn.phototourl.com/member/2026-09-29-a6d59a8f-9ca0-4703-8782-0873c8f7d3d8.jpg"
    },
    {
        id: 5,
        title: "سماعه اير بودز",
        price: "650 ج.م",
        image: "https://cdn.phototourl.com/member/2026-09-29-6d3a9931-6517-4ae4-a3d4-28465b2641f1.jpg"
    },
    {
        id: 6,
        title: "حامل هاتف وجهاز لوحي مكتبي مرن وقابل للتعديل",
        price: "350 ج.م",
        image: "https://images.unsplash.com/photo-1586105251261-72a756497a11?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 7,
        title: "منصة تبريد لابتوب بإضاءة ليد ومروحتين قويتين",
        price: "850 ج.م",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 8,
        title: "كاميرا ويب بدقة عالية للبث المباشر والاجتماعات",
        price: "1800 ج.م",
        image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 9,
        title: "سماعة أذن بلوتوث لاسلكية مقاومة للعرق",
        price: "750 ج.م",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 10,
        title: "إضاءة حلقة ليد للتصوير وصانعي المحتوى مع حامل",
        price: "1100 ج.م",
        image: "https://images.unsplash.com/photo-1527011049759-19ec045e72d2?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 11,
        title: "باور بانك سعة 20000 ملي أمبير شحن فائق السرعة",
        price: "1250 ج.م",
        image: "https://images.unsplash.com/photo-1609592424155-2270923014a0?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 12,
        title: "قاعدة ماوس كبيرة الحجم بتصميم الألعاب مانعة للانزلاق",
        price: "300 ج.م",
        image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 13,
        title: "فلاش ميموري مساحة 128 جيجابايت عالية السرعة",
        price: "450 ج.م",
        image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=500&auto=format&fit=crop&q=60"
    },
    {
        id: 14,
        title: "منظم كابلات الأسلاك المكتبية لحماية وترتيب الأجهزة",
        price: "200 ج.م",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&auto=format&fit=crop&q=60"
    }
];

// سلة المشتريات
let cart = [];

// عرض المنتجات
function renderProducts() {
    const gridContainer = document.getElementById('productsGrid');
    if (!gridContainer) return;

    gridContainer.innerHTML = productsData.map(product => `
        <div class="product-card">
            <div class="product-image">
                <img src="${product.image}" alt="${product.title}">
            </div>
            <div class="product-title">${product.title}</div>
            <div class="product-footer">
                <div class="product-price">${product.price}</div>
                <button class="buy-btn" id="btn-${product.id}" onclick="addToCart(${product.id}, event)">إضافة للسلة</button>
            </div>
        </div>
    `).join('');
}

// إضافة منتج للسلة مع تشغيل تأثير الأنيميشن المتجه للسلة
function addToCart(productId, event) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    // تشغيل الأنيميشن للدائرة المتحركة
    playFlyingAnimation(event.target);

    cart.push(product);
    updateCartUI();
}

// دالة أنيميشن الدائرة المتحركة نحية أيقونة السلة
function playFlyingAnimation(buttonElement) {
    const cartIconBtn = document.getElementById('cartIconBtn');
    
    const btnRect = buttonElement.getBoundingClientRect();
    const cartRect = cartIconBtn.getBoundingClientRect();

    // إنشاء عنصر الدائرة
    const flyingCircle = document.createElement('div');
    flyingCircle.classList.add('flying-circle');
    
    // ضبط موقع البداية في مركز زر "إضافة للسلة"
    flyingCircle.style.left = `${btnRect.left + btnRect.width / 2 - 11}px`;
    flyingCircle.style.top = `${btnRect.top + btnRect.height / 2 - 11}px`;

    document.body.appendChild(flyingCircle);

    // تحريك الدائرة تدريجياً نحو أيقونة السلة
    setTimeout(() => {
        flyingCircle.style.left = `${cartRect.left + cartRect.width / 2 - 11}px`;
        flyingCircle.style.top = `${cartRect.top + cartRect.height / 2 - 11}px`;
        flyingCircle.style.transform = 'scale(0.3)';
        flyingCircle.style.opacity = '0.4';
    }, 40);

    // إزالة الدائرة عند الوصول واهتزاز أيقونة السلة وفتح السلة تلقائياً
    setTimeout(() => {
        flyingCircle.remove();

        // اهتزاز وتكبير بسيط لأيقونة السلة
        cartIconBtn.style.transform = 'scale(1.25)';
        setTimeout(() => {
            cartIconBtn.style.transform = 'scale(1)';
        }, 200);

        // فتح السلة تلقائياً بعد انتهاء الأنيميشن
        toggleCart(true);

    }, 740);
}

// حذف منتج من السلة
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// تحديث واجهة السلة (العداد، العناصر، الإجمالي)
function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotalPrice = document.getElementById('cartTotalPrice');

    cartCount.textContent = cart.length;

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p style="color: #94a3b8; text-align: center; margin-top: 20px;">السلة فارغة حالياً</p>';
        cartTotalPrice.textContent = "0 ج.م";
        return;
    }

    let total = 0;
    cartItemsContainer.innerHTML = cart.map((item, index) => {
        const numericPrice = parseFloat(item.price.replace(/[^\d.]/g, '')) || 0;
        total += numericPrice;

        return `
            <div class="cart-item">
                <div class="cart-item-info">
                    <img src="${item.image}" alt="${item.title}">
                    <div class="cart-item-details">
                        <h4>${item.title}</h4>
                        <p>${item.price}</p>
                    </div>
                </div>
                <button class="remove-item-btn" onclick="removeFromCart(${index})">🗑️</button>
            </div>
        `;
    }).join('');

    cartTotalPrice.textContent = total + " ج.م";
}

// فتح وإغلاق السلة الجانبية
function toggleCart(open) {
    const cartDrawer = document.getElementById('cartDrawer');
    const cartOverlay = document.getElementById('cartOverlay');
    if (open) {
        cartDrawer.classList.add('active');
        cartOverlay.classList.add('active');
    } else {
        cartDrawer.classList.remove('active');
        cartOverlay.classList.remove('active');
    }
}

// إتمام الطلب عبر الواتساب
function checkoutWhatsApp() {
    if (cart.length === 0) {
        alert("سلة التسوق فارغة!");
        return;
    }

    let message = "مرحباً، أرغب في طلب المنتجات التالية:\n\n";
    let total = 0;

    cart.forEach((item, index) => {
        message += `${index + 1}- ${item.title} (${item.price})\n`;
        const numericPrice = parseFloat(item.price.replace(/[^\d.]/g, '')) || 0;
        total += numericPrice;
    });

    message += `\nالإجمالي الكلي: ${total} ج.م\nفي انتظار تأكيد الطلب.`;

    const phoneNumber = "201144082016";
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappURL, '_blank');
}

// ربط الأحداث عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();

    const cartIconBtn = document.getElementById('cartIconBtn');
    const closeCart = document.getElementById('closeCart');
    const cartOverlay = document.getElementById('cartOverlay');
    const whatsappCheckoutBtn = document.getElementById('whatsappCheckoutBtn');

    cartIconBtn.addEventListener('click', () => toggleCart(true));
    closeCart.addEventListener('click', () => toggleCart(false));
    cartOverlay.addEventListener('click', () => toggleCart(false));
    whatsappCheckoutBtn.addEventListener('click', checkoutWhatsApp);
});

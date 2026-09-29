// بيانات المنتجات (تمت إضافة المنتجات ليصل الإجمالي إلى 14 منتجاً)
const productsData = [
    {
        id: 1,
        title: "سبحه الاكترونيه",
        price: "1500 ج.م",
        image: "https://cdn.phototourl.com/member/2026-09-29-9b1a1102-590c-4e5c-82e1-22de73b49448.jpg" // ضع رابط الصورة هنا
    },
    {
        id: 2,
        title: "     فانوس رمضان ",
        price: "2300 ج.م",
        image: "https://cdn.phototourl.com/member/2026-09-29-e0c2a94a-4596-4d00-b18e-555ebc4d3c77.jpg" // ضع رابط الصورة هنا
    },
    {
        id: 3,
        title: " ساعه كلاسيك   ",
        price: "950 ج.م",
        image: "https://cdn.phototourl.com/member/2026-09-29-e64911aa-6404-464d-99f1-a5d95dd29605.jpg" // ضع رابط الصورة هنا
    },
    {
        id: 4,
        title: "مكعب روبيك     ",
        price: "4200 ج.م",
        image: "https://cdn.phototourl.com/member/2026-09-29-a6d59a8f-9ca0-4703-8782-0873c8f7d3d8.jpg" // ضع رابط الصورة هنا
    },
    {
        id: 5,
        title: "سماعه اير بودز",
        price: "650 ج.م",
        image: "https://cdn.phototourl.com/member/2026-09-29-6d3a9931-6517-4ae4-a3d4-28465b2641f1.jpg" // ضع رابط الصورة هنا
    },
    {
        id: 6,
        title: "حامل هاتف وجهاز لوحي مكتبي مرن وقابل للتعديل",
        price: "350 ج.م",
        image: "" // ضع رابط الصورة هنا
    },
    {
        id: 7,
        title: "منصة تبريد لابتوب بإضاءة ليد ومروحتين قويتين",
        price: "850 ج.م",
        image: "" // ضع رابط الصورة هنا
    },
    {
        id: 8,
        title: "كاميرا ويب بدقة عالية للبث المباشر والاجتماعات",
        price: "1800 ج.م",
        image: "" // ضع رابط الصورة هنا
    },
    {
        id: 9,
        title: "سماعة أذن بلوتوث لاسلكية مقاومة للعرق",
        price: "750 ج.م",
        image: "" // ضع رابط الصورة هنا
    },
    {
        id: 10,
        title: "إضاءة حلقة ليد للتصوير وصانعي المحتوى مع حامل",
        price: "1100 ج.م",
        image: "" // ضع رابط الصورة هنا
    },
    {
        id: 11,
        title: "باور بانك سعة 20000 ملي أمبير شحن فائق السرعة",
        price: "1250 ج.م",
        image: "" // ضع رابط الصورة هنا
    },
    {
        id: 12,
        title: "قاعدة ماوس كبيرة الحجم بتصميم الألعاب مانعة للانزلاق",
        price: "300 ج.م",
        image: "" // ضع رابط الصورة هنا
    },
    {
        id: 13,
        title: "فلاش ميموري مساحة 128 جيجابايت عالية السرعة",
        price: "450 ج.م",
        image: "" // ضع رابط الصورة هنا
    },
    {
        id: 14,
        title: "منظم كابلات الأسلاك المكتبية لحماية وترتيب الأجهزة",
        price: "200 ج.م",
        image: "" // ضع رابط الصورة هنا
    }
];

// دالة عرض المنتجات مع التفاصيل الفخمة
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
                <button class="buy-btn">اطلب الان</button>
            </div>
        </div>
    `).join('');
}

// تشغيل الكود عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', renderProducts);

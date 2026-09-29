// بيانات المنتجات (تمت إضافة 10 منتجات جديدة ليصل الإجمالي إلى 14 منتجاً)
const productsData = [
    {
        id: 1,
        title: "سماعات ألعاب احترافية RGB إضاءة ليد",
        price: "1500 ج.م",
        image: "" // ضع رابط الصورة هنا
    },
    {
        id: 2,
        title: "ساعة إلكترونية ذكية حديثة بشاشة أموليد",
        price: "2300 ج.م",
        image: "" // ضع رابط الصورة هنا
    },
    {
        id: 3,
        title: "ماوس لاسلكي للألعاب بتصميم مريح جداً",
        price: "950 ج.م",
        image: "" // ضع رابط الصورة هنا
    },
    {
        id: 4,
        title: "كيبورد ميكانيكي مخصص للاعبين والمحترفين",
        price: "4200 ج.م",
        image: "" // ضع رابط الصورة هنا
    },
    {
        id: 5,
        title: "شاحن جداري سريع بتقنية النانو والبي دي",
        price: "650 ج.م",
        image: ""
    },
    {
        id: 6,
        title: "حامل هاتف وجهاز لوحي مكتبي مرن وقابل للتعديل",
        price: "350 ج.م",
        image: ""
    },
    {
        id: 7,
        title: "منصة تبريد لابتوب بإضاءة ليد ومروحتين قويتين",
        price: "850 ج.م",
        image: ""
    },
    {
        id: 8,
        title: "كاميرا ويب بدقة عالية للبث المباشر والاجتماعات",
        price: "1800 ج.م",
        image: ""
    },
    {
        id: 9,
        title: "سماعة أذن بلوتوث لاسلكية مقاومة للعرق",
        price: "750 ج.م",
        image: ""
    },
    {
        id: 10,
        title: "إضاءة حلقة ليد للتصوير وصانعي المحتوى مع حامل",
        price: "1100 ج.م",
        image: ""
    },
    {
        id: 11,
        title: "باور بانك سعة 20000 ملي أمبير شحن فائق السرعة",
        price: "1250 ج.م",
        image: ""
    },
    {
        id: 12,
        title: "قاعدة ماوس كبيرة الحجم بتصميم الألعاب مانعة للانزلاق",
        price: "300 ج.م",
        image: ""
    },
    {
        id: 13,
        title: "فلاش ميموري مساحة 128 جيجابايت عالية السرعة",
        price: "450 ج.م",
        image: ""
    },
    {
        id: 14,
        title: "منظم كابلات الأسلاك المكتبية لحماية وترتيب الأجهزة",
        price: "200 ج.م",
        image: ""
    }
];

// دالة عرض المنتجات مع التفاصيل الفخمة
function renderProducts() {
    const gridContainer = document.getElementById('productsGrid');

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

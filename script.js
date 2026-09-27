// بيانات المنتجات (ضع روابط صورك من ImgBB هنا)
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
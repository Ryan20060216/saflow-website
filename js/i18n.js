// i18n Translations
const translations = {
    zh: {
        'nav.home': '首頁',
        'nav.about': '關於我們',
        'nav.services': '服務項目',
        'nav.contact': '聯絡我們',
        'hero.title': '連接全球貿易 創造無限價值',
        'hero.subtitle': '安喬國際 — 您的國際貿易專業夥伴',
        'hero.cta1': '了解服務',
        'hero.cta2': '聯繫我們',
        'features.1.title': '全球視野',
        'features.1.desc': '跨國貿易經驗，熟悉國際市場動態',
        'features.2.title': '信賴合作',
        'features.2.desc': '誠信經營，建立長期夥伴關係',
        'features.3.title': '高效服務',
        'features.3.desc': '快速反應，專業團隊支援',
        'features.4.title': '品質保證',
        'features.4.desc': '嚴格把關，確保產品質量',
        'about.tag': '關於我們',
        'about.title': '了解<span class="rangi">安喬國際</span>',
        'about.subtitle': '致力於國際貿易服務，提供專業的貿易解決方案',
        'about.heading': '我們的使命與願景',
        'about.content': '安喬國際有限公司致力於國際貿易服務，提供專業的貿易解決方案。我們擁有豐富的跨境貿易經驗，協助客戶拓展全球市場，建立互信的商業合作關係。',
        'about.point1.title': '專業團隊',
        'about.point1.desc': '經驗豐富的貿易專家，提供專業諮詢服務',
        'about.point2.title': '市場拓展',
        'about.point2.desc': '協助客戶開拓全球市場，尋找最佳商業機會',
        'about.footer': '安喬國際以誠信為本，以專業為基礎，為每一位客戶提供最優質的國際貿易服務。我們相信，良好的合作關係是建立在相互信任與共同成長的基礎上。',
        'stats.1': '年貿易經驗',
        'stats.2': '合作國家',
        'stats.3': '貿易案例',
        'stats.4': '合作夥伴',
        'services.tag': '服務項目',
        'services.title': '我們的<span class="rangi">服務</span>',
        'services.subtitle': '提供全方位的國際貿易服務',
        'services.1.title': '進出口貿易',
        'services.1.desc': '提供全方位的進出口貿易服務，包括採購、物流、报关等',
        'services.2.title': '供應鏈管理',
        'services.2.desc': '優化供應鏈流程，降低營運成本，提升效率',
        'services.3.title': '市場諮詢',
        'services.3.desc': '提供市場分析與商業諮詢服務，協助決策',
        'services.4.title': '貿易文件',
        'services.4.desc': '處理貿易文件、單證，確保順利通關',
        'services.5.title': '品質檢驗',
        'services.5.desc': '提供產品檢驗服務，確保符合國際標準',
        'services.6.title': '商業合作',
        'services.6.desc': '協助尋找合作夥伴，建立商業網絡',
        'contact.tag': '聯絡我們',
        'contact.title': '聯繫我們',
        'contact.subtitle': '歡迎隨時與我們聯繫',
        'contact.address.title': '我們的地址',
        'contact.address': '台灣台北市',
        'contact.email.title': '電子郵件',
        'contact.phone.title': '聯繫電話',
        'form.name': '您的姓名',
        'form.email': '您的 Email',
        'form.subject': '主旨',
        'form.message': '請輸入訊息',
        'form.submit': '送出訊息',
        'footer.company': '安喬國際有限公司',
        'footer.phone': '電話:',
        'footer.email': 'Email:',
        'footer.links': '快速連結',
        'footer.services.title': '我們的服務',
        'footer.social': '社交媒體',
        'footer.social.desc': '歡迎關注我們的社交媒體',
        'footer.copy': '版權所有 2026 安喬國際有限公司'
    },
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.contact': 'Contact',
        'hero.title': 'Connecting Global Trade, Creating Infinite Value',
        'hero.subtitle': 'Saflow International — Your Professional Trade Partner',
        'hero.cta1': 'Our Services',
        'hero.cta2': 'Contact Us',
        'features.1.title': 'Global Vision',
        'features.1.desc': 'Cross-border trade experience, familiar with international market trends',
        'features.2.title': 'Trust & Cooperation',
        'features.2.desc': 'Honest business practices, building long-term partnerships',
        'features.3.title': 'Efficient Service',
        'features.3.desc': 'Quick response, professional team support',
        'features.4.title': 'Quality Assurance',
        'features.4.desc': 'Strict quality control, ensuring product quality',
        'about.tag': 'About Us',
        'about.title': 'Learn About <span class="rangi">Saflow</span>',
        'about.subtitle': 'Dedicated to international trade services, providing professional solutions',
        'about.heading': 'Our Mission & Vision',
        'about.content': 'Saflow International Co., Ltd. is dedicated to international trade services, providing professional trade solutions. We have rich cross-border trade experience and help clients expand global markets.',
        'about.point1.title': 'Professional Team',
        'about.point1.desc': 'Experienced trade experts providing professional consulting services',
        'about.point2.title': 'Market Expansion',
        'about.point2.desc': 'Helping clients explore global markets and find best business opportunities',
        'about.footer': 'Saflow International is committed to providing the highest quality international trade services. We believe that good cooperation is built on mutual trust and shared growth.',
        'stats.1': 'Years Experience',
        'stats.2': 'Partner Countries',
        'stats.3': 'Trade Cases',
        'stats.4': 'Partners',
        'services.tag': 'Services',
        'services.title': 'Our <span class="rangi">Services</span>',
        'services.subtitle': 'Comprehensive international trade services',
        'services.1.title': 'Import & Export',
        'services.1.desc': 'Comprehensive import and export trade services including procurement, logistics, customs',
        'services.2.title': 'Supply Chain',
        'services.2.desc': 'Optimize supply chain processes, reduce costs, improve efficiency',
        'services.3.title': 'Market Consulting',
        'services.3.desc': 'Market analysis and business consulting services',
        'services.4.title': 'Trade Documents',
        'services.4.desc': 'Handle trade documents and ensure smooth customs clearance',
        'services.5.title': 'Quality Inspection',
        'services.5.desc': 'Product inspection services to ensure international standards',
        'services.6.title': 'Business Cooperation',
        'services.6.desc': 'Help find partners and build business networks',
        'contact.tag': 'Contact',
        'contact.title': 'Contact Us',
        'contact.subtitle': 'Feel free to contact us anytime',
        'contact.address.title': 'Our Address',
        'contact.address': 'Taipei, Taiwan',
        'contact.email.title': 'Email',
        'contact.phone.title': 'Phone',
        'form.name': 'Your Name',
        'form.email': 'Your Email',
        'form.subject': 'Subject',
        'form.message': 'Your Message',
        'form.submit': 'Send Message',
        'footer.company': 'Saflow International Co., Ltd.',
        'footer.phone': 'Phone:',
        'footer.email': 'Email:',
        'footer.links': 'Quick Links',
        'footer.services.title': 'Our Services',
        'footer.social': 'Social Media',
        'footer.social.desc': 'Follow us on social media',
        'footer.copy': '© Copyright 2026 Saflow International Co., Ltd.'
    }
};

// Initialize i18n
function initI18n() {
    const lang = localStorage.getItem('lang') || 'zh';
    setLanguage(lang);
}

function setLanguage(lang) {
    document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : 'en';
    localStorage.setItem('lang', lang);

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // Update language button
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.textContent = lang === 'zh' ? 'EN' : '中文';
    }
}

document.addEventListener('DOMContentLoaded', initI18n);

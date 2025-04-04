// Translation system
let currentLanguage = 'en';

// Translations object
const translations = {
    en: {
        home: "Home",
        about: "About",
        products: "Products",
        contact: "Contact",
        login: "Login",
        register: "Register",
        profile: "Profile",
        logout: "Logout",
        crop_rotation: "CropShiftX",
        agrirevive: "AgriReVive",
        agrirevive_title: "AgriReVive",
        agrirevive_desc: "Innovative biofuel production system that converts agricultural waste into clean energy, reducing carbon emissions and providing alternative fuel solutions.",
        smart_farm: "Smart Farm",
        quick_links: "Quick Links",
        contact_us: "Contact Us",
        email_contact: "Email: info@biobloom.com",
        phone_contact: "Phone: +91 1234567890"
    },
    hi: {
        home: "होम",
        about: "हमारे बारे में",
        products: "उत्पाद",
        contact: "संपर्क",
        login: "लॉग इन",
        register: "रजिस्टर",
        profile: "प्रोफ़ाइल",
        logout: "लॉग आउट",
        crop_rotation: "क्रॉपशिफ्टएक्स",
        agrirevive: "एग्रीरिवाइव",
        agrirevive_title: "एग्रीरिवाइव",
        agrirevive_desc: "कृषि अपशिष्ट को स्वच्छ ऊर्जा में परिवर्तित करने वाली नवीन बायोफ्यूल उत्पादन प्रणाली, जो कार्बन उत्सर्जन को कम करती है और वैकल्पिक ईंधन समाधान प्रदान करती है।",
        smart_farm: "स्मार्ट फार्म",
        quick_links: "त्वरित लिंक",
        contact_us: "संपर्क करें",
        email_contact: "ईमेल: info@biobloom.com",
        phone_contact: "फोन: +91 1234567890"
    },
    kn: {
        home: "ಮುಖಪುಟ",
        about: "ನಮ್ಮ ಬಗ್ಗೆ",
        products: "ಉತ್ಪನ್ನಗಳು",
        contact: "ಸಂಪರ್ಕ",
        login: "ಲಾಗಿನ್",
        register: "ನೋಂದಣಿ",
        profile: "ಪ್ರೊಫೈಲ್",
        logout: "ಲಾಗ್ ಔಟ್",
        crop_rotation: "ಕ್ರಾಪ್‌ಶಿಫ್ಟ್‌ಎಕ್ಸ್",
        agrirevive: "ಅಗ್ರಿರಿವೈವ್",
        agrirevive_title: "ಅಗ್ರಿರಿವೈವ್",
        agrirevive_desc: "ಕೃಷಿ ತ್ಯಾಜ್ಯವನ್ನು ಸ್ವಚ್ಛ ಶಕ್ತಿಯಾಗಿ ಪರಿವರ್ತಿಸುವ ನವೀನ ಜೈವಿಕ ಇಂಧನ ಉತ್ಪಾದನಾ ವ್ಯವಸ್ಥೆ, ಇದು ಇಂಗಾಲದ ಹೊರಸೂಸುವಿಕೆಯನ್ನು ಕಡಿಮೆ ಮಾಡುತ್ತದೆ ಮತ್ತು ಪರ್ಯಾಯ ಇಂಧನ ಪರಿಹಾರಗಳನ್ನು ಒದಗಿಸುತ್ತದೆ.",
        smart_farm: "ಸ್ಮಾರ್ಟ್ ಫಾರ್ಮ್",
        quick_links: "ತ್ವರಿತ ಲಿಂಕ್‌ಗಳು",
        contact_us: "ಸಂಪರ್ಕಿಸಿ",
        email_contact: "ಇಮೇಲ್: info@biobloom.com",
        phone_contact: "ಫೋನ್: +91 1234567890"
    }
};

// Function to update page content with translations
function updateContent(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

// Initialize translations
document.addEventListener('DOMContentLoaded', function() {
    const languageDropdown = document.getElementById('languageDropdown');
    if (languageDropdown) {
        const savedLang = localStorage.getItem('language') || 'en';
        languageDropdown.value = savedLang;
        updateContent(savedLang);

        languageDropdown.addEventListener('change', function() {
            const selectedLang = this.value;
            localStorage.setItem('language', selectedLang);
            updateContent(selectedLang);
        });
    }
}); 
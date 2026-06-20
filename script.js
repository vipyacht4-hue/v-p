// =================================================================================
// ========================== AYARLAR VE DİL VERİLERİ ============================
// =================================================================================

// --- DEĞİŞTİRİLECEK BÖLÜM ---
// Telefon numaranızı uluslararası formatta girin (örn: 905321234567)
const yourPhoneNumber = '905444474475'; 
const cookieConsentName = 'infinityYachtCookieConsent';

// DİL METİNLERİ VERİTABANI
const translations = {
    // TÜRKÇE
    tr: {
        site_title: "Alanya VIP Yacht - Infinity Yacht | Gemi Turu Şirketi",
        site_description: "Alanya'nın Mavi Bayrak ödüllü lüks yatı Infinity ile unutulmaz sabah, gün batımı ve özel turları deneyimleyin.",
        nav_home: "Ana Sayfa",
        nav_tours: "Turlarımız",
        nav_yacht: "Yatımız",
        nav_contact: "İletişim",
        hero_title: "ALANYA VIP YACHT",
        hero_slogan: "HER YAZ YENİ BİR HİKAYE",
        hero_button: "Turları Keşfet",
        tours_section_title: "Turlarımız",
        see_details: "Detayları Gör",
        morning_tour_title: "Sabah Turu",
        sunset_tour_title: "Gün Batımı Turu",
        daily_tour_title: "Günlük Tur",
        charter_tour_title: "Özel Kiralama",
        yacht_section_title: "Infinity Yacht",
        yacht_subtitle: "Alanya'nın Lüks Yat Deneyimi",
        yacht_description: "Infinity, lüks tasarımı, geniş güvertesi ve modern donanımı ile size konfor ve güvenliği bir arada sunar. VIP hizmet anlayışıyla tasarlanan yatımız, özel anlarınızı unutulmaz kılmak için her detayı düşünülerek hazırlanmıştır.",
        feature_capacity: "Kişi Kapasite",
        feature_award: "Lüks Donanım",
        feature_award_desc: "Modern Yat",
        feature_speed: "Deneyimli Kaptan",
        contact_title: "Bize Ulaşın",
        contact_text: "Hayalinizdeki turu planlamak için bizimle iletişime geçin.",
        footer_copyright: "© 2025 Alanya VIP Yacht. Tüm hakları saklıdır.",
        cookie_text: "Size daha iyi hizmet sunabilmek için sitemizde çerezler kullanıyoruz.",
        cookie_button: "Kabul Et",
        tour_details_title: "Tur Detayları",
        tour_description_title: "Tur Açıklaması",
        tour_includes_title: "Tura Dahil Olanlar",
        booking_title: "Rezervasyon ve Bilgi",
        booking_text: "Bu eşsiz deneyimi yaşamak ve yerinizi ayırtmak için bize hemen ulaşın!",
        booking_whatsapp_btn: "WhatsApp'tan Ulaş",
        booking_phone_btn: "Telefonla Ara",
        tour_not_found_title: "Tur Bulunamadı",
        tour_not_found_text: "Aradığınız tur mevcut değil veya bir hata oluştu. Lütfen ana sayfaya dönüp tekrar deneyin.",
        back_to_home_btn: "Ana Sayfaya Dön"
    },
    // İNGİLİZCE
    en: {
        site_title: "Alanya VIP Yacht - Infinity Yacht | Boat Tour Company",
        site_description: "Experience unforgettable morning, sunset, and private tours with Infinity, Alanya's Blue Flag award-winning luxury yacht.",
        nav_home: "Home",
        nav_tours: "Our Tours",
        nav_yacht: "Our Yacht",
        nav_contact: "Contact",
        hero_title: "ALANYA VIP YACHT",
        hero_slogan: "EVERY SUMMER IS A NEW STORY",
        hero_button: "Explore Tours",
        tours_section_title: "Our Tours",
        see_details: "See Details",
        morning_tour_title: "Morning Tour",
        sunset_tour_title: "Sunset Tour",
        daily_tour_title: "Daily Tour",
        charter_tour_title: "Private Charter",
        yacht_section_title: "The Infinity Yacht",
        yacht_subtitle: "Alanya's Luxury Yacht Experience",
        yacht_description: "Infinity offers you comfort and safety with its luxurious design, spacious deck, and modern equipment. Designed with a VIP service approach, our yacht is prepared with every detail in mind to make your special moments unforgettable.",
        feature_capacity: "Guest Capacity",
        feature_award: "Luxury Equipment",
        feature_award_desc: "Modern Yacht",
        feature_speed: "Experienced Captain",
        contact_title: "Contact Us",
        contact_text: "Contact us to plan your dream tour.",
        footer_copyright: "© 2025 Alanya VIP Yacht. All rights reserved.",
        cookie_text: "We use cookies on our site to provide you with a better service.",
        cookie_button: "Accept",
        tour_details_title: "Tour Details",
        tour_description_title: "Tour Description",
        tour_includes_title: "What's Included",
        booking_title: "Booking & Information",
        booking_text: "Contact us now to live this unique experience and book your spot!",
        booking_whatsapp_btn: "Contact via WhatsApp",
        booking_phone_btn: "Call Us",
        tour_not_found_title: "Tour Not Found",
        tour_not_found_text: "The tour you are looking for is not available or an error has occurred. Please return to the homepage and try again.",
        back_to_home_btn: "Back to Homepage"
    },
    // RUSÇA
    ru: {
        site_title: "Аланья VIP Яхта - Infinity Yacht | Морские Прогулки",
        site_description: "Испытайте незабываемые утренние, закатные и частные туры на Infinity, роскошной яхте Аланьи, удостоенной награды Голубой флаг.",
        nav_home: "Главная",
        nav_tours: "Наши Туры",
        nav_yacht: "Наша Яхта",
        nav_contact: "Контакты",
        hero_title: "АЛАНЬЯ VIP ЯХТА",
        hero_slogan: "КАЖДОЕ ЛЕТО - ЭТО НОВАЯ ИСТОРИЯ",
        hero_button: "Наши Туры",
        tours_section_title: "Наши Туры",
        see_details: "Подробнее",
        morning_tour_title: "Утренний Тур",
        sunset_tour_title: "Тур на Закате",
        daily_tour_title: "Дневной Тур",
        charter_tour_title: "Частная Аренда",
        yacht_section_title: "Яхта Infinity",
        yacht_subtitle: "Роскошный Яхтенный Опыт Аланьи",
        yacht_description: "Infinity предлагает вам комфорт и безопасность благодаря своему роскошному дизайну, просторной палубе и современному оборудованию. Наша яхта, спроектированная с подходом VIP-обслуживания, продумана до мелочей, чтобы сделать ваши особые моменты незабываемыми.",
        feature_capacity: "Вместимость",
        feature_award: "Роскошное Оборудование",
        feature_award_desc: "Современная Яхта",
        feature_speed: "Опытный Капитан",
        contact_title: "Свяжитесь с Нами",
        contact_text: "Свяжитесь с нами, чтобы спланировать тур вашей мечты.",
        footer_copyright: "© 2025 Аланья VIP Яхта. Все права защищены.",
        cookie_text: "Мы используем файлы cookie на нашем сайте, чтобы предоставлять вам лучший сервис.",
        cookie_button: "Принять",
        tour_details_title: "Детали Тура",
        tour_description_title: "Описание Тура",
        tour_includes_title: "Что Включено",
        booking_title: "Бронирование и Информация",
        booking_text: "Свяжитесь с нами сейчас, чтобы пережить этот уникальный опыт и забронировать свое место!",
        booking_whatsapp_btn: "Связаться по WhatsApp",
        booking_phone_btn: "Позвонить",
        tour_not_found_title: "Тур не найден",
        tour_not_found_text: "Запрашиваемый тур недоступен или произошла ошибка. Пожалуйста, вернитесь на главную страницу и попробуйте снова.",
        back_to_home_btn: "На Главную"
    }
};

// TUR DETAYLARI VERİTABANI (DİL DESTEKLİ)
const tourDetails = {
    'sabah': {
        images: ['GÖRSELLER/G6.jpg', 'GÖRSELLER/G12.jpg', 'GÖRSELLER/G7.jpg'], // Bu tura ait galeri resimleri
        tr: {
            title: 'Sabah Turu',
            description: 'Alanya\'nın berrak ve sakin sabah sularında güne harika bir başlangıç yapın. Tarihi Alanya Kalesi manzarası eşliğinde serinleyin ve enerji toplayın. Sabahın ilk ışıklarıyla birlikte denizin maviliğinde yüzme molası verin ve güneşin doğuşunu izleyin. Profesyonel ekibimizle birlikte lüks yatımızda konfor ve huzuru bir arada yaşayın.',
            includes: ['4 Saatlik Sabah Turu', 'Kahvaltı Tabağı', 'Taze Meyve ve Atıştırmalıklar', 'Sınırsız İçecek (Alkolsüz)', 'Yüzme ve Şnorkel Ekipmanları', 'Profesyonel Kaptan ve Mürettebat', 'Güneş Doğuşu Manzarası', 'Güvenlik Ekipmanları']
        },
        en: {
            title: 'Morning Tour',
            description: 'Start your day wonderfully in the clear and calm morning waters of Alanya. Cool off and gather energy with the view of the historic Alanya Castle. Take a swimming break in the blue of the sea with the first lights of the morning and watch the sunrise. Experience comfort and peace together on our luxury yacht with our professional crew.',
            includes: ['4-Hour Morning Tour', 'Breakfast Platter', 'Fresh Fruits and Snacks', 'Unlimited Drinks (Non-Alcoholic)', 'Swimming and Snorkeling Equipment', 'Professional Captain and Crew', 'Sunrise View', 'Safety Equipment']
        },
        ru: {
            title: 'Утренний Тур',
            description: 'Начните свой день прекрасно в чистых и спокойных утренних водах Аланьи. Освежитесь и наберитесь энергии с видом на историческую крепость Аланьи. Сделайте перерыв для плавания в синеве моря с первыми лучами утра и наблюдайте за восходом солнца. Испытайте комфорт и покой вместе на нашей роскошной яхте с нашей профессиональной командой.',
            includes: ['4-часовой утренний тур', 'Тарелка для завтрака', 'Свежие фрукты и закуски', 'Безлимитные напитки (безалкогольные)', 'Оборудование для плавания и снорклинга', 'Профессиональный капитан и команда', 'Вид на восход солнца', 'Оборудование безопасности']
        }
    },
    'gunbatimi': {
        images: ['GÖRSELLER/G11.jpg', 'GÖRSELLER/G13.jpeg', 'GÖRSELLER/G8.jpg'], // Bu tura ait galeri resimleri
        tr: {
            title: 'Gün Batımı Turu',
            description: 'Akdeniz\'in en romantik anlarına denizin ortasından tanıklık edin. Güneşin kızıla boyadığı gökyüzü altında unutulmaz fotoğraflar çekin ve anın tadını çıkarın. Romantik bir akşam yemeği eşliğinde güneşin batışını izleyin ve sevdiklerinizle birlikte özel anlar yaşayın. Profesyonel ekibimizle birlikte lüks yatımızda romantik bir deneyim yaşayın.',
            includes: ['4 Saatlik Akşam Turu', 'Romantik Akşam Yemeği', 'Özel İçecek Seçimi', 'Canlı Müzik (İsteğe Bağlı)', 'Gün Batımı Fotoğraf Çekimi', 'Özel Rota ve Duraklar', 'Lüks İç Mekan', 'Güvenlik ve Sigorta']
        },
        en: {
            title: 'Sunset Tour',
            description: 'Witness the most romantic moments of the Mediterranean from the middle of the sea. Take unforgettable photos under the sky painted red by the sun and enjoy the moment. Watch the sunset with a romantic dinner and experience special moments with your loved ones. Have a romantic experience on our luxury yacht with our professional crew.',
            includes: ['4-Hour Evening Tour', 'Romantic Dinner', 'Special Drink Selection', 'Live Music (Optional)', 'Sunset Photo Shoot', 'Special Route and Stops', 'Luxury Interior', 'Safety and Insurance']
        },
        ru: {
            title: 'Тур на Закате',
            description: 'Станьте свидетелем самых романтических моментов Средиземноморья с середины моря. Делайте незабываемые фотографии под небом, окрашенным в красный цвет солнцем, и наслаждайтесь моментом. Наблюдайте за закатом с романтическим ужином и переживайте особые моменты с вашими близкими. Испытайте романтическое приключение на нашей роскошной яхте с нашей профессиональной командой.',
            includes: ['4-часовой вечерний тур', 'Романтический ужин', 'Особый выбор напитков', 'Живая музыка (по желанию)', 'Фотосессия на закате', 'Особый маршрут и остановки', 'Роскошный интерьер', 'Безопасность и страховка']
        }
    },
    // --- YENİ TURLARI BU FORMATTA AŞAĞIYA EKLEYEBİLİRSİNİZ ---
    'gunluk': {
        images: ['GÖRSELLER/G5.jpg', 'GÖRSELLER/G9.jpg', 'GÖRSELLER/G2.jpg'],
        tr: { 
            title: 'Günlük Tur', 
            description: 'Alanya\'nın en güzel koylarını keşfedin ve Akdeniz\'in maviliğinde unutulmaz bir gün geçirin. Profesyonel ekibimizle birlikte lüks yatımızda konfor ve eğlenceyi bir arada yaşayın. Tarihi Alanya Kalesi manzarası eşliğinde yüzme molası verin ve güneşin tadını çıkarın.', 
            includes: ['8 Saatlik Tam Gün Turu', 'Öğle Yemeği (Barbekü)', 'Meyve Tabağı ve Atıştırmalıklar', 'Sınırsız İçecek (Alkolsüz)', 'Yüzme ve Şnorkel Ekipmanları', 'Profesyonel Kaptan ve Mürettebat', 'Müzik Sistemi', 'Güvenlik Ekipmanları'] 
        },
        en: { 
            title: 'Daily Tour', 
            description: 'Discover the most beautiful bays of Alanya and spend an unforgettable day in the blue of the Mediterranean. Experience comfort and entertainment together on our luxury yacht with our professional crew. Take a swimming break with the view of the historic Alanya Castle and enjoy the sun.', 
            includes: ['8-Hour Full Day Tour', 'Lunch (BBQ)', 'Fruit Platter and Snacks', 'Unlimited Drinks (Non-Alcoholic)', 'Swimming and Snorkeling Equipment', 'Professional Captain and Crew', 'Music System', 'Safety Equipment'] 
        },
        ru: { 
            title: 'Дневной Тур', 
            description: 'Откройте для себя самые красивые бухты Аланьи и проведите незабываемый день в синеве Средиземного моря. Испытайте комфорт и развлечения вместе на нашей роскошной яхте с нашей профессиональной командой. Сделайте перерыв для плавания с видом на историческую крепость Аланьи и насладитесь солнцем.', 
            includes: ['8-часовой полный день тура', 'Обед (барбекю)', 'Фруктовая тарелка и закуски', 'Безлимитные напитки (безалкогольные)', 'Оборудование для плавания и снорклинга', 'Профессиональный капитан и команда', 'Музыкальная система', 'Оборудование безопасности'] 
        }
    },
    'kiralama': {
        images: ['GÖRSELLER/G3.jpg', 'GÖRSELLER/G4.jpg', 'GÖRSELLER/G10.jpg'],
        tr: { 
            title: 'Özel Kiralama', 
            description: 'Özel anlarınız için Infinity yatını tamamen size özel kiralayın. Doğum günü, evlilik teklifi, şirket etkinliği veya romantik bir kaçamak için mükemmel çözüm. Rota, süre ve hizmetler tamamen size özel olarak planlanır. VIP hizmet anlayışımızla unutulmaz anlar yaşatın.', 
            includes: ['Özel Rota Planlaması', 'Kişiye Özel Menü', 'Sınırsız İçecek (Alkollü/Alkolsüz)', 'Profesyonel Fotoğrafçı (İsteğe Bağlı)', 'Özel Dekorasyon', 'Müzik ve Eğlence Sistemi', 'Lüks İç Mekan', 'Güvenlik ve Sigorta'] 
        },
        en: { 
            title: 'Private Charter', 
            description: 'Rent the Infinity yacht exclusively for your special moments. Perfect solution for birthday, marriage proposal, corporate event, or romantic getaway. Route, duration, and services are completely customized for you. Create unforgettable moments with our VIP service approach.', 
            includes: ['Custom Route Planning', 'Personalized Menu', 'Unlimited Drinks (Alcoholic/Non-Alcoholic)', 'Professional Photographer (Optional)', 'Special Decoration', 'Music and Entertainment System', 'Luxury Interior', 'Safety and Insurance'] 
        },
        ru: { 
            title: 'Частная Аренда', 
            description: 'Арендуйте яхту Infinity исключительно для ваших особых моментов. Идеальное решение для дня рождения, предложения руки и сердца, корпоративного мероприятия или романтического побега. Маршрут, продолжительность и услуги полностью адаптированы для вас. Создавайте незабываемые моменты с нашим подходом VIP-обслуживания.', 
            includes: ['Планирование индивидуального маршрута', 'Персонализированное меню', 'Безлимитные напитки (алкогольные/безалкогольные)', 'Профессиональный фотограф (по желанию)', 'Особая декорация', 'Музыкальная и развлекательная система', 'Роскошный интерьер', 'Безопасность и страховка'] 
        }
    }
};


// =================================================================================
// ============================= SİTE ÇALIŞMA KODLARI ==============================
// =================================================================================

document.addEventListener('DOMContentLoaded', () => {
    
    // DİL FONKSİYONLARI
    const languageSwitcher = document.querySelector('.language-switcher');
    let currentLang = localStorage.getItem('language') || 'tr';

    const translatePage = () => {
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            el.innerHTML = translations[currentLang][key] || el.innerHTML;
        });
        document.documentElement.lang = currentLang;
        
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
        });

        const whatsappFooter = document.querySelector('.whatsapp-footer-link');
        const phoneFooter = document.querySelector('.phone-footer-link');
        if(whatsappFooter) whatsappFooter.href = `https://wa.me/${yourPhoneNumber}`;
        if(phoneFooter) phoneFooter.href = `tel:+${yourPhoneNumber}`;
    };
    
    if (languageSwitcher) {
        languageSwitcher.addEventListener('click', (e) => {
            e.preventDefault();
            const langBtn = e.target.closest('.lang-btn');
            if (langBtn && langBtn.dataset.lang !== currentLang) {
                currentLang = langBtn.dataset.lang;
                localStorage.setItem('language', currentLang);
                if (document.querySelector('.tour-detail-page')) {
                    location.reload();
                } else {
                    translatePage();
                }
            }
        });
    }

    // GENEL FONKSİYONLAR (PRELOADER, MENU, SCROLL vb.)
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', () => preloader.classList.add('hidden'));
    }

    // Görsel performans optimizasyonu
    const heroImage = document.getElementById('hero-image');
    if (heroImage) {
        // Görsel yüklendiğinde smooth geçiş
        heroImage.addEventListener('load', () => {
            heroImage.style.opacity = '1';
        });
        // Eğer görsel önbellekten hemen yüklendiyse
        if (heroImage.complete) {
            heroImage.style.opacity = '1';
        }
    }

    const menu = document.querySelector('#menu-bars');
    const navbar = document.querySelector('.navbar');
    if(menu) {
        menu.onclick = () => {
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        };
    }
    
    const header = document.querySelector('#header');
    const backToTopButton = document.querySelector('#back-to-top');
    window.onscroll = () => {
        if(menu) {
            menu.classList.remove('fa-times');
            navbar.classList.remove('active');
        }
        const isScrolled = window.scrollY > 60;
        if(header) header.style.boxShadow = isScrolled ? '0 .5rem 1rem rgba(0,0,0,.1)' : 'none';
        if(backToTopButton) backToTopButton.classList.toggle('visible', isScrolled);
    };

    // ANİMASYON FONKSİYONLARI
    const observers = [];
    const createObserver = (callback, options) => {
        const observer = new IntersectionObserver(callback, options);
        observers.push(observer);
        return observer;
    };

    const scrollElements = document.querySelectorAll(".animate-on-scroll");
    if(scrollElements.length > 0) {
        const scrollObserver = createObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('visible');
            });
        }, { threshold: 0.1 });
        scrollElements.forEach(el => scrollObserver.observe(el));
    }
    
    const counterSection = document.querySelector('.features-counter');
    if(counterSection) {
        const counterObserver = createObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    document.querySelectorAll('.counter').forEach(counter => {
                        counter.innerText = '0';
                        const updateCount = () => {
                            const target = +counter.getAttribute('data-count');
                            const count = +counter.innerText;
                            const increment = Math.max(1, target / 100);
                            if (count < target) {
                                counter.innerText = `${Math.ceil(count + increment)}`;
                                setTimeout(updateCount, 20);
                            } else {
                                counter.innerText = target;
                            }
                        };
                        updateCount();
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.8 });
        counterObserver.observe(counterSection);
    }
    
    // ÇEREZ BANNER FONKSİYONU
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesBtn = document.getElementById('accept-cookies');
    if (cookieBanner && acceptCookiesBtn) {
        setTimeout(() => {
            if (!localStorage.getItem(cookieConsentName)) {
                cookieBanner.classList.add('visible');
            }
        }, 2000);
        acceptCookiesBtn.addEventListener('click', () => {
            localStorage.setItem(cookieConsentName, 'true');
            cookieBanner.classList.remove('visible');
        });
    }

    // TUR DETAY SAYFASI MANTIĞI
    if (document.querySelector('.tour-detail-page')) {
        const params = new URLSearchParams(window.location.search);
        const tourKey = params.get('tur') || 'sabah';
        const tour = tourDetails[tourKey];

        if (tour) {
            const tourLangData = tour[currentLang];
            
            document.title = `${tourLangData.title} | ${translations[currentLang].site_title.split('|')[0]}`;
            document.getElementById('tour-title').textContent = tourLangData.title;
            document.getElementById('tour-description').textContent = tourLangData.description;
            
            const includesList = document.getElementById('tour-includes');
            includesList.innerHTML = '';
            tourLangData.includes.forEach(item => {
                const li = document.createElement('li');
                li.innerHTML = `<i class="fas fa-check-circle"></i> ${item}`;
                includesList.appendChild(li);
            });

            const mainImage = document.getElementById('main-tour-image');
            const thumbnailsContainer = document.getElementById('gallery-thumbnails');
            mainImage.src = tour.images[0];
            thumbnailsContainer.innerHTML = '';
            tour.images.forEach((imgSrc, index) => {
                const img = document.createElement('img');
                img.src = imgSrc;
                img.alt = `${tourLangData.title} gallery image ${index + 1}`;
                if (index === 0) img.classList.add('active');
                img.addEventListener('click', () => {
                    mainImage.src = imgSrc;
                    const currentActive = thumbnailsContainer.querySelector('.active');
                    if(currentActive) currentActive.classList.remove('active');
                    img.classList.add('active');
                });
                thumbnailsContainer.appendChild(img);
            });

            const whatsappMessage = `${translations[currentLang].booking_whatsapp_btn.split(' ')[0]}, '${tourLangData.title}' ${translations[currentLang].tour_details_title.toLowerCase()} hakkında bilgi almak istiyorum.`;
            document.getElementById('whatsapp-link').href = `https://wa.me/${yourPhoneNumber}?text=${encodeURIComponent(whatsappMessage)}`;
            document.getElementById('phone-link').href = `tel:+${yourPhoneNumber}`;

        } else {
             // Tur bulunamazsa...
            document.getElementById('tour-title').textContent = translations[currentLang].tour_not_found_title;
            const detailContainer = document.querySelector('.detail-container');
            if (detailContainer) {
                detailContainer.innerHTML = `<p style="font-size: 1.6rem;">${translations[currentLang].tour_not_found_text}</p><a href="index.html" class="btn">${translations[currentLang].back_to_home_btn}</a>`;
            }
        }
    }

    // SAYFAYI İLK YÜKLEMEDE TERCÜME ET
    translatePage();
});
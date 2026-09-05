// =================================================================================
// ========================== AYARLAR VE DİL VERİLERİ ============================
// =================================================================================

const yourPhoneNumber = '905558082727'; 
const russianPhoneNumber = '79500384356';
const cookieConsentName = 'infinityYachtCookieConsent';

// Güvenli Depolama Yardımcısı (file:/// ve iframe uyumluluğu için)
const safeStorage = {
    getItem: function(key) {
        try {
            return window.localStorage ? window.localStorage.getItem(key) : null;
        } catch(e) {
            return null;
        }
    },
    setItem: function(key, val) {
        try {
            if (window.localStorage) window.localStorage.setItem(key, val);
        } catch(e) {}
    }
};

// DİL METİNLERİ VERİTABANI
const translations = {
    // TÜRKÇE
    tr: {
        site_title: "ALANYA VİP YACHTS - Infinity | Lüks Yat Kiralama & Turlar",
        site_description: "Alanya'nın eşsiz mavi sularında lüks yat kiralama, özel gün batımı, sabah ve günlük turları deneyimleyin.",
        loader_tagline: "ALANYA LUXURY CHARTER",
        nav_home: "ANASAYFA",
        nav_yacht: "YATLARIMIZ",
        nav_services: "HİZMETLERİMİZ",
        nav_tours: "TURLAR",
        nav_about: "HAKKIMIZDA",
        nav_blog: "BLOG",
        nav_contact: "İLETİŞİM",
        header_cta: "REZERVASYON YAP",
        hero_tagline: "ALANYA'DA MAVİNİN EN ÖZEL HALİ",
        hero_title_part1: "Alanya’da Lüks ve Özgürlüğün",
        hero_title_part2: "Tadını Çıkarın",
        hero_desc: "Akdeniz’in eşsiz maviliğinde, konforlu ve özel yatlarımızla unutulmaz anlar yaşayın.",
        hero_btn_book: "HEMEN REZERVASYON YAP",
        hero_btn_explore: "TURLARI KEŞFEDİN",
        trust_team_title: "Profesyonel Ekip",
        trust_team_desc: "Deneyimli & güler yüzlü",
        trust_safe_title: "Güvenli & Sigortalı",
        trust_safe_desc: "Tam güvence",
        trust_support_title: "7/24 Destek",
        trust_support_desc: "Her zaman yanınızdayız",
        bar_location_label: "NEREDEN",
        bar_location_val: "Alanya Limanı",
        bar_date_label: "TARİH",
        bar_guests_label: "KİŞİ SAYISI",
        bar_type_label: "YAT / TUR TİPİ",
        bar_type_all: "Tümü",
        bar_search_btn: "YAT ARA",
        why_tag: "NEDEN BİZ?",
        why_title: "Alanya’nın En İyi Yat Kiralama Deneyimi",
        why_desc: "Misafirlerimize konfor, güvenlik ve özel hizmet anlayışıyla eşsiz bir deniz deneyimi sunuyoruz.",
        why_btn: "HAKKIMIZDA",
        why_card1_title: "LÜKS YATLAR",
        why_card1_desc: "Bakımlı, modern ve konforlu yatlarımız ile hayalinizdeki deneyimi yaşayın.",
        why_card2_title: "PROFESYONEL EKİP",
        why_card2_desc: "Deneyimli ve güler yüzlü ekibimiz ile her anınızda yanınızdayız.",
        why_card3_title: "ÖZEL TUR ROTALARI",
        why_card3_desc: "Kişiye özel tur seçenekleri ile Alanya'nın saklı cennetlerini keşfedin.",
        why_card4_title: "GÜVENLİ VE KONFORLU",
        why_card4_desc: "Güvenliğiniz ve konforunuz bizim için her şeyden önce gelir.",
        tours_tag: "TURLARIMIZ",
        tours_title: "Eşsiz Rotalar, Unutulmaz Anlar",
        tours_desc: "Alanya'nın birbirinden özel koylarını keşfetmek için hazırladığımız tur seçeneklerimizi inceleyin.",
        tours_all_btn: "TÜM TURLARI GÖR",
        tours_section_title: "Turlarımız",
        tour1_name: "Kleopatra Koyu",
        tour1_duration: "Yarım Günlük Tur",
        tour2_name: "Ulaş Koyu",
        tour2_duration: "Yarım Günlük Tur",
        tour3_name: "Fosforlu Mağara",
        tour3_duration: "Gün Batımı Turu",
        tour4_name: "Dimçayı & Koylar",
        tour4_duration: "Tam Günlük VİP Tur",
        qb_tag: "HIZLI REZERVASYON",
        qb_title: "Hayalinizdeki Yat Deneyimini Planlayın",
        qb_desc: "Tarih seçin, size en uygun yatı birlikte belirleyelim.",
        qb_date_label: "TARİH SEÇİN",
        qb_guests_label: "KİŞİ SAYISI",
        qb_guests_placeholder: "Kaç Kişisiniz?",
        qb_btn: "YATINI SEÇ",
        yacht_tag: "PREMİUM FİLO",
        yacht_section_title: "Infinity Luxury Yacht",
        yacht_subtitle: "Alanya'nın Mavi Bayrak Ödüllü Gururu",
        yacht_description: "Infinity, lüks tasarımı, geniş güneşlenme güvertesi ve modern donanımı ile size konfor ve güvenliği bir arada sunar. VİP hizmet anlayışıyla tasarlanan yatımız, özel anlarınızı unutulmaz kılmak için her detayı düşünülerek hazırlanmıştır.",
        feature_capacity: "Kişi Kapasite",
        feature_award: "Lüks Donanım",
        feature_speed: "Profesyonel Ekip",
        memories_tag: "ANILAR",
        memories_title: "Misafirlerimizin Gözünden",
        memories_desc: "Bizi Instagram’da takip edin!",
        footer_brand_desc: "Alanya'nın masmavi koylarında unutulmaz anlar yaşamanız için premium yat kiralama ve özel tur hizmetleri sunuyoruz.",
        footer_quick_links: "Hızlı Bağlantılar",
        contact_title: "İletişim",
        footer_copyright: "© 2026 ALANYA VİP YACHTS (Infinity). Tüm hakları saklıdır.",
        cookie_text: "Size daha iyi ve güvenli bir deneyim sunabilmek için sitemizde çerezler kullanıyoruz.",
        cookie_button: "Kabul Et",
        wa_tooltip: "Hemen Mesaj Gönderin",
        see_details: "Detayları Gör",
        morning_tour_title: "Sabah Turu",
        sunset_tour_title: "Gün Batımı Turu",
        daily_tour_title: "Günlük Tur",
        charter_tour_title: "Özel Kiralama",
        tour_details_title: "Tur Detayları",
        tour_description_title: "Tur Açıklaması",
        tour_includes_title: "Tura Dahil Olanlar",
        booking_title: "Rezervasyon ve Bilgi",
        booking_text: "Bu eşsiz deneyimi yaşamak ve yerinizi ayırtmak için bize hemen ulaşın!",
        booking_whatsapp_btn: "WhatsApp'tan Ulaş",
        booking_phone_btn: "Telefonla Ara",
        tour_not_found_title: "Tur Bulunamadı",
        tour_not_found_text: "Aradığınız tur mevcut değil veya bir hata oluştu. Lütfen ana sayfaya dönüp tekrar deneyin.",
        back_to_home_btn: "Ana Sayfaya Dön",
        nav_blog: "Blog",
        blog_page_title: "INFINITY VİP YACHTS Blog",
        blog_page_desc: "Tatiliniz için en iyi öneriler ve yat rehberi",
        read_more: "Devamını Oku",
        back_to_blog: "Tüm Yazılara Dön",
        filter_all: "Tüm Seçenekler",
        filter_sunset: "Gün Batımı Turu",
        filter_morning: "Sabah Turu",
        filter_day: "Günlük Tur",
        filter_birthday: "Doğum Günü & Kutlama",
        filter_vip: "VİP Özel Kiralama",
        popular_yachts_tag: "ALANYA VİP YACHTS",
        popular_yachts_title: "Alanya'da En Popüler Özel Yat Kiralama & Lüks Deneyimler",
        card1_badge_title: "ALANYA KOYLARI & MAĞARALARI KEŞFİ...",
        card2_badge_title: "ALANYA GÜNLÜK ÖZEL YAT KİRALAMA DENEYİMİ...",
        card3_badge_title: "ALANYA LÜKS GÜN BATIMI & YÜZME TURU...",
        card4_badge_title: "ALANYA EXCLUSIVE VİP yat KİRALAMA & ETKİNLİK...",
        pill_transfer_inc: "Transfer Dahil",
        pill_food_inc: "Yemek Menüsü Dahil",
        pill_drinks_inc: "Alkolsüz İçecekler",
        pill_alcohol_allowed: "İçecek Getirebilirsiniz",
        pill_bbq_inc: "Barbekü Öğle Yemeği",
        pill_dinner_inc: "Akşam Yemeği Dahil",
        pill_music_inc: "Müzik Sistemi",
        pill_vito_inc: "VİP Vito Transfer",
        pill_gourmet_inc: "Gurme Menü Dahil",
        pill_custom_route: "Özel Rota",
        pill_insurance_inc: "Tam VİP Hizmet",
        spec_start_from: "Fiyat",
        spec_capacity: "Kapasite",
        spec_hour: "Süre",
        btn_chat_wa: "WhatsApp'tan Yaz",
        btn_details_view: "Detayları Gör",
        specials_tag: "FOCUS YACHT",
        specials_title_part1: "Lüks",
        specials_title_part2: "Yatlar & Deneyimler",
        specials_desc: "Alanya tatilinizi kusursuz kılacak özel transfer, doğum günü ve heyecan dolu su sporları deneyimleri.",
        service1_title: "Otelden Yata Özel VİP Transfer",
        badge_hotel_transfer: "Otel Transferi",
        badge_free_cancel: "Ücretsiz İptal",
        badge_fast_booking: "Hızlı Rezervasyon",
        service1_btn: "Otelden Yata VİP Transfer",
        service2_title: "Yatta Doğum Günü & Kutlama",
        badge_cake_decor: "Pasta & Süsleme",
        service2_btn: "Yatta Doğum Günü",
        service3_title: "Alanya Su Sporları & Adrenalin",
        badge_watersport: "Parasail & JetSki",
        badge_safety_pro: "Güvenli & Sigortalı",
        service3_btn: "Alanya Su Sporları",
        inc_tag: "ŞEFFAF HİZMET",
        inc_section_title: "Turlarımıza Neler Dahil?",
        inc_food_label: "YEMEK",
        inc_food_status: "Dahil (4+ Saat)",
        inc_food_hint: "3 saat ve altı yemeksizdir",
        inc_drinks_label: "ALKOLSÜZ İÇECEKLER",
        inc_drinks_status: "Dahil",
        inc_drinks_hint: "Sınırsız soğuk & sıcak",
        inc_alcohol_label: "ALKOLLÜ İÇECEKLER",
        inc_alcohol_status: "Hariç",
        inc_alcohol_hint: "Menüye dahil değildir",
        inc_bring_label: "ALKOL GETİRMEK",
        inc_bring_status: "İzin Verilir",
        inc_bring_hint: "Ücretsiz servis edilir",
        inc_decor_label: "DEKORASYON",
        inc_decor_status: "Hariç / Opsiyonel",
        inc_decor_hint: "Özel kutlama süslemesi",
        inc_transfer_label: "TRANSFER",
        inc_transfer_status: "Hariç / Ekstra",
        inc_transfer_hint: "VİP Vito otel transferi",
        calc_title: "FİYATINI HESAPLA",
        calc_tagline: "Şeffaf & Anlık Fiyatlandırma",
        calc_guests_label: "Kişi Sayısı (Maks. 12)",
        calc_duration_label: "Tur Süresi",
        calc_transfer_label: "Otel Transferi",
        calc_transfer_no: "Transfer İstemiyorum",
        calc_transfer_yes: "VİP Mercedes Vito Transfer İstiyorum (Ekstra)",
        calc_total_label: "Tahmini Toplam Tutar:",
        calc_note_default: "6 kişiye kadar temel fiyattır. 4 saat ve üzeri turlara lezzetli standart yemek menüsü dahildir.",
        calc_book_btn: "Bu Fiyatla Rezervasyon Yap",
        pill_transfer_extra: "Transfer Ekstra",
        pill_4h_food_inc: "4+ Saatte Yemek Dahil",
        card1_badge_title: "ALANYA KOYLARI & MAĞARALARI KEŞFİ (SABAH TURU)...",
        card2_badge_title: "ALANYA GÜNLÜK ÖZEL YAT KİRALAMA DENEYİMİ...",
        card3_badge_title: "ALANYA LÜKS GÜN BATIMI & YÜZME TURU...",
        card4_badge_title: "ALANYA EXCLUSIVE ÖZEL VİP YAT KİRALAMA...",
    },
    // İNGİLİZCE
    en: {
        site_title: "INFINITY VİP YACHTS - Alanya | Lüks Yat Kiralama & Turlar",
        site_description: "Experience luxury yacht rental, sunset cruises, morning and daily private tours in the crystal waters of Alanya.",
        loader_tagline: "ALANYA LUXURY CHARTER",
        nav_home: "HOME",
        nav_yacht: "OUR YACHT",
        nav_services: "SERVICES",
        nav_tours: "TOURS",
        nav_about: "ABOUT US",
        nav_blog: "BLOG",
        nav_contact: "CONTACT",
        header_cta: "BOOK NOW",
        hero_tagline: "THE MOST EXCLUSIVE BLUE IN ALANYA",
        hero_title_part1: "Experience Luxury & Freedom",
        hero_title_part2: "In Alanya",
        hero_desc: "Live unforgettable moments in the unique blue of the Mediterranean with our comfortable and private yachts.",
        hero_btn_book: "BOOK NOW",
        hero_btn_explore: "EXPLORE TOURS",
        trust_team_title: "Professional Crew",
        trust_team_desc: "Experienced & friendly",
        trust_safe_title: "Safe & Insured",
        trust_safe_desc: "Full guarantee",
        trust_support_title: "24/7 Support",
        trust_support_desc: "Always by your side",
        bar_location_label: "FROM",
        bar_location_val: "Alanya Harbor",
        bar_date_label: "DATE",
        bar_guests_label: "GUESTS",
        bar_type_label: "YACHT / TOUR",
        bar_type_all: "All",
        bar_search_btn: "SEARCH YACHT",
        why_tag: "WHY CHOOSE US?",
        why_title: "The Best Yacht Charter Experience in Alanya",
        why_desc: "We offer an exclusive maritime experience with a focus on comfort, safety, and personalized VİP service.",
        why_btn: "ABOUT US",
        why_card1_title: "LUXURY YACHTS",
        why_card1_desc: "Live your dream voyage aboard our impeccably maintained, modern and comfortable yachts.",
        why_card2_title: "PROFESSIONAL CREW",
        why_card2_desc: "Our friendly and experienced crew is at your service throughout your journey.",
        why_card3_title: "CUSTOM ROUTES",
        why_card3_desc: "Discover hidden gems and secluded bays of Alanya tailored to your preferences.",
        why_card4_title: "SAFE & COMFORTABLE",
        why_card4_desc: "Your safety and utmost comfort are our highest priorities on every cruise.",
        tours_tag: "OUR TOURS",
        tours_title: "Unique Routes, Unforgettable Moments",
        tours_desc: "Explore our curated tour options designed to showcase the most stunning bays of Alanya.",
        tours_all_btn: "VIEW ALL TOURS",
        tours_section_title: "Our Tours",
        tour1_name: "Cleopatra Bay",
        tour1_duration: "Half Day Tour",
        tour2_name: "Ulas Bay",
        tour2_duration: "Half Day Tour",
        tour3_name: "Phosphorus Cave",
        tour3_duration: "Sunset Tour",
        tour4_name: "Dim River & Bays",
        tour4_duration: "Full Day VİP Tour",
        qb_tag: "QUICK BOOKING",
        qb_title: "Plan Your Dream Yacht Experience",
        qb_desc: "Choose a date and let's select the ideal yacht cruise together.",
        qb_date_label: "SELECT DATE",
        qb_guests_label: "GUEST COUNT",
        qb_guests_placeholder: "How many guests?",
        qb_btn: "SELECT YACHT",
        yacht_tag: "PREMIUM FLEET",
        yacht_section_title: "Infinity Luxury Yacht",
        yacht_subtitle: "Alanya's Blue Flag Awarded Pride",
        yacht_description: "Infinity combines luxury aesthetics, spacious sun deck, and cutting-edge amenities for pure comfort and peace of mind on the open sea.",
        feature_capacity: "Guest Capacity",
        feature_award: "VİP Equipment",
        feature_speed: "Professional Crew",
        memories_tag: "MEMORIES",
        memories_title: "Through Our Guests' Eyes",
        memories_desc: "Follow our journeys on Instagram!",
        footer_brand_desc: "We provide premium yacht charter and bespoke cruise experiences across the stunning turquoise waters of Alanya.",
        footer_quick_links: "Quick Links",
        contact_title: "Contact Us",
        footer_copyright: "© 2026 ALANYA VİP YACHTS (Infinity). All rights reserved.",
        cookie_text: "We use cookies to enhance your browsing experience and ensure maximum security.",
        cookie_button: "Accept",
        wa_tooltip: "Chat with us on WhatsApp",
        see_details: "See Details",
        morning_tour_title: "Morning Tour",
        sunset_tour_title: "Sunset Tour",
        daily_tour_title: "Daily Tour",
        charter_tour_title: "Private Charter",
        tour_details_title: "Tour Details",
        tour_description_title: "Tour Description",
        tour_includes_title: "What's Included",
        booking_title: "Booking & Inquiry",
        booking_text: "Get in touch now to book your spot and experience this extraordinary cruise!",
        booking_whatsapp_btn: "Contact via WhatsApp",
        booking_phone_btn: "Call Us",
        tour_not_found_title: "Tur Bulunamadı",
        tour_not_found_text: "The requested tour is not available. Please return to the homepage and try again.",
        back_to_home_btn: "Back to Home",
        nav_blog: "Blog",
        blog_page_title: "INFINITY VİP YACHTS Blog",
        blog_page_desc: "Insider tips and travel guide for your yacht holiday",
        read_more: "Read More",
        back_to_blog: "Back to All Posts",
        filter_all: "All Options",
        filter_sunset: "Sunset Rental",
        filter_morning: "Morning Rental",
        filter_day: "Day Rental",
        filter_birthday: "Happy Birthday",
        filter_vip: "VİP Charter",
        popular_yachts_tag: "ALANYA VİP YACHTS CHARTER",
        popular_yachts_title: "Private Yacht Rental in Alanya Most Popular Luxury Yacht Experience",
        card1_badge_title: "DISCOVER THE COAST OF ALANYA WITH MY DREAM...",
        card2_badge_title: "ALANYA DAILY PRIVATE YACHT RENTAL EXPERIENCE...",
        card3_badge_title: "ALANYA LUXURY YACHT TOUR ON INFINITY SWIM & SUNSET...",
        card4_badge_title: "ALANYA EXCLUSIVE PRIVATE VİP YACHT EXPERIENCE...",
        pill_transfer_inc: "Transfer Included",
        pill_food_inc: "Food Included",
        pill_drinks_inc: "Soft Drinks Included",
        pill_alcohol_allowed: "Bring Alcohol Allowed",
        pill_bbq_inc: "BBQ Lunch Included",
        pill_dinner_inc: "Dinner Included",
        pill_music_inc: "Sound System",
        pill_vito_inc: "VİP Vito Transfer",
        pill_gourmet_inc: "Gourmet Catering",
        pill_custom_route: "Custom Route",
        pill_insurance_inc: "Full VİP Service",
        spec_start_from: "Start from",
        spec_capacity: "Capacity",
        spec_hour: "Hour",
        btn_chat_wa: "Chat on WhatsApp",
        btn_details_view: "Details View",
        specials_tag: "FOCUS YACHT",
        specials_title_part1: "Luxury",
        specials_title_part2: "Yachts & Experiences",
        specials_desc: "Exclusive hotel transfer, yacht birthday party, and thrilling water sports in Alanya.",
        service1_title: "Private Transfer from Hotel to Yacht",
        badge_hotel_transfer: "Hotel Transfer",
        badge_free_cancel: "Free Cancel",
        badge_fast_booking: "Fast Booking",
        service1_btn: "Private Transfer from Hotel to Yacht",
        service2_title: "Birthday on a Yacht",
        badge_cake_decor: "Cake & Decor",
        service2_btn: "Birthday on a Yacht",
        service3_title: "Alanya Water Sport",
        badge_watersport: "Parasail & JetSki",
        badge_safety_pro: "Safety & Insured",
        service3_btn: "Alanya Water Sport",
        inc_tag: "TRANSPARENT SERVICE",
        inc_section_title: "What's Included in Our Tours?",
        inc_food_label: "FOOD / LUNCH",
        inc_food_status: "Included (4+ Hours)",
        inc_food_hint: "Under 3 hours is without food",
        inc_drinks_label: "SOFT DRINKS",
        inc_drinks_status: "Included",
        inc_drinks_hint: "Unlimited cold & hot drinks",
        inc_alcohol_label: "ALCOHOLIC DRINKS",
        inc_alcohol_status: "Excluded",
        inc_alcohol_hint: "Not included in price",
        inc_bring_label: "BRING ALCOHOL",
        inc_bring_status: "Allowed",
        inc_bring_hint: "Free onboard service",
        inc_decor_label: "DECORATION",
        inc_decor_status: "Excluded / Optional",
        inc_decor_hint: "Custom event setup",
        inc_transfer_label: "TRANSFER",
        inc_transfer_status: "Excluded / Extra",
        inc_transfer_hint: "VİP Vito transfer available",
        calc_title: "CALCULATE YOUR PRICE",
        calc_tagline: "Instant & Transparent Rates",
        calc_guests_label: "Number of Guests (Max. 12)",
        calc_duration_label: "Tour Duration",
        calc_transfer_label: "Hotel Transfer",
        calc_transfer_no: "No Transfer Needed",
        calc_transfer_yes: "I Want VİP Vito Hotel Transfer (Extra)",
        calc_total_label: "Estimated Total Price:",
        calc_note_default: "Base price covers up to 6 guests. Standard meal included on 4+ hour tours.",
        calc_book_btn: "Book with this Price on WhatsApp",
        pill_transfer_extra: "Transfer Extra",
        pill_4h_food_inc: "Food Included (4+ Hours)",
        card1_badge_title: "ALANYA BAYS & CAVES CRUISE (MORNING TOUR)...",
        card2_badge_title: "ALANYA DAILY PRIVATE YACHT RENTAL...",
        card3_badge_title: "ALANYA LUXURY SUNSET & SWIMMING CRUISE...",
        card4_badge_title: "ALANYA EXCLUSIVE PRIVATE VİP YACHT CHARTER...",
    },
    // RUSÇA
    ru: {
        site_title: "INFINITY VİP YACHTS - Alanya | Lüks Yat Kiralama & Turlar",
        site_description: "Аренда роскошных яхт в Аланье, индивидуальные утренние, закатные и дневные круизы по лазурным водам Средиземного моря.",
        loader_tagline: "ALANYA LUXURY CHARTER",
        nav_home: "ГЛАВНАЯ",
        nav_yacht: "НАША ЯХТА",
        nav_services: "УСЛУГИ",
        nav_tours: "ТУРЫ",
        nav_about: "О НАС",
        nav_blog: "БЛОГ",
        nav_contact: "КОНТАКТЫ",
        header_cta: "ЗАБРОНИРОВАТЬ",
        hero_tagline: "САМАЯ ЭКСКЛЮЗИВНАЯ СИНЕВА АЛАНЬИ",
        hero_title_part1: "Роскошь и Свобода",
        hero_title_part2: "В Аланье",
        hero_desc: "Насладитесь незабываемыми моментами в уникальной синеве Средиземного моря на наших комфортабельных яхтах.",
        hero_btn_book: "ЗАБРОНИРОВАТЬ",
        hero_btn_explore: "НАШИ ТУРЫ",
        trust_team_title: "Профессиональная команда",
        trust_team_desc: "Опытные и приветливые",
        trust_safe_title: "Безопасно и застраховано",
        trust_safe_desc: "Полная гарантия",
        trust_support_title: "Поддержка 24/7",
        trust_support_desc: "Всегда на связи",
        bar_location_label: "ОТКУДА",
        bar_location_val: "Порт Аланьи",
        bar_date_label: "ДАТА",
        bar_guests_label: "ГОСТИ",
        bar_type_label: "ТИП ТУРА",
        bar_type_all: "Все",
        bar_search_btn: "НАЙТИ ЯХТУ",
        why_tag: "ПОЧЕМУ МЫ?",
        why_title: "Лучший Опыт Аренды Яхт в Аланье",
        why_desc: "Мы предлагаем комфорт, безопасность и безупречный VİP-сервис для вашего идеального морского отдыха.",
        why_btn: "О НАС",
        why_card1_title: "ЛЮКСОВЫЕ ЯХТЫ",
        why_card1_desc: "Современные и комфортные яхты подарят вам отдых вашей мечты.",
        why_card2_title: "ПРОФЕССИОНАЛЫ",
        why_card2_desc: "Опытный экипаж позаботится о вашем комфорте в каждую минуту круиза.",
        why_card3_title: "УНИКАЛЬНЫЕ МАРШРУТЫ",
        why_card3_desc: "Откройте для себя скрытые бухты и живописные пещеры Аланьи.",
        why_card4_title: "БЕЗОПАСНОСТЬ",
        why_card4_desc: "Ваша безопасность и комфорт всегда превыше всего.",
        tours_tag: "НАШИ ТУРЫ",
        tours_title: "Уникальные Маршруты, Яркие Моменты",
        tours_desc: "Ознакомьтесь с нашими индивидуальными маршрутами по самым красивым бухтам Аланьи.",
        tours_all_btn: "ВСЕ ТУРЫ",
        tours_section_title: "Наши Туры",
        tour1_name: "Бухта Клеопатры",
        tour1_duration: "Тур на полдня",
        tour2_name: "Бухта Улаш",
        tour2_duration: "Тур на полдня",
        tour3_name: "Фосфорная Пещера",
        tour3_duration: "Тур на закате",
        tour4_name: "Димчай и Бухты",
        tour4_duration: "VİP Тур на весь день",
        qb_tag: "БЫСТРОЕ БРОНИРОВАНИЕ",
        qb_title: "Спланируйте Отдых Вашей Мечты",
        qb_desc: "Выберите дату, и мы подберем идеальную программу для вас.",
        qb_date_label: "ВЫБЕРИТЕ ДАТУ",
        qb_guests_label: "КОЛИЧЕСТВО ГОСТЕЙ",
        qb_guests_placeholder: "Сколько гостей?",
        qb_btn: "ВЫБРАТЬ ЯХТУ",
        yacht_tag: "ПРЕМИУМ ФЛОТ",
        yacht_section_title: "Infinity Luxury Yacht",
        yacht_subtitle: "Гордость Аланьи с Голубым Флагом",
        yacht_description: "Infinity предлагает элегантный интерьер, просторную палубу для загара и первоклассный сервис для вашего торжества или отдыха.",
        feature_capacity: "Вместимость",
        feature_award: "VİP Оснащение",
        feature_speed: "Опытная Команда",
        memories_tag: "ВОСПОМИНАНИЯ",
        memories_title: "Глазами Наших Гостей",
        memories_desc: "Следите за нами в Instagram!",
        footer_brand_desc: "Премиальная аренда яхт и организация морских туров в Аланье.",
        footer_quick_links: "Быстрые ссылки",
        contact_title: "Контакты",
        footer_copyright: "© 2026 Аланья VİP Яхта (Infinity). Все права защищены.",
        cookie_text: "Мы используем файлы cookie для обеспечения лучшего качества обслуживания.",
        cookie_button: "Принять",
        wa_tooltip: "Напишите нам в WhatsApp",
        see_details: "Подробнее",
        morning_tour_title: "Утренний Тур",
        sunset_tour_title: "Тур на Закате",
        daily_tour_title: "Дневной Тур",
        charter_tour_title: "Частная Аренда",
        tour_details_title: "Детали Тура",
        tour_description_title: "Описание Тура",
        tour_includes_title: "Что Включено",
        booking_title: "Бронирование и Информация",
        booking_text: "Свяжитесь с нами сейчас, чтобы забронировать место на яхте!",
        booking_whatsapp_btn: "Написать в WhatsApp",
        booking_phone_btn: "Позвонить",
        tour_not_found_title: "Tur Bulunamadı",
        tour_not_found_text: "Запрашиваемый тур не найден. Пожалуйста, вернитесь на главную.",
        back_to_home_btn: "На Главную",
        nav_blog: "Блог",
        blog_page_title: "Блог ALANYA VİP YACHTS",
        blog_page_desc: "Советы и путеводитель для вашего отдыха на яхте",
        read_more: "Читать далее",
        back_to_blog: "Все записи",
        filter_all: "Все Варианты",
        filter_sunset: "Закатный Круиз",
        filter_morning: "Утренний Круиз",
        filter_day: "Дневной Круиз",
        filter_birthday: "День Рождения",
        filter_vip: "VİP Чартер",
        popular_yachts_tag: "АРЕНДА VİP ЯХТ В АЛАНЬЕ",
        popular_yachts_title: "Аренда Яхты в Аланье — Самые Популярные Люкс Туры",
        card1_badge_title: "ОТКРОЙТЕ ПОБЕРЕЖЬЕ И ПЕЩЕРЫ АЛАНЬИ...",
        card2_badge_title: "ДНЕВНОЙ ПРИВАТНЫЙ КРУИЗ В АЛАНЬЕ...",
        card3_badge_title: "ЛЮКС КРУИЗ НА ЗАКАТЕ С КУПАНИЕМ...",
        card4_badge_title: "ЭКСКЛЮЗИВНАЯ VİP АРЕНДА И МЕРОПРИЯТИЯ...",
        pill_transfer_inc: "Трансфер Включен",
        pill_food_inc: "Обед/Ужин Включен",
        pill_drinks_inc: "Напитки Включены",
        pill_alcohol_allowed: "Алкоголь с Собой",
        pill_bbq_inc: "Барбекю на Борту",
        pill_dinner_inc: "Романтический Ужин",
        pill_music_inc: "Музыкальная Система",
        pill_vito_inc: "VİP Vito Трансфер",
        pill_gourmet_inc: "Гурме Меню",
        pill_custom_route: "Свой Маршрут",
        pill_insurance_inc: "Полный VİP Сервис",
        spec_start_from: "Цена от",
        spec_capacity: "Вместимость",
        spec_hour: "Время",
        btn_chat_wa: "Написать в WhatsApp",
        btn_details_view: "Подробнее",
        specials_tag: "FOCUS YACHT",
        specials_title_part1: "Люкс",
        specials_title_part2: "Яхты и Впечатления",
        specials_desc: "VİP трансфер от отеля, праздник на яхте и яркие водные развлечения в Аланье.",
        service1_title: "VİP Трансфер из Отеля на Яхту",
        badge_hotel_transfer: "Трансфер из Отеля",
        badge_free_cancel: "Бесплатная Отмена",
        badge_fast_booking: "Быстрая Бронь",
        service1_btn: "VİP Трансфер из Отеля",
        service2_title: "День Рождения на Яхте",
        badge_cake_decor: "Торт и Декор",
        service2_btn: "День Рождения на Яхте",
        service3_title: "Водные Виды Спорта в Аланье",
        badge_watersport: "Парасейлинг и Джетски",
        badge_safety_pro: "Безопасно и Надежно",
        service3_btn: "Водные Виды Спорта",
        inc_tag: "ПРОЗРАЧНЫЙ СЕРВИС",
        inc_section_title: "Что включено в наши туры?",
        inc_food_label: "ПИТАНИЕ",
        inc_food_status: "Включено (от 4 часов)",
        inc_food_hint: "Туры до 3 часов без питания",
        inc_drinks_label: "БЕЗАЛКОГОЛЬНЫЕ НАПИТКИ",
        inc_drinks_status: "Включено",
        inc_drinks_hint: "Без ограничений",
        inc_alcohol_label: "АЛКОГОЛЬНЫЕ НАПИТКИ",
        inc_alcohol_status: "Не включено",
        inc_alcohol_hint: "Оплачивается отдельно",
        inc_bring_label: "СВОЙ АЛКОГОЛЬ",
        inc_bring_status: "Разрешено",
        inc_bring_hint: "Бесплатная подача",
        inc_decor_label: "ДЕКОРАЦИЯ",
        inc_decor_status: "Опционально",
        inc_decor_hint: "Праздничное оформление",
        inc_transfer_label: "ТРАНСФЕР",
        inc_transfer_status: "Экстра",
        inc_transfer_hint: "VİP Mercedes Vito трансфер",
        calc_title: "РАССЧИТАТЬ СТОИМОСТЬ",
        calc_tagline: "Мгновенный и прозрачный расчет",
        calc_guests_label: "Количество гостей (макс. 12)",
        calc_duration_label: "Продолжительность тура",
        calc_transfer_label: "Трансфер из отеля",
        calc_transfer_no: "Без трансфера",
        calc_transfer_yes: "VİP Mercedes Vito трансфер (Экстра)",
        calc_total_label: "Итоговая ориентировочная стоимость:",
        calc_note_default: "Базовая цена до 6 человек. Стандартное меню включено на турах от 4 часов.",
        calc_book_btn: "Забронировать по этой цене в WhatsApp",
        pill_transfer_extra: "Трансфер экстра",
        pill_4h_food_inc: "Обед включен (от 4ч)",
        card1_badge_title: "ОТКРОЙТЕ БУХТЫ АЛАНЬИ (УТРЕННИЙ ТУР)...",
        card2_badge_title: "ДНЕВНАЯ АРЕНДА ЯХТЫ В АЛАНЬЕ...",
        card3_badge_title: "РОМАНТИЧЕСКИЙ ЗАКАТ И КУПАНИЕ...",
        card4_badge_title: "ЭКСКЛЮЗИВНАЯ VİP АРЕНДА ЯХТЫ В АЛАНЬЕ...",
    },
    // ALMANCA
    de: {
        site_title: "INFINITY VİP YACHTS - Alanya | Lüks Yat Kiralama & Turlar",
        site_description: "Erleben Sie Luxus-Yachtcharter, Sonnenuntergangsfahrten, Morgen- und Ganztagstouren in Alanya.",
        loader_tagline: "ALANYA LUXURY CHARTER",
        nav_home: "STARTSEITE",
        nav_yacht: "UNSERE YACHT",
        nav_services: "SERVICES",
        nav_tours: "TOUREN",
        nav_about: "ÜBER UNS",
        nav_blog: "BLOG",
        nav_contact: "KONTAKT",
        header_cta: "JETZT BUCHEN",
        hero_tagline: "DAS EXKLUSIVSTE BLAU IN ALANYA",
        hero_title_part1: "Luxus und Freiheit",
        hero_title_part2: "In Alanya Genießen",
        hero_desc: "Erleben Sie unvergessliche Momente im Mittelmeer mit unseren komfortablen und privaten VİP-Yachten.",
        hero_btn_book: "JETZT BUCHEN",
        hero_btn_explore: "TOUREN ENTDECKEN",
        trust_team_title: "Professionelle Crew",
        trust_team_desc: "Erfahren & freundlich",
        trust_safe_title: "Sicher & Versichert",
        trust_safe_desc: "Volle Garantie",
        trust_support_title: "24/7 Betreuung",
        trust_support_desc: "Immer für Sie da",
        bar_location_label: "ABFAHRT",
        bar_location_val: "Hafen Alanya",
        bar_date_label: "DATUM",
        bar_guests_label: "PERSONEN",
        bar_type_label: "YACHT / TOUR",
        bar_type_all: "Alle",
        bar_search_btn: "YACHT SUCHEN",
        why_tag: "WARUM WIR?",
        why_title: "Das beste Yachterlebnis in Alanya",
        why_desc: "Wir bieten erstklassigen Komfort, höchste Sicherheit und individuellen VİP-Service.",
        why_btn: "ÜBER UNS",
        why_card1_title: "LUXUSYACHTEN",
        why_card1_desc: "Moderne und komfortable Yachten für Ihr Traum-Erlebnis auf See.",
        why_card2_title: "ERFAHRENE CREW",
        why_card2_desc: "Unser freundliches Team begleitet Sie während der gesamten Fahrt.",
        why_card3_title: "EXKLUSIVE ROUTEN",
        why_card3_desc: "Entdecken Sie versteckte Buchten und Höhlen in Alanya.",
        why_card4_title: "SICHER & KOMFORTABEL",
        why_card4_desc: "Ihre Sicherheit und Ihr Wohlbefinden stehen an erster Stelle.",
        tours_tag: "UNSERE TOUREN",
        tours_title: "Einzigartige Routen, Unvergessliche Momente",
        tours_desc: "Entdecken Sie unsere sorgfältig zusammengestellten Bootstouren in Alanya.",
        tours_all_btn: "ALLE TOUREN",
        tours_section_title: "Unsere Touren",
        tour1_name: "Kleopatra Bucht",
        tour1_duration: "Halbtagstour",
        tour2_name: "Ulas Bucht",
        tour2_duration: "Halbtagstour",
        tour3_name: "Phosphor-Höhle",
        tour3_duration: "Sonnenuntergangstour",
        tour4_name: "Dim-Fluss & Buchten",
        tour4_duration: "Ganztags VİP Tour",
        qb_tag: "SCHNELLE BUCHUNG",
        qb_title: "Planen Sie Ihre Traum-Yachttour",
        qb_desc: "Wählen Sie ein Datum und buchen Sie Ihre exklusive Tour.",
        qb_date_label: "DATUM WÄHLEN",
        qb_guests_label: "PERSONENANZAHL",
        qb_guests_placeholder: "Wie viele Gäste?",
        qb_btn: "YACHT WÄHLEN",
        yacht_tag: "PREMIUM FLOTTE",
        yacht_section_title: "Infinity Luxury Yacht",
        yacht_subtitle: "Alanyas Stolz mit Blauer Flagge",
        yacht_description: "Infinity bietet modernes Design, geräumige Sonnendecks und erstklassige Ausstattung.",
        feature_capacity: "Kapazität",
        feature_award: "VİP Ausstattung",
        feature_speed: "Erfahrene Crew",
        memories_tag: "ERINNERUNGEN",
        memories_title: "Aus der Sicht unserer Gäste",
        memories_desc: "Folgen Sie uns auf Instagram!",
        footer_brand_desc: "Premium Yachtcharter und maßgeschneiderte Bootstouren in Alanya.",
        footer_quick_links: "Schnelllinks",
        contact_title: "Kontakt",
        footer_copyright: "© 2026 ALANYA VİP YACHTS (Infinity). Alle Rechte vorbehalten.",
        cookie_text: "Wir verwenden Cookies für die bestmögliche Website-Erfahrung.",
        cookie_button: "Akzeptieren",
        wa_tooltip: "WhatsApp Chat starten",
        see_details: "Details Ansehen",
        morning_tour_title: "Morgentour",
        sunset_tour_title: "Sonnenuntergangstour",
        daily_tour_title: "Tagestour",
        charter_tour_title: "Private Charter",
        tour_details_title: "Tour Details",
        tour_description_title: "Tour Beschreibung",
        tour_includes_title: "Was ist inbegriffen",
        booking_title: "Buchung & Info",
        booking_text: "Kontaktieren Sie uns jetzt für Ihre Reservierung!",
        booking_whatsapp_btn: "Über WhatsApp kontaktieren",
        booking_phone_btn: "Anrufen",
        tour_not_found_title: "Tur Bulunamadı",
        tour_not_found_text: "Tour nicht verfügbar. Bitte kehren Sie zur Startseite zurück.",
        back_to_home_btn: "Zur Startseite",
        nav_blog: "Blog",
        blog_page_title: "INFINITY VİP YACHTS Blog",
        blog_page_desc: "Tipps und Reiseführer für Ihren Urlaub",
        read_more: "Weiterlesen",
        back_to_blog: "Alle Beiträge",
        filter_all: "Alle Optionen",
        filter_sunset: "Sonnenuntergang",
        filter_morning: "Morgentour",
        filter_day: "Tagestour",
        filter_birthday: "Geburtstag",
        filter_vip: "VİP Charter",
        popular_yachts_tag: "ALANYA VİP YACHTSCHARTER",
        popular_yachts_title: "Private Yachtmiete in Alanya – Beliebteste Luxus-Erlebnisse",
        card1_badge_title: "KÜSTE UND HÖHLEN VON ALANYA ENTDECKEN...",
        card2_badge_title: "TAGES-YACHTERLEBNIS IN ALANYA...",
        card3_badge_title: "LUXUS-SONNENUNTERGANGSTOUR MIT SCHWIMMEN...",
        card4_badge_title: "EXKLUSIVER VİP-CHARTER & EVENTS...",
        pill_transfer_inc: "Transfer Inklusive",
        pill_food_inc: "Essen Inklusive",
        pill_drinks_inc: "Softdrinks Inklusive",
        pill_alcohol_allowed: "Eigene Getränke Erlaubt",
        pill_bbq_inc: "BBQ Mittagessen",
        pill_dinner_inc: "Abendessen Inklusive",
        pill_music_inc: "Soundsystem",
        pill_vito_inc: "VİP Vito Transfer",
        pill_gourmet_inc: "Gourmet Menü",
        pill_custom_route: "Individuelle Route",
        pill_insurance_inc: "Kompletter VİP Service",
        spec_start_from: "Ab",
        spec_capacity: "Kapazität",
        spec_hour: "Dauer",
        btn_chat_wa: "Auf WhatsApp schreiben",
        btn_details_view: "Details Ansehen",
        specials_tag: "FOCUS YACHT",
        specials_title_part1: "Luxus",
        specials_title_part2: "Yachten & Erlebnisse",
        specials_desc: "VİP-Hoteltransfer, Geburtstagsparty auf der Yacht und Wassersportaktivitäten in Alanya.",
        service1_title: "Privater Hoteltransfer zur Yacht",
        badge_hotel_transfer: "Hoteltransfer",
        badge_free_cancel: "Kostenlose Stornierung",
        badge_fast_booking: "Schnelle Buchung",
        service1_btn: "Hoteltransfer zur Yacht",
        service2_title: "Geburtstag auf einer Yacht",
        badge_cake_decor: "Kuchen & Deko",
        service2_btn: "Geburtstag auf der Yacht",
        service3_title: "Alanya Wassersport & Spaß",
        badge_watersport: "Parasailing & Jetski",
        badge_safety_pro: "Sicher & Versichert",
        service3_btn: "Alanya Wassersport",
        inc_tag: "TRANSPARENTER SERVICE",
        inc_section_title: "Was ist in unseren Touren enthalten?",
        inc_food_label: "VERPFLEGUNG",
        inc_food_status: "Inklusive (ab 4 Std.)",
        inc_food_hint: "Bis 3 Stunden ohne Essen",
        inc_drinks_label: "ALKOHOLFREIE GETRÄNKE",
        inc_drinks_status: "Inklusive",
        inc_drinks_hint: "Unbegrenzt kalt & warm",
        inc_alcohol_label: "ALKOHOLISCHE GETRÄNKE",
        inc_alcohol_status: "Exklusive",
        inc_alcohol_hint: "Nicht im Preis enthalten",
        inc_bring_label: "EIGENER ALKOHOL",
        inc_bring_status: "Erlaubt",
        inc_bring_hint: "Kostenloser Bordservice",
        inc_decor_label: "DEKORATION",
        inc_decor_status: "Exklusive / Optional",
        inc_decor_hint: "Für Feiern und Geburtstage",
        inc_transfer_label: "TRANSFER",
        inc_transfer_status: "Exklusive / Extra",
        inc_transfer_hint: "VİP Vito Hoteltransfer",
        calc_title: "PREIS BERECHNEN",
        calc_tagline: "Transparente Sofortberechnung",
        calc_guests_label: "Personenanzahl (Max. 12)",
        calc_duration_label: "Tourdauer",
        calc_transfer_label: "Hoteltransfer",
        calc_transfer_no: "Kein Transfer gewünscht",
        calc_transfer_yes: "VİP Mercedes Vito Transfer gewünscht (Extra)",
        calc_total_label: "Geschätzter Gesamtpreis:",
        calc_note_default: "Grundpreis gilt bis 6 Personen. Ab 4 Stunden ist das Standardmenü inklusive.",
        calc_book_btn: "Mit diesem Preis via WhatsApp anfragen",
        pill_transfer_extra: "Transfer Extra",
        pill_4h_food_inc: "Essen inklusive (ab 4 Std.)",
        card1_badge_title: "ALANYA BUCHTEN & HÖHLEN (MORGEN-TOUR)...",
        card2_badge_title: "ALANYA TAGES-CHARTER ERLEBNIS...",
        card3_badge_title: "ALANYA LUXUS SONNENUNTERGANG & SCHWIMMEN...",
        card4_badge_title: "ALANYA EXKLUSIVER PRIVATER VİP YACHTCHARTER...",
    },
    // POLONYACA
    pl: {
        site_title: "INFINITY VİP YACHTS - Alanya | Lüks Yat Kiralama & Turlar",
        site_description: "Luksusowy czarter jachtów, rejsy o zachodzie słońca i prywatne wycieczki w Alanyi.",
        loader_tagline: "ALANYA LUXURY CHARTER",
        nav_home: "STRONA GŁÓWNA",
        nav_yacht: "NASZ JACHT",
        nav_services: "USŁUGI",
        nav_tours: "WYCIECZKI",
        nav_about: "O NAS",
        nav_blog: "BLOG",
        nav_contact: "KONTAKT",
        header_cta: "ZAREZERWUJ",
        hero_tagline: "NAJBARDZIEJ EKSKLUZYWNY BŁĘKIT ALANYI",
        hero_title_part1: "Luksus i Wolność",
        hero_title_part2: "W Alanyi",
        hero_desc: "Przeżyj niezapomniane chwile na turkusowych wodach Morza Śródziemnego naszymi luksusowymi jachtami.",
        hero_btn_book: "ZAREZERWUJ TERAZ",
        hero_btn_explore: "ODKRYJ WYCIECZKI",
        trust_team_title: "Profesjonalna Załoga",
        trust_team_desc: "Doświadczona i pomocna",
        trust_safe_title: "Bezpieczeństwo i Ubezpieczenie",
        trust_safe_desc: "Pełna gwarancja",
        trust_support_title: "Wsparcie 24/7",
        trust_support_desc: "Zawsze do usług",
        bar_location_label: "MIEJSCE",
        bar_location_val: "Port w Alanyi",
        bar_date_label: "DATA",
        bar_guests_label: "GOŚCIE",
        bar_type_label: "TYP REJSU",
        bar_type_all: "Wszystkie",
        bar_search_btn: "SZUKAJ JACHTU",
        why_tag: "DLACZEGO MY?",
        why_title: "Najlepsze Doświadczenie Czarteru Jachtów",
        why_desc: "Oferujemy komfort, bezpieczeństwo i ekskluzywną obsługę VİP.",
        why_btn: "O NAS",
        why_card1_title: "LUKSUSOWE JACHTY",
        why_card1_desc: "Nowoczesne i komfortowe jachty na Twój wymarzony rejs.",
        why_card2_title: "DOŚWIADCZONA ZAŁOGA",
        why_card2_desc: "Przyjazny personel zadba o każdy szczegół.",
        why_card3_title: "INDYWIDUALNE TRASY",
        why_card3_desc: "Odkrywaj urokliwe zatoki i jaskinie Alanyi.",
        why_card4_title: "BEZPIECZEŃSTWO",
        why_card4_desc: "Twój komfort i spokój są dla nas najważniejsze.",
        tours_tag: "NASZE WYCIECZKI",
        tours_title: "Unikalne Trasy, Niezapomniane Chwile",
        tours_desc: "Sprawdź nasze wyselekcjonowane trasy wycieczek po Alanyi.",
        tours_all_btn: "WSZYSTKIE WYCIECZKI",
        tours_section_title: "Nasze Wycieczki",
        tour1_name: "Zatoka Kleopatry",
        tour1_duration: "Półdniowy Rejs",
        tour2_name: "Zatoka Ulas",
        tour2_duration: "Półdniowy Rejs",
        tour3_name: "Jaskinia Fosforowa",
        tour3_duration: "Rejs o Zachodzie Słońca",
        tour4_name: "Rzeka Dim i Zatoki",
        tour4_duration: "Całodniowy Rejs VİP",
        qb_tag: "SZYBKA REZERWACJA",
        qb_title: "Zaplanuj Swój Wymarzony Rejs",
        qb_desc: "Wybierz datę i zarezerwuj swój prywatny jacht.",
        qb_date_label: "WYBIERZ DATĘ",
        qb_guests_label: "LICZBA GOŚCI",
        qb_guests_placeholder: "Ilu gości?",
        qb_btn: "WYBIERZ JACHT",
        yacht_tag: "FLOTA PREMIUM",
        yacht_section_title: "Infinity Luxury Yacht",
        yacht_subtitle: "Duma Alanyi wyróżniona Błękitną Flagą",
        yacht_description: "Infinity łączy luksusowy design, przestronny pokład słoneczny i nowoczesne wyposażenie.",
        feature_capacity: "Pojemność",
        feature_award: "Wyposażenie VİP",
        feature_speed: "Doświadczony Kapitan",
        memories_tag: "WSPOMNIENIA",
        memories_title: "Okiem Naszych Gości",
        memories_desc: "Obserwuj nas na Instagramie!",
        footer_brand_desc: "Ekskluzywny wynajem jachtów i prywatne rejsy w Alanyi.",
        footer_quick_links: "Szybkie Linki",
        contact_title: "Kontakt",
        footer_copyright: "© 2026 ALANYA VİP YACHTS (Infinity). Wszelkie prawa zastrzeżone.",
        cookie_text: "Używamy plików cookies, aby zapewnić najlepszą jakość korzystania z serwisu.",
        cookie_button: "Akceptuję",
        wa_tooltip: "Napisz na WhatsApp",
        see_details: "Zobacz Szczegóły",
        morning_tour_title: "Poranny Rejs",
        sunset_tour_title: "Rejs o Zachodzie Słońca",
        daily_tour_title: "Rejs Całodniowy",
        charter_tour_title: "Prywatny Czarter",
        tour_details_title: "Szczegóły Wycieczki",
        tour_description_title: "Opis Wycieczki",
        tour_includes_title: "Co Zawiera Oferta",
        booking_title: "Rezerwacja i Kontakt",
        booking_text: "Skontaktuj się z nami, aby zarezerwować termin!",
        booking_whatsapp_btn: "Kontakt przez WhatsApp",
        booking_phone_btn: "Zadzwoń",
        tour_not_found_title: "Tur Bulunamadı",
        tour_not_found_text: "Ta wycieczka jest niedostępna.",
        back_to_home_btn: "Strona Główna",
        nav_blog: "Blog",
        blog_page_title: "Blog ALANYA VİP YACHTS",
        blog_page_desc: "Porady i przewodniki wakacyjne",
        read_more: "Czytaj Więcej",
        back_to_blog: "Wszystkie Wpisy",
        filter_all: "Wszystkie Opcje",
        filter_sunset: "Rejs o Zachodzie",
        filter_morning: "Rejs Poranny",
        filter_day: "Rejs Dzienny",
        filter_birthday: "Urodziny",
        filter_vip: "Czarter VİP",
        popular_yachts_tag: "CZARTER JACHTÓW ALANYA",
        popular_yachts_title: "Wynajem Jachtu w Alanyi – Najpopularniejsze Luksusowe Rejsy",
        card1_badge_title: "ODKRYJ WYBRZEŻE I JASKINIE ALANYI...",
        card2_badge_title: "DZIENNY PRYWATNY REJS JACHTEM...",
        card3_badge_title: "LUKSUSOWY REJS O ZACHODZIE ZE SŁOŃCEM...",
        card4_badge_title: "EKSKLUZYWNY CZARTER VİP I IMPREZY...",
        pill_transfer_inc: "Transfer w Cenie",
        pill_food_inc: "Posiłek w Cenie",
        pill_drinks_inc: "Napoje Bezalkoholowe",
        pill_alcohol_allowed: "Własny Alkohol Dozwolony",
        pill_bbq_inc: "Obiad z Grilla",
        pill_dinner_inc: "Romantyczna Kolacja",
        pill_music_inc: "Nagłośnienie",
        pill_vito_inc: "Transfer VİP Vito",
        pill_gourmet_inc: "Menu Gourmet",
        pill_custom_route: "Własna Trasa",
        pill_insurance_inc: "Pełny Serwis VİP",
        spec_start_from: "Cena od",
        spec_capacity: "Pojemność",
        spec_hour: "Czas",
        btn_chat_wa: "Napisz na WhatsApp",
        btn_details_view: "Zobacz Szczegóły",
        specials_tag: "FOCUS YACHT",
        specials_title_part1: "Luksusowe",
        specials_title_part2: "Jachty i Doświadczenia",
        specials_desc: "Transfer VİP z hotelu, urodziny na jachcie i sporty wodne w Alanyi.",
        service1_title: "Prywatny Transfer z Hotelu na Jacht",
        badge_hotel_transfer: "Transfer z Hotelu",
        badge_free_cancel: "Bezpłatne Odwołanie",
        badge_fast_booking: "Szybka Rezerwacja",
        service1_btn: "Prywatny Transfer VİP",
        service2_title: "Urodziny na Jachcie",
        badge_cake_decor: "Tort i Dekoracje",
        service2_btn: "Urodziny na Jachcie",
        service3_title: "Sporty Wodne w Alanyi",
        badge_watersport: "Parasailing i Skuter",
        badge_safety_pro: "Bezpiecznie i z Polisą",
        service3_btn: "Sporty Wodne",
        inc_tag: "PRZEJRZYSTY SERWIS",
        inc_section_title: "Co zawiera nasza oferta?",
        inc_food_label: "POSIŁEK",
        inc_food_status: "W cenie (od 4 godz.)",
        inc_food_hint: "Do 3 godz. bez posiłku",
        inc_drinks_label: "NAPOJE BEZALKOHOLOWE",
        inc_drinks_status: "W cenie",
        inc_drinks_hint: "Nielimitowane",
        inc_alcohol_label: "NAPOJE ALKOHOLOWE",
        inc_alcohol_status: "Brak w cenie",
        inc_alcohol_hint: "Płatne dodatkowo",
        inc_bring_label: "WŁASNY ALKOHOL",
        inc_bring_status: "Dozwolony",
        inc_bring_hint: "Bezpłatna obsługa",
        inc_decor_label: "DEKORACJA",
        inc_decor_status: "Opcjonalnie",
        inc_decor_hint: "Wystrój na imprezy",
        inc_transfer_label: "TRANSFER",
        inc_transfer_status: "Ekstra",
        inc_transfer_hint: "Transfer VİP Mercedes Vito",
        calc_title: "OBLICZ CENĘ",
        calc_tagline: "Natychmiastowa i przejrzysta wycena",
        calc_guests_label: "Liczba osób (Maks. 12)",
        calc_duration_label: "Czas trwania rejsu",
        calc_transfer_label: "Transfer z hotelu",
        calc_transfer_no: "Bez transferu",
        calc_transfer_yes: "Transfer VİP Mercedes Vito (Ekstra)",
        calc_total_label: "Szacowana cena całkowita:",
        calc_note_default: "Cena podstawowa do 6 osób. Posiłek standardowy w cenie od 4 godzin.",
        calc_book_btn: "Zarezerwuj w tej cenie na WhatsApp",
        pill_transfer_extra: "Transfer ekstra",
        pill_4h_food_inc: "Posiłek w cenie (od 4h)",
        card1_badge_title: "ZATOKI I JASKINIE W ALANYI (REJS PORANNY)...",
        card2_badge_title: "CAŁODNIOWY WYNAJEM JACHTU W ALANYI...",
        card3_badge_title: "ROMANTYCZNY ZACHÓD SŁOŃCA I KĄPIEL...",
        card4_badge_title: "EKSKLUZYWNY CZARTER VİP W ALANYI...",
    },
    // İSVEÇÇE
    sv: {
        site_title: "INFINITY VİP YACHTS - Alanya | Lüks Yat Kiralama & Turlar",
        site_description: "Upplev lyxig yachtcharter och privata båtturer i Alanyas turkosa vatten.",
        loader_tagline: "ALANYA LUXURY CHARTER",
        nav_home: "HEM",
        nav_yacht: "VÅR YACHT",
        nav_services: "TJÄNSTER",
        nav_tours: "TURER",
        nav_about: "OM OSS",
        nav_blog: "BLOGG",
        nav_contact: "KONTAKT",
        header_cta: "BOKA NU",
        hero_tagline: "DET MEST EXKLUSIVA BLÅA I ALANYA",
        hero_title_part1: "Njut av Lyx & Frihet",
        hero_title_part2: "I Alanya",
        hero_desc: "Skapa oförglömliga minnen i Medelhavets kristallklara vatten ombord på våra bekväma VİP-yachter.",
        hero_btn_book: "BOKA NU",
        hero_btn_explore: "UTFORSKA TURER",
        trust_team_title: "Professionell Besättning",
        trust_team_desc: "Erfaren & vänlig",
        trust_safe_title: "Säker & Försäkrad",
        trust_safe_desc: "Full garanti",
        trust_support_title: "24/7 Support",
        trust_support_desc: "Alltid vid din sida",
        bar_location_label: "FRÅN",
        bar_location_val: "Alanya Hamn",
        bar_date_label: "DATUM",
        bar_guests_label: "GÄSTER",
        bar_type_label: "TURTYP",
        bar_type_all: "Alla",
        bar_search_btn: "SÖK YACHT",
        why_tag: "VARFÖR VÄLJA OSS?",
        why_title: "Bästa Yachtupplevelsen i Alanya",
        why_desc: "Vi erbjuder komfort, säkerhet och personlig VİP-service av högsta klass.",
        why_btn: "OM OSS",
        why_card1_title: "LYXIGA YACHTER",
        why_card1_desc: "Moderna och bekväma båtar för din drömresa.",
        why_card2_title: "PROFFSIG BESÄTTNING",
        why_card2_desc: "Erfaren kapten och besättning står till din tjänst.",
        why_card3_title: "UNIKA RUTTER",
        why_card3_desc: "Upptäck Alanyas dolda vikar och grottor.",
        why_card4_title: "TRYGGT & BEKVÄMT",
        why_card4_desc: "Din säkerhet och komfort är vår högsta prioritet.",
        tours_tag: "VÅRA TURER",
        tours_title: "Unika Rutter, Oförglömliga Stunder",
        tours_desc: "Utforska våra populära båtturer runt Alanyas kust.",
        tours_all_btn: "ALLA TURER",
        tours_section_title: "Våra Turer",
        tour1_name: "Kleopatra Bukten",
        tour1_duration: "Halvdagstur",
        tour2_name: "Ulas Bukten",
        tour2_duration: "Halvdagstur",
        tour3_name: "Fosforgrottan",
        tour3_duration: "Solnedgångstur",
        tour4_name: "Dimfloden & Vikar",
        tour4_duration: "Heldags VİP Tur",
        qb_tag: "SNABBOKNING",
        qb_title: "Planera Din Drömyacht-Upplevelse",
        qb_desc: "Välj ett datum och boka din privata båt.",
        qb_date_label: "VÄLJ DATUM",
        qb_guests_label: "ANTAL GÄSTER",
        qb_guests_placeholder: "Hur många gäster?",
        qb_btn: "VÄLJ YACHT",
        yacht_tag: "PREMIUM FLOTTA",
        yacht_section_title: "Infinity Luxury Yacht",
        yacht_subtitle: "Alanyas stolthet med Blå Flagg",
        yacht_description: "Infinity kombinerar modern elegans med rymliga soldäck och förstklassig komfort.",
        feature_capacity: "Kapacitet",
        feature_award: "VİP Utrustning",
        feature_speed: "Erfaren Besättning",
        memories_tag: "MINNEN",
        memories_title: "Genom Våra Gästers Ögon",
        memories_desc: "Följ oss på Instagram!",
        footer_brand_desc: "Premium yachtuthyrning och skräddarsydda turer i Alanya.",
        footer_quick_links: "Snabblänkar",
        contact_title: "Kontakt",
        footer_copyright: "© 2026 ALANYA VİP YACHTS (Infinity). Alla rättigheter förbehållna.",
        cookie_text: "Vi använder cookies för att ge dig den bästa upplevelsen.",
        cookie_button: "Acceptera",
        wa_tooltip: "Chatta på WhatsApp",
        see_details: "Visa Detaljer",
        morning_tour_title: "Morgontur",
        sunset_tour_title: "Solnedgångstur",
        daily_tour_title: "Dagstur",
        charter_tour_title: "Privat Charter",
        tour_details_title: "Turdetaljer",
        tour_description_title: "Beskrivning",
        tour_includes_title: "Vad som ingår",
        booking_title: "Bokning & Information",
        booking_text: "Kontakta oss för att boka din plats!",
        booking_whatsapp_btn: "Kontakta via WhatsApp",
        booking_phone_btn: "Ring Oss",
        tour_not_found_title: "Tur Bulunamadı",
        tour_not_found_text: "Den efterfrågade turen är inte tillgänglig.",
        back_to_home_btn: "Tillbaka till Start",
        nav_blog: "Blogg",
        blog_page_title: "ALANYA VİP YACHTS Blogg",
        blog_page_desc: "Tips och reseguide",
        read_more: "Läs Mer",
        back_to_blog: "Alla Inlägg",
        filter_all: "Alla Alternativ",
        filter_sunset: "Solnedgångstur",
        filter_morning: "Morgontur",
        filter_day: "Dagstur",
        filter_birthday: "Födelsedag",
        filter_vip: "VİP Charter",
        popular_yachts_tag: "ALANYA VİP YACHTSCHARTER",
        popular_yachts_title: "Privat Yachtuthyrning i Alanya – Mest Populära Lyxupplevelser",
        card1_badge_title: "UPPTÄCK ALANYAS KUST OCH GROTTOR...",
        card2_badge_title: "DAGLIG PRIVAT YACHTUPPLEVELSE I ALANYA...",
        card3_badge_title: "LYXIG SOLNEDGÅNGSTUR MED BAD...",
        card4_badge_title: "EXKLUSIV VİP-CHARTER OCH EVENEMANG...",
        pill_transfer_inc: "Transfer Ingår",
        pill_food_inc: "Måltid Ingår",
        pill_drinks_inc: "Alkoholfria Drycker",
        pill_alcohol_allowed: "Egen Dryck Tillåten",
        pill_bbq_inc: "Grillunch Ombord",
        pill_dinner_inc: "Middag Ingår",
        pill_music_inc: "Ljudsystem",
        pill_vito_inc: "VİP Vito Transfer",
        pill_gourmet_inc: "Gourmetmeny",
        pill_custom_route: "Valfri Rutt",
        pill_insurance_inc: "Full VİP-service",
        spec_start_from: "Från",
        spec_capacity: "Kapacitet",
        spec_hour: "Tid",
        btn_chat_wa: "Chatta på WhatsApp",
        btn_details_view: "Visa Detaljer",
        specials_tag: "FOCUS YACHT",
        specials_title_part1: "Lyxiga",
        specials_title_part2: "Yachter & Upplevelser",
        specials_desc: "VİP-hotelltransfer, födelsedagskalas på yachten och spännande vattensporter i Alanya.",
        service1_title: "Privat Transfer från Hotell till Yacht",
        badge_hotel_transfer: "Hotelltransfer",
        badge_free_cancel: "Fri Avbokning",
        badge_fast_booking: "Snabb Bokning",
        service1_btn: "Hotelltransfer till Yacht",
        service2_title: "Födelsedag på Yacht",
        badge_cake_decor: "Tårta & Dekoration",
        service2_btn: "Födelsedag på Yacht",
        service3_title: "Vattensporter i Alanya",
        badge_watersport: "Parasailing & Jetski",
        badge_safety_pro: "Säker & Försäkrad",
        service3_btn: "Vattensporter",
        inc_tag: "TRANSPARENT SERVICE",
        inc_section_title: "Vad ingår i våra turer?",
        inc_food_label: "MAT / MÅLTID",
        inc_food_status: "Ingår (från 4 tim)",
        inc_food_hint: "Under 3 timmar utan mat",
        inc_drinks_label: "ALKOHOLFRIA DRYCKER",
        inc_drinks_status: "Ingår",
        inc_drinks_hint: "Obegränsat",
        inc_alcohol_label: "ALKOHOLHALTIGA DRYCKER",
        inc_alcohol_status: "Ingår ej",
        inc_alcohol_hint: "Betalas separat",
        inc_bring_label: "MEDTAG EGEN ALKOHOL",
        inc_bring_status: "Tillåtet",
        inc_bring_hint: "Gratis servering ombord",
        inc_decor_label: "DEKORATION",
        inc_decor_status: "Tillval",
        inc_decor_hint: "För fest & födelsedag",
        inc_transfer_label: "TRANSFER",
        inc_transfer_status: "Extra",
        inc_transfer_hint: "VİP Mercedes Vito transfer",
        calc_title: "BERÄKNA PRIS",
        calc_tagline: "Direkt och transparent pris",
        calc_guests_label: "Antal gäster (Max 12)",
        calc_duration_label: "Turens längd",
        calc_transfer_label: "Hotelltransfer",
        calc_transfer_no: "Ingen transfer önskas",
        calc_transfer_yes: "VİP Mercedes Vito transfer önskas (Extra)",
        calc_total_label: "Uppskattat totalpris:",
        calc_note_default: "Grundpris gäller upp till 6 personer. Standardmåltid ingår från 4 timmar.",
        calc_book_btn: "Boka till detta pris via WhatsApp",
        pill_transfer_extra: "Transfer extra",
        pill_4h_food_inc: "Mat ingår (från 4 tim)",
        card1_badge_title: "ALANYAS BUKTER OCH GROTTOR (MORGONTUR)...",
        card2_badge_title: "DAGLIG PRIVAT YACHTUTHYRNING...",
        card3_badge_title: "LYXIG SOLNEDGÅNG & BADTUR...",
        card4_badge_title: "EXKLUSIV PRIVAT VİP YACHTCHARTER...",
    },
    // NORVEÇÇE
    no: {
        site_title: "INFINITY VİP YACHTS - Alanya | Lüks Yat Kiralama & Turlar",
        site_description: "Opplev luksus yachtcharter og private båtturer i Alanyas turkise farvann.",
        loader_tagline: "ALANYA LUXURY CHARTER",
        nav_home: "HJEM",
        nav_yacht: "VÅR YACHT",
        nav_services: "TJENESTER",
        nav_tours: "TURER",
        nav_about: "OM OSS",
        nav_blog: "BLOGG",
        nav_contact: "KONTAKT",
        header_cta: "BESTILL NÅ",
        hero_tagline: "DET MEST EKSKLUSIVE BLÅ I ALANYA",
        hero_title_part1: "Nyt Luksus & Frihet",
        hero_title_part2: "I Alanya",
        hero_desc: "Skap uforglemmelige minner i Middelhavets krystallklare vann ombord på våre private VİP-yachter.",
        hero_btn_book: "BESTILL NÅ",
        hero_btn_explore: "UTFORSK TURER",
        trust_team_title: "Profesjonelt Mannskap",
        trust_team_desc: "Erfaren & vennlig",
        trust_safe_title: "Sikker & Forsikret",
        trust_safe_desc: "Full garanti",
        trust_support_title: "24/7 Kundestøtte",
        trust_support_desc: "Alltid tilgjengelig",
        bar_location_label: "FRA",
        bar_location_val: "Alanya Havn",
        bar_date_label: "DATO",
        bar_guests_label: "GJESTER",
        bar_type_label: "TURTYPE",
        bar_type_all: "Alle",
        bar_search_btn: "SØK YACHT",
        why_tag: "HVORFOR VELGE OSS?",
        why_title: "Den Beste Yachtopplevelsen i Alanya",
        why_desc: "Vi tilbyr komfort, trygghet og skreddersydd VİP-service.",
        why_btn: "OM OSS",
        why_card1_title: "LUKSUS YACHTER",
        why_card1_desc: "Moderne og komfortable båter for drømmeturen din.",
        why_card2_title: "DYKTIG MANNSKAP",
        why_card2_desc: "Erfaren kaptein og mannskap er til din disposisjon.",
        why_card3_title: "EKSKLUSIVE RUTER",
        why_card3_desc: "Oppdag Alanyas bortgjemte bukter og grotter.",
        why_card4_title: "TRYGT & KOMFORTABELT",
        why_card4_desc: "Din sikkerhet og komfort er vår førsteprioritet.",
        tours_tag: "VÅRE TURER",
        tours_title: "Unike Ruter, Uforglemmelige Øyeblikk",
        tours_desc: "Utforsk våre utvalgte båtturer langs Alanyas vakre kystlinje.",
        tours_all_btn: "SE ALLE TURER",
        tours_section_title: "Våre Turer",
        tour1_name: "Kleopatra Bukten",
        tour1_duration: "Halvdagstur",
        tour2_name: "Ulas Bukten",
        tour2_duration: "Halvdagstur",
        tour3_name: "Fosforgrotten",
        tour3_duration: "Solnedgangstur",
        tour4_name: "Dim-elven & Bukter",
        tour4_duration: "Heldags VİP Tur",
        qb_tag: "HURTIGBESTILLING",
        qb_title: "Planlegg Din Drømmeyacht-Opplevelse",
        qb_desc: "Velg dato og la oss finne den perfekte båten for deg.",
        qb_date_label: "VELG DATO",
        qb_guests_label: "ANTALL GJESTER",
        qb_guests_placeholder: "Hvor mange gjester?",
        qb_btn: "VELG YACHT",
        yacht_tag: "PREMIUM FLÅTE",
        yacht_section_title: "Infinity Luxury Yacht",
        yacht_subtitle: "Alanyas stolthet med Blått Flagg",
        yacht_description: "Infinity kombinerer elegant design, romslig soldekk og førsteklasses komfort.",
        feature_capacity: "Kapasitet",
        feature_award: "VİP Utstyr",
        feature_speed: "Erfaren Kaptein",
        memories_tag: "MINNER",
        memories_title: "Gjennom Våre Gjesters Øyne",
        memories_desc: "Følg oss på Instagram!",
        footer_brand_desc: "Førsteklasses yachtutleie og skreddersydde båtturer i Alanya.",
        footer_quick_links: "Hurtiglenker",
        contact_title: "Kontakt",
        footer_copyright: "© 2026 ALANYA VİP YACHTS (Infinity). Alle rettigheter forbeholdt.",
        cookie_text: "Vi bruker informasjonskapsler for å gi deg best mulig opplevelse.",
        cookie_button: "Godta",
        wa_tooltip: "Send melding på WhatsApp",
        see_details: "Se Detaljer",
        morning_tour_title: "Morgentour",
        sunset_tour_title: "Solnedgangstur",
        daily_tour_title: "Dagstur",
        charter_tour_title: "Privat Charter",
        tour_details_title: "Turdetaljer",
        tour_description_title: "Beskrivelse",
        tour_includes_title: "Hva som er inkludert",
        booking_title: "Bestilling & Informasjon",
        booking_text: "Ta kontakt nå for å reservere plass!",
        booking_whatsapp_btn: "Kontakt via WhatsApp",
        booking_phone_btn: "Ring Oss",
        tour_not_found_title: "Tur Bulunamadı",
        tour_not_found_text: "Den valgte turen er ikke tilgjengelig.",
        back_to_home_btn: "Tilbake til Hovedsiden",
        nav_blog: "Blogg",
        blog_page_title: "ALANYA VİP YACHTS Blogg",
        blog_page_desc: "Reisetips og yachtguide",
        read_more: "Les Mer",
        back_to_blog: "Alle Innlegg",
        filter_all: "Alle Alternativer",
        filter_sunset: "Solnedgangstur",
        filter_morning: "Morgentur",
        filter_day: "Dagstur",
        filter_birthday: "Bursdag",
        filter_vip: "VİP Charter",
        popular_yachts_tag: "ALANYA VİP YACHTSUTLEIE",
        popular_yachts_title: "Privat Yachtutleie i Alanya – Mest Populære Luksusturer",
        card1_badge_title: "OPPDAG ALANYAS KYST OG GROTTER...",
        card2_badge_title: "DAGLIG PRIVAT YACHTUTLEIE I ALANYA...",
        card3_badge_title: "LUKSUS SOLNEDGANGSTUR MED BADING...",
        card4_badge_title: "EKSKLUSIV VİP CHARTER & SELSKAP...",
        pill_transfer_inc: "Transfer Inkludert",
        pill_food_inc: "Måltid Inkludert",
        pill_drinks_inc: "Alkoholfri Drikke",
        pill_alcohol_allowed: "Egen Drikke Tillatt",
        pill_bbq_inc: "Grillunsj Ombord",
        pill_dinner_inc: "Middag Inkludert",
        pill_music_inc: "Lydanlegg",
        pill_vito_inc: "VİP Vito Transfer",
        pill_gourmet_inc: "Gourmetmeny",
        pill_custom_route: "Valgfri Rute",
        pill_insurance_inc: "Full VİP Service",
        spec_start_from: "Fra",
        spec_capacity: "Kapasitet",
        spec_hour: "Tid",
        btn_chat_wa: "Chat på WhatsApp",
        btn_details_view: "Se Detaljer",
        specials_tag: "FOCUS YACHT",
        specials_title_part1: "Luksus",
        specials_title_part2: "Yachter & Opplevelser",
        specials_desc: "VİP-hotelltransport, bursdag på yachten og actionfylt vannsport i Alanya.",
        service1_title: "Privat Transfer fra Hotell til Yacht",
        badge_hotel_transfer: "Hotelltransfer",
        badge_free_cancel: "Gratis Avbestilling",
        badge_fast_booking: "Rask Bestilling",
        service1_btn: "Hotelltransfer til Yacht",
        service2_title: "Bursdag på en Yacht",
        badge_cake_decor: "Kake & Pynt",
        service2_btn: "Bursdag på en Yacht",
        service3_title: "Vannsport i Alanya",
        badge_watersport: "Parasailing & Jetski",
        badge_safety_pro: "Trygg & Forsikret",
        service3_btn: "Vannsport",
        inc_tag: "TRANSPARENT SERVICE",
        inc_section_title: "Hva er inkludert i våre turer?",
        inc_food_label: "MAT / LUNSJ",
        inc_food_status: "Inkludert (fra 4 timer)",
        inc_food_hint: "Under 3 timer uten mat",
        inc_drinks_label: "ALKOHOLFRIE DRIKKER",
        inc_drinks_status: "Inkludert",
        inc_drinks_hint: "Ubegrenset",
        inc_alcohol_label: "ALKOHOLHOLTIGE DRIKKER",
        inc_alcohol_status: "Ikke inkludert",
        inc_alcohol_hint: "Betales separat",
        inc_bring_label: "MEDBRING EGEN ALKOHOL",
        inc_bring_status: "Tillatt",
        inc_bring_hint: "Gratis servering om bord",
        inc_decor_label: "DEKORASJON",
        inc_decor_status: "Valgfritt",
        inc_decor_hint: "For fest og feiring",
        inc_transfer_label: "TRANSFER",
        inc_transfer_status: "Ekstra",
        inc_transfer_hint: "VİP Mercedes Vito transfer",
        calc_title: "BEREGN PRIS",
        calc_tagline: "Øyeblikkelig og transparent pris",
        calc_guests_label: "Antall gjester (Maks 12)",
        calc_duration_label: "Turens varighet",
        calc_transfer_label: "Hotelltransfer",
        calc_transfer_no: "Uten transfer",
        calc_transfer_yes: "VİP Mercedes Vito transfer (Ekstra)",
        calc_total_label: "Beregnet totalpris:",
        calc_note_default: "Grunnpris gjelder opptil 6 personer. Standardmåltid inkludert fra 4 timer.",
        calc_book_btn: "Bestill til denne prisen via WhatsApp",
        pill_transfer_extra: "Transfer ekstra",
        pill_4h_food_inc: "Mat inkludert (fra 4 timer)",
        card1_badge_title: "ALANYAS BUKTER OG GROTTER (MORGEN-TUR)...",
        card2_badge_title: "DAGLIG PRIVAT YACHTUTLEIE I ALANYA...",
        card3_badge_title: "EKSKLUSIV SOLNEDGANG OG BADETUR...",
        card4_badge_title: "EKSKLUSIV PRIVAT VİP YACHTUTLEIE...",
    }
};

// TUR DETAYLARI VERİTABANI
const tourDetails = {
    'sabah': {
        images: ['GÖRSELLER/caves-1.jpg', 'GÖRSELLER/G9.jpg', 'GÖRSELLER/G6.jpg', 'GÖRSELLER/G12.jpg', 'GÖRSELLER/caves-2.jpg'],
        tr: {
            title: 'Sabah Turu',
            description: 'Alanya\'nın berrak sabah sularında güne harika bir başlangıç yapın. Turumuz limandan çıkışla başlar ve Eski Tersane (Kırmızı Kule) önünde ilk yüzme molamızı veririz. Ardından tarihi Alanya Kalesi etrafında tur atarak Korsanlar Mağarası, Aşıklar Mağarası, Fosforlu Mağara ve Kuş Yuvası\'nı ziyaret ediyoruz. Sonrasında Kleopatra Plajı\'nda yüzüyor ve Kaplumbağa Plajı\'na geçerek şanslıysak deniz kaplumbağalarını gözlemliyoruz.',
            includes: ['4 Saatlik Sabah Turu', 'Zengin Kahvaltı Tabağı', 'Taze Meyve ve Atıştırmalıklar', 'Sınırsız Alkolsüz İçecek', 'Yüzme ve Şnorkel Ekipmanları', 'Profesyonel Kaptan ve Mürettebat', 'Güneş Doğuşu Manzarası', 'Güvenlik ve Sigorta']
        },
        en: {
            title: 'Morning Tour',
            description: 'Start your day wonderfully in the clear morning waters of Alanya. Departing from the harbor, we have our first swim break at the Old Shipyard (Red Tower). We cruise around Alanya Castle visiting the Pirates Cave, Lovers Cave, Phosphorus Cave, and Bird\'s Nest. Afterwards, we swim at Cleopatra Beach and Turtle Beach.',
            includes: ['4-Hour Morning Cruise', 'Rich Breakfast Platter', 'Fresh Fruits & Snacks', 'Unlimited Soft Drinks', 'Snorkeling Equipment', 'Professional Captain & Crew', 'Sunrise Scenery', 'Safety & Full Insurance']
        },
        ru: {
            title: 'Утренний Тур',
            description: 'Начните день в кристально чистых утренних водах Аланьи. Выход из порта, купание у Красной башни, посещение Пиратской, Влюбленных и Фосфорной пещер, пляж Клеопатры и Черепаший пляж.',
            includes: ['4-часовой утренний круиз', 'Вкусный завтрак', 'Свежие фрукты и закуски', 'Безалкогольные напитки', 'Снаряжение для плавания', 'Опытный капитан и экипаж', 'Панорамные виды', 'Страховка']
        }
    },
    'gunbatimi': {
        images: ['GÖRSELLER/magara.jpg', 'GÖRSELLER/G11.jpg', 'GÖRSELLER/G8.jpg', 'GÖRSELLER/caves-4.jpg'],
        tr: {
            title: 'Gün Batımı Turu',
            description: 'Akdeniz\'in en romantik anlarına denizin ortasından tanıklık edin. Kale etrafında tur atarak Korsanlar, Aşıklar ve Fosforlu Mağaraları ziyaret ediyor; Kleopatra açıklarında günün son ışıklarını seyrederken enfes akşam yemeğimizi servis ediyoruz.',
            includes: ['4 Saatlik Akşam Turu', 'Romantik Akşam Yemeği', 'Özel İçecek Seçimi', 'Müzik Sistemi', 'Gün Batımı Fotoğraf Çekimi', 'Özel Rota ve Duraklar', 'Lüks İç Mekan', 'Güvenlik ve Sigorta']
        },
        en: {
            title: 'Sunset Tour',
            description: 'Witness the most romantic Mediterranean sunset from the water. Cruise past historical sea caves, enjoy swimming as the sun dips below the horizon, followed by a delicious dinner on the deck.',
            includes: ['4-Hour Sunset Cruise', 'Romantic Dinner on Deck', 'Special Drink Selection', 'Premium Sound System', 'Sunset Photo Opportunities', 'Bespoke Route', 'Luxury Lounge', 'Full Insurance']
        },
        ru: {
            title: 'Тур на Закате',
            description: 'Романтический закат посреди Средиземного моря. Прогулка вдоль крепости, купание в лучах заходящего солнца и изысканный ужин на палубе.',
            includes: ['4-часовой вечерний круиз', 'Романтический ужин', 'Напитки', 'Музыкальная система', 'Фотосессия на закате', 'Специальный маршрут', 'Люкс палуба', 'Полная страховка']
        }
    },
    'gunluk': {
        images: ['GÖRSELLER/caves-3.jpg', 'GÖRSELLER/G5.jpg', 'GÖRSELLER/G9.jpg', 'GÖRSELLER/caves-6.jpg'],
        tr: {
            title: 'Günlük Tur',
            description: 'Alanya\'nın tüm eşsiz koylarını tam gün keşfedin! Ulaş Koyu, Kleopatra, Fosforlu Mağara ve masmavi denizlerde yüzme molaları eşliğinde barbekü öğle yemeğinin tadını çıkarın.',
            includes: ['7-8 Saatlik Tam Gün Turu', 'Özel Barbekü Öğle Yemeği', 'Meyve Tabağı ve İkramlar', 'Sınırsız Alkolsüz İçecek', 'Şnorkel ve Deniz Ekipmanları', 'VİP Hizmet', 'Müzik ve Eğlence', 'Güvenlik Ekipmanları']
        },
        en: {
            title: 'Daily Tour',
            description: 'Full-day exploration of all scenic bays in Alanya! Swim in turquoise waters at Ulas and Cleopatra, and savor an authentic BBQ lunch prepared fresh on board.',
            includes: ['7-8 Hour Full Day Cruise', 'Fresh BBQ Lunch on Board', 'Fruit Platters & Snacks', 'Unlimited Soft Drinks', 'Snorkel Gear', 'VİP Service', 'Music & Entertainment', 'Safety Equipment']
        },
        ru: {
            title: 'Дневной Тур',
            description: 'Полный день круиза по самым живописным бухтам Аланьи с обедом-барбекю на борту, купанием в кристальной воде и отдыхом.',
            includes: ['7-8 часов круиза', 'Обед барбекю', 'Фрукты и напитки', 'Безлимитные безалкогольные напитки', 'Снаряжение для снорклинга', 'VİP сервис', 'Музыка', 'Страховка']
        }
    },
    'kiralama': {
        images: ['GÖRSELLER/G10.jpg', 'GÖRSELLER/G11.jpg', 'GÖRSELLER/G3.PNG', 'GÖRSELLER/G4.jpeg'],
        tr: {
            title: 'Özel Kiralama',
            description: 'Infinity VİP yatını tamamen size ve sevdiklerinize özel kiralayın. Doğum günü, evlilik teklifi, yıldönümü veya özel davetleriniz için rotayı ve ikramları birlikte belirleyelim.',
            includes: ['Kişiye Özel Rota Planı', 'Özel Menü Seçenekleri', 'Sınırsız İçecek İkramı', 'Özel Süsleme & Dekorasyon (İsteğe Bağlı)', 'Lüks Güverte & Kabin Kullanımı', 'Kaptan ve Özel Mürettebat', 'Müzik Sistemi', 'Tam Güvence']
        },
        en: {
            title: 'Private Charter',
            description: 'Charter the Infinity Yacht exclusively for your family, friends, or special celebrations. Customizable route, gourmet dining, and VİP hospitality tailored to your wishes.',
            includes: ['Custom Route & Timing', 'Gourmet Catering Options', 'Unlimited Drinks', 'Custom Event Decoration (Optional)', 'Full Luxury Yacht Access', 'Private Captain & Host', 'Sound System', 'Full Insurance']
        },
        ru: {
            title: 'Частная Аренда',
            description: 'Индивидуальная аренда яхты Infinity для вашего праздника, дня рождения или романтического отдыха. Индивидуальный маршрут и персональный VİP-сервис.',
            includes: ['Индивидуальный маршрут', 'Персональное меню', 'Напитки', 'Праздничный декор (по запросу)', 'Полный доступ к яхте', 'Капитан и команда', 'Музыка', 'Страховка']
        }
    }
};

// BLOG VERİLERİ
const blogs = [
    {
        id: 'vip-yacht-guide',
        image: 'GÖRSELLER/blog-vip-yacht.png',
        date: '15 Temmuz 2026',
        tr: {
            title: 'Alanya VİP Yachts Kiralama: Unutulmaz Bir Mavi Tur Deneyimi',
            summary: 'Alanya\'nın muhteşem koylarında lüks ve konforlu bir yat turu planlarken bilmeniz gereken her şey bu rehberde.',
            content: '<h2>Alanya\'da Neden VİP Yachts Kiralamalısınız?</h2><p>Alanya, Akdeniz\'in en güzel sahillerine sahip eşsiz bir tatil beldesidir. Ancak bu güzellikleri kalabalıktan uzak, sadece size özel bir şekilde keşfetmek istiyorsanız VİP yat kiralama mükemmel bir seçenektir.</p><p>Infinity Yacht ile çıkacağınız bir turda hem 5 yıldızlı otel konforunu yaşar, hem de rotanızı tamamen siz belirlersiniz.</p>'
        },
        en: {
            title: 'ALANYA VİP YACHTS Charter: An Unforgettable Blue Cruise Experience',
            summary: 'Everything you need to know when planning a luxurious and comfortable yacht tour in the magnificent bays of Alanya.',
            content: '<h2>Why Choose VİP Yachts Charter in Alanya?</h2><p>Alanya is a breathtaking Mediterranean destination. Exploring its crystal clear waters away from the crowds on a private yacht gives you true freedom, comfort, and personalized luxury.</p>'
        },
        ru: {
            title: 'Аренда VİP-яхты в Аланье: незабываемый опыт',
            summary: 'Все, что вам нужно знать при планировании роскошного и комфортного тура на яхте по бухтам Аланьи.',
            content: '<h2>Почему стоит выбрать VİP-аренду яхты в Аланье?</h2><p>Индивидуальная аренда яхты позволит вам насладиться красотой моря вдали от толпы с первоклассным комфортом.</p>'
        }
    },
    {
        id: 'sunset-romantic',
        image: 'GÖRSELLER/blog-sunset.png',
        date: '10 Temmuz 2026',
        tr: {
            title: 'Alanya\'da Gün Batımı Turu: Romantik Bir Akşam',
            summary: 'Sevdiklerinizle baş başa, denizin ortasında güneşin batışını izlemenin büyüleyici deneyimi.',
            content: '<h2>Romantizmin Zirvesi</h2><p>Özel bir kutlama, evlilik teklifi veya sadece romantik bir akşam geçirmek istiyorsanız gün batımı turlarımız tam size göre.</p>'
        },
        en: {
            title: 'Sunset Tour in Alanya: A Romantic Evening',
            summary: 'The fascinating experience of watching the sunset on the open sea with your loved ones.',
            content: '<h2>The Ultimate Romance</h2><p>Our sunset cruises offer magical golden hour vistas, champagne toast, and private candlelit dinners on the sea.</p>'
        },
        ru: {
            title: 'Тур на закате в Аланье: романтический вечер',
            summary: 'Захватывающий опыт наблюдения за закатом посреди моря.',
            content: '<h2>Романтический вечер</h2><p>Наши туры на закате идеально подходят для предложений руки и сердца, годовщин и романтических вечеров.</p>'
        }
    }
];

// =================================================================================
// ============================= UYGULAMA MANTIĞI ==================================
// =================================================================================

document.addEventListener('DOMContentLoaded', function() {
    
    // 1. PRELOADER
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                preloader.classList.add('hidden');
            }, 300);
        });
        setTimeout(function() {
            preloader.classList.add('hidden');
        }, 1000);
    }

    // 2. DİL YÖNETİMİ
    let currentLang = safeStorage.getItem('user_selected_lang') || 'tr';
    const langDropdownBtn = document.getElementById('lang-menu-btn');
    const langDropdownMenu = document.getElementById('lang-dropdown-menu');
    const langDropdown = document.querySelector('.language-dropdown');
    const currentLangFlag = document.getElementById('current-lang-flag');
    const currentLangCode = document.getElementById('current-lang-code');

    const flagMap = {
        tr: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/tr.svg',
        en: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/gb.svg',
        de: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/de.svg',
        ru: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/ru.svg',
        pl: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/pl.svg',
        sv: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/se.svg',
        no: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.5.0/flags/4x3/no.svg'
    };

    const updateLangUI = function(lang) {
        if (currentLangFlag && flagMap[lang]) currentLangFlag.src = flagMap[lang];
        if (currentLangCode) currentLangCode.textContent = lang.toUpperCase();
    };

    if (langDropdownBtn && langDropdown) {
        langDropdownBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            langDropdown.classList.toggle('open');
        });
        document.addEventListener('click', function() {
            langDropdown.classList.remove('open');
        });
    }

    const translatePage = function(lang) {
        if (!lang) lang = currentLang;
        const dict = translations[lang] || translations.tr;
        
        document.querySelectorAll('[data-translate]').forEach(function(el) {
            const key = el.getAttribute('data-translate');
            if (dict[key]) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = dict[key];
                } else {
                    el.textContent = dict[key];
                }
            }
        });

        if (dict.site_title) document.title = dict.site_title;
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && dict.site_description) {
            metaDesc.setAttribute('content', dict.site_description);
        }

        updateLangUI(lang);
    };

    document.querySelectorAll('.lang-btn').forEach(function(btn) {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const chosenLang = btn.getAttribute('data-lang');
            if (chosenLang && translations[chosenLang]) {
                currentLang = chosenLang;
                safeStorage.setItem('user_selected_lang', currentLang);
                translatePage(currentLang);
                if (langDropdown) langDropdown.classList.remove('open');
                
                if (window.renderTourDetailPage) window.renderTourDetailPage();
                if (window.renderBlogList) window.renderBlogList();
            }
        });
    });

    translatePage(currentLang);

    // 3. STICKY HEADER & SCROLL SPY
    const header = document.getElementById('header');
    const backToTopBtn = document.getElementById('back-to-top');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 40) {
            if (header) header.classList.add('scrolled');
            if (backToTopBtn) backToTopBtn.classList.add('show');
        } else {
            if (header) header.classList.remove('scrolled');
            if (backToTopBtn) backToTopBtn.classList.remove('show');
        }
    });

    
    // 4. MOBİL MENÜ & BACKDROP TOGGLE
    const menuBars = document.getElementById('menu-bars');
    const mainNav = document.getElementById('main-nav');
    const mobileBackdrop = document.getElementById('mobile-backdrop');

    const toggleMobileNav = function(open) {
        if (!menuBars || !mainNav) return;
        const isActive = open !== undefined ? open : !mainNav.classList.contains('active');
        if (isActive) {
            menuBars.classList.add('active');
            mainNav.classList.add('active');
            if (mobileBackdrop) mobileBackdrop.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            menuBars.classList.remove('active');
            mainNav.classList.remove('active');
            if (mobileBackdrop) mobileBackdrop.classList.remove('active');
            document.body.style.overflow = '';
        }
    };

    if (menuBars) {
        menuBars.addEventListener('click', function(e) {
            e.stopPropagation();
            toggleMobileNav();
        });
    }

    if (mobileBackdrop) {
        mobileBackdrop.addEventListener('click', function() {
            toggleMobileNav(false);
        });
    }

    if (mainNav) {
        mainNav.querySelectorAll('.nav-link').forEach(function(link) {
            link.addEventListener('click', function() {
                toggleMobileNav(false);
            });
        });
    }

    // 5. HERO SLIDER CAROUSEL (GÖRSELLER DÖNGÜSÜ)
    const heroImg = document.getElementById('hero-image');
    const heroPrev = document.getElementById('hero-prev');
    const heroNext = document.getElementById('hero-next');
    const activeSlideEl = document.querySelector('.active-slide');

    const heroImages = [
        'GÖRSELLER/G9.jpg',
        'GÖRSELLER/G11.jpg',
        'GÖRSELLER/G2.jpg'
    ];
    let currentHeroIndex = 0;

    const setHeroSlide = function(index) {
        if (!heroImg) return;
        currentHeroIndex = (index + heroImages.length) % heroImages.length;
        heroImg.style.opacity = '0.4';
        setTimeout(function() {
            heroImg.src = heroImages[currentHeroIndex];
            heroImg.style.opacity = '1';
        }, 200);

        if (activeSlideEl) {
            activeSlideEl.textContent = '0' + (currentHeroIndex + 1);
        }
    };

    if (heroPrev) heroPrev.addEventListener('click', function() { setHeroSlide(currentHeroIndex - 1); });
    if (heroNext) heroNext.addEventListener('click', function() { setHeroSlide(currentHeroIndex + 1); });

    setInterval(function() {
        setHeroSlide(currentHeroIndex + 1);
    }, 6000);

    // 6. VIDEO MODAL OYNATICI
    const openVideoBtn = document.getElementById('open-video-modal');
    const closeVideoBtn = document.getElementById('close-video-modal');
    const videoModal = document.getElementById('video-modal');
    const videoPlayer = document.getElementById('modal-video-player');

    if (openVideoBtn && videoModal) {
        openVideoBtn.addEventListener('click', function() {
            videoModal.classList.add('active');
            if (videoPlayer) {
                try {
                    videoPlayer.play();
                } catch(e) {}
            }
        });
    }

    const closeVideo = function() {
        if (videoModal) videoModal.classList.remove('active');
        if (videoPlayer) {
            try {
                videoPlayer.pause();
                videoPlayer.currentTime = 0;
            } catch(e) {}
        }
    };

    if (closeVideoBtn) closeVideoBtn.addEventListener('click', closeVideo);
    if (videoModal) {
        videoModal.addEventListener('click', function(e) {
            if (e.target === videoModal) closeVideo();
        });
    }

    // 7. HERO SEARCH BAR WHATSAPP REZERVASYON BUTONU
    const heroSearchBtn = document.getElementById('hero-bar-search-btn');
    if (heroSearchBtn) {
        const dateInput = document.getElementById('hero-bar-date');
        if (dateInput) {
            const tmrw = new Date();
            tmrw.setDate(tmrw.getDate() + 1);
            dateInput.value = tmrw.toISOString().split('T')[0];
        }

        heroSearchBtn.addEventListener('click', function() {
            const dateVal = dateInput ? dateInput.value : 'Belirtilmedi';
            const guestsVal = document.getElementById('hero-bar-guests') ? document.getElementById('hero-bar-guests').value : '5-8';
            const typeVal = document.getElementById('hero-bar-type') ? document.getElementById('hero-bar-type').value : 'Tümü';

            const message = 'Merhaba! INFINITY VİP YACHTS için rezervasyon/bilgi talebim var:%0A📍 Lokasyon: Alanya Limanı%0A📅 Tarih: ' + dateVal + '%0A👥 Kişi Sayısı: ' + guestsVal + '%0A🛥️ Yat / Tur Tipi: ' + typeVal + '%0AUygunluk ve fiyat bilgisi alabilir miyim?';
            
            window.open('https://wa.me/' + yourPhoneNumber + '?text=' + message, '_blank');
        });
    }

    // 8. HIZLI REZERVASYON FORMU (QUICK BOOKING)
    const qbSubmitBtn = document.getElementById('qb-submit-btn');
    if (qbSubmitBtn) {
        const qbDateInput = document.getElementById('qb-date');
        if (qbDateInput) {
            const tmrw = new Date();
            tmrw.setDate(tmrw.getDate() + 1);
            qbDateInput.value = tmrw.toISOString().split('T')[0];
        }

        qbSubmitBtn.addEventListener('click', function() {
            const dateVal = qbDateInput ? qbDateInput.value : 'Belirtilmedi';
            const guestsSelect = document.getElementById('qb-guests');
            const guestsVal = guestsSelect && guestsSelect.value ? guestsSelect.value : '2-4 Kişi';

            const message = 'Merhaba, Infinity VİP Yachts turu planlamak istiyorum:%0A📅 Tarih: ' + dateVal + '%0A👥 Kişi Sayısı: ' + guestsVal + '%0ADetaylı bilgi ve müsaitlik durumu alabilir miyim?';
            
            window.open('https://wa.me/' + yourPhoneNumber + '?text=' + message, '_blank');
        });
    }

    // 9. SAYI SAYAÇLARI
    const counters = document.querySelectorAll('.counter');
    if (counters.length > 0) {
        let hasCounted = false;
        if ('IntersectionObserver' in window) {
            const countObserver = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting && !hasCounted) {
                        hasCounted = true;
                        counters.forEach(function(counter) {
                            const target = parseInt(counter.getAttribute('data-count') || '12', 10);
                            let count = 0;
                            const step = Math.ceil(target / 20) || 1;
                            const interval = setInterval(function() {
                                count += step;
                                if (count >= target) {
                                    counter.textContent = target;
                                    clearInterval(interval);
                                } else {
                                    counter.textContent = count;
                                }
                            }, 50);
                        });
                    }
                });
            }, { threshold: 0.5 });

            const yachtSection = document.getElementById('yacht');
            if (yachtSection) countObserver.observe(yachtSection);
        }
    }

    // 10. ÇEREZ BİLDİRİMİ
    const cookieBanner = document.getElementById('cookie-banner');
    const acceptCookiesBtn = document.getElementById('accept-cookies');
    if (cookieBanner && acceptCookiesBtn) {
        if (!safeStorage.getItem(cookieConsentName)) {
            setTimeout(function() {
                cookieBanner.classList.add('show');
            }, 1200);
        }
        acceptCookiesBtn.addEventListener('click', function() {
            safeStorage.setItem(cookieConsentName, 'true');
            cookieBanner.classList.remove('show');
        });
    }

    // 11. TUR DETAY SAYFASI (tur-detay.html)
    window.renderTourDetailPage = function() {
        if (!document.querySelector('.tour-detail-page')) return;

        const params = new URLSearchParams(window.location.search);
        const tourKey = params.get('tur') || 'sabah';
        const tour = tourDetails[tourKey];
        const dict = translations[currentLang] || translations.tr;

        if (tour) {
            const tourLangData = tour[currentLang] || tour.tr;
            
            document.title = tourLangData.title + ' | ALANYA VİP YACHTS';
            const tourTitleEl = document.getElementById('tour-title');
            if (tourTitleEl) tourTitleEl.textContent = tourLangData.title;

            const tourDescEl = document.getElementById('tour-description');
            if (tourDescEl) tourDescEl.textContent = tourLangData.description;

            const includesList = document.getElementById('tour-includes');
            if (includesList && tourLangData.includes) {
                includesList.innerHTML = '';
                tourLangData.includes.forEach(function(item) {
                    const li = document.createElement('li');
                    li.innerHTML = '<i class="fas fa-check-circle" style="color:#d4af37; margin-right:8px;"></i> ' + item;
                    includesList.appendChild(li);
                });
            }

            const mainImage = document.getElementById('main-tour-image');
            const thumbnailsContainer = document.getElementById('gallery-thumbnails');
            if (mainImage && thumbnailsContainer && tour.images && tour.images.length > 0) {
                mainImage.src = tour.images[0];
                thumbnailsContainer.innerHTML = '';
                tour.images.forEach(function(imgSrc, index) {
                    const img = document.createElement('img');
                    img.src = imgSrc;
                    img.alt = tourLangData.title + ' resim ' + (index + 1);
                    if (index === 0) img.classList.add('active');
                    img.addEventListener('click', function() {
                        mainImage.src = imgSrc;
                        const activeEl = thumbnailsContainer.querySelector('.active');
                        if (activeEl) activeEl.classList.remove('active');
                        img.classList.add('active');
                    });
                    thumbnailsContainer.appendChild(img);
                });
            }

            const waLink = document.getElementById('whatsapp-link');
            if (waLink) {
                const msg = 'Merhaba, "' + tourLangData.title + '" turu hakkında detaylı bilgi ve fiyat almak istiyorum.';
                waLink.href = 'https://wa.me/' + yourPhoneNumber + '?text=' + encodeURIComponent(msg);
            }
        }
    };

    if (document.querySelector('.tour-detail-page')) {
        window.renderTourDetailPage();
    }

    // 12. BLOG LİSTESİ & DETAY (blog.html, blog-detay.html)
    window.renderBlogList = function() {
        const blogContainer = document.getElementById('blog-container');
        if (!blogContainer) return;
        blogContainer.innerHTML = '';
        const dict = translations[currentLang] || translations.tr;
        blogs.forEach(function(blog) {
            const langData = blog[currentLang] || blog.tr;
            const card = document.createElement('div');
            card.className = 'blog-card';
            card.innerHTML = '<div class="blog-card-img"><img src="' + blog.image + '" alt="' + langData.title + '" loading="lazy"></div>' +
                '<div class="blog-card-body">' +
                '<span class="blog-card-date">' + blog.date + '</span>' +
                '<h3 class="blog-card-title">' + langData.title + '</h3>' +
                '<p class="blog-card-summary">' + langData.summary + '</p>' +
                '<a href="blog-detay.html?id=' + blog.id + '" class="read-more-btn">' +
                '<span>' + (dict.read_more || 'Devamını Oku') + '</span>' +
                '<i class="fas fa-arrow-right"></i>' +
                '</a>' +
                '</div>';
            blogContainer.appendChild(card);
        });
    };

    if (document.getElementById('blog-container')) {
        window.renderBlogList();
    }

    window.renderBlogDetail = function() {
        if (!document.querySelector('.blog-article-content')) return;
        const params = new URLSearchParams(window.location.search);
        const blogId = params.get('id') || 'vip-yacht-guide';
        const blog = blogs.find(function(b) { return b.id === blogId; }) || blogs[0];
        const dict = translations[currentLang] || translations.tr;

        if (blog) {
            const langData = blog[currentLang] || blog.tr;
            document.title = langData.title + ' | ALANYA VİP YACHTS';
            const titleEl = document.getElementById('blog-title');
            if (titleEl) titleEl.textContent = langData.title;
            const dateEl = document.getElementById('blog-date');
            if (dateEl) dateEl.innerHTML = '<i class="far fa-calendar-alt"></i> ' + blog.date;
            const contentEl = document.getElementById('blog-content');
            if (contentEl) {
                contentEl.innerHTML = '<img src="' + blog.image + '" alt="' + langData.title + '">' + langData.content;
            }
        }
    };

    if (document.querySelector('.blog-article-content')) {
        window.renderBlogDetail();
    }

    // 13. WHATSAPP NUMARA SEÇİCİ MODAL
    const waModalHtml = '<div id="wa-modal-overlay" class="wa-modal-overlay">' +
        '<div class="wa-modal-content">' +
        '<span class="wa-modal-close" id="wa-modal-close">&times;</span>' +
        '<h3 class="wa-modal-title"><i class="fab fa-whatsapp"></i> WhatsApp</h3>' +
        '<p class="wa-modal-desc">Lütfen iletişim numaranızı seçiniz / Please select a number:</p>' +
        '<div class="wa-modal-options">' +
        '<a href="#" target="_blank" class="wa-modal-btn" id="wa-modal-tr"><i class="fas fa-phone-volume"></i> Türkiye (+90 555 808 27 27)</a>' +
        '<a href="#" target="_blank" class="wa-modal-btn" id="wa-modal-ru"><i class="fas fa-phone-volume"></i> Россия (+7 950 038-43-56)</a>' +
        '</div>' +
        '</div>' +
        '</div>';
    document.body.insertAdjacentHTML('beforeend', waModalHtml);

    const waOverlay = document.getElementById('wa-modal-overlay');
    const waClose = document.getElementById('wa-modal-close');
    const waTr = document.getElementById('wa-modal-tr');
    const waRu = document.getElementById('wa-modal-ru');

    if (waClose && waOverlay) {
        waClose.addEventListener('click', function() { waOverlay.classList.remove('active'); });
        waOverlay.addEventListener('click', function(e) {
            if (e.target === waOverlay) waOverlay.classList.remove('active');
        });
    }

    document.addEventListener('click', function(e) {
        const waLink = e.target.closest('a.wa-link');
        if (waLink) {
            e.preventDefault();
            let textParam = '';
            try {
                const url = new URL(waLink.href);
                textParam = url.searchParams.get('text') || '';
            } catch(err) {}

            if (textParam) {
                waTr.href = 'https://wa.me/' + yourPhoneNumber + '?text=' + encodeURIComponent(textParam);
                waRu.href = 'https://wa.me/' + russianPhoneNumber + '?text=' + encodeURIComponent(textParam);
            } else {
                waTr.href = 'https://wa.me/' + yourPhoneNumber;
                waRu.href = 'https://wa.me/' + russianPhoneNumber;
            }

            if (waOverlay) waOverlay.classList.add('active');
        }
    });


    // 14. POPÜLER YAT KARTLARI MİNİ SLİDER & KATEGORİ FİLTRELERİ
    const initCardSliders = function() {
        const sliders = document.querySelectorAll('.yacht-card-slider');
        sliders.forEach(function(slider) {
            const images = slider.querySelectorAll('.slide-img');
            const dots = slider.querySelectorAll('.slider-dots .dot');
            if (!images.length || !dots.length) return;

            let currentIndex = 0;
            let autoTimer = null;

            const goToSlide = function(idx) {
                currentIndex = (idx + images.length) % images.length;
                images.forEach(function(img, i) {
                    img.classList.toggle('active', i === currentIndex);
                });
                dots.forEach(function(dot, i) {
                    dot.classList.toggle('active', i === currentIndex);
                });
            };

            dots.forEach(function(dot, idx) {
                dot.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    goToSlide(idx);
                });
            });

            const startAuto = function() {
                if (autoTimer) clearInterval(autoTimer);
                autoTimer = setInterval(function() {
                    goToSlide(currentIndex + 1);
                }, 4000 + Math.random() * 1500);
            };

            const stopAuto = function() {
                if (autoTimer) clearInterval(autoTimer);
            };

            slider.addEventListener('mouseenter', stopAuto);
            slider.addEventListener('mouseleave', startAuto);
            slider.addEventListener('touchstart', stopAuto, { passive: true });

            startAuto();
        });
    };
    initCardSliders();

    // 15. KATEGORİ FİLTRE ROZETLERİ (Sunset, Morning, Day, Birthday, VİP)
    const initCategoryFilters = function() {
        const filterPills = document.querySelectorAll('.filter-pill');
        const yachtCards = document.querySelectorAll('.luxury-yacht-card');
        const serviceCards = document.querySelectorAll('.special-service-card');

        filterPills.forEach(function(pill) {
            pill.addEventListener('click', function() {
                const category = pill.getAttribute('data-category');
                
                filterPills.forEach(function(p) { p.classList.remove('active'); });
                pill.classList.add('active');

                if (category === 'all') {
                    yachtCards.forEach(function(c) { c.style.display = ''; });
                    serviceCards.forEach(function(c) { c.style.display = ''; });
                    return;
                }

                if (category === 'birthday') {
                    const targetEl = document.getElementById('special-services');
                    if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
                } else {
                    const targetEl = document.getElementById('popular-yachts');
                    if (targetEl) targetEl.scrollIntoView({ behavior: 'smooth' });
                }

                yachtCards.forEach(function(card) {
                    const cardCat = card.getAttribute('data-category');
                    if (category === 'all' || cardCat === category) {
                        card.style.display = '';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    };
    initCategoryFilters();

    // 16. CANLI FİYAT HESAPLAMA WIDGET'I (İlhan Abi Fiyatlama Kuralları)
    const initPriceCalculator = function() {
        const guestsSelect = document.getElementById('calc-guests-select');
        const durationSelect = document.getElementById('calc-duration-select');
        const transferSelect = document.getElementById('calc-transfer-select');
        const priceDisplay = document.getElementById('calc-total-price');
        const priceNote = document.getElementById('calc-price-note');
        const whatsappBtn = document.getElementById('calc-whatsapp-btn');

        if (!guestsSelect || !durationSelect || !priceDisplay) return;

        function updateCalculation() {
            const guests = parseInt(guestsSelect.value, 10) || 6;
            const hours = parseInt(durationSelect.value, 10) || 4;
            const transfer = transferSelect ? transferSelect.value : 'none';

            // Base price for up to 6 persons
            // 3h = 300€, 4h = 400€, 5h = 500€, 6h = 600€, 8h = 800€ (Saati 100€)
            let baseRate = hours * 100;
            
            // Extra guest calculation: after 6 guests, +25€ per person
            let extraGuests = Math.max(0, guests - 6);
            let extraGuestCost = extraGuests * 25;

            let total = baseRate + extraGuestCost;
            priceDisplay.textContent = total;

            // Note update
            let noteText = '';
            if (hours <= 3) {
                noteText = `3 saatlik tur yemeksizdir (Meyve & sınırsız alkolsüz içecekler dahil). 6 kişiye kadar ${baseRate}€'dur.`;
            } else {
                noteText = `${hours} saatlik tura lezzetli standart yemek menüsü (Izgara tavuk/balık, makarna, salata, meyve) ve sınırsız alkolsüz içecekler dahildir.`;
            }

            if (extraGuests > 0) {
                noteText += ` Temel 6 kişi üzerine +${extraGuests} kişi (+${extraGuestCost}€) eklenmiştir.`;
            }

            if (transfer === 'vito') {
                noteText += ' VİP Mercedes Vito otel transferi seçilmiştir (Ekstra).';
            }

            if (priceNote) {
                priceNote.textContent = noteText;
            }

            // WhatsApp Message
            const transferLabel = transfer === 'vito' ? 'İstiyorum (VİP Mercedes Vito Ekstra)' : 'İstemiyorum';
            const foodLabel = hours >= 4 ? 'Standart Yemek Menüsü Dahil' : 'Yemeksiz (Meyve & İçecek Dahil)';
            const waMsg = `Merhaba! ALANYA VİP YACHTS için hesapladığım tur detayları:%0A👥 Kişi Sayısı: ${guests} Kişi%0A⏱️ Süre: ${hours} Saat (${foodLabel})%0A🚐 Transfer: ${transferLabel}%0A💰 Tahmini Toplam Tutar: ${total}€%0AUygunluk ve rezervasyon bilgisi alabilir miyim?`;
            
            if (whatsappBtn) {
                whatsappBtn.href = 'https://wa.me/905558082727?text=' + waMsg;
            }
        }

        guestsSelect.addEventListener('change', updateCalculation);
        durationSelect.addEventListener('change', updateCalculation);
        if (transferSelect) transferSelect.addEventListener('change', updateCalculation);

        updateCalculation();
    };
    initPriceCalculator();

});

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
        back_to_home_btn: "Ana Sayfaya Dön",
        nav_blog: "Blog",
        blog_page_title: "Alanya VIP Yacht Blog",
        blog_page_desc: "Tatiliniz için en iyi öneriler ve yat rehberi",
        read_more: "Devamını Oku",
        back_to_blog: "Tüm Yazılara Dön",
        blog_site_title: "Blog | Alanya VIP Yacht",
        blog_site_description: "Alanya yat kiralama, mavi tur ve tatil rehberi blog yazıları.",
        blog_detail_site_title: "Blog Detayı | Alanya VIP Yacht",
        blog_detail_site_description: "Alanya yat turu blog detayı."
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
        back_to_home_btn: "Back to Homepage",
        nav_blog: "Blog",
        blog_page_title: "Alanya VIP Yacht Blog",
        blog_page_desc: "Best tips and yacht guide for your holiday",
        read_more: "Read More",
        back_to_blog: "Back to All Posts",
        blog_site_title: "Blog | Alanya VIP Yacht",
        blog_site_description: "Alanya yacht charter, blue cruise and holiday guide blog posts.",
        blog_detail_site_title: "Blog Detail | Alanya VIP Yacht",
        blog_detail_site_description: "Alanya yacht tour blog detail."
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
        back_to_home_btn: "На Главную",
        nav_blog: "Блог",
        blog_page_title: "Аланья VIP Яхта Блог",
        blog_page_desc: "Лучшие советы и путеводитель по яхтам для вашего отпуска",
        read_more: "Читать далее",
        back_to_blog: "Вернуться ко всем записям",
        blog_site_title: "Блог | Аланья VIP Яхта",
        blog_site_description: "Аренда яхт в Аланье, морские круизы и путеводитель.",
        blog_detail_site_title: "Детали блога | Аланья VIP Яхта",
        blog_detail_site_description: "Детали блога о туре на яхте в Аланье."
    }
};

// TUR DETAYLARI VERİTABANI (DİL DESTEKLİ)
const tourDetails = {
    'sabah': {
        images: ['GÖRSELLER/G6.jpg', 'GÖRSELLER/G12.jpg', 'GÖRSELLER/G7.jpg', 'GÖRSELLER/caves-1.jpg', 'GÖRSELLER/caves-2.jpg'], // Bu tura ait galeri resimleri
        tr: {
            title: 'Sabah Turu',
            description: 'Alanya\'nın berrak sabah sularında güne harika bir başlangıç yapın. Turumuz limandan çıkışla başlar ve Eski Tersane (Kırmızı Kule) önünde ilk yüzme molamızı veririz. Ardından tarihi Alanya Kalesi etrafında tur atarak Korsanlar Mağarası, Aşıklar Mağarası, Fosforlu Mağara ve Kuş Yuvası\'nı ziyaret ediyoruz. Sonrasında Kleopatra Plajı\'nda yüzüyor ve Kaplumbağa Plajı\'na geçerek şanslıysak deniz kaplumbağalarını gözlemliyoruz. Denizin durumuna göre lezzetli yemek molamızı Eski Tersane veya Kleopatra Plajı\'nda veriyoruz.',
            includes: ['4 Saatlik Sabah Turu', 'Kahvaltı Tabağı', 'Taze Meyve ve Atıştırmalıklar', 'Sınırsız İçecek (Alkolsüz)', 'Yüzme ve Şnorkel Ekipmanları', 'Profesyonel Kaptan ve Mürettebat', 'Güneş Doğuşu Manzarası', 'Güvenlik Ekipmanları']
        },
        en: {
            title: 'Morning Tour',
            description: 'Start your day wonderfully in the clear morning waters of Alanya. Our tour departs from the harbor with a first swimming break at the Old Shipyard (Red Tower). We then cruise around Alanya Castle visiting the Pirates Cave, Lovers Cave, Phosphorus Cave, and Bird\'s Nest. Afterwards, we swim at Cleopatra Beach and head to Turtle Beach to observe sea turtles if we are lucky. Depending on sea conditions, our meal is served at the Old Shipyard or Cleopatra Beach.',
            includes: ['4-Hour Morning Tour', 'Breakfast Platter', 'Fresh Fruits and Snacks', 'Unlimited Drinks (Non-Alcoholic)', 'Swimming and Snorkeling Equipment', 'Professional Captain and Crew', 'Sunrise View', 'Safety Equipment']
        },
        ru: {
            title: 'Утренний Тур',
            description: 'Начните день в чистых утренних водах Аланьи. Наш тур выходит из порта с первой остановкой у Старой верфи (Красная башня). Затем мы огибаем крепость Аланьи, посещая Пиратскую пещеру, Пещеру влюбленных, Фосфорную пещеру и Птичье гнездо. Далее купаемся на пляже Клеопатры и отправляемся на Черепаший пляж, чтобы понаблюдать за черепахами. В зависимости от моря, обед подается на Старой верфи или на пляже Клеопатры.',
            includes: ['4-часовой утренний тур', 'Тарелка для завтрака', 'Свежие фрукты и закуски', 'Безлимитные напитки (безалкогольные)', 'Оборудование для плавания и снорклинга', 'Профессиональный капитан и команда', 'Вид на восход солнца', 'Оборудование безопасности']
        }
    },
    'gunbatimi': {
        images: ['GÖRSELLER/G11.jpg', 'GÖRSELLER/G13.jpeg', 'GÖRSELLER/G8.jpg', 'GÖRSELLER/caves-3.jpg', 'GÖRSELLER/caves-4.jpg'], // Bu tura ait galeri resimleri
        tr: {
            title: 'Gün Batımı Turu',
            description: 'Akdeniz\'in en romantik anlarına denizin ortasından tanıklık edin. Turumuz limandan çıkışla başlar ve Eski Tersane önünde yüzme molası veririz. Kale etrafında tur atarak Korsanlar, Aşıklar, Fosforlu mağaralarını ve Kuş Yuvası\'nı geziyoruz. Kleopatra Plajı\'nda serinleyip Kaplumbağa Plajı\'nda kaplumbağaları arıyoruz. Denizin durumuna göre akşam yemeğimiz eşsiz gün batımı manzarasıyla Eski Tersane veya Kleopatra Plajı\'nda servis ediliyor.',
            includes: ['4 Saatlik Akşam Turu', 'Romantik Akşam Yemeği', 'Özel İçecek Seçimi', 'Canlı Müzik (İsteğe Bağlı)', 'Gün Batımı Fotoğraf Çekimi', 'Özel Rota ve Duraklar', 'Lüks İç Mekan', 'Güvenlik ve Sigorta']
        },
        en: {
            title: 'Sunset Tour',
            description: 'Witness the most romantic moments of the Mediterranean. Departing from the harbor, we swim at the Old Shipyard. We cruise around the castle to see the Pirates, Lovers, Phosphorus caves, and Bird\'s Nest. We cool off at Cleopatra Beach and look for turtles at Turtle Beach. Depending on sea conditions, our romantic dinner is served at the Old Shipyard or Cleopatra Beach with a sunset view.',
            includes: ['4-Hour Evening Tour', 'Romantic Dinner', 'Special Drink Selection', 'Live Music (Optional)', 'Sunset Photo Shoot', 'Special Route and Stops', 'Luxury Interior', 'Safety and Insurance']
        },
        ru: {
            title: 'Тур на Закате',
            description: 'Станьте свидетелем самых романтических моментов. Выйдя из порта, мы купаемся у Старой верфи. Огибаем крепость, чтобы увидеть Пиратскую, Влюбленных, Фосфорную пещеры и Птичье гнездо. Освежаемся на пляже Клеопатры и ищем черепах на Черепашьем пляже. В зависимости от моря, романтический ужин подается на Старой верфи или пляже Клеопатры на закате.',
            includes: ['4-часовой вечерний тур', 'Романтический ужин', 'Особый выбор напитков', 'Живая музыка (по желанию)', 'Фотосессия на закате', 'Особый маршрут и остановки', 'Роскошный интерьер', 'Безопасность и страховка']
        }
    },
    // --- YENİ TURLARI BU FORMATTA AŞAĞIYA EKLEYEBİLİRSİNİZ ---
    'gunluk': {
        images: ['GÖRSELLER/G5.jpg', 'GÖRSELLER/G9.jpg', 'GÖRSELLER/G2.jpg', 'GÖRSELLER/caves-5.jpg', 'GÖRSELLER/caves-6.jpg'],
        tr: { 
            title: 'Günlük Tur', 
            description: 'Alanya\'nın en güzel koylarını tam gün keşfedin! Turumuz limandan çıkışla başlar ve Eski Tersane (Kırmızı Kule) önünde ilk yüzme molamızı veririz. Ardından tarihi Alanya Kalesi etrafında tur atarak sırasıyla Korsanlar Mağarası, Aşıklar Mağarası, Fosforlu Mağara ve Kuş Yuvası\'nı ziyaret ediyoruz. Sonrasında ünlü Kleopatra Plajı\'nda yüzme molası veriyor ve Kaplumbağa Plajı\'na geçerek şanslıysak deniz kaplumbağalarını gözlemliyoruz. Denizin durumuna göre enfes öğle yemeği molamızı Eski Tersane veya Kleopatra Plajı\'nda veriyoruz.', 
            includes: ['8 Saatlik Tam Gün Turu', 'Öğle Yemeği (Barbekü)', 'Meyve Tabağı ve Atıştırmalıklar', 'Sınırsız İçecek (Alkolsüz)', 'Yüzme ve Şnorkel Ekipmanları', 'Profesyonel Kaptan ve Mürettebat', 'Müzik Sistemi', 'Güvenlik Ekipmanları'] 
        },
        en: { 
            title: 'Daily Tour', 
            description: 'Discover the most beautiful bays of Alanya all day! Our tour departs from the harbor with a first swimming break at the Old Shipyard (Red Tower). We then cruise around Alanya Castle visiting the Pirates Cave, Lovers Cave, Phosphorus Cave, and Bird\'s Nest. Afterwards, we swim at the famous Cleopatra Beach and head to Turtle Beach to observe sea turtles if lucky. Depending on sea conditions, our delicious lunch is served at the Old Shipyard or Cleopatra Beach.', 
            includes: ['8-Hour Full Day Tour', 'Lunch (BBQ)', 'Fruit Platter and Snacks', 'Unlimited Drinks (Non-Alcoholic)', 'Swimming and Snorkeling Equipment', 'Professional Captain and Crew', 'Music System', 'Safety Equipment'] 
        },
        ru: { 
            title: 'Дневной Тур', 
            description: 'Откройте для себя красивые бухты Аланьи! Наш тур выходит из порта с первой остановкой у Старой верфи (Красная башня). Затем мы огибаем крепость Аланьи, посещая Пиратскую, Влюбленных, Фосфорную пещеры и Птичье гнездо. Далее купаемся на знаменитом пляже Клеопатры и отправляемся на Черепаший пляж, чтобы понаблюдать за черепахами. В зависимости от моря, обед барбекю подается на Старой верфи или пляже Клеопатры.', 
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


// BLOG VERİTABANI
const blogs = [
    {
        id: 'vip-yacht-guide',
        image: 'GÖRSELLER/blog-vip-yacht.png',
        date: '15 Temmuz 2026',
        tr: {
            title: 'Alanya VIP Yat Kiralama: Unutulmaz Bir Mavi Tur Deneyimi',
            summary: 'Alanya\'nın muhteşem koylarında lüks ve konforlu bir yat turu planlarken bilmeniz gereken her şey bu rehberde.',
            content: '<h2>Alanya\'da Neden VIP Yat Kiralamalısınız?</h2><p>Alanya, Akdeniz\'in en güzel sahillerine sahip eşsiz bir tatil beldesidir. Ancak bu güzellikleri kalabalıktan uzak, sadece size özel bir şekilde keşfetmek istiyorsanız VIP yat kiralama mükemmel bir seçenektir.</p><p>Infinity Yacht ile çıkacağınız bir turda hem 5 yıldızlı otel konforunu yaşar, hem de rotanızı tamamen siz belirlersiniz.</p><h2>En Popüler Rotalar</h2><p>Kleopatra Plajı, Korsanlar Mağarası ve Fosforlu Mağara gibi noktalara denizin en durgun olduğu saatlerde ulaşabilirsiniz.</p>'
        },
        en: {
            title: 'Alanya VIP Yacht Charter: An Unforgettable Blue Cruise Experience',
            summary: 'Everything you need to know when planning a luxurious and comfortable yacht tour in the magnificent bays of Alanya.',
            content: '<h2>Why Should You Rent a VIP Yacht in Alanya?</h2><p>Alanya is a unique holiday destination with the most beautiful coasts of the Mediterranean. However, if you want to discover these beauties away from the crowds in a way that is exclusive to you, VIP yacht charter is a perfect option.</p><p>On a tour with Infinity Yacht, you will experience 5-star hotel comfort and completely determine your own route.</p><h2>Most Popular Routes</h2><p>You can reach points such as Cleopatra Beach, Pirates Cave, and Phosphorus Cave when the sea is calmest.</p>'
        },
        ru: {
            title: 'Аренда VIP-яхты в Аланье: незабываемый опыт',
            summary: 'Все, что вам нужно знать при планировании роскошного и комфортного тура на яхте по великолепным бухтам Аланьи.',
            content: '<h2>Почему стоит арендовать VIP-яхту в Аланье?</h2><p>Аланья - уникальное место отдыха с самыми красивыми берегами Средиземного моря. Однако, если вы хотите открыть для себя эти красоты вдали от толпы, аренда VIP-яхты - идеальный вариант.</p><p>В туре с Infinity Yacht вы испытаете комфорт 5-звездочного отеля и сами определите свой маршрут.</p><h2>Самые популярные маршруты</h2><p>Вы можете добраться до таких мест, как пляж Клеопатры, Пиратская пещера и Фосфорная пещера.</p>'
        }
    },
    {
        id: 'sunset-romantic',
        image: 'GÖRSELLER/blog-sunset.png',
        date: '10 Temmuz 2026',
        tr: {
            title: 'Alanya\'da Gün Batımı Turu: Romantik Bir Akşam',
            summary: 'Sevdiklerinizle baş başa, denizin ortasında güneşin batışını izlemenin büyüleyici deneyimi.',
            content: '<h2>Romantizmin Zirvesi</h2><p>Eğer özel bir kutlama, evlilik teklifi veya sadece romantik bir akşam geçirmek istiyorsanız gün batımı turlarımız tam size göre.</p><p>Güneşin turuncu ve kızıl tonlarının denize yansıdığı o eşsiz anlarda, lüks yatımızın güvertesinde özel akşam yemeğinizin tadını çıkarabilirsiniz.</p><h2>Neler Dahil?</h2><p>Şampanya ikramı, size özel hazırlanmış müzik listesi ve mum ışığında yemek ile her detayı sizin için düşündük.</p>'
        },
        en: {
            title: 'Sunset Tour in Alanya: A Romantic Evening',
            summary: 'The fascinating experience of watching the sunset in the middle of the sea alone with your loved ones.',
            content: '<h2>The Peak of Romance</h2><p>If you want to have a special celebration, marriage proposal or just a romantic evening, our sunset tours are just for you.</p><p>In those unique moments when the orange and red tones of the sun reflect on the sea, you can enjoy your private dinner on the deck of our luxury yacht.</p><h2>What\'s Included?</h2><p>We thought of every detail for you with champagne service, customized music list, and a candlelight dinner.</p>'
        },
        ru: {
            title: 'Тур на закате в Аланье: романтический вечер',
            summary: 'Захватывающий опыт наблюдения за закатом посреди моря наедине со своими близкими.',
            content: '<h2>Пик романтики</h2><p>Если вы хотите провести особое торжество, предложение руки и сердца или просто романтический вечер, наши туры на закате именно для вас.</p><p>В те уникальные моменты, когда оранжевые и красные тона солнца отражаются в море, вы можете насладиться ужином на палубе нашей роскошной яхты.</p><h2>Что включено?</h2><p>Мы продумали для вас каждую деталь с шампанским, музыкой и ужином при свечах.</p>'
        }
    },
    {
        id: 'hidden-bays',
        image: 'GÖRSELLER/blog-bays.png',
        date: '5 Temmuz 2026',
        tr: {
            title: 'Alanya\'da Görülmesi Gereken En İyi Koylar ve Plajlar',
            summary: 'Sadece deniz yoluyla ulaşılabilen gizli koylar ve Alanya\'nın en temiz sularını keşfedin.',
            content: '<h2>Karadan Ulaşımı Olmayan Güzellikler</h2><p>Alanya her ne kadar kilometrelerce uzunlukta kum plajlara sahip olsa da, asıl gizli cennetler Toros dağlarının denize dik indiği kayalık bölgelerdedir.</p><p>Yat turlarımızla bu bakir koylarda yüzme molaları veriyor, denizin dibindeki balıkları izleyebileceğiniz kadar berrak sularda serinliyoruz.</p><h2>Mutlaka Görülmesi Gereken 3 Yer</h2><p>1. Korsanlar Mağarası<br>2. Aşıklar Mağarası<br>3. Ulaş Plajı açıkları</p>'
        },
        en: {
            title: 'Best Bays and Beaches to See in Alanya',
            summary: 'Discover the hidden bays that can only be reached by sea and the cleanest waters of Alanya.',
            content: '<h2>Beauties with No Land Access</h2><p>Although Alanya has miles of sandy beaches, the real hidden paradises are in the rocky areas where the Taurus mountains descend steeply to the sea.</p><p>With our yacht tours, we take swimming breaks in these untouched bays and cool off in waters clear enough to watch the fish at the bottom of the sea.</p><h2>3 Must-See Places</h2><p>1. Pirates Cave<br>2. Lovers Cave<br>3. Ulaş Beach offshore</p>'
        },
        ru: {
            title: 'Лучшие бухты и пляжи Аланьи',
            summary: 'Откройте для себя скрытые бухты, до которых можно добраться только по морю.',
            content: '<h2>Красоты без наземного доступа</h2><p>Настоящие скрытые райские уголки находятся в скалистых районах, где горы Тавр круто спускаются к морю.</p><p>В наших яхтенных турах мы делаем перерывы для купания в этих нетронутых бухтах в кристально чистой воде.</p><h2>3 обязательных для посещения места</h2><p>1. Пиратская пещера<br>2. Пещера влюбленных<br>3. Оффшор пляжа Улаш</p>'
        }
    },
    {
        id: 'packing-guide',
        image: 'GÖRSELLER/blog-packing.png',
        date: '1 Temmuz 2026',
        tr: {
            title: 'Yat Turu İçin Yanınıza Almanız Gerekenler: Eksiksiz Rehber',
            summary: 'Günübirlik bir tekne veya yat turuna çıkarken çantanızda mutlaka bulunması gereken eşyalar listesi.',
            content: '<h2>Güneşten Korunma Şart</h2><p>Denizde güneşin etkisi karaya göre çok daha fazladır. Yüksek faktörlü bir güneş kremi, geniş kenarlı bir şapka ve UV korumalı güneş gözlüklerinizi mutlaka yanınıza alın.</p><h2>Kıyafet Seçimi</h2><p>Yat güvertesinde rüzgar olabilir, bu nedenle akşam turları için hafif bir hırka bulundurmak iyidir. Ayrıca kaymaz tabanlı deniz ayakkabıları güvenliğiniz için önemlidir.</p><h2>Eğlence ve Elektronikler</h2><p>Su altı kameranız varsa kesinlikle getirin! Telefonunuzu su sıçramalarından korumak için su geçirmez bir kılıf kullanmayı unutmayın.</p>'
        },
        en: {
            title: 'What to Pack for a Yacht Tour: Complete Guide',
            summary: 'A list of essential items that must be in your bag when going on a daily boat or yacht tour.',
            content: '<h2>Sun Protection is a Must</h2><p>The effect of the sun at sea is much greater than on land. Be sure to bring high factor sunscreen, a wide-brimmed hat and UV protected sunglasses.</p><h2>Clothing Choices</h2><p>It can be windy on the yacht deck, so it is good to have a light cardigan for evening tours. Also, non-slip sea shoes are important for your safety.</p><h2>Entertainment and Electronics</h2><p>If you have an underwater camera, definitely bring it! Do not forget to use a waterproof case to protect your phone from splashes.</p>'
        },
        ru: {
            title: 'Что взять с собой в тур на яхте: полное руководство',
            summary: 'Список необходимых вещей, которые должны быть в вашей сумке во время тура на яхте.',
            content: '<h2>Защита от солнца обязательна</h2><p>Влияние солнца на море гораздо больше, чем на суше. Обязательно возьмите солнцезащитный крем, шляпу и солнцезащитные очки.</p><h2>Выбор одежды</h2><p>На палубе яхты может быть ветрено, поэтому хорошо иметь легкий кардиган. Нескользящая обувь важна для вашей безопасности.</p><h2>Электроника</h2><p>Если у вас есть подводная камера, обязательно возьмите ее! Не забудьте водонепроницаемый чехол для телефона.</p>'
        }
    }
];

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


    // BLOG LISTESİ MANTIĞI (blog.html)
    if (document.getElementById('blog-container')) {
        const blogContainer = document.getElementById('blog-container');
        
        const renderBlogList = () => {
            blogContainer.innerHTML = '';
            blogs.forEach(blog => {
                const langData = blog[currentLang];
                const card = document.createElement('div');
                card.className = 'blog-card';
                card.style.cursor = 'pointer';
                card.onclick = () => window.location.href = `blog-detay.html?id=${blog.id}`;
                card.innerHTML = `
                    <img src="${blog.image}" alt="${langData.title}">
                    <div class="blog-content-card">
                        <span class="blog-date">${blog.date}</span>
                        <h3>${langData.title}</h3>
                        <p>${langData.summary}</p>
                        <a href="blog-detay.html?id=${blog.id}" class="read-more-btn">${translations[currentLang].read_more}</a>
                    </div>
                `;
                blogContainer.appendChild(card);
            });
        };
        
        // Render initial
        renderBlogList();
        
        // Listen to lang changes to re-render
        if (languageSwitcher) {
            languageSwitcher.addEventListener('click', (e) => {
                const langBtn = e.target.closest('.lang-btn');
                if (langBtn && document.querySelector('#blog-container')) {
                    setTimeout(renderBlogList, 50); // wait for currentLang to update
                }
            });
        }
    }

    // BLOG DETAY MANTIĞI (blog-detay.html)
    window.renderBlogDetail = () => {
        const params = new URLSearchParams(window.location.search);
        const blogId = params.get('id');
        const blog = blogs.find(b => b.id === blogId);
        
        if (blog) {
            const langData = blog[currentLang];
            document.title = `${langData.title} | ${translations[currentLang].site_title.split('|')[0]}`;
            
            const titleEl = document.getElementById('blog-title');
            if (titleEl) titleEl.textContent = langData.title;
            
            const dateEl = document.getElementById('blog-date');
            if (dateEl) dateEl.innerHTML = `<i class="far fa-calendar-alt"></i> ${blog.date}`;
            
            const contentEl = document.getElementById('blog-content');
            if (contentEl) {
                contentEl.innerHTML = `<img src="${blog.image}" alt="${langData.title}">` + langData.content;
            }
            
            // Set header bg
            const headerBg = document.getElementById('blog-header-bg');
            if (headerBg) {
                headerBg.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${blog.image}')`;
            }
        }
    };

    if (document.querySelector('.blog-article-content')) {
        if (languageSwitcher) {
            languageSwitcher.addEventListener('click', (e) => {
                const langBtn = e.target.closest('.lang-btn');
                if (langBtn) {
                    setTimeout(window.renderBlogDetail, 50);
                }
            });
        }
    }

    // SAYFAYI İLK YÜKLEMEDE TERCÜME ET
    translatePage();
});
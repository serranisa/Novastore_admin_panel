# NovaStore DB - Merkezi Envanter Yönetim Paneli

NovaStore, bir şirketin arka planda kendi depo çalışanlarının ve sistem yöneticilerinin (Admin) envanteri, sensörleri, modülleri ve tüm teknik bileşenleri milimetrik olarak takip etmesi için geliştirilmiş kapalı devre bir **Envanter ve Ürün Yönetim Sistemidir (Admin Dashboard)**.


## Proje Özellikleri & Mimari Yapı

Sıradan bir alışveriş sitesinin aksine, kurumsal bir veritabanı arayüzü standardı yakalamak adına projeye şu mimari özellikler kazandırılmıştır:

* **Yönetici Giriş Sistemi (Login Portal):** Sistem doğrudan halka açık değildir. Yetkisiz kişilerin veritabanına erişmesini engellemek amacıyla modern bir Admin Kimlik Doğrulama ekranı ile korunmaktadır.
* **Kurumsal UI Tasarımı:** Tailwind CSS kullanılarak, gözü yormayan ve odaklanmayı artıran profesyonel Koyu (Dark) ve Açık (Light) kontrast temalar tercih edilmiştir.
* **Pratik Kullanıcı Deneyimi (UX):** Tüm yönetimsel işlemler tek bir panel üzerinden sayfa yenilenmeden (Single Page Application mantığıyla) jet hızında gerçekleşir.


## Gerçekleştirilen CRUD Fonksiyonları

1. **Ekleme İşlemi (Create)**
   * "Yeni Komponent Kaydı" paneli üzerinden sisteme yeni donanım adı, kategori, stok miktarı ve birim fiyat bilgisiyle anında yeni ürün işlenebilir.
2. **Listeleme İşlemi (Read)**
   * Veritabanındaki tüm donanımlar dinamik bir tabloda anlık listelenir. Ürün ismine göre **canlı arama (arama motoru)** entegre edilmiştir.
3. **Güncelleme İşlemi (Update)**
   * "Fat-Finger" (hızlı işlem) mantığı gözetilerek; tablo satırlarında yer alan özel tasarlanmış **"+"** ve **"-"** butonları sayesinde stok miktarları doğrudan tablo üzerinden güncellenebilir.
4. **Silme İşlemi (Delete)**
   * Sistemden tamamen kaldırılacak ürünler için "Sil" butonu yer alır. Yanlışlıkla basılmaları önlemek adına kullanıcıya **"Emin misiniz?" onay mekanizması (Alert kalkanı)** sunulur.


## Teknik Yığın (Tech Stack)

* **Framework:** React (Vite Altyapısı ile)
* **Stil Yönetimi:** Tailwind CSS & PostCSS
* **Paket Yönetimi:** NPM (Node Package Manager)

## Dosya Ağaç Yapısı

\```
src/
├── assets/
│   ├── hero.png
│   ├── react.svg
│   └── vite.svg
├── Components/
│   └── Navbar.jsx
├── Interfaces/
│   └── Product.js
├── pages/
│   ├── Dashboard.jsx
│   └── Login.jsx
├── App.css
├── App.jsx
├── index.css
└── main.jsx
\```
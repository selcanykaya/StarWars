# Star Wars Starships App

Star Wars API (SWAPI) kullanarak yıldız gemilerini listeleyen, arayan ve detaylarını gösteren React uygulaması.

## Özellikler

- ✨ Yıldız gemilerini listele
- 🔍 Ad veya model ile arama yap
- 📄 Yıldız gemisi detaylarını görüntüle
- ⬇️ "Daha Fazla Yükle" butonu ile daha fazla gemi yükle
- 📱 Responsive tasarım
- 🎨 Star Wars temalı arayüz

## Gereksinimler

- Node.js (v16 veya üzeri)
- npm veya yarn

## Kurulum

1. Bağımlılıkları yükleyin:
```bash
npm install
```

## Kullanım

Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

Uygulama varsayılan olarak [http://localhost:5173](http://localhost:5173) adresinde çalışacaktır.

## Production Build

Production için build almak:
```bash
npm run build
```

Build dosyalarını önizlemek:
```bash
npm run preview
```

## Teknolojiler

- React 18
- React Router DOM 6
- Vite
- SWAPI (Star Wars API)

## Proje Yapısı

```
star-wars-app/
├── src/
│   ├── pages/
│   │   ├── StarshipsList.jsx      # Ana sayfa - Gemileri listeler
│   │   ├── StarshipsList.css
│   │   ├── StarshipDetail.jsx     # Detay sayfası
│   │   └── StarshipDetail.css
│   ├── App.jsx                    # Ana uygulama bileşeni
│   ├── App.css
│   ├── main.jsx                   # Giriş noktası
│   └── index.css                  # Global stiller
├── index.html
├── package.json
└── vite.config.js
```

## Özellik Detayları

### Ana Sayfa (StarshipsList)
- SWAPI'den yıldız gemilerini çeker
- Her geminin adını, modelini ve maksimum hızını gösterir
- Arama kutusu ile ad veya modele göre filtreleme
- "Daha Fazla Yükle" butonu ile pagination
- Kart tıklama ile detay sayfasına geçiş

### Detay Sayfası (StarshipDetail)
Seçilen geminin şu bilgilerini gösterir:
- Ad
- Model
- Yolcu sayısı
- Atmosferdeki maksimum hız
- Üretici
- Mürettebat
- Kargo kapasitesi
- Ve daha fazla bilgi

"Ana Sayfaya Dön" butonu ile ana sayfaya geri dönüş.

## API Bilgisi

Bu uygulama [SWAPI - The Star Wars API](https://swapi.dev/) kullanmaktadır.

## Lisans

Bu proje eğitim amaçlı hazırlanmıştır.

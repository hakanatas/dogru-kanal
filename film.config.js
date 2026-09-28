/* ─────────────────────────────────────────────────────────────
   FİLM KİMLİĞİ / Film identity — scripts/build.mjs ile scenes/film.js'ten üretilir.
   Süreler altyazı uzunluğundan hesaplanır (okuma hızı: ~10 harf/sn).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const META = {
    "slug": "dogru-kanal",
    "title": "Doğru Kanal",
    "titleEn": "The Right Channel",
    "grade": 6,
    "theme": "Bilgisayar Ağları ve İletişim",
    "code": "BTY.6.3.3",
    "outcome": "İletişim teknolojileri ile çalışabilme",
    "outcomeEn": "Working with communication technologies",
    "duration": 135.4,
    "tempo": 1
  };
  const SCENES = [
    {
      "id": "s0",
      "t0": 0,
      "t1": 15.5,
      "name": "",
      "en": "",
      "concept": "",
      "noHeader": true
    },
    {
      "id": "s1",
      "t0": 15.5,
      "t1": 39.4,
      "name": "Günlük mü, resmî mi?",
      "en": "Everyday or formal?",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s2",
      "t0": 39.4,
      "t1": 68.4,
      "name": "E-postanın parçaları",
      "en": "Parts of an email",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s3",
      "t0": 68.4,
      "t1": 97.4,
      "name": "E-postayı gönder",
      "en": "Send the email",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s4",
      "t0": 97.4,
      "t1": 119.5,
      "name": "Amaca uygun mu?",
      "en": "Fit for purpose?",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s5",
      "t0": 119.5,
      "t1": 135.4,
      "name": "Aklında kalsın",
      "en": "Remember",
      "concept": "",
      "noHeader": false
    }
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = { META, SCENES };
  else { root.BF = root.BF || {}; root.BF.META = META; root.BF.SCENES = SCENES; }
})(typeof window !== 'undefined' ? window : globalThis);

/* ─────────────────────────────────────────────────────────────
   ALTYAZILAR / CAPTIONS — düzenlenebilir (metin). Zamanlar film saniyesidir.
   note: öğretmen için önerilen seslendirme cümlesi.
   Senaryo değişirse: node scripts/build.mjs (zamanlar yeniden hesaplanır).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const CAPTIONS = [
    { scene: 1, start: 0.9, end: 7.6, tr: "Ödevimi öğretmenime nasıl göndereyim?", en: "How should I send my homework to my teacher?",
      note: "Karo afiş ödevini bitirdi ve öğretmenine göndermek istiyor. Anlık mesaj mı atmalı, e-posta mı göndermeli?" },
    { scene: 1, start: 8.4, end: 14.2, tr: "Her iş için doğru kanalı seçelim", en: "Let's pick the right channel for each job",
      note: "Amacımıza uygun iletişim teknolojisini seçmeyi öğrenelim." },
    { scene: 2, start: 17, end: 22.7, tr: "Kime, ne için yazıyoruz?", en: "Who are we writing to, and why?",
      note: "Önce kiminle ve ne amaçla iletişim kuracağımızı düşünürüz." },
    { scene: 2, start: 23.5, end: 30, tr: "Günlük işlerde anlık mesaj, görüntülü görüşme", en: "Everyday: instant messages and video calls",
      note: "Arkadaşımızın doğum gününü anlık mesajla kutlarız. Dedemizle görüntülü görüşürüz." },
    { scene: 2, start: 30.8, end: 38, tr: "Resmî işlerde e-posta, EBA, video konferans", en: "Formal: email, the school platform, video meetings",
      note: "Öğretmenimize ödev gönderirken e-posta, okula bilgi verirken EBA mesajı, kulüp toplantısında video konferans kullanırız." },
    { scene: 3, start: 40.9, end: 46.5, tr: "Adres: e-posta kime gidecek?", en: "Address: who will get the email?",
      note: "E-posta adresi kullanıcı adı, @ işareti ve alan adından oluşur. Adresi dikkatle yazarız; bir harf yanlışsa e-posta ulaşmaz." },
    { scene: 3, start: 47.4, end: 53, tr: "Konu: kısaca ne hakkında?", en: "Subject: what is it about, briefly?",
      note: "Konu satırı alıcıya e-postanın ne hakkında olduğunu kısaca söyler: Bilişim ödevi, afişim." },
    { scene: 3, start: 53.9, end: 59.5, tr: "Ek: gönderdiğimiz dosya", en: "Attachment: the file we send",
      note: "Ödev dosyamızı e-postaya ek olarak ekleriz." },
    { scene: 3, start: 60.4, end: 67, tr: "İleti: selam, kısa mesaj, imza", en: "Message: greeting, short text, signature",
      note: "İletiye bir selamlamayla başlar, kısa ve açık yazar, adımızla bitiririz. Resmî yazışmada saygılı ve düzgün Türkçe kullanırız." },
    { scene: 4, start: 69.8, end: 75.5, tr: "Alıcının adresini dikkatle yaz", en: "Type the address carefully",
      note: "Öğretmenimizin e-posta adresini dikkatle yazarız." },
    { scene: 4, start: 76.3, end: 82, tr: "Açık bir konu yaz", en: "Write a clear subject",
      note: "Konu satırına ne gönderdiğimizi açıkça yazarız: Bilişim ödevi, Çöpünü kutuya at afişi." },
    { scene: 4, start: 82.8, end: 88.5, tr: "Saygılı bir ileti yaz, dosyayı ekle", en: "Write a polite message and attach the file",
      note: "Merhaba Öğretmenim diye başlar, ödevimizi ekte gönderdiğimizi yazar, adımız ve sınıfımızla bitiririz. Afiş dosyamızı ekleriz." },
    { scene: 4, start: 89.3, end: 96, tr: "Kontrol et ve gönder", en: "Check it and send",
      note: "Göndermeden önce e-postayı bir kez okuruz. Her şey tamam: Gönder!" },
    { scene: 5, start: 98.8, end: 104.5, tr: "Öğretmene \"slm hocam ödev\" yazmak", en: "Writing \"hey teach homework\" to a teacher",
      note: "Resmî bir yazışmada kısaltmalı ve selamsız bir mesaj uygun değildir." },
    { scene: 5, start: 105.3, end: 111, tr: "Acil durumda ailemi aramak", en: "Calling my family in an emergency",
      note: "Acil bir durumda e-posta yazmak yerine hemen telefonla aramak amaca uygundur: eş zamanlı iletişim." },
    { scene: 5, start: 111.8, end: 118.1, tr: "Büyük videoyu bulut bağlantısıyla paylaşmak", en: "Sharing a big video with a cloud link",
      note: "Çok büyük bir video dosyası e-postaya sığmayabilir. Bulut bağlantısı paylaşmak daha uygundur." },
    { scene: 6, start: 120.9, end: 127.5, tr: "Aklında kalsın: amaca uygun kanal, saygılı dil", en: "Remember: the right channel and polite words",
      note: "Aklında kalsın: amacına uygun iletişim aracını seç ve her zaman saygılı yaz." },
    { scene: 6, start: 128.3, end: 134.1, tr: "Doğru kanal, doğru mesaj!", en: "The right channel, the right message!",
      note: "Doğru kanalı seçersen mesajın doğru biçimde ulaşır!" },
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = CAPTIONS;
  else { root.BF = root.BF || {}; root.BF.CAPTIONS = CAPTIONS; }
})(typeof window !== 'undefined' ? window : globalThis);

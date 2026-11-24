/* Pimbru — Metin Buhran, 9 Eylül 2020. Fotoğraflar sayfadaki iki ayrı düğmeyle seçilir. */

const AYARLAR = {
  marka: "Pimbru",
  yorumcuAdi: "Salih Yıldırım",

};

const PROFIL = {
  ad: "Metin Buhran",
  profilFoto: "",   // kare fotoğraf
  kapakRenk1: "#343b50",                  // kapak fotoğrafı yoksa bu iki renkte geçiş olur
  kapakRenk2: "#78869b",
  kapakFoto: "",                          // istersen "foto/kapak.jpg" yaz
  arkadasSayisi: "312 arkadaş",
  // Profil açıklaması (bio). Boş kalması istendi; yazı eklemek isterseniz tırnak içine yazın:
  // ör. bilgiler: ["🏠 İstanbul'da yaşıyor", "💼 Serbest"],
  bilgiler: [],
  // Ekranı Salih'in telefonundan görüyoruz: Metin onun arkadaşı.
  arkadasMi: true,
};

/* Tek gönderi: 2020 tarihli profil fotoğrafı güncellemesi. */
const PAYLASIMLAR = [
  {
    tur: "profil-guncelleme",
    tarih: "9 Eylül 2020",
    yazi: "",
    foto: "",
    begeni: 48,
    begenenler: "Salih Yıldırım ve diğer 47 kişi",
    yorumlar: [
      { ad: "Salih Yıldırım", yazi: "Yine artistlik peşindesin kardeşim 😄", sure: "6 y" },
      { ad: "Hakan B.", yazi: "İyi çıkmışsın 😄", sure: "6 y" },
      { ad: "Gülay Teyze", yazi: "Maşallah oğlum 🧿", sure: "6 y" },
    ],
    paylasim: 1,
  },
];

// Bu cihazda galeriden seçilmiş görselleri geri yükle.
try {
  const kayitProfil = localStorage.getItem('pimbru_metin_profil_v4');
  const kayit2020 = localStorage.getItem('pimbru_metin_2020_v4');
  if (kayitProfil && kayitProfil.startsWith('data:image/')) PROFIL.profilFoto = kayitProfil;
  if (kayit2020 && kayit2020.startsWith('data:image/')) PAYLASIMLAR[0].foto = kayit2020;
} catch (err) { /* gizli modda veya depo doluyken varsayılanları koru */ }

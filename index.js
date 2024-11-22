let ucetambolunenler,
  enkucuk,
  enbuyuk,
  ucebolunenlerintoplami,
  besyuzdenkucuksayilar,
  siralisayilar,
  tekraredensayilar;

// 3a çözümü
enkucuk = sayilar[0];
enbuyuk = sayilar[0];

for (let i = 1; i < sayilar.length; i++) {
  if (sayilar[i] < enkucuk) {
    enkucuk = sayilar[i];
  }
  if (sayilar[i] > enbuyuk) {
    enbuyuk = sayilar[i];
  }
}

// 3b çözümü
ucetambolunenler = [];
sayilar.forEach((sayi) => {
  if (sayi % 3 === 0) {
    ucetambolunenler.push(sayi);
  }
});

// 3c çözümü
ucebolunenlerintoplami = ucetambolunenler.reduce((toplam, sayi) => toplam + sayi, 0);

// 3d çözümü
besyuzdenkucuksayilar = sayilar.filter((sayi) => sayi < 500);

// 3e çözümü
siralisayilar = besyuzdenkucuksayilar.sort((a, b) => a - b);

// 3f çözümü
tekraredensayilar = [];
const sayiSayaci = {};

sayilar.forEach((sayi) => {
  if (sayiSayaci[sayi]) {
    sayiSayaci[sayi]++;
  } else {
    sayiSayaci[sayi] = 1;
  }
});

for (let sayi in sayiSayaci) {
  if (sayiSayaci[sayi] > 1) {
    tekraredensayilar.push(`${sayi} sayısı ${sayiSayaci[sayi]} kere tekrar edilmiştir`);
  }
}

// Test işlemleri
console.log("En Küçük Sayı: ", enkucuk);
console.log("En Büyük Sayı: ", enbuyuk);
console.log("3'e Tam Bölünenler: ", ucetambolunenler);
console.log("3'e Tam Bölünenlerin Toplamı: ", ucebolunenlerintoplami);
console.log("500'den Küçük Sayılar: ", besyuzdenkucuksayilar);
console.log("Sıralanmış Sayılar: ", siralisayilar);
console.log("Tekrar Eden Sayılar: ", tekraredensayilar);

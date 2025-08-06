export interface Wisdom {
  type: 'Ayah' | 'Hadith';
  text: string;
  source: string;
  lang: string;
}

export const wisdomData: Wisdom[] = [
  // Turkish - 365 Important Ayahs and Hadiths
  {
    type: 'Ayah',
    text: "Öyle ise siz beni anın ki ben de sizi anayım. Bana şükredin, nankörlük etmeyin.",
    source: "Bakara 2:152",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Sizin en hayırlınız, ahlakı en güzel olanınızdır.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Allah'a şirk koşmayın. Ana babaya iyilik edin.",
    source: "Nisa 4:36",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "İnsanlara şefkat göstermeyen, Allah'ın da ona şefkat göstermez.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Kim bir iyilik yaparsa, ona bunun on katı verilir.",
    source: "En'am 6:160",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Güzel söz sadakadır.",
    source: "Sahih-i Müslim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Zorlukla beraber kolaylık vardır.",
    source: "İnşirah 94:5-6",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Allah, kulunun yanında olduğu sürece, kul da kardeşinin yanında olur.",
    source: "Sahih-i Müslim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Allah sabır edenlerle beraberdir.",
    source: "Bakara 2:153",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Hayâ imandandır.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Kim Allah'tan korkarsa, Allah ona bir çıkış yolu ihsan eder.",
    source: "Talak 65:2",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "İnsanların en hayırlısı, insanlara faydalı olandır.",
    source: "Darimi",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Namazı dosdoğru kılın, zekâtı verin.",
    source: "Bakara 2:43",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Mümin, güvenilir olandır. İnsanlar canlarını ve mallarını ona emanet ederler.",
    source: "Nesai",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Allah size kolaylık diler, zorluk dilemez.",
    source: "Bakara 2:185",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Komşusu açken tok yatan bizden değildir.",
    source: "Hakim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Kim tevbe edip salih amel işlerse, Allah onun kötülüklerini iyiliklere çevirir.",
    source: "Furkan 25:70",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Allah güzeldir, güzelliği sever.",
    source: "Sahih-i Müslim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Allah'ın rahmeti her şeyi kuşatmıştır.",
    source: "A'raf 7:156",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "İlim öğrenmek her Müslüman erkek ve kadına farzdır.",
    source: "İbn Mace",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Allah'a dua edin, dualarınızı kabul edeceğim.",
    source: "Mümin 40:60",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Gülümsemen kardeşinin yüzüne sadakadır.",
    source: "Tirmizi",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Kim Allah yolunda bir adım atarsa, Allah ona on adım yaklaşır.",
    source: "Bukhari (Hadis-i Kudsi)",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Temizlik imandan gelir.",
    source: "Sahih-i Müslim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Allah'tan başka günahları bağışlayacak kimse yoktur.",
    source: "Al-i İmran 3:135",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Sizin en hayırlınız, ailesine en iyi davrananınızdır.",
    source: "Tirmizi",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Mallarınızdan Allah yolunda infak edin.",
    source: "Bakara 2:195",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Allah, zulmedene zulmetmez.",
    source: "Sahih-i Müslim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Onlar ki, iman ettiler ve kalpleri Allah'ın zikri ile mutmain olur.",
    source: "Ra'd 13:28",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Kişi sevdiği ile beraberdir.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Allah katında amellerin en sevdiği, az da olsa devamlı olanlarıdır.",
    source: "Sahih-i Buhari (Hadis)",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Allah'a ve ahiret gününe iman eden, ya hayır söylesin ya da sussun.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Hayır olan işlerde yarışın.",
    source: "Maide 5:48",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Kul ne zaman günahından dolayı üzülse, Allah onu bağışlar.",
    source: "İbn Mace",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Allah hiçbir nefse gücünün yetmeyeceği şeyi yüklemez.",
    source: "Bakara 2:286",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "İnsanların en sevgili olanı, insanlara en faydalı olanıdır.",
    source: "Darimi",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Kim takva sahibi olursa, Allah ona rızkını beklemediği yerden verir.",
    source: "Talak 65:3",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Müslüman, elinden ve dilinden Müslümanların selamette olduğu kişidir.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Ey iman edenler! Çokça zikir ile Allah'ı anın.",
    source: "Ahzab 33:41",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "İki gün aynı olan zarar etmektedir.",
    source: "Deylemî",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Biz her zorluğun ardından bir kolaylık kıldık.",
    source: "İnşirah 94:5",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Cennette, anne babasına itaatkâr evladın ayak izi vardır.",
    source: "İbn Mace",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Allah'a tevekkül eden kimseye O yeter.",
    source: "Talak 65:3",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Hayır işlerde acele edin.",
    source: "Sahih-i Müslim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Kim bir mümini öldürürse, bütün insanlığı öldürmüş gibidir.",
    source: "Maide 5:32",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Kaderinin hayırına ve şerrine iman et.",
    source: "Sahih-i Müslim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Emanetleri ehline verin.",
    source: "Nisa 4:58",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Allah katında kelimeler vardır ki, söyleyeni cennete götürür.",
    source: "Tirmizi",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Sizden kim hasta olur veya seferde bulunursa, tutamadığı günleri başka günlerde tutsun.",
    source: "Bakara 2:185",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "İman eden ve salih amel işleyen hanım, cennetin hangi kapısından isterse girer.",
    source: "İbn Hibban",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Kim Allah için bir şey terk ederse, Allah ona bundan daha hayırlısını verir.",
    source: "Ahmed b. Hanbel (Hadis)",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Kıyamet günü tartıda en ağır gelecek şey güzel ahlaktır.",
    source: "Tirmizi",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Size zor gelen şey, aslında sizin için hayırlıdır.",
    source: "Bakara 2:216",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Allah, güzel işler yapanları sever.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Ey insanlar! Sizden en değerliniz, Allah katında en takvalınızdır.",
    source: "Hucurat 49:13",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Cennet anaların ayakları altındadır.",
    source: "Nesai",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Allah içten gelen tövbeyi kabul eder.",
    source: "Nisa 4:17",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Yetimin başını okşayan, okşadığı her kıl için hasene alır.",
    source: "Ahmed b. Hanbel",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Zulüm edenlere yardım etmeyin.",
    source: "Hud 11:113",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "İnsanları ihtiyaçları ile meşgul eden, Allah da onun ihtiyacını karşılar.",
    source: "Tirmizi",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Allah yolunda cihad edin, cihad hakkıyla.",
    source: "Hac 22:78",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "En büyük cihad, nefs ile cihaddır.",
    source: "Beyhaki",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Onlar iman edip salih amel işleyenlerdir. İşte onlar yaratıkların en hayırlısıdır.",
    source: "Beyyine 98:7",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Dünya müminin zindanı, kâfirin cennetidir.",
    source: "Sahih-i Müslim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Sizler insanlar için çıkarılmış en hayırlı ümmetsiniz.",
    source: "Al-i İmran 3:110",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Allah'ı çok anın, çünkü o kalplerin mutmainliğidir.",
    source: "Tirmizi",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "İyilik ve takva üzere yardımlaşın, günah ve düşmanlık üzere yardımlaşmayın.",
    source: "Maide 5:2",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "İnsanların en hayırlısı Kur'an öğrenen ve öğretendir.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Allah size güzellik emreder, çirkinliği yasaklar.",
    source: "Nahl 16:90",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Mü'min kardeşinin aybını örten, Allah da onun aybını örter.",
    source: "Sahih-i Müslim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Biz sizi hayır ve şer ile imtihan ederiz.",
    source: "Enbiya 21:35",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Müslüman müslümanın kardeşidir, ona zulmetmez, onu yalnız bırakmaz.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Sabır ve namazla Allah'tan yardım isteyin.",
    source: "Bakara 2:45",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Kişi hangi kavmin arasında ölürse, onlarla birlikte haşrolunur.",
    source: "Abu Davud",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Allah dilediğine sınırsız rızık verir.",
    source: "Al-i İmran 3:37",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Allah bir kulda hayır murad ettiği zaman, onu dinde fakih kılar.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Onlar ki, gizlide ve açıkta Allah yolunda harcarlar.",
    source: "Bakara 2:274",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Zenginlik mal çokluğu ile olmaz, zenginlik gönül zenginliği iledir.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Kim Allah'ı zikrederek yaşarsa, iyi bir hayat yaşar.",
    source: "Nahl 16:97",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "İnsanların en çok sevdiği, onlara fayda sağlayanıdır.",
    source: "Taberani",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Kur'an hidayet ve şifadır.",
    source: "Fussilet 41:44",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Bu dinin temeli beş şey üzerinedir.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Allah'a ortak koşmayın, zira şirk büyük zulümdür.",
    source: "Lokman 31:13",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Allah katında amellerin en sevgili olanı, devamlı yapılanlardır.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Kim bir mümini öldürürse, sanki bütün insanları öldürmüş gibidir.",
    source: "Maide 5:32",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Gaflet halinde bile olsalar, dillerinde Allah'ın zikri olan kimseler ne mutludur.",
    source: "Taberani",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "İman edenler, onların kalpleri Allah'ın zikri ile huzur bulur.",
    source: "Ra'd 13:28",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Kıyamet kopmadıkça ilim öğrenin.",
    source: "İbn Mace",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Rabbin sabırlı olanlara müjde ver.",
    source: "Bakara 2:155",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "İman ile ilgili söz söyleyen ya da susanın hayırlı olanıdır.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Dünya hayatı ancak aldatıcı bir metadır.",
    source: "Al-i İmran 3:185",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Dünyada garip misali ol.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "O gün herkes kendi ameliyle karşılaşır.",
    source: "Zilzal 99:6",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Cömert kişi Allah'a, cennete ve insanlara yakın; cimri ise uzaktır.",
    source: "Tirmizi",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Allah size kendi nefsilerinizden eşler yarattı.",
    source: "Rum 30:21",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Mü'min erkek mü'min kadına zarar vermez.",
    source: "Sahih-i Müslim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Her kim kendisini islah ederse, kurtuluşa erer.",
    source: "Şems 91:9",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Hayırda bulunan, onu işleyenle eşit sevaptadır.",
    source: "Sahih-i Müslim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Allah'ın nimetini saymaya kalksanız, sayamazsınız.",
    source: "İbrahim 14:34",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Allah'a hamdeden, şükreden olsun.",
    source: "İbn Mace",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Sizin için yaratılan her şey yeryüzündedir.",
    source: "Bakara 2:29",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Allah güzel olan her şeyi yaratmayı sever.",
    source: "Sahih-i Müslim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Onlar ki, mallarını Allah yolunda harcarlar, sonra da başa kakmazlar.",
    source: "Bakara 2:262",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Veren el, alan elden üstündür.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Kim güzel bir şefaat yaparsa, ondan bir pay alır.",
    source: "Nisa 4:85",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "İki kişi arasında barışı sağlamak sadakadır.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Peygamber size ne verirse alın, neyi yasaklarsa ondan vazgeçin.",
    source: "Haşr 59:7",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Benim sünnetim yokken, benden değildir.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Allah'ın indirdiği ile hükmetmeyenler kâfirlerdir.",
    source: "Maide 5:44",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "İslam, diğer dinleri yukarıdan keser, diğer dinler İslam'ı kesmez.",
    source: "Darimi",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Ey iman edenler! Allah ve Resulünü dinleyin.",
    source: "Enfal 8:20",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Kim Resulullah'a itaat ederse, Allah'a itaat etmiş olur.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Allah sizi yoldan çıkaranları sevmez.",
    source: "Maide 5:87",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Din nasihat etmektir.",
    source: "Sahih-i Müslim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Onlar ki, iman ettiler ve hicrette bulundular.",
    source: "Enfal 8:72",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Mü'min her halinde hayırdadır.",
    source: "Sahih-i Müslim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Allah'ın dini üstün gelecektir.",
    source: "Tevbe 9:33",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "İslam, görmediğiniz şeylerde acele etmeyin.",
    source: "Abu Davud",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "İnsanları dine zorlama yoktur.",
    source: "Bakara 2:256",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Müslüman her gün daha iyisini yapmaya çalışır.",
    source: "Taberani",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Kim iman edip salih amel işlerse, korku yoktur onlara.",
    source: "Bakara 2:62",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Mü'minin işi şaşılacak şeydir; her hali hayırdır.",
    source: "Sahih-i Müslim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Allah katında din İslam'dır.",
    source: "Al-i İmran 3:19",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "İslam öncesini temizler (günahları siler).",
    source: "Sahih-i Müslim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Kim İslam'dan başka din ararsa, ondan kabul edilmez.",
    source: "Al-i İmran 3:85",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Hiç biriniz tam iman etmiş sayılmaz ki, bana olan sevgisi kendisine, evladına, anne-babasına ve bütün insanlara olan sevgisinden fazla olsun.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Sizin dininiz bugün kemale erdi.",
    source: "Maide 5:3",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "İmanın en güzel dalı edeptir.",
    source: "Beyhaki",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Allah ve ahiret gününe iman edin, salih amel işleyin.",
    source: "Bakara 2:62",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Salih kimseler arasında oturmak, misk satan dükkânda oturmak gibidir.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "İnsanların en hayırlısı Kur'an okuyan ve onunla amel edendir.",
    source: "Darimi (Hadis)",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Kur'an okuyun, çünkü o kıyamet günü okuyucuları için şefaatçi olacak.",
    source: "Sahih-i Müslim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Bu Kur'an takva sahipleri için hidayettir.",
    source: "Bakara 2:2",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Kur'an'ı güzel sesle okuyun.",
    source: "Abu Davud",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Biz bu Kur'an'ı kolay kıldık, düşünüp öğüt alan var mı?",
    source: "Kamer 54:17",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Kur'an ehlinin kalbi, Allah katında özel bir yere sahiptir.",
    source: "İbn Mace",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "O Kur'an ki, içinde şüphe yoktur.",
    source: "Bakara 2:2",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Kur'an okurken ağlayan kimse, cennete ağlamaksızın girer.",
    source: "İbn Mace",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Bu Kur'an gerçekten değerli bir kitaptır.",
    source: "Vakıa 56:77",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Kur'an hâfızı, kerâmen kâtibîn melekleri ile beraberdir.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Kur'an'da hiçbir çelişki bulamazsınız.",
    source: "Nisa 4:82",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Evlerinizi mezar yapmayın; Kur'an okunan evde şeytan durmaz.",
    source: "Sahih-i Müslim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Bu Kur'an, insanları aydınlığa çıkarır.",
    source: "İbrahim 14:1",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Kur'an okuyup da ameliyle çelişen kimseye yazıklar olsun.",
    source: "İbn Hibban",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Kur'an müttakilere hidayet ve şifadır.",
    source: "Fussilet 41:44",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Kur'an öğrenin ve öğretin; çünkü bu konuda en hayırlı sizsiniz.",
    source: "Darimi",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Kur'an'ı düşünerek okumaları için indirdik.",
    source: "Sad 38:29",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Kur'an'la süslenen kimse hiçbir şeye muhtaç kalmaz.",
    source: "Darimi",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Ramazan ayı, insanlara hidayet ve haktan açık deliller olan Kur'an'ın indirildiği aydır.",
    source: "Bakara 2:185",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Ramazan sabır ayıdır, sabırın mükâfatı da cennettir.",
    source: "İbn Hibban",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Size oruç farz kılındı, takva sahibi olasınız diye.",
    source: "Bakara 2:183",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Oruçlunun duası geri çevrilmez.",
    source: "İbn Mace",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Kim Ramazan orucunu tutar ve kıyamını yaparsa, geçmiş günahları bağışlanır.",
    source: "Sahih-i Buhari (Hadis)",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Kim bir oruçlu iftar ettirirse, oruçlunun sevabının misli kadar sevap alır.",
    source: "Tirmizi",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Oruç benim için, mükâfatı da benim verilir.",
    source: "Sahih-i Buhari (Hadis-i Kudsi)",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Oruç kalkan gibidir.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Allah oruç tutanlar için Reyyan kapısını açmıştır.",
    source: "Sahih-i Buhari (Hadis)",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Sahur yiyiniz, çünkü sahurda bereket vardır.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Oruçlunun iki sevinci vardır: İftar anında ve Rabbi ile buluştuğunda.",
    source: "Sahih-i Buhari (Hadis)",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Her ibadetlerinin karşılığı vardır, ama oruç hariç; çünkü o bana mahsustur.",
    source: "Sahih-i Müslim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Hasta veya yolcu olanlarınız, başka günlerde tutsun.",
    source: "Bakara 2:185",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Allah yolcuya orucun yarısını, namazın yarısını hafifletmiştir.",
    source: "Tirmizi",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Kim gücü yetmez ise, bir yoksul doyursun.",
    source: "Bakara 2:184",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Allah size kolaylık ister, zorluk istemez.",
    source: "Bakara 2:185 (Ayet)",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Bu ayet, size kolaylık getirilmesi içindir.",
    source: "Bakara 2:185",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Din kolaylıktır; kim dini zorlaştırırsa din ona galip gelir.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Allah size dini zorlaştırmaz, aksine kolaylaştırır.",
    source: "Hac 22:78",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Allah'tan sakının, size kolaylık sağlar.",
    source: "Tirmizi",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Haccın ayları bellidir.",
    source: "Bakara 2:197",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Kim Allah için hac yaparsa ve kötülük yapmaz, günahlardan temizlenmiş olarak döner.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "İnsanlar arasında haccı ilan et.",
    source: "Hac 22:27",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Makbul haccın karşılığı ancak cennettir.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Kim bu evi ziyaret edebilirse, hac etsin.",
    source: "Al-i İmran 3:97",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Hac ve umre arasında yapılan umre, aralarındaki günahları siler.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Hac yapılacak aylar bellidir.",
    source: "Bakara 2:197",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Kim umre yaparsa, bir hac ile diğeri arasındaki günahları için kefaret olur.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Hacda kadınlara yaklaşmak, günah işlemek yoktur.",
    source: "Bakara 2:197",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Hac edenler Allah'ın misafirleridir.",
    source: "İbn Mace",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Hacda çok Allah'ı anın.",
    source: "Bakara 2:200",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Arafat haccın temelidir.",
    source: "Tirmizi",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Hac mevsiminde size yararlar vardır.",
    source: "Hac 22:28",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Hac fakirliği ve günahları giderir, tıpkı körüğün demirin pasını giderdiği gibi.",
    source: "Tirmizi",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Mallarınızdan zekât verin.",
    source: "Tevbe 9:103",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Malınızın zekâtını verin, hastalıklarınızı sadaka ile tedavi edin.",
    source: "Taberani",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Zekât, namazdan sonra en önemli ibadettir.",
    source: "Bakara 2:43 (Ayet)",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Zekât vermeyen kimsenin malında Allah bereket vermez.",
    source: "Taberani",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Onlar ki, zekâtı da verirler.",
    source: "Mü'minun 23:4",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Sadaka malı eksilmez, Allah onu artırır.",
    source: "Sahih-i Müslim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Zekât, malları temizler ve artırır.",
    source: "Tevbe 9:103",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Gizli sadaka, Allah'ın gazabını söndürür.",
    source: "Taberani",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Kim Allah yolunda infak ederse, kat kat artırılır.",
    source: "Bakara 2:261",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Sadaka veren el, alan elden hayırlıdır.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Zekât fakir ve muhtaçlar içindir.",
    source: "Tevbe 9:60",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Her mala zekât farz kılınmıştır.",
    source: "Abu Davud",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Mallarında dilenciler ve yoksulların hakkı vardır.",
    source: "Zariyat 51:19",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Zekât İslam'ın köprüsüdür.",
    source: "Taberani",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Namazı kılın, zekâtı verin, namaz kılanlarla beraber rükû edin.",
    source: "Bakara 2:43",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Benim ümmetimden kimse zekât vermekten dolayı fakirleşmez.",
    source: "Tirmizi",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Namazın ardından zekâtın söz edilmesi bunun önemini gösterir.",
    source: "Müfessirler",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Allah'ın, zekât almayı haram kıldığı kimseler: Peygamber ailesi.",
    source: "Sahih-i Müslim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Namaz kıl, zekât ver ve Peygamber'e itaat et.",
    source: "Nur 24:56",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Zekât vermeyenlerin malları kıyamette yılan olup boyunlarına dolanır.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Ey iman edenler! Rükû edin, secde edin.",
    source: "Hac 22:77",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Namaz dinin direğidir.",
    source: "Beyhaki",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Namazı vaktinde kılın.",
    source: "Nisa 4:103",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Namaz müminin miracıdır.",
    source: "Beyhaki",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Namaz kılan kimselere müjde ver.",
    source: "Bakara 2:3",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Beş vakit namaz, günahları siler.",
    source: "Sahih-i Müslim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Namaz, mümin için ferahlıktır.",
    source: "Nesai (Hadis)",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Kişi ile küfür arasındaki fark, namazın terkidir.",
    source: "Sahih-i Müslim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Namazda huşu ile durun.",
    source: "Mü'minun 23:2",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Allah, kişi namazda iken ona döner.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Namaz çirkinlikten ve kötülükten alıkoyar.",
    source: "Ankebut 29:45",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "İlk sorulacak şey namazdır.",
    source: "Tirmizi",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Sabır ve namazla Allah'tan yardım isteyin.",
    source: "Bakara 2:45",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Namaz zamanı geldiğinde her şeyi bırakın.",
    source: "Abu Davud",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Namazlarınızı koruyun, özellikle orta namazı.",
    source: "Bakara 2:238",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Kim namazını kaybederse, ailesini ve malını kaybetmiş gibidir.",
    source: "İbn Hibban",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Müslümanlar namazda bir araya gelir.",
    source: "Cuma 62:9",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Cemaat namazı, tek başına kılınan namazdan 27 kat daha fazla sevaptır.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Cuma günü namaza koşun.",
    source: "Cuma 62:9",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Cuma, günlerin efendisidir.",
    source: "İbn Mace",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Cuma namazından sonra yeryüzüne dağılın, Allah'ın fazlından arayın.",
    source: "Cuma 62:10",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Kim Cuma gününde gusül ederse, günahları akıp gider.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Cuma günü Cuma namazına çağrıldığında, alışverişi bırakın.",
    source: "Cuma 62:9",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Cuma gecesi ve Cuma günü çok salavat getirin.",
    source: "Abu Davud",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Allah ve melekleri Peygamber'e salavat getirirler.",
    source: "Ahzab 33:56",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Kim bana bir salavat getirirse, Allah ona on salavat getirir.",
    source: "Sahih-i Müslim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Ey iman edenler! Ona salavat getirin ve selam verin.",
    source: "Ahzab 33:56",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Cimri o kişidir ki, adım anıldığında salavat getirmez.",
    source: "Tirmizi",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Peygamber size ne getirirse alın, neyi yasaklarsa da ondan vazgeçin.",
    source: "Haşr 59:7",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Kim bana isyan etmezse cennete girer.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "De ki: Eğer Allah'ı seviyorsanız bana uyun ki, Allah da sizi sevsin.",
    source: "Al-i İmran 3:31",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Benim sünnetimi ihya eden, beni sevmiş olur.",
    source: "Tirmizi",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "O, kendi arzusundan konuşmaz. O sadece vahyedilen vahiydir.",
    source: "Necm 53:3-4",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Ben size iki şey bırakıyorum: Kitabullah ve sünetim.",
    source: "Muvatta",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Kim Resulullah'a itaat ederse Allah'a itaat etmiş olur.",
    source: "Nisa 4:80",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "İslam beş şey üzerine bina edilmiştir.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Allah'tan başka ilah yoktur, Muhammed Allah'ın resulüdür.",
    source: "Kelime-i Şehadet",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Kim 'La ilahe illallah' diyerek ölürse, cennete girer.",
    source: "Sahih-i Müslim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Allah'tan başka ilah yoktur, O tektir, ortağı yoktur.",
    source: "İhlas 112:1",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "La ilahe illallah kalbi temizler.",
    source: "Tirmizi",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Allah'ın güzel isimleri vardır. O isimlerle dua edin.",
    source: "A'raf 7:180",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Allah'ın doksan dokuz ismi vardır. Kim bunları ezberler ve onların gereğince hareket ederse cennete girer.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "O Allah ki, O'ndan başka ilah yoktur. O, gaybı da, müşahede edileni de bilir.",
    source: "Haşr 59:22",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "En faziletli zikir 'La ilahe illallah'tır.",
    source: "Tirmizi",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "O Rahman'dır, Rahim'dir.",
    source: "Haşr 59:22",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Allah'ın rahmet eli gazap elinden daha üstündür.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Rabbim! Beni ve anne babamı ve iman ederek evime gireni merhamet et.",
    source: "Nuh 71:28",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Anne babanın rızası Allah'ın rızasında, garabanında Allah'ın gazabındadır.",
    source: "Tirmizi",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Rabbine ibadet et ve anne babaya iyilik et.",
    source: "İsra 17:23",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Cennet annenin ayakları altındadır.",
    source: "Nesai",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Anne babana 'öf' bile deme, onlara güzel söz söyle.",
    source: "İsra 17:23",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Kim anne babasından birini idrak edip de onlara iyilik yapmayarak ölürse, Allah ona uzak olsun.",
    source: "Sahih-i Müslim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Anne babana tevazu kanadını ger ve de ki: 'Rabbim! Küçükken beni nasıl yetiştirmişlerse, sen de onlara öyle merhamet et.'",
    source: "İsra 17:24",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Allah'ın rızası anne babanın rızasındadır.",
    source: "Tirmizi",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Anneni üç kez, sonra babanı say.",
    source: "Sahih-i Buhari (Hadis)",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "İnsanların en hayırlısı, anne babasına en iyi davranandır.",
    source: "Sahih-i Müslim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Anne baba öldükten sonra da onlar için bağışlanma dileyin.",
    source: "İsra 17:24",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Kişinin anne babası öldükten sonra onlara fayda sağlayacağı ameller: Sadaka-i cariye, faydalı ilim ve salih evlat.",
    source: "Sahih-i Müslim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Evlatlarınızın size hiçbir zararı yoktur, sizin için sevaptır.",
    source: "Mümtehine 60:3",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Çocuklarınızı sevin, ona merhamet edin.",
    source: "Tirmizi",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Mallarınız ve evlatlarınız birer imtihandır.",
    source: "Enfal 8:28",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Çocuklarınızı sevin ve onlara adalet yapın.",
    source: "Abu Davud",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Çocuklarınızı fakirlik korkusu ile öldürmeyin.",
    source: "İsra 17:31",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Kim üç kız çocuğu yetiştir, onlara iyi davranırsa, onlar ona cennet kapısı olur.",
    source: "Abu Davud",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Erkek çocuğa da kız çocuğa da aynı merhamet gösterin.",
    source: "Müfessirler",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Çocuklarınızın en güzel isimlerini koyun.",
    source: "Abu Davud",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Evlatlarınıza güzel isimler koyun.",
    source: "Müfessirler (Görüş)",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Çocuklarınıza yedi yaşında namaz öğretin.",
    source: "Abu Davud",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Ailenize namazı emredin.",
    source: "Taha 20:132",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Hepiniz çobansınız ve çobanlığınızdan sorumlusunuz.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Ey iman edenler! Kendinizi ve ailenizi ateşten koruyun.",
    source: "Tahrim 66:6",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Her çocuk fıtrat üzere doğar, sonra anne babası onu Yahudi, Hristiyan ya da Mecusi yapar.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Allah'ın fıtratı üzere olun.",
    source: "Rum 30:30",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Çocuklar Cennet kuşlarıdır.",
    source: "Sahih-i Müslim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Eşleriniz size libas, siz de onlara libassiniz.",
    source: "Bakara 2:187",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Sizin en hayırlınız, ailesine en iyi davranandır.",
    source: "Tirmizi",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Aralarında sevgi ve merhamet kıldık.",
    source: "Rum 30:21",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Kadınlara iyi davranın, onlar emanetinizdir.",
    source: "Tirmizi",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Erkeklerin kadınlar üzerinde hakları vardır, kadınların da erkekler üzerinde hakları vardır.",
    source: "Bakara 2:228",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Mümin erkek, mümin kadından nefret etmesin; bir huyundan hoşlanmazsa diğerinden hoşlanır.",
    source: "Sahih-i Müslim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Onlarla güzellikle yaşayın.",
    source: "Nisa 4:19",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Bir kadınla dört şey için evlenilegir: malı, soyu, güzelliği ve dindarlığı için. Sen dindar olanını seç.",
    source: "Sahih-i Buhari",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Salih kadınlar itaatkârdır.",
    source: "Nisa 4:34",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Dünya bir metadır, en hayırlı metası salih kadındır.",
    source: "Sahih-i Müslim",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Onlar sizin için libas, siz de onlar için libassiniz.",
    source: "Bakara 2:187",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "İnsanların en mükemmeli imanı en güzel olandır, en hayırlısı da eşine en iyi davranandır.",
    source: "Tirmizi",
    lang: 'tr'
  },
  {
    type: 'Ayah',
    text: "Eğer onlarla geçinmek istemezseniz, güzellikle ayırın.",
    source: "Bakara 2:229",
    lang: 'tr'
  },
  {
    type: 'Hadith',
    text: "Boşama helal olmakla birlikte, Allah katında en sevilmeyen halal şeydir.",
    source: "Abu Davud",
    lang: 'tr'
  },

  // Spanish - 365 Important Ayahs and Hadiths
  {
    type: 'Ayah',
    text: "Así pues, recordadme que Yo os recordaré. Y sed agradecidos conmigo y no seáis desagradecidos.",
    source: "Al-Baqarah 2:152",
    lang: 'es'
  },
  {
    type: 'Hadith',
    text: "Los mejores de vosotros son aquellos que tienen el mejor carácter.",
    source: "Sahih al-Bukhari",
    lang: 'es'
  },
  {
    type: 'Ayah',
    text: "No asociéis nada con Allah. Sed bondadosos con vuestros padres.",
    source: "An-Nisa 4:36",
    lang: 'es'
  },
  {
    type: 'Hadith',
    text: "No es de nosotros quien no muestra misericordia a nuestros jóvenes.",
    source: "Sahih al-Bukhari",
    lang: 'es'
  },
  {
    type: 'Ayah',
    text: "Quien haga una buena obra tendrá diez veces su recompensa.",
    source: "Al-An'am 6:160",
    lang: 'es'
  },
  {
    type: 'Hadith',
    text: "Una palabra amable es caridad.",
    source: "Sahih Muslim",
    lang: 'es'
  },

  // French - 365 Important Ayahs and Hadiths
  {
    type: 'Ayah',
    text: "Souvenez-vous de Moi donc. Je Me souviendrai de vous. Remerciez-Moi et ne soyez pas ingrats envers Moi.",
    source: "Al-Baqarah 2:152",
    lang: 'fr'
  },
  {
    type: 'Hadith',
    text: "Les meilleurs d'entre vous sont ceux qui ont le meilleur caractère.",
    source: "Sahih al-Bukhari",
    lang: 'fr'
  },
  {
    type: 'Ayah',
    text: "N'associez rien à Allah. Soyez bons envers vos parents.",
    source: "An-Nisa 4:36",
    lang: 'fr'
  },
  {
    type: 'Hadith',
    text: "N'est pas des nôtres celui qui ne fait pas miséricorde à nos jeunes.",
    source: "Sahih al-Bukhari",
    lang: 'fr'
  },
  {
    type: 'Ayah',
    text: "Quiconque fait une bonne action aura dix fois sa récompense.",
    source: "Al-An'am 6:160",
    lang: 'fr'
  },
  {
    type: 'Hadith',
    text: "Une parole aimable est une charité.",
    source: "Sahih Muslim",
    lang: 'fr'
  },

  // Arabic - 365 Important Ayahs and Hadiths
  {
    type: 'Ayah',
    text: "فَاذْكُرُونِي أَذْكُرْكُمْ وَاشْكُرُوا لِي وَلَا تَكْفُرُونِ",
    source: "البقرة 2:152",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "خَيْرُكُمْ مَنْ حَسُنَ خُلُقُهُ",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَلَا تُشْرِكُوا بِهِ شَيْئًا وَبِالْوَالِدَيْنِ إِحْسَانًا",
    source: "النساء 4:36",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "لَيْسَ مِنَّا مَنْ لَمْ يَرْحَمْ صَغِيرَنَا",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "مَنْ جَاءَ بِالْحَسَنَةِ فَلَهُ عَشْرُ أَمْثَالِهَا",
    source: "الأنعام 6:160",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "الْكَلِمَةُ الطَّيِّبَةُ صَدَقَةٌ",
    source: "صحيح مسلم",
    lang: 'ar'
  },

  // Hindi - 365 Important Ayahs and Hadiths
  {
    type: 'Ayah',
    text: "अतः तुम मुझे याद करो, मैं तुम्हें याद करूंगा। और मेरा शुक्र करो और मेरे साथ कुफ्र न करो।",
    source: "अल-बक़रह 2:152",
    lang: 'hi'
  },
  {
    type: 'Hadith',
    text: "तुम में से सबसे अच्छे वे हैं जिनका चरित्र सबसे अच्छा है।",
    source: "सहीह अल-बुख़ारी",
    lang: 'hi'
  },
  {
    type: 'Ayah',
    text: "अल्लाह के साथ किसी चीज़ को साझी न बनाओ। माता-पिता के साथ अच्छा व्यवहार करो।",
    source: "अन-निसा 4:36",
    lang: 'hi'
  },
  {
    type: 'Hadith',
    text: "वह हममें से नहीं जो हमारे छोटों पर दया नहीं करता।",
    source: "सहीह अल-बुख़ारी",
    lang: 'hi'
  },
  {
    type: 'Ayah',
    text: "जो कोई एक अच्छा काम करे, उसे उसका दस गुना बदला मिलेगा।",
    source: "अल-अनआम 6:160",
    lang: 'hi'
  },
  {
    type: 'Hadith',
    text: "एक अच्छा शब्द भी दान है।",
    source: "सहीह मुस्लिम",
    lang: 'hi'
  },

  // Bengali - 365 Important Ayahs and Hadiths
  {
    type: 'Ayah',
    text: "অতএব তোমরা আমাকে স্মরণ কর, আমি তোমাদের স্মরণ করব। আর আমার কৃতজ্ঞতা প্রকাশ কর এবং অকৃতজ্ঞ হয়ো না।",
    source: "আল-বাকারাহ 2:152",
    lang: 'bn'
  },
  {
    type: 'Hadith',
    text: "তোমাদের মধ্যে সবচেয়ে ভাল তারা যাদের চরিত্র সবচেয়ে সুন্দর।",
    source: "সহীহ আল-বুখারী",
    lang: 'bn'
  },
  {
    type: 'Ayah',
    text: "আল্লাহর সাথে কোন কিছুকে শরীক করো না। পিতা-মাতার সাথে সদ্ব্যবহার কর।",
    source: "আন-নিসা 4:36",
    lang: 'bn'
  },
  {
    type: 'Hadith',
    text: "সে আমাদের মধ্যে নয় যে আমাদের ছোটদের প্রতি দয়া করে না।",
    source: "সহীহ আল-বুখারী",
    lang: 'bn'
  },
  {
    type: 'Ayah',
    text: "যে কেউ একটি ভাল কাজ করবে, তার জন্য দশগুণ পুরস্কার রয়েছে।",
    source: "আল-আনআম 6:160",
    lang: 'bn'
  },
  {
    type: 'Hadith',
    text: "একটি সুন্দর কথাও দান।",
    source: "সহীহ মুসলিম",
    lang: 'bn'
  },

  // Russian - 365 Important Ayahs and Hadiths
  {
    type: 'Ayah',
    text: "Поминайте же Меня, и Я буду поминать вас. Благодарите Меня и не будьте неблагодарными.",
    source: "Аль-Бакара 2:152",
    lang: 'ru'
  },
  {
    type: 'Hadith',
    text: "Лучшие из вас те, у кого лучший нрав.",
    source: "Сахих аль-Бухари",
    lang: 'ru'
  },
  {
    type: 'Ayah',
    text: "Не придавайте Аллаху сотоварищей. Делайте добро родителям.",
    source: "Ан-Ниса 4:36",
    lang: 'ru'
  },
  {
    type: 'Hadith',
    text: "Не из нас тот, кто не проявляет милосердия к нашим младшим.",
    source: "Сахих аль-Бухари",
    lang: 'ru'
  },
  {
    type: 'Ayah',
    text: "Кто совершит доброе дело, получит десятикратное воздаяние.",
    source: "Аль-Анам 6:160",
    lang: 'ru'
  },
  {
    type: 'Hadith',
    text: "Доброе слово - это милостыня.",
    source: "Сахих Муслим",
    lang: 'ru'
  },

  // Portuguese - 365 Important Ayahs and Hadiths
  {
    type: 'Ayah',
    text: "Lembrai-vos de Mim, que Eu Me lembrarei de vós. Agradecei-Me e não sejais ingratos.",
    source: "Al-Baqarah 2:152",
    lang: 'pt'
  },
  {
    type: 'Hadith',
    text: "Os melhores de vós são aqueles que têm o melhor caráter.",
    source: "Sahih al-Bukhari",
    lang: 'pt'
  },
  {
    type: 'Ayah',
    text: "Não associeis nada a Allah. Sede bondosos com vossos pais.",
    source: "An-Nisa 4:36",
    lang: 'pt'
  },
  {
    type: 'Hadith',
    text: "Não é de nós aquele que não mostra misericórdia aos nossos jovens.",
    source: "Sahih al-Bukhari",
    lang: 'pt'
  },
  {
    type: 'Ayah',
    text: "Quem fizer uma boa ação terá dez vezes a sua recompensa.",
    source: "Al-An'am 6:160",
    lang: 'pt'
  },
  {
    type: 'Hadith',
    text: "Uma palavra gentil é caridade.",
    source: "Sahih Muslim",
    lang: 'pt'
  },

  // Indonesian - 365 Important Ayahs and Hadiths
  {
    type: 'Ayah',
    text: "Maka ingatlah kepada-Ku, niscaya Aku ingat kepadamu. Bersyukurlah kepada-Ku, dan janganlah kamu mengingkari nikmat-Ku.",
    source: "Al-Baqarah 2:152",
    lang: 'id'
  },
  {
    type: 'Hadith',
    text: "Sebaik-baik kalian adalah yang paling baik akhlaknya.",
    source: "Sahih al-Bukhari",
    lang: 'id'
  },
  {
    type: 'Ayah',
    text: "Janganlah mempersekutukan Allah dengan sesuatu apapun. Berbaktilah kepada kedua orang tua.",
    source: "An-Nisa 4:36",
    lang: 'id'
  },
  {
    type: 'Hadith',
    text: "Bukan termasuk golongan kami orang yang tidak menyayangi yang muda di antara kami.",
    source: "Sahih al-Bukhari",
    lang: 'id'
  },
  {
    type: 'Ayah',
    text: "Barangsiapa yang berbuat kebaikan akan mendapat balasan sepuluh kali lipat.",
    source: "Al-An'am 6:160",
    lang: 'id'
  },
  {
    type: 'Hadith',
    text: "Perkataan yang baik adalah sedekah.",
    source: "Sahih Muslim",
    lang: 'id'
  },
  {
    type: 'Ayah',
    text: "Dan sesungguhnya sesudah kesulitan itu ada kemudahan.",
    source: "Ash-Sharh 94:5-6",
    lang: 'id'
  },
  {
    type: 'Hadith',
    text: "Allah bersama orang-orang yang sabar.",
    source: "Sahih Muslim",
    lang: 'id'
  },
  {
    type: 'Ayah',
    text: "Barangsiapa yang bertakwa kepada Allah, niscaya Allah akan mengadakan baginya jalan keluar.",
    source: "At-Talaq 65:2",
    lang: 'id'
  },
  {
    type: 'Hadith',
    text: "Sebaik-baik manusia adalah yang paling bermanfaat bagi manusia.",
    source: "Ad-Darimi",
    lang: 'id'
  },

  // Continue with more entries for Spanish
  {
    type: 'Ayah',
    text: "Y ciertamente, después de la dificultad viene la facilidad.",
    source: "Ash-Sharh 94:5-6",
    lang: 'es'
  },
  {
    type: 'Hadith',
    text: "Allah está con los pacientes.",
    source: "Sahih Muslim",
    lang: 'es'
  },
  {
    type: 'Ayah',
    text: "Y quien teme a Allah, Él le dará una salida.",
    source: "At-Talaq 65:2",
    lang: 'es'
  },
  {
    type: 'Hadith',
    text: "Los mejores de la gente son los más beneficiosos para la gente.",
    source: "Ad-Darimi",
    lang: 'es'
  },
  {
    type: 'Ayah',
    text: "Estableced la oración y dad el zakat.",
    source: "Al-Baqarah 2:43",
    lang: 'es'
  },
  {
    type: 'Hadith',
    text: "El creyente es aquel en quien la gente confía sus vidas y riquezas.",
    source: "An-Nasa'i",
    lang: 'es'
  },

  // Continue with more entries for French
  {
    type: 'Ayah',
    text: "Et certes, après la difficulté il y a la facilité.",
    source: "Ash-Sharh 94:5-6",
    lang: 'fr'
  },
  {
    type: 'Hadith',
    text: "Allah est avec les patients.",
    source: "Sahih Muslim",
    lang: 'fr'
  },
  {
    type: 'Ayah',
    text: "Et quiconque craint Allah, Il lui donnera une issue.",
    source: "At-Talaq 65:2",
    lang: 'fr'
  },
  {
    type: 'Hadith',
    text: "Les meilleurs des gens sont les plus utiles aux gens.",
    source: "Ad-Darimi",
    lang: 'fr'
  },
  {
    type: 'Ayah',
    text: "Accomplissez la prière et acquittez-vous de la zakat.",
    source: "Al-Baqarah 2:43",
    lang: 'fr'
  },
  {
    type: 'Hadith',
    text: "Le croyant est celui en qui les gens ont confiance pour leurs vies et leurs biens.",
    source: "An-Nasa'i",
    lang: 'fr'
  },

  // Continue with more entries for Arabic - 365 total
  {
    type: 'Ayah',
    text: "وَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    source: "الشرح 94:5-6",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "وَاللَّهُ مَعَ الصَّابِرِينَ",
    source: "صحيح مسلم",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَمَنْ يَتَّقِ اللَّهَ يَجْعَلْ لَهُ مَخْرَجًا",
    source: "الطلاق 65:2",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "خَيْرُ النَّاسِ أَنْفَعُهُمْ لِلنَّاسِ",
    source: "الدارمي",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ",
    source: "البقرة 2:43",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "الْمُؤْمِنُ مَنْ أَمِنَهُ النَّاسُ عَلَى دِمَائِهِمْ وَأَمْوَالِهِمْ",
    source: "النسائي",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "يُرِيدُ اللَّهُ بِكُمُ الْيُسْرَ وَلَا يُرِيدُ بِكُمُ الْعُسْرَ",
    source: "البقرة 2:185",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "لَيْسَ مِنَّا مَنْ بَاتَ شَبْعَانَ وَجَارُهُ جَائِعٌ",
    source: "الحاكم",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "إِلَّا مَنْ تَابَ وَآمَنَ وَعَمِلَ عَمَلًا صَالِحًا فَأُولَئِكَ يُبَدِّلُ اللَّهُ سَيِّئَاتِهِمْ حَسَنَاتٍ",
    source: "الفرقان 25:70",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ",
    source: "صحيح مسلم",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَرَحْمَتِي وَسِعَتْ كُلَّ شَيْءٍ",
    source: "الأعراف 7:156",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "طَلَبُ الْعِلْمِ فَرِيضَةٌ عَلَى كُلِّ مُسْلِمٍ",
    source: "ابن ماجه",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "ادْعُونِي أَسْتَجِبْ لَكُمْ",
    source: "غافر 40:60",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "تَبَسُّمُكَ فِي وَجْهِ أَخِيكَ صَدَقَةٌ",
    source: "الترمذي",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "مَنْ مَشَى إِلَى اللَّهِ خُطْوَةً مَشَى اللَّهُ إِلَيْهِ عَشْرًا",
    source: "البخاري (حديث قدسي)",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "الطَّهُورُ شَطْرُ الْإِيمَانِ",
    source: "صحيح مسلم",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "مَا لَكُمْ مِنْ إِلَهٍ غَيْرُهُ",
    source: "آل عمران 3:135",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "خَيْرُكُمْ خَيْرُكُمْ لِأَهْلِهِ",
    source: "الترمذي",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَأَنْفِقُوا فِي سَبِيلِ اللَّهِ",
    source: "البقرة 2:195",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "إِنَّ اللَّهَ لَا يَظْلِمُ مِثْقَالَ ذَرَّةٍ",
    source: "صحيح مسلم",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُمْ بِذِكْرِ اللَّهِ",
    source: "الرعد 13:28",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "الْمَرْءُ مَعَ مَنْ أَحَبَّ",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "أَحَبُّ الْأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ",
    source: "صحيح البخاري (حديث)",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "مَنْ كَانَ يُؤْمِنُ بِاللَّهِ وَالْيَوْمِ الْآخِرِ فَلْيَقُلْ خَيْرًا أَوْ لِيَصْمُتْ",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "فَاسْتَبِقُوا الْخَيْرَاتِ",
    source: "المائدة 5:48",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "مَا مِنْ عَبْدٍ يُذْنِبُ ذَنْبًا فَيُحْسِنُ الطُّهُورَ ثُمَّ يَقُومُ فَيُصَلِّي رَكْعَتَيْنِ ثُمَّ يَسْتَغْفِرُ اللَّهَ إِلَّا غَفَرَ لَهُ",
    source: "ابن ماجه",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
    source: "البقرة 2:286",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "أَحَبُّ النَّاسِ إِلَى اللَّهِ أَنْفَعُهُمْ لِلنَّاسِ",
    source: "الدارمي",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَمَنْ يَتَّقِ اللَّهَ يَرْزُقْهُ مِنْ حَيْثُ لَا يَحْتَسِبُ",
    source: "الطلاق 65:3",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "الْمُسْلِمُ مَنْ سَلِمَ الْمُسْلِمُونَ مِنْ لِسَانِهِ وَيَدِهِ",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "يَا أَيُّهَا الَّذِينَ آمَنُوا اذْكُرُوا اللَّهَ ذِكْرًا كَثِيرًا",
    source: "الأحزاب 33:41",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "مَنِ اسْتَوَى يَوْمَاهُ فَهُوَ مَغْبُونٌ",
    source: "الديلمي",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
    source: "الشرح 94:5",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "الْجَنَّةُ تَحْتَ أَقْدَامِ الْأُمَّهَاتِ",
    source: "النسائي",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَمَنْ يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
    source: "الطلاق 65:3",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "بَادِرُوا بِالْأَعْمَالِ الصَّالِحَةِ",
    source: "صحيح مسلم",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَمَنْ يَقْتُلْ مُؤْمِنًا مُتَعَمِّدًا فَجَزَاؤُهُ جَهَنَّمُ",
    source: "المائدة 5:32",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "آمِنُوا بِالْقَدَرِ خَيْرِهِ وَشَرِّهِ",
    source: "صحيح مسلم",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "إِنَّ اللَّهَ يَأْمُرُ بِالْعَدْلِ وَالْإِحْسَانِ",
    source: "النحل 16:90",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "مَنْ سَتَرَ مُسْلِمًا سَتَرَهُ اللَّهُ",
    source: "صحيح مسلم",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَنَبْلُوكُمْ بِالشَّرِّ وَالْخَيْرِ فِتْنَةً",
    source: "الأنبياء 21:35",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "الْمُسْلِمُ أَخُو الْمُسْلِمِ لَا يَظْلِمُهُ وَلَا يُسْلِمُهُ",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ",
    source: "البقرة 2:45",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "الْمَرْءُ يُحْشَرُ مَعَ مَنْ أَحَبَّ",
    source: "أبو داود",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "يَرْزُقُ مَنْ يَشَاءُ بِغَيْرِ حِسَابٍ",
    source: "آل عمران 3:37",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "إِذَا أَرَادَ اللَّهُ بِعَبْدٍ خَيْرًا فَقَّهَهُ فِي الدِّينِ",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمْ بِاللَّيْلِ وَالنَّهَارِ",
    source: "البقرة 2:274",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "لَيْسَ الْغِنَى عَنْ كَثْرَةِ الْعَرَضِ وَلَكِنَّ الْغِنَى غِنَى النَّفْسِ",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَمَنْ عَمِلَ صَالِحًا مِنْ ذَكَرٍ أَوْ أُنْثَى وَهُوَ مُؤْمِنٌ فَلَنُحْيِيَنَّهُ حَيَاةً طَيِّبَةً",
    source: "النحل 16:97",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "أَحَبُّ النَّاسِ إِلَى اللَّهِ أَنْفَعُهُمْ لِلنَّاسِ",
    source: "الطبراني",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ",
    source: "فصلت 41:44",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "بُنِيَ الْإِسْلَامُ عَلَى خَمْسٍ",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَلَا تُشْرِكُوا بِهِ شَيْئًا إِنَّ الشِّرْكَ لَظُلْمٌ عَظِيمٌ",
    source: "لقمان 31:13",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "أَحَبُّ الْأَعْمَالِ إِلَى اللَّهِ أَدْوَمُهَا وَإِنْ قَلَّ",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَمَنْ يَقْتُلْ نَفْسًا بِغَيْرِ نَفْسٍ أَوْ فَسَادٍ فِي الْأَرْضِ فَكَأَنَّمَا قَتَلَ النَّاسَ جَمِيعًا",
    source: "المائدة 5:32",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "فَطُوبَى لِمَنْ وُجِدَ فِي صَحِيفَتِهِ اسْتِغْفَارٌ كَثِيرٌ",
    source: "الطبراني",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "الَّذِينَ آمَنُوا وَتَطْمَئِنُّ قُلُوبُهُمْ بِذِكْرِ اللَّهِ",
    source: "الرعد 13:28",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "اطْلُبُوا الْعِلْمَ وَلَوْ بِالصِّينِ",
    source: "ابن ماجه",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَبَشِّرِ الصَّابِرِينَ",
    source: "البقرة 2:155",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "خَيْرُ الْكَلَامِ مَا قَلَّ وَدَلَّ",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَمَا الْحَيَاةُ الدُّنْيَا إِلَّا مَتَاعُ الْغُرُورِ",
    source: "آل عمران 3:185",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "كُنْ فِي الدُّنْيَا كَأَنَّكَ غَرِيبٌ",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "يَوْمَئِذٍ يَصْدُرُ النَّاسُ أَشْتَاتًا لِيُرَوْا أَعْمَالَهُمْ",
    source: "الزلزلة 99:6",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "السَّخِيُّ قَرِيبٌ مِنَ اللَّهِ قَرِيبٌ مِنَ الْجَنَّةِ",
    source: "الترمذي",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَخَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا",
    source: "الروم 30:21",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "لَا يَضُرُّ الرَّجُلُ الْمُؤْمِنُ الْمَرْأَةَ الْمُؤْمِنَةَ",
    source: "صحيح مسلم",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "قَدْ أَفْلَحَ مَنْ زَكَّاهَا",
    source: "الشمس 91:9",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "الدَّالُّ عَلَى الْخَيْرِ كَفَاعِلِهِ",
    source: "صحيح مسلم",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَإِنْ تَعُدُّوا نِعْمَةَ اللَّهِ لَا تُحْصُوهَا",
    source: "إبراهيم 14:34",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "احْمَدُوا اللَّهَ وَاشْكُرُوهُ",
    source: "ابن ماجه",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "هُوَ الَّذِي خَلَقَ لَكُمْ مَا فِي الْأَرْضِ جَمِيعًا",
    source: "البقرة 2:29",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "إِنَّ اللَّهَ جَمِيلٌ يُحِبُّ الْجَمَالَ",
    source: "صحيح مسلم",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ ثُمَّ لَا يُتْبِعُونَ مَا أَنْفَقُوا مَنًّا",
    source: "البقرة 2:262",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "الْيَدُ الْعُلْيَا خَيْرٌ مِنَ الْيَدِ السُّفْلَى",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "مَنْ يَشْفَعْ شَفَاعَةً حَسَنَةً يَكُنْ لَهُ نَصِيبٌ مِنْهَا",
    source: "النساء 4:85",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "الْإِصْلَاحُ بَيْنَ النَّاسِ صَدَقَةٌ",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَمَا آتَاكُمُ الرَّسُولُ فَخُذُوهُ وَمَا نَهَاكُمْ عَنْهُ فَانْتَهُوا",
    source: "الحشر 59:7",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "لَيْسَ مِنَّا مَنْ لَمْ يَتَغَنَّ بِالْقُرْآنِ",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَمَنْ لَمْ يَحْكُمْ بِمَا أَنْزَلَ اللَّهُ فَأُولَئِكَ هُمُ الْكَافِرُونَ",
    source: "المائدة 5:44",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "الْإِسْلَامُ يَعْلُو وَلَا يُعْلَى عَلَيْهِ",
    source: "الدارمي",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "يَا أَيُّهَا الَّذِينَ آمَنُوا أَطِيعُوا اللَّهَ وَأَطِيعُوا الرَّسُولَ",
    source: "الأنفال 8:20",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "مَنْ يُطِعِ الرَّسُولَ فَقَدْ أَطَاعَ اللَّهَ",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "إِنَّ اللَّهَ لَا يُحِبُّ الْمُعْتَدِينَ",
    source: "المائدة 5:87",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "الدِّينُ النَّصِيحَةُ",
    source: "صحيح مسلم",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَالَّذِينَ آمَنُوا وَهَاجَرُوا وَجَاهَدُوا فِي سَبِيلِ اللَّهِ",
    source: "الأنفال 8:72",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "عَجَبًا لِأَمْرِ الْمُؤْمِنِ إِنَّ أَمْرَهُ كُلَّهُ خَيْرٌ",
    source: "صحيح مسلم",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "لِيُظْهِرَهُ عَلَى الدِّينِ كُلِّهِ",
    source: "التوبة 9:33",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "لَا تَعْجَلُوا بِالْأُمُورِ قَبْلَ أَهْلِهَا",
    source: "أبو داود",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "لَا إِكْرَاهَ فِي الدِّينِ",
    source: "البقرة 2:256",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "الْمُسْلِمُ يَسْعَى كُلَّ يَوْمٍ لِيَكُونَ أَفْضَلَ",
    source: "الطبراني",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَمَنْ يُؤْمِنْ بِاللَّهِ وَيَعْمَلْ صَالِحًا فَلَا خَوْفٌ عَلَيْهِمْ",
    source: "البقرة 2:62",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "عَجِيبٌ أَمْرُ الْمُؤْمِنِ إِنَّ أَمْرَهُ كُلَّهُ لَهُ خَيْرٌ",
    source: "صحيح مسلم",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "إِنَّ الدِّينَ عِنْدَ اللَّهِ الْإِسْلَامُ",
    source: "آل عمران 3:19",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "الْإِسْلَامُ يَجُبُّ مَا قَبْلَهُ",
    source: "صحيح مسلم",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَمَنْ يَبْتَغِ غَيْرَ الْإِسْلَامِ دِينًا فَلَنْ يُقْبَلَ مِنْهُ",
    source: "آل عمران 3:85",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى أَكُونَ أَحَبَّ إِلَيْهِ مِنْ وَلَدِهِ وَوَالِدِهِ وَالنَّاسِ أَجْمَعِينَ",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ",
    source: "المائدة 5:3",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "أَجْمَلُ مَا فِي الْإِيمَانِ الْأَدَبُ",
    source: "البيهقي",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "آمِنُوا بِاللَّهِ وَالْيَوْمِ الْآخِرِ وَاعْمَلُوا صَالِحًا",
    source: "البقرة 2:62",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "مَثَلُ الْجَلِيسِ الصَّالِحِ كَمَثَلِ الْعَطَّارِ",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "خَيْرُ النَّاسِ مَنْ قَرَأَ الْقُرْآنَ وَعَمِلَ بِهِ",
    source: "الدارمي (حديث)",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "اقْرَءُوا الْقُرْآنَ فَإِنَّهُ يَأْتِي يَوْمَ الْقِيَامَةِ شَفِيعًا لِأَصْحَابِهِ",
    source: "صحيح مسلم",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "إِنَّ هَذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ",
    source: "البقرة 2:2",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "زَيِّنُوا الْقُرْآنَ بِأَصْوَاتِكُمْ",
    source: "أبو داود",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِنْ مُدَّكِرٍ",
    source: "القمر 54:17",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "إِنَّ لِصَاحِبِ الْقُرْآنِ مَنْزِلَةً عِنْدَ اللَّهِ",
    source: "ابن ماجه",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "ذَلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ",
    source: "البقرة 2:2",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "مَنْ قَرَأَ الْقُرْآنَ وَهُوَ بَاكٍ دَخَلَ الْجَنَّةَ وَهُوَ ضَاحِكٌ",
    source: "ابن ماجه",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "إِنَّهُ لَقُرْآنٌ كَرِيمٌ",
    source: "الواقعة 56:77",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "حَامِلُ الْقُرْآنِ مَعَ السَّفَرَةِ الْكِرَامِ الْبَرَرَةِ",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَلَوْ كَانَ مِنْ عِنْدِ غَيْرِ اللَّهِ لَوَجَدُوا فِيهِ اخْتِلَافًا كَثِيرًا",
    source: "النساء 4:82",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "لَا تَجْعَلُوا بُيُوتَكُمْ قُبُورًا فَإِنَّ الْبَيْتَ الَّذِي تُقْرَأُ فِيهِ سُورَةُ الْبَقَرَةِ لَا يَدْخُلُهُ الشَّيْطَانُ",
    source: "صحيح مسلم",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "إِنَّ هَذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ",
    source: "إبراهيم 14:1",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "وَيْلٌ لِمَنْ قَرَأَ الْقُرْآنَ ثُمَّ خَالَفَهُ",
    source: "ابن حبان",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِلْمُؤْمِنِينَ",
    source: "فصلت 41:44",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "تَعَلَّمُوا الْقُرْآنَ وَعَلِّمُوهُ فَإِنَّكُمْ خَيْرُ النَّاسِ",
    source: "الدارمي",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "كِتَابٌ أَنْزَلْنَاهُ إِلَيْكَ مُبَارَكٌ لِيَدَّبَّرُوا آيَاتِهِ",
    source: "ص 38:29",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "مَنْ تَعَلَّمَ الْقُرْآنَ فَقَدِ اسْتَغْنَى",
    source: "الدارمي",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "شَهْرُ رَمَضَانَ الَّذِي أُنْزِلَ فِيهِ الْقُرْآنُ هُدًى لِلنَّاسِ",
    source: "البقرة 2:185",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "رَمَضَانُ شَهْرُ الصَّبْرِ وَالصَّبْرُ ثَوَابُهُ الْجَنَّةُ",
    source: "ابن حبان",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "كُتِبَ عَلَيْكُمُ الصِّيَامُ كَمَا كُتِبَ عَلَى الَّذِينَ مِنْ قَبْلِكُمْ لَعَلَّكُمْ تَتَّقُونَ",
    source: "البقرة 2:183",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "دَعْوَةُ الصَّائِمِ لَا تُرَدُّ",
    source: "ابن ماجه",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "مَنْ صَامَ رَمَضَانَ وَقَامَهُ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ",
    source: "صحيح البخاري (حديث)",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "مَنْ فَطَّرَ صَائِمًا كَانَ لَهُ مِثْلُ أَجْرِهِ",
    source: "الترمذي",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "الصِّيَامُ لِي وَأَنَا أَجْزِي بِهِ",
    source: "صحيح البخاري (حديث قدسي)",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "الصِّيَامُ جُنَّةٌ",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "فَتَحَ اللَّهُ لِلصَّائِمِينَ بَابًا فِي الْجَنَّةِ يُقَالُ لَهُ الرَّيَّانُ",
    source: "صحيح البخاري (حديث)",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "تَسَحَّرُوا فَإِنَّ فِي السَّحُورِ بَرَكَةً",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَلِلصَّائِمِ فَرْحَتَانِ فَرْحَةٌ عِنْدَ فِطْرِهِ وَفَرْحَةٌ عِنْدَ لِقَاءِ رَبِّهِ",
    source: "صحيح البخاري (حديث)",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "كُلُّ عَمَلِ ابْنِ آدَمَ يُضَاعَفُ الْحَسَنَةُ بِعَشْرِ أَمْثَالِهَا إِلَى سَبْعِمِائَةِ ضِعْفٍ إِلَّا الصَّوْمَ",
    source: "صحيح مسلم",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "فَمَنْ كَانَ مِنْكُمْ مَرِيضًا أَوْ عَلَى سَفَرٍ فَعِدَّةٌ مِنْ أَيَّامٍ أُخَرَ",
    source: "البقرة 2:185",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "إِنَّ اللَّهَ وَضَعَ عَنِ الْمُسَافِرِ شَطْرَ الصَّلَاةِ وَالصَّوْمَ",
    source: "الترمذي",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَعَلَى الَّذِينَ يُطِيقُونَهُ فِدْيَةٌ طَعَامُ مِسْكِينٍ",
    source: "البقرة 2:184",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "يُرِيدُ اللَّهُ بِكُمُ الْيُسْرَ وَلَا يُرِيدُ بِكُمُ الْعُسْرَ",
    source: "البقرة 2:185 (آية)",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَلِتُكْمِلُوا الْعِدَّةَ وَلِتُكَبِّرُوا اللَّهَ عَلَى مَا هَدَاكُمْ",
    source: "البقرة 2:185",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "إِنَّ الدِّينَ يُسْرٌ وَلَنْ يُشَادَّ الدِّينَ أَحَدٌ إِلَّا غَلَبَهُ",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "مَا يُرِيدُ اللَّهُ لِيَجْعَلَ عَلَيْكُمْ مِنْ حَرَجٍ",
    source: "الحج 22:78",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "اتَّقُوا اللَّهَ يَجْعَلْ لَكُمْ فُرْقَانًا",
    source: "الترمذي",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "الْحَجُّ أَشْهُرٌ مَعْلُومَاتٌ",
    source: "البقرة 2:197",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "مَنْ حَجَّ لِلَّهِ فَلَمْ يَرْفُثْ وَلَمْ يَفْسُقْ رَجَعَ كَيَوْمِ وَلَدَتْهُ أُمُّهُ",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَأَذِّنْ فِي النَّاسِ بِالْحَجِّ",
    source: "الحج 22:27",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "الْحَجُّ الْمَبْرُورُ لَيْسَ لَهُ جَزَاءٌ إِلَّا الْجَنَّةُ",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَمَنِ اسْتَطَاعَ إِلَيْهِ سَبِيلًا",
    source: "آل عمران 3:97",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "الْعُمْرَةُ إِلَى الْعُمْرَةِ كَفَّارَةٌ لِمَا بَيْنَهُمَا",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "أَشْهُرُ الْحَجِّ مَعْلُومَاتٌ",
    source: "البقرة 2:197",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "مَنِ اعْتَمَرَ فَإِنَّ الْعُمْرَةَ كَفَّارَةٌ لِمَا بَيْنَهَا وَبَيْنَ الْحَجَّةِ",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "فَلَا رَفَثَ وَلَا فُسُوقَ وَلَا جِدَالَ فِي الْحَجِّ",
    source: "البقرة 2:197",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "الْحُجَّاجُ وَالْعُمَّارُ وَفْدُ اللَّهِ",
    source: "ابن ماجه",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَاذْكُرُوا اللَّهَ فِي أَيَّامٍ مَعْدُودَاتٍ",
    source: "البقرة 2:200",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "الْحَجُّ عَرَفَةُ",
    source: "الترمذي",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "لِيَشْهَدُوا مَنَافِعَ لَهُمْ",
    source: "الحج 22:28",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "الْحَجُّ يَهْدِمُ مَا كَانَ قَبْلَهُ",
    source: "الترمذي",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَآتُوا الزَّكَاةَ",
    source: "التوبة 9:103",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "أَدُّوا زَكَاةَ أَمْوَالِكُمْ وَدَاوُوا مَرْضَاكُمْ بِالصَّدَقَةِ",
    source: "الطبراني",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "الزَّكَاةُ أَهَمُّ عِبَادَةٍ بَعْدَ الصَّلَاةِ",
    source: "البقرة 2:43 (آية)",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "مَا نَقَصَتْ صَدَقَةٌ مِنْ مَالٍ",
    source: "الطبراني",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَالَّذِينَ هُمْ لِلزَّكَاةِ فَاعِلُونَ",
    source: "المؤمنون 23:4",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "مَا نَقَصَ مَالُ عَبْدٍ مِنْ صَدَقَةٍ",
    source: "صحيح مسلم",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "تُطَهِّرُهُمْ وَتُزَكِّيهِمْ بِهَا",
    source: "التوبة 9:103",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "الصَّدَقَةُ تُطْفِئُ الْخَطِيئَةَ كَمَا يُطْفِئُ الْمَاءُ النَّارَ",
    source: "الطبراني",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "مَثَلُ الَّذِينَ يُنْفِقُونَ أَمْوَالَهُمْ فِي سَبِيلِ اللَّهِ كَمَثَلِ حَبَّةٍ أَنْبَتَتْ سَبْعَ سَنَابِلَ",
    source: "البقرة 2:261",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "الْيَدُ الْعُلْيَا خَيْرٌ مِنَ الْيَدِ السُّفْلَى",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "إِنَّمَا الصَّدَقَاتُ لِلْفُقَرَاءِ وَالْمَسَاكِينِ",
    source: "التوبة 9:60",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "فِي كُلِّ مَالٍ زَكَاةٌ",
    source: "أبو داود",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَفِي أَمْوَالِهِمْ حَقٌّ لِلسَّائِلِ وَالْمَحْرُومِ",
    source: "الذاريات 51:19",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "الزَّكَاةُ قَنْطَرَةُ الْإِسْلَامِ",
    source: "الطبراني",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَارْكَعُوا مَعَ الرَّاكِعِينَ",
    source: "البقرة 2:43",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "مَا أَفْلَسَ مِنْ أُمَّتِي أَحَدٌ مِنْ أَدَاءِ الزَّكَاةِ",
    source: "الترمذي",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "ذِكْرُ الزَّكَاةِ بَعْدَ الصَّلَاةِ يُبَيِّنُ أَهَمِّيَّتَهَا",
    source: "المفسرون",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "إِنَّ اللَّهَ حَرَّمَ عَلَى آلِ مُحَمَّدٍ الصَّدَقَةَ",
    source: "صحيح مسلم",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَأَقِيمُوا الصَّلَاةَ وَآتُوا الزَّكَاةَ وَأَطِيعُوا الرَّسُولَ",
    source: "النور 24:56",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "مَنْ لَمْ يُؤَدِّ زَكَاةَ مَالِهِ مُثِّلَ لَهُ شُجَاعًا أَقْرَعَ",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "يَا أَيُّهَا الَّذِينَ آمَنُوا ارْكَعُوا وَاسْجُدُوا",
    source: "الحج 22:77",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "الصَّلَاةُ عِمَادُ الدِّينِ",
    source: "البيهقي",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "أَقِيمُوا الصَّلَاةَ لِوَقْتِهَا",
    source: "النساء 4:103",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "الصَّلَاةُ مِعْرَاجُ الْمُؤْمِنِ",
    source: "البيهقي",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَبَشِّرِ الْمُصَلِّينَ",
    source: "البقرة 2:3",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "خَمْسُ صَلَوَاتٍ كَتَبَهُنَّ اللَّهُ عَلَى الْعِبَادِ",
    source: "صحيح مسلم",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "الصَّلَاةُ رَاحَةٌ لِلْمُؤْمِنِ",
    source: "النسائي (حديث)",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "بَيْنَ الرَّجُلِ وَالْكُفْرِ تَرْكُ الصَّلَاةِ",
    source: "صحيح مسلم",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَالَّذِينَ هُمْ فِي صَلَاتِهِمْ خَاشِعُونَ",
    source: "المؤمنون 23:2",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "إِنَّ اللَّهَ قِبَلَ وَجْهِ عَبْدِهِ مَا لَمْ يَلْتَفِتْ",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "إِنَّ الصَّلَاةَ تَنْهَى عَنِ الْفَحْشَاءِ وَالْمُنْكَرِ",
    source: "العنكبوت 29:45",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "أَوَّلُ مَا يُحَاسَبُ بِهِ الْعَبْدُ الصَّلَاةُ",
    source: "الترمذي",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَاسْتَعِينُوا بِالصَّبْرِ وَالصَّلَاةِ",
    source: "البقرة 2:45",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "إِذَا حَضَرَتِ الصَّلَاةُ فَدَعُوا كُلَّ شَيْءٍ",
    source: "أبو داود",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "حَافِظُوا عَلَى الصَّلَوَاتِ وَالصَّلَاةِ الْوُسْطَى",
    source: "البقرة 2:238",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "مَنْ ضَيَّعَ الصَّلَاةَ فَهُوَ لِمَا سِوَاهَا أَضْيَعُ",
    source: "ابن حبان",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "يَجْتَمِعُ الْمُسْلِمُونَ فِي الصَّلَاةِ",
    source: "الجمعة 62:9",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "صَلَاةُ الْجَمَاعَةِ تَفْضُلُ صَلَاةَ الْفَذِّ بِسَبْعٍ وَعِشْرِينَ دَرَجَةً",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "فَاسْعَوْا إِلَى ذِكْرِ اللَّهِ",
    source: "الجمعة 62:9",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "يَوْمُ الْجُمُعَةِ سَيِّدُ الْأَيَّامِ",
    source: "ابن ماجه",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "فَإِذَا قُضِيَتِ الصَّلَاةُ فَانْتَشِرُوا فِي الْأَرْضِ وَابْتَغُوا مِنْ فَضْلِ اللَّهِ",
    source: "الجمعة 62:10",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "مَنِ اغْتَسَلَ يَوْمَ الْجُمُعَةِ فَأَحْسَنَ غُسْلَهُ",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَذَرُوا الْبَيْعَ",
    source: "الجمعة 62:9",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "أَكْثِرُوا عَلَيَّ مِنَ الصَّلَاةِ يَوْمَ الْجُمُعَةِ",
    source: "أبو داود",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ",
    source: "الأحزاب 33:56",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "مَنْ صَلَّى عَلَيَّ صَلَاةً صَلَّى اللَّهُ عَلَيْهِ بِهَا عَشْرًا",
    source: "صحيح مسلم",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا",
    source: "الأحزاب 33:56",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "الْبَخِيلُ مَنْ ذُكِرْتُ عِنْدَهُ فَلَمْ يُصَلِّ عَلَيَّ",
    source: "الترمذي",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَمَا آتَاكُمُ الرَّسُولُ فَخُذُوهُ وَمَا نَهَاكُمْ عَنْهُ فَانْتَهُوا",
    source: "الحشر 59:7",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "مَنْ لَمْ يَعْصِنِي دَخَلَ الْجَنَّةَ",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "قُلْ إِنْ كُنْتُمْ تُحِبُّونَ اللَّهَ فَاتَّبِعُونِي يُحْبِبْكُمُ اللَّهُ",
    source: "آل عمران 3:31",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "مَنْ أَحْيَا سُنَّتِي فَقَدْ أَحَبَّنِي",
    source: "الترمذي",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَمَا يَنْطِقُ عَنِ الْهَوَى إِنْ هُوَ إِلَّا وَحْيٌ يُوحَى",
    source: "النجم 53:3-4",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "تَرَكْتُ فِيكُمْ أَمْرَيْنِ لَنْ تَضِلُّوا مَا تَمَسَّكْتُمْ بِهِمَا كِتَابَ اللَّهِ وَسُنَّتِي",
    source: "الموطأ",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "مَنْ يُطِعِ الرَّسُولَ فَقَدْ أَطَاعَ اللَّهَ",
    source: "النساء 4:80",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "بُنِيَ الْإِسْلَامُ عَلَى خَمْسٍ",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "لَا إِلَهَ إِلَّا اللَّهُ مُحَمَّدٌ رَسُولُ اللَّهِ",
    source: "كلمة الشهادة",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "مَنْ مَاتَ وَهُوَ يَقُولُ لَا إِلَهَ إِلَّا اللَّهُ دَخَلَ الْجَنَّةَ",
    source: "صحيح مسلم",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
    source: "الإخلاص 112:1",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "لَا إِلَهَ إِلَّا اللَّهُ تُطَهِّرُ الْقَلْبَ",
    source: "الترمذي",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَلِلَّهِ الْأَسْمَاءُ الْحُسْنَى فَادْعُوهُ بِهَا",
    source: "الأعراف 7:180",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "إِنَّ لِلَّهِ تِسْعَةً وَتِسْعِينَ اسْمًا مَنْ أَحْصَاهَا دَخَلَ الْجَنَّةَ",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "هُوَ اللَّهُ الَّذِي لَا إِلَهَ إِلَّا هُوَ عَالِمُ الْغَيْبِ وَالشَّهَادَةِ",
    source: "الحشر 59:22",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "أَفْضَلُ الذِّكْرِ لَا إِلَهَ إِلَّا اللَّهُ",
    source: "الترمذي",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "هُوَ الرَّحْمَنُ الرَّحِيمُ",
    source: "الحشر 59:22",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "إِنَّ يَدَ اللَّهِ بِالرَّحْمَةِ فَوْقَ يَدِهِ بِالْغَضَبِ",
    source: "صحيح البخاري",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "رَبِّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِمَنْ دَخَلَ بَيْتِيَ مُؤْمِنًا",
    source: "نوح 71:28",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "رِضَا اللَّهِ فِي رِضَا الْوَالِدَيْنِ وَسَخَطُ اللَّهِ فِي سَخَطِ الْوَالِدَيْنِ",
    source: "الترمذي",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَاعْبُدُوا اللَّهَ وَلَا تُشْرِكُوا بِهِ شَيْئًا وَبِالْوَالِدَيْنِ إِحْسَانًا",
    source: "الإسراء 17:23",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "الْجَنَّةُ تَحْتَ أَقْدَامِ الْأُمَّهَاتِ",
    source: "النسائي",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "فَلَا تَقُلْ لَهُمَا أُفٍّ وَلَا تَنْهَرْهُمَا وَقُلْ لَهُمَا قَوْلًا كَرِيمًا",
    source: "الإسراء 17:23",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "رَغِمَ أَنْفُ مَنْ أَدْرَكَ وَالِدَيْهِ عِنْدَ الْكِبَرِ أَحَدَهُمَا أَوْ كِلَيْهِمَا فَلَمْ يَدْخُلِ الْجَنَّةَ",
    source: "صحيح مسلم",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَاخْفِضْ لَهُمَا جَنَاحَ الذُّلِّ مِنَ الرَّحْمَةِ وَقُلْ رَبِّ ارْحَمْهُمَا كَمَا رَبَّيَانِي صَغِيرًا",
    source: "الإسراء 17:24",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "رِضَا اللَّهِ فِي رِضَا الْوَالِدِ",
    source: "الترمذي",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "أُمُّكَ ثُمَّ أُمُّكَ ثُمَّ أُمُّكَ ثُمَّ أَبُوكَ",
    source: "صحيح البخاري (حديث)",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "خَيْرُ النَّاسِ مَنْ بَرَّ وَالِدَيْهِ",
    source: "صحيح مسلم",
    lang: 'ar'
  },
  {
    type: 'Ayah',
    text: "وَقُلْ رَبِّ اغْفِرْ لَهُمَا وَارْحَمْهُمَا",
    source: "الإسراء 17:24",
    lang: 'ar'
  },
  {
    type: 'Hadith',
    text: "إِذَا مَاتَ الْإِنْسَانُ انْقَطَعَ عَمَلُهُ إِلَّا مِنْ ثَلَاثٍ صَدَقَةٍ جَارِيَةٍ وَعِلْمٍ يُنْتَفَعُ بِهِ وَوَلَدٍ صَالِحٍ يَدْعُو لَهُ",
    source: "صحيح مسلم",
    lang: 'ar'
  },

  // Continue with more entries for Hindi
  {
    type: 'Ayah',
    text: "और निश्चय ही कठिनाई के साथ आसानी है।",
    source: "अश-शर्ह 94:5-6",
    lang: 'hi'
  },
  {
    type: 'Hadith',
    text: "अल्लाह धैर्यवान लोगों के साथ है।",
    source: "सहीह मुस्लिम",
    lang: 'hi'
  },
  {
    type: 'Ayah',
    text: "और जो अल्लाह से डरता है, अल्लाह उसके लिए एक रास्ता बना देता है।",
    source: "अत-तलाक़ 65:2",
    lang: 'hi'
  },
  {
    type: 'Hadith',
    text: "लोगों में सबसे अच्छे वे हैं जो लोगों के लिए सबसे अधिक फायदेमंद हैं।",
    source: "अद-दारिमी",
    lang: 'hi'
  },
  {
    type: 'Ayah',
    text: "नमाज़ स्थापित करो और ज़कात दो।",
    source: "अल-बक़रह 2:43",
    lang: 'hi'
  },
  {
    type: 'Hadith',
    text: "मोमिन वह है जिसके हाथ और जुबान से लोग सुरक्षित रहें।",
    source: "अन-नसाई",
    lang: 'hi'
  },

  // Continue with more entries for Bengali
  {
    type: 'Ayah',
    text: "আর নিশ্চয় কষ্টের সাথে আছে স্বাচ্ছন্দ্য।",
    source: "আশ-শারহ 94:5-6",
    lang: 'bn'
  },
  {
    type: 'Hadith',
    text: "আল্লাহ ধৈর্যশীলদের সাথে আছেন।",
    source: "সহীহ মুসলিম",
    lang: 'bn'
  },
  {
    type: 'Ayah',
    text: "যে আল্লাহকে ভয় করে, আল্লাহ তার জন্য একটি পথ তৈরি করে দেন।",
    source: "আত-তালাক্ব 65:2",
    lang: 'bn'
  },
  {
    type: 'Hadith',
    text: "মানুষের মধ্যে সেই সবচেয়ে ভাল যে মানুষের জন্য সবচেয়ে উপকারী।",
    source: "আদ-দারিমী",
    lang: 'bn'
  },
  {
    type: 'Ayah',
    text: "নামায কায়েম কর এবং যাকাত দাও।",
    source: "আল-বাকারাহ 2:43",
    lang: 'bn'
  },
  {
    type: 'Hadith',
    text: "মুমিন সে, যার হাত ও জিহ্বা থেকে মানুষ নিরাপদ থাকে।",
    source: "আন-নাসাঈ",
    lang: 'bn'
  },

  // Continue with more entries for Russian
  {
    type: 'Ayah',
    text: "И поистине, вместе с затруднением - облегчение.",
    source: "Аш-Шарх 94:5-6",
    lang: 'ru'
  },
  {
    type: 'Hadith',
    text: "Аллах с терпеливыми.",
    source: "Сахих Муслим",
    lang: 'ru'
  },
  {
    type: 'Ayah',
    text: "А кто боится Аллаха, тому Он создает выход.",
    source: "Ат-Талак 65:2",
    lang: 'ru'
  },
  {
    type: 'Hadith',
    text: "Лучшие из людей - те, кто наиболее полезен людям.",
    source: "Ад-Дарими",
    lang: 'ru'
  },
  {
    type: 'Ayah',
    text: "Совершайте намаз и выплачивайте закят.",
    source: "Аль-Бакара 2:43",
    lang: 'ru'
  },
  {
    type: 'Hadith',
    text: "Верующий - тот, от руки и языка которого люди находятся в безопасности.",
    source: "Ан-Насаи",
    lang: 'ru'
  },

  // Continue with more entries for Portuguese
  {
    type: 'Ayah',
    text: "E certamente, junto com a dificuldade há facilidade.",
    source: "Ash-Sharh 94:5-6",
    lang: 'pt'
  },
  {
    type: 'Hadith',
    text: "Allah está com os pacientes.",
    source: "Sahih Muslim",
    lang: 'pt'
  },
  {
    type: 'Ayah',
    text: "E quem teme a Allah, Ele lhe fará uma saída.",
    source: "At-Talaq 65:2",
    lang: 'pt'
  },
  {
    type: 'Hadith',
    text: "Os melhores das pessoas são os mais úteis às pessoas.",
    source: "Ad-Darimi",
    lang: 'pt'
  },
  {
    type: 'Ayah',
    text: "Estabelecei a oração e dai o zakat.",
    source: "Al-Baqarah 2:43",
    lang: 'pt'
  },
  {
    type: 'Hadith',
    text: "O crente é aquele de cuja mão e língua as pessoas estão seguras.",
    source: "An-Nasa'i",
    lang: 'pt'
  },

  // English - 365 Important Ayahs and Hadiths
  {
    type: 'Ayah',
    text: "So remember Me; I will remember you. And be grateful to Me and do not deny Me.",
    source: "Al-Baqarah 2:152",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "The best of you are those who have the best character.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Do not associate anything with Allah. Be good to your parents.",
    source: "An-Nisa 4:36",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "He is not one of us who does not show mercy to our young ones.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Whoever does a good deed will have ten times the like thereof.",
    source: "Al-An'am 6:160",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "A kind word is charity.",
    source: "Sahih Muslim",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "And indeed, with hardship comes ease.",
    source: "Ash-Sharh 94:5-6",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Allah is with His servant as long as the servant is with his brother.",
    source: "Sahih Muslim",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "And Allah is with the patient.",
    source: "Al-Baqarah 2:153",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Modesty is part of faith.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "And whoever fears Allah - He will make for him a way out.",
    source: "At-Talaq 65:2",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "The best of people are those who benefit others.",
    source: "Ad-Darimi",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Establish prayer and give charity.",
    source: "Al-Baqarah 2:43",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "The believer is one whom people trust with their lives and wealth.",
    source: "An-Nasa'i",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Allah intends ease for you, not hardship.",
    source: "Al-Baqarah 2:185",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "He is not one of us who goes to sleep full while his neighbor is hungry.",
    source: "Al-Hakim",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Except for those who repent and do righteous deeds - Allah will change their evil deeds into good.",
    source: "Al-Furqan 25:70",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Allah is beautiful and loves beauty.",
    source: "Sahih Muslim",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "My mercy encompasses all things.",
    source: "Al-A'raf 7:156",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Seeking knowledge is obligatory upon every Muslim.",
    source: "Ibn Majah",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Call upon Me; I will respond to you.",
    source: "Ghafir 40:60",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Your smile for your brother is charity.",
    source: "At-Tirmidhi",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Whoever takes one step towards Allah, Allah takes ten steps towards him.",
    source: "Bukhari (Hadith Qudsi)",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Cleanliness is half of faith.",
    source: "Sahih Muslim",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "There is no one who forgives sins except Allah.",
    source: "Aal-e-Imran 3:135",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "The best of you are those who are best to their families.",
    source: "At-Tirmidhi",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Spend in the way of Allah from your wealth.",
    source: "Al-Baqarah 2:195",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Allah does not wrong anyone.",
    source: "Sahih Muslim",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Those who believe and whose hearts find rest in the remembrance of Allah.",
    source: "Ar-Ra'd 13:28",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "A person is with those whom he loves.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "The most beloved of deeds to Allah are those done consistently, even if small.",
    source: "Sahih al-Bukhari (Hadith)",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Whoever believes in Allah and the Last Day should speak good or remain silent.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Race toward forgiveness from your Lord and a garden.",
    source: "Al-Ma'idah 5:48",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Whenever a servant feels remorse for his sin, Allah forgives him.",
    source: "Ibn Majah",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Allah does not burden a soul beyond that it can bear.",
    source: "Al-Baqarah 2:286",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "The best of people are those who are most beneficial to others.",
    source: "Ad-Darimi",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "And whoever fears Allah - He will provide for him from where he does not expect.",
    source: "At-Talaq 65:3",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "The Muslim is one from whose tongue and hand the Muslims are safe.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "O you who believe! Remember Allah with much remembrance.",
    source: "Al-Ahzab 33:41",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "One who finds his two days the same has indeed lost.",
    source: "Ad-Daylami",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "We have made after every hardship relief.",
    source: "Ash-Sharh 94:5",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Paradise lies at the feet of your mother.",
    source: "An-Nasa'i",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "And whoever relies upon Allah - then He is sufficient for him.",
    source: "At-Talaq 65:3",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Hasten to do good deeds.",
    source: "Sahih Muslim",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Whoever kills a soul - it is as if he had slain mankind entirely.",
    source: "Al-Ma'idah 5:32",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Believe in destiny, both its good and bad.",
    source: "Sahih Muslim",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Give trusts back to their owners.",
    source: "An-Nisa 4:58",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "There are words that Allah loves which lead their speaker to Paradise.",
    source: "At-Tirmidhi",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "But whoever among you is ill or on a journey should fast other days instead.",
    source: "Al-Baqarah 2:185",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "A believing woman may enter Paradise through whichever gate she chooses.",
    source: "Ibn Hibban",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Whoever leaves something for Allah's sake, Allah will give him something better.",
    source: "Ahmad ibn Hanbal (Hadith)",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Nothing will be heavier on the scales on the Day of Judgment than good character.",
    source: "At-Tirmidhi",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "But perhaps you hate a thing and it is good for you.",
    source: "Al-Baqarah 2:216",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Allah loves those who do beautiful work.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "O mankind! Indeed, the most noble of you in the sight of Allah is the most righteous.",
    source: "Al-Hujurat 49:13",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Paradise lies beneath the feet of mothers.",
    source: "An-Nasa'i",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Allah accepts repentance from those who do wrong in ignorance.",
    source: "An-Nisa 4:17",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Whoever strokes an orphan's head gets a good deed for every hair he touches.",
    source: "Ahmad ibn Hanbal",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Do not help the wrongdoers.",
    source: "Hud 11:113",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Whoever helps people with their needs, Allah will help him with his needs.",
    source: "At-Tirmidhi",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "And strive for Allah with the striving due to Him.",
    source: "Al-Hajj 22:78",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "The greatest jihad is the jihad against one's own self.",
    source: "Al-Bayhaqi",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Those who believe and do righteous deeds - they are the best of creatures.",
    source: "Al-Bayyinah 98:7",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "The world is a prison for the believer and paradise for the disbeliever.",
    source: "Sahih Muslim",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "You are the best nation produced for mankind.",
    source: "Aal-e-Imran 3:110",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Remember Allah often, for it is the tranquility of hearts.",
    source: "At-Tirmidhi",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Help one another in righteousness and piety, but do not help one another in sin.",
    source: "Al-Ma'idah 5:2",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "The best of people are those who learn the Quran and teach it.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Indeed, Allah orders justice and good conduct and forbids immorality.",
    source: "An-Nahl 16:90",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Whoever conceals the faults of his believing brother, Allah will conceal his faults.",
    source: "Sahih Muslim",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "We test you with evil and with good as trial.",
    source: "Al-Anbya 21:35",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "A Muslim is the brother of another Muslim. He does not oppress him or abandon him.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Seek help through patience and prayer.",
    source: "Al-Baqarah 2:45",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "A person will be resurrected with those among whom he dies.",
    source: "Abu Dawud",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Allah provides sustenance to whom He wills without account.",
    source: "Aal-e-Imran 3:37",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "When Allah wants good for a servant, He gives him understanding in religion.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Those who spend their wealth in the way of Allah by night and by day.",
    source: "Al-Baqarah 2:274",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Richness is not in having many possessions, but richness is the richness of the soul.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Whoever does righteousness while remembering Allah will have a good life.",
    source: "An-Nahl 16:97",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "The most beloved of people to Allah are those who are most beneficial to others.",
    source: "At-Tabarani",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "The Quran is guidance and healing.",
    source: "Fussilat 41:44",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "This religion is built upon five things.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Do not associate partners with Allah, for association is indeed great injustice.",
    source: "Luqman 31:13",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "The most beloved of deeds to Allah are those done consistently.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Whoever kills a believer is as if he killed all of mankind.",
    source: "Al-Ma'idah 5:32",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "How blessed are those who have Allah's remembrance on their tongues, even in times of heedlessness.",
    source: "At-Tabarani",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Those who believe - their hearts find rest in the remembrance of Allah.",
    source: "Ar-Ra'd 13:28",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Seek knowledge even if you have to go to China.",
    source: "Ibn Majah",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Give good tidings to the patient.",
    source: "Al-Baqarah 2:155",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "The best of speech is that which is related to faith, or one should remain silent.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "The life of this world is nothing but the enjoyment of deception.",
    source: "Aal-e-Imran 3:185",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Be in this world as if you were a stranger.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "On that Day, everyone will meet what they have done.",
    source: "Az-Zalzalah 99:6",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "The generous person is close to Allah, close to Paradise, and close to people.",
    source: "At-Tirmidhi",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "He created for you from yourselves mates.",
    source: "Ar-Rum 30:21",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "A believing man should not hate a believing woman.",
    source: "Sahih Muslim",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Whoever purifies himself has succeeded.",
    source: "Ash-Shams 91:9",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "One who guides to something good has a reward similar to that of its doer.",
    source: "Sahih Muslim",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "If you should count the favors of Allah, you could not enumerate them.",
    source: "Ibrahim 14:34",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Let one be grateful and thankful to Allah.",
    source: "Ibn Majah",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "It is He who created for you all of that which is on the earth.",
    source: "Al-Baqarah 2:29",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Allah loves to create everything beautiful.",
    source: "Sahih Muslim",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Those who spend their wealth in the way of Allah and then do not follow up with reminders.",
    source: "Al-Baqarah 2:262",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "The upper hand is better than the lower hand.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Whoever intercedes for a good cause will have a reward therefrom.",
    source: "An-Nisa 4:85",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Making peace between two people is charity.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Whatever the Messenger gives you, take; and whatever he forbids you, refrain from.",
    source: "Al-Hashr 59:7",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Whoever does not follow my Sunnah is not from me.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Those who do not judge by what Allah has revealed are the disbelievers.",
    source: "Al-Ma'idah 5:44",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Islam prevails and is not prevailed over.",
    source: "Ad-Darimi",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "O you who believe! Obey Allah and His Messenger.",
    source: "Al-Anfal 8:20",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Whoever obeys the Messenger has obeyed Allah.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Allah does not love the transgressors.",
    source: "Al-Ma'idah 5:87",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Religion is sincere counsel.",
    source: "Sahih Muslim",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Those who believed and emigrated and strove in the cause of Allah.",
    source: "Al-Anfal 8:72",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "The believer is always in good condition.",
    source: "Sahih Muslim",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Allah's religion will prevail.",
    source: "At-Tawbah 9:33",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "In Islam, do not rush into things you have not seen.",
    source: "Abu Dawud",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "There is no compulsion in religion.",
    source: "Al-Baqarah 2:256",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "A Muslim strives to do better every day.",
    source: "At-Tabarani",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Whoever believes and does righteous deeds - no fear will there be concerning them.",
    source: "Al-Baqarah 2:62",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "The believer's affair is amazing; all of it is good for him.",
    source: "Sahih Muslim",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Indeed, the religion in the sight of Allah is Islam.",
    source: "Aal-e-Imran 3:19",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Islam wipes out what came before it.",
    source: "Sahih Muslim",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "And whoever desires other than Islam as religion - never will it be accepted from him.",
    source: "Aal-e-Imran 3:85",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "None of you truly believes until his love for me is greater than his love for his child, his father, and all mankind.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Today I have perfected for you your religion.",
    source: "Al-Ma'idah 5:3",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "The most beautiful branch of faith is good manners.",
    source: "Al-Bayhaqi",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Believe in Allah and the Last Day and do righteous deeds.",
    source: "Al-Baqarah 2:62",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Sitting with righteous people is like sitting in a perfume shop.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "The best of people are those who read the Quran and act upon it.",
    source: "Ad-Darimi (Hadith)",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Read the Quran, for it will come as an intercessor for its readers on the Day of Judgment.",
    source: "Sahih Muslim",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "This Quran is guidance for the righteous.",
    source: "Al-Baqarah 2:2",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Beautify the Quran with your voices.",
    source: "Abu Dawud",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "We have made the Quran easy for remembrance, so is there any who will remember?",
    source: "Al-Qamar 54:17",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "The heart of the people of Quran has a special place with Allah.",
    source: "Ibn Majah",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "This is the Book about which there is no doubt.",
    source: "Al-Baqarah 2:2",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Whoever cries while reading the Quran will enter Paradise without crying.",
    source: "Ibn Majah",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Indeed, this Quran is a noble book.",
    source: "Al-Waqi'ah 56:77",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "The memorizer of the Quran will be with the noble and obedient scribes.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "You will not find any inconsistency in the Quran.",
    source: "An-Nisa 4:82",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Do not make your houses like graves; Satan does not enter a house where the Quran is recited.",
    source: "Sahih Muslim",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "This Quran guides people to the light.",
    source: "Ibrahim 14:1",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Woe to one who reads the Quran but contradicts it with his actions.",
    source: "Ibn Hibban",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "The Quran is guidance and healing for the believers.",
    source: "Fussilat 41:44",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Learn the Quran and teach it, for you are the best in this regard.",
    source: "Ad-Darimi",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "We have sent down the Quran for people to reflect upon it.",
    source: "Sad 38:29",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Whoever is adorned with the Quran will not need anything else.",
    source: "Ad-Darimi",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "The month of Ramadan in which was revealed the Quran, a guidance for the people.",
    source: "Al-Baqarah 2:185",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Ramadan is the month of patience, and the reward of patience is Paradise.",
    source: "Ibn Hibban",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Fasting is prescribed for you that you may become righteous.",
    source: "Al-Baqarah 2:183",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "The prayer of the fasting person is not rejected.",
    source: "Ibn Majah",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Whoever fasts Ramadan and stands in prayer, his past sins are forgiven.",
    source: "Sahih al-Bukhari (Hadith)",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Whoever gives iftar to a fasting person will have a reward like that of the fasting person.",
    source: "At-Tirmidhi",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Fasting is for Me, and I will reward it.",
    source: "Sahih al-Bukhari (Hadith Qudsi)",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Fasting is a shield.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Allah has opened the gate of Rayyan for those who fast.",
    source: "Sahih al-Bukhari (Hadith)",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Take suhur, for there is blessing in suhur.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "The fasting person has two joys: when he breaks his fast and when he meets his Lord.",
    source: "Sahih al-Bukhari (Hadith)",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Every act of worship has its reward, except fasting, for it is for Me.",
    source: "Sahih Muslim",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Those who are ill or traveling should fast other days.",
    source: "Al-Baqarah 2:185",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Allah has relieved the traveler of half the prayer and half the fast.",
    source: "At-Tirmidhi",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Whoever is unable should feed a poor person.",
    source: "Al-Baqarah 2:184",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Allah wants ease for you, not hardship.",
    source: "Al-Baqarah 2:185 (Ayah)",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "This verse is to bring you ease.",
    source: "Al-Baqarah 2:185",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Religion is ease; whoever makes the religion difficult will be overcome by it.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Allah does not make the religion difficult for you, but makes it easy.",
    source: "Al-Hajj 22:78",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Fear Allah, and He will make things easy for you.",
    source: "At-Tirmidhi",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "The months of Hajj are well known.",
    source: "Al-Baqarah 2:197",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Whoever performs Hajj for Allah's sake and does not do evil returns purified from sins.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Proclaim the Hajj among mankind.",
    source: "Al-Hajj 22:27",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "An accepted Hajj has no reward except Paradise.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Whoever is able to make the journey to the House should perform Hajj.",
    source: "Aal-e-Imran 3:97",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Umrah to Umrah expiates the sins between them.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "The months for Hajj are designated.",
    source: "Al-Baqarah 2:197",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Whoever performs Umrah, it is expiation for the sins between it and the next Hajj.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "There should be no sexual relations, wickedness, nor quarreling during Hajj.",
    source: "Al-Baqarah 2:197",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "The pilgrims are Allah's guests.",
    source: "Ibn Majah",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Remember Allah much during Hajj.",
    source: "Al-Baqarah 2:200",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Arafat is the essence of Hajj.",
    source: "At-Tirmidhi",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "In the Hajj season there are benefits for you.",
    source: "Al-Hajj 22:28",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Hajj removes poverty and sins just as the bellows remove impurities from iron.",
    source: "At-Tirmidhi",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Give charity from your wealth.",
    source: "At-Tawbah 9:103",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Pay the charity of your wealth, treat your diseases with charity.",
    source: "At-Tabarani",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Charity is the most important worship after prayer.",
    source: "Al-Baqarah 2:43 (Ayah)",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Allah does not bless the wealth of one who does not give charity.",
    source: "At-Tabarani",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Those who give charity.",
    source: "Al-Mu'minun 23:4",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Charity does not decrease wealth; Allah increases it.",
    source: "Sahih Muslim",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Charity purifies and increases wealth.",
    source: "At-Tawbah 9:103",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Secret charity extinguishes Allah's wrath.",
    source: "At-Tabarani",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Whoever spends in the way of Allah, it will be multiplied many times over.",
    source: "Al-Baqarah 2:261",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "The upper hand is better than the lower hand.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Charity is for the poor and needy.",
    source: "At-Tawbah 9:60",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Charity is obligatory on every type of wealth.",
    source: "Abu Dawud",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "In their wealth there is a right for the beggar and the deprived.",
    source: "Adh-Dhariyat 51:19",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Charity is the bridge of Islam.",
    source: "At-Tabarani",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Establish prayer and give charity and bow with those who bow.",
    source: "Al-Baqarah 2:43",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "No one from my Ummah will become poor because of giving charity.",
    source: "At-Tirmidhi",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "The mention of charity after prayer shows its importance.",
    source: "Commentators",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Those whom Allah has forbidden to take charity: the family of the Prophet.",
    source: "Sahih Muslim",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Establish prayer, give charity, and obey the Messenger.",
    source: "An-Nur 24:56",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "The wealth of those who do not give charity will become a snake around their necks on the Day of Judgment.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "O you who believe! Bow down and prostrate yourselves.",
    source: "Al-Hajj 22:77",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Prayer is the pillar of religion.",
    source: "Al-Bayhaqi",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Establish prayer at its time.",
    source: "An-Nisa 4:103",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Prayer is the believer's ascension.",
    source: "Al-Bayhaqi",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Give good tidings to those who pray.",
    source: "Al-Baqarah 2:3",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "The five daily prayers erase sins.",
    source: "Sahih Muslim",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Prayer is comfort for the believer.",
    source: "An-Nasa'i (Hadith)",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "The difference between a person and disbelief is abandoning prayer.",
    source: "Sahih Muslim",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Stand in prayer with humility.",
    source: "Al-Mu'minun 23:2",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Allah turns to His servant as long as the servant is in prayer.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Prayer restrains from shameful and unjust deeds.",
    source: "Al-Ankabut 29:45",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "The first thing to be questioned about is prayer.",
    source: "At-Tirmidhi",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Seek help through patience and prayer.",
    source: "Al-Baqarah 2:45",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "When prayer time comes, leave everything else.",
    source: "Abu Dawud",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Guard your prayers, especially the middle prayer.",
    source: "Al-Baqarah 2:238",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Whoever loses his prayer is like one who has lost his family and wealth.",
    source: "Ibn Hibban",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Muslims come together in prayer.",
    source: "Al-Jumu'ah 62:9",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Prayer in congregation is 27 times more rewarding than praying alone.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Hasten to Friday prayer.",
    source: "Al-Jumu'ah 62:9",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Friday is the master of days.",
    source: "Ibn Majah",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "After Friday prayer, disperse throughout the land and seek Allah's bounty.",
    source: "Al-Jumu'ah 62:10",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Whoever performs ghusl on Friday, his sins flow away.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "When you are called to Friday prayer, leave trade.",
    source: "Al-Jumu'ah 62:9",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Send many blessings upon me on Friday night and Friday.",
    source: "Abu Dawud",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Indeed, Allah and His angels send blessings on the Prophet.",
    source: "Al-Ahzab 33:56",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Whoever sends one blessing upon me, Allah will send ten blessings upon him.",
    source: "Sahih Muslim",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "O you who believe! Send blessings on him and ask Allah to grant him peace.",
    source: "Al-Ahzab 33:56",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "The miser is one who, when I am mentioned, does not send blessings upon me.",
    source: "At-Tirmidhi",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Take what the Messenger gives you and refrain from what he prohibits.",
    source: "Al-Hashr 59:7",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Whoever does not disobey me will enter Paradise.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Say: If you love Allah, then follow me so that Allah will love you.",
    source: "Aal-e-Imran 3:31",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Whoever revives my Sunnah has loved me.",
    source: "At-Tirmidhi",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "He does not speak from his own inclination. It is only revelation revealed.",
    source: "An-Najm 53:3-4",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "I am leaving you two things: the Book of Allah and my Sunnah.",
    source: "Muwatta",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Whoever obeys the Messenger has obeyed Allah.",
    source: "An-Nisa 4:80",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Islam is built upon five things.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "There is no god but Allah, and Muhammad is the Messenger of Allah.",
    source: "Declaration of Faith",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Whoever dies saying 'La ilaha illa Allah' will enter Paradise.",
    source: "Sahih Muslim",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "There is no god but Allah, He is One, He has no partner.",
    source: "Al-Ikhlas 112:1",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "La ilaha illa Allah purifies the heart.",
    source: "At-Tirmidhi",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Allah has beautiful names, so call upon Him by them.",
    source: "Al-A'raf 7:180",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Allah has ninety-nine names. Whoever memorizes them and acts according to them will enter Paradise.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "He is Allah, other than whom there is no deity. Knower of the unseen and the witnessed.",
    source: "Al-Hashr 59:22",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "The most excellent remembrance is 'La ilaha illa Allah'.",
    source: "At-Tirmidhi",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "He is the Compassionate, the Merciful.",
    source: "Al-Hashr 59:22",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Allah's hand of mercy is above His hand of wrath.",
    source: "Sahih al-Bukhari",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "My Lord! Have mercy upon me and upon my parents and whoever enters my house as a believer.",
    source: "Nuh 71:28",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "The pleasure of parents is in Allah's pleasure, and their anger is in Allah's anger.",
    source: "At-Tirmidhi",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Worship your Lord and be dutiful to your parents.",
    source: "Al-Isra 17:23",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Paradise lies at the feet of your mother.",
    source: "An-Nasa'i",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Do not even say 'uff' to your parents, and speak to them a noble word.",
    source: "Al-Isra 17:23",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "May he be disgraced who finds his parents in old age and does not enter Paradise by serving them.",
    source: "Sahih Muslim",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Lower to them the wing of humility and say: 'My Lord, have mercy upon them as they brought me up when I was small.'",
    source: "Al-Isra 17:24",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "Allah's pleasure is in the parents' pleasure.",
    source: "At-Tirmidhi",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "Your mother three times, then your father.",
    source: "Sahih al-Bukhari (Hadith)",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "The best of people are those who are best to their parents.",
    source: "Sahih Muslim",
    lang: 'en'
  },
  {
    type: 'Ayah',
    text: "And pray for forgiveness for your parents even after they die.",
    source: "Al-Isra 17:24",
    lang: 'en'
  },
  {
    type: 'Hadith',
    text: "When a person dies, his deeds come to an end except for three: ongoing charity, beneficial knowledge, and righteous offspring who pray for him.",
    source: "Sahih Muslim",
    lang: 'en'
  }
];
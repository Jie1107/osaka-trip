// 行前檢查清單 - 完整版（依手持/托運分類）
const checklistData = {
  "✈️ 手持行李（隨身）": [
    // 證件文件 - 必須隨身
    { id: "passport", name: "護照（效期超過6個月）", required: true },
    { id: "passport-copy", name: "護照影本 x2", required: true },
    { id: "id-card", name: "身分證", required: true },
    { id: "flight-ticket", name: "機票電子憑證（列印備份）", required: true },
    { id: "hotel-booking", name: "飯店訂房確認單", required: true },
    { id: "insurance", name: "旅遊平安險保單", required: true },
    {
      id: "credit-card",
      name: "信用卡（VISA/Mastercard/JCB）",
      required: true,
    },
    { id: "cash-yen", name: "日圓現金", required: true },
    { id: "cash-twd", name: "台幣備用金", required: false },
    // 電子設備 - 隨身
    { id: "phone", name: "手機", required: true },
    { id: "charger", name: "手機充電器", required: true },
    {
      id: "power-bank",
      name: "行動電源（須隨身・10000mAh內）",
      required: true,
    },
    { id: "sim-card", name: "日本SIM卡/eSIM", required: true },
    { id: "earphones", name: "耳機", required: false },
    { id: "tablet", name: "平板", required: false },
    // 隨身包
    { id: "backpack", name: "後背包（隨身行李）", required: true },
    { id: "shoulder-bag", name: "側背小包/腰包", required: false },
    { id: "neck-pillow", name: "頸枕", required: false },
    { id: "eye-mask", name: "眼罩/耳塞", required: false },
    // 藥品 - 建議隨身
    {
      id: "personal-medicine",
      name: "個人藥品（處方藥帶藥袋）",
      required: true,
    },
    { id: "motion-sickness", name: "暈車/暈機藥", required: false },
    // 其他隨身
    { id: "tissues", name: "面紙/濕紙巾", required: true },
    { id: "mask", name: "口罩", required: true },
    { id: "light-jacket", name: "薄外套（機上冷氣用）", required: true },
  ],
  "🧳 托運行李": [
    // 行李箱
    { id: "luggage", name: "行李箱（28吋以內・23kg）", required: true },
    { id: "luggage-lock", name: "TSA海關鎖", required: true },
    { id: "luggage-tag", name: "行李吊牌", required: true },
    { id: "packing-cubes", name: "壓縮袋/收納袋", required: false },
    { id: "laundry-bag", name: "髒衣袋", required: false },
    { id: "folding-bag", name: "折疊購物袋（買東西用）", required: true },
    // 衣物
    { id: "clothes", name: "換洗衣物（6天份）", required: true },
    { id: "underwear", name: "內衣褲（6天份+備用）", required: true },
    { id: "socks", name: "襪子（6雙）", required: true },
    { id: "sleepwear", name: "睡衣", required: false },
    { id: "swimwear", name: "泳衣（如住有泳池飯店）", required: false },
    { id: "rain-gear", name: "雨具（摺疊傘/雨衣）", required: true },
    { id: "walking-shoes", name: "好走的鞋子", required: true },
    { id: "slippers", name: "拖鞋/涼鞋", required: false },
    { id: "hat", name: "帽子", required: true },
    { id: "sunglasses", name: "太陽眼鏡", required: false },
    // 盥洗保養（液體須托運或100ml以下）
    { id: "toiletries-bag", name: "盥洗包", required: true },
    { id: "toothbrush", name: "牙刷牙膏", required: true },
    { id: "shampoo", name: "洗髮精（旅行瓶100ml以下）", required: false },
    { id: "body-wash", name: "沐浴乳（旅行瓶100ml以下）", required: false },
    { id: "facial-wash", name: "洗面乳", required: true },
    { id: "skincare", name: "保養品（100ml以下）", required: true },
    { id: "sunscreen", name: "防曬乳", required: true },
    { id: "makeup", name: "化妝品", required: false },
    { id: "makeup-remover", name: "卸妝用品", required: false },
    { id: "razor", name: "刮鬍刀（須托運）", required: false },
    { id: "towel", name: "毛巾/速乾巾", required: false },
    { id: "sanitary", name: "生理用品", required: false },
    // 藥品
    { id: "cold-medicine", name: "感冒藥", required: true },
    { id: "stomach-medicine", name: "腸胃藥", required: true },
    { id: "painkiller", name: "止痛藥", required: true },
    { id: "band-aids", name: "OK繃", required: true },
    { id: "antibiotic-cream", name: "外傷藥膏", required: false },
    { id: "allergy-medicine", name: "過敏藥", required: false },
    { id: "eye-drops", name: "眼藥水", required: false },
    { id: "hand-sanitizer", name: "乾洗手/酒精（100ml以下）", required: false },
    // 電子設備
    { id: "adapter", name: "萬用轉接頭（日本110V雙平頭）", required: false },
    { id: "camera", name: "相機", required: false },
    { id: "camera-charger", name: "相機充電器/電池", required: false },
    { id: "sd-card", name: "記憶卡備用", required: false },
  ],
  "📋 出發前確認": [
    { id: "check-passport-expiry", name: "確認護照效期", required: true },
    { id: "download-offline-map", name: "下載離線地圖", required: true },
    { id: "inform-bank", name: "通知銀行出國（避免刷卡被擋）", required: true },
    { id: "check-weather", name: "確認目的地天氣", required: true },
    { id: "home-security", name: "關好門窗、冷氣、瓦斯", required: true },
    { id: "water-plants", name: "請人澆花/照顧寵物", required: false },
    { id: "mobile-roaming", name: "開通國際漫遊或準備WiFi", required: true },
    { id: "app-ready", name: "下載必備APP（交通、翻譯）", required: true },
    { id: "backup-data", name: "手機資料備份", required: false },
    { id: "airport-parking", name: "機場停車預訂（如自駕）", required: false },
    { id: "visa", name: "簽證確認（台灣免簽90天）", required: true },
    { id: "emergency-contact", name: "緊急聯絡人資訊", required: true },
    { id: "itinerary", name: "行程表列印", required: false },
    { id: "driver-license", name: "國際駕照（如需租車）", required: false },
  ],
};

// 常用日語
const japaneseData = [
  {
    situation: "問路",
    japanese: "すみません、〇〇はどこですか？",
    romaji: "Sumimasen, 〇〇 wa doko desu ka?",
    meaning: "不好意思，〇〇在哪裡？",
  },
  {
    situation: "感謝",
    japanese: "ありがとうございます",
    romaji: "Arigatou gozaimasu",
    meaning: "非常感謝",
  },
  {
    situation: "道歉/借過",
    japanese: "すみません",
    romaji: "Sumimasen",
    meaning: "不好意思/對不起",
  },
  {
    situation: "數量確認",
    japanese: "〇つください",
    romaji: "〇tsu kudasai",
    meaning: "請給我〇個",
  },
  {
    situation: "點餐",
    japanese: "これをください",
    romaji: "Kore wo kudasai",
    meaning: "請給我這個",
  },
  {
    situation: "結帳",
    japanese: "お会計お願いします",
    romaji: "Okaikei onegaishimasu",
    meaning: "請幫我結帳",
  },
  {
    situation: "價格詢問",
    japanese: "いくらですか？",
    romaji: "Ikura desu ka?",
    meaning: "多少錢？",
  },
  {
    situation: "確認",
    japanese: "これでいいですか？",
    romaji: "Kore de ii desu ka?",
    meaning: "這樣可以嗎？",
  },
  {
    situation: "拒絕",
    japanese: "結構です",
    romaji: "Kekkou desu",
    meaning: "不用了，謝謝",
  },
  {
    situation: "幫忙",
    japanese: "助けてください",
    romaji: "Tasukete kudasai",
    meaning: "請幫幫我",
  },
  {
    situation: "拍照請求",
    japanese: "写真を撮っていただけますか？",
    romaji: "Shashin wo totte itadakemasu ka?",
    meaning: "可以幫我拍照嗎？",
  },
  {
    situation: "廁所詢問",
    japanese: "トイレはどこですか？",
    romaji: "Toire wa doko desu ka?",
    meaning: "廁所在哪裡？",
  },
];

// 地點資料（用於地圖導航）+ 營業時間
const locations = {
  // 京都飯店
  "Hotel M's Est Kyoto Station South": {
    name: "Hotel M's Est Kyoto Station South",
    nameJp: "Hotel M's Est Kyoto Station South",
    hours: "Check-in 16:00",
  },
  // 大阪飯店
  "Hotel Boti Boti": {
    name: "Hotel Boti Boti",
    nameJp: "Hotel Boti Boti",
    hours: "Check-in 16:00",
  },
  // 先斗町
  Kashiwayacho: {
    name: "Kashiwayacho",
    nameJp: "先斗町 柏屋町",
    hours: "餐廳/酒吧 17:00-23:00 (依店家)",
  },
  // 野宮神社
  野宮神社: {
    name: "野宮神社",
    nameJp: "野宮神社",
    hours: "9:00-17:00",
  },
  // 炸牛排 京都勝牛 京都站前店
  "炸牛排 京都勝牛 京都站前店": {
    name: "炸牛排 京都勝牛 京都站前店",
    nameJp: "京都勝牛 京都駅前店",
    hours: "11:00-22:00",
  },
  // 燒肉力丸 難波道頓堀店
  "燒肉力丸 難波道頓堀店": {
    name: "燒肉力丸 難波道頓堀店",
    nameJp: "焼肉力丸 難波道頓堀店",
    hours: "11:30-23:00",
  },
  // 金龍拉麵
  金龍拉麵: {
    name: "金龍拉麵",
    nameJp: "金龍ラーメン",
    hours: "24H",
  },
  // 機場
  桃園國際機場第一航廈: {
    name: "桃園國際機場第一航廈",
    nameJp: "桃園國際空港第一ターミナル",
    hours: "24H",
  },
  關西國際機場第一航廈: {
    name: "關西國際機場第一航廈",
    nameJp: "関西国際空港第一ターミナル",
    hours: "24H",
  },

  // 飯店
  "bestwestern-joytel-osaka": {
    name: "Best Western Joytel Osaka",
    nameJp: "ベストウェスタンジョイテル大阪",
    hours: "Check-in 15:00",
  },

  // DAY 1
  難波站: {
    name: "難波站",
    nameJp: "なんば駅",
    hours: "首班 5:00 / 末班 24:00",
  },
  道頓堀: {
    name: "道頓堀",
    nameJp: "道頓堀",
    hours: "24H（店家約 10:00-23:00）",
  },
  心齋橋: {
    name: "心齋橋",
    nameJp: "心斎橋",
    hours: "11:00-21:00（因店而異）",
  },
  戎橋筋: { name: "戎橋筋", nameJp: "戎橋筋", hours: "10:00-21:00" },
  法善寺橫丁: {
    name: "法善寺橫丁",
    nameJp: "法善寺横丁",
    hours: "24H（店家約 17:00-24:00）",
  },

  // DAY 2 - 大阪城、通天閣
  大阪城: {
    name: "大阪城",
    nameJp: "大阪城",
    hours: "公園 24H / 天守閣 9:00-17:00",
  },
  大阪城天守閣: {
    name: "大阪城天守閣",
    nameJp: "大阪城天守閣",
    hours: "9:00-17:00（¥600）",
  },
  通天閣: { name: "通天閣", nameJp: "通天閣", hours: "10:00-20:00（¥900）" },
  新世界: { name: "新世界", nameJp: "新世界", hours: "店家約 11:00-22:00" },
  梅田: { name: "梅田", nameJp: "梅田", hours: "百貨 10:00-21:00" },
  梅田藍天大廈: {
    name: "梅田藍天大廈",
    nameJp: "梅田スカイビル",
    hours: "展望台 9:30-22:30（¥1,500）",
  },
  "HEP FIVE": {
    name: "HEP FIVE",
    nameJp: "HEP FIVE",
    hours: "11:00-21:00 / 摩天輪 -23:00",
  },
  "Yodobashi Camera 梅田": {
    name: "Yodobashi Camera 梅田",
    nameJp: "ヨドバシカメラ梅田",
    hours: "9:30-22:00",
  },
  "Grand Front Osaka": {
    name: "Grand Front Osaka",
    nameJp: "グランフロント大阪",
    hours: "11:00-21:00",
  },
  空中庭園展望台: {
    name: "空中庭園展望台",
    nameJp: "空中庭園展望台",
    hours: "9:30-22:30",
  },

  // DAY 3 - 京都
  竹林小徑: {
    name: "竹林小徑",
    nameJp: "嵐山 竹林の小径",
    hours: "24H（建議 9:00 前）",
  },
  渡月橋: { name: "渡月橋", nameJp: "渡月橋", hours: "24H" },
  天龍寺: { name: "天龍寺", nameJp: "天龍寺", hours: "8:30-17:00（¥500）" },
  金閣寺: { name: "金閣寺", nameJp: "金閣寺", hours: "9:00-17:00（¥500）" },
  伏見稻荷大社: {
    name: "伏見稻荷大社",
    nameJp: "伏見稲荷大社",
    hours: "24H（建議白天）",
  },
  清水寺: { name: "清水寺", nameJp: "清水寺", hours: "6:00-18:00（¥400）" },
  二年坂三年坂: {
    name: "二年坂三年坂",
    nameJp: "二年坂・三年坂",
    hours: "店家約 10:00-18:00",
  },
  花見小路: {
    name: "花見小路",
    nameJp: "花見小路",
    hours: "24H（店家約 17:00-）",
  },
  八坂神社: { name: "八坂神社", nameJp: "八坂神社", hours: "24H" },
  祇園: { name: "祇園", nameJp: "祇園", hours: "店家約 11:00-22:00" },

  // DAY 4 - USJ
  日本環球影城: {
    name: "日本環球影城",
    nameJp: "ユニバーサル・スタジオ・ジャパン",
    hours: "9:00-21:00（依日期變動）",
  },
  環球影城: {
    name: "日本環球影城",
    nameJp: "ユニバーサル・スタジオ・ジャパン",
    hours: "9:00-21:00",
  },
  USJ: {
    name: "日本環球影城",
    nameJp: "ユニバーサル・スタジオ・ジャパン",
    hours: "9:00-21:00",
  },
  環球城站: {
    name: "環球城站",
    nameJp: "ユニバーサルシティ駅",
    hours: "首班 5:30",
  },
  "City Walk": {
    name: "City Walk",
    nameJp: "シティウォーク",
    hours: "11:00-22:00",
  },

  // DAY 5 - 黑門市場、日本橋
  黑門市場: {
    name: "黑門市場",
    nameJp: "黒門市場",
    hours: "9:00-18:00（早去較新鮮）",
  },
  日本橋電器街: {
    name: "日本橋電器街",
    nameJp: "日本橋でんでんタウン",
    hours: "10:00-20:00",
  },
  天王寺: { name: "天王寺", nameJp: "天王寺", hours: "百貨 10:00-21:00" },
  阿倍野HARUKAS: {
    name: "阿倍野HARUKAS",
    nameJp: "あべのハルカス",
    hours: "展望台 9:00-22:00（¥1,500）",
  },
  元祖串炸達摩: {
    name: "元祖串炸達摩",
    nameJp: "元祖串カツだるま",
    hours: "11:00-22:30",
  },

  // DAY 6 - OUTLET
  臨空城OUTLET: {
    name: "臨空城OUTLET",
    nameJp: "りんくうプレミアムアウトレット",
    hours: "10:00-20:00",
  },
  臨空城站: {
    name: "臨空城站",
    nameJp: "りんくうタウン駅",
    hours: "首班 5:30",
  },
  "臨空Premium Outlet": {
    name: "臨空城OUTLET",
    nameJp: "りんくうプレミアムアウトレット",
    hours: "10:00-20:00",
  },

  // 奈良
  奈良公園: {
    name: "奈良公園",
    nameJp: "奈良公園",
    hours: "24H（鹿仙貝 ¥200）",
  },
  東大寺: { name: "東大寺", nameJp: "東大寺", hours: "7:30-17:30（¥600）" },
  春日大社: { name: "春日大社", nameJp: "春日大社", hours: "6:30-17:30" },
  奈良町: { name: "奈良町", nameJp: "ならまち", hours: "店家約 10:00-18:00" },
  近鐵奈良站: { name: "近鐵奈良站", nameJp: "近鉄奈良駅", hours: "首班 5:30" },
  大阪難波站: { name: "大阪難波站", nameJp: "大阪難波駅", hours: "首班 5:00" },
  中谷堂: { name: "中谷堂", nameJp: "中谷堂", hours: "10:00-19:00" },
  麵鬪庵: {
    name: "麵鬪庵",
    nameJp: "麺闘庵",
    hours: "11:00-14:30, 17:00-20:30",
  },
  志津香: { name: "志津香", nameJp: "志津香", hours: "11:00-20:00（週三休）" },

  // 別名對應（方便 HTML 中使用不同大小寫）
  阿倍野Harukas: {
    name: "阿倍野HARUKAS",
    nameJp: "あべのハルカス",
    hours: "展望台 9:00-22:00（¥1,500）",
  },
  臨空城Outlet: {
    name: "臨空城OUTLET",
    nameJp: "りんくうプレミアムアウトレット",
    hours: "10:00-20:00",
  },
  大理石海灘: {
    name: "大理石海灘",
    nameJp: "マーブルビーチ",
    hours: "24H（免費）",
  },
};

// 行程資料（用於分享功能）
const tripData = {
  title: "京阪神 6 天自由行",
  dates: "2026/7/27 - 8/1",
  travelers: "學生情侶",
  days: [
    {
      date: "7/27",
      title: "台灣→關西機場→京都",
      highlights: [
        "桃園國際機場第一航廈",
        "虎航 IT210 07:00-10:55",
        "關西國際機場第一航廈",
        "ICOCA+HARUKA 票券購買",
        "JR HARUKA 特急",
        "京都車站",
        "Hotel M's Est Kyoto Station South",
        "Check-in導航直接搜Hotel M's Est Kyoto Station South",
        "鴨川/先斗町 散步",
        "Kashiwayacho",
        "京都勝牛 (炸牛排)直接搜炸牛排 京都勝牛 京都站前店 日本〒600-8211 Kyoto, Shimogyo Ward, Maoyacho, 211",
        "飯店入住",
      ],
    },
    {
      date: "7/28",
      title: "嵐山・清水寺・祇園",
      highlights: [
        "【移動】飯店 → 嵐山 (JR嵯峨野線)",
        "嵐山竹林小徑",
        "野宮神社",
        "天龍寺 (曹源池庭園)",
        "渡月橋",
        "嵐山大街",
        "午餐：廣川鰻魚飯 或 嵐山吉村",
        "【移動】嵐山 → 清水寺 (計程車或JR)",
        "清水寺",
        "二年坂三年坂",
        "花見小路",
        "八坂神社",
        "祇園",
        "晚餐：名代豬排 (Katsukura) 或 一蘭拉麵",
        "導航回飯店",
      ],
    },
    {
      date: "7/29",
      title: "伏見稻荷・奈良・大阪",
      highlights: [
        "【移動】京都 → 伏見稻荷（寄放行李）",
        "伏見稻荷大社 (千本鳥居)",
        "【移動】伏見稻荷 → 奈良（寄放行李）",
        "奈良公園 (餵鹿) + 東大寺",
        "午餐：奈良志津香釜飯 (公園店) 或 烏龍麵",
        "【移動】奈良 → 大阪難波",
        "Hotel Boti Boti",
        "Check-in導航直接搜Hotel Boti Boti",
        "晚餐 & 逛街：道頓堀 / 心齋橋",
        "導航回飯店",
      ],
    },
    {
      date: "7/30",
      title: "USJ 環球影城全日",
      highlights: [
        "飯店早餐",
        "JR 環狀線→西九條→櫻島線→環球城站",
        "日本環球影城 USJ",
        "哈利波特園區",
        "小小兵樂園",
        "超級任天堂世界",
        "City Walk 晚餐",
        "晚餐 & 離園：燒肉力丸 難波道頓堀店直接搜",
        "導航回飯店",
      ],
    },
    {
      date: "7/31",
      title: "大阪市區・阿倍野展望台",
      highlights: [
        "黑門市場 早餐",
        "日本橋電器街",
        "大阪城公園/天守閣",
        "通天閣/新世界",
        "阿倍野HARUKAS 300展望台",
        "元祖串炸達摩 晚餐",
        "金龍拉麵",
        "飯店休息",
      ],
    },
    {
      date: "8/1",
      title: "臨空城OUTLET・回台灣",
      highlights: [
        "飯店退房",
        "南海電鐵→臨空城站",
        "臨空城OUTLET 購物",
        "大理石海灘",
        "關西國際機場第一航廈",
        "虎航 IT211 12:00-13:55",
        "桃園國際機場第一航廈",
      ],
    },
  ],
};

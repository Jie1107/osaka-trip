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
  "HOTEL SOBIAL": {
    name: "HOTEL SOBIAL なんば大国町",
    nameJp: "ホテルソビアル なんば大国町",
    hours: "Check-in 15:00",
  },
  ホテルソビアル: {
    name: "HOTEL SOBIAL なんば大国町",
    nameJp: "ホテルソビアル なんば大国町",
    hours: "Check-in 15:00",
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
  // 燒肉力丸 難波湊町店
  烤肉力丸難波湊町店: {
    name: "烤肉力丸 難波湊町店",
    nameJp: "焼肉力丸 なんば湊町店",
    hours: "17:00-23:00",
  },
  焼肉力丸: {
    name: "烤肉力丸 難波湊町店",
    nameJp: "焼肉力丸 なんば湊町店",
    hours: "17:00-23:00",
  },
  // 牛Mabushi 三山 (奈良)
  牛まぶし三山: {
    name: "牛Mabushi 三山",
    nameJp: "牛まぶし三山 JR奈良店",
    hours: "11:00-21:00",
  },
  // 難波八坂神社
  難波八坂神社: {
    name: "難波八坂神社",
    nameJp: "難波八阪神社",
    hours: "6:30-17:00",
  },
  // 璃光着物 (和服體驗)
  璃光着物レンタル: {
    name: "Riko Kimono Rental Kiyomizu Store",
    nameJp: "璃光着物レンタル 清水本店",
    hours: "9:00-18:00",
  },
  // 阿倍野 Q's Mall
  "阿倍野 Q's Mall": {
    name: "阿倍野 Q's Mall",
    nameJp: "あべのキューズモール",
    hours: "10:00-21:00",
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
  嵐山竹林: {
    name: "嵐山竹林小徑",
    nameJp: "嵐山 竹林の小径",
    hours: "24H（建議 9:00 前）",
  },
  渡月橋: { name: "渡月橋", nameJp: "渡月橋", hours: "24H" },
  天龍寺: { name: "天龍寺", nameJp: "天龍寺", hours: "8:30-17:00（¥500）" },
  廣川鰻魚飯: {
    name: "廣川鰻魚飯",
    nameJp: "うなぎ屋 廣川",
    hours: "11:30-14:30, 17:00-20:00",
  },
  京都車站: {
    name: "京都車站",
    nameJp: "京都駅",
    hours: "24H",
  },
  鴨川: {
    name: "鴨川",
    nameJp: "鴨川",
    hours: "24H",
  },
  先斗町: {
    name: "先斗町",
    nameJp: "先斗町",
    hours: "17:00-24:00",
  },
  京都勝牛: {
    name: "京都勝牛",
    nameJp: "京都勝牛 京都駅前店",
    hours: "11:00-22:00",
  },
  河原町: {
    name: "河原町",
    nameJp: "河原町",
    hours: "10:00-21:00",
  },
  JR奈良站: {
    name: "JR奈良站",
    nameJp: "JR奈良駅",
    hours: "首班 5:30",
  },
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

  // DAY 4
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
  JR難波站: { name: "JR 難波站", nameJp: "JR難波駅", hours: "首班 5:30" },
  南海難波駅: { name: "南海難波站", nameJp: "南海難波駅", hours: "首班 5:00" },
  近鐵難波駅: {
    name: "近鐵難波站",
    nameJp: "近鉄大阪難波駅",
    hours: "首班 5:30",
  },
  阪神難波駅: { name: "阪神難波站", nameJp: "阪神難波駅", hours: "首班 5:30" },
  關西國際機場站: { name: "關西機場站", nameJp: "関西空港駅", hours: "24H" },
  關西機場站: { name: "關西機場站", nameJp: "関西空港駅", hours: "24H" },
  關西國際空港駅: {
    name: "關西機場站",
    nameJp: "関西國際空港駅",
    hours: "24H",
  },
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
  // 車站別名（日文版對應）
  関西国際空港駅: {
    name: "關西機場站",
    nameJp: "関西国際空港駅",
    hours: "24H",
  },
  JR難波駅: {
    name: "JR難波站",
    nameJp: "JR難波駅",
    hours: "首班 5:30",
  },
  近鉄難波駅: {
    name: "近鐵難波站",
    nameJp: "近鉄大阪難波駅",
    hours: "首班 5:30",
  },
  "なんば駅 大阪メトロ": {
    name: "大阪地下鐵難波站",
    nameJp: "なんば駅",
    hours: "首班 5:00",
  },
  };

// 行程資料（用於分享功能）
const tripData = {
  title: "京阪神 6 天自由行",
  dates: "2026/7/27 - 8/1",
  travelers: "學生情侶",
  days: [
  {
    date: "Day 1 (7/27)",
    title: "啟程與京都初夜",
    highlights: ["高鐵桃園站", "桃園機場第一航廈", "關西機場", "京都車站", "Hotel M's Est Kyoto", "京都勝牛"]
  },
  {
    date: "Day 2 (7/28)",
    title: "嵐山晨光與清水道浴衣行",
    highlights: ["JR嵯峨嵐山站", "嵐山竹林小徑", "野宮神社", "渡月橋", "天龍寺", "Riko Kimono", "清水寺", "二年坂", "產寧坂", "河原町"]
  },
  {
    date: "Day 3 (7/29)",
    title: "伏見稻荷・奈良・前進大阪",
    highlights: ["伏見稻荷大社", "JR奈良站", "牛まぶし三山", "東大寺", "奈良公園", "HOTEL SOBIAL", "道頓堀", "心齋橋"]
  },
  {
    date: "Day 4 (7/30)",
    title: "達摩勝尾寺與梅田商圈",
    highlights: ["箕面萱野站", "勝尾寺", "梅田站", "Grand Front Osaka", "LUCUA", "HEP FIVE"]
  },
  {
    date: "Day 5 (7/31)",
    title: "大阪市區漫遊",
    highlights: ["難波八坂神社", "大阪城公園", "黑門市場", "通天閣", "新世界", "阿倍野 Q's Mall", "Harukas 300"]
  },
  {
    date: "Day 6 (8/1)",
    title: "臨空城最後衝刺與溫暖返家",
    highlights: ["南海難波站", "臨空城站", "大理石海灘", "Rinku Premium Outlets", "關西機場", "桃園機場"]
  }
]
};


// 完整且正確的國泰 6天5夜 自由行資料
window.tripData = {
  days: [
    {
      date: "Day 1 (7/27)",
      schedule: [
        { time: "06:34 - 07:26", activity: "高鐵出發", description: "搭乘 300N (雲林 → 桃園)", tags: ["🚆 高鐵 300N"] },
        { time: "07:40 - 08:00", activity: "機捷轉乘", description: "桃園機場捷運：高鐵桃園站(A18) → 第一航廈(A12)", tags: ["🚇 機場捷運"] },
        { time: "08:30", activity: "機場報到", description: "抵達機場報到、託運行李與吃早餐", tags: ["🍳 早餐"] },
        { time: "11:05 - 14:55", activity: "飛往關西", description: "搭乘航班 CX564 前往關西機場 (KIX)。利用時間開啟網卡、準備 HARUKA QR Code", tags: ["✈️ 國泰 CX564"] },
        { time: "15:00 - 16:30", activity: "入境通關", description: "入境通關戰役。先在機場超商買好飲料與輕食", tags: ["🛂 入境通關", "🍙 超商輕食"] },
        { time: "16:44", activity: "前往京都", description: "搭乘 JR 特急 HARUKA 40號 直達京都（備案：17:14 的 42號）", tags: ["🚆 HARUKA"] },
        { time: "18:04", activity: "抵達京都", description: "抵達京都車站。往 2F「西口/八條口(南口)」出站", tags: ["🚉 京都車站"] },
        { time: "18:20", activity: "入住飯店", description: "Check-in：Hotel M's Est Kyoto Station South", tags: ["🏨 M's Est"] },
        { time: "18:45", activity: "晚餐", description: "京都勝牛 京都站前店（備案：車站地下街 Porta）", tags: ["🥩 京都勝牛"] },
        { time: "20:30", activity: "回飯店", description: "回飯店休息，儲備明日體力", tags: ["🛏️ 休息"] }
      ]
    },
    {
      date: "Day 2 (7/28)",
      schedule: [
        { time: "05:20", activity: "起床", description: "早起避開人潮", tags: ["⏰ 起床"] },
        { time: "06:20", activity: "前往嵐山", description: "京都車站 32/33 月台搭乘 JR 嵯峨野線", tags: ["🚆 嵯峨野線"] },
        { time: "06:36", activity: "抵達嵐山", description: "抵達 JR 嵯峨嵐山站", tags: ["🚉 嵯峨嵐山"] },
        { time: "06:50", activity: "竹林與神社", description: "嵐山竹林小徑 + 野宮神社（避開人潮搶先拍照）", tags: ["🎋 竹林小徑", "⛩️ 野宮神社"] },
        { time: "07:40", activity: "嵐山大街", description: "嵐山大街 + 渡月橋（拍照、吃抹茶冰淇淋、喝 ARABICA 咖啡）", tags: ["🌉 渡月橋", "☕ ARABICA"] },
        { time: "08:30", activity: "天龍寺", description: "剛開門第一批進入參觀", tags: ["🏯 天龍寺"] },
        { time: "10:08 - 10:25", activity: "返回京都", description: "搭乘 JR 返回京都車站", tags: ["🚆 移動"] },
        { time: "10:35", activity: "轉乘計程車", description: "從京都車站中央口直接搭計程車前往「東大路通」準備上坡", tags: ["🚕 計程車"] },
        { time: "11:30", activity: "浴衣體驗", description: "Riko Kimono Rental (璃光着物) 換上輕薄浴衣抗暑", tags: ["👘 璃光着物"] },
        { time: "12:30", activity: "清水寺周邊", description: "清水寺 + 二年坂 + 產寧坂（正午極熱，隨時躲進店家吹冷氣）", tags: ["🏯 清水寺", "⛩️ 二年坂"] },
        { time: "16:30", activity: "歸還浴衣", description: "歸還浴衣，換回輕便服裝", tags: ["👗 換裝"] },
        { time: "18:00", activity: "晚餐", description: "河原町商圈 / 鴨川納涼床周邊（推薦：一蘭拉麵或壽喜燒）", tags: ["🍜 一蘭/壽喜燒"] },
        { time: "20:00", activity: "回飯店與打包", description: "整理明後天的換洗衣物放背包，剩下大行李打包好", tags: ["🧳 打包行李"] }
      ]
    },
    {
      date: "Day 3 (7/29)",
      schedule: [
        { time: "07:30", activity: "寄送行李", description: "大行李交給飯店櫃檯，使用 LuggAgent 寄往大阪（原飯店房號寫正確 203），背輕便背包出門", tags: ["🧳 LuggAgent"] },
        { time: "08:02", activity: "前往伏見", description: "搭乘 JR 奈良線（往奈良）", tags: ["🚆 JR 奈良線"] },
        { time: "08:15", activity: "伏見稻荷大社", description: "走到奧社折返即可", tags: ["🦊 千本鳥居"] },
        { time: "10:30", activity: "前往奈良", description: "搭乘 JR 奈良線前往奈良", tags: ["🚆 移動"] },
        { time: "11:40", activity: "抵達奈良", description: "抵達 JR 奈良站", tags: ["🚉 奈良站"] },
        { time: "11:45", activity: "午餐", description: "牛まぶし三山（主攻頂級黑毛和牛三吃）", tags: ["🥩 和牛午餐"] },
        { time: "13:00", activity: "轉乘公車", description: "站前搭公車至「東大寺大佛殿前」", tags: ["🚌 公車"] },
        { time: "13:15", activity: "東大寺與餵鹿", description: "東大寺 + 慢慢下坡走回奈良公園餵鹿", tags: ["🏯 東大寺", "🦌 餵鹿"] },
        { time: "15:34", activity: "移動至大阪", description: "近鐵奈良站搭「快速急行」至大阪難波（轉御堂筋線/四橋線至大國町站）", tags: ["🚆 快速急行"] },
        { time: "16:30", activity: "入住飯店", description: "Check-in：HOTEL SOBIAL Namba Daikokucho", tags: ["🏨 SOBIAL 大國町"] },
        { time: "18:00", activity: "晚餐與逛街", description: "道頓堀 / 心齋橋商圈", tags: ["🐙 道頓堀", "🛍️ 心齋橋"] }
      ]
    },
    {
      date: "Day 4 (7/30)",
      schedule: [
        { time: "08:30", activity: "起床", description: "準備出門", tags: ["⏰ 起床"] },
        { time: "09:30", activity: "前往箕面", description: "搭乘地下鐵御堂筋線，免換車直達終點「箕面萱野站」", tags: ["🚇 御堂筋線"] },
        { time: "10:25", activity: "轉乘公車", description: "北口搭乘「阪急巴士 36號」前往勝尾寺", tags: ["🚌 阪急巴士"] },
        { time: "10:45", activity: "勝尾寺", description: "滿山達摩娃娃拍照、寫願望", tags: ["🎯 達摩娃娃", "🏯 勝尾寺"] },
        { time: "13:00", activity: "午餐", description: "搭公車回箕面萱野站，於 Q's Mall 美食街用餐吹冷氣", tags: ["🍛 Q's Mall"] },
        { time: "14:30", activity: "前往梅田", description: "搭乘御堂筋線前往「梅田站」", tags: ["🚇 御堂筋線"] },
        { time: "15:00", activity: "梅田大採購", description: "梅田商圈大採購（Grand Front Osaka、LUCUA、HEP FIVE 摩天輪）", tags: ["🛍️ 梅田商圈", "🎡 摩天輪"] },
        { time: "18:30", activity: "晚餐", description: "梅田商圈周邊", tags: ["🍣 晚餐"] },
        { time: "20:00", activity: "回飯店", description: "回大國町飯店休息", tags: ["🛏️ 休息"] }
      ]
    },
    {
      date: "Day 5 (7/31)",
      schedule: [
        { time: "08:30", activity: "出門", description: "大國町站售票機買好 Enjoy Eco Card 平日版 (820 日圓)", tags: ["🎟️ 大阪地鐵一日券"] },
        { time: "09:30", activity: "難波八坂神社", description: "拍巨大獅子殿", tags: ["⛩️ 獅子殿"] },
        { time: "10:20", activity: "大阪城公園", description: "搭地鐵至谷町四丁目。不登塔，拍外圍護城河", tags: ["🏯 大阪城"] },
        { time: "11:50", activity: "早午餐", description: "黑門市場（日本橋站）。主攻現烤和牛肉串、草莓大福或當季白桃", tags: ["🥩 和牛串", "🍑 白桃"] },
        { time: "13:30", activity: "通天閣與新世界", description: "搭地鐵至惠美須町。出示一日券門票折抵變 800 日圓", tags: ["🗼 通天閣"] },
        { time: "14:40", activity: "室內逛街", description: "阿倍野 Q's Mall 或 Mio 百貨（室內避暑）", tags: ["🛍️ Q's Mall/Mio"] },
        { time: "17:00", activity: "阿倍野展望台", description: "帶實體學生證+地鐵一日券，買 1,800円優惠票。看夕陽到夜景", tags: ["🌆 Harukas 300"] },
        { time: "19:00", activity: "晚餐", description: "天王寺周邊，或回道頓堀吃宵夜", tags: ["🍜 晚餐/宵夜"] }
      ]
    },
    {
      date: "Day 6 (8/1)",
      schedule: [
        { time: "07:30", activity: "起床", description: "最後一天！", tags: ["⏰ 起床"] },
        { time: "08:30", activity: "退房與移動", description: "Check-out，帶行李前往南海難波站 (3F)", tags: ["🧳 退房"] },
        { time: "09:24", activity: "前往臨空城", description: "搭乘南海電鐵「空港急行」", tags: ["🚆 南海電鐵"] },
        { time: "10:02", activity: "抵達臨空城", description: "抵達臨空城站 (Rinku Town)", tags: ["🚉 臨空城站"] },
        { time: "10:10", activity: "寄放行李", description: "車站置物櫃滿了，直接推去 Outlet 寄放櫃檯", tags: ["🛅 寄放行李"] },
        { time: "10:30", activity: "大理石海灘", description: "Marble Beach 拍照", tags: ["🏖️ 照片時間"] },
        { time: "11:00", activity: "Outlet 最後血拼", description: "Rinku Premium Outlets 購物與午餐（推薦 Kua Aina 漢堡）", tags: ["🛍️ 購物", "🍔 Kua Aina"] },
        { time: "13:15", activity: "前往機場", description: "搭乘南海電鐵或 JR，一站抵達關西機場", tags: ["🚆 一站至機場"] },
        { time: "13:30", activity: "機場報到", description: "機場報到、免稅店最後採買", tags: ["✈️ 報到託運", "🎁 免稅店"] },
        { time: "16:15 - 18:15", activity: "返台航班", description: "CX565 起飛，帶著滿滿回憶抵達桃園機場 (TPE)", tags: ["✈️ 國泰 CX565"] },
        { time: "18:15 - 19:30", activity: "入境與領行李", description: "入境通關、領取行李", tags: ["🧳 領行李"] },
        { time: "19:40 - 20:00", activity: "機捷轉乘", description: "搭乘機場捷運至高鐵桃園站（可吃晚餐）", tags: ["🚇 機場捷運"] },
        { time: "21:34 - 22:39", activity: "高鐵返家", description: "搭乘高鐵 861N (桃園 → 雲林)，平安返家", tags: ["🚆 高鐵返回雲林"] }
      ]
    }
  ]
};

window.checklistData = {
  "✈️ 絕對必帶（隨身機上）": [
    { id: "passport", name: "護照（效期逾半年）", required: true },
    { id: "ticket", name: "機票 / HARUKA QR Code", required: true },
    { id: "wallet", name: "日圓現金 / 信用卡", required: true },
    { id: "powerbank", name: "行動電源 (極重要! 不可托運)", required: true },
    { id: "vjw", name: "Visit Japan Web / eSIM 憑證", required: true },
    { id: "student_id", name: "實體學生證 (阿倍野優惠用)", required: true }
  ],
  "🧳 托運行李（飯店）": [
    { id: "clothes", name: "夏季防中暑通風衣物", required: true },
    { id: "umbrella", name: "晴雨兩用傘 / 涼感濕紙巾", required: true },
    { id: "meds", name: "常備藥品 (腸胃/止痛/OK繃)", required: true },
    { id: "shoes", name: "好穿耐走的運動鞋", required: true },
    { id: "shopping-bag", name: "折疊旅行袋 (裝戰利品)", required: false }
  ]
};

window.locations = [
  { name: "Hotel M's Est 京都站南", lat: 34.9830, lng: 135.7600, desc: "Day 1-2 住宿：京都車站西口/八條口旁。" },
  { name: "嵐山竹林小徑", lat: 35.0169, lng: 135.6713, desc: "Day 2 避開人潮清幽竹林與天龍寺。" },
  { name: "清水寺 (璃光着物)", lat: 34.9948, lng: 135.7850, desc: "換上浴衣在產寧坂與古寺踏青。" },
  { name: "伏見稻荷大社", lat: 34.9671, lng: 135.7726, desc: "千本鳥居打卡熱點。" },
  { name: "奈良東大寺", lat: 34.6889, lng: 135.8398, desc: "找小鹿玩與參觀大佛。" },
  { name: "HOTEL SOBIAL 難波大國町", lat: 34.6568, lng: 135.4975, desc: "Day 3-5 住宿：大國町交通樞紐旁。" },
  { name: "勝尾寺", lat: 34.8644, lng: 135.4912, desc: "滿山達摩娃娃祈願聖地。" },
  { name: "梅田商圈", lat: 34.7024, lng: 135.4959, desc: "Grand Front Osaka, HEP FIVE 無限血拼。" },
  { name: "阿倍野 Harukas 300", lat: 34.6458, lng: 135.5140, desc: "關西最高樓無敵夕陽與夜景(記得帶學生證!)。" },
  { name: "臨空城 Outlet", lat: 34.4069, lng: 135.2955, desc: "登機前最後一波大血拼。" }
];

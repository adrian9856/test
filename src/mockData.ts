import { Itinerary } from "./types";

export const MOCK_ITINERARY: Itinerary = {
  destination: "首爾，南韓",
  duration: 9,
  summary: "為期 9 天的首爾及其周邊地區深度之旅，包含賞櫻、傳統宮殿和現代購物區。🌸",
  flights: {
    outbound: {
      number: "TPE → ICN",
      airline: "Flight",
      departureTime: "01:20 PM",
      arrivalTime: "04:50 PM",
      departureAirport: "TPE T1",
      arrivalAirport: "ICN T2",
      terminal: "1"
    },
    return: {
      number: "ICN → TPE",
      airline: "Flight",
      departureTime: "04:10 PM",
      arrivalTime: "05:50 PM",
      departureAirport: "ICN T2",
      arrivalAirport: "TPE T1",
      terminal: "2"
    }
  },
  packingList: [
    {
      category: "行李確認",
      items: [
        "﹡護照（影本）、簽證",
        "﹡信用卡、台幣",
        "﹡旅遊平安險＆旅遊不便險",
        "﹡手機用品（網卡、線、插頭、行動電源）",
        "﹡衣著搭配（春秋裝）、帽子、髮飾",
        "﹡化妝品＆保養品",
        "﹡盥洗用品（洗面乳、沐浴乳、牙膏牙刷等）",
        "﹡衛生用品（衛生棉、面紙、濕紙巾）",
        "﹡醫護用品（常備藥、OK蹦、暈機藥）",
        "﹡外出用品（防曬、自拍桿、環保袋、雨傘）"
      ]
    },
    {
      category: "行李打包規則",
      items: [
        "﹡液體類：超過100ml須放置於托運行李",
        "﹡噴霧類：人體用可手持（需<100ml）",
        "﹡電池類：行動電源須手持，禁止放上層架",
        "﹡消耗類：暖暖包手持帶上飛機，禁止託運",
        "﹡易碎品：貴重物品一定要手持，避免損壞"
      ]
    }
  ],
  travelNotes: [
    { icon: "💛", text: "隨身攜帶手機、護照、錢包、行動電源，觀光地區注意安全。" },
    { icon: "💛", text: "伴手禮、藥妝建議放行李箱，手持請注意容量規定。" },
    { icon: "💛", text: "保持手機開機並有網路，方便彼此聯繫。" },
    { icon: "❤️", text: "行程表每日第一個時間為出門時間，請自行斟酌起床時間。" },
    { icon: "❤️", text: "行程除預約外可能隨時變動，有想去的地方也可以提出唷～" }
  ],
  days: [
    {
      day: 1,
      theme: "抵達與弘大之夜 ✈️",
      activities: [
        { time: "10:00 AM", title: "🚗 桃園機場第一航廈", description: "報到與準備出發", location: "桃園機場第一航廈", type: "transport" },
        { time: "01:20 PM", title: "✈️ 仁川機場第二航廈", description: "入境海關與領取行李", location: "仁川機場第二航廈", type: "transport" },
        { time: "05:50 PM", title: "🏠 抵達住宿－放置行李", description: "弘大住宿處", location: "弘大", type: "transport" },
        { time: "07:40 PM", title: "⭕️ 🍴 弘大商圈覓食", description: "在地美食與晚間逛街", location: "弘大商圈", type: "food" },
        { time: "10:00 PM", title: "🏠 回住宿處休息", description: "結束第一天行程", location: "弘大", type: "leisure" }
      ]
    },
    {
      day: 2,
      theme: "明洞與南山塔 🗼",
      activities: [
        { time: "08:00 AM", title: "⭕️ 🍴 早餐：Isaac Toast", description: "弘大店", location: "Isaac Toast 弘大店", type: "food" },
        { time: "09:05 AM", title: "⭕️ 📖 換韓元：明洞", description: "大使館換錢所", location: "明洞大使館換錢所", type: "transport" },
        { time: "09:50 AM", title: "⭕️ 📷 韓國銀行貨幣金融博物館", description: "參觀博物館", location: "韓國銀行貨幣金融博物館", type: "sightseeing" },
        { time: "11:45 AM", title: "⭕️ 📷 明洞大聖堂", description: "拍照留念", location: "明洞大聖堂", type: "sightseeing" },
        { time: "12:20 PM", title: "⭕️ 🍴 午餐：南大門市場", description: "品嚐在地小吃", location: "南大門市場", type: "food" },
        { time: "02:35 PM", title: "⭕️ 📷 南山纜車", description: "搭乘纜車上山", location: "南山纜車", type: "transport" },
        { time: "03:05 PM", title: "⭕️ 📷 南山公園 & 首爾塔", description: "俯瞰首爾全景", location: "首爾塔", type: "sightseeing" },
        { time: "05:45 PM", title: "⭕️ 🛍️ 明洞商圈逛街＋晚餐", description: "購物與美食", location: "明洞商圈", type: "food" }
      ]
    },
    {
      day: 3,
      theme: "南怡島與晨靜樹木園 🌳",
      activities: [
        { time: "07:20 AM", title: "⭕️ 📷 KLOOK 一日遊 (C-1)", description: "晨靜樹木園 ＞ 南怡島 ＞ 小法國 & 義大利村", location: "南怡島", type: "sightseeing" },
        { time: "05:30 PM", title: "⭕️ 🛍️ 明洞商圈", description: "下車點：明洞樂天百貨公司", location: "明洞樂天百貨", type: "food" },
        { time: "09:30 PM", title: "🏠 回住宿處休息", description: "放鬆身心", location: "弘大", type: "leisure" }
      ]
    },
    {
      day: 4,
      theme: "江南與聖水洞 🛍️",
      activities: [
        { time: "07:30 AM", title: "⭕️ 📷 K-Star Road", description: "韓流明星大道", location: "K-Star Road", type: "sightseeing" },
        { time: "08:50 AM", title: "⭕️ 🍴 早餐：London Bagel Museum", description: "Dosan 店", location: "London Bagel Museum Dosan", type: "food" },
        { time: "10:15 AM", title: "⭕️ 🛍️ Wiggle Wiggle Dosan", description: "趣味居家雜貨", location: "Wiggle Wiggle Dosan", type: "food" },
        { time: "11:30 AM", title: "⭕️ 📷 星空圖書館", description: "COEX Mall 絕美圖書館", location: "星空圖書館", type: "sightseeing" },
        { time: "01:15 PM", title: "⭕️ 🍴 午餐：陵洞水芹菜牛肉", description: "聖水洞美食", location: "聖水洞", type: "food" },
        { time: "03:40 PM", title: "⭕️ 🛍️ 聖水洞逛街", description: "Musinsa, Fwee, Olive Young 等潮流品牌", location: "聖水洞", type: "food" },
        { time: "08:15 PM", title: "⭕️ 🍴 晚餐：祖傳三代馬鈴薯排骨湯", description: "聖水洞必吃", location: "聖水洞", type: "food" }
      ]
    },
    {
      day: 5,
      theme: "北村與仁寺洞 🍵",
      activities: [
        { time: "07:45 AM", title: "⭕️ 🍴 早餐：THANKS, OAT", description: "延南洞優格", location: "THANKS, OAT 延南洞", type: "food" },
        { time: "09:15 AM", title: "⭕️ 📷 北村韓屋村", description: "北村八景 (3~8景)", location: "北村韓屋村", type: "sightseeing" },
        { time: "12:05 PM", title: "⭕️ 🍴 午餐：新羅製麵", description: "在地美食", location: "新羅製麵", type: "food" },
        { time: "01:45 PM", title: "⭕️ 🛍️ 仁寺洞逛街", description: "Ssamziegil 伴手禮、文創小物", location: "仁寺洞", type: "food" },
        { time: "04:30 PM", title: "⭕️ 🍴 廣藏市場", description: "買棉被、品嚐道地小吃", location: "廣藏市場", type: "food" },
        { time: "06:15 PM", title: "⭕️ 🛍️ 弘大商圈逛街", description: "晚間購物", location: "弘大商圈", type: "food" }
      ]
    },
    {
      day: 6,
      theme: "韓服體驗與宮殿巡禮 🎎",
      activities: [
        { time: "08:45 AM", title: "⭕️ 🛍️ 韓服體驗：Oneday 韓服", description: "挑選絕美韓服", location: "Oneday Hanbok", type: "sightseeing" },
        { time: "10:25 AM", title: "⭕️ 📷 昌德宮 & 昌慶宮", description: "穿韓服免門票", location: "昌德宮", type: "sightseeing" },
        { time: "12:20 PM", title: "⭕️ 📷 昌德後苑", description: "秘苑參觀 (需預約)", location: "昌德宮後苑", type: "sightseeing" },
        { time: "01:50 PM", title: "⭕️ 🍴 點心：Cafe Onion Anguk", description: "韓屋咖啡廳", location: "Cafe Onion Anguk", type: "food" },
        { time: "03:25 PM", title: "⭕️ 📷 景福宮", description: "光化門、勤政殿、香遠亭", location: "景福宮", type: "sightseeing" },
        { time: "06:30 PM", title: "⭕️ 🍴 晚餐：奶奶家豬腳", description: "在地老店", location: "奶奶家豬腳", type: "food" }
      ]
    },
    {
      day: 7,
      theme: "樂天世界與購物 🎡",
      activities: [
        { time: "08:00 AM", title: "⭕️ 🍴 早餐：Cafe Mamas", description: "蠶室店", location: "Cafe Mamas Jamsil", type: "food" },
        { time: "10:00 AM", title: "⭕️ 🛍️ 樂天世界購物中心", description: "購物時間", location: "樂天世界購物中心", type: "food" },
        { time: "12:10 PM", title: "⭕️ 🛍️ 樂天世界塔", description: "登頂俯瞰首爾", location: "樂天世界塔", type: "sightseeing" },
        { time: "01:20 PM", title: "⭕️ 📷 石村湖", description: "散步賞櫻", location: "石村湖", type: "leisure" },
        { time: "04:15 PM", title: "⭕️ 📷 樂天世界民俗博物館", description: "文化體驗", location: "樂天世界民俗博物館", type: "sightseeing" },
        { time: "06:25 PM", title: "⭕️ 🛍️ 樂天超市", description: "採買伴手禮", location: "樂天超市 蠶室店", type: "food" },
        { time: "08:35 PM", title: "⭕️ 🍴 晚餐：弘大商圈", description: "金豬食堂備案", location: "弘大商圈", type: "food" }
      ]
    },
    {
      day: 8,
      theme: "梨花大學與漢江 🌸",
      activities: [
        { time: "08:15 AM", title: "⭕️ 🍴 早餐：EGG DROP", description: "弘大店", location: "EGG DROP 弘大店", type: "food" },
        { time: "09:15 AM", title: "⭕️ 📷 梨花大學", description: "校園參觀、ECC 建築", location: "梨花大學", type: "sightseeing" },
        { time: "11:00 AM", title: "⭕️ 🍴 午餐：Dongnimmun Seolleongtang", description: "在地雪濃湯", location: "Dongnimmun Seolleongtang", type: "food" },
        { time: "12:00 PM", title: "⭕️ 🛍️ 梨大商圈", description: "逛街購物", location: "梨大商圈", type: "food" },
        { time: "02:10 PM", title: "⭕️ 📷 汝矣島櫻花公園", description: "賞櫻勝地、港口散步", location: "汝矣島櫻花公園", type: "leisure" },
        { time: "04:20 PM", title: "⭕️ 🍴 晚餐：汝矣火爐燒烤", description: "美味燒肉", location: "汝矣島", type: "food" },
        { time: "06:40 PM", title: "⭕️ 📷 漢江遊覽船", description: "19:00 出航、夜遊漢江", location: "汝矣島漢江遊覽船", type: "sightseeing" }
      ]
    },
    {
      day: 9,
      theme: "最後一天與返程 ✈️",
      activities: [
        { time: "08:00 AM", title: "🔺 🛍️ 自由活動", description: "汗蒸幕 Sparex", location: "Sparex", type: "leisure" },
        { time: "12:05 PM", title: "⭕️ 🚇 弘大地鐵站集合", description: "準備前往機場", location: "弘大入口站", type: "transport" },
        { time: "12:20 PM", title: "🚝 抵達仁川機場", description: "AREX 直達車", location: "仁川機場第二航廈", type: "transport" },
        { time: "02:10 PM", title: "📖 報到掛行李", description: "免稅購物與退稅", location: "仁川機場", type: "transport" },
        { time: "04:10 PM", title: "✈️ 起飛回台", description: "期待下次旅行", location: "桃園機場", type: "transport" },
        { time: "05:50 PM", title: "🏠 到家", description: "平安抵達", location: "Home", type: "leisure" }
      ]
    }
  ]
};

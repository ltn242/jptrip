import React, { useState } from 'react';
import {
    Clock, MapPin, Utensils, AlertTriangle, Ship, Train, Car, Bus,
    Info, Plane, Camera, Coffee, ArrowRight, ExternalLink, Map, Footprints, Heart, Briefcase, Fuel, Ticket
} from 'lucide-react';

const App = () => {
    const [activeTab, setActiveTab] = useState(0);

    // 定義顏色映射表
    const colorMap = {
        blue: {
            bg: "bg-blue-600",
            text: "text-blue-600",
            lightBg: "bg-blue-50",
            border: "border-blue-100",
            title: "text-blue-900",
            gradient: "from-blue-50",
            highlight: "bg-blue-500",
            highlightText: "text-blue-700",
            tabActive: "bg-blue-600"
        },
        indigo: {
            bg: "bg-indigo-600",
            text: "text-indigo-600",
            lightBg: "bg-indigo-50",
            border: "border-indigo-100",
            title: "text-indigo-900",
            gradient: "from-indigo-50",
            highlight: "bg-indigo-500",
            highlightText: "text-indigo-700",
            tabActive: "bg-indigo-600"
        },
        teal: {
            bg: "bg-teal-600",
            text: "text-teal-600",
            lightBg: "bg-teal-50",
            border: "border-teal-100",
            title: "text-teal-900",
            gradient: "from-teal-50",
            highlight: "bg-teal-500",
            highlightText: "text-teal-700",
            tabActive: "bg-teal-600"
        },
        emerald: {
            bg: "bg-emerald-600",
            text: "text-emerald-600",
            lightBg: "bg-emerald-50",
            border: "border-emerald-100",
            title: "text-emerald-900",
            gradient: "from-emerald-50",
            highlight: "bg-emerald-500",
            highlightText: "text-emerald-700",
            tabActive: "bg-emerald-600"
        },
        rose: {
            bg: "bg-rose-600",
            text: "text-rose-600",
            lightBg: "bg-rose-50",
            border: "border-rose-100",
            title: "text-rose-900",
            gradient: "from-rose-50",
            highlight: "bg-rose-500",
            highlightText: "text-rose-700",
            tabActive: "bg-rose-600"
        }
    };

    const itinerary = [
        {
            day: 1,
            date: "12/21 (Sun)",
            title: "抵達高松：骨付鳥之夜",
            location: "高松",
            stay: "JR Hotel Clement Takamatsu",
            highlight: "香川名物・骨付鳥",
            color: "blue",
            details: [
                { time: "18:00", icon: <Plane className="w-4 h-4" />, content: "抵達高松機場 (TAK)", note: "出關約 45-60 分鐘" },
                { time: "19:30", icon: <Car className="w-4 h-4" />, content: "搭乘機場巴士抵達 JR 高松站", note: "車程約 45 分鐘" },
                { time: "19:45", icon: <MapPin className="w-4 h-4" />, content: "飯店 Check-in", note: "就在港口與車站旁，位置絕佳" },
                {
                    time: "20:15",
                    icon: <Utensils className="w-4 h-4 text-orange-500" />,
                    content: "晚餐：一鶴 (Ikkaku) 高松店",
                    isFood: true,
                    foodNote: "香川靈魂美食「骨付鳥」。必點：親鳥(有嚼勁) 或 雛鳥(軟嫩)。",
                    warning: "週日晚上通常大排長龍，建議一人先去排隊，或考慮外帶回飯店享用。"
                },
                {
                    time: "22:00",
                    icon: <Utensils className="w-4 h-4 text-orange-500" />,
                    content: "宵夜備案：川福 本店",
                    isFood: true,
                    foodNote: "營業較晚的老牌烏龍麵店，適合當宵夜。"
                }
            ],
            foodGuide: [
                {
                    name: "寄鳥味鳥 (Yoridorimidori)",
                    type: "骨付鳥/居酒屋",
                    tags: ["晚餐", "在地推薦"],
                    desc: "如果一鶴大排長龍，這家是當地人極推的骨付鳥名店，口味較重，適合配酒。",
                    location: "兵庫町 (離車站約10分走路)",
                    query: "Yoridorimidori Takamatsu"
                },
                {
                    name: "手打烏龍麵 鶴丸 (Teuchi Udon Tsurumaru)",
                    type: "烏龍麵",
                    tags: ["宵夜", "必吃"],
                    desc: "高松深夜食堂代表！晚上8點才開門，必點「咖哩烏龍麵」。",
                    location: "古馬場町 (繁華街內)",
                    query: "Teuchi Udon Tsurumaru Takamatsu"
                },
                {
                    name: "Merikenya 高松站前店 (めりけんや)",
                    type: "烏龍麵",
                    tags: ["快速", "午/晚餐"],
                    desc: "就在車站旁邊，如果太累不想走遠，這家是快速美味的好選擇。",
                    location: "JR高松站旁",
                    query: "Merikenya Takamatsu Station"
                }
            ]
        },
        {
            day: 2,
            date: "12/22 (Mon)",
            title: "豐島藝術 & 心臟音",
            location: "豐島 (Teshima)",
            stay: "HYM Hostel (宇野)",
            highlight: "豐島美術館 & 心臟音",
            color: "emerald",
            details: [
                { time: "09:07", icon: <Ship className="w-4 h-4" />, content: "高松港 出發", note: "豐島渡輪 (高速船) 前往家浦港。" },
                { time: "09:57", icon: <MapPin className="w-4 h-4" />, content: "抵達 家浦港", note: "【極速 8 分鐘】下船 → 衝去交流中心寄行李 → 10:05 上巴士。", isSpot: true, query: "Ieura Port Teshima" },
                { time: "10:05", icon: <Bus className="w-4 h-4" />, content: "家浦港 搭巴士", note: "往「唐櫃港」方向。" },
                { time: "10:19", icon: <Camera className="w-4 h-4" />, content: "抵達 美術館前", note: "下車後沿著海景步道走下去，這是必拍景點。", isSpot: true, query: "Teshima Rice Terrace" },
                {
                    time: "10:30",
                    icon: <MapPin className="w-4 h-4" />,
                    content: "【預約】豐島美術館",
                    note: "這是豐島的精華，請慢慢感受水滴與回音。累了可以先在美術館 Cafe 喝杯咖啡。",
                    isSpot: true,
                    query: "Teshima Art Museum"
                },
                { time: "12:40", icon: <Footprints className="w-4 h-4" />, content: "步行前往午餐", note: "往下坡走約 15 分鐘，進入唐櫃村落。" },
                {
                    time: "13:00",
                    icon: <Utensils className="w-4 h-4 text-orange-500" />,
                    content: "午餐：島廚房 (Shima Kitchen)",
                    isFood: true,
                    foodNote: "好好享受這頓午餐，通常用餐時間約 50-60 分鐘。這裡的氣氛很舒服。",
                    isSpot: true,
                    query: "Shima Kitchen Teshima"
                },
                { time: "14:00", icon: <Footprints className="w-4 h-4" />, content: "散步往海邊", note: "穿過唐櫃的村落小徑，約 15 分鐘路程。沿路會經過檸檬田和安靜的民家。" },
                {
                    time: "14:15",
                    icon: <Heart className="w-4 h-4" />,
                    content: "心臟音資料館",
                    note: "聽聽心跳聲，也可以走到外面的沙灘看海。這裡非常療癒，值得多待一下。",
                    isSpot: true,
                    query: "Les Archives du Cœur"
                },
                { time: "14:55", icon: <Footprints className="w-4 h-4" />, content: "慢慢走回唐櫃港", note: "從心臟音走回「唐櫃港」巴士站約需 12-15 分鐘。沿著海堤走，風景很美。" },
                {
                    time: "15:10",
                    icon: <Camera className="w-4 h-4" />,
                    content: "唐櫃港周邊 & 籃框",
                    note: "巴士站旁就是「無人勝出 - 多重籃框」。可以在這裡拍照、投籃。",
                    isSpot: true,
                    query: "No One Wins - Multibasket"
                },
                {
                    time: "15:33",
                    icon: <Bus className="w-4 h-4" />,
                    content: "唐櫃港 搭巴士 (關鍵!)",
                    warning: "上車投幣 200 円。這班車是從這裡發車，通常會有位子坐。",
                    isCritical: true
                },
                { time: "15:52", icon: <Briefcase className="w-4 h-4" />, content: "抵達 家浦港", note: "取回行李去交流中心領行李、上廁所。" },
                {
                    time: "16:00",
                    icon: <Coffee className="w-4 h-4 text-orange-500" />,
                    content: "最後休息",
                    note: "Teshima Factory 就在附近；或者直接在港口候船室看海。",
                    isSpot: true,
                    query: "Teshima Factory"
                },
                { time: "16:25", icon: <Ship className="w-4 h-4" />, content: "家浦港 出發", note: "小豆島豐島渡輪 (旅客船) 前往宇野港。" }
            ],
            foodGuide: [
                {
                    name: "海之餐廳 (Umi no Restaurant)",
                    type: "義式/Pizza",
                    tags: ["午餐", "家浦"],
                    desc: "家浦港附近擁有無敵海景的戶外座位，提供窯烤Pizza和義大利麵。",
                    location: "家浦港 (騎車約5分)",
                    query: "Umi no Restaurant Teshima"
                },
                {
                    name: "Teshima no Mado (てしまのまど)",
                    type: "咖啡/簡餐",
                    tags: ["午餐", "家浦"],
                    desc: "古民家改建的咖啡廳，提供溫馨的午餐定食。",
                    location: "家浦港步行圈",
                    query: "Teshima no Mado"
                },
                {
                    name: "草莓家 (Ichigoya)",
                    type: "甜點/可麗餅",
                    tags: ["甜點", "家浦"],
                    desc: "使用豐島盛產的草莓製作的可麗餅，非常適合作為散步甜點。",
                    location: "家浦港附近",
                    query: "Ichigoya Teshima"
                },
                {
                    name: "魚富 (Uosou)",
                    type: "壽司/海鮮",
                    tags: ["晚餐", "宇野"],
                    desc: "抵達宇野後，港口附近的老字號壽司店。",
                    location: "宇野港步行圈",
                    query: "Uosou Uno Port"
                }
            ]
        },
        {
            day: 3,
            date: "12/23 (Tue)",
            title: "直島藝術巡禮",
            location: "直島",
            stay: "HYM Hostel (宇野)",
            highlight: "地中美術館 & 黃南瓜",
            color: "teal",
            details: [
                {
                    time: "09:22",
                    icon: <Ship className="w-4 h-4" />,
                    content: "宇野港 出發 (往直島)",
                    alert: "09:20 沒船，請務必搭上 09:22 這班！",
                    note: "四國汽船 (渡輪) 前往宮浦港。"
                },
                {
                    time: "09:42",
                    icon: <MapPin className="w-4 h-4" />,
                    content: "抵達 宮浦港 (極速轉乘)",
                    warning: "下船後快步走！搭乘 09:45 的町營巴士 (往つつじ荘)。",
                    isCritical: true,
                    isSpot: true,
                    query: "Miyanoura Port Naoshima"
                },
                {
                    time: "09:58",
                    icon: <Bus className="w-4 h-4" />,
                    content: "抵達 杜鵑莊 (Tsutsuji-so)",
                    note: "換乘前方免費的博物館接駁巴士。"
                },
                {
                    time: "10:05",
                    icon: <Bus className="w-4 h-4" />,
                    content: "博物館接駁車 發車",
                    note: "直接坐到終點站 (地中美術館)。"
                },
                {
                    time: "10:12",
                    icon: <MapPin className="w-4 h-4 text-red-600" />,
                    content: "抵達 地中美術館",
                    note: "時間充裕，可以悠閒換票入場 (預約 10:45)。",
                    isSpot: true,
                    query: "Chichu Art Museum"
                },
                {
                    time: "11:40",
                    icon: <Footprints className="w-4 h-4" />,
                    content: "步行前往 時間的迴廊",
                    note: "沿途風景很美，下坡路約 15 分鐘，不用等接駁車。"
                },
                { time: "11:55", icon: <MapPin className="w-4 h-4" />, content: "【預約】杉本博司・時間的迴廊", note: "地點：Benesse House Park。", isSpot: true, query: "Hiroshi Sugimoto Gallery: Time Corridors" },
                {
                    time: "12:30",
                    icon: <Utensils className="w-4 h-4 text-orange-500" />,
                    content: "午餐 & 黃南瓜拍照",
                    isFood: true,
                    foodNote: "就在時間的迴廊前方海灘(走路3分)。該區餐廳不多，建議自備輕食。",
                    isSpot: true,
                    query: "Yellow Pumpkin Naoshima"
                },
                {
                    time: "13:54",
                    icon: <Bus className="w-4 h-4" />,
                    content: "搭巴士前往 本村 (關鍵時刻)",
                    warning: "最完美的班次！於「つつじ荘」搭乘町營巴士前往「農協前」。",
                    isCritical: true
                },
                {
                    time: "14:00",
                    icon: <MapPin className="w-4 h-4" />,
                    content: "抵達 農協前 (本村)",
                    note: "下車後步行 5 分鐘即達南寺。"
                },
                { time: "14:25", icon: <MapPin className="w-4 h-4" />, content: "【預約】家計畫・南寺", warning: "請務必提前抵達報到，逾時不候。", isSpot: true, query: "Art House Project Minamidera" },
                { time: "15:15", icon: <Camera className="w-4 h-4" />, content: "本村漫步", note: "角屋、護王神社，或去吃 Maimai 直島漢堡。", isSpot: true, query: "Honmura Naoshima" },
                {
                    time: "16:36",
                    icon: <Bus className="w-4 h-4" />,
                    content: "搭巴士回宮浦港",
                    note: "在「農協前」上車，預計 16:42 抵達宮浦港。"
                },
                { width: "100%", time: "16:45", icon: <MapPin className="w-4 h-4" />, content: "宮浦港散策", note: "錢湯 I♥湯、Mikazuki Shoten 咖啡、紅南瓜合照。", isSpot: true, query: "Naoshima Bath I Love Yu" },
                {
                    time: "17:35",
                    icon: <Ship className="w-4 h-4" />,
                    content: "宮浦港 出發 (往宇野)",
                    note: "搭乘四國汽船 (渡輪) 返回宇野 (17:55 抵達)。"
                },
                {
                    time: "18:30",
                    icon: <Utensils className="w-4 h-4 text-orange-500" />,
                    content: "晚餐：瀨戶內溫泉 玉之湯",
                    isFood: true,
                    foodNote: "宇野港附近的溫泉設施，含餐廳，泡湯吃飯一次滿足。"
                }
            ],
            foodGuide: [
                {
                    name: "玄米心食 Aisunao (あいすなお)",
                    type: "健康定食",
                    tags: ["午餐", "本村地區"],
                    desc: "家計畫附近的古民家餐廳，提供好吃的酵素玄米飯定食，氣氛寧靜。",
                    location: "本村港 (家計畫區)",
                    query: "Aisunao Naoshima"
                },
                {
                    name: "MaiMai (マイマイ)",
                    type: "漢堡/輕食",
                    tags: ["午餐", "本村地區"],
                    desc: "以直島名產「直島漢堡」（夾炸魚排）聞名，就在南寺附近。",
                    location: "本村港 (家計畫區)",
                    query: "Maimai Naoshima"
                },
                {
                    name: "Cin.na.mon (シナモン)",
                    type: "咖啡/咖哩",
                    tags: ["午/晚餐", "宮浦港"],
                    desc: "宮浦港附近的溫馨小店，海鮮咖哩飯很有名。如果要在島上吃晚餐這是不錯的選擇。",
                    location: "宮浦港步行圈",
                    query: "Cin.na.mon Naoshima"
                },
                {
                    name: "山本烏龍麵 (Yamamoto Udon)",
                    type: "烏龍麵",
                    tags: ["午餐", "在地"],
                    desc: "如果美術館餐廳太貴或排太久，這家是道地的自助式烏龍麵，CP值高。",
                    location: "宮浦港步行圈",
                    query: "Yamamoto Udon Naoshima"
                }
            ]
        },
        {
            day: 4,
            date: "12/24 (Wed)",
            title: "倉敷美學 & 聖誕夜",
            location: "倉敷 / 高松",
            stay: "JR Clement Inn Takamatsu",
            highlight: "倉敷運河遊船 & 聖誕晚餐",
            color: "indigo",
            details: [
                { time: "09:00", icon: <Briefcase className="w-4 h-4" />, content: "Check-out & 移動", note: "帶著行李前往 JR 宇野站。" },
                { time: "09:12", icon: <Train className="w-4 h-4" />, content: "JR 宇野線 (經茶屋町轉車)", note: "前往 JR 倉敷站 (約 1 小時)。" },
                { time: "10:10", icon: <Briefcase className="w-4 h-4" />, content: "抵達倉敷 & 寄放行李", note: "務必將大行李鎖在車站置物櫃。" },
                { time: "10:30", icon: <MapPin className="w-4 h-4" />, content: "抵達 倉敷美觀地區", note: "步行約 10-15 分鐘。", isSpot: true, query: "Kurashiki Bikan Historical Quarter" },
                {
                    time: "10:40",
                    icon: <Ticket className="w-4 h-4 text-red-600" />,
                    content: "【關鍵】購買遊船票",
                    warning: "地點：倉敷館觀光案內所。先買好下午的船票，很容易完售！",
                    isCritical: true,
                    isSpot: true,
                    query: "Kurashiki Kan"
                },
                {
                    time: "10:50",
                    icon: <Camera className="w-4 h-4" />,
                    content: "【藝術巡禮】大原美術館",
                    note: "日本第一座私立西洋美術館，收藏莫內《睡蓮》。",
                    isSpot: true,
                    query: "Ohara Museum of Art"
                },
                {
                    time: "12:00",
                    icon: <Utensils className="w-4 h-4 text-orange-500" />,
                    content: "午餐：名代豬排 Kappa",
                    isFood: true,
                    foodNote: "必吃淋上多蜜醬汁的炸豬排 (Demi-katsu)。",
                    isSpot: true,
                    query: "Kappa Tonkatsu Kurashiki"
                },
                {
                    time: "13:00",
                    icon: <Ship className="w-4 h-4" />,
                    content: "【體驗】倉敷川遊船",
                    note: "戴著斗笠坐在小船上，從河面視角欣賞白壁建築。",
                    isSpot: true,
                    query: "Kurashiki River Boat Tour"
                },
                {
                    time: "13:30",
                    icon: <Camera className="w-4 h-4" />,
                    content: "常春藤廣場 (Ivy Square)",
                    note: "紅磚建築與常春藤的對比，非常適合拍照。",
                    isSpot: true,
                    query: "Kurashiki Ivy Square"
                },
                {
                    time: "14:30",
                    icon: <Coffee className="w-4 h-4 text-orange-500" />,
                    content: "下午茶：倉敷桃子 (Kurashiki Momoko)",
                    isFood: true,
                    foodNote: "或「有鄰庵」幸福布丁。",
                    isSpot: true,
                    query: "Kurashiki Momoko Main Store"
                },
                { time: "15:30", icon: <Footprints className="w-4 h-4" />, content: "逛回 JR 倉敷站", note: "順便逛逛車站旁的 Outlet (若有時間)。" },
                { time: "16:15", icon: <Train className="w-4 h-4" />, content: "前往高松", note: "從 JR 倉敷站取回行李 -> 岡山 -> 高松。" },
                { time: "17:15", icon: <MapPin className="w-4 h-4" />, content: "抵達 JR 高松站", note: "Check-in JR Clement Inn (車站對面)。" },
                { time: "18:00", icon: <Car className="w-4 h-4" />, content: "平成租車 取車", note: "辦理手續、取車。將車停回飯店停車場。" },
                {
                    time: "19:00",
                    icon: <Utensils className="w-4 h-4 text-orange-500" />,
                    content: "聖誕晚餐：骨付鳥",
                    isFood: true,
                    foodNote: "蘭丸 (Ranmaru) 或 寄鳥味鳥，享受熱鬧氣氛。",
                    isSpot: true,
                    query: "Hone-Tsuki-Dori Ranmaru"
                }
            ],
            foodGuide: [
                {
                    name: "三宅商店 (Miyake Shoten)",
                    type: "咖啡/咖哩",
                    tags: ["午餐", "備案"],
                    desc: "美觀地區百年古民家，招牌是「玄米咖哩飯」。",
                    location: "倉敷美觀地區",
                    query: "Miyake Shoten Kurashiki"
                },
                {
                    name: "有鄰庵 (Yuurin-an)",
                    type: "甜點/布丁",
                    tags: ["下午茶", "限量"],
                    desc: "就在美觀地區，限量的「幸福布丁」非常有名。",
                    location: "倉敷美觀地區",
                    query: "Yuurin-an Kurashiki"
                },
                {
                    name: "寄鳥味鳥 (Yoridorimidori)",
                    type: "骨付鳥",
                    tags: ["晚餐", "高松"],
                    desc: "如果蘭丸客滿，這家是很好的第二選擇。",
                    location: "高松市區兵庫町",
                    query: "Yoridorimidori Takamatsu"
                },
                {
                    name: "手打十段 烏龍麵笨蛋一代",
                    type: "烏龍麵",
                    tags: ["早餐", "高松"],
                    desc: "隔天早餐必吃「奶油胡椒烏龍麵」。",
                    location: "高松市區",
                    query: "Udon Baka Ichidai"
                }
            ]
        },
        {
            day: 5,
            date: "12/25 (Thu)",
            title: "金刀比羅宮 & 趕飛機",
            location: "琴平 / 宇多津",
            stay: "溫暖的家",
            highlight: "爬階梯 & 烏龍麵名店",
            color: "rose",
            details: [
                { time: "08:00", icon: <Car className="w-4 h-4" />, content: "高松市區出發", note: "開車前往金刀比羅宮（約50-60分鐘）。" },
                { time: "09:00", icon: <MapPin className="w-4 h-4" />, content: "抵達金刀比羅宮", note: "停好車，開始爬階梯。", isSpot: true, query: "Kotohira-gu" },
                {
                    time: "09:00",
                    icon: <Footprints className="w-4 h-4" />,
                    content: "金刀比羅宮參拜",
                    note: "上山約40-50分，參拜20分，下山30分。"
                },
                {
                    time: "10:30",
                    icon: <Utensils className="w-4 h-4 text-orange-500" />,
                    content: "午餐：表參道讚岐烏龍麵",
                    isFood: true,
                    foodNote: "推薦：中野烏龍麵學校 或 琴平烏龍麵。",
                    isSpot: true,
                    query: "Nakano Udon School Kotohira"
                },
                { time: "11:30", icon: <Car className="w-4 h-4" />, content: "開車前往水族館", note: "車程約 30-40 分鐘。" },
                { time: "12:10", icon: <MapPin className="w-4 h-4" />, content: "抵達四國水族館", note: "位於宇多津，就在海邊。", isSpot: true, query: "Shikoku Aquarium" },
                {
                    time: "13:00",
                    icon: <Camera className="w-4 h-4 text-blue-500" />,
                    content: "【必看】海豚秀",
                    note: "以瀨戶內海為背景，館內不大，1.5-2小時足夠。"
                },
                {
                    time: "14:15",
                    icon: <Car className="w-4 h-4 text-red-600" />,
                    content: "離開水族館 (關鍵!)",
                    warning: "開車前往高松機場（約45-50分鐘）。",
                    isCritical: true
                },
                {
                    time: "15:05",
                    icon: <Fuel className="w-4 h-4" />,
                    content: "抵達機場附近加油",
                    note: "日本還車通常需「滿油歸還」。"
                },
                { time: "15:20", icon: <Briefcase className="w-4 h-4" />, content: "抵達還車點", note: "辦理手續，搭接駁車至航廈。" },
                { time: "15:30", icon: <MapPin className="w-4 h-4" />, content: "完成還車", note: "順利結束。" },
                { time: "18:00", icon: <Plane className="w-4 h-4" />, content: "航班起飛 (TAK -> TPE)", note: "滿載回憶，平安回家" }
            ],
            foodGuide: [
                {
                    name: "中野烏龍麵學校 (Nakano Udon)",
                    type: "烏龍麵/體驗",
                    tags: ["午餐", "體驗"],
                    desc: "參道商店街上的名店，可以體驗親手製作烏龍麵。",
                    location: "金刀比羅宮參道",
                    query: "Nakano Udon School Kotohira"
                },
                {
                    name: "金比羅烏龍麵 本店 (Konpira Udon)",
                    type: "烏龍麵",
                    tags: ["午餐", "參道"],
                    desc: "就在參道商店街上，歷史悠久，如果不想走遠，這是最方便的選擇。",
                    location: "金刀比羅宮參道",
                    query: "Konpira Udon Main Store"
                },
                {
                    name: "Hirooka (平岡食品)",
                    type: "肉鋪可樂餅",
                    tags: ["小吃", "補充體力"],
                    desc: "參道上有名的肉舖，炸肉餅(Menchi Katsu)非常多汁，爬樓梯累了可以吃。",
                    location: "金刀比羅宮參道",
                    query: "Hirooka Food Kotohira"
                },
                {
                    name: "機場高湯烏龍麵 (Hayashiya)",
                    type: "烏龍麵",
                    tags: ["機場", "最後一餐"],
                    desc: "如果來不及吃 Okasen，機場 2F 的這家烏龍麵湯頭非常棒，是離開前的最後慰藉。",
                    location: "高松機場 2F",
                    query: "Hayashiya Takamatsu Airport"
                }
            ]
        }
    ];

    const currentTheme = colorMap[itinerary[activeTab].color];

    // Helper to open Google Maps
    const openMap = (query) => {
        // 構建 Google Maps 搜尋 URL
        const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
        window.open(url, '_blank');
    };

    return (
        <div className="min-h-screen bg-gray-50 font-sans text-gray-800 pb-10">
            {/* Header */}
            <div className="bg-white border-b sticky top-0 z-10 shadow-sm">
                <div className="max-w-3xl mx-auto px-4 py-4 flex justify-between items-center">
                    <div>
                        <h1 className="text-xl font-bold text-gray-900 tracking-tight">瀨戶內海五日冬遊</h1>
                        <p className="text-xs text-gray-500 font-medium mt-1">12/21 - 12/25 • Art & Udon Trip</p>
                    </div>
                    <div className="text-xs bg-slate-100 px-3 py-1 rounded-full text-slate-600 font-semibold">
                        FINAL PLAN
                    </div>
                </div>

                {/* Day Tabs */}
                <div className="max-w-3xl mx-auto px-4 flex overflow-x-auto no-scrollbar space-x-2 pb-2">
                    {itinerary.map((day, idx) => {
                        const tabTheme = colorMap[day.color];
                        const isActive = activeTab === idx;

                        return (
                            <button
                                key={day.day}
                                onClick={() => {
                                    setActiveTab(idx);
                                }}
                                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap border
                  ${isActive
                                        ? `${tabTheme.tabActive} text-white shadow-md transform scale-105 border-transparent`
                                        : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'}`}
                            >
                                Day {day.day}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-3xl mx-auto px-4 py-6 pb-20">

                {/* Card */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden animate-fade-in-up transition-all duration-300">

                    {/* Hero Image / Header of the Day */}
                    <div className={`p-6 bg-gradient-to-br ${currentTheme.gradient} to-white border-b ${currentTheme.border}`}>
                        <div className="flex justify-between items-start">
                            <div>
                                <h2 className={`text-2xl font-bold ${currentTheme.title}`}>
                                    {itinerary[activeTab].title}
                                </h2>
                                <div className="flex items-center mt-2 text-sm text-gray-600 space-x-3">
                                    <span className="flex items-center"><MapPin className="w-4 h-4 mr-1" /> {itinerary[activeTab].location}</span>
                                    <span className="flex items-center"><Clock className="w-4 h-4 mr-1" /> {itinerary[activeTab].date}</span>
                                </div>
                            </div>
                            <div className="bg-white/80 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-gray-500 shadow-sm border border-gray-100">
                                住宿：{itinerary[activeTab].stay}
                            </div>
                        </div>

                        {/* Daily Highlight */}
                        <div className="mt-4 flex flex-wrap gap-2 items-center justify-between">
                            <div className={`inline-flex items-center bg-white px-3 py-1.5 rounded-full border shadow-sm ${currentTheme.border}`}>
                                <span className={`flex h-2 w-2 rounded-full mr-2 ${currentTheme.highlight}`}></span>
                                <span className={`text-xs font-bold uppercase tracking-wider mr-1 ${currentTheme.highlightText}`}>今日重點</span>
                                <span className="text-sm text-gray-700 font-medium">{itinerary[activeTab].highlight}</span>
                            </div>
                        </div>
                    </div>

                    {/* Food Guide Section (Always Visible) */}
                    <div className="bg-gray-50 border-b border-gray-200">
                        <div className="p-4 sm:p-6">
                            <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center">
                                <Utensils className="w-4 h-4 mr-2" />
                                {itinerary[activeTab].location} - 推薦美食備案
                            </h3>
                            <div className="grid gap-3 sm:grid-cols-2">
                                {itinerary[activeTab].foodGuide.map((food, idx) => (
                                    <div
                                        key={idx}
                                        onClick={() => openMap(food.query)}
                                        className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all cursor-pointer group"
                                    >
                                        <div className="flex justify-between items-start">
                                            <div>
                                                <div className="flex items-center space-x-2">
                                                    <h4 className="font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{food.name}</h4>
                                                    <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-blue-500" />
                                                </div>
                                                <div className="flex flex-wrap gap-1 mt-1">
                                                    <span className="text-[10px] bg-slate-100 text-slate-600 px-1.5 py-0.5 rounded border border-slate-200">{food.type}</span>
                                                    {food.tags.map((tag, tIdx) => (
                                                        <span key={tIdx} className={`text-[10px] px-1.5 py-0.5 rounded border 
                              ${tIdx === 0 ? 'bg-orange-100 text-orange-700 border-orange-200 font-bold' : 'bg-orange-50 text-orange-600 border-orange-100'}`}>
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-2 leading-relaxed">
                                            {food.desc}
                                        </p>
                                        <div className="mt-2 flex items-center text-[10px] text-gray-400 font-medium">
                                            <Map className="w-3 h-3 mr-1" />
                                            {food.location}
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-3 text-center">
                                <p className="text-[10px] text-gray-400">點擊卡片可直接開啟 Google Maps 導航</p>
                            </div>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="p-6">
                        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-2.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">

                            {itinerary[activeTab].details.map((item, idx) => (
                                <div key={idx} className="relative flex items-start group">
                                    {/* Icon Node */}
                                    <div className={`absolute left-0 h-5 w-5 rounded-full border-2 border-white shadow-sm flex items-center justify-center z-10
                    ${item.isCritical ? 'bg-red-500 text-white ring-4 ring-red-100' :
                                            item.isFood ? 'bg-orange-500 text-white' : 'bg-slate-200 text-gray-500'}`}>
                                        {item.isFood ? <Utensils className="w-3 h-3" /> : (item.isCritical ? <AlertTriangle className="w-3 h-3" /> : <div className="w-1.5 h-1.5 bg-current rounded-full" />)}
                                    </div>

                                    {/* Content */}
                                    <div className="ml-8 w-full">
                                        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
                                            <span className={`font-mono text-sm font-bold ${item.isCritical ? 'text-red-600' : 'text-slate-500'}`}>
                                                {item.time}
                                            </span>
                                            {item.isCritical && (
                                                <span className="text-[10px] font-bold bg-red-100 text-red-600 px-2 py-0.5 rounded-full sm:ml-2 w-fit">
                                                    CRITICAL
                                                </span>
                                            )}
                                        </div>

                                        <h3
                                            className={`text-base font-bold mt-1 ${item.isFood ? 'text-gray-900' : 'text-gray-800'} ${item.isSpot ? 'cursor-pointer hover:text-blue-600 transition-colors' : ''}`}
                                            onClick={() => item.isSpot && openMap(item.query || item.content)}
                                        >
                                            {item.content}
                                            {item.isSpot && <ExternalLink className="inline-block w-3 h-3 ml-1 text-gray-400" />}
                                        </h3>

                                        {/* Food Highlight Box */}
                                        {item.isFood && item.foodNote && (
                                            <div className="mt-2 p-3 bg-orange-50 rounded-lg border border-orange-100 flex items-start group-hover:bg-orange-100 transition-colors cursor-pointer"
                                                onClick={() => {
                                                    // Extract simplified name for query if user clicks the food box
                                                    // Remove "晚餐：" prefix etc.
                                                    const queryName = item.content.split('：')[1] || item.content;
                                                    openMap(queryName + " " + itinerary[activeTab].location);
                                                }}
                                                title="點擊搜尋此餐廳"
                                            >
                                                <Utensils className="w-4 h-4 text-orange-400 mt-0.5 mr-2 flex-shrink-0" />
                                                <div>
                                                    <p className="text-sm text-orange-800 font-medium">{item.foodNote}</p>
                                                    <div className="flex items-center mt-1 text-[10px] text-orange-400 opacity-0 group-hover:opacity-100 transition-opacity">
                                                        <ExternalLink className="w-3 h-3 mr-1" /> 點擊查看地圖
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Warning Box */}
                                        {(item.warning || item.isCritical) && (
                                            <div className="mt-2 p-3 bg-red-50 rounded-lg border border-red-100 flex items-start animate-pulse-slow">
                                                <AlertTriangle className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                                                <p className="text-sm text-red-700 font-semibold">
                                                    {item.warning || item.note}
                                                </p>
                                            </div>
                                        )}

                                        {/* Normal Note */}
                                        {!item.isFood && !item.warning && !item.isCritical && item.note && (
                                            <p className="text-sm text-slate-500 mt-1">{item.note}</p>
                                        )}
                                    </div>
                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Footer of Card */}
                    <div className="bg-gray-50 px-6 py-4 border-t border-gray-100 text-center">
                        <p className="text-xs text-gray-400">© 2025 Setouchi Travel Plan</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default App;

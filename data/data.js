// data/data.js - 所有数据
const data = {
  diseases: [
  {
    "id": "d01",
    "name": "牛口蹄疫",
    "alias": "口疮",
    "description": "牛口蹄疫是由口蹄疫病毒引起的一种急性、热性、高度接触性传染病。",
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "2-7天",
    "mortality_rate": "成年牛较低，犊牛可达50%以上"
  },
  {
    "id": "d02",
    "name": "牛结核病",
    "alias": "痨病",
    "description": "牛结核病是由结核分枝杆菌引起的一种慢性消耗性传染病。",
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "数周至数月",
    "mortality_rate": "慢性消耗致死"
  },
  {
    "id": "d03",
    "name": "牛布氏杆菌病",
    "alias": "布病",
    "description": "牛布氏杆菌病是由布氏杆菌引起的一种人畜共患传染病。",
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "2-4周",
    "mortality_rate": "较低，但引起流产"
  },
  {
    "id": "d04",
    "name": "牛肺疫",
    "alias": "牛传染性胸膜肺炎",
    "description": "牛肺疫是由丝状支原体丝状亚种引起的一种高度接触性呼吸道传染病。",
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "2-4周",
    "mortality_rate": "急性型可达50%以上"
  },
  {
    "id": "d05",
    "name": "牛流行热",
    "alias": "三日热",
    "description": "牛流行热是由牛流行热病毒引起的一种急性热性传染病。",
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "2-3天",
    "mortality_rate": "较低"
  },
  {
    "id": "d06",
    "name": "牛病毒性腹泻",
    "alias": "BVD",
    "description": "牛病毒性腹泻是由牛病毒性腹泻病毒引起的一种急性传染病。",
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "5-10天",
    "mortality_rate": "犊牛较高"
  },
  {
    "id": "d07",
    "name": "牛传染性鼻气管炎",
    "alias": "IBR",
    "description": "牛传染性鼻气管炎是由牛疱疹病毒引起的一种急性传染病。",
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "3-7天",
    "mortality_rate": "较低"
  },
  {
    "id": "d08",
    "name": "牛巴氏杆菌病",
    "alias": "牛出血性败血症",
    "description": "牛巴氏杆菌病是由多杀性巴氏杆菌引起的一种急性传染病。",
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "1-3天",
    "mortality_rate": "急性型可达80%以上"
  },
  {
    "id": "d09",
    "name": "犊牛大肠杆菌病",
    "alias": "犊牛白痢",
    "description": "犊牛大肠杆菌病是由致病性大肠杆菌引起的新生犊牛急性肠道传染病。",
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "数小时至1-2天",
    "mortality_rate": "可达50%以上"
  },
  {
    "id": "d10",
    "name": "牛副结核病",
    "alias": "副结核性肠炎",
    "description": "牛副结核病是由副结核分枝杆菌引起的一种慢性消耗性肠道传染病。",
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "数月至数年",
    "mortality_rate": "慢性消耗致死"
  },
  {
    "id": "d11",
    "name": "牛炭疽",
    "alias": "炭疽",
    "description": "牛炭疽是由炭疽杆菌引起的一种急性、热性、败血性传染病。",
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "1-5天",
    "mortality_rate": "急性型可达100%"
  },
  {
    "id": "d12",
    "name": "牛气肿疽",
    "alias": "黑腿病",
    "description": "牛气肿疽是由气肿疽梭菌引起的一种急性、热性、败血性传染病。",
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "3-5天",
    "mortality_rate": "急性型可达80%以上"
  },
  {
    "id": "d13",
    "name": "牛恶性水肿",
    "alias": "恶性水肿",
    "description": "牛恶性水肿是由腐败梭菌引起的一种急性、创伤性传染病。",
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "1-3天",
    "mortality_rate": "较高"
  },
  {
    "id": "d14",
    "name": "牛破伤风",
    "alias": "锁口风",
    "description": "牛破伤风是由破伤风梭菌引起的一种急性中毒性传染病。",
    "severity": "high",
    "is_contagious": false,
    "incubation_period": "1-2周",
    "mortality_rate": "较高"
  },
  {
    "id": "d15",
    "name": "牛狂犬病",
    "alias": "疯牛病",
    "description": "牛狂犬病是由狂犬病病毒引起的一种急性传染病。",
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "2-8周",
    "mortality_rate": "100%"
  },
  {
    "id": "d16",
    "name": "牛传染性角膜结膜炎",
    "alias": "红眼病",
    "description": "牛传染性角膜结膜炎是由牛摩拉克菌引起的一种急性传染病。",
    "severity": "low",
    "is_contagious": true,
    "incubation_period": "3-7天",
    "mortality_rate": "低"
  },
  {
    "id": "d17",
    "name": "牛放线菌病",
    "alias": "大颌病",
    "description": "牛放线菌病是由牛放线菌引起的一种慢性传染病。",
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "数周",
    "mortality_rate": "低"
  },
  {
    "id": "d18",
    "name": "牛衣原体病",
    "alias": "衣原体感染",
    "description": "牛衣原体病是由衣原体引起的一种传染病。",
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "1-3周",
    "mortality_rate": "较低"
  },
  {
    "id": "d19",
    "name": "牛球虫病",
    "alias": "球虫感染",
    "description": "牛球虫病是由球虫引起的一种肠道寄生虫病。",
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "1-2周",
    "mortality_rate": "犊牛较高"
  },
  {
    "id": "d20",
    "name": "牛肝片吸虫病",
    "alias": "肝蛭病",
    "description": "牛肝片吸虫病是由肝片吸虫引起的一种寄生虫病。",
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "6-12周",
    "mortality_rate": "慢性消耗致死"
  },
  {
    "id": "d21",
    "name": "牛绦虫病",
    "alias": "绦虫感染",
    "description": "牛绦虫病是由绦虫引起的一种肠道寄生虫病。",
    "severity": "low",
    "is_contagious": false,
    "incubation_period": "4-8周",
    "mortality_rate": "低"
  },
  {
    "id": "d22",
    "name": "牛螨病",
    "alias": "疥癣",
    "description": "牛螨病是由螨虫引起的一种体外寄生虫病。",
    "severity": "low",
    "is_contagious": true,
    "incubation_period": "2-4周",
    "mortality_rate": "低"
  },
  {
    "id": "d23",
    "name": "牛前胃弛缓",
    "alias": "消化不良",
    "description": "牛前胃弛缓是由于饲养管理不当引起的一种消化系统疾病。",
    "severity": "low",
    "is_contagious": false,
    "incubation_period": "数天",
    "mortality_rate": "低"
  },
  {
    "id": "d24",
    "name": "牛瘤胃臌气",
    "alias": "胀气",
    "description": "牛瘤胃臌气是由于采食易发酵饲料引起的一种急性疾病。",
    "severity": "high",
    "is_contagious": false,
    "incubation_period": "数小时",
    "mortality_rate": "急性型较高"
  },
  {
    "id": "d25",
    "name": "牛瘤胃酸中毒",
    "alias": "酸中毒",
    "description": "牛瘤胃酸中毒是由于采食过多精料引起的一种代谢性疾病。",
    "severity": "high",
    "is_contagious": false,
    "incubation_period": "数小时",
    "mortality_rate": "较高"
  },
  {
    "id": "d26",
    "name": "牛酮病",
    "alias": "酮血症",
    "description": "牛酮病是由于能量代谢障碍引起的一种营养代谢病。",
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "数天",
    "mortality_rate": "较低"
  },
  {
    "id": "d27",
    "name": "牛生产瘫痪",
    "alias": "产后瘫痪",
    "description": "牛生产瘫痪是由于产后低血钙引起的一种代谢性疾病。",
    "severity": "high",
    "is_contagious": false,
    "incubation_period": "产后1-3天",
    "mortality_rate": "较高"
  },
  {
    "id": "d28",
    "name": "牛子宫内膜炎",
    "alias": "子宫炎",
    "description": "牛子宫内膜炎是由于细菌感染引起的一种生殖系统疾病。",
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "产后3-5天",
    "mortality_rate": "低"
  },
  {
    "id": "d29",
    "name": "牛乳房炎",
    "alias": "乳腺炎",
    "description": "牛乳房炎是由于细菌感染引起的一种乳房疾病。",
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "1-3天",
    "mortality_rate": "低"
  },
  {
    "id": "d30",
    "name": "牛胎衣不下",
    "alias": "胎盘滞留",
    "description": "牛胎衣不下是母牛产后胎膜不能正常排出的一种产科疾病。",
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "产后数小时",
    "mortality_rate": "低"
  },
  {
    "id": "d31",
    "name": "牛难产",
    "alias": "产力性难产",
    "description": "牛难产是母牛分娩过程中胎儿不能正常产出的一种产科疾病。",
    "severity": "high",
    "is_contagious": false,
    "incubation_period": "分娩时",
    "mortality_rate": "较高"
  },
  {
    "id": "d32",
    "name": "牛维生素A缺乏症",
    "alias": "夜盲症",
    "description": "牛维生素A缺乏症是由于维生素A缺乏引起的一种营养代谢病。",
    "severity": "low",
    "is_contagious": false,
    "incubation_period": "数周",
    "mortality_rate": "低"
  },
  {
    "id": "d33",
    "name": "牛白肌病",
    "alias": "硒缺乏症",
    "description": "牛白肌病是由于硒元素缺乏引起的一种营养代谢病。",
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "数周",
    "mortality_rate": "较高"
  },
  {
    "id": "d34",
    "name": "牛佝偻病",
    "alias": "软骨病",
    "description": "牛佝偻病是由于钙磷代谢障碍引起的一种营养代谢病。",
    "severity": "low",
    "is_contagious": false,
    "incubation_period": "数周",
    "mortality_rate": "低"
  },
  {
    "id": "d35",
    "name": "牛异食癖",
    "alias": "异食症",
    "description": "牛异食癖是由于营养缺乏或管理不当引起的一种行为异常。",
    "severity": "low",
    "is_contagious": false,
    "incubation_period": "数天",
    "mortality_rate": "低"
  },
  {
    "id": "d36",
    "name": "牛蹄叶炎",
    "alias": "蹄病",
    "description": "牛蹄叶炎是由于多种因素引起的一种蹄部疾病。",
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "数天",
    "mortality_rate": "低"
  },
  {
    "id": "d37",
    "name": "牛腐蹄病",
    "alias": "蹄叉腐烂",
    "description": "牛腐蹄病是由于细菌感染引起的一种蹄部疾病。",
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "数天",
    "mortality_rate": "低"
  },
  {
    "id": "d38",
    "name": "牛感冒",
    "alias": "上呼吸道感染",
    "description": "牛感冒是由于受寒引起的一种上呼吸道疾病。",
    "severity": "low",
    "is_contagious": false,
    "incubation_period": "1-3天",
    "mortality_rate": "低"
  },
  {
    "id": "d39",
    "name": "牛肺炎",
    "alias": "支气管肺炎",
    "description": "牛肺炎是由于细菌或病毒感染引起的一种呼吸道疾病。",
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "3-7天",
    "mortality_rate": "较高"
  },
  {
    "id": "d40",
    "name": "牛中暑",
    "alias": "热射病",
    "description": "牛中暑是由于环境温度过高引起的一种急性热应激疾病。",
    "severity": "high",
    "is_contagious": false,
    "incubation_period": "数分钟至数小时",
    "mortality_rate": "较高"
  }
],
  
  symptoms: [
  {
    "id": "s01",
    "name": "高烧40℃以上",
    "category": "temperature"
  },
  {
    "id": "s02",
    "name": "低烧38.5-40℃",
    "category": "temperature"
  },
  {
    "id": "s03",
    "name": "体温正常",
    "category": "temperature"
  },
  {
    "id": "s04",
    "name": "精神沉郁",
    "category": "general"
  },
  {
    "id": "s05",
    "name": "食欲废绝",
    "category": "general"
  },
  {
    "id": "s06",
    "name": "食欲减退",
    "category": "general"
  },
  {
    "id": "s07",
    "name": "腹泻",
    "category": "digestive"
  },
  {
    "id": "s08",
    "name": "水样腹泻",
    "category": "digestive"
  },
  {
    "id": "s09",
    "name": "血便",
    "category": "digestive"
  },
  {
    "id": "s10",
    "name": "呕吐",
    "category": "digestive"
  },
  {
    "id": "s11",
    "name": "咳嗽",
    "category": "respiratory"
  },
  {
    "id": "s12",
    "name": "喘气",
    "category": "respiratory"
  },
  {
    "id": "s13",
    "name": "流鼻涕",
    "category": "respiratory"
  },
  {
    "id": "s14",
    "name": "打喷嚏",
    "category": "respiratory"
  },
  {
    "id": "s15",
    "name": "皮肤发红",
    "category": "skin"
  },
  {
    "id": "s16",
    "name": "皮肤丘疹",
    "category": "skin"
  },
  {
    "id": "s17",
    "name": "皮肤溃烂",
    "category": "skin"
  },
  {
    "id": "s18",
    "name": "耳朵发紫",
    "category": "skin"
  },
  {
    "id": "s19",
    "name": "关节肿大",
    "category": "locomotor"
  },
  {
    "id": "s20",
    "name": "跛行",
    "category": "locomotor"
  },
  {
    "id": "s21",
    "name": "站立困难",
    "category": "locomotor"
  },
  {
    "id": "s22",
    "name": "抽搐",
    "category": "neurological"
  },
  {
    "id": "s23",
    "name": "转圈运动",
    "category": "neurological"
  },
  {
    "id": "s24",
    "name": "角弓反张",
    "category": "neurological"
  },
  {
    "id": "s25",
    "name": "眼结膜充血",
    "category": "eye"
  },
  {
    "id": "s26",
    "name": "眼屎增多",
    "category": "eye"
  },
  {
    "id": "s27",
    "name": "流涎",
    "category": "general"
  },
  {
    "id": "s28",
    "name": "便秘",
    "category": "digestive"
  },
  {
    "id": "s29",
    "name": "消瘦",
    "category": "general"
  },
  {
    "id": "s30",
    "name": "被毛粗乱",
    "category": "skin"
  },
  {
    "id": "s31",
    "name": "贫血苍白",
    "category": "general"
  },
  {
    "id": "s32",
    "name": "黄疸",
    "category": "skin"
  },
  {
    "id": "s33",
    "name": "流产",
    "category": "reproductive"
  },
  {
    "id": "s34",
    "name": "死胎",
    "category": "reproductive"
  },
  {
    "id": "s35",
    "name": "乳房肿胀",
    "category": "reproductive"
  },
  {
    "id": "s36",
    "name": "子宫炎",
    "category": "reproductive"
  },
  {
    "id": "s37",
    "name": "无乳",
    "category": "reproductive"
  },
  {
    "id": "s38",
    "name": "神经症状",
    "category": "neurological"
  },
  {
    "id": "s39",
    "name": "共济失调",
    "category": "neurological"
  },
  {
    "id": "s40",
    "name": "瘫痪",
    "category": "locomotor"
  },
  {
    "id": "s41",
    "name": "皮肤结痂",
    "category": "skin"
  },
  {
    "id": "s42",
    "name": "脱毛",
    "category": "skin"
  },
  {
    "id": "s43",
    "name": "骚痒",
    "category": "skin"
  },
  {
    "id": "s44",
    "name": "呼吸困难",
    "category": "respiratory"
  },
  {
    "id": "s45",
    "name": "眼分泌物增多",
    "category": "eye"
  },
  {
    "id": "s46",
    "name": "口腔溃疡",
    "category": "digestive"
  },
  {
    "id": "s47",
    "name": "蹄部溃疡",
    "category": "locomotor"
  },
  {
    "id": "s48",
    "name": "乳房硬结",
    "category": "reproductive"
  },
  {
    "id": "s49",
    "name": "恶臭分泌物",
    "category": "reproductive"
  },
  {
    "id": "s50",
    "name": "瘤胃臌气",
    "category": "digestive"
  },
  {
    "id": "s51",
    "name": "瘤胃蠕动减弱",
    "category": "digestive"
  },
  {
    "id": "s52",
    "name": "磨牙",
    "category": "neurological"
  },
  {
    "id": "s53",
    "name": "呻吟",
    "category": "general"
  },
  {
    "id": "s54",
    "name": "弓背",
    "category": "locomotor"
  },
  {
    "id": "s55",
    "name": "努责",
    "category": "reproductive"
  },
  {
    "id": "s56",
    "name": "突然死亡",
    "category": "general"
  }
],
  
  medications: [
  {
    "id": "m01",
    "name": "青霉素钾/钠",
    "type": "抗生素",
    "dosage": "4-6万单位/kg体重",
    "route": "注射"
  },
  {
    "id": "m02",
    "name": "链霉素",
    "type": "抗生素",
    "dosage": "10-15mg/kg体重",
    "route": "注射"
  },
  {
    "id": "m03",
    "name": "恩诺沙星",
    "type": "抗生素",
    "dosage": "2.5-5mg/kg体重",
    "route": "注射"
  },
  {
    "id": "m04",
    "name": "氟苯尼考",
    "type": "抗生素",
    "dosage": "20mg/kg体重",
    "route": "注射"
  },
  {
    "id": "m05",
    "name": "头孢噻呋",
    "type": "抗生素",
    "dosage": "3-5mg/kg体重",
    "route": "注射"
  },
  {
    "id": "m06",
    "name": "阿莫西林",
    "type": "抗生素",
    "dosage": "10-20mg/kg体重",
    "route": "注射/口服"
  },
  {
    "id": "m07",
    "name": "硫酸庆大霉素",
    "type": "抗生素",
    "dosage": "4-8mg/kg体重",
    "route": "注射/口服"
  },
  {
    "id": "m08",
    "name": "安乃近",
    "type": "退烧药",
    "dosage": "0.1-0.2ml/kg体重",
    "route": "注射"
  },
  {
    "id": "m09",
    "name": "氟尼辛葡甲胺",
    "type": "退烧药",
    "dosage": "2mg/kg体重",
    "route": "注射"
  },
  {
    "id": "m10",
    "name": "地塞米松",
    "type": "激素",
    "dosage": "0.1-0.2mg/kg体重",
    "route": "注射"
  },
  {
    "id": "m11",
    "name": "双黄连注射液",
    "type": "中药",
    "dosage": "0.2-0.3ml/kg体重",
    "route": "注射"
  },
  {
    "id": "m12",
    "name": "板蓝根注射液",
    "type": "中药",
    "dosage": "0.2ml/kg体重",
    "route": "注射"
  },
  {
    "id": "m13",
    "name": "穿心莲注射液",
    "type": "中药",
    "dosage": "0.1-0.2ml/kg体重",
    "route": "注射"
  },
  {
    "id": "m14",
    "name": "蒙脱石散",
    "type": "止泻药",
    "dosage": "犊牛1-2g/头",
    "route": "口服"
  },
  {
    "id": "m15",
    "name": "口服补液盐",
    "type": "补液",
    "dosage": "自由饮用",
    "route": "口服"
  },
  {
    "id": "m16",
    "name": "维生素C",
    "type": "维生素",
    "dosage": "10-20mg/kg体重",
    "route": "注射"
  },
  {
    "id": "m17",
    "name": "维生素B12",
    "type": "维生素",
    "dosage": "0.1-0.3mg/头",
    "route": "注射"
  },
  {
    "id": "m18",
    "name": "右旋糖酐铁",
    "type": "补铁",
    "dosage": "100-200mg/头",
    "route": "注射"
  },
  {
    "id": "m19",
    "name": "阿维菌素",
    "type": "驱虫药",
    "dosage": "0.2mg/kg体重",
    "route": "注射"
  },
  {
    "id": "m20",
    "name": "伊维菌素",
    "type": "驱虫药",
    "dosage": "0.2mg/kg体重",
    "route": "注射"
  },
  {
    "id": "m21",
    "name": "双甲脒",
    "type": "驱虫药",
    "dosage": "0.025-0.05%溶液",
    "route": "外用"
  },
  {
    "id": "m22",
    "name": "维生素AD注射液",
    "type": "维生素",
    "dosage": "2-4ml/头",
    "route": "注射"
  },
  {
    "id": "m23",
    "name": "亚硒酸钠维生素E",
    "type": "微量元素",
    "dosage": "2-4ml/头",
    "route": "注射"
  },
  {
    "id": "m24",
    "name": "葡萄糖",
    "type": "营养",
    "dosage": "10-20ml/kg体重",
    "route": "注射"
  },
  {
    "id": "m25",
    "name": "硫酸镁",
    "type": "泻药",
    "dosage": "200-400g/头",
    "route": "口服"
  },
  {
    "id": "m26",
    "name": "西咪替丁",
    "type": "胃药",
    "dosage": "5-10mg/kg体重",
    "route": "注射"
  },
  {
    "id": "m27",
    "name": "维生素K3",
    "type": "维生素",
    "dosage": "1-2mg/kg体重",
    "route": "注射"
  },
  {
    "id": "m28",
    "name": "生物素",
    "type": "维生素",
    "dosage": "0.1-0.2mg/头",
    "route": "口服"
  },
  {
    "id": "m29",
    "name": "复合维生素B",
    "type": "维生素",
    "dosage": "2-4ml/头",
    "route": "注射"
  },
  {
    "id": "m30",
    "name": "碘酊",
    "type": "消毒药",
    "dosage": "适量",
    "route": "外用"
  },
  {
    "id": "m31",
    "name": "黄芪多糖",
    "type": "中药",
    "dosage": "0.2ml/kg体重",
    "route": "注射"
  },
  {
    "id": "m32",
    "name": "口蹄疫高免血清",
    "type": "生物制品",
    "dosage": "1-2ml/kg体重",
    "route": "注射"
  },
  {
    "id": "m33",
    "name": "替米考星",
    "type": "抗生素",
    "dosage": "10mg/kg体重",
    "route": "注射"
  },
  {
    "id": "m34",
    "name": "干扰素",
    "type": "生物制品",
    "dosage": "2ml/头",
    "route": "注射"
  },
  {
    "id": "m35",
    "name": "杨树花口服液",
    "type": "中药",
    "dosage": "5-10ml/头",
    "route": "口服"
  },
  {
    "id": "m36",
    "name": "硫酸粘杆菌素",
    "type": "抗生素",
    "dosage": "5mg/kg体重",
    "route": "口服"
  },
  {
    "id": "m37",
    "name": "乙酰甲喹",
    "type": "抗生素",
    "dosage": "5mg/kg体重",
    "route": "注射"
  },
  {
    "id": "m38",
    "name": "泰妙菌素",
    "type": "抗生素",
    "dosage": "拌料",
    "route": "拌料"
  },
  {
    "id": "m39",
    "name": "多西环素",
    "type": "抗生素",
    "dosage": "拌料",
    "route": "拌料"
  },
  {
    "id": "m40",
    "name": "地美硝唑",
    "type": "抗原虫药",
    "dosage": "拌料",
    "route": "拌料"
  },
  {
    "id": "m41",
    "name": "三氮脒",
    "type": "抗原虫药",
    "dosage": "5mg/kg体重",
    "route": "注射"
  },
  {
    "id": "m42",
    "name": "磺胺间甲氧嘧啶",
    "type": "抗生素",
    "dosage": "0.1ml/kg体重",
    "route": "注射"
  },
  {
    "id": "m43",
    "name": "阿苯达唑",
    "type": "驱虫药",
    "dosage": "5-10mg/kg体重",
    "route": "口服"
  },
  {
    "id": "m44",
    "name": "鱼肝油",
    "type": "维生素",
    "dosage": "10-20ml/头",
    "route": "口服"
  },
  {
    "id": "m45",
    "name": "甘露醇",
    "type": "脱水药",
    "dosage": "1-2g/kg体重",
    "route": "静脉注射"
  },
  {
    "id": "m46",
    "name": "人工盐",
    "type": "健胃药",
    "dosage": "200-400g/头",
    "route": "口服"
  },
  {
    "id": "m47",
    "name": "碳酸氢钠",
    "type": "制酸药",
    "dosage": "20-50g/头",
    "route": "口服"
  },
  {
    "id": "m48",
    "name": "鱼石脂软膏",
    "type": "外用药",
    "dosage": "适量",
    "route": "外用"
  },
  {
    "id": "m49",
    "name": "宫炎清",
    "type": "消毒药",
    "dosage": "200ml",
    "route": "子宫灌注"
  },
  {
    "id": "m50",
    "name": "氯丙嗪",
    "type": "镇静药",
    "dosage": "1-2mg/kg体重",
    "route": "注射"
  },
  {
    "id": "m51",
    "name": "高锰酸钾",
    "type": "消毒药",
    "dosage": "0.1%溶液",
    "route": "外用"
  },
  {
    "id": "m52",
    "name": "氨苄西林",
    "type": "抗生素",
    "dosage": "10-20mg/kg体重",
    "route": "注射/口服"
  },
  {
    "id": "m53",
    "name": "头孢喹肟",
    "type": "抗生素",
    "dosage": "2-3mg/kg体重",
    "route": "注射"
  },
  {
    "id": "m54",
    "name": "泰乐菌素",
    "type": "抗生素",
    "dosage": "5-10mg/kg体重",
    "route": "注射"
  },
  {
    "id": "m55",
    "name": "林可霉素",
    "type": "抗生素",
    "dosage": "10mg/kg体重",
    "route": "注射"
  },
  {
    "id": "m56",
    "name": "缩宫素",
    "type": "激素",
    "dosage": "20-50单位/头",
    "route": "注射"
  },
  {
    "id": "m57",
    "name": "氯前列烯醇",
    "type": "激素",
    "dosage": "0.2-0.4mg/头",
    "route": "注射"
  },
  {
    "id": "m58",
    "name": "苯甲酸雌二醇",
    "type": "激素",
    "dosage": "2-4mg/头",
    "route": "注射"
  },
  {
    "id": "m59",
    "name": "黄体酮",
    "type": "激素",
    "dosage": "50-100mg/头",
    "route": "注射"
  },
  {
    "id": "m60",
    "name": "止血敏",
    "type": "止血药",
    "dosage": "4-8ml/头",
    "route": "注射"
  },
  {
    "id": "m61",
    "name": "益母生化散",
    "type": "中药",
    "dosage": "拌料",
    "route": "拌料"
  },
  {
    "id": "m62",
    "name": "过硫酸氢钾",
    "type": "消毒药",
    "dosage": "1:200稀释",
    "route": "外用"
  },
  {
    "id": "m63",
    "name": "戊二醛",
    "type": "消毒药",
    "dosage": "1:200-1:500稀释",
    "route": "外用"
  },
  {
    "id": "m64",
    "name": "聚维酮碘",
    "type": "消毒药",
    "dosage": "1:500稀释",
    "route": "外用"
  },
  {
    "id": "m65",
    "name": "电解多维",
    "type": "营养补充",
    "dosage": "拌料/饮水",
    "route": "拌料/饮水"
  },
  {
    "id": "m66",
    "name": "阿托品",
    "type": "解毒药",
    "dosage": "0.01-0.02mg/kg体重",
    "route": "注射"
  },
  {
    "id": "m67",
    "name": "硫酸镁",
    "type": "泻药",
    "dosage": "200-400g/头",
    "route": "口服"
  },
  {
    "id": "m68",
    "name": "液体石蜡",
    "type": "泻药",
    "dosage": "500-1000ml/头",
    "route": "口服"
  },
  {
    "id": "m69",
    "name": "氯化钙",
    "type": "补钙药",
    "dosage": "5-10g/头",
    "route": "注射"
  },
  {
    "id": "m70",
    "name": "葡萄糖酸钙",
    "type": "补钙药",
    "dosage": "10-20g/头",
    "route": "注射"
  }
]
}

  treatments: [
  {
    "id": "t01",
    "disease_id": "d01",
    "disease_name": "牛口蹄疫",
    "treatment_plans": [
      {
        "plan_name": "方案一：抗感染+对症治疗",
        "medications": [
          {
            "medication_id": "m05",
            "medication_name": "头孢噻呋",
            "dosage_per_kg": "5mg",
            "frequency": "每日1次",
            "duration_days": 5,
            "route": "肌肉注射",
            "notes": "控制继发感染"
          },
          {
            "medication_id": "m09",
            "medication_name": "氟尼辛葡甲胺",
            "dosage_per_kg": "2mg",
            "frequency": "每日1次",
            "duration_days": 3,
            "route": "肌肉注射",
            "notes": "退烧镇痛"
          }
        ],
        "oral_medications": [
          {
            "medication_name": "板青颗粒",
            "dosage": "100g拌料200斤",
            "frequency": "持续",
            "duration_days": 7,
            "notes": "清热解毒"
          }
        ],
        "notes": "口腔用0.1%高锰酸钾冲洗，蹄部用碘甘油涂抹。"
      }
    ],
    "nursing_care": "保持圈舍干燥清洁，提供软质饲料和清洁饮水。",
    "priority": 1
  },
  {
    "id": "t02",
    "disease_id": "d02",
    "disease_name": "牛结核病",
    "treatment_plans": [
      {
        "plan_name": "方案一：无特效治疗",
        "medications": [],
        "oral_medications": [],
        "notes": "结核病无特效治疗，发现后立即上报，扑杀无害化处理。"
      }
    ],
    "nursing_care": "严格隔离，等待官方处理。",
    "priority": 1
  },
  {
    "id": "t03",
    "disease_id": "d03",
    "disease_name": "牛布氏杆菌病",
    "treatment_plans": [
      {
        "plan_name": "方案一：无特效治疗",
        "medications": [],
        "oral_medications": [],
        "notes": "布氏杆菌病无特效治疗，发现后立即上报，扑杀无害化处理。"
      }
    ],
    "nursing_care": "严格隔离，等待官方处理。",
    "priority": 1
  },
  {
    "id": "t04",
    "disease_id": "d04",
    "disease_name": "牛肺疫",
    "treatment_plans": [
      {
        "plan_name": "方案一：泰乐菌素+氟尼辛",
        "medications": [
          {
            "medication_id": "m54",
            "medication_name": "泰乐菌素",
            "dosage_per_kg": "10mg",
            "frequency": "每日1次",
            "duration_days": 5,
            "route": "肌肉注射",
            "notes": "控制支原体感染"
          },
          {
            "medication_id": "m09",
            "medication_name": "氟尼辛葡甲胺",
            "dosage_per_kg": "2mg",
            "frequency": "每日1次",
            "duration_days": 3,
            "route": "肌肉注射",
            "notes": "退烧抗炎"
          }
        ],
        "oral_medications": [
          {
            "medication_name": "麻杏石甘散",
            "dosage": "100g拌料200斤",
            "frequency": "持续",
            "duration_days": 7,
            "notes": "止咳平喘"
          }
        ],
        "notes": "泰乐菌素对支原体效果好。"
      }
    ],
    "nursing_care": "改善通风，降低饲养密度。",
    "priority": 1
  },
  {
    "id": "t05",
    "disease_id": "d05",
    "disease_name": "牛流行热",
    "treatment_plans": [
      {
        "plan_name": "方案一：对症治疗",
        "medications": [
          {
            "medication_id": "m09",
            "medication_name": "氟尼辛葡甲胺",
            "dosage_per_kg": "2mg",
            "frequency": "每日1次",
            "duration_days": 3,
            "route": "肌肉注射",
            "notes": "退烧镇痛"
          },
          {
            "medication_id": "m16",
            "medication_name": "维生素C",
            "dosage_per_kg": "20mg",
            "frequency": "每日1次",
            "duration_days": 5,
            "route": "肌肉注射",
            "notes": "抗应激"
          }
        ],
        "oral_medications": [
          {
            "medication_name": "板蓝根颗粒",
            "dosage": "100g拌料200斤",
            "frequency": "持续",
            "duration_days": 5,
            "notes": "清热解毒"
          }
        ],
        "notes": "流行热无特效药，以对症治疗为主。"
      }
    ],
    "nursing_care": "保持圈舍清洁，提供优质饮水。",
    "priority": 2
  },
  {
    "id": "t06",
    "disease_id": "d06",
    "disease_name": "牛病毒性腹泻",
    "treatment_plans": [
      {
        "plan_name": "方案一：对症治疗",
        "medications": [
          {
            "medication_id": "m05",
            "medication_name": "头孢噻呋",
            "dosage_per_kg": "5mg",
            "frequency": "每日1次",
            "duration_days": 5,
            "route": "肌肉注射",
            "notes": "控制继发感染"
          },
          {
            "medication_id": "m09",
            "medication_name": "氟尼辛葡甲胺",
            "dosage_per_kg": "2mg",
            "frequency": "每日1次",
            "duration_days": 3,
            "route": "肌肉注射",
            "notes": "退烧"
          }
        ],
        "oral_medications": [
          {
            "medication_name": "蒙脱石散",
            "dosage": "犊牛3-5g/头",
            "frequency": "每日2次",
            "duration_days": 3,
            "notes": "止泻保护肠道"
          },
          {
            "medication_name": "口服补液盐",
            "dosage": "自由饮用",
            "frequency": "持续",
            "duration_days": 5,
            "notes": "防止脱水"
          }
        ],
        "notes": "BVD无特效药，以对症治疗为主。"
      }
    ],
    "nursing_care": "隔离病牛，提供优质饲料。",
    "priority": 2
  },
  {
    "id": "t07",
    "disease_id": "d07",
    "disease_name": "牛传染性鼻气管炎",
    "treatment_plans": [
      {
        "plan_name": "方案一：对症治疗",
        "medications": [
          {
            "medication_id": "m05",
            "medication_name": "头孢噻呋",
            "dosage_per_kg": "5mg",
            "frequency": "每日1次",
            "duration_days": 5,
            "route": "肌肉注射",
            "notes": "控制继发感染"
          },
          {
            "medication_id": "m09",
            "medication_name": "氟尼辛葡甲胺",
            "dosage_per_kg": "2mg",
            "frequency": "每日1次",
            "duration_days": 3,
            "route": "肌肉注射",
            "notes": "退烧"
          }
        ],
        "oral_medications": [
          {
            "medication_name": "板蓝根颗粒",
            "dosage": "100g拌料200斤",
            "frequency": "持续",
            "duration_days": 7,
            "notes": "清热解毒"
          }
        ],
        "notes": "IBR无特效药，以对症治疗为主。"
      }
    ],
    "nursing_care": "隔离病牛，改善通风。",
    "priority": 2
  },
  {
    "id": "t08",
    "disease_id": "d08",
    "disease_name": "牛巴氏杆菌病",
    "treatment_plans": [
      {
        "plan_name": "方案一：头孢+氟尼辛",
        "medications": [
          {
            "medication_id": "m05",
            "medication_name": "头孢噻呋",
            "dosage_per_kg": "5mg",
            "frequency": "每日1次",
            "duration_days": 5,
            "route": "肌肉注射",
            "notes": "控制感染"
          },
          {
            "medication_id": "m09",
            "medication_name": "氟尼辛葡甲胺",
            "dosage_per_kg": "2mg",
            "frequency": "每日1次",
            "duration_days": 3,
            "route": "肌肉注射",
            "notes": "退烧抗炎"
          }
        ],
        "oral_medications": [
          {
            "medication_name": "氟苯尼考粉",
            "dosage": "100g拌料200斤",
            "frequency": "持续",
            "duration_days": 7,
            "notes": "控制感染"
          }
        ],
        "notes": "头孢+氟尼辛注射，配合氟苯尼考拌料。"
      }
    ],
    "nursing_care": "改善通风，降低饲养密度。",
    "priority": 1
  },
  {
    "id": "t09",
    "disease_id": "d09",
    "disease_name": "犊牛大肠杆菌病",
    "treatment_plans": [
      {
        "plan_name": "方案一：庆大霉素+蒙脱石",
        "medications": [
          {
            "medication_id": "m07",
            "medication_name": "硫酸庆大霉素",
            "dosage_per_kg": "2-3ml/头",
            "frequency": "每日2次",
            "duration_days": 3,
            "route": "口服",
            "notes": "口服，肠道杀菌"
          }
        ],
        "oral_medications": [
          {
            "medication_name": "蒙脱石散",
            "dosage": "犊牛1-2g/头",
            "frequency": "每日2次",
            "duration_days": 3,
            "notes": "止泻保护肠道"
          },
          {
            "medication_name": "口服补液盐",
            "dosage": "自由饮用",
            "frequency": "持续",
            "duration_days": 5,
            "notes": "防止脱水"
          }
        ],
        "notes": "犊牛口服庆大霉素+蒙脱石+补液盐。"
      }
    ],
    "nursing_care": "保温，保持干燥，及时清除粪便。",
    "priority": 1
  },
  {
    "id": "t10",
    "disease_id": "d10",
    "disease_name": "牛副结核病",
    "treatment_plans": [
      {
        "plan_name": "方案一：无特效治疗",
        "medications": [],
        "oral_medications": [],
        "notes": "副结核病无特效治疗，发现后立即上报，扑杀无害化处理。"
      }
    ],
    "nursing_care": "严格隔离，等待官方处理。",
    "priority": 1
  },
  {
    "id": "t11",
    "disease_id": "d11",
    "disease_name": "牛炭疽",
    "treatment_plans": [
      {
        "plan_name": "方案一：无特效治疗",
        "medications": [],
        "oral_medications": [],
        "notes": "炭疽无特效治疗，发现后立即上报，扑杀无害化处理。严禁解剖。"
      }
    ],
    "nursing_care": "严格隔离，等待官方处理。严禁解剖。",
    "priority": 1
  },
  {
    "id": "t12",
    "disease_id": "d12",
    "disease_name": "牛气肿疽",
    "treatment_plans": [
      {
        "plan_name": "方案一：青霉素+氟尼辛",
        "medications": [
          {
            "medication_id": "m01",
            "medication_name": "青霉素钾/钠",
            "dosage_per_kg": "6-8万单位",
            "frequency": "每日2-3次",
            "duration_days": 5,
            "route": "肌肉注射",
            "notes": "首选药物"
          },
          {
            "medication_id": "m09",
            "medication_name": "氟尼辛葡甲胺",
            "dosage_per_kg": "2mg",
            "frequency": "每日1次",
            "duration_days": 3,
            "route": "肌肉注射",
            "notes": "退烧镇痛"
          }
        ],
        "oral_medications": [],
        "notes": "青霉素是首选药物，早期治疗效果好。"
      }
    ],
    "nursing_care": "隔离病牛，保持圈舍清洁。",
    "priority": 1
  },
  {
    "id": "t13",
    "disease_id": "d13",
    "disease_name": "牛恶性水肿",
    "treatment_plans": [
      {
        "plan_name": "方案一：青霉素+清创",
        "medications": [
          {
            "medication_id": "m01",
            "medication_name": "青霉素钾/钠",
            "dosage_per_kg": "6-8万单位",
            "frequency": "每日2-3次",
            "duration_days": 5,
            "route": "肌肉注射",
            "notes": "对厌氧菌效果好"
          }
        ],
        "oral_medications": [],
        "notes": "青霉素注射+双氧水清创。"
      }
    ],
    "nursing_care": "保持环境干燥，减少外伤。",
    "priority": 1
  },
  {
    "id": "t14",
    "disease_id": "d14",
    "disease_name": "牛破伤风",
    "treatment_plans": [
      {
        "plan_name": "方案一：破伤风抗毒素+镇静",
        "medications": [
          {
            "medication_id": "m01",
            "medication_name": "青霉素钾/钠",
            "dosage_per_kg": "6-8万单位",
            "frequency": "每日2-3次",
            "duration_days": 5,
            "route": "肌肉注射",
            "notes": "预防感染"
          },
          {
            "medication_id": "m50",
            "medication_name": "氯丙嗪",
            "dosage_per_kg": "1-2mg",
            "frequency": "每日2次",
            "duration_days": 3,
            "route": "肌肉注射",
            "notes": "镇静"
          }
        ],
        "oral_medications": [],
        "notes": "破伤风抗毒素+青霉素+镇静。"
      }
    ],
    "nursing_care": "保持安静环境，避免刺激。",
    "priority": 1
  },
  {
    "id": "t15",
    "disease_id": "d15",
    "disease_name": "牛狂犬病",
    "treatment_plans": [
      {
        "plan_name": "方案一：无特效治疗",
        "medications": [],
        "oral_medications": [],
        "notes": "狂犬病无特效治疗，发现后立即上报，扑杀无害化处理。"
      }
    ],
    "nursing_care": "严格隔离，等待官方处理。",
    "priority": 1
  },
  {
    "id": "t16",
    "disease_id": "d16",
    "disease_name": "牛传染性角膜结膜炎",
    "treatment_plans": [
      {
        "plan_name": "方案一：局部治疗",
        "medications": [],
        "oral_medications": [],
        "notes": "用生理盐水清洗患眼，涂抹抗生素眼膏。"
      }
    ],
    "nursing_care": "保持圈舍清洁，避免强光刺激。",
    "priority": 2
  },
  {
    "id": "t17",
    "disease_id": "d17",
    "disease_name": "牛放线菌病",
    "treatment_plans": [
      {
        "plan_name": "方案一：碘化钾+青霉素",
        "medications": [
          {
            "medication_id": "m01",
            "medication_name": "青霉素钾/钠",
            "dosage_per_kg": "6-8万单位",
            "frequency": "每日2-3次",
            "duration_days": 5,
            "route": "肌肉注射",
            "notes": "控制感染"
          }
        ],
        "oral_medications": [
          {
            "medication_name": "碘化钾",
            "dosage": "5-10g/头",
            "frequency": "每日1次",
            "duration_days": 14,
            "notes": "口服碘化钾"
          }
        ],
        "notes": "青霉素注射+碘化钾口服。"
      }
    ],
    "nursing_care": "保持圈舍清洁，减少外伤。",
    "priority": 2
  },
  {
    "id": "t18",
    "disease_id": "d18",
    "disease_name": "牛衣原体病",
    "treatment_plans": [
      {
        "plan_name": "方案一：四环素类",
        "medications": [
          {
            "medication_id": "m39",
            "medication_name": "多西环素",
            "dosage_per_kg": "拌料",
            "frequency": "持续",
            "duration_days": 7,
            "route": "拌料",
            "notes": "对衣原体效果好"
          }
        ],
        "oral_medications": [],
        "notes": "多西环素对衣原体效果好。"
      }
    ],
    "nursing_care": "隔离病牛，改善饲养管理。",
    "priority": 2
  },
  {
    "id": "t19",
    "disease_id": "d19",
    "disease_name": "牛球虫病",
    "treatment_plans": [
      {
        "plan_name": "方案一：磺胺类",
        "medications": [
          {
            "medication_id": "m42",
            "medication_name": "磺胺间甲氧嘧啶",
            "dosage_per_kg": "0.1ml",
            "frequency": "每日1次",
            "duration_days": 5,
            "route": "肌肉注射",
            "notes": "对球虫效果好"
          }
        ],
        "oral_medications": [],
        "notes": "磺胺间甲氧嘧啶对球虫效果好。"
      }
    ],
    "nursing_care": "保持圈舍清洁，及时清除粪便。",
    "priority": 2
  },
  {
    "id": "t20",
    "disease_id": "d20",
    "disease_name": "牛肝片吸虫病",
    "treatment_plans": [
      {
        "plan_name": "方案一：阿苯达唑",
        "medications": [],
        "oral_medications": [
          {
            "medication_name": "阿苯达唑",
            "dosage": "5-10mg/kg体重",
            "frequency": "单次",
            "duration_days": 1,
            "notes": "广谱驱虫药，对肝片吸虫效果好"
          }
        ],
        "notes": "阿苯达唑口服，单次给药。"
      }
    ],
    "nursing_care": "定期驱虫，避免在低洼潮湿地区放牧。",
    "priority": 2
  },
  {
    "id": "t21",
    "disease_id": "d21",
    "disease_name": "牛绦虫病",
    "treatment_plans": [
      {
        "plan_name": "方案一：阿苯达唑",
        "medications": [],
        "oral_medications": [
          {
            "medication_name": "阿苯达唑",
            "dosage": "5-10mg/kg体重",
            "frequency": "单次",
            "duration_days": 1,
            "notes": "广谱驱虫药，对绦虫效果好"
          }
        ],
        "notes": "阿苯达唑口服，单次给药。"
      }
    ],
    "nursing_care": "定期驱虫，保持环境卫生。",
    "priority": 3
  },
  {
    "id": "t22",
    "disease_id": "d22",
    "disease_name": "牛螨病",
    "treatment_plans": [
      {
        "plan_name": "方案一：伊维菌素+外用",
        "medications": [
          {
            "medication_id": "m20",
            "medication_name": "伊维菌素",
            "dosage_per_kg": "0.2mg",
            "frequency": "间隔7-10天重复",
            "duration_days": 2,
            "route": "皮下注射",
            "notes": "驱螨虫"
          }
        ],
        "oral_medications": [],
        "notes": "伊维菌素注射+双甲脒外用，间隔7-10天重复一次。"
      }
    ],
    "nursing_care": "保持圈舍干燥，定期消毒。",
    "priority": 3
  },
  {
    "id": "t23",
    "disease_id": "d23",
    "disease_name": "牛前胃弛缓",
    "treatment_plans": [
      {
        "plan_name": "方案一：健胃+益生菌",
        "medications": [],
        "oral_medications": [
          {
            "medication_name": "人工盐",
            "dosage": "200-400g/头",
            "frequency": "每日1次",
            "duration_days": 3,
            "notes": "健胃通便"
          },
          {
            "medication_name": "乳酶生",
            "dosage": "5-10g/头",
            "frequency": "每日2次",
            "duration_days": 5,
            "notes": "调节肠道菌群"
          }
        ],
        "notes": "人工盐健胃+乳酶生调节菌群。"
      }
    ],
    "nursing_care": "改善饲养管理，提供易消化饲料。",
    "priority": 3
  },
  {
    "id": "t24",
    "disease_id": "d24",
    "disease_name": "牛瘤胃臌气",
    "treatment_plans": [
      {
        "plan_name": "方案一：紧急排气",
        "medications": [],
        "oral_medications": [
          {
            "medication_name": "二甲硅油",
            "dosage": "5-10g/头",
            "frequency": "单次",
            "duration_days": 1,
            "notes": "消泡剂"
          }
        ],
        "notes": "紧急穿刺排气，二甲硅油消泡。"
      }
    ],
    "nursing_care": "避免采食易发酵饲料。",
    "priority": 1
  },
  {
    "id": "t25",
    "disease_id": "d25",
    "disease_name": "牛瘤胃酸中毒",
    "treatment_plans": [
      {
        "plan_name": "方案一：碳酸氢钠+补液",
        "medications": [
          {
            "medication_id": "m24",
            "medication_name": "葡萄糖",
            "dosage_per_kg": "10-20ml/kg",
            "frequency": "单次",
            "duration_days": 1,
            "route": "静脉注射",
            "notes": "补充能量"
          }
        ],
        "oral_medications": [
          {
            "medication_name": "碳酸氢钠",
            "dosage": "20-50g/头",
            "frequency": "每日2次",
            "duration_days": 3,
            "notes": "中和胃酸"
          }
        ],
        "notes": "碳酸氢钠中和胃酸+葡萄糖补液。"
      }
    ],
    "nursing_care": "避免采食过多精料。",
    "priority": 1
  },
  {
    "id": "t26",
    "disease_id": "d26",
    "disease_name": "牛酮病",
    "treatment_plans": [
      {
        "plan_name": "方案一：葡萄糖+丙二醇",
        "medications": [
          {
            "medication_id": "m24",
            "medication_name": "葡萄糖",
            "dosage_per_kg": "10-20ml/kg",
            "frequency": "每日1次",
            "duration_days": 3,
            "route": "静脉注射",
            "notes": "补充血糖"
          }
        ],
        "oral_medications": [
          {
            "medication_name": "丙二醇",
            "dosage": "200-300ml/头",
            "frequency": "每日1次",
            "duration_days": 5,
            "notes": "补充能量"
          }
        ],
        "notes": "葡萄糖静脉注射+丙二醇口服。"
      }
    ],
    "nursing_care": "调整饲料配方，增加能量摄入。",
    "priority": 2
  },
  {
    "id": "t27",
    "disease_id": "d27",
    "disease_name": "牛生产瘫痪",
    "treatment_plans": [
      {
        "plan_name": "方案一：补钙",
        "medications": [
          {
            "medication_id": "m69",
            "medication_name": "氯化钙",
            "dosage_per_kg": "5-10g/头",
            "frequency": "单次",
            "duration_days": 1,
            "route": "静脉注射",
            "notes": "补钙"
          }
        ],
        "oral_medications": [],
        "notes": "氯化钙静脉注射补钙。"
      }
    ],
    "nursing_care": "产后及时补钙，预防低血钙。",
    "priority": 1
  },
  {
    "id": "t28",
    "disease_id": "d28",
    "disease_name": "牛子宫内膜炎",
    "treatment_plans": [
      {
        "plan_name": "方案一：头孢+宫炎净灌注",
        "medications": [
          {
            "medication_id": "m05",
            "medication_name": "头孢噻呋",
            "dosage_per_kg": "5mg",
            "frequency": "每日1次",
            "duration_days": 5,
            "route": "肌肉注射",
            "notes": "控制感染"
          }
        ],
        "oral_medications": [],
        "notes": "头孢注射，宫炎净子宫灌注。"
      }
    ],
    "nursing_care": "做好产房消毒，产后消炎。",
    "priority": 2
  },
  {
    "id": "t29",
    "disease_id": "d29",
    "disease_name": "牛乳房炎",
    "treatment_plans": [
      {
        "plan_name": "方案一：头孢+鱼石脂外敷",
        "medications": [
          {
            "medication_id": "m05",
            "medication_name": "头孢噻呋",
            "dosage_per_kg": "5mg",
            "frequency": "每日1次",
            "duration_days": 5,
            "route": "肌肉注射",
            "notes": "控制感染"
          },
          {
            "medication_id": "m09",
            "medication_name": "氟尼辛葡甲胺",
            "dosage_per_kg": "2mg",
            "frequency": "每日1次",
            "duration_days": 3,
            "route": "肌肉注射",
            "notes": "消炎镇痛"
          }
        ],
        "oral_medications": [],
        "notes": "头孢+氟尼辛注射，鱼石脂软膏外敷消炎。"
      }
    ],
    "nursing_care": "保持牛舍清洁，做好乳房护理。",
    "priority": 2
  },
  {
    "id": "t30",
    "disease_id": "d30",
    "disease_name": "牛胎衣不下",
    "treatment_plans": [
      {
        "plan_name": "方案一：缩宫素+抗生素",
        "medications": [
          {
            "medication_id": "m56",
            "medication_name": "缩宫素",
            "dosage_per_kg": "20-50单位/头",
            "frequency": "每2小时1次，最多3次",
            "duration_days": 1,
            "route": "肌肉注射",
            "notes": "促进子宫收缩，排出胎衣"
          },
          {
            "medication_id": "m05",
            "medication_name": "头孢噻呋",
            "dosage_per_kg": "5mg",
            "frequency": "每日1次",
            "duration_days": 5,
            "route": "肌肉注射",
            "notes": "预防感染"
          }
        ],
        "oral_medications": [],
        "notes": "缩宫素促进子宫收缩排出胎衣，头孢预防感染。"
      }
    ],
    "nursing_care": "加强妊娠期饲养管理，避免难产。",
    "priority": 2
  },
  {
    "id": "t31",
    "disease_id": "d31",
    "disease_name": "牛难产",
    "treatment_plans": [
      {
        "plan_name": "方案一：缩宫素助产",
        "medications": [
          {
            "medication_id": "m56",
            "medication_name": "缩宫素",
            "dosage_per_kg": "20-50单位/头",
            "frequency": "每30分钟1次，最多3次",
            "duration_days": 1,
            "route": "肌肉注射",
            "notes": "促进子宫收缩"
          }
        ],
        "oral_medications": [],
        "notes": "缩宫素助产，无效则人工助产或剖腹产。"
      }
    ],
    "nursing_care": "加强妊娠期饲养管理，避免母牛过肥或过瘦。",
    "priority": 1
  },
  {
    "id": "t32",
    "disease_id": "d32",
    "disease_name": "牛维生素A缺乏症",
    "treatment_plans": [
      {
        "plan_name": "方案一：维生素AD",
        "medications": [
          {
            "medication_id": "m22",
            "medication_name": "维生素AD注射液",
            "dosage_per_kg": "2-4ml/头",
            "frequency": "单次",
            "duration_days": 1,
            "route": "肌肉注射",
            "notes": "补充维生素A和D"
          }
        ],
        "oral_medications": [],
        "notes": "维生素AD注射+鱼肝油口服。"
      }
    ],
    "nursing_care": "补充青绿饲料，改善饲养管理。",
    "priority": 3
  },
  {
    "id": "t33",
    "disease_id": "d33",
    "disease_name": "牛白肌病",
    "treatment_plans": [
      {
        "plan_name": "方案一：亚硒酸钠维生素E",
        "medications": [
          {
            "medication_id": "m23",
            "medication_name": "亚硒酸钠维生素E",
            "dosage_per_kg": "2-4ml/头",
            "frequency": "单次",
            "duration_days": 1,
            "route": "肌肉注射",
            "notes": "补硒和维生素E"
          }
        ],
        "oral_medications": [],
        "notes": "亚硒酸钠维生素E注射，饲料中添加亚硒酸钠预防。"
      }
    ],
    "nursing_care": "饲料中添加亚硒酸钠，补充维生素E。",
    "priority": 3
  },
  {
    "id": "t34",
    "disease_id": "d34",
    "disease_name": "牛佝偻病",
    "treatment_plans": [
      {
        "plan_name": "方案一：补钙+维生素D",
        "medications": [
          {
            "medication_id": "m22",
            "medication_name": "维生素AD注射液",
            "dosage_per_kg": "2-4ml/头",
            "frequency": "单次",
            "duration_days": 1,
            "route": "肌肉注射",
            "notes": "补充维生素D"
          }
        ],
        "oral_medications": [
          {
            "medication_name": "碳酸钙",
            "dosage": "10-20g/头",
            "frequency": "每日1次",
            "duration_days": 14,
            "notes": "补钙"
          }
        ],
        "notes": "维生素D注射+碳酸钙口服。"
      }
    ],
    "nursing_care": "补充钙磷，增加光照。",
    "priority": 3
  },
  {
    "id": "t35",
    "disease_id": "d35",
    "disease_name": "牛异食癖",
    "treatment_plans": [
      {
        "plan_name": "方案一：补充营养",
        "medications": [],
        "oral_medications": [
          {
            "medication_name": "电解多维",
            "dosage": "500g拌料1000斤",
            "frequency": "持续",
            "duration_days": 14,
            "notes": "补充维生素和矿物质"
          },
          {
            "medication_name": "微量元素添加剂",
            "dosage": "按说明使用",
            "frequency": "持续",
            "duration_days": 14,
            "notes": "补充微量元素"
          }
        ],
        "notes": "补充营养，改善饲养环境。"
      }
    ],
    "nursing_care": "改善饲养环境，降低饲养密度。",
    "priority": 3
  },
  {
    "id": "t36",
    "disease_id": "d36",
    "disease_name": "牛蹄叶炎",
    "treatment_plans": [
      {
        "plan_name": "方案一：氟尼辛+修蹄",
        "medications": [
          {
            "medication_id": "m09",
            "medication_name": "氟尼辛葡甲胺",
            "dosage_per_kg": "2mg",
            "frequency": "每日1次",
            "duration_days": 3,
            "route": "肌肉注射",
            "notes": "消炎镇痛"
          }
        ],
        "oral_medications": [],
        "notes": "氟尼辛消炎镇痛+修蹄。"
      }
    ],
    "nursing_care": "保持地面干燥，定期修蹄。",
    "priority": 2
  },
  {
    "id": "t37",
    "disease_id": "d37",
    "disease_name": "牛腐蹄病",
    "treatment_plans": [
      {
        "plan_name": "方案一：清创+抗生素",
        "medications": [
          {
            "medication_id": "m01",
            "medication_name": "青霉素钾/钠",
            "dosage_per_kg": "6-8万单位",
            "frequency": "每日2次",
            "duration_days": 5,
            "route": "肌肉注射",
            "notes": "控制感染"
          }
        ],
        "oral_medications": [],
        "notes": "清创+青霉素注射。"
      }
    ],
    "nursing_care": "保持地面干燥，定期修蹄。",
    "priority": 2
  },
  {
    "id": "t38",
    "disease_id": "d38",
    "disease_name": "牛感冒",
    "treatment_plans": [
      {
        "plan_name": "方案一：对症治疗",
        "medications": [
          {
            "medication_id": "m09",
            "medication_name": "氟尼辛葡甲胺",
            "dosage_per_kg": "2mg",
            "frequency": "每日1次",
            "duration_days": 3,
            "route": "肌肉注射",
            "notes": "退烧"
          }
        ],
        "oral_medications": [
          {
            "medication_name": "板蓝根颗粒",
            "dosage": "100g拌料200斤",
            "frequency": "持续",
            "duration_days": 5,
            "notes": "清热解毒"
          }
        ],
        "notes": "做好保温，减少应激。"
      }
    ],
    "nursing_care": "做好保温，减少应激。",
    "priority": 3
  },
  {
    "id": "t39",
    "disease_id": "d39",
    "disease_name": "牛肺炎",
    "treatment_plans": [
      {
        "plan_name": "方案一：头孢+氟尼辛",
        "medications": [
          {
            "medication_id": "m05",
            "medication_name": "头孢噻呋",
            "dosage_per_kg": "5mg",
            "frequency": "每日1次",
            "duration_days": 5,
            "route": "肌肉注射",
            "notes": "控制感染"
          },
          {
            "medication_id": "m09",
            "medication_name": "氟尼辛葡甲胺",
            "dosage_per_kg": "2mg",
            "frequency": "每日1次",
            "duration_days": 3,
            "route": "肌肉注射",
            "notes": "退烧抗炎"
          }
        ],
        "oral_medications": [
          {
            "medication_name": "麻杏石甘散",
            "dosage": "100g拌料200斤",
            "frequency": "持续",
            "duration_days": 7,
            "notes": "止咳平喘"
          }
        ],
        "notes": "头孢+氟尼辛注射，配合麻杏石甘散。"
      }
    ],
    "nursing_care": "改善通风，降低饲养密度。",
    "priority": 2
  },
  {
    "id": "t40",
    "disease_id": "d40",
    "disease_name": "牛中暑",
    "treatment_plans": [
      {
        "plan_name": "方案一：紧急降温",
        "medications": [
          {
            "medication_id": "m09",
            "medication_name": "氟尼辛葡甲胺",
            "dosage_per_kg": "2mg",
            "frequency": "单次",
            "duration_days": 1,
            "route": "肌肉注射",
            "notes": "退烧"
          },
          {
            "medication_id": "m16",
            "medication_name": "维生素C",
            "dosage_per_kg": "20mg",
            "frequency": "单次",
            "duration_days": 1,
            "route": "肌肉注射",
            "notes": "抗应激"
          }
        ],
        "oral_medications": [
          {
            "medication_name": "口服补液盐",
            "dosage": "自由饮用",
            "frequency": "持续",
            "duration_days": 3,
            "notes": "补充水分和电解质"
          }
        ],
        "notes": "立即将牛转移到阴凉处，用冷水浇头和全身。"
      }
    ],
    "nursing_care": "立即将牛转移到阴凉处，用冷水浇头和全身。",
    "priority": 1
  }
],

  diseaseSymptoms: [
  {
    "disease_id": "d01",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d01",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d01",
    "symptom_id": "s05"
  },
  {
    "disease_id": "d01",
    "symptom_id": "s46"
  },
  {
    "disease_id": "d01",
    "symptom_id": "s47"
  },
  {
    "disease_id": "d02",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d02",
    "symptom_id": "s06"
  },
  {
    "disease_id": "d02",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d03",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d03",
    "symptom_id": "s33"
  },
  {
    "disease_id": "d04",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d04",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d04",
    "symptom_id": "s11"
  },
  {
    "disease_id": "d04",
    "symptom_id": "s44"
  },
  {
    "disease_id": "d05",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d05",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d05",
    "symptom_id": "s11"
  },
  {
    "disease_id": "d05",
    "symptom_id": "s12"
  },
  {
    "disease_id": "d06",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d06",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d06",
    "symptom_id": "s07"
  },
  {
    "disease_id": "d06",
    "symptom_id": "s10"
  },
  {
    "disease_id": "d07",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d07",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d07",
    "symptom_id": "s11"
  },
  {
    "disease_id": "d07",
    "symptom_id": "s13"
  },
  {
    "disease_id": "d08",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d08",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d08",
    "symptom_id": "s11"
  },
  {
    "disease_id": "d08",
    "symptom_id": "s44"
  },
  {
    "disease_id": "d09",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d09",
    "symptom_id": "s05"
  },
  {
    "disease_id": "d09",
    "symptom_id": "s07"
  },
  {
    "disease_id": "d09",
    "symptom_id": "s08"
  },
  {
    "disease_id": "d10",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d10",
    "symptom_id": "s06"
  },
  {
    "disease_id": "d10",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d11",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d11",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d11",
    "symptom_id": "s56"
  },
  {
    "disease_id": "d12",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d12",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d12",
    "symptom_id": "s19"
  },
  {
    "disease_id": "d12",
    "symptom_id": "s44"
  },
  {
    "disease_id": "d13",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d13",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d13",
    "symptom_id": "s17"
  },
  {
    "disease_id": "d14",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d14",
    "symptom_id": "s21"
  },
  {
    "disease_id": "d14",
    "symptom_id": "s22"
  },
  {
    "disease_id": "d15",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d15",
    "symptom_id": "s22"
  },
  {
    "disease_id": "d15",
    "symptom_id": "s23"
  },
  {
    "disease_id": "d16",
    "symptom_id": "s25"
  },
  {
    "disease_id": "d16",
    "symptom_id": "s45"
  },
  {
    "disease_id": "d17",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d17",
    "symptom_id": "s17"
  },
  {
    "disease_id": "d18",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d18",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d18",
    "symptom_id": "s33"
  },
  {
    "disease_id": "d19",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d19",
    "symptom_id": "s07"
  },
  {
    "disease_id": "d19",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d20",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d20",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d21",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d21",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d21",
    "symptom_id": "s43"
  },
  {
    "disease_id": "d22",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d22",
    "symptom_id": "s43"
  },
  {
    "disease_id": "d22",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d23",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d23",
    "symptom_id": "s06"
  },
  {
    "disease_id": "d23",
    "symptom_id": "s51"
  },
  {
    "disease_id": "d24",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d24",
    "symptom_id": "s44"
  },
  {
    "disease_id": "d24",
    "symptom_id": "s50"
  },
  {
    "disease_id": "d25",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d25",
    "symptom_id": "s06"
  },
  {
    "disease_id": "d25",
    "symptom_id": "s51"
  },
  {
    "disease_id": "d26",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d26",
    "symptom_id": "s06"
  },
  {
    "disease_id": "d26",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d27",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d27",
    "symptom_id": "s21"
  },
  {
    "disease_id": "d27",
    "symptom_id": "s40"
  },
  {
    "disease_id": "d28",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d28",
    "symptom_id": "s36"
  },
  {
    "disease_id": "d28",
    "symptom_id": "s49"
  },
  {
    "disease_id": "d29",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d29",
    "symptom_id": "s35"
  },
  {
    "disease_id": "d29",
    "symptom_id": "s48"
  },
  {
    "disease_id": "d30",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d30",
    "symptom_id": "s55"
  },
  {
    "disease_id": "d31",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d31",
    "symptom_id": "s55"
  },
  {
    "disease_id": "d32",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d32",
    "symptom_id": "s06"
  },
  {
    "disease_id": "d33",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d33",
    "symptom_id": "s21"
  },
  {
    "disease_id": "d33",
    "symptom_id": "s40"
  },
  {
    "disease_id": "d34",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d34",
    "symptom_id": "s21"
  },
  {
    "disease_id": "d34",
    "symptom_id": "s40"
  },
  {
    "disease_id": "d35",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d35",
    "symptom_id": "s06"
  },
  {
    "disease_id": "d36",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d36",
    "symptom_id": "s20"
  },
  {
    "disease_id": "d36",
    "symptom_id": "s54"
  },
  {
    "disease_id": "d37",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d37",
    "symptom_id": "s20"
  },
  {
    "disease_id": "d37",
    "symptom_id": "s17"
  },
  {
    "disease_id": "d38",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d38",
    "symptom_id": "s11"
  },
  {
    "disease_id": "d38",
    "symptom_id": "s13"
  },
  {
    "disease_id": "d39",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d39",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d39",
    "symptom_id": "s11"
  },
  {
    "disease_id": "d39",
    "symptom_id": "s44"
  },
  {
    "disease_id": "d40",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d40",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d40",
    "symptom_id": "s44"
  },
  {
    "disease_id": "d40",
    "symptom_id": "s56"
  }
]
}

module.exports = data

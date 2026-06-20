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

module.exports = data

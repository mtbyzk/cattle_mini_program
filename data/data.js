// data/data.js - 所有数据
const data = {
  diseases: [
  {
    "id": "d01",
    "name": "猪瘟",
    "alias": "烂肠瘟",
    "description": "猪瘟是由猪瘟病毒引起的一种急性、热性、高度接触性传染病。",
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "5-7天",
    "mortality_rate": "急性型可达90%以上"
  },
  {
    "id": "d02",
    "name": "非洲猪瘟",
    "alias": "ASF",
    "description": "非洲猪瘟是由非洲猪瘟病毒引起的一种急性、出血性、高致死性传染病。",
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "5-19天",
    "mortality_rate": "可达100%"
  },
  {
    "id": "d03",
    "name": "猪口蹄疫",
    "alias": "口疮",
    "description": "口蹄疫是由口蹄疫病毒引起的偶蹄动物共患的急性传染病。",
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "2-7天",
    "mortality_rate": "成年猪较低，仔猪可达60-80%"
  },
  {
    "id": "d04",
    "name": "猪蓝耳病",
    "alias": "猪繁殖与呼吸综合征",
    "description": "猪蓝耳病是由猪繁殖与呼吸综合征病毒引起的一种高度接触性传染病。",
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "3-37天",
    "mortality_rate": "仔猪可达80-100%"
  },
  {
    "id": "d05",
    "name": "猪圆环病毒病",
    "alias": "PCVAD",
    "description": "猪圆环病毒病是由猪圆环病毒2型引起的多系统功能障碍性疾病。",
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "2-3周",
    "mortality_rate": "10-30%"
  },
  {
    "id": "d06",
    "name": "猪流行性腹泻",
    "alias": "PED",
    "description": "猪流行性腹泻是由猪流行性腹泻病毒引起的一种急性肠道传染病。",
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "1-4天",
    "mortality_rate": "仔猪可达80%，成年猪较低"
  },
  {
    "id": "d07",
    "name": "猪传染性胸膜肺炎",
    "alias": "APP",
    "description": "猪传染性胸膜肺炎是由胸膜肺炎放线杆菌引起的一种高度接触性呼吸道传染病。",
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "1-2天",
    "mortality_rate": "急性型可达80-100%"
  },
  {
    "id": "d08",
    "name": "猪气喘病",
    "alias": "猪支原体肺炎",
    "description": "猪气喘病是由猪肺炎支原体引起的一种慢性呼吸道传染病。",
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "10-16天",
    "mortality_rate": "单纯感染较低"
  },
  {
    "id": "d09",
    "name": "仔猪黄痢",
    "alias": "早发性大肠杆菌病",
    "description": "仔猪黄痢是由致病性大肠杆菌引起的初生仔猪急性肠道传染病。",
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "数小时至1-2天",
    "mortality_rate": "可达80-100%"
  },
  {
    "id": "d10",
    "name": "仔猪白痢",
    "alias": "迟发性大肠杆菌病",
    "description": "仔猪白痢是由致病性大肠杆菌引起的10-30日龄仔猪急性肠道传染病。",
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "1-3天",
    "mortality_rate": "较低"
  },
  {
    "id": "d11",
    "name": "猪丹毒",
    "alias": "打火印",
    "description": "猪丹毒是由猪丹毒杆菌引起的一种急性、热性传染病。",
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "3-5天",
    "mortality_rate": "急性型可达80%以上"
  },
  {
    "id": "d12",
    "name": "猪肺疫",
    "alias": "猪巴氏杆菌病",
    "description": "猪肺疫是由多杀性巴氏杆菌引起的一种急性传染病。",
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "1-5天",
    "mortality_rate": "急性型可达70%"
  },
  {
    "id": "d13",
    "name": "猪链球菌病",
    "alias": "链球菌感染",
    "description": "猪链球菌病是由多种链球菌引起的人畜共患传染病。",
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "1-3天",
    "mortality_rate": "急性败血型和脑膜炎型较高"
  },
  {
    "id": "d14",
    "name": "猪副伤寒",
    "alias": "猪沙门氏菌病",
    "description": "猪副伤寒是由沙门氏菌引起的一种传染病。",
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "3-7天",
    "mortality_rate": "急性型较高"
  },
  {
    "id": "d15",
    "name": "猪伪狂犬病",
    "alias": "PR",
    "description": "猪伪狂犬病是由伪狂犬病病毒引起的一种急性传染病。",
    "severity": "high",
    "is_contagious": true,
    "incubation_period": "3-6天",
    "mortality_rate": "新生仔猪可达100%"
  },
  {
    "id": "d16",
    "name": "猪细小病毒病",
    "alias": "PPV",
    "description": "猪细小病毒病是由猪细小病毒引起的繁殖障碍性疾病。",
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "10-14天",
    "mortality_rate": "仔猪较高"
  },
  {
    "id": "d17",
    "name": "猪乙型脑炎",
    "alias": "日本乙型脑炎",
    "description": "猪乙型脑炎是由日本脑炎病毒引起的一种人畜共患传染病。",
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "3-7天",
    "mortality_rate": "较低"
  },
  {
    "id": "d18",
    "name": "猪传染性胃肠炎",
    "alias": "TGE",
    "description": "猪传染性胃肠炎是由猪传染性胃肠炎病毒引起的一种高度接触性肠道传染病。",
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "1-3天",
    "mortality_rate": "仔猪可达100%"
  },
  {
    "id": "d19",
    "name": "猪痢疾",
    "alias": "血痢",
    "description": "猪痢疾是由猪痢疾短螺旋体引起的一种肠道传染病。",
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "2-14天",
    "mortality_rate": "较低"
  },
  {
    "id": "d20",
    "name": "猪增生性回肠炎",
    "alias": "回肠炎",
    "description": "猪增生性回肠炎是由胞内劳森菌引起的一种慢性肠道传染病。",
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "2-3周",
    "mortality_rate": "较低"
  },
  {
    "id": "d21",
    "name": "猪附红细胞体病",
    "alias": "附红体病",
    "description": "猪附红细胞体病是由附红细胞体寄生于红细胞表面引起的一种传染病。",
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "3-7天",
    "mortality_rate": "较高"
  },
  {
    "id": "d22",
    "name": "猪弓形虫病",
    "alias": "弓形体病",
    "description": "猪弓形虫病是由龚地弓形虫引起的一种人畜共患寄生虫病。",
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "3-7天",
    "mortality_rate": "急性型较高"
  },
  {
    "id": "d23",
    "name": "猪蛔虫病",
    "alias": "蛔虫感染",
    "description": "猪蛔虫病是由猪蛔虫寄生于小肠引起的一种寄生虫病。",
    "severity": "low",
    "is_contagious": false,
    "incubation_period": "2-2.5个月",
    "mortality_rate": "较低"
  },
  {
    "id": "d24",
    "name": "猪疥螨病",
    "alias": "疥癣",
    "description": "猪疥螨病是由猪疥螨寄生于皮肤引起的一种慢性寄生虫病。",
    "severity": "low",
    "is_contagious": true,
    "incubation_period": "2-4周",
    "mortality_rate": "低"
  },
  {
    "id": "d25",
    "name": "猪缺铁性贫血",
    "alias": "仔猪贫血",
    "description": "猪缺铁性贫血是由于铁元素缺乏引起的一种营养代谢病。",
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "出生后1-2周",
    "mortality_rate": "较高"
  },
  {
    "id": "d26",
    "name": "猪维生素A缺乏症",
    "alias": "夜盲症",
    "description": "猪维生素A缺乏症是由于维生素A缺乏引起的一种营养代谢病。",
    "severity": "low",
    "is_contagious": false,
    "incubation_period": "数周",
    "mortality_rate": "低"
  },
  {
    "id": "d27",
    "name": "猪硒缺乏症",
    "alias": "白肌病",
    "description": "猪硒缺乏症是由于硒元素缺乏引起的一种营养代谢病。",
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "数周",
    "mortality_rate": "较高"
  },
  {
    "id": "d28",
    "name": "猪食盐中毒",
    "alias": "咸中毒",
    "description": "猪食盐中毒是由于摄入过量食盐引起的一种中毒病。",
    "severity": "high",
    "is_contagious": false,
    "incubation_period": "数小时",
    "mortality_rate": "较高"
  },
  {
    "id": "d29",
    "name": "猪霉菌毒素中毒",
    "alias": "霉饲料中毒",
    "description": "猪霉菌毒素中毒是由于采食霉变饲料引起的一种中毒病。",
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "数天",
    "mortality_rate": "急性型较高"
  },
  {
    "id": "d30",
    "name": "猪中暑",
    "alias": "热射病",
    "description": "猪中暑是由于环境温度过高引起的一种急性热应激疾病。",
    "severity": "high",
    "is_contagious": false,
    "incubation_period": "数分钟至数小时",
    "mortality_rate": "较高"
  },
  {
    "id": "d31",
    "name": "猪感冒",
    "alias": "上呼吸道感染",
    "description": "猪感冒是由于受寒引起的一种上呼吸道疾病。",
    "severity": "low",
    "is_contagious": false,
    "incubation_period": "1-3天",
    "mortality_rate": "低"
  },
  {
    "id": "d32",
    "name": "猪便秘",
    "alias": "肠阻塞",
    "description": "猪便秘是由于肠道内容物干硬引起的一种消化系统疾病。",
    "severity": "low",
    "is_contagious": false,
    "incubation_period": "数天",
    "mortality_rate": "低"
  },
  {
    "id": "d33",
    "name": "猪胃溃疡",
    "alias": "胃穿孔",
    "description": "猪胃溃疡是由于胃黏膜损伤引起的一种消化系统疾病。",
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "数周",
    "mortality_rate": "急性型较高"
  },
  {
    "id": "d34",
    "name": "猪乳房炎",
    "alias": "乳腺炎",
    "description": "猪乳房炎是由于细菌感染引起的一种乳房疾病。",
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "1-3天",
    "mortality_rate": "低"
  },
  {
    "id": "d35",
    "name": "猪子宫内膜炎",
    "alias": "子宫炎",
    "description": "猪子宫内膜炎是由于细菌感染引起的一种生殖系统疾病。",
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "产后3-5天",
    "mortality_rate": "低"
  },
  {
    "id": "d36",
    "name": "猪蹄裂",
    "alias": "蹄病",
    "description": "猪蹄裂是由于蹄壳干裂引起的一种蹄部疾病。",
    "severity": "low",
    "is_contagious": false,
    "incubation_period": "数周",
    "mortality_rate": "低"
  },
  {
    "id": "d37",
    "name": "猪应激综合征",
    "alias": "PSS",
    "description": "猪应激综合征是由于应激因素引起的一种急性疾病。",
    "severity": "high",
    "is_contagious": false,
    "incubation_period": "数分钟",
    "mortality_rate": "较高"
  },
  {
    "id": "d38",
    "name": "猪异食癖",
    "alias": "咬尾症",
    "description": "猪异食癖是由于营养缺乏或管理不当引起的一种行为异常。",
    "severity": "low",
    "is_contagious": false,
    "incubation_period": "数天",
    "mortality_rate": "低"
  },
  {
    "id": "d39",
    "name": "猪渗出性皮炎",
    "alias": "油皮病",
    "description": "猪渗出性皮炎是由猪葡萄球菌引起的一种皮肤病。",
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "3-5天",
    "mortality_rate": "仔猪较高"
  },
  {
    "id": "d40",
    "name": "猪坏死性杆菌病",
    "alias": "坏死杆菌感染",
    "description": "猪坏死性杆菌病是由坏死梭杆菌引起的一种传染病。",
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "3-7天",
    "mortality_rate": "较低"
  },
  {
    "id": "d41",
    "name": "脱肛",
    "alias": "直肠脱出",
    "description": "脱肛是直肠末端黏膜或直肠全层脱出肛门外的一种疾病。",
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "急性",
    "mortality_rate": "低"
  },
  {
    "id": "d42",
    "name": "仔猪水肿病",
    "alias": "肠毒血症",
    "description": "仔猪水肿病是由溶血性大肠杆菌毒素引起的一种急性毒血症。",
    "severity": "high",
    "is_contagious": false,
    "incubation_period": "1-2天",
    "mortality_rate": "可达80%以上"
  },
  {
    "id": "d43",
    "name": "魏氏梭菌胀气病",
    "alias": "猝死症",
    "description": "魏氏梭菌胀气病是由产气荚膜梭菌引起的一种急性中毒病。",
    "severity": "high",
    "is_contagious": false,
    "incubation_period": "数小时",
    "mortality_rate": "急性型可达100%"
  },
  {
    "id": "d44",
    "name": "李氏杆菌病",
    "alias": "转圈病",
    "description": "李氏杆菌病是由单核细胞增多性李氏杆菌引起的一种人畜共患传染病。",
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "2-3周",
    "mortality_rate": "较高"
  },
  {
    "id": "d45",
    "name": "猪萎缩性鼻炎",
    "alias": "AR",
    "description": "猪萎缩性鼻炎是由支气管败血波氏杆菌和多杀性巴氏杆菌引起的一种慢性呼吸道传染病。",
    "severity": "medium",
    "is_contagious": true,
    "incubation_period": "数周",
    "mortality_rate": "低"
  },
  {
    "id": "d46",
    "name": "浅表性胃炎",
    "alias": "卡他性胃炎",
    "description": "浅表性胃炎是由于饲养管理不当引起的一种胃黏膜炎症。",
    "severity": "low",
    "is_contagious": false,
    "incubation_period": "数天",
    "mortality_rate": "低"
  },
  {
    "id": "d47",
    "name": "胎衣不下",
    "alias": "胎盘滞留",
    "description": "胎衣不下是母猪产后胎膜不能正常排出的一种产科疾病。",
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "产后数小时",
    "mortality_rate": "低"
  },
  {
    "id": "d48",
    "name": "母猪无乳综合征",
    "alias": "MMA综合征",
    "description": "母猪无乳综合征是母猪产后无乳或少乳的一种综合症。",
    "severity": "medium",
    "is_contagious": false,
    "incubation_period": "产后1-3天",
    "mortality_rate": "低"
  },
  {
    "id": "d49",
    "name": "难产",
    "alias": "产力性难产",
    "description": "难产是母猪分娩过程中胎儿不能正常产出的一种产科疾病。",
    "severity": "high",
    "is_contagious": false,
    "incubation_period": "分娩时",
    "mortality_rate": "较高"
  }
],
  
  symptoms: [
  {
    "id": "s01",
    "name": "高烧41℃以上",
    "category": "temperature"
  },
  {
    "id": "s02",
    "name": "低烧39-40℃",
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
    "name": "木乃伊胎",
    "category": "reproductive"
  },
  {
    "id": "s36",
    "name": "乳房肿胀",
    "category": "reproductive"
  },
  {
    "id": "s37",
    "name": "子宫炎",
    "category": "reproductive"
  },
  {
    "id": "s38",
    "name": "睾丸肿胀",
    "category": "reproductive"
  },
  {
    "id": "s39",
    "name": "神经症状",
    "category": "neurological"
  },
  {
    "id": "s40",
    "name": "共济失调",
    "category": "neurological"
  },
  {
    "id": "s41",
    "name": "瘫痪",
    "category": "locomotor"
  },
  {
    "id": "s42",
    "name": "皮肤结痂",
    "category": "skin"
  },
  {
    "id": "s43",
    "name": "脱毛",
    "category": "skin"
  },
  {
    "id": "s44",
    "name": "骚痒",
    "category": "skin"
  },
  {
    "id": "s45",
    "name": "呼吸困难",
    "category": "respiratory"
  },
  {
    "id": "s46",
    "name": "犬坐姿势",
    "category": "respiratory"
  },
  {
    "id": "s47",
    "name": "口吐白沫",
    "category": "neurological"
  },
  {
    "id": "s48",
    "name": "磨牙",
    "category": "neurological"
  },
  {
    "id": "s49",
    "name": "腹部膨大",
    "category": "digestive"
  },
  {
    "id": "s50",
    "name": "体温偏低",
    "category": "temperature"
  },
  {
    "id": "s51",
    "name": "直肠脱出",
    "category": "digestive"
  },
  {
    "id": "s52",
    "name": "眼睑水肿",
    "category": "skin"
  },
  {
    "id": "s53",
    "name": "头部水肿",
    "category": "skin"
  },
  {
    "id": "s54",
    "name": "尖叫",
    "category": "neurological"
  },
  {
    "id": "s55",
    "name": "突然死亡",
    "category": "general"
  },
  {
    "id": "s56",
    "name": "鼻出血",
    "category": "respiratory"
  },
  {
    "id": "s57",
    "name": "鼻端歪斜",
    "category": "respiratory"
  },
  {
    "id": "s58",
    "name": "面部麻痹",
    "category": "neurological"
  },
  {
    "id": "s59",
    "name": "努责",
    "category": "reproductive"
  },
  {
    "id": "s60",
    "name": "无乳",
    "category": "reproductive"
  },
  {
    "id": "s61",
    "name": "舌苔厚腻",
    "category": "digestive"
  },
  {
    "id": "s62",
    "name": "恶臭分泌物",
    "category": "reproductive"
  },
  {
    "id": "s63",
    "name": "四肢划水样",
    "category": "neurological"
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
    "dosage": "仔猪1-2g/头",
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
    "dosage": "0.3mg/kg体重",
    "route": "注射"
  },
  {
    "id": "m20",
    "name": "伊维菌素",
    "type": "驱虫药",
    "dosage": "0.3mg/kg体重",
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
    "dosage": "1-2ml/头",
    "route": "注射"
  },
  {
    "id": "m23",
    "name": "亚硒酸钠维生素E",
    "type": "微量元素",
    "dosage": "1-2ml/头",
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
    "dosage": "50-100g/头",
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
    "dosage": "1-2ml/头",
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
    "dosage": "1ml/头",
    "route": "注射"
  },
  {
    "id": "m35",
    "name": "杨树花口服液",
    "type": "中药",
    "dosage": "2-3ml/头",
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
    "name": "芬苯达唑",
    "type": "驱虫药",
    "dosage": "5mg/kg体重",
    "route": "口服"
  },
  {
    "id": "m44",
    "name": "鱼肝油",
    "type": "维生素",
    "dosage": "5-10ml/头",
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
    "name": "制霉菌素",
    "type": "抗真菌药",
    "dosage": "100万单位/头",
    "route": "口服"
  },
  {
    "id": "m47",
    "name": "人工盐",
    "type": "健胃药",
    "dosage": "50-100g/头",
    "route": "口服"
  },
  {
    "id": "m48",
    "name": "碳酸氢钠",
    "type": "制酸药",
    "dosage": "5-10g/头",
    "route": "口服"
  },
  {
    "id": "m49",
    "name": "鱼石脂软膏",
    "type": "外用药",
    "dosage": "适量",
    "route": "外用"
  },
  {
    "id": "m50",
    "name": "宫炎清",
    "type": "消毒药",
    "dosage": "100ml",
    "route": "子宫灌注"
  },
  {
    "id": "m51",
    "name": "氯丙嗪",
    "type": "镇静药",
    "dosage": "1-2mg/kg体重",
    "route": "注射"
  },
  {
    "id": "m52",
    "name": "高锰酸钾",
    "type": "消毒药",
    "dosage": "0.1%溶液",
    "route": "外用"
  },
  {
    "id": "m53",
    "name": "氨苄西林",
    "type": "抗生素",
    "dosage": "10-20mg/kg体重",
    "route": "注射/口服"
  },
  {
    "id": "m54",
    "name": "头孢喹肟",
    "type": "抗生素",
    "dosage": "2-3mg/kg体重",
    "route": "注射"
  },
  {
    "id": "m55",
    "name": "泰乐菌素",
    "type": "抗生素",
    "dosage": "5-10mg/kg体重",
    "route": "注射"
  },
  {
    "id": "m56",
    "name": "泰万菌素",
    "type": "抗生素",
    "dosage": "拌料",
    "route": "拌料"
  },
  {
    "id": "m57",
    "name": "硫酸新霉素",
    "type": "抗生素",
    "dosage": "7-15mg/kg体重",
    "route": "口服"
  },
  {
    "id": "m58",
    "name": "卡那霉素",
    "type": "抗生素",
    "dosage": "10-15mg/kg体重",
    "route": "注射"
  },
  {
    "id": "m59",
    "name": "大观霉素",
    "type": "抗生素",
    "dosage": "10mg/kg体重",
    "route": "注射"
  },
  {
    "id": "m60",
    "name": "甲砜霉素",
    "type": "抗生素",
    "dosage": "拌料",
    "route": "拌料"
  },
  {
    "id": "m61",
    "name": "林可霉素",
    "type": "抗生素",
    "dosage": "10mg/kg体重",
    "route": "注射"
  },
  {
    "id": "m62",
    "name": "利高霉素",
    "type": "复方抗生素",
    "dosage": "0.1ml/kg体重",
    "route": "注射"
  },
  {
    "id": "m63",
    "name": "阿苯达唑",
    "type": "驱虫药",
    "dosage": "5-10mg/kg体重",
    "route": "口服"
  },
  {
    "id": "m64",
    "name": "多拉菌素",
    "type": "驱虫药",
    "dosage": "0.3mg/kg体重",
    "route": "注射"
  },
  {
    "id": "m65",
    "name": "地克珠利",
    "type": "抗球虫药",
    "dosage": "拌料",
    "route": "拌料"
  },
  {
    "id": "m66",
    "name": "妥曲珠利",
    "type": "抗球虫药",
    "dosage": "口服",
    "route": "口服"
  },
  {
    "id": "m67",
    "name": "辛硫磷",
    "type": "驱虫药",
    "dosage": "0.05-0.1%溶液",
    "route": "外用"
  },
  {
    "id": "m68",
    "name": "乳酶生",
    "type": "益生菌",
    "dosage": "2-5g/头",
    "route": "口服"
  },
  {
    "id": "m69",
    "name": "枯草芽孢杆菌",
    "type": "益生菌",
    "dosage": "拌料",
    "route": "拌料"
  },
  {
    "id": "m70",
    "name": "大蒜素",
    "type": "中药",
    "dosage": "拌料",
    "route": "拌料"
  },
  {
    "id": "m71",
    "name": "杨树花提取物",
    "type": "中药",
    "dosage": "拌料",
    "route": "拌料"
  },
  {
    "id": "m72",
    "name": "麻杏石甘散",
    "type": "中药",
    "dosage": "拌料",
    "route": "拌料"
  },
  {
    "id": "m73",
    "name": "甘草颗粒",
    "type": "中药",
    "dosage": "拌料",
    "route": "拌料"
  },
  {
    "id": "m74",
    "name": "氨茶碱",
    "type": "平喘药",
    "dosage": "注射/口服",
    "route": "注射/口服"
  },
  {
    "id": "m75",
    "name": "板青颗粒",
    "type": "中药",
    "dosage": "拌料",
    "route": "拌料"
  },
  {
    "id": "m76",
    "name": "荆防败毒散",
    "type": "中药",
    "dosage": "拌料",
    "route": "拌料"
  },
  {
    "id": "m77",
    "name": "清瘟败毒散",
    "type": "中药",
    "dosage": "拌料",
    "route": "拌料"
  },
  {
    "id": "m78",
    "name": "麻黄提取物",
    "type": "中药",
    "dosage": "拌料",
    "route": "拌料"
  },
  {
    "id": "m79",
    "name": "双黄连口服液",
    "type": "中药",
    "dosage": "1-2ml/kg体重",
    "route": "口服"
  },
  {
    "id": "m80",
    "name": "卡巴匹林钙",
    "type": "退烧药",
    "dosage": "拌料",
    "route": "拌料"
  },
  {
    "id": "m81",
    "name": "柴胡口服液",
    "type": "中药",
    "dosage": "1-2ml/kg体重",
    "route": "口服"
  },
  {
    "id": "m82",
    "name": "板蓝根颗粒",
    "type": "中药",
    "dosage": "拌料",
    "route": "拌料"
  },
  {
    "id": "m83",
    "name": "缩宫素",
    "type": "激素",
    "dosage": "10-30单位/头",
    "route": "注射"
  },
  {
    "id": "m84",
    "name": "氯前列烯醇",
    "type": "激素",
    "dosage": "0.1-0.2mg/头",
    "route": "注射"
  },
  {
    "id": "m85",
    "name": "苯甲酸雌二醇",
    "type": "激素",
    "dosage": "1-2mg/头",
    "route": "注射"
  },
  {
    "id": "m86",
    "name": "黄体酮",
    "type": "激素",
    "dosage": "20-50mg/头",
    "route": "注射"
  },
  {
    "id": "m87",
    "name": "止血敏",
    "type": "止血药",
    "dosage": "2-4ml/头",
    "route": "注射"
  },
  {
    "id": "m88",
    "name": "益母生化散",
    "type": "中药",
    "dosage": "拌料",
    "route": "拌料"
  },
  {
    "id": "m89",
    "name": "宫炎净",
    "type": "中药",
    "dosage": "50-100ml/头",
    "route": "子宫灌注"
  },
  {
    "id": "m90",
    "name": "过硫酸氢钾",
    "type": "消毒药",
    "dosage": "1:200稀释",
    "route": "外用"
  },
  {
    "id": "m91",
    "name": "戊二醛",
    "type": "消毒药",
    "dosage": "1:200-1:500稀释",
    "route": "外用"
  },
  {
    "id": "m92",
    "name": "聚维酮碘",
    "type": "消毒药",
    "dosage": "1:500稀释",
    "route": "外用"
  },
  {
    "id": "m93",
    "name": "生石灰",
    "type": "消毒药",
    "dosage": "适量",
    "route": "外用"
  },
  {
    "id": "m94",
    "name": "双氧水",
    "type": "消毒药",
    "dosage": "3%溶液",
    "route": "外用"
  },
  {
    "id": "m95",
    "name": "电解多维",
    "type": "营养补充",
    "dosage": "拌料/饮水",
    "route": "拌料/饮水"
  },
  {
    "id": "m96",
    "name": "阿托品",
    "type": "解毒药",
    "dosage": "0.01-0.02mg/kg体重",
    "route": "注射"
  },
  {
    "id": "m97",
    "name": "磺胺嘧啶钠",
    "type": "抗生素",
    "dosage": "0.1ml/kg体重",
    "route": "注射"
  },
  {
    "id": "m98",
    "name": "复方磺胺间甲氧嘧啶钠",
    "type": "复方抗生素",
    "dosage": "0.1ml/kg体重",
    "route": "注射"
  },
  {
    "id": "m99",
    "name": "阿维菌素透皮液",
    "type": "驱虫药",
    "dosage": "0.1ml/kg体重",
    "route": "外用"
  },
  {
    "id": "m100",
    "name": "白头翁口服液",
    "type": "中药",
    "dosage": "1-2ml/kg体重",
    "route": "口服"
  },
  {
    "id": "m101",
    "name": "双黄连散",
    "type": "中药",
    "dosage": "拌料",
    "route": "拌料"
  },
  {
    "id": "m102",
    "name": "黄芪多糖散",
    "type": "中药",
    "dosage": "拌料",
    "route": "拌料"
  },
  {
    "id": "m103",
    "name": "藿香正气散",
    "type": "中药",
    "dosage": "拌料",
    "route": "拌料"
  },
  {
    "id": "m104",
    "name": "脱霉剂",
    "type": "饲料添加剂",
    "dosage": "拌料",
    "route": "拌料"
  },
  {
    "id": "m105",
    "name": "鱼腥草颗粒",
    "type": "中药",
    "dosage": "拌料",
    "route": "拌料"
  },
  {
    "id": "m106",
    "name": "龙胆泻肝散",
    "type": "中药",
    "dosage": "拌料",
    "route": "拌料"
  },
  {
    "id": "m107",
    "name": "促排A3",
    "type": "激素",
    "dosage": "25-50μg/头",
    "route": "注射"
  },
  {
    "id": "m108",
    "name": "酚磺乙胺",
    "type": "止血药",
    "dosage": "2-4ml/头",
    "route": "注射"
  }
]
}

  treatments: [
  {
    "id": "t01",
    "disease_id": "d01",
    "disease_name": "猪瘟",
    "treatment_plans": [
      {
        "plan_name": "方案一：支持疗法",
        "medications": [],
        "oral_medications": [],
        "notes": "猪瘟无特效药，以支持疗法为主。"
      }
    ],
    "nursing_care": "隔离病猪，保持温暖。",
    "priority": 1
  },
  {
    "id": "t02",
    "disease_id": "d02",
    "disease_name": "非洲猪瘟",
    "treatment_plans": [
      {
        "plan_name": "方案一：无特效治疗",
        "medications": [],
        "oral_medications": [],
        "notes": "非洲猪瘟无特效治疗，发现后立即上报。"
      }
    ],
    "nursing_care": "严格隔离，等待官方处理。",
    "priority": 1
  },
  {
    "id": "t03",
    "disease_id": "d03",
    "disease_name": "猪口蹄疫",
    "treatment_plans": [
      {
        "plan_name": "方案一：对症治疗",
        "medications": [],
        "oral_medications": [],
        "notes": "口腔用高锰酸钾冲洗，蹄部用碘甘油涂抹。"
      }
    ],
    "nursing_care": "保持圈舍干燥清洁。",
    "priority": 1
  },
  {
    "id": "t04",
    "disease_id": "d04",
    "disease_name": "猪蓝耳病",
    "treatment_plans": [
      {
        "plan_name": "方案一：支持疗法",
        "medications": [],
        "oral_medications": [],
        "notes": "蓝耳病无特效药。"
      }
    ],
    "nursing_care": "改善通风，降低饲养密度。",
    "priority": 1
  },
  {
    "id": "t05",
    "disease_id": "d05",
    "disease_name": "猪圆环病毒病",
    "treatment_plans": [
      {
        "plan_name": "方案一：支持疗法",
        "medications": [],
        "oral_medications": [],
        "notes": "圆环病毒病无特效药。"
      }
    ],
    "nursing_care": "改善饲养环境。",
    "priority": 2
  },
  {
    "id": "t06",
    "disease_id": "d06",
    "disease_name": "猪流行性腹泻",
    "treatment_plans": [
      {
        "plan_name": "方案一：口服补液+止泻",
        "medications": [],
        "oral_medications": [
          {
            "medication_name": "蒙脱石散",
            "dosage": "仔猪3-5g/头",
            "frequency": "每日2次",
            "duration_days": 3,
            "notes": "止泻"
          }
        ],
        "notes": "仔猪口服蒙脱石散+补液盐。"
      }
    ],
    "nursing_care": "保温，保持干燥。",
    "priority": 1
  },
  {
    "id": "t07",
    "disease_id": "d07",
    "disease_name": "猪传染性胸膜肺炎",
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
          }
        ],
        "oral_medications": [],
        "notes": "头孢+氟尼辛注射。"
      }
    ],
    "nursing_care": "改善通风。",
    "priority": 1
  },
  {
    "id": "t08",
    "disease_id": "d08",
    "disease_name": "猪气喘病",
    "treatment_plans": [
      {
        "plan_name": "方案一：替米考星",
        "medications": [
          {
            "medication_id": "m33",
            "medication_name": "替米考星",
            "dosage_per_kg": "10mg",
            "frequency": "每48小时1次",
            "duration_days": 3,
            "route": "肌肉注射",
            "notes": "控制支原体感染"
          }
        ],
        "oral_medications": [],
        "notes": "替米考星对支原体效果好。"
      }
    ],
    "nursing_care": "改善通风。",
    "priority": 2
  },
  {
    "id": "t09",
    "disease_id": "d09",
    "disease_name": "仔猪黄痢",
    "treatment_plans": [
      {
        "plan_name": "方案一：庆大霉素+蒙脱石",
        "medications": [],
        "oral_medications": [
          {
            "medication_name": "硫酸庆大霉素",
            "dosage": "仔猪2-3ml/头",
            "frequency": "每日2次",
            "duration_days": 3,
            "notes": "口服，肠道杀菌"
          }
        ],
        "notes": "仔猪口服庆大霉素+蒙脱石。"
      }
    ],
    "nursing_care": "保温，保持干燥。",
    "priority": 1
  },
  {
    "id": "t10",
    "disease_id": "d10",
    "disease_name": "仔猪白痢",
    "treatment_plans": [
      {
        "plan_name": "方案一：庆大霉素+蒙脱石",
        "medications": [],
        "oral_medications": [
          {
            "medication_name": "硫酸庆大霉素",
            "dosage": "仔猪2-3ml/头",
            "frequency": "每日2次",
            "duration_days": 3,
            "notes": "口服，肠道杀菌"
          }
        ],
        "notes": "仔猪口服庆大霉素+蒙脱石。"
      }
    ],
    "nursing_care": "加强母猪饲养管理。",
    "priority": 2
  },
  {
    "id": "t11",
    "disease_id": "d11",
    "disease_name": "猪丹毒",
    "treatment_plans": [
      {
        "plan_name": "方案一：青霉素（首选）",
        "medications": [
          {
            "medication_id": "m01",
            "medication_name": "青霉素钾/钠",
            "dosage_per_kg": "6-8万单位",
            "frequency": "每日2-3次",
            "duration_days": 5,
            "route": "肌肉注射",
            "notes": "首选药物"
          }
        ],
        "oral_medications": [],
        "notes": "青霉素是猪丹毒首选药物。"
      }
    ],
    "nursing_care": "隔离病猪，保持圈舍清洁。",
    "priority": 1
  },
  {
    "id": "t12",
    "disease_id": "d12",
    "disease_name": "猪肺疫",
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
          }
        ],
        "oral_medications": [],
        "notes": "头孢+氟尼辛注射。"
      }
    ],
    "nursing_care": "改善通风。",
    "priority": 2
  },
  {
    "id": "t13",
    "disease_id": "d13",
    "disease_name": "猪链球菌病",
    "treatment_plans": [
      {
        "plan_name": "方案一：头孢噻呋",
        "medications": [
          {
            "medication_id": "m05",
            "medication_name": "头孢噻呋",
            "dosage_per_kg": "5mg",
            "frequency": "每日1次",
            "duration_days": 5,
            "route": "肌肉注射",
            "notes": "首选药物"
          }
        ],
        "oral_medications": [],
        "notes": "头孢噻呋对链球菌效果好。"
      }
    ],
    "nursing_care": "隔离病猪。",
    "priority": 1
  },
  {
    "id": "t14",
    "disease_id": "d14",
    "disease_name": "猪副伤寒",
    "treatment_plans": [
      {
        "plan_name": "方案一：氟苯尼考",
        "medications": [
          {
            "medication_id": "m04",
            "medication_name": "氟苯尼考",
            "dosage_per_kg": "20mg",
            "frequency": "每48小时1次",
            "duration_days": 3,
            "route": "肌肉注射",
            "notes": "对沙门氏菌效果好"
          }
        ],
        "oral_medications": [],
        "notes": "氟苯尼考注射。"
      }
    ],
    "nursing_care": "隔离病猪。",
    "priority": 2
  },
  {
    "id": "t15",
    "disease_id": "d15",
    "disease_name": "猪伪狂犬病",
    "treatment_plans": [
      {
        "plan_name": "方案一：支持疗法",
        "medications": [],
        "oral_medications": [],
        "notes": "伪狂犬病无特效药。"
      }
    ],
    "nursing_care": "隔离病猪。",
    "priority": 1
  },
  {
    "id": "t16",
    "disease_id": "d16",
    "disease_name": "猪细小病毒病",
    "treatment_plans": [
      {
        "plan_name": "方案一：无特效治疗",
        "medications": [],
        "oral_medications": [],
        "notes": "细小病毒病无特效治疗。"
      }
    ],
    "nursing_care": "加强饲养管理。",
    "priority": 2
  },
  {
    "id": "t17",
    "disease_id": "d17",
    "disease_name": "猪乙型脑炎",
    "treatment_plans": [
      {
        "plan_name": "方案一：支持疗法",
        "medications": [],
        "oral_medications": [],
        "notes": "乙型脑炎无特效药。"
      }
    ],
    "nursing_care": "灭蚊防蚊。",
    "priority": 2
  },
  {
    "id": "t18",
    "disease_id": "d18",
    "disease_name": "猪传染性胃肠炎",
    "treatment_plans": [
      {
        "plan_name": "方案一：口服补液+止泻",
        "medications": [],
        "oral_medications": [
          {
            "medication_name": "蒙脱石散",
            "dosage": "仔猪3-5g/头",
            "frequency": "每日2次",
            "duration_days": 3,
            "notes": "止泻"
          }
        ],
        "notes": "仔猪口服蒙脱石散。"
      }
    ],
    "nursing_care": "保温，保持干燥。",
    "priority": 2
  },
  {
    "id": "t19",
    "disease_id": "d19",
    "disease_name": "猪痢疾",
    "treatment_plans": [
      {
        "plan_name": "方案一：乙酰甲喹",
        "medications": [
          {
            "medication_id": "m37",
            "medication_name": "乙酰甲喹",
            "dosage_per_kg": "5mg",
            "frequency": "每日1次",
            "duration_days": 5,
            "route": "肌肉注射",
            "notes": "首选药物"
          }
        ],
        "oral_medications": [],
        "notes": "乙酰甲喹注射。"
      }
    ],
    "nursing_care": "保持圈舍清洁。",
    "priority": 2
  },
  {
    "id": "t20",
    "disease_id": "d20",
    "disease_name": "猪增生性回肠炎",
    "treatment_plans": [
      {
        "plan_name": "方案一：泰妙菌素",
        "medications": [],
        "oral_medications": [
          {
            "medication_name": "泰妙菌素",
            "dosage": "拌料",
            "frequency": "持续",
            "duration_days": 10,
            "notes": "首选药物"
          }
        ],
        "notes": "泰妙菌素拌料。"
      }
    ],
    "nursing_care": "改善饲养管理。",
    "priority": 2
  },
  {
    "id": "t21",
    "disease_id": "d21",
    "disease_name": "猪附红细胞体病",
    "treatment_plans": [
      {
        "plan_name": "方案一：三氮脒",
        "medications": [
          {
            "medication_id": "m41",
            "medication_name": "三氮脒",
            "dosage_per_kg": "5mg",
            "frequency": "每日1次",
            "duration_days": 3,
            "route": "肌肉注射",
            "notes": "首选药物"
          }
        ],
        "oral_medications": [],
        "notes": "三氮脒注射。"
      }
    ],
    "nursing_care": "灭蚊驱虫。",
    "priority": 2
  },
  {
    "id": "t22",
    "disease_id": "d22",
    "disease_name": "猪弓形虫病",
    "treatment_plans": [
      {
        "plan_name": "方案一：磺胺间甲氧嘧啶",
        "medications": [
          {
            "medication_id": "m42",
            "medication_name": "磺胺间甲氧嘧啶",
            "dosage_per_kg": "0.1ml",
            "frequency": "每日1次",
            "duration_days": 5,
            "route": "肌肉注射",
            "notes": "首选药物"
          }
        ],
        "oral_medications": [],
        "notes": "磺胺间甲氧嘧啶对弓形虫效果好。"
      }
    ],
    "nursing_care": "灭鼠，禁止养猫。",
    "priority": 2
  },
  {
    "id": "t23",
    "disease_id": "d23",
    "disease_name": "猪蛔虫病",
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
            "notes": "广谱驱虫药"
          }
        ],
        "notes": "阿苯达唑口服。"
      }
    ],
    "nursing_care": "定期驱虫。",
    "priority": 3
  },
  {
    "id": "t24",
    "disease_id": "d24",
    "disease_name": "猪疥螨病",
    "treatment_plans": [
      {
        "plan_name": "方案一：伊维菌素",
        "medications": [
          {
            "medication_id": "m20",
            "medication_name": "伊维菌素",
            "dosage_per_kg": "0.3mg",
            "frequency": "间隔7-10天重复",
            "duration_days": 2,
            "route": "皮下注射",
            "notes": "驱螨虫"
          }
        ],
        "oral_medications": [],
        "notes": "伊维菌素注射。"
      }
    ],
    "nursing_care": "保持圈舍干燥。",
    "priority": 3
  },
  {
    "id": "t25",
    "disease_id": "d25",
    "disease_name": "猪缺铁性贫血",
    "treatment_plans": [
      {
        "plan_name": "方案一：右旋糖酐铁",
        "medications": [
          {
            "medication_id": "m18",
            "medication_name": "右旋糖酐铁",
            "dosage_per_kg": "100-200mg/头",
            "frequency": "单次",
            "duration_days": 1,
            "route": "肌肉注射",
            "notes": "首选药物"
          }
        ],
        "oral_medications": [],
        "notes": "仔猪出生后3天内注射。"
      }
    ],
    "nursing_care": "仔猪出生后3天内补铁。",
    "priority": 3
  },
  {
    "id": "t26",
    "disease_id": "d26",
    "disease_name": "猪维生素A缺乏症",
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
        "notes": "维生素AD注射。"
      }
    ],
    "nursing_care": "补充青绿饲料。",
    "priority": 3
  },
  {
    "id": "t27",
    "disease_id": "d27",
    "disease_name": "猪硒缺乏症",
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
        "notes": "亚硒酸钠维生素E注射。"
      }
    ],
    "nursing_care": "饲料中添加亚硒酸钠。",
    "priority": 3
  },
  {
    "id": "t28",
    "disease_id": "d28",
    "disease_name": "猪食盐中毒",
    "treatment_plans": [
      {
        "plan_name": "方案一：对症治疗",
        "medications": [],
        "oral_medications": [],
        "notes": "立即停喂含盐饲料，少量多次给水。"
      }
    ],
    "nursing_care": "立即停喂含盐饲料。",
    "priority": 1
  },
  {
    "id": "t29",
    "disease_id": "d29",
    "disease_name": "猪霉菌毒素中毒",
    "treatment_plans": [
      {
        "plan_name": "方案一：脱霉+保肝",
        "medications": [],
        "oral_medications": [],
        "notes": "立即停喂霉变饲料。"
      }
    ],
    "nursing_care": "立即停喂霉变饲料。",
    "priority": 2
  },
  {
    "id": "t30",
    "disease_id": "d30",
    "disease_name": "猪中暑",
    "treatment_plans": [
      {
        "plan_name": "方案一：紧急降温",
        "medications": [],
        "oral_medications": [],
        "notes": "立即将猪转移到阴凉处。"
      }
    ],
    "nursing_care": "立即将猪转移到阴凉处。",
    "priority": 1
  },
  {
    "id": "t31",
    "disease_id": "d31",
    "disease_name": "猪感冒",
    "treatment_plans": [
      {
        "plan_name": "方案一：对症治疗",
        "medications": [],
        "oral_medications": [],
        "notes": "做好保温，减少应激。"
      }
    ],
    "nursing_care": "做好保温。",
    "priority": 3
  },
  {
    "id": "t32",
    "disease_id": "d32",
    "disease_name": "猪便秘",
    "treatment_plans": [
      {
        "plan_name": "方案一：硫酸镁通便",
        "medications": [],
        "oral_medications": [
          {
            "medication_name": "硫酸镁",
            "dosage": "50-100g/头",
            "frequency": "单次",
            "duration_days": 1,
            "notes": "泻下通便"
          }
        ],
        "notes": "硫酸镁通便。"
      }
    ],
    "nursing_care": "保证充足饮水。",
    "priority": 3
  },
  {
    "id": "t33",
    "disease_id": "d33",
    "disease_name": "猪胃溃疡",
    "treatment_plans": [
      {
        "plan_name": "方案一：西咪替丁",
        "medications": [
          {
            "medication_id": "m26",
            "medication_name": "西咪替丁",
            "dosage_per_kg": "5-10mg",
            "frequency": "每日2次",
            "duration_days": 5,
            "route": "肌肉注射",
            "notes": "抑制胃酸分泌"
          }
        ],
        "oral_medications": [],
        "notes": "西咪替丁抑制胃酸。"
      }
    ],
    "nursing_care": "避免饲料过细。",
    "priority": 2
  },
  {
    "id": "t34",
    "disease_id": "d34",
    "disease_name": "猪乳房炎",
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
          }
        ],
        "oral_medications": [],
        "notes": "头孢注射，鱼石脂软膏外敷。"
      }
    ],
    "nursing_care": "保持猪舍清洁。",
    "priority": 2
  },
  {
    "id": "t35",
    "disease_id": "d35",
    "disease_name": "猪子宫内膜炎",
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
    "nursing_care": "做好产房消毒。",
    "priority": 2
  },
  {
    "id": "t36",
    "disease_id": "d36",
    "disease_name": "猪蹄裂",
    "treatment_plans": [
      {
        "plan_name": "方案一：生物素+外用",
        "medications": [],
        "oral_medications": [
          {
            "medication_name": "生物素",
            "dosage": "0.1-0.2mg/头",
            "frequency": "每日1次",
            "duration_days": 14,
            "notes": "促进蹄壳修复"
          }
        ],
        "notes": "生物素口服。"
      }
    ],
    "nursing_care": "保持地面干燥。",
    "priority": 3
  },
  {
    "id": "t37",
    "disease_id": "d37",
    "disease_name": "猪应激综合征",
    "treatment_plans": [
      {
        "plan_name": "方案一：镇静+降温",
        "medications": [],
        "oral_medications": [],
        "notes": "减少应激因素。"
      }
    ],
    "nursing_care": "减少应激因素。",
    "priority": 1
  },
  {
    "id": "t38",
    "disease_id": "d38",
    "disease_name": "猪异食癖",
    "treatment_plans": [
      {
        "plan_name": "方案一：补充营养",
        "medications": [],
        "oral_medications": [],
        "notes": "补充营养，改善饲养环境。"
      }
    ],
    "nursing_care": "改善饲养环境。",
    "priority": 3
  },
  {
    "id": "t39",
    "disease_id": "d39",
    "disease_name": "猪渗出性皮炎",
    "treatment_plans": [
      {
        "plan_name": "方案一：头孢+外用消毒",
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
        "notes": "头孢注射。"
      }
    ],
    "nursing_care": "保持环境清洁。",
    "priority": 2
  },
  {
    "id": "t40",
    "disease_id": "d40",
    "disease_name": "猪坏死性杆菌病",
    "treatment_plans": [
      {
        "plan_name": "方案一：青霉素+清创",
        "medications": [
          {
            "medication_id": "m01",
            "medication_name": "青霉素钾/钠",
            "dosage_per_kg": "6万单位",
            "frequency": "每日2次",
            "duration_days": 5,
            "route": "肌肉注射",
            "notes": "对厌氧菌效果好"
          }
        ],
        "oral_medications": [],
        "notes": "青霉素注射+双氧水清创。"
      }
    ],
    "nursing_care": "保持环境干燥。",
    "priority": 2
  },
  {
    "id": "t41",
    "disease_id": "d41",
    "disease_name": "脱肛",
    "treatment_plans": [
      {
        "plan_name": "方案一：整复+消炎",
        "medications": [
          {
            "medication_id": "m05",
            "medication_name": "头孢噻呋",
            "dosage_per_kg": "5mg",
            "frequency": "每日1次",
            "duration_days": 3,
            "route": "肌肉注射",
            "notes": "预防感染"
          }
        ],
        "oral_medications": [],
        "notes": "整复后荷包缝合。"
      }
    ],
    "nursing_care": "避免便秘。",
    "priority": 2
  },
  {
    "id": "t42",
    "disease_id": "d42",
    "disease_name": "仔猪水肿病",
    "treatment_plans": [
      {
        "plan_name": "方案一：甘露醇+地塞米松",
        "medications": [
          {
            "medication_id": "m10",
            "medication_name": "地塞米松",
            "dosage_per_kg": "0.1-0.2mg",
            "frequency": "每日1次",
            "duration_days": 3,
            "route": "肌肉注射",
            "notes": "抗炎抗水肿"
          }
        ],
        "oral_medications": [],
        "notes": "地塞米松抗水肿。"
      }
    ],
    "nursing_care": "断奶后逐渐换料。",
    "priority": 1
  },
  {
    "id": "t43",
    "disease_id": "d43",
    "disease_name": "魏氏梭菌胀气病",
    "treatment_plans": [
      {
        "plan_name": "方案一：紧急排气",
        "medications": [],
        "oral_medications": [],
        "notes": "紧急穿刺排气。"
      }
    ],
    "nursing_care": "避免饲料突变。",
    "priority": 1
  },
  {
    "id": "t44",
    "disease_id": "d44",
    "disease_name": "李氏杆菌病",
    "treatment_plans": [
      {
        "plan_name": "方案一：青霉素+磺胺嘧啶钠",
        "medications": [
          {
            "medication_id": "m01",
            "medication_name": "青霉素钾/钠",
            "dosage_per_kg": "6万单位",
            "frequency": "每日2-3次",
            "duration_days": 5,
            "route": "肌肉注射",
            "notes": "对李氏杆菌效果好"
          }
        ],
        "oral_medications": [],
        "notes": "青霉素注射。"
      }
    ],
    "nursing_care": "灭鼠，加强消毒。",
    "priority": 2
  },
  {
    "id": "t45",
    "disease_id": "d45",
    "disease_name": "猪萎缩性鼻炎",
    "treatment_plans": [
      {
        "plan_name": "方案一：替米考星+多西环素",
        "medications": [
          {
            "medication_id": "m33",
            "medication_name": "替米考星",
            "dosage_per_kg": "10mg",
            "frequency": "每48小时1次",
            "duration_days": 3,
            "route": "肌肉注射",
            "notes": "控制感染"
          }
        ],
        "oral_medications": [],
        "notes": "替米考星+多西环素拌料。"
      }
    ],
    "nursing_care": "改善通风。",
    "priority": 2
  },
  {
    "id": "t46",
    "disease_id": "d46",
    "disease_name": "浅表性胃炎",
    "treatment_plans": [
      {
        "plan_name": "方案一：健胃+益生菌",
        "medications": [],
        "oral_medications": [
          {
            "medication_name": "人工盐",
            "dosage": "50-100g/头",
            "frequency": "每日1次",
            "duration_days": 3,
            "notes": "健胃通便"
          }
        ],
        "notes": "人工盐健胃。"
      }
    ],
    "nursing_care": "改善饲养管理。",
    "priority": 3
  },
  {
    "id": "t47",
    "disease_id": "d47",
    "disease_name": "胎衣不下",
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
            "notes": "促进子宫收缩"
          }
        ],
        "oral_medications": [],
        "notes": "缩宫素促进子宫收缩排出胎衣。"
      }
    ],
    "nursing_care": "加强妊娠期饲养管理。",
    "priority": 2
  },
  {
    "id": "t48",
    "disease_id": "d48",
    "disease_name": "母猪无乳综合征",
    "treatment_plans": [
      {
        "plan_name": "方案一：缩宫素+消炎",
        "medications": [
          {
            "medication_id": "m56",
            "medication_name": "缩宫素",
            "dosage_per_kg": "20-50单位/头",
            "frequency": "每日1-2次",
            "duration_days": 3,
            "route": "肌肉注射",
            "notes": "促进泌乳"
          }
        ],
        "oral_medications": [],
        "notes": "缩宫素促进泌乳。"
      }
    ],
    "nursing_care": "加强妊娠期饲养管理。",
    "priority": 2
  },
  {
    "id": "t49",
    "disease_id": "d49",
    "disease_name": "难产",
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
    "nursing_care": "加强妊娠期饲养管理。",
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
    "symptom_id": "s07"
  },
  {
    "disease_id": "d02",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d02",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d02",
    "symptom_id": "s05"
  },
  {
    "disease_id": "d02",
    "symptom_id": "s10"
  },
  {
    "disease_id": "d03",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d03",
    "symptom_id": "s16"
  },
  {
    "disease_id": "d03",
    "symptom_id": "s20"
  },
  {
    "disease_id": "d03",
    "symptom_id": "s27"
  },
  {
    "disease_id": "d04",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d04",
    "symptom_id": "s12"
  },
  {
    "disease_id": "d04",
    "symptom_id": "s18"
  },
  {
    "disease_id": "d04",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d05",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d05",
    "symptom_id": "s16"
  },
  {
    "disease_id": "d05",
    "symptom_id": "s12"
  },
  {
    "disease_id": "d05",
    "symptom_id": "s07"
  },
  {
    "disease_id": "d06",
    "symptom_id": "s08"
  },
  {
    "disease_id": "d06",
    "symptom_id": "s10"
  },
  {
    "disease_id": "d06",
    "symptom_id": "s05"
  },
  {
    "disease_id": "d06",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d07",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d07",
    "symptom_id": "s12"
  },
  {
    "disease_id": "d07",
    "symptom_id": "s18"
  },
  {
    "disease_id": "d07",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d08",
    "symptom_id": "s11"
  },
  {
    "disease_id": "d08",
    "symptom_id": "s12"
  },
  {
    "disease_id": "d08",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d08",
    "symptom_id": "s30"
  },
  {
    "disease_id": "d09",
    "symptom_id": "s08"
  },
  {
    "disease_id": "d09",
    "symptom_id": "s05"
  },
  {
    "disease_id": "d09",
    "symptom_id": "s04"
  },
  {
    "disease_id": "d10",
    "symptom_id": "s07"
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
    "symptom_id": "s15"
  },
  {
    "disease_id": "d11",
    "symptom_id": "s16"
  },
  {
    "disease_id": "d11",
    "symptom_id": "s20"
  },
  {
    "disease_id": "d12",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d12",
    "symptom_id": "s12"
  },
  {
    "disease_id": "d12",
    "symptom_id": "s46"
  },
  {
    "disease_id": "d12",
    "symptom_id": "s45"
  },
  {
    "disease_id": "d13",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d13",
    "symptom_id": "s15"
  },
  {
    "disease_id": "d13",
    "symptom_id": "s18"
  },
  {
    "disease_id": "d13",
    "symptom_id": "s23"
  },
  {
    "disease_id": "d14",
    "symptom_id": "s07"
  },
  {
    "disease_id": "d14",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d14",
    "symptom_id": "s18"
  },
  {
    "disease_id": "d14",
    "symptom_id": "s31"
  },
  {
    "disease_id": "d15",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d15",
    "symptom_id": "s22"
  },
  {
    "disease_id": "d15",
    "symptom_id": "s24"
  },
  {
    "disease_id": "d15",
    "symptom_id": "s33"
  },
  {
    "disease_id": "d16",
    "symptom_id": "s33"
  },
  {
    "disease_id": "d16",
    "symptom_id": "s34"
  },
  {
    "disease_id": "d16",
    "symptom_id": "s35"
  },
  {
    "disease_id": "d17",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d17",
    "symptom_id": "s33"
  },
  {
    "disease_id": "d17",
    "symptom_id": "s34"
  },
  {
    "disease_id": "d18",
    "symptom_id": "s08"
  },
  {
    "disease_id": "d18",
    "symptom_id": "s10"
  },
  {
    "disease_id": "d18",
    "symptom_id": "s05"
  },
  {
    "disease_id": "d19",
    "symptom_id": "s09"
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
    "symptom_id": "s07"
  },
  {
    "disease_id": "d20",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d20",
    "symptom_id": "s31"
  },
  {
    "disease_id": "d21",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d21",
    "symptom_id": "s31"
  },
  {
    "disease_id": "d21",
    "symptom_id": "s32"
  },
  {
    "disease_id": "d21",
    "symptom_id": "s15"
  },
  {
    "disease_id": "d22",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d22",
    "symptom_id": "s45"
  },
  {
    "disease_id": "d22",
    "symptom_id": "s18"
  },
  {
    "disease_id": "d23",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d23",
    "symptom_id": "s30"
  },
  {
    "disease_id": "d23",
    "symptom_id": "s11"
  },
  {
    "disease_id": "d24",
    "symptom_id": "s44"
  },
  {
    "disease_id": "d24",
    "symptom_id": "s42"
  },
  {
    "disease_id": "d24",
    "symptom_id": "s43"
  },
  {
    "disease_id": "d24",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d25",
    "symptom_id": "s31"
  },
  {
    "disease_id": "d25",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d25",
    "symptom_id": "s45"
  },
  {
    "disease_id": "d26",
    "symptom_id": "s30"
  },
  {
    "disease_id": "d26",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d27",
    "symptom_id": "s21"
  },
  {
    "disease_id": "d27",
    "symptom_id": "s45"
  },
  {
    "disease_id": "d27",
    "symptom_id": "s22"
  },
  {
    "disease_id": "d28",
    "symptom_id": "s47"
  },
  {
    "disease_id": "d28",
    "symptom_id": "s22"
  },
  {
    "disease_id": "d28",
    "symptom_id": "s40"
  },
  {
    "disease_id": "d29",
    "symptom_id": "s06"
  },
  {
    "disease_id": "d29",
    "symptom_id": "s32"
  },
  {
    "disease_id": "d29",
    "symptom_id": "s33"
  },
  {
    "disease_id": "d30",
    "symptom_id": "s01"
  },
  {
    "disease_id": "d30",
    "symptom_id": "s45"
  },
  {
    "disease_id": "d30",
    "symptom_id": "s22"
  },
  {
    "disease_id": "d31",
    "symptom_id": "s11"
  },
  {
    "disease_id": "d31",
    "symptom_id": "s13"
  },
  {
    "disease_id": "d31",
    "symptom_id": "s14"
  },
  {
    "disease_id": "d32",
    "symptom_id": "s28"
  },
  {
    "disease_id": "d32",
    "symptom_id": "s06"
  },
  {
    "disease_id": "d33",
    "symptom_id": "s09"
  },
  {
    "disease_id": "d33",
    "symptom_id": "s10"
  },
  {
    "disease_id": "d33",
    "symptom_id": "s31"
  },
  {
    "disease_id": "d34",
    "symptom_id": "s36"
  },
  {
    "disease_id": "d34",
    "symptom_id": "s02"
  },
  {
    "disease_id": "d35",
    "symptom_id": "s37"
  },
  {
    "disease_id": "d35",
    "symptom_id": "s02"
  },
  {
    "disease_id": "d36",
    "symptom_id": "s20"
  },
  {
    "disease_id": "d36",
    "symptom_id": "s21"
  },
  {
    "disease_id": "d37",
    "symptom_id": "s22"
  },
  {
    "disease_id": "d37",
    "symptom_id": "s45"
  },
  {
    "disease_id": "d37",
    "symptom_id": "s18"
  },
  {
    "disease_id": "d38",
    "symptom_id": "s06"
  },
  {
    "disease_id": "d38",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d39",
    "symptom_id": "s42"
  },
  {
    "disease_id": "d39",
    "symptom_id": "s44"
  },
  {
    "disease_id": "d39",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d40",
    "symptom_id": "s17"
  },
  {
    "disease_id": "d40",
    "symptom_id": "s20"
  },
  {
    "disease_id": "d40",
    "symptom_id": "s29"
  },
  {
    "disease_id": "d41",
    "symptom_id": "s51"
  },
  {
    "disease_id": "d41",
    "symptom_id": "s28"
  },
  {
    "disease_id": "d42",
    "symptom_id": "s52"
  },
  {
    "disease_id": "d42",
    "symptom_id": "s53"
  },
  {
    "disease_id": "d42",
    "symptom_id": "s40"
  },
  {
    "disease_id": "d43",
    "symptom_id": "s49"
  },
  {
    "disease_id": "d43",
    "symptom_id": "s45"
  },
  {
    "disease_id": "d44",
    "symptom_id": "s23"
  },
  {
    "disease_id": "d44",
    "symptom_id": "s40"
  },
  {
    "disease_id": "d45",
    "symptom_id": "s14"
  },
  {
    "disease_id": "d45",
    "symptom_id": "s13"
  },
  {
    "disease_id": "d46",
    "symptom_id": "s06"
  },
  {
    "disease_id": "d46",
    "symptom_id": "s10"
  },
  {
    "disease_id": "d47",
    "symptom_id": "s62"
  },
  {
    "disease_id": "d47",
    "symptom_id": "s02"
  },
  {
    "disease_id": "d48",
    "symptom_id": "s36"
  },
  {
    "disease_id": "d48",
    "symptom_id": "s60"
  },
  {
    "disease_id": "d49",
    "symptom_id": "s59"
  },
  {
    "disease_id": "d49",
    "symptom_id": "s62"
  }
]
}

module.exports = data

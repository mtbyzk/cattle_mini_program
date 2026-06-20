// pages/vaccination/vaccination.js
Page({
  data: {
    selectedType: 'all',
    cattleTypes: [
      { key: 'all', label: '全部' },
      { key: 'calf', label: '犊牛' },
      { key: 'heifer', label: '育成牛' },
      { key: 'cow', label: '成年母牛' },
      { key: 'bull', label: '种公牛' }
    ],
    vaccines: [
      // 犊牛疫苗
      {id: "v01", name: "口蹄疫疫苗", type: "calf", typeName: "犊牛", time: "2-3月龄", dosage: "1头份", route: "肌肉注射", notes: "首免，30天后二免", importance: "high"},
      {id: "v02", name: "牛瘟疫苗", type: "calf", typeName: "犊牛", time: "3-4月龄", dosage: "1头份", route: "皮下注射", notes: "首免，6月龄二免", importance: "high"},
      {id: "v03", name: "牛巴氏杆菌疫苗", type: "calf", typeName: "犊牛", time: "3-4月龄", dosage: "1头份", route: "皮下注射", notes: "预防牛出败", importance: "medium"},
      {id: "v04", name: "牛副伤寒疫苗", type: "calf", typeName: "犊牛", time: "1月龄", dosage: "1头份", route: "口服", notes: "口服免疫，首免后4周二免", importance: "medium"},
      {id: "v05", name: "牛病毒性腹泻疫苗", type: "calf", typeName: "犊牛", time: "3-4月龄", dosage: "1头份", route: "肌肉注射", notes: "预防BVD", importance: "medium"},
      {id: "v06", name: "牛传染性鼻气管炎疫苗", type: "calf", typeName: "犊牛", time: "3-4月龄", dosage: "1头份", route: "肌肉注射", notes: "预防IBR", importance: "medium"},
      {id: "v07", name: "气肿疽疫苗", type: "calf", typeName: "犊牛", time: "4-6月龄", dosage: "1头份", route: "皮下注射", notes: "首免，6月龄二免", importance: "high"},
      {id: "v08", name: "炭疽疫苗", type: "calf", typeName: "犊牛", time: "1月龄以上", dosage: "1头份", route: "皮下注射", notes: "每年接种一次", importance: "high"},

      // 育成牛疫苗
      {id: "v09", name: "口蹄疫疫苗", type: "heifer", typeName: "育成牛", time: "配种前", dosage: "1头份", route: "肌肉注射", notes: "配种前4-6周接种", importance: "high"},
      {id: "v10", name: "牛瘟疫苗", type: "heifer", typeName: "育成牛", time: "配种前", dosage: "1头份", route: "皮下注射", notes: "配种前接种", importance: "high"},
      {id: "v11", name: "牛布氏杆菌疫苗", type: "heifer", typeName: "育成牛", time: "配种前", dosage: "1头份", route: "皮下注射", notes: "S19株疫苗，配种前接种", importance: "high"},
      {id: "v12", name: "牛细小病毒疫苗", type: "heifer", typeName: "育成牛", time: "配种前", dosage: "1头份", route: "肌肉注射", notes: "预防繁殖障碍", importance: "medium"},

      // 成年母牛疫苗
      {id: "v13", name: "口蹄疫疫苗", type: "cow", typeName: "成年母牛", time: "配种前", dosage: "1头份", route: "肌肉注射", notes: "每4-6个月接种一次", importance: "high"},
      {id": "v14", name: "牛瘟疫苗", type: "cow", typeName: "成年母牛", time: "配种前", dosage: "1头份", route: "皮下注射", notes: "每年接种一次", importance: "high"},
      {id: "v15", name: "牛病毒性腹泻疫苗", type: "cow", typeName: "成年母牛", time: "配种前", dosage: "1头份", route: "肌肉注射", notes: "预防垂直传播", importance: "medium"},
      {id: "v16", name: "牛传染性鼻气管炎疫苗", type: "cow", typeName: "成年母牛", time: "配种前", dosage: "1头份", route: "肌肉注射", notes": "预防流产", importance: "medium"},
      {id: "v17", name: "大肠杆菌疫苗", type: "cow", typeName: "成年母牛", time: "产前4-6周", dosage: "1头份", route: "肌肉注射", notes": "预防犊牛腹泻", importance: "high"},
      {id: "v18", name: "梭菌疫苗", type: "cow", typeName: "成年母牛", time: "产前4-6周", dosage: "1头份", route: "肌肉注射", notes": "预防犊牛梭菌感染", importance: "medium"},
      {id: "v19", name: "牛巴氏杆菌疫苗", type: "cow", typeName: "成年母牛", time: "每年", dosage: "1头份", route: "皮下注射", notes: "预防牛出败", importance: "medium"},
      {id: "v20", name: "气肿疽疫苗", type: "cow", typeName: "成年母牛", time: "每年", dosage: "1头份", route: "皮下注射", notes: "预防黑腿病", importance: "high"},

      // 种公牛疫苗
      {id: "v21", name: "口蹄疫疫苗", type: "bull", typeName: "种公牛", time: "每6个月", dosage: "1头份", route: "肌肉注射", notes: "定期接种", importance: "high"},
      {id: "v22", name: "牛瘟疫苗", type: "bull", typeName: "种公牛", time: "每年", dosage: "1头份", route: "皮下注射", notes: "定期接种", importance: "high"},
      {id: "v23", name": "牛布氏杆菌疫苗", type: "bull", typeName: "种公牛", time: "每年", dosage: "1头份", route: "皮下注射", notes: "定期检测，必要时接种", importance: "high"},
      {id: "v24", name": "牛巴氏杆菌疫苗", type: "bull", typeName: "种公牛", time: "每年", dosage: "1头份", route: "皮下注射", notes: "预防牛出败", importance: "medium"},
      {id: "v25", name": "气肿疽疫苗", type: "bull", typeName: "种公牛", time: "每年", dosage: "1头份", route: "皮下注射", notes: "预防黑腿病", importance: "high"}
    ],
    filteredVaccines: []
  },

  onLoad() {
    this.filterVaccines()
  },

  selectType(e) {
    const type = e.currentTarget.dataset.type
    this.setData({ selectedType: type })
    this.filterVaccines()
  },

  filterVaccines() {
    const { vaccines, selectedType } = this.data
    let filtered = selectedType === 'all'
      ? vaccines
      : vaccines.filter(v => v.type === selectedType)
    
    this.setData({ filteredVaccines: filtered })
  },

  onShareAppMessage() {
    return {
      title: '牛病分析助手 - 疫苗接种流程',
      path: '/pages/index/index'
    }
  }
})

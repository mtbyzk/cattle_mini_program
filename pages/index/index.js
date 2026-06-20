// pages/index/index.js
const app = getApp()

Page({
  data: {
    diseases: [],
    symptoms: [],
    medications: [],
    highSeverityDiseases: [],
    loading: true,
    language: 'zh',
    texts: {
      appName: '牛病分析助手',
      developer: '开发者：WangXin',
      professional: '专业 · 快速 · 准确',
      aiDiagnosis: 'AI 智能分析',
      startDiagnosis: '开始分析',
      selectSymptoms: '选择症状，快速判断疾病\n获取专业用药方案',
      quickEntry: '快速入口',
      diseaseDiagnosis: '疾病分析',
      symptomDiagnosis: '根据症状分析',
      vaccination: '疫苗接种',
      vaccinationDesc: '各阶段免疫程序',
      cattlePrice: '今日牛价',
      cattlePriceDesc: '各省份今日牛价',
      breedingTips: '养殖技巧',
      breedingTipsDesc: '实用养殖技巧',
      commonDiseases: '常见高危疾病',
      viewAll: '查看全部',
      highRisk: '高危',
      contagious: '传染性',
      diseaseTypes: '疾病种类',
      symptomTypes: '症状数量',
      medicationTypes: '药品数量'
    }
  },

  onLoad() {
    console.log('Index page loaded')
    this.loadData()
  },

  onShow() {
    console.log('Index page shown')
    this.loadData()
  },

  loadData() {
    if (!app.globalData.dataLoaded) {
      console.log('Data not loaded yet, waiting...')
      setTimeout(() => this.loadData(), 200)
      return
    }

    const diseases = app.getDiseases()
    const symptoms = app.getSymptoms()
    const medications = app.getMedications()
    const language = app.globalData.language

    console.log('Index - Diseases:', diseases.length)

    const highSeverityDiseases = diseases
      .filter(d => d.severity === 'high')
      .slice(0, 5)

    this.setData({
      diseases,
      symptoms,
      medications,
      highSeverityDiseases,
      language,
      loading: false
    })
  },

  goToDiagnosis() {
    wx.navigateTo({
      url: '/pages/diagnosis/diagnosis'
    })
  },

  goToVaccination() {
    wx.navigateTo({
      url: '/pages/vaccination/vaccination'
    })
  },

  goToCattlePrice() {
    wx.navigateTo({
      url: '/pages/cattle-price/cattle-price'
    })
  },

  goToBreedingTips() {
    wx.navigateTo({
      url: '/pages/breeding-tips/breeding-tips'
    })
  },

  goToEncyclopedia() {
    wx.switchTab({
      url: '/pages/encyclopedia/encyclopedia'
    })
  },

  goToDiseaseDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/disease-detail/disease-detail?id=${id}`
    })
  },

  onShareAppMessage() {
    return {
      title: this.data.texts.appName,
      path: '/pages/index/index'
    }
  }
})

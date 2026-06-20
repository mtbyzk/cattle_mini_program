// app.js
App({
  onLaunch() {
    console.log('=== 牛病分析助手启动 ===')
    this.initData()
  },

  globalData: {
    diseases: [],
    symptoms: [],
    medications: [],
    treatments: [],
    diseaseSymptoms: [],
    isDarkMode: false,
    language: 'zh',
    dataLoaded: false
  },

  // 初始化数据
  initData() {
    try {
      const data = require('./data/data.js')
      
      this.globalData.diseases = data.diseases || []
      console.log('疾病数量:', this.globalData.diseases.length)

      this.globalData.symptoms = data.symptoms || []
      console.log('症状数量:', this.globalData.symptoms.length)

      this.globalData.medications = data.medications || []
      console.log('药品数量:', this.globalData.medications.length)

      this.globalData.treatments = data.treatments || []
      console.log('治疗方案数量:', this.globalData.treatments.length)

      this.globalData.diseaseSymptoms = data.diseaseSymptoms || []
      console.log('疾病症状关联数量:', this.globalData.diseaseSymptoms.length)

      this.globalData.dataLoaded = true
      console.log('=== 数据加载完成 ===')
    } catch (error) {
      console.error('数据加载错误:', error)
    }
  },

  // 获取疾病列表
  getDiseases() {
    return this.globalData.diseases
  },

  // 获取症状列表
  getSymptoms() {
    return this.globalData.symptoms
  },

  // 获取药品列表
  getMedications() {
    return this.globalData.medications
  },

  // 根据ID获取疾病
  getDiseaseById(id) {
    return this.globalData.diseases.find(d => d.id === id)
  },

  // 根据ID获取治疗方案
  getTreatmentByDiseaseId(diseaseId) {
    return this.globalData.treatments.find(t => t.disease_id === diseaseId)
  },

  // 搜索疾病
  searchDiseases(query) {
    if (!query) return this.globalData.diseases
    const q = query.toLowerCase()
    return this.globalData.diseases.filter(d =>
      d.name.toLowerCase().includes(q) ||
      d.alias.toLowerCase().includes(q) ||
      d.description.toLowerCase().includes(q)
    )
  },

  // 根据症状诊断疾病
  diagnoseBySymptoms(symptomIds) {
    const diseaseSymptoms = this.globalData.diseaseSymptoms
    const diseases = this.globalData.diseases
    const symptoms = this.globalData.symptoms

    if (!diseaseSymptoms || diseaseSymptoms.length === 0) {
      return []
    }

    const results = diseases.map(disease => {
      const diseaseSymptomIds = diseaseSymptoms
        .filter(ds => ds.disease_id === disease.id)
        .map(ds => ds.symptom_id)

      if (diseaseSymptomIds.length === 0) return null

      const matched = symptomIds.filter(id => diseaseSymptomIds.includes(id))
      const score = matched.length / diseaseSymptomIds.length

      if (score === 0) return null

      const matchedNames = matched.map(id => {
        const s = symptoms.find(s => s.id === id)
        return s ? s.name : ''
      }).filter(n => n)

      return {
        diseaseId: disease.id,
        diseaseName: disease.name,
        matchScore: score,
        matchedSymptoms: matched.length,
        totalSymptoms: diseaseSymptomIds.length,
        matchedSymptomNames: matchedNames
      }
    }).filter(r => r !== null)

    results.sort((a, b) => b.matchScore - a.matchScore)
    return results.slice(0, 5)
  }
})

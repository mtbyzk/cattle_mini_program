// pages/cattle-price/cattle-price.js
Page({
  data: {
    currentDate: '',
    updateTime: '',
    selectedType: 'beef',
    cattleTypes: [
      { key: 'beef', name: '肉牛', price: '--', kgPrice: '--' },
      { key: 'dairy', name: '奶牛', price: '--', kgPrice: '--' }
    ],
    provinces: [
      { name: '北京', price: '17.50', kgPrice: '35.00', trend: 'stable', change: '0' },
      { name: '天津', price: '17.00', kgPrice: '34.00', trend: 'stable', change: '0' },
      { name: '河北', price: '16.50', kgPrice: '33.00', trend: 'up', change: '+0.50' },
      { name: '山西', price: '16.00', kgPrice: '32.00', trend: 'stable', change: '0' },
      { name: '内蒙古', price: '15.50', kgPrice: '31.00', trend: 'down', change: '-0.50' },
      { name: '辽宁', price: '16.50', kgPrice: '33.00', trend: 'up', change: '+0.50' },
      { name: '吉林', price: '16.00', kgPrice: '32.00', trend: 'stable', change: '0' },
      { name: '黑龙江', price: '15.50', kgPrice: '31.00', trend: 'down', change: '-0.50' },
      { name: '上海', price: '18.00', kgPrice: '36.00', trend: 'up', change: '+1.00' },
      { name: '江苏', price: '17.50', kgPrice: '35.00', trend: 'up', change: '+0.50' },
      { name: '浙江', price: '18.00', kgPrice: '36.00', trend: 'up', change: '+1.00' },
      { name: '安徽', price: '16.50', kgPrice: '33.00', trend: 'stable', change: '0' },
      { name: '福建', price: '17.50', kgPrice: '35.00', trend: 'up', change: '+0.50' },
      { name: '江西', price: '16.00', kgPrice: '32.00', trend: 'stable', change: '0' },
      { name: '山东', price: '17.00', kgPrice: '34.00', trend: 'up', change: '+0.50' },
      { name: '河南', price: '16.50', kgPrice: '33.00', trend: 'stable', change: '0' },
      { name: '湖北', price: '16.50', kgPrice: '33.00', trend: 'stable', change: '0' },
      { name: '湖南', price: '16.00', kgPrice: '32.00', trend: 'down', change: '-0.50' },
      { name: '广东', price: '18.50', kgPrice: '37.00', trend: 'up', change: '+1.00' },
      { name: '广西', price: '16.00', kgPrice: '32.00', trend: 'down', change: '-0.50' },
      { name: '海南', price: '19.00', kgPrice: '38.00', trend: 'up', change: '+1.00' },
      { name: '重庆', price: '16.50', kgPrice: '33.00', trend: 'stable', change: '0' },
      { name: '四川', price: '16.00', kgPrice: '32.00', trend: 'down', change: '-0.50' },
      { name: '贵州', price: '15.50', kgPrice: '31.00', trend: 'down', change: '-0.50' },
      { name: '云南', price: '15.00', kgPrice: '30.00', trend: 'down', change: '-1.00' },
      { name: '西藏', price: '14.00', kgPrice: '28.00', trend: 'stable', change: '0' },
      { name: '陕西', price: '16.00', kgPrice: '32.00', trend: 'stable', change: '0' },
      { name: '甘肃', price: '15.50', kgPrice: '31.00', trend: 'down', change: '-0.50' },
      { name: '青海', price: '15.00', kgPrice: '30.00', trend: 'stable', change: '0' },
      { name: '宁夏', price: '15.50', kgPrice: '31.00', trend: 'down', change: '-0.50' },
      { name: '新疆', price: '15.00', kgPrice: '30.00', trend: 'down', change: '-1.00' }
    ],
    sortBy: 'price',
    sortOrder: 'desc',
    avgPrice: '16.23',
    maxPrice: '19.00',
    minPrice: '14.00',
    loading: false
  },

  onLoad() {
    const now = new Date()
    const year = now.getFullYear()
    const month = String(now.getMonth() + 1).padStart(2, '0')
    const day = String(now.getDate()).padStart(2, '0')
    const hour = String(now.getHours()).padStart(2, '0')
    const minute = String(now.getMinutes()).padStart(2, '0')
    
    this.setData({
      currentDate: `${year}-${month}-${day}`,
      updateTime: `${year}-${month}-${day} ${hour}:${minute}`
    })
    
    this.calculateStats()
  },

  selectType(e) {
    const type = e.currentTarget.dataset.type
    this.setData({ selectedType: type })
  },

  calculateStats() {
    const { provinces } = this.data
    if (!provinces || provinces.length === 0) return
    
    const prices = provinces.map(p => parseFloat(p.price)).filter(p => !isNaN(p))
    
    if (prices.length > 0) {
      this.setData({
        avgPrice: (prices.reduce((a, b) => a + b, 0) / prices.length).toFixed(2),
        maxPrice: Math.max(...prices).toFixed(2),
        minPrice: Math.min(...prices).toFixed(2)
      })
    }
  },

  sortByPrice() {
    const { provinces, sortBy, sortOrder } = this.data
    const newOrder = sortBy === 'price' && sortOrder === 'desc' ? 'asc' : 'desc'
    const sorted = [...provinces].sort((a, b) => {
      const priceA = parseFloat(a.price)
      const priceB = parseFloat(b.price)
      return newOrder === 'desc' ? priceB - priceA : priceA - priceB
    })
    this.setData({
      provinces: sorted,
      sortBy: 'price',
      sortOrder: newOrder
    })
  },

  sortByName() {
    const { provinces, sortBy, sortOrder } = this.data
    const newOrder = sortBy === 'name' && sortOrder === 'asc' ? 'desc' : 'asc'
    const sorted = [...provinces].sort((a, b) => {
      return newOrder === 'asc' 
        ? a.name.localeCompare(b.name, 'zh')
        : b.name.localeCompare(a.name, 'zh')
    })
    this.setData({
      provinces: sorted,
      sortBy: 'name',
      sortOrder: newOrder
    })
  },

  onShareAppMessage() {
    return {
      title: `今日牛价 ${this.data.currentDate}`,
      path: '/pages/index/index'
    }
  }
})

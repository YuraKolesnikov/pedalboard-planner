class PedalModel {
  constructor ({ pedal_id, title, width, height, brand, type }) {
    this.id = this._generateId()
    this.pedal_id = pedal_id
    this.title = title
    this.width = width
    this.height = height
    this.brand = brand
    this.type = type
    this.top = 15
    this.left = 15
    this.z = 0
    this.rotation = null
    this.rotationOptions = ['right', 'bottom', 'left']
  }

  _generateId() {
    return Math.random().toString(36).substring(2, 15).toUpperCase() + Math.random().toString(36).substring(2, 15).toUpperCase();
  }

  rotate() {
    if (!this.rotation) {
      this.rotation = this.rotationOptions[0]
    } else {
      const i = this.rotationOptions.findIndex(opt => opt === this.rotation)
      this.rotation = this.rotationOptions[i + 1]
    }
  }

  closer() {
    this.z++
  }

  deeper() {
    this.z--
  }

  setCoords({ top, left }) {
    this.top = top
    this.left = left
  }


}

export default PedalModel

class ObjectMethodsService {
  getEnhancedObject(rawObject) {
    const newObj = {
      ...rawObject.__proto__,
      valueOf() {
        return this.age
      },
    }

    return newObj;
  }

  getEnhancedObject2(rawObject) {
    const newObj = {
      ...rawObject.__proto__,
      toString() {
        return `[name="${this.name}",age=${this.age}]`;
      }
    }

    return newObj;
  }

  getEnhancedObjectWithoutValueOfOrToString(rawObject) {
    const newObj = {
      ...rawObject.__proto__,
      [Symbol.toPrimitive](coercionType) {
        const types = {
          string: `[name="${this.name}",age=${this.age}]`,
          number: this.age,
        }
        return types[coercionType] || types.string;
      }
    }
    return newObj
  }
}

module.exports = ObjectMethodsService;

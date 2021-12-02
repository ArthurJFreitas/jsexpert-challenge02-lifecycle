class ReferencesService {
  getCounterCopyingReferences(object) {
    const ref = object
    return ref;
  }

  getCounterWithoutCopyingReferences(object) {
    const newObj = Object.create(object)
    //{...object}
    return newObj;
  }

  getCounterWithoutDeepCopyingReferences(object) {
    const copyWoDeepRef = JSON.parse(JSON.stringify(object))
    return copyWoDeepRef;
  }

}

module.exports = ReferencesService;

const ObjectMethodsService = require("./service/ObjectMethodsService");

const service = new ObjectMethodsService()


const MOCK_OBJECT = {
  name: 'Wells',
  age: 21,
};

const rawObject = Object.create(MOCK_OBJECT);

const object = service.getEnhancedObjectWithoutValueOfOrToString(rawObject);

console.log(object)

const result = object + '';
const result2 = String(object);
const result3 = object.toString();

console.log(result + 1)
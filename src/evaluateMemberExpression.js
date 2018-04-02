const evaluateValue = require('./evaluateValue')

const evaluateMemberExpression = function(expression, values) {
  const { object, property } = expression
  const { name: objectName } = object
  const { name: propertyName } = property

  if (typeof values === 'undefined') {
    throw new Error(
      `No values defined for member "${objectName}.${propertyName}"`
    )
  }

  if (typeof values[objectName] === 'undefined') {
    throw new Error(`No member with name "${objectName}" found within values`)
  }

  if (typeof values[objectName][propertyName] === 'undefined') {
    throw new Error(
      `No property with name "${propertyName}" found for member "${objectName}" within values`
    )
  }

  const objectValue = evaluateValue(object, values)
  const propertyValue = evaluateValue(property, values)

  return values[objectName][propertyName]
}

module.exports = evaluateMemberExpression

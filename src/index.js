const jsep = require('jsep')

jsep.addBinaryOp('in', 10)

const createExpressionEvaluator = function(functions) {
  return function(expression, values) {
    const parsedExpression = jsep(expression)
    console.log(parsedExpression)
    return evaluateParsedExpression(parsedExpression, values, functions)
  }
}

const evaluateParsedExpression = function(parsedExpression, values, functions) {
  const { type } = parsedExpression

  switch (type) {
    case 'Compound':
      return evaluateCompoundExpression(parsedExpression, values, functions)
    case 'MemberExpression':
      return evaluateMemberExpression(parsedExpression, values, functions)
    case 'BinaryExpression':
      return evaluateBinaryExpression(parsedExpression, values, functions)
    case 'LogicalExpression':
      return evaluateLogicalExpression(parsedExpression, values, functions)
    case 'CallExpression':
      return evaluateCallExpression(parsedExpression, values, functions)
  }
}

const evaluateValue = function(expression, values) {
  const { type, value, name } = expression
  switch (type) {
    case 'Literal':
      return value
    case 'Identifier':
      return values[name]
    default:
      return evaluateParsedExpression(expression, values)
  }
}

const evaluateCompoundExpression = function(expression, values) {
  const { body } = expression
  return body.map(expression => evaluateParsedExpression(expression, values))
}

const evaluateLogicalExpression = function(expression, values) {
  const { operator, left, right } = expression

  const leftValue = evaluateValue(left, values)
  const rightValue = evaluateValue(left, values)

  switch (operator) {
    case '||':
      return leftValue || rightValue
    case '&&':
      return leftValue && rightValue
  }
}

const evaluateCallExpression = function(expression, values) {
  const { arguments, callee } = expression
}

const evaluateBinaryExpression = function(expression, values) {
  const { operator, left, right } = expression

  const leftValue = evaluateValue(left, values)
  const rightValue = evaluateValue(right, values)

  switch (operator) {
    case '+':
      return leftValue + rightValue
    case '-':
      return leftValue - rightValue
    case '*':
      return leftValue * rightValue
    case '/':
      return leftValue / rightValue
    case '>':
      return leftValue > rightValue
    case '>=':
      return leftValue >= rightValue
    case '<':
      return leftValue < rightValue
    case '<=':
      return leftValue <= rightValue
    case '==':
      return leftValue == rightValue
    case '===':
      return leftValue === rightValue
  }
}

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

module.exports = {
  createExpressionEvaluator
}

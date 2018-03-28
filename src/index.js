const jsep = require('jsep')

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

  return values[objectName][propertyName]
}

module.exports = {
  createExpressionEvaluator
}

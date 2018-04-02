const evaluateValue = require('./evaluateValue')

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
    case '!=':
      return leftValue != rightValue
    case '===':
      return leftValue === rightValue
    case '!==':
      return leftValue !== rightValue
  }
}

module.exports = evaluateBinaryExpression

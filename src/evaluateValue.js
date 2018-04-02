const evaluateParsedExpression = require('./evaluateParsedExpression')

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

module.exports = evaluateValue

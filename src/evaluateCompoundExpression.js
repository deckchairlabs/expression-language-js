const evaluateParsedExpression = require('./evaluateParsedExpression')

const evaluateCompoundExpression = function(expression, values) {
  const { body } = expression
  return body.map(expression => evaluateParsedExpression(expression, values))
}

module.exports = evaluateCompoundExpression

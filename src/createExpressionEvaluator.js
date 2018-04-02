const jsep = require('jsep')
const evaluateParsedExpression = require('./evaluateParsedExpression')

const createExpressionEvaluator = function(functions) {
  return function(expression, values) {
    return evaluateParsedExpression(jsep(expression), values, functions)
  }
}

module.exports = createExpressionEvaluator

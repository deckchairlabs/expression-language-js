const evaluateCompoundExpression = require('./evaluateCompoundExpression')
const evaluateMemberExpression = require('./evaluateMemberExpression')
const evaluateBinaryExpression = require('./evaluateBinaryExpression')
const evaluateLogicalExpression = require('./evaluateLogicalExpression')
const evaluateCallExpression = require('./evaluateCallExpression')

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

module.exports = evaluateParsedExpression

const { createExpressionEvaluator } = require('./src')

const expressionEvaluator = createExpressionEvaluator()

const result = expressionEvaluator('(1 + 11 + 7.8 - 4) / 2')

console.log(result)

const { createExpressionEvaluator } = require('./src')

const expressionEvaluator = createExpressionEvaluator()

const result = expressionEvaluator("'admin' in user.roles", {
  user: {
    roles: ['admin']
  }
})

console.log(result)

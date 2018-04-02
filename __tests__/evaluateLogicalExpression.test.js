const evaluateLogicalExpression = require('../src/evaluateLogicalExpression')

test('it can evaluate AND expression', () => {
  const truthyExpression = {
    operator: '&&',
    left: {
      type: 'Literal',
      value: true
    },
    right: {
      type: 'Literal',
      value: true
    }
  }

  const falsyExpression = {
    operator: '&&',
    left: {
      type: 'Literal',
      value: true
    },
    right: {
      type: 'Literal',
      value: false
    }
  }

  expect(evaluateLogicalExpression(truthyExpression)).toBe(true)
  expect(evaluateLogicalExpression(falsyExpression)).toBe(false)
})

test('it can evaluate OR expression', () => {
  const truthyExpression = {
    operator: '||',
    left: {
      type: 'Literal',
      value: true
    },
    right: {
      type: 'Literal',
      value: true
    }
  }

  const falsyExpression = {
    operator: '||',
    left: {
      type: 'Literal',
      value: false
    },
    right: {
      type: 'Literal',
      value: false
    }
  }

  expect(evaluateLogicalExpression(truthyExpression)).toBe(true)
  expect(evaluateLogicalExpression(falsyExpression)).toBe(false)
})

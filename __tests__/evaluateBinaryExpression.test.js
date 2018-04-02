const evaluateBinaryExpression = require('../src/evaluateBinaryExpression')

test('it can evaluate an addition expression', () => {
  const expression = {
    operator: '+',
    left: {
      type: 'Literal',
      value: 1
    },
    right: {
      type: 'Literal',
      value: 1
    }
  }

  expect(evaluateBinaryExpression(expression)).toBe(2)
})

test('it can evaluate a subtraction expression', () => {
  const expression = {
    operator: '-',
    left: {
      type: 'Literal',
      value: 1
    },
    right: {
      type: 'Literal',
      value: 1
    }
  }

  expect(evaluateBinaryExpression(expression)).toBe(0)
})

test('it can evaluate a multiplication expression', () => {
  const expression = {
    operator: '*',
    left: {
      type: 'Literal',
      value: 2
    },
    right: {
      type: 'Literal',
      value: 5
    }
  }

  expect(evaluateBinaryExpression(expression)).toBe(10)
})

test('it can evaluate a division expression', () => {
  const expression = {
    operator: '/',
    left: {
      type: 'Literal',
      value: 10
    },
    right: {
      type: 'Literal',
      value: 5
    }
  }

  expect(evaluateBinaryExpression(expression)).toBe(2)
})

test('it can evaluate a greater than expression', () => {
  const expression = {
    operator: '>',
    left: {
      type: 'Literal',
      value: 10
    },
    right: {
      type: 'Literal',
      value: 5
    }
  }

  expect(evaluateBinaryExpression(expression)).toBe(true)
})

test('it can evaluate a greater than or equal to expression', () => {
  const expression = {
    operator: '>=',
    left: {
      type: 'Literal',
      value: 10
    },
    right: {
      type: 'Literal',
      value: 10
    }
  }

  expect(evaluateBinaryExpression(expression)).toBe(true)
})

test('it can evaluate a less than expression', () => {
  const expression = {
    operator: '<',
    left: {
      type: 'Literal',
      value: 5
    },
    right: {
      type: 'Literal',
      value: 10
    }
  }

  expect(evaluateBinaryExpression(expression)).toBe(true)
})

test('it can evaluate a less than or equal to expression', () => {
  const expression = {
    operator: '<=',
    left: {
      type: 'Literal',
      value: 5
    },
    right: {
      type: 'Literal',
      value: 10
    }
  }

  expect(evaluateBinaryExpression(expression)).toBe(true)
})

test('it can evaluate an equality expression', () => {
  const equalExpression = {
    operator: '==',
    left: {
      type: 'Literal',
      value: '10'
    },
    right: {
      type: 'Literal',
      value: 10
    }
  }

  const notEqualExpression = {
    operator: '!=',
    left: {
      type: 'Literal',
      value: true
    },
    right: {
      type: 'Literal',
      value: false
    }
  }

  expect(evaluateBinaryExpression(equalExpression)).toBe(true)
  expect(evaluateBinaryExpression(notEqualExpression)).toBe(true)
})

test('it can evaluate a strict equality expression', () => {
  const equalExpression = {
    operator: '===',
    left: {
      type: 'Literal',
      value: 10
    },
    right: {
      type: 'Literal',
      value: 10
    }
  }

  const notEqualExpression = {
    operator: '!==',
    left: {
      type: 'Literal',
      value: '10'
    },
    right: {
      type: 'Literal',
      value: 10
    }
  }

  expect(evaluateBinaryExpression(equalExpression)).toBe(true)
  expect(evaluateBinaryExpression(notEqualExpression)).toBe(true)
})

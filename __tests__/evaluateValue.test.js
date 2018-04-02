const evaluateValue = require('../src/evaluateValue')

test('it can evaluate a literal value', () => {
  const expression = {
    type: 'Literal',
    value: 1
  }

  expect(evaluateValue(expression)).toBe(1)
})

test('it can evaluate an identifier', () => {
  const expression = {
    type: 'Identifier',
    name: 'testing'
  }

  expect(
    evaluateValue(expression, {
      testing: 'Test'
    })
  ).toBe('Test')
})

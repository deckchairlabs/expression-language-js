const createExpressionEvaluator = require('../src/createExpressionEvaluator')

let expressionEvaluator = null

beforeEach(() => {
  expressionEvaluator = createExpressionEvaluator()
})

test('it creates an instance of an expression evaluator', () => {
  expect(typeof expressionEvaluator).toBe('function')
})

test('it can evaluate a simple addition expression', () => {
  expect(expressionEvaluator('1 + 1')).toBe(2)
  expect(
    expressionEvaluator('one + two', {
      one: 1,
      two: 2
    })
  ).toBe(3)
})

test('it can evaluate a simple subtraction expression', () => {
  expect(expressionEvaluator('2 - 1')).toBe(1)
  expect(expressionEvaluator('5 - 10')).toBe(-5)
})

test('it can evaluate a simple comparison expression', () => {
  expect(expressionEvaluator('true != false')).toBe(true)
  expect(expressionEvaluator('true == false')).toBe(false)
  expect(expressionEvaluator('2 == 2')).toBe(true)
  expect(expressionEvaluator('2 === 2')).toBe(true)
  expect(expressionEvaluator('10 !== 2')).toBe(true)
})

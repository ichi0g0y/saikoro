import { describe, expect, test } from 'vitest'
import saikoro from '..'

function checkValue(value: number, min: number = 0, max: number = 1) {
  expect(value).toBeGreaterThanOrEqual(min)
  if (min < max) expect(value).toBeLessThanOrEqual(max)
}

describe('Saikoro Basic', () => {
  test('basic', async () => {
    const random = saikoro()
    checkValue(random())
    checkValue(random())
    checkValue(random())
    checkValue(random())
    checkValue(random())
  })

  test('with seed "ichi0g0y"', async () => {
    const random = saikoro({ seed: 'ichi0g0y' })
    expect(random()).toBe(0.6113398938905448)
    expect(random()).toBe(0.6059006913565099)
    expect(random()).toBe(0.632007792359218)
    expect(random()).toBe(0.7772839844692498)
    expect(random()).toBe(0.8071133128833026)
  })

  test('with range 1 ~ 10, 1000 times', async () => {
    const min = 1
    const max = 10
    const random = saikoro({ min, max })

    for (let i = 0; i < 1000; i++) {
      checkValue(random(), min, max)
    }
  })

  test('with range(int) 1 ~ 10, 1000 times', async () => {
    const min = 1
    const max = 10
    const random = saikoro({ type: 'integer', min, max })

    for (let i = 0; i < 1000; i++) {
      checkValue(random(), min, max)
    }
  })
})

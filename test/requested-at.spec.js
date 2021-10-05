import assert from 'power-assert'
import { RequestedAt } from '../src/requested-at.js'

describe('RequestedAt', () => {
  describe('#isDefinedByUser()', () => {
    describe('on development', () => {
      it('returns true', () => {
        const requestedAt = new RequestedAt({
          params: 'date=2099-07-30',
          env: 'development'
        })
        assert(requestedAt.isDefinedByUser() === true)
      })
    })
    describe('on production', () => {
      it('returns false', () => {
        const requestedAt = new RequestedAt({
          params: 'date=2099-07-30',
          env: 'production'
        })
        assert(requestedAt.isDefinedByUser() === false)
      })
    })
  })

  describe('#userDefinedDate()', () => {
    describe('on development', () => {
      it('returns stubbed requested at', () => {
        const requestedAt = new RequestedAt({
          params: '?date=2099-07-30',
          env: 'development'
        })
        assert(requestedAt.userDefinedDate().toString === new Date('2099-07-30').toString)
      })
    })
    describe('on production', () => {
      it('returns undefined', () => {
        const requestedAt = new RequestedAt({
          params: 'date=2099-07-30',
          env: 'production'
        })
        assert(requestedAt.userDefinedDate() === undefined)
      })
    })
  })

  describe('#getDate()', () => {
    describe('on development', () => {
      it('returns stubbed requested at', () => {
        const requestedAt = new RequestedAt({
          params: '?date=2099-07-30',
          env: 'development'
        })
        assert(requestedAt.getDate().toString === new Date('2099-07-30').toString)
      })
    })
    describe('on production', () => {
      it('returns today', () => {
        const requestedAt = new RequestedAt({
          params: 'date=2099-07-30',
          env: 'production'
        })
        assert(requestedAt.getDate().toString === new Date().toString)
      })
    })
  })
})

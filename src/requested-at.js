/**
 * ページにアクセスしてきたタイミングを取得できる。
 * Production以外ではクエリパラメータでスタブすることができる。
 */
export default class RequestedAt {
  /**
   * @param {object} args
   * @param {object} args.params
   * @param {string} args.env
   */
  constructor ({ params, env } = { params: window.location.search }) {
    this.params = params
    this.env = env
  }

  /**
   * @returns {Date}
   */
  getDate () {
    return this.userDefinedDate() || new Date()
  }

  /**
   * @returns {boolean}
   */
  isDefinedByUser () {
    return this.env !== 'production'
  }

  /**
   * @returns {Date}
   */
  userDefinedDate () {
    if (this.isDefinedByUser() && !isNaN(Date.parse(this.params()))) {
      return new Date(this.params)
    }
  }
}

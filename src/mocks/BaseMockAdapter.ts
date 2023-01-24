import type MockAdapter from 'axios-mock-adapter/types'

export default abstract class BaseMockAdapter {
  protected adapter
  constructor(adapter: MockAdapter) {
    this.adapter = adapter
  }

  abstract execute(): void
}

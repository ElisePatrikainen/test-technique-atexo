import { mount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('renders welcome message', () => {
    const wrapper = mount(App)
    expect(wrapper.html()).toContain('Welcome to Your Vue.js App')
  })
})

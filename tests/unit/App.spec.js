import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import Cards from '@/components/Cards.vue'

describe('App.vue', () => {

  // todo: create the wrapper before each

  it('displays GameCards components and commits "mixGame" action on init', () => {
    const wrapper = shallowMount(App, {
      global: {
        mocks: {
          $store: {
            commit: jest.fn()
          }
        }
      }
    })
    const gameCardsComponents = wrapper.findAllComponents(Cards)
    expect(gameCardsComponents.length).toBe(3)
    expect(wrapper.vm.$store.commit).toHaveBeenCalledWith('mixGame')
  })

  it('creates a new mixed game on "mix game" button click', async () => {
    const $store = {
      state: {
      },
      commit: jest.fn()
    }
    const wrapper = shallowMount(App, {
      global: {
        mocks: {
          $store
        }
      }
    })
    const mixGameButton = wrapper.find('[data-test="mixGame"]')
    await mixGameButton.trigger('click')
    expect($store.commit).toHaveBeenCalledWith('mixGame')
  }),
  
  it('orders the user set on "order set" button click', async () => {
    const $store = {
      state: {
      },
      commit: jest.fn()
    }
    const wrapper = shallowMount(App, {
      global: {
        mocks: {
          $store
        }
      }
    })
    const orderSetButton = wrapper.find('[data-test="orderSet"]')
    await orderSetButton.trigger('click')
    expect($store.commit).toHaveBeenCalledWith('orderSet')
  })
})

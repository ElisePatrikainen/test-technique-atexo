import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'
import GameCards from '@/components/GameCards.vue'

describe('App.vue', () => {

  // todo: create new mix on mounted
  // todo: before each ?

  it('displays GameCards and SetCards components x2 + commit "mixGame"', () => {
    const wrapper = shallowMount(App, {
      global: {
        mocks: {
          $store: {
            commit: jest.fn()
          }
        }
      }
    })
    const gameCardsComponents = wrapper.findAllComponents(GameCards)
    expect(gameCardsComponents.length).toBe(1)
    expect(wrapper.vm.$store.commit).toHaveBeenCalledWith('mixGame')
    // 2 comps, 1 ordered and 1 unordered

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

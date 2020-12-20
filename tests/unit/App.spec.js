import { mount } from '@vue/test-utils'
import App from '@/App.vue'
import CardsSet from '@/components/CardsSet.vue'
import { store } from '../../src/store'

describe('App.vue', () => {

  it('displays unordered and ordered sets', () => {
    store.init()
    const wrapper = mount(App)
    const cardsSetComponents = wrapper.findAllComponents(CardsSet)
    expect(cardsSetComponents[0].vm.$props.ordered).toBeFalsy
    expect(cardsSetComponents[1].vm.$props.ordered).toBeTruthy
  }),

  // it('inits the store when mounted', async () => {
  //   console.log(store.init)
  //   const initStoreSpy = jest.spyOn(store, 'init')
  //   console.log(store.init)
  //   mount(App)
  //   expect(initStoreSpy).toBeCalled()
  // }),
// todo: check for data-test if good practice
  it('click on the "new set" button calls the store method "createNewUnorderedCardsSet"', async () => {
    store.init()
    const wrapper = mount(App)
    const createANewSetSpy = jest.spyOn(store, 'createNewUnorderedCardsSet')
    const getNewSetButton = wrapper.find('[data-test="newSetButton"]')
    await getNewSetButton.trigger('click')
    expect(createANewSetSpy).toBeCalled()
  }),
  
  it('click on the "order set" button calls the store method "orderCurrentCardsSet"', async () => {
    store.init()
    const wrapper = mount(App)
    const orderSetSpy = jest.spyOn(store, 'orderCurrentCardsSet')
    const orderSetButton = wrapper.find('[data-test="orderSetButton"]')
    await orderSetButton.trigger('click')
    expect(orderSetSpy).toBeCalled()
  })

  // test on mounted - stub mounted method?
})

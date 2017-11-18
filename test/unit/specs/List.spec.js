import List from '@/components/List'
import Vue from 'vue'
import { mount } from 'avoriaz'

describe('List.vue', () => {
  it('displays items from the list', () => {
    // build component
    const Constructor = Vue.extend(List)
    const ListComponent = new Constructor().$mount()
    // assert that component text contains items from the list
    expect(ListComponent.$el.textContent).to.contain('play games')
  })

  it('adds a new item to list on click', () => {
    const Constructor = Vue.extend(List)
    const ListComponent = new Constructor().$mount()

    ListComponent.newItem = 'brush my teeth'

    // simulate click event
    // window.Event = new Vue()
    const button = ListComponent.$el.querySelector('button')
    const clickEvent = new window.Event('click')
    button.dispatchEvent(clickEvent)
    ListComponent._watcher.run()

    // assert list contains new item
    expect(ListComponent.$el.textContent).to.contain('brush my teeth')
    expect(ListComponent.listItems).to.contain('brush my teeth')
  })

  it('adds new item to list on click with avoriaz', () => {
    const ListComponent = mount(List)

    ListComponent.setData({
      newItem: 'brush my teeth'
    })

    const button = ListComponent.find('button')[0]
    button.dispatch('click')

    expect(ListComponent.text()).to.contain('brush my teeth')
    expect(ListComponent.data().listItems).to.contain('brush my teeth')
  })
})
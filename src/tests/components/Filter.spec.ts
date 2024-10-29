import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"
import Filter from "../../components/Filter.vue"
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

describe("Filter.vue", () => {
  it('should see if the 3 buttons exists', async () => {
    const wrapper = mount(Filter, {
      global: {
        plugins: [vuetify]
      }
    })
    expect(wrapper.findAll(".v-btn").length).toBe(3)
  })

  it('should emit events', async () => {
    const wrapper = mount(Filter, {
      global: {
        plugins: [vuetify]
      }
    })

    wrapper.vm.$emit('hodometer')
    wrapper.vm.$emit('config')
    wrapper.vm.$emit('reset')

    await wrapper.vm.$nextTick()

    expect(wrapper.emitted().hodometer).toBeTruthy()
    expect(wrapper.emitted().config).toBeTruthy()
    expect(wrapper.emitted().reset).toBeTruthy()
  })
})
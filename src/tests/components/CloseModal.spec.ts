import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"
import CloseModal from "../../components/CloseModal.vue"
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

describe("CloseModal.vue", () => {
  it('should if the button has been shown', async () => {
    const wrapper = mount(CloseModal, {
      global: {
        plugins: [vuetify]
      }
    })
    expect(wrapper.findAll(".v-btn").length).toBe(1)
  })

  it('should if the button has been shown', async () => {
    const wrapper = mount(CloseModal, {
      props: {
        modelValue: true
      },
      global: {
        plugins: [vuetify]
      }
    })
    await wrapper.vm.$nextTick()
    await wrapper.setProps({ modelValue: false })
    expect(wrapper.props().modelValue).toBe(false)
  })
})
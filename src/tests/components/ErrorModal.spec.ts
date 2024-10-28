import { mount } from "@vue/test-utils"
import { describe, it, expect } from "vitest"
import ErrorModal from "../../components/ErrorModal.vue"
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

// este teste está falhando devido a bugs em modelValue dentro do test-utils. Somente componentes sem v-model serão testados nesta versão.

describe.skip("ErrorModal.vue", () => {
  it('Should show the message', async () => {
    const wrapper = mount(ErrorModal, {
      props: {
        modelValue: true,
        'onUpdate:modelValue': (e) => wrapper.setProps({ modelValue: e })
      },
      global: {
        plugins: [vuetify]
      }
    })

    await wrapper.vm.$nextTick()

    const dialog = wrapper.find('.v-dialog')
    expect(dialog.exists()).toBe(true)
    expect(dialog.isVisible()).toBe(true)

    const cardText = wrapper.find('.v-card')
    expect(cardText.exists()).toBe(true)
    expect(cardText.text()).toBe('Aparentemente esta requisição está apresentando problemas. Favor consultar os mantenedores.')
  })
})

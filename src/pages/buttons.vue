<script lang="ts" setup>
import CardTitle from '../components/CardTitle.vue'
import CardSubTitle from '../components/CardSubTitle.vue'
import { ref, computed, watch } from 'vue'
import ModalScorecards from '../components/ModalScorecards.vue'
import { HandleFilterConfig, ListScorecard } from '../types'
import ModalConfigScorecards from '../components/ModalConfigScorecards.vue'
import { useConfigScorecards } from '../composables/useConfigScorecards'

const toggle = ref<number[]>([])
const toggle1 = ref<number[]>([])
const toggle2 = ref<number[]>([])
const toggle3 = ref<number[]>([])
const toggle4 = ref<number[]>([])
const toggle5 = ref<number[]>([])

const { alertToggle,
    alertActivity,
    alertAvailability,
    alertState,
    alertCity,
    hideNumbers,
    limitVisibility,
    amountScorecards } = useConfigScorecards()

const alerts = ref<ListScorecard[]>([
  {
    id: 1,
    text: '12.200 alertas',
    color: 'red-darken-3',
    activeColor: 'red-darken-1',
    value: '12.200',
    icon: 'mdi-alert-decagram',
    category: 'alerts'
  },
  {
    id: 2,
    text: '888 infração',
    color: 'orange-darken-3',
    activeColor: 'orange-darken-4',
    value: '888',
    icon: 'mdi-alert-circle',
    category: 'alerts'
  },
  {
    id: 3,
    text: '3 macros',
    color: 'cyan-darken-1',
    activeColor: 'cyan-darken-2',
    value: '3',
    icon: 'mdi-mace',
    category: 'alerts'
  },
  {
    id: 4,
    text: '20 mensagens',
    color: 'green-darken-1',
    activeColor: 'green-darken-1',
    value: '20',
    icon: 'mdi-message',
    category: 'alerts'
  },
])

const availability = ref<ListScorecard[]>([
  {
    id: 5,
    text: '120 desconhecido',
    color: 'grey-darken-3',
    activeColor: 'grey-darken-1',
    value: '120',
    icon: 'mdi-crosshairs-question',
    category: 'availability'
  },
  {
    id: 6,
    text: '888 disponível',
    color: 'orange-darken-3',
    activeColor: 'orange-darken-4',
    value: '888',
    icon: 'mdi-truck-check',
    category: 'availability'
  },
  {
    id: 7,
    text: '3 em operação',
    color: 'green-darken-1',
    activeColor: 'green-darken-2',
    value: '3',
    icon: 'mdi-truck-delivery',
    category: 'availability'
  },
  {
    id: 8,
    text: '20 em manutenção',
    color: 'red-darken-1',
    activeColor: 'red-darken-1',
    value: '20',
    icon: 'mdi-tow-truck',
    category: 'availability'
  },
])

const activities = ref<ListScorecard[]>([
  {
    id: 9,
    text: '662 operação',
    color: 'grey-darken-3',
    activeColor: 'grey-darken-1',
    value: '662',
    icon: 'mdi-truck-fast',
    category: 'activities'
  },
  {
    id: 10,
    text: '66 manutenção',
    color: 'red-darken-3',
    activeColor: 'red-darken-4',
    value: '66',
    icon: 'mdi-truck-alert',
    category: 'activities'
  },
  {
    id: 11,
    text: '222 pátio transportadora',
    color: 'grey-darken-1',
    activeColor: 'grey-darken-2',
    value: '222',
    icon: 'mdi-truck',
    category: 'activities'
  },
  {
    id: 12,
    text: '27 em carregamento',
    color: 'orange-darken-1',
    activeColor: 'orange-darken-1',
    value: '27',
    icon: 'mdi-truck-cargo-container',
    category: 'activities'
  },
  {
    id: 13,
    text: '33 parados',
    color: 'red-darken-3',
    activeColor: 'red-darken-1',
    value: '33',
    icon: 'mdi-truck',
    category: 'activities'
  },
  {
    id: 14,
    text: '6 borracharia',
    color: 'red-darken-3',
    activeColor: 'red-darken-4',
    value: '6',
    icon: 'mdi-tire',
    category: 'activities'
  },
  {
    id: 15,
    text: '3 em outros',
    color: 'grey-darken-1',
    activeColor: 'grey-darken-2',
    value: '3',
    icon: 'mdi-truck-snowflake',
    category: 'activities'
  },
])

const cities = ref<ListScorecard[]>([
{
    id: 21,
    text: '5 Rio de Janeiro',
    color: 'grey-darken-1',
    activeColor: 'grey-darken-2',
    value: '5',
    icon: 'mdi-map-marker',
    category: 'cities',
    helper: 'Rio de Janeiro'
  },
  {
    id: 22,
    text: '5 São Paulo',
    color: 'grey-darken-1',
    activeColor: 'grey-darken-2',
    value: '5',
    icon: 'mdi-map-marker',
    category: 'cities',
    helper: 'São Paulo'
  },
  {
    id: 23,
    text: '4 Florianópolis',
    color: 'grey-darken-1',
    activeColor: 'grey-darken-2',
    value: '4',
    icon: 'mdi-map-marker',
    category: 'cities',
    helper: 'Florianópolis'
  },
  {
    id: 24,
    text: '3 Bento Gonçalves',
    color: 'grey-darken-1',
    activeColor: 'grey-darken-2',
    value: '3',
    icon: 'mdi-map-marker',
    category: 'cities',
    helper: 'Bento Gonçalves'
  },
  {
    id: 25,
    text: '2 Blumenau',
    color: 'grey-darken-1',
    activeColor: 'grey-darken-2',
    value: '2',
    icon: 'mdi-map-marker',
    category: 'cities',
    helper: 'Blumenau'
  }
])

const states = ref<ListScorecard[]>([
  {
    id: 16,
    text: '20 SP',
    color: 'grey-darken-1',
    activeColor: 'grey-darken-2',
    value: '20',
    icon: 'mdi-map',
    category: 'states',
    helper: 'SP'
  },
  {
    id: 17,
    text: '19 RS',
    color: 'grey-darken-1',
    activeColor: 'grey-darken-2',
    value: '19',
    icon: 'mdi-map',
    category: 'states',
    helper: 'RS'
  },
  {
    id: 18,
    text: '15 SC',
    color: 'grey-darken-1',
    activeColor: 'grey-darken-2',
    value: '15',
    icon: 'mdi-map',
    category: 'states',
    helper: 'SC'
  },
  {
    id: 19,
    text: '10 PR',
    color: 'grey-darken-1',
    activeColor: 'grey-darken-2',
    value: '10',
    icon: 'mdi-map',
    category: 'states',
    helper: 'RS'
  },
  {
    id: 20,
    text: '5 MG',
    color: 'grey-darken-1',
    activeColor: 'grey-darken-2',
    value: '5',
    icon: 'mdi-map',
    category: 'states',
    helper: 'MG'
  }
])

const applyColors = (value: number, color: string, model: any) => {
  const array = [model]
  array.includes(value) ? '#fff' : color
}  

const modal = ref<boolean>(false)
const configScorecard = ref<boolean>(false)
const openModal = () => modal.value = true
const updateConfigScorecard = () => configScorecard.value = true

const toggleItemsFull = computed(() => [...alerts.value, ...activities.value, ...availability.value, ...states.value, ...cities.value])

const showFirst3Letters = (city: string) => city.length > 3 ? city.substring(0, 3) : city

const filterData = (data: HandleFilterConfig) => {
  configScorecard.value = false
  alertToggle.value = data.alertToggle
  alertActivity.value = data.alertActivity
  alertAvailability.value = data.alertAvailability
  alertState.value = data.alertState
  alertCity.value = data.alertCity
  hideNumbers.value = data.hideNumbers
  limitVisibility.value = data.limitVisibility
  amountScorecards.value = data.amountScorecards
}
</script>

<template>
  <div class="container">
    <CardTitle>Proposta de melhoria em Scorecards</CardTitle>
    <v-btn @click="updateConfigScorecard">Configurar Scorecards</v-btn>
    <div class="box">
      <template v-if="limitVisibility">
        <v-btn-toggle multiple density="compact" v-model="toggle">
        <v-btn :active-color v-for="{id, text, icon, activeColor, color, value, helper}, key in alerts" :key :value="id">
          <v-tooltip :text activator="parent" location="top" />
          <v-icon :icon :size="!hideNumbers ? 'small' : 'large'" :color="applyColors(id, color, toggle)" />
          <span v-if="!hideNumbers" class="button-info"><span class="helper" v-if="helper">{{showFirst3Letters(helper)}}</span> {{ value }}</span>
        </v-btn>
        <v-btn :value="0" v-if="limitVisibility" @click="openModal">
          <v-tooltip text="Clique para ver todos" activator="parent" location="top" />
          <v-icon icon="mdi-plus-box" size="large" />
        </v-btn>
      </v-btn-toggle>
      </template>
      <template  v-if="!limitVisibility">
        <div class="box-item">
          <p>Notificações</p>
          <v-btn-toggle multiple density="compact" v-model="toggle">
            <v-btn :active-color v-for="{id, text, icon, activeColor, color, value, helper}, key in alerts" :key :value="id">
              <v-tooltip :text activator="parent" location="top" />
              <v-icon :icon :size="!hideNumbers ? 'small' : 'large'" :color="applyColors(id, color, toggle)" />
              <span v-if="!hideNumbers" class="button-info"><span class="helper" v-if="helper">{{showFirst3Letters(helper)}}</span> {{ value }}</span>
            </v-btn>
            <v-btn :value="0" v-if="limitVisibility" @click="openModal">
              <v-tooltip text="Clique para ver todos" activator="parent" location="top" />
              <v-icon icon="mdi-plus-box" size="large" />
            </v-btn>
          </v-btn-toggle>
        </div>
        <div class="box-item">
          <p>Atividades</p>
          <v-btn-toggle multiple density="compact" v-model="toggle1">
            <v-btn :active-color v-for="{id, text, icon, activeColor, color, value, helper}, key in activities" :key :value="id">
              <v-tooltip :text activator="parent" location="top" />
              <v-icon :icon :size="!hideNumbers ? 'small' : 'large'" :color="applyColors(id, color, toggle1)" />
              <span v-if="!hideNumbers" class="button-info"><span class="helper" v-if="helper">{{showFirst3Letters(helper)}}</span> {{ value }}</span>
            </v-btn>
            <v-btn :value="0" v-if="limitVisibility" @click="openModal">
              <v-tooltip text="Clique para ver todos" activator="parent" location="top" />
              <v-icon icon="mdi-plus-box" size="large" />
            </v-btn>
          </v-btn-toggle>
        </div>
        <div class="box-item">
          <p>Disponibilidade</p>
          <v-btn-toggle multiple density="compact" v-model="toggle2">
            <v-btn :active-color v-for="{id, text, icon, activeColor, color, value, helper}, key in availability" :key :value="id">
              <v-tooltip :text activator="parent" location="top" />
              <v-icon :icon :size="!hideNumbers ? 'small' : 'large'" :color="applyColors(id, color, toggle2)" />
              <span v-if="!hideNumbers" class="button-info"><span class="helper" v-if="helper">{{showFirst3Letters(helper)}}</span> {{ value }}</span>
            </v-btn>
            <v-btn :value="0" v-if="limitVisibility" @click="openModal">
              <v-tooltip text="Clique para ver todos" activator="parent" location="top" />
              <v-icon icon="mdi-plus-box" size="large" />
            </v-btn>
          </v-btn-toggle>
        </div>
        <div class="box-item">
          <p>Estados</p>
          <v-btn-toggle multiple density="compact" v-model="toggle5">
            <v-btn :active-color v-for="{id, text, icon, activeColor, color, value, helper}, key in states" :key :value="id">
              <v-tooltip :text activator="parent" location="top" />
              <v-icon :icon :size="!hideNumbers ? 'small' : 'large'" :color="applyColors(id, color, toggle5)" />
              <span v-if="!hideNumbers" class="button-info"><span class="helper" v-if="helper">{{showFirst3Letters(helper)}}</span> {{ value }}</span>
            </v-btn>
            <v-btn :value="0" v-if="limitVisibility" @click="openModal">
              <v-tooltip text="Clique para ver todos" activator="parent" location="top" />
              <v-icon icon="mdi-plus-box" size="large" />
            </v-btn>
          </v-btn-toggle>
        </div>
        <div class="box-item">
          <p>Cidades</p>
          <v-btn-toggle multiple density="compact" v-model="toggle4">
            <v-btn :active-color v-for="{id, text, icon, activeColor, color, value, helper}, key in cities" :key :value="id">
              <v-tooltip :text activator="parent" location="top" />
              <v-icon :icon :size="!hideNumbers ? 'small' : 'large'" :color="applyColors(id, color, toggle4)" />
              <span v-if="!hideNumbers" class="button-info"><span class="helper" v-if="helper">{{showFirst3Letters(helper)}}</span> {{ value }}</span>
            </v-btn>
            <v-btn :value="0" v-if="limitVisibility" @click="openModal">
              <v-tooltip text="Clique para ver todos" activator="parent" location="top" />
              <v-icon icon="mdi-plus-box" size="large" />
            </v-btn>
          </v-btn-toggle>
        </div>
    </template>
    </div>
    <CardSubTitle>Atribuindo grau de relevância</CardSubTitle>
    <p>Os alertas precisam ser atribuídos com grau de relevância. A tabela a seguir propôe uma subdivisão.</p>

    <table class="table">
      <thead>
        <tr>
          <th>Cor</th>
          <th>Grau</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style="background-color:rgb(229, 57, 53)"></td>
          <td>Alerta</td>
          <td>Indicado para atividades que requerem controle ágil e imediato.</td>
        </tr>
        <tr>
          <td style="background-color:#ef6c00"></td>
          <td>Infração</td>
          <td>Indicado para atividades importantes, porém em menor grau.</td>
        </tr>
        <tr>
          <td style="background-color:rgb(0, 151, 167)"></td>
          <td>Macro</td>
          <td>Indicado para as macros.</td>
        </tr>
        <tr>
          <td style="background-color:rgb(0, 137, 123)"></td>
          <td>Mensagem</td>
          <td>Indicado para mensagens.</td>
        </tr>
        <tr>
          <td style="background-color:rgb(117, 117, 117)"></td>
          <td>Neutro</td>
          <td>Indica um scorecard com valor neutro</td>
        </tr>
      </tbody>
    </table>
  </div>
  <ModalScorecards v-model="modal" :list="toggleItemsFull" />
  <ModalConfigScorecards v-model="configScorecard" :list="toggleItemsFull" @filter="filterData" />
</template>

<style>
.box {
  margin: 30px 0;
  width: 100%;
  background: #fafafa;
  display: flex;
  gap: 10px;
  flex-wrap: nowrap;
  flex-wrap: nowrap; /* Garante que os filhos fiquem em uma linha */
  padding: 20px;
  overflow-x: auto; /* Adiciona o scroll horizontal */
  overflow-y: hidden; /* Remove o scroll vertical */
  border: 1px solid #dedede;

  /* Tornando o scrollbar invisível */
  scrollbar-width: none; /* Firefox */
  .v-btn-group {
    overflow: auto;
    scrollbar-width: none;
  }
  .v-btn-group::-webkit-scrollbar {
    display: none;
  } 
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari e Edge */
  }
}
.helper {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: "";
  letter-spacing: 0;
  display: inline-flex;
}
.button-info {
  font-size: 12px;
}
.table {
  width: 100%;
  margin: 20px 0;
  border-collapse: collapse;
  td, th {
    padding: 5px;
    border: 1px solid #ccc;
  }
}
.box-item {
  p {
    font-size: 13px;
    font-weight: bold;
  }
}
</style>

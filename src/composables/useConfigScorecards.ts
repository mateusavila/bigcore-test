import { ref } from "vue";

export const useConfigScorecards = () => {
  const alertToggle = ref<boolean>(true);
  const alertAvailability = ref<boolean>(true);
  const alertActivity = ref<boolean>(true);
  const alertState = ref<boolean>(true);
  const alertCity = ref<boolean>(true);
  const hideNumbers = ref<boolean>(false);
  const limitVisibility = ref<boolean>(false);
  const amountScorecards = ref<number>(10);

  const updateAlertToggle = (t: boolean) => (alertToggle.value = t);
  const updateAlertAvailability = (t: boolean) => (alertAvailability.value = t);
  const updateAlertActivity = (t: boolean) => (alertActivity.value = t);
  const updateAlertState = (t: boolean) => (alertState.value = t);
  const updateAlertCity = (t: boolean) => (alertCity.value = t);
  const updateHideNumbers = (t: boolean) => (hideNumbers.value = t);
  const updateLimitVisibility = (t: boolean) => (limitVisibility.value = t);
  const updateAmountScorecards = (t: number) => (amountScorecards.value = t);

  return {
    alertToggle,
    alertActivity,
    alertAvailability,
    alertState,
    alertCity,
    hideNumbers,
    limitVisibility,
    amountScorecards,
    updateAlertToggle,
    updateAlertActivity,
    updateAlertAvailability,
    updateAlertState,
    updateAlertCity,
    updateHideNumbers,
    updateLimitVisibility,
    updateAmountScorecards,
  };
};

import {
  TOGGLE_DIALOG,
  ToggleDialogAction,
  DialogType,
} from '../../types/index'

export function toggleDialog(dialog: DialogType): ToggleDialogAction {
  return {
    type: TOGGLE_DIALOG,
    payload: {
      dialog,
    },
  }
}

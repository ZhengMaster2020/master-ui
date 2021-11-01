import type { App } from 'vue'
import type { MasterOptions } from '../_utils/types'

import _Button from './button.vue'
import _ButtonGroup from './button-group.vue'


const Button = Object.assign(_Button, {
  Group: _ButtonGroup,
  install: (app: App, options?: MasterOptions) => {
      const componentPrefix: string = 'm'
      app.component(componentPrefix + _Button.name, _Button);
      app.component(componentPrefix + _ButtonGroup.name, _ButtonGroup);
   }
})

export type ButtonInstance = InstanceType<typeof _Button>;
export type ButtonGroupInstance = InstanceType<typeof _ButtonGroup>;
export type ButtonProps = ButtonInstance['$props'];

export default Button
import type { App, Plugin } from 'vue';
import type { MasterOptions } from './_utils/types';
import Button from './button';

const components: Record<string, Plugin> = {
  Button
}


const install = (app: App, options: MasterOptions) => {
  for (const key of Object.keys(components)) {
    app.use(components[key], options)
  }
}

export default {
  ...components,
  install
}
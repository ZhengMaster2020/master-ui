import type { App } from 'vue'

export interface MasterOptions {
  classPrefix?: string;
  componentPrefix?: string;
}

export interface MasterIconOptions{
  iconPrefix?: string;
}


export type BaseType = string | number

export type Data = Record<string, any>

export type ClassName = string | Array<ClassName> | Record<string, boolean>

export type SFCWithInstall<T, D = Record<string, never>> = T & D & {
  install: (app: App, opt?: MasterOptions) => void
}

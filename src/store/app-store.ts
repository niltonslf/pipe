import {devices} from '@/constants/devices'
import {Device} from '@/domain/models'
import {isChrome} from '@/platforms'
import {makeAutoObservable} from 'mobx'

export class AppStore {
  url: string = ''
  devices: Device[] = []

  constructor() {
    makeAutoObservable(this)
  }

  setUrl(url: string) {
    this.url = url
  }

  private setDevices(devices: Device[]) {
    this.devices = devices
  }

  initialize() {
    return new Promise(resolve => {
      const defaultDevices = devices.filter(device => device?.default)
      this.setDevices(defaultDevices)

      if (isChrome()) {
        this.setUrl(window.location.href)
      }
      return resolve(true)
    })
  }

  addDevice(device: Device) {
    this.devices = [...this.devices, device]
  }

  removeDevice(device: Device) {
    this.devices = this.devices.filter(elem => elem.id !== device.id)
  }

  reset() {
    this.setUrl('')
    this.devices = []
  }
}

export const appStore = new AppStore()

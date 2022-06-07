import stringHelper from './helpers/stringHelper'
import styleHelper from './helpers/styleHelper'
import viewportHelper from './helpers/viewportHelper'

import { BrandService } from './modules/brand/BrandService'
import { CartService } from './modules/cart/CartService'
import { CategoryService } from './modules/category/CategoryService'
import { SectionsService }from './modules/sections/SectionsService'
import { SettingsService } from './modules/settings/SettingsService'
import { PagesService } from './modules/pages/PagesService'
import Socket from './socket'

export const helpers = {
  stringHelper,
  styleHelper,
  viewportHelper
}

export const services = {
  brand: BrandService,
  cart: CartService,
  category: CategoryService,
  sections: SectionsService,
  settings: SettingsService,
  pages: PagesService
}

export const socket = {
  ...Socket
}

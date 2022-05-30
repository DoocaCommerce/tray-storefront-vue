import stringHelper from './helpers/stringHelper'
import styleHelper from './helpers/styleHelper'
import viewportHelper from './helpers/viewportHelper'

import { BrandService } from './modules/brand/BrandService'
import { SectionsService }from './modules/sections/SectionsService'
import { SettingsService } from './modules/settings/SettingsService'
import { CategoryService } from './modules/category/CategoryService'
import { PagesService } from './modules/pages/PagesService'
import Socket from './socket'
import { MenuService } from './modules/menu/MenuService'

export const helpers = {
  stringHelper,
  styleHelper,
  viewportHelper
}

export const services = {
  brand: BrandService,
  sections: SectionsService,
  settings: SettingsService,
  category: CategoryService,
  pages: PagesService,
  menu: MenuService
}

export const socket = {
  ...Socket
}

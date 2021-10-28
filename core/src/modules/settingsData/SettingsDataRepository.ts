import { gql, query } from 'core/services/GraphqlService'

export async function getAllSettings(): Promise<Object> {
  const settingsQuery = gql`
    query {
      settings {
        settings
        sections
      }
    }
  `

  const { settings } = await query(settingsQuery)
  const sectionsParse = JSON.parse(settings.sections)
  const settingsParse = JSON.parse(settings.settings)

  return { sections: sectionsParse, settings: settingsParse }
}

export async function getSections(): Promise<Object> {
  const settingsQuery = gql`
    query {
      settings {
        sections
      }
    }
  `

  const { settings } = await query(settingsQuery)
  return JSON.parse(settings.sections)
}

export async function getSettings(): Promise<Object> {
  const settingsQuery = gql`
    query {
      settings {
        settings
      }
    }
  `

  const { settings } = await query(settingsQuery)
  return JSON.parse(settings.settings)
}

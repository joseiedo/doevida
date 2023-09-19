import axios from 'axios'
import * as cheerio from 'cheerio'

async function getAll() {
  const { data } = await axios.get("https://www.gov.br/saude/pt-br/acesso-a-informacao/acoes-e-programas/doacao-de-sangue/hemocentros-no-brasil")
  const $ = cheerio.load(data)

  const result: any[] = []
  $("#parent-fieldname-text p:has(strong)").get().forEach(element => {
    const region = $(element).text()
    const hemoElements = $(element).nextUntil("p:has(strong)")

    const hemocentersList = []
    for (let i = 0; i < hemoElements.length; i += 2) {
      const hemocenterTitle = $(hemoElements[i]).text()
      const hemocenterInfo = $(hemoElements[i + 1]).text()

      hemocentersList.push({
        name: hemocenterTitle,
        contact: hemocenterInfo
      })
    }

    result.push({
      region,
      hemocentersList,
    })
  })

  return {
    result
  }
}

export default {
  getAll
}


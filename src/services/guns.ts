import ky from 'ky'

export async function getGuns() {
  try {
    // Realizar la solicitud HTTP con ky
    const response = await ky.get('https://us-gun-violence.web.app/gundata.json').json()
    return response
  } catch (error) {
    console.error('Error al obtener y parsear el archivo JSON:', error)
  }
}

export const config = { runtime: 'nodejs' }
import { handleDayPilotApi } from '../../lib/daypilot-api'
export default function handler(req: any, res: any) {
  return handleDayPilotApi(req, res, '/api/account/data')
}

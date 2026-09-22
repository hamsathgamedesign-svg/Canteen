import { handleDayPilotApi } from '../lib/daypilot-api'

export const config = { runtime: 'nodejs' }

export default function handler(req: any, res: any) {
  return handleDayPilotApi(req, res)
}

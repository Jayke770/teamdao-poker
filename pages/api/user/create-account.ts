import type { NextApiResponse } from "next"
import type { ExtendNextApiRequest, CreateAccountRes } from '../../../lib/types'
import dbConnect from '../../../lib/db/connect.mjs'
export default async (req: ExtendNextApiRequest, res: NextApiResponse<CreateAccountRes>) => {
    const { method, body: { username, password, email } } = req
    try {
        if (method === 'POST') {
            await dbConnect()
        } else {
            return res.send({
                status: false,
                title: 'Invalid Request',
                message: 'Please try again'
            })
        }
    } catch (e: any) {
        console.log(e)
    }
}
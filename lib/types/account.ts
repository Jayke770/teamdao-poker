import { NextApiRequest } from "next"
//create account data
export interface ExtendNextApiRequest extends NextApiRequest {
    body: {
        username: string,
        password: string,
        email: string
    }
}
//create account response
export type CreateAccountRes = {
    status: boolean,
    title: string,
    message: string
}
import { NextApiRequest, NextApiResponse } from "next";

const API_BASE = 'https://api.convertkit.com/v3/';

enum SubscriptionStatus {
    FAIL = 500,
    SUCCESS = 200
}

const addFormSubscriber = async (name: string, email: string): Promise<SubscriptionStatus> => {
    try {
        await fetch(
            `${API_BASE}forms/${process.env.CONVERTKIT_FORM_ID}/subscribe`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'charset': 'utf-8'
                },
                body: JSON.stringify({
                    api_key: process.env.CONVERTKIT_API_KEY,
                    email,
                    first_name: name,
                })
            }
        );

        return SubscriptionStatus.SUCCESS
    } catch {
        return SubscriptionStatus.FAIL
    }
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const body = JSON.parse(req.body);

    const result = await addFormSubscriber(
        body.name as string,
        body.email as string 
    )
    
    res.status(result).end()
}
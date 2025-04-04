import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json([{ id: 1, value: 'Sample Data 1' }, { id: 2, value: 'Sample Data 2' }]);
}
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (_req: NextApiRequest, res: NextApiResponse) => {
    try {
        const data = await fetchFromExternalSource();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error in data-fetch:', error);
        res.status(500).json({ error: 'Failed to fetch data' });
    }
};

async function fetchFromExternalSource() {
    // Simulate an external data fetch
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{ id: 1, value: 100 }, { id: 2, value: 200 }]);
        }, 1000);
    });
}

export default handler;

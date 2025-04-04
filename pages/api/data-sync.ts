// API route for real-time data synchronization
import { NextApiRequest, NextApiResponse } from 'next';

let clients: any[] = [];

function sendEventsToAll(newData: any) {
  clients.forEach(client => client.res.write(`data: ${JSON.stringify(newData)}\n\n`));
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  clients.push({ req, res });

  req.on('close', () => {
    clients = clients.filter(client => client.req !== req);
  });
}

setInterval(() => {
  const newData = {
    timestamp: new Date().toISOString(),
    value: Math.random() * 100,
  };
  sendEventsToAll(newData);
}, 2000);

export default handler;

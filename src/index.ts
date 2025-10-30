import express from 'express';
import si from 'systeminformation';

const app = express();

app.get('/api/v1/sysinfo', async (_req, res) => {
  try {
    const [cpu, system, mem, os, currentLoad, processes, diskLayout, networkInterfaces] =
      await Promise.all([
        si.cpu(), si.system(), si.mem(), si.osInfo(),
        si.currentLoad(), si.processes(), si.diskLayout(), si.networkInterfaces()
      ]);
    res.json({ cpu, system, mem, os, currentLoad, processes, diskLayout, networkInterfaces });
  } catch (e) {
    res.status(500).json({ error: (e as Error).message });
  }
});

app.use((_req, res) => res.status(404).send('Not Found'));

if (require.main === module) {
  const PORT = 8000;
  app.listen(PORT, '0.0.0.0', () => console.log(`Listening on http://0.0.0.0:${PORT}`));
}

export default app;

import express from 'express';
import si, { cpuTemperature } from 'systeminformation';

const app = express();
const PORT = 8000;

app.get('/api/v1/sysinfo', async (_req, res) => {
  try {
    const data = {
      cpu: await si.cpu(),
      system: await si.system(),
      mem: await si.mem(),
      os: await si.osInfo(),
      currentLoad: await si.currentLoad(),
      processes: await si.processes(),
      diskLayout: await si.diskLayout(),
      networkInterfaces: await si.networkInterfaces()
    };
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: (err as Error).message });
  }
});


app.use((_req, res) => res.status(404).send('Not Found'));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;

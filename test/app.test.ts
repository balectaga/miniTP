import request from 'supertest';
import app from '../src/index';  // ou ../src/app selon ton nom exact

describe('API SysInfo', () => {
  it('GET /api/v1/sysinfo → doit renvoyer un JSON avec les infos système', async () => {
    const res = await request(app).get('/api/v1/sysinfo');
    expect(res.statusCode).toBe(200);
    expect(res.headers['content-type']).toMatch(/json/);
    expect(res.body).toHaveProperty('cpu');
    expect(res.body).toHaveProperty('mem');
    expect(res.body).toHaveProperty('os');
  });

  it('GET /foo → doit renvoyer 404', async () => {
    const res = await request(app).get('/foo');
    expect(res.statusCode).toBe(404);
  });
});

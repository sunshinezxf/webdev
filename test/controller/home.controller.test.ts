import {createApp, close, createHttpRequest} from '@midwayjs/mock';
import {Framework} from '@midwayjs/koa';

describe('test/controller/home.controller.test.ts', async () => {
    const app = await createApp<Framework>();
    const result = await createHttpRequest(app).get('/');
    expect(result.status).toBe(200);
    await close(app);
});
import { rest } from 'nsw';
import { setupServer } from 'nsw/node';

import { getQuote } from './quotesService';

const response = { test: 'testing' };

const server = setupServer(
    rest.get('https://animechan.vercel.app/api/random/', (req, res, ctx) => {
        return res(ctx.json(response));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('transform json response into object', async () => {
    const quote = await getQuote();

    expect(quote).toStrictEqual(response)
});
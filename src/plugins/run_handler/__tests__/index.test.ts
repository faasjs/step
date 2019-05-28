import { Func, InvokeData } from '../../../func';
import RunHandler from '../index';

describe('plugins.runHandler', function () {
  test('should work', async function () {
    const handler = new Func({
      plugins: [new RunHandler()],
      handler: function (data: InvokeData) {
        return data.event + 1;
      }
    }).createHandler();

    expect(await handler(0)).toEqual(1);
    expect(await handler(1)).toEqual(2);
  });
});

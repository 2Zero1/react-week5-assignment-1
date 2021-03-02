import { get } from './utils';

describe('utils', () => {
  context('when key is existed', () => {
    it('return value', () => {
      const obj = {
        test: 1,
      };
      const f = get('test');
      expect(f(obj)).toBe(1);
    });
  });
  context('when key is not existed', () => {
    it('return null', () => {
        const obj = {
          test: 1,
        };
        const f = get('test1');
        expect(f(obj)).toBe(null);
    });
  });
});
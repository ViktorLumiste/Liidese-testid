import {initApp} from "../mailer";

test('start', () => {
    expect(initApp(200000, console.log)).toBe(true);
});
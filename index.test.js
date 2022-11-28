const cutstr = require('./index');
var teststring = `{"data":[{"p":7296.89,"s":"EXCHANGE:BTCUSDT","t":1575526691134,"v":0.011467}],"type":"trade"}`

test('cut the string on the selected values and repetitions', () => {
    expect(cutstr(teststring, ":", ",", 2, 1)).toBe('7296.89');
    expect(cutstr(teststring, '"', ":", 7, 4)).toBe('EXCHANGE');
});
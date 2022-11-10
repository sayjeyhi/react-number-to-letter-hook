'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var react = require('react');

var useNumberToLetter = function (_a) {
    var _b = _a === void 0 ? { thousand: "hezar", billion: "milllion" } : _a, thousand = _b.thousand, billion = _b.billion;
    var generateVoiceAddresses = react.useCallback(function (str, suffix) {
        if (suffix === void 0) { suffix = ''; }
        // Remove zeros from start
        while (str.startsWith("0"))
            str = str.substring(1);
        var startPart = [];
        if (str.length > 8) {
            startPart = generateVoiceAddresses(str.slice(str.length - 6, str.length), billion);
            str = str.slice(0, str.length - 6);
        }
        else if (str.length > 4) {
            startPart = generateVoiceAddresses(str.slice(str.length - 3, str.length), thousand);
            str = str.slice(0, str.length - 3);
        }
        var voicesArray = Array.from({ length: str.length });
        var add_and = false;
        for (var i = 0; i < voicesArray.length; i++) {
            if (str[voicesArray.length - 1 - i] !== '0') {
                var firstPart = str[voicesArray.length - 1 - i];
                voicesArray[i] = (firstPart ? firstPart + "0".repeat(i) : '') + (add_and ? "_" : "");
                add_and = true;
            }
            if (voicesArray.length >= 2 && voicesArray[1] === "10_") {
                voicesArray[0] = "1" + voicesArray[0];
                voicesArray[1] = null;
            }
        }
        // If we want suffix or not
        if (suffix) {
            var tempSuffix = "" + suffix + (voicesArray.length > 0 ? '-o' : '');
            voicesArray.push(tempSuffix);
        }
        return startPart.concat(voicesArray);
    }, []);
    return generateVoiceAddresses;
};

exports.default = useNumberToLetter;
//# sourceMappingURL=index.js.map

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInput = void 0;
var prompt_sync_1 = require("prompt-sync");
var prompt = (0, prompt_sync_1.default)();
var getInput = function (question) {
    return prompt(question);
};
exports.getInput = getInput;

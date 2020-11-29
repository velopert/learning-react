"use strict";

exports.__esModule = true;
exports.getImportArg = getImportArg;

/* eslint-disable import/prefer-default-export */
function getImportArg(callPath) {
  return callPath.get('arguments.0');
}
"use strict";

exports.__esModule = true;
exports.default = requireAsyncProperty;

function requireAsyncProperty({
  types: t
}) {
  return () => t.objectProperty(t.identifier('resolved'), t.objectExpression([]));
}
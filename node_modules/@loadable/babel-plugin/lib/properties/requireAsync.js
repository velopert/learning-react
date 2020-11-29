"use strict";

exports.__esModule = true;
exports.default = requireAsyncProperty;

function requireAsyncProperty({
  types: t,
  template
}) {
  const tracking = template.ast(`
    const key = this.resolve(props)
    this.resolved[key] = false
    return this.importAsync(props).then(resolved => {
     this.resolved[key] = true
     return resolved;
    });        
  `);
  return () => t.objectMethod('method', t.identifier('requireAsync'), [t.identifier('props')], t.blockStatement(tracking));
}
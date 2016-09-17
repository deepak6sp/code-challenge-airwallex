function noop() {
  return null;
}

require.extensions['.styles'] = noop;
require.extensions['.scss'] = noop;
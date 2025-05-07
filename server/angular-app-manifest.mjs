
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/proyecto-SJB/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/proyecto-SJB"
  },
  {
    "renderMode": 2,
    "route": "/proyecto-SJB/inicio-control-de-pagos"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 27439, hash: '7f0f0de01e997d5d09909076097107d90c213d9a041ae2bddfe1b90a4c6a252d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17152, hash: '9810cac479d988a1a440c1ea36d30f24b1eb7e0c03360af709e3fde365afd907', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'inicio-control-de-pagos/index.html': {size: 32616, hash: '565c1e9004fd6b718d8882181a3cc9a0daa3f1cb0cec3f2f15a092bacb517427', text: () => import('./assets-chunks/inicio-control-de-pagos_index_html.mjs').then(m => m.default)},
    'index.html': {size: 86570, hash: '632b86bc9e0b3a41d571c9351b3b5ab10117df3d2fa36811870c0d983e208355', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-YOBTN3TQ.css': {size: 17550, hash: 'U8ys4LR6rvk', text: () => import('./assets-chunks/styles-YOBTN3TQ_css.mjs').then(m => m.default)}
  },
};

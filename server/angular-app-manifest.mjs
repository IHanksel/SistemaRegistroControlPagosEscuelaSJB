
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/SistemaRegistroControlPagosEscuelaSJB/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/SistemaRegistroControlPagosEscuelaSJB"
  },
  {
    "renderMode": 2,
    "route": "/SistemaRegistroControlPagosEscuelaSJB/inicio-control-de-pagos"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 28589, hash: 'db3a8454b785be605b34208fa55e0307c9063c5f42c74bbc530eaee880eeb5de', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17177, hash: 'c25cc6ec74c988b83ec6189ca688f050e55d1e593861938f93a958ca4672c797', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'inicio-control-de-pagos/index.html': {size: 33826, hash: '3aebf798e825d3f21d6fd656289daca3860d1f99d379acc86871e0248e37d55d', text: () => import('./assets-chunks/inicio-control-de-pagos_index_html.mjs').then(m => m.default)},
    'index.html': {size: 87780, hash: 'ba8e4e19022cd3d241c79df125b3f6c1a2e21ed5982c5bb08b0dc030705fc205', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5YCQL7LF.css': {size: 20263, hash: 'Ol7ROH0dcPE', text: () => import('./assets-chunks/styles-5YCQL7LF_css.mjs').then(m => m.default)}
  },
};

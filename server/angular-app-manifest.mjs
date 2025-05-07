
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
    'index.csr.html': {size: 28564, hash: 'eac97c19fc9e3b9ce5359e630b9f5a5ccbf4677548cb9ac7e41e55b2bfcaea2d', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17152, hash: 'c23928128a2ba08c4d5922b5f9e3452d1ae9924ac915672cbc1a9887602a1b2b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'inicio-control-de-pagos/index.html': {size: 33801, hash: '71b22c086f44b95e72f9afb59f092cdb767a0db06f18c69b19a77172f6fcd696', text: () => import('./assets-chunks/inicio-control-de-pagos_index_html.mjs').then(m => m.default)},
    'index.html': {size: 87755, hash: 'f8dcf096411d272142aa22f04b91b6bfb88a098fb9d09380605a0402ee1e4683', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5YCQL7LF.css': {size: 20263, hash: 'Ol7ROH0dcPE', text: () => import('./assets-chunks/styles-5YCQL7LF_css.mjs').then(m => m.default)}
  },
};


export default {
  basePath: '/SistemaRegistroControlPagosEscuelaSJB',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};

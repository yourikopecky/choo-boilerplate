const emitterFunc = (state, emitter) => {
  emitter.on('emitterExample', () => {
    // Do something here
    emitter.emit('render');
  });
};

export default (app) => {
  app.use(emitterFunc);
};

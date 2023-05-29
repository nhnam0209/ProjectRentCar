export const AuthMixins = {
  passwordGenerate() {},
  idGenerate() {
    const newID = Math.floor(Math.random()) * 1000;
    return newID;
  },
};

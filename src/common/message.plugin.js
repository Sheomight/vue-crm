export default {
  // eslint-disable-next-line 
  install: (app, option) => {

    app.config.globalProperties.$message = function (html) {
      window.M.toast({html})
    }

    app.config.globalProperties.$error = function (html) {
      window.M.toast({html: `[Ошибка] ${html}`})
    }
  }
}
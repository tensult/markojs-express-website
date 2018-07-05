var template = require('marko').load(require.resolve('./template.marko'));

exports.loginPage = (req,res)=> {
    template.render({},res)
      
  };
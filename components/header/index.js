require('./style.scss')

function createViewModel (params) {
    var dataModel = require('./data.json');
    var viewModel = ko.mapping.fromJS(dataModel);

    ko.mapping.fromJS({
        data: {
          try: params.try
        }
    },viewModel);
    $.cookie("userInfo",JSON.stringify(dataModel.data.userInfo));

    if(!params.try){
      base.ajaxGet('/work/user/user/getUserInfo', {}, function(result) {
        if(result && result.result === 'success'){
          ko.mapping.fromJS({
            data: {
              userInfo:result.data,
              loading:false
            }
          }, viewModel);
          $.cookie("userInfo",JSON.stringify(result.data));
        }
        if(params.initData){
          params.initData();
        }
      });
    }else{
      if(params.initData){
        params.initData();
      }
    }

    return viewModel;
}

ko.components.register('components_header', {
  viewModel: {
    createViewModel: createViewModel
  },
  template: require('./template.html')
});
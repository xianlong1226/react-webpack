require('./style.scss')

function createViewModel (params) {
    var viewModel = ko.mapping.fromJS(require('./data.json'));
    viewModel.data[params.page](true);
    viewModel.data.try(params.try);

    return viewModel;
}

ko.components.register('components_left', {
  viewModel: {
    createViewModel: createViewModel
  },
  template: require('./template.html')
});
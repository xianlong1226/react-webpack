// var util = require('components/util');
// require('components/header');
// require('components/left');
// require('components/footer');
// require('./components/example');

require('./style.scss');
require('./page.html');



function getdata(){
  $.ajax({
    url:"/category/root",
    data:{},
    type:"get",
    success:function(result){
      
    }
  })
}

$(document).ready(function() {
  
  getdata();

  $('#page').jqPaginator({
    totalCounts: 23,
    pageSize:10,
    visiblePages: 10,
    currentPage: 1,
    first:'<span>首页</span>',
    prev: '<span>上一页</span>',
    page:'<span>{{page}}</span>',
    next: '<span>下一页</span>',
    last: '<span>尾页</span>',
    onPageChange: function (num, type) {
        $('#text').html('当前第' + num + '页');
    }
  });
});
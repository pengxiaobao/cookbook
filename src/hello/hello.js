/**
 * @file index
 * @author anima
 */
import './hello.less';
import './hello.html';
import {$} from '../common/base';
import util from '../common/util';
let Dialog = require('antd-mobile-h5/components/dialog');
// 引入模板
var tpl = require('./hello.atpl');

const page = {
  init() {
    new Dialog({
      type: 'image',
      closeAble: function() {
        var cancel = this.get('cancel');
        cancel && cancel.call(this);
      },
      topTitle: true,
      buttons: [],
      content: tpl({ data: { name: '小宝' } }), //也可以是文本和html
      title: '标题文字',
      mask: true
    }).show();

    $('#main').html(tpl({ data: { name: '小宝' } }));

  },
};

page.init();
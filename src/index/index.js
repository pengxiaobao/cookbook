/**
 * @file index
 * @author anima
 */
import './index.less';
import './index.html';
import { $ } from '../common/base';
import render from './index.atpl';

const page = {
  init() {
    $('#main').html('hell啥地方都是 word');
  },
};

page.init();


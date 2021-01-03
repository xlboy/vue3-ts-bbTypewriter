import { App as VM } from "vue";
import {
  Button,
  List,
  Cell,
  Tabbar,
  TabbarItem,
  Icon,
  NavBar,
  Field,
  ActionSheet,
  Uploader,
  Popup,
  NumberKeyboard,
  Popover,
  SwipeCell,
  Tag,
  Dialog,
  Form,
  Col,
  Row
} from "vant";

const plugins = [
  Button,
  List,
  Cell,
  Tabbar,
  TabbarItem,
  Icon,
  NavBar,
  Field,
  ActionSheet,
  Uploader,
  Popup,
  NumberKeyboard,
  Popover,
  SwipeCell,
  Tag,
  Dialog.Component,
  Form,
  Col,
  Row
];

export const vantPlugins = {
  install: function (vm: VM) {
    plugins.forEach(item => {
      vm.component(item.name, item);
    });
  }
};

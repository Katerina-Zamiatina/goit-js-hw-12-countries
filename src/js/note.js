import '@pnotify/core/dist/PNotify.css';
import '@pnotify/mobile/dist/PNotifyMobile.css';
import '@pnotify/core/dist/Material.css';
import 'material-design-icons/iconfont/material-icons.css';
import { defaults } from '@pnotify/core';
import { error } from '@pnotify/core';
defaults.styling = 'material';
defaults.icons = 'material';

export default error;

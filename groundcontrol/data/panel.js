/*
 * This Source Code is subject to the terms of the Mozilla Public License
 * version 2.0 (the 'License'). You can obtain a copy of the License at
 * http://mozilla.org/MPL/2.0/.
 */

function setEnv(evt) {
  let env = evt.target.className;
  self.port.emit('env', env);
}

let buttons = document.querySelectorAll('button');
for (let button of buttons) {
  button.addEventListener('click', setEnv);
}

var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    cm.sendOk("救命啊……那些怪物吓得我一动都不敢动！\r\n\r\n#b（消灭所有怪物后，再进行对话吧。）");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;
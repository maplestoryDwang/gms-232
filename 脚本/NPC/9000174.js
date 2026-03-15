var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    if (status == 0) {
      cm.dispose();
    }
    status--;
  }
  cm.sendOk("灵魂真是世间最奇妙的存在啊……");
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;
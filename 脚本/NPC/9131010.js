var status = -1;
function action(f, W, U) {
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  cm.sendOk_Bottom("要抓紧时间了，神那！");
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;
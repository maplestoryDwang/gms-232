var status = 0;
function start() {
  status = -1;
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status >= 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  if (status == 0) {
    cm.sendOk("我丢失了藏宝图,它在金银岛的某个位子~~~");
    cm.dispose();
  }
}
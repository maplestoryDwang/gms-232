var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNext("我可以将你传送到天鹰或火焰龙所在地, 那么你想去 \r\n#b#L0# 火焰龙森林#l\r\n#b#L1# 天鹰森林#l");
    } else {
      if (status === V++) {
        if (U == 0) {
          cm.warp(924000200, 0, false);
        } else if (U == 1) {
          cm.warp(924000201, 0, false);
        }
        cm.dispose();
      }
    }
  }
}
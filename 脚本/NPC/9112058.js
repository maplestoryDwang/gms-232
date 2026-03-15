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
      cm.askYesNo("让你们见识下我九尾狐的力量！！\r\n（※接受时将开始暗首领怪战。）", 4, 9111015);
    } else if (status === V++) {
      cm.dispose();
      cm.openNpc("蘑菇神社_九尾狐暴走");
    }
  }
}
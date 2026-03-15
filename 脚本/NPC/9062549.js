var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(Z, k, m) {
  if (status == 0 && Z == 0) {
    cm.dispose();
    return;
  }
  if (Z == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = m;
  var H = -1;
  if (status <= H++) {
    cm.dispose();
  } else {
    if (status === H++) {
      cm.sendNormalTalk("你想要成为顶流人气的狩猎节目创作者吗？", 4, 9062549, false, false, 0);
    } else if (status === H++) {
      cm.dispose();
    }
  }
}
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
      cm.sendNormalTalk("(拿走了用神秘文字书写的书本。)", 0, 1058002, false, false);
    } else if (status === V++) {
      if (!cm.haveItem(4033183)) {
        cm.gainItem(4033183, 1);
      }
      cm.dispose();
    }
  }
}
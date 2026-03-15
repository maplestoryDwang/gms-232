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
      cm.sendNormalTalk("……我想一个人静静。", 0, 3003103, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("…………", 0, 3003103, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("……不要受伤。", 0, 3003103, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("…………", 0, 3003103, true, true);
          } else if (status === V++) {
            cm.sendNormalTalk("对不起。", 0, 3003103, true, false);
            cm.dispose();
          }
        }
      }
    }
  }
}
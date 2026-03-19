var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestFinished(40051)) {
    cm.dispose();
  } else {
    action1(f, E, e);
  }
}
function action1(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.spawnMobLimit(9300745, 1, 491, -6, 5);
      cm.spawnMobLimit(9300745, 1, 59, -6, 5);
      cm.sendNormalTalk("治疗馆在村子的最左边！就像现在一样一路突破到底！明白了吗？", 41, 2400005, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk('嗯，走吧。', 41, 2400006, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#face2# #b(还不错嘛？至少不会拖我后腿……哼，虽然有点烦人，事到如今我就好好利用你吧。)", 41, 2400005, true, true);
        } else if (status === V++) {
          cm.setInGameDirectionMode(false, true, false);
          cm.spawnMobLimit(9300745, 1, -187, -213, 5);
          cm.spawnMobLimit(9300745, 1, -386, -78, 5);
          cm.dispose();
        }
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;
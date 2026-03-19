var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.isQuestActive(40407)) {
    action1(f, E, e);
  } else {
    cm.dispose();
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
      cm.spawnMobLimit(9300767, 1, -1711, 28, 100);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#face11#……影子骑士团？果然……#p2450000#也和影子骑士团有关联吗……？", 41, 2400006, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("……这是哨兵。将他们击退，再深入点观察吧。", 41, 2400005, true, true);
        } else if (status === V++) {
          cm.dispose();
          cm.setInGameDirectionMode(false, true, false);
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
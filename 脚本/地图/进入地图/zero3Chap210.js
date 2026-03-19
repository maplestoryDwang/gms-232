var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (cm.isQuestFinished(40307)) {
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
      cm.spawnMobLimit(9300767, 1, -181, 543, 100);
      cm.spawnMobLimit(9300767, 1, -81, 543, 100);
      cm.spawnMobLimit(9300767, 1, 81, 543, 100);
      cm.spawnMobLimit(9300767, 1, 181, 543, 100);
      cm.spawnMobLimit(9300767, 1, 281, 543, 100);
      cm.spawnMobLimit(9300767, 1, 381, 543, 100);
      cm.spawnMobLimit(9300767, 1, 481, 543, 100);
      cm.spawnMobLimit(9300767, 1, 581, 543, 100);
      cm.spawnMobLimit(9300767, 1, 681, 543, 100);
      cm.spawnMobLimit(9300767, 1, 781, 543, 100);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#face7#……影子骑士团。果然，绑架#p2440000#和#p2440002#的是影子骑士团啊。可恶，这些家伙比预想的更快。", 41, 2400005, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#face10#……抱歉。", 41, 2400006, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("算了，再这么磨蹭#p2440000#和#p2440002#就会很危险了，我们快去救他们！", 41, 2400005, true, true);
          } else if (status === V++) {
            cm.setInGameDirectionMode(false, true, false);
            cm.spawnMobLimit(9300767, 1, 1509, 543, 100);
            cm.dispose();
          }
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
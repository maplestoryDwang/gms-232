var status = -1;
var selectionLog = [];
function action(f, E, e) {
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
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.useItem(2210132, false);
      cm.npc_ChangeController(1530554, "oid=37394924", 927, 78, 3, 877, 977, 1, false, false);
      cm.npc_SetSpecialAction("oid=37394924", 'summon', 0, 0);
      cm.setAmbience("Ambience.img/wind", 100, 60);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom('难道是我听错了……', 37, 1530270, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("也对，这个时间怎么可能有人在这里弹钢琴呢。", 37, 1530270, true, true);
          } else if (status === V++) {
            cm.setInGameDirectionMode(false, true, false);
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
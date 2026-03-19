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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9001062, "oid=298938", -269, 35, 21, -319, -219, 1, false, 0, false);
      cm.updateInfoQuest(15143, "reward=1;successcount=0");
      cm.fieldEffect_Effect14("PoloFritto/msg6", 7, 1);
      cm.fieldEffect_ScreenMsg("Map/Effect2.img/PoloFritto2/msg1");
      cm.curNodeEventEnd(true);
      cm.inGameDirectionEvent_AskAnswerTime(100);
    } else {
      if (status === V++) {
        cm.loveDanceInit([4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
        cm.loveDanceStatus(1);
        cm.fieldEffect_ScreenMsg("defense/count");
        cm.fieldEffect_ScreenMsg("killing/first/start");
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else if (status === V++) {
        cm.spawnMobLimit(9420005, 1, -357, 35, 100);
        cm.spawnMobLimit(9420005, 1, -652, 35, 100);
        cm.spawnMobLimit(9420005, 1, 203, 35, 100);
        cm.spawnMobLimit(9600001, 1, 202, 35, 100);
        cm.spawnMobLimit(9600001, 1, -448, 35, 100);
        cm.spawnMobLimit(9600001, 1, -46, 35, 100);
        cm.loveDanceStatus(2);
        cm.dispose();
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;
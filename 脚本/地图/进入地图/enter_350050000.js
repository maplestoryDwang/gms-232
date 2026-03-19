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
      cm.npc_ChangeController(1540446, 'oid=36604', 1808, 2, 3, 1758, 1858, 0, false, 0, false);
      cm.npc_ChangeController(1540458, "oid=36605", 1151, 2, 4, 1101, 1201, 4, true, 0, false);
      cm.npc_ChangeController(1540458, "oid=36606", 940, 2, 2, 890, 940, 4, true, 0, false);
      cm.npc_ChangeController(1540458, 'oid=36607', 1080, 2, 4, 1030, 1130, 4, true, 0, false);
      cm.npc_ChangeController(1540458, 'oid=36608', 870, 2, 2, 860, 920, 4, true, 0, false);
      cm.npc_ChangeController(1540458, "oid=36609", 800, 2, 5, 750, 820, 4, true, 0, false);
      cm.npc_ChangeController(1540458, 'oid=36610', 1010, 2, 4, 980, 1060, 4, true, 0, false);
      cm.npc_ChangeController(1540729, "oid=36611", 1290, 2, 4, 1240, 1340, 4, true, 0, false);
      cm.setAmbience("Ambience.img/flyingdeck", 100, 60);
      cm.updateInfoQuest(33216, "title=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_ProcessOnOffLayer('00', "Map/Effect2.img/blackHeaven/title3", 0, 1500, 0, 0, 12, 4, 0);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else if (status === V++) {
            cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1500, 0, 0, 0, 0, 0);
            cm.setInGameDirectionMode(false, true, false);
            cm.updateInfoQuest(33128, "act1=350013000;act2=350024300;act3=350033100;act4=350044000;act5=350050000");
            cm.forceStartQuest(33124, '');
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
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
  if (!cm.isQuestActive(64018) && !cm.isQuestActive(64029)) {
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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.Hidden_background('guide137', 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 1440, 302);
      cm.inGameDirectionEvent_AskAnswerTime(120);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.inGameDirectionEvent_AskAnswerTime(120);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_OneTimeAction("莫奈德_抬东西_第一步", 9999);
          cm.inGameDirectionEvent_QTE(1000);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction('oid=建筑残骸78', "state2", -1, 0);
            cm.inGameDirectionEvent_OneTimeAction("莫奈德_抬东西_第二步", 9999);
            cm.inGameDirectionEvent_QTE(1000);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=建筑残骸78", "state3", -1, 0);
              cm.inGameDirectionEvent_OneTimeAction("莫奈德_抬东西_第三步", 9999);
              cm.inGameDirectionEvent_QTE(1000);
            } else {
              if (status === V++) {
                cm.setNpcSpecialActionReset("oid=建筑残骸78");
                cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT1/reactordrop3", 128);
                cm.npc_SetSpecialAction("oid=建筑残骸78", "hit", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(900);
              } else {
                if (status === V++) {
                  cm.npc_LeaveField("oid=建筑残骸78");
                  cm.npc_LeaveField("oid=建筑残骸78");
                  cm.setInGameDirectionMode(false, true, false);
                  if (cm.isQuestActive(64018)) {
                    if (!cm.haveItem(4036369)) {
                      cm.getMap().spawnAutoDrop(4036369, new java.awt.Point(1356, 302));
                    }
                  } else if (cm.isQuestActive(64029)) {
                    cm.getMap().spawnAutoDrop(4036371, new java.awt.Point(1356, 302));
                  }
                  cm.dispose();
                }
              }
            }
          }
        }
      }
    }
  }
}
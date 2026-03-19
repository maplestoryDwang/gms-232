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
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -727, -90);
      cm.npc_ChangeController(2074100, "oid=1943472", -987, -129, 99, -1037, -937, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1943472", "summon", 0, 0);
      cm.npc_ChangeController(2074105, "oid=1943473", -657, -64, 92, -707, -607, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1943473", "summon", 0, 0);
      cm.npc_ChangeController(2074136, "oid=1943474", -600, -33, 92, -650, -550, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1943474", "summon", 0, 0);
      cm.npc_ChangeController(2074107, "oid=1943475", -547, -19, 90, -597, -497, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1943475", 'summon', 0, 0);
      cm.npc_ChangeController(2074150, "oid=1943476", -499, -19, 90, -549, -449, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1943476", 'summon', 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.sendNormalTalk_Bottom("哦……火，火熄灭了！", 37, 2074136, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("额……这……这是什么……", 37, 2074105, true, true);
      } else {
        if (status === V++) {
          cm.npc_setForceFlip("oid=1943472", 1);
          cm.sendNormalTalk_Bottom("#face3##fs22#……都让开！", 37, 2074100, true, true);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=1943472", 1, 600, 200);
            cm.inGameDirectionEvent_AskAnswerTime(3000);
          } else {
            if (status === V++) {
              cm.npc_LeaveField("oid=1943472");
              cm.sendNormalTalk_Bottom("小可爱啊！咳咳。", 37, 2074105, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("赶紧去追上……小可爱。", 37, 2074105, true, true);
              } else if (status === V++) {
                cm.dispose();
                cm.warp(224000083, 2);
              }
            }
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
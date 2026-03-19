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
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -734, -36);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -727, -90);
        cm.npc_ChangeController(2074100, "oid=1943281", -795, -68, 7, -845, -745, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=1943281", "summon", 0, 0);
        cm.npc_ChangeController(2074105, "oid=1943282", -657, -64, 5, -707, -607, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=1943282", 'summon', 0, 0);
        cm.npc_ChangeController(2074136, "oid=1943283", -600, -33, 5, -650, -550, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=1943283", "summon", 0, 0);
        cm.npc_ChangeController(2074107, "oid=1943284", -547, -19, 4, -597, -497, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=1943284", "summon", 0, 0);
        cm.npc_ChangeController(2074150, "oid=1943285", -499, -19, 4, -549, -449, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=1943285", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=1943281", "pain3", -1, 1);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.sendNormalTalk_Bottom("小可爱，小可爱啊！你没事吗，小可爱啊！", 37, 2074105, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face2#额啊啊！我要让你们遭受天谴！", 37, 2074154, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("呃呃呃……力量……", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('我们……全都完蛋了。', 37, 2074107, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#b(小可爱身上发出了奇怪的光芒！)", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else if (status === V++) {
                  cm.gainExp(397767);
                  cm.updateInfoQuest(30454, "gExpCheck=1");
                  cm.forceStartQuest(30454, '');
                  cm.forceCompleteQuest(30454);
                  cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                  cm.dispose();
                  cm.warp(224000093, 1, true);
                  cm.setInGameDirectionMode(false, true, false);
                }
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
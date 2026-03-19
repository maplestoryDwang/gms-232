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
      cm.npc_ChangeController(2074151, "oid=1942851", -990, -137, 115, -1040, -940, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=1942851", 'summon', 0, 0);
      cm.npc_ChangeController(2074100, "oid=1942852", -795, -68, 110, -845, -745, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1942852", 'summon', 0, 0);
      cm.npc_ChangeController(2074105, "oid=1942853", -657, -64, 107, -707, -607, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1942853", "summon", 0, 0);
      cm.npc_ChangeController(2074136, "oid=1942854", -600, -33, 107, -650, -550, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1942854", "summon", 0, 0);
      cm.npc_ChangeController(2074107, "oid=1942855", -547, -19, 105, -597, -497, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=1942855", 'summon', 0, 0);
      cm.npc_ChangeController(2074150, "oid=1942856", -499, -19, 105, -549, -449, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1942856", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=1942852", 'pain3', -1, 1);
      cm.npc_SetSpecialAction("oid=1942851", "die", -1, 1);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.sendNormalTalk_Bottom("#face2#哎哟……哎哟……", 37, 2074154, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("鬼怪停止了动作，\r\n好像稍微冷静了一点……\r\n小可爱的状态并不乐观。", 37, 2074105, true, true);
      } else {
        if (status === V++) {
          cm.updateInfoQuest(30453, "gExpCheck=1");
          cm.forceStartQuest(30453, '');
          cm.gainExp(284119);
          cm.forceCompleteQuest(30453);
          cm.inGameDirectionEvent_AskAnswerTime(400);
          cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
        } else if (status === V++) {
          cm.dispose();
          cm.warp(224000092, 1, true);
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
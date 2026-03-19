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
      cm.npc_ChangeController(9400667, "oid=7619107", 544, 190, 2, 494, 594, 0, true, false);
      cm.npc_SetSpecialAction("oid=7619107", "summon", 0, 0);
      cm.npc_ChangeController(9400580, "oid=7619108", 850, 140, 15, 800, 900, 1, true, false);
      cm.npc_SetSpecialAction("oid=7619108", "summon", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 756, 199);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.setPartner(1, 9400646, 80011692, 0);
      cm.npc_SetSpecialAction("oid=7619107", "jumpattack", 0, 1);
      cm.sendNormalTalk_Bottom("#b艾丽卡，躲到后面！", 57, 0, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9402250/Attack7", 100);
        cm.npc_SetSpecialAction("oid=7619107", "howl", 0, 1);
        cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 3000, 540, 150);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.userSetFieldFloating(867201810, 3, 3, 2);
            cm.inGameDirectionEvent_AskAnswerTime(4000);
            cm.effect_Text(["#r#fn黑体##fs26#冰霜白雪人#k"], [100, 2000, 4, 80, 200, 1, 4, 0, 0, 0]);
            cm.effect_Text(["#fn黑体##fs16#变异白雪人"], [100, 1500, 4, 80, 250, 1, 4, 0, 0, 0]);
          } else {
            if (status === V++) {
              cm.userSetFieldFloating(867201810, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else if (status === V++) {
                  cm.npc_LeaveField("oid=7619107");
                  cm.npc_LeaveField("oid=7619107");
                  cm.npc_LeaveField("oid=7619108");
                  cm.npc_LeaveField("oid=7619108");
                  cm.setInGameDirectionMode(false, true, false);
                  cm.playerMessage(-1, "消灭冰霜白雪人吧。");
                  cm.setPartner(1, 9400646, 80011692, 0);
                  cm.spawnMobLimit(9402267, 1, 544, 151, 1);
                  cm.spawnMobLimit(9402248, 1, 602, 151, 1);
                  cm.spawnMobLimit(9402255, 1, 412, 151, 5);
                  cm.spawnMobLimit(9402255, 1, 352, 151, 5);
                  cm.spawnMobLimit(9402255, 1, 292, 151, 5);
                  cm.spawnMobLimit(9402255, 1, 232, 151, 5);
                  cm.spawnMobLimit(9402255, 1, 172, 151, 5);
                  cm.spawnMobLimit(9402256, 1, 827, 150, 1);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;
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
      cm.npc_ChangeController(9400667, "oid=4236071", 520, 330, 16, 470, 570, 1, true, false);
      cm.npc_SetSpecialAction("oid=4236071", "summon", 0, 0);
      cm.npc_ChangeController(9400617, "oid=4236072", 790, 300, 22, 740, 840, 1, true, false);
      cm.npc_SetSpecialAction("oid=4236072", "summon", 0, 0);
      cm.npc_ChangeController(9400618, "oid=4236073", 740, 300, 21, 690, 790, 1, true, false);
      cm.npc_SetSpecialAction("oid=4236073", "summon", 0, 0);
      cm.npc_ChangeController(9400619, "oid=4236074", 640, 300, 20, 590, 690, 1, true, false);
      cm.npc_SetSpecialAction("oid=4236074", "summon", 0, 0);
      cm.npc_ChangeController(9400617, "oid=4236075", 540, 300, 16, 490, 590, 1, true, false);
      cm.npc_SetSpecialAction("oid=4236075", "summon", 0, 0);
      cm.npc_ChangeController(9400619, "oid=4236076", 590, 300, 20, 540, 640, 1, true, false);
      cm.npc_SetSpecialAction("oid=4236076", "summon", 0, 0);
      cm.npc_ChangeController(9400618, "oid=4236077", 690, 300, 21, 640, 740, 1, true, false);
      cm.npc_SetSpecialAction("oid=4236077", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=4236071", "ear", 0, 1);
      cm.sendNormalTalk_Bottom("怪……怪物！！怪物来了！！！", 37, 9400596, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetForceMove("oid=4236072", -1, 2000, 210);
        cm.npc_SetForceMove("oid=4236073", -1, 2000, 300);
        cm.npc_SetForceMove("oid=4236074", -1, 2000, 270);
        cm.npc_SetForceMove("oid=4236075", -1, 2000, 230);
        cm.npc_SetForceMove("oid=4236076", -1, 2000, 200);
        cm.npc_SetForceMove("oid=4236077", -1, 2000, 250);
        cm.npc_SetSpecialAction("oid=4236071", "jumpattack", 0, 1);
        cm.sendNormalTalk_Bottom("哇啊啊啊啊啊！", 37, 9400619, true, true);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=4236071", "howl", 0, 1);
          cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 3000, 520, 330);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.npc_LeaveField("oid=4236072");
              cm.npc_LeaveField("oid=4236072");
              cm.npc_LeaveField("oid=4236073");
              cm.npc_LeaveField("oid=4236073");
              cm.npc_LeaveField("oid=4236074");
              cm.npc_LeaveField("oid=4236074");
              cm.npc_LeaveField("oid=4236075");
              cm.npc_LeaveField("oid=4236075");
              cm.npc_LeaveField("oid=4236076");
              cm.npc_LeaveField("oid=4236076");
              cm.npc_LeaveField("oid=4236077");
              cm.npc_LeaveField("oid=4236077");
              cm.inGameDirectionEvent_AskAnswerTime(2000);
              cm.effect_Text(["#r#fn黑体##fs26#??#k"], [100, 4000, 4, 80, 200, 1, 4, 0, 0, 0]);
              cm.effect_Text(["#fn黑体##fs16#带来暴风雪的怪物"], [100, 1500, 4, 80, 250, 1, 4, 0, 0, 0]);
            } else {
              if (status === V++) {
                cm.userSetFieldFloating(867200630, 3, 3, 2);
                cm.inGameDirectionEvent_AskAnswerTime(6000);
              } else {
                if (status === V++) {
                  cm.userSetFieldFloating(867200630, 0, 0, 0);
                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else if (status === V++) {
                    cm.npc_LeaveField("oid=4236071");
                    cm.npc_LeaveField("oid=4236071");
                    cm.setInGameDirectionMode(false, true, false);
                    cm.spawnMobLimit(9402267, 1, 520, 315, 1);
                    cm.spawnMobLimit(9402248, 1, -299, 315, 1);
                    cm.addPopupSay(9400581, 2000, "亚皮纳斯突击！！！", '', 0);
                    cm.spawnMobLimit(9402314, 1, -675, 315, 5);
                    cm.spawnMobLimit(9402314, 1, -625, 315, 5);
                    cm.spawnMobLimit(9402302, 1, -600, 315, 1);
                    cm.spawnMobLimit(9402314, 1, -575, 315, 5);
                    cm.spawnMobLimit(9402314, 1, -525, 315, 5);
                    cm.spawnMobLimit(9402314, 1, -475, 315, 5);
                    cm.addPopupSay(9400583, 2000, "#face1#在暴风雪中无法恢复！", '', 0);
                    cm.addPopupSay(9400581, 2000, "#face1#在暴风雪中战斗，到外面恢复！", '', 0);
                    cm.addPopupSay(9400583, 2000, "#face1#碰到冰块会被冻住！用跳跃躲开！", '', 0);
                    cm.forceJoinEvent("莫奈德_地图_Act1.4_雪地冰怪");
                    cm.dispose();
                    cm.cancelItem(2210207);
                  }
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
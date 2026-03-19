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
      cm.npc_ChangeController(9400668, "oid=3696672", 1100, 330, 3, 1050, 1150, 1, true, false);
      cm.npc_SetSpecialAction("oid=3696672", "summon", 0, 0);
      cm.npc_ChangeController(9400617, "oid=3696673", 790, 300, 3, 740, 840, 1, true, false);
      cm.npc_SetSpecialAction("oid=3696673", "summon", 0, 0);
      cm.npc_ChangeController(9400618, "oid=3696674", 740, 300, 3, 690, 790, 1, true, false);
      cm.npc_SetSpecialAction("oid=3696674", "summon", 0, 0);
      cm.npc_ChangeController(9400619, "oid=3696675", 640, 300, 2, 590, 690, 1, true, false);
      cm.npc_SetSpecialAction("oid=3696675", "summon", 0, 0);
      cm.npc_ChangeController(9400617, "oid=3696676", 540, 300, 2, 490, 590, 1, true, false);
      cm.npc_SetSpecialAction("oid=3696676", "summon", 0, 0);
      cm.npc_ChangeController(9400619, "oid=3696677", 590, 300, 2, 540, 640, 1, true, false);
      cm.npc_SetSpecialAction("oid=3696677", 'summon', 0, 0);
      cm.npc_ChangeController(9400618, "oid=3696678", 690, 300, 2, 640, 740, 1, true, false);
      cm.npc_SetSpecialAction("oid=3696678", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=3696672", "gas", 0, 1);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetForceMove("oid=3696673", -1, 2000, 210);
        cm.npc_SetForceMove("oid=3696674", -1, 2000, 300);
        cm.npc_SetForceMove("oid=3696675", -1, 2000, 270);
        cm.npc_SetForceMove("oid=3696676", -1, 2000, 230);
        cm.npc_SetForceMove("oid=3696677", -1, 2000, 200);
        cm.npc_SetForceMove("oid=3696678", -1, 2000, 250);
        cm.npc_SetSpecialAction("oid=3696672", "pound", 0, 1);
        cm.sendNormalTalk_Bottom('哇啊啊啊啊啊！', 37, 9400619, false, true);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=3696672", "armstretch", 0, 1);
          cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 3000, 1100, 330);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.npc_LeaveField("oid=3696673");
              cm.npc_LeaveField("oid=3696673");
              cm.npc_LeaveField("oid=3696674");
              cm.npc_LeaveField("oid=3696674");
              cm.npc_LeaveField("oid=3696675");
              cm.npc_LeaveField("oid=3696675");
              cm.npc_LeaveField("oid=3696676");
              cm.npc_LeaveField("oid=3696676");
              cm.npc_LeaveField("oid=3696677");
              cm.npc_LeaveField("oid=3696677");
              cm.npc_LeaveField("oid=3696678");
              cm.npc_LeaveField("oid=3696678");
              cm.inGameDirectionEvent_AskAnswerTime(2000);
              cm.effect_Text(["#r#fn黑体##fs26#??#k"], [100, 4000, 4, 80, 200, 1, 4, 0, 0, 0]);
              cm.effect_Text(["#fn黑体##fs16#喷毒气 怪物"], [100, 1500, 4, 80, 250, 1, 4, 0, 0, 0]);
            } else {
              if (status === V++) {
                cm.userSetFieldFloating(867200940, 3, 3, 2);
                cm.inGameDirectionEvent_AskAnswerTime(6000);
              } else {
                if (status === V++) {
                  cm.userSetFieldFloating(867200940, 0, 0, 0);
                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else if (status === V++) {
                    cm.npc_LeaveField("oid=3696672");
                    cm.npc_LeaveField("oid=3696672");
                    cm.setInGameDirectionMode(false, true, false);
                    cm.forceJoinEvent("莫奈德_地图_Act1.9_再战剧毒怪");
                    cm.addPopupSay(9400583, 3000, "#face0#我来护卫你！", '', 0);
                    cm.spawnMobLimit(9402313, 1, 225, 291, 3);
                    cm.spawnMobLimit(9402313, 1, 130, 291, 3);
                    cm.spawnMobLimit(9402313, 1, 430, 291, 3);
                    cm.spawnMobLimit(9402304, 1, 365, 291, 1);
                    cm.spawnMobLimit(9402314, 1, 455, 291, 1);
                    cm.spawnMobLimit(9402268, 1, 1100, 291, 1);
                    cm.playerMessage(-1, "埃特金准备发动致命攻击。快俯下身子躲开");
                    cm.addPopupSay(9400583, 1500, "#face1#当心！", '', 0);
                    cm.addPopupSay(9400583, 1500, "#face1#碰到毒潭会很危险！快点离开！", '', 0);
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;
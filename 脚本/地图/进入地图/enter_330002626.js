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
      cm.npc_ChangeController(1530629, "oid=39828683", 1156, -200, 7, 1106, 1206, 1, false, false);
      cm.npc_SetSpecialAction("oid=39828683", "summon", 0, 0);
      cm.npc_ChangeController(1530630, "oid=39828684", 1034, -90, 5, 984, 1084, 1, true, false);
      cm.npc_SetSpecialAction("oid=39828684", "summon", 0, 0);
      cm.npc_ChangeController(1530631, "oid=39828685", 1223, -120, 11, 1173, 1273, 1, false, false);
      cm.npc_SetSpecialAction("oid=39828685", "summon", 0, 0);
      cm.npc_ChangeController(1530624, "oid=39828686", 1295, -34, 4, 1245, 1345, 1, true, false);
      cm.npc_SetSpecialAction("oid=39828686", 'summon', 0, 0);
      cm.npc_ChangeController(1530632, "oid=39828687", 1165, 0, 3, 1115, 1215, 1, false, false);
      cm.npc_SetSpecialAction("oid=39828687", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(10, 1500, 10, 1000, -100);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.userSetFieldFloating(330002626, 0, 60, 3000);
          cm.npc_SetSpecialAction("oid=39828683", "sing", -1, 1);
          cm.npc_SetSpecialAction("oid=39828684", 'sing', -1, 1);
          cm.npc_SetSpecialAction("oid=39828685", "sing", -1, 1);
          cm.npc_SetSpecialAction("oid=39828686", "sing", -1, 1);
          cm.npc_SetSpecialAction("oid=39828687", "sing", -1, 1);
          cm.onTeleport(0, 3, cm.getPlayer().getId(), 740, -63);
          cm.addPopupSay(1530020, 3500, "使用↑   ↓    spacebar 键！", '', 0);
          cm.inGameDirectionEvent_OneTimeAction("好友故事_弹吉他", 1000000);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.onScriptMessage_音乐游戏('', 0, 370, 60);
            } else {
              if (status === V++) {
                cm.onScriptMessage_音乐游戏("Sound/Bgm42.img/TheBeast", 1, 0, 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else if (status === V++) {
                    if (f <= 0) {
                      cm.warp(330002626, 0);
                    } else {
                      cm.warp(330002606, 0);
                    }
                    cm.setInGameDirectionMode(false, true, false);
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
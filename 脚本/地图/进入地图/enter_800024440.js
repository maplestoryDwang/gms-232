var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
      cm.forceStartQuest(58777, '');
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9111036, "oid=3896500", 755, -60, 15, 705, 805, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=3896500", "summon", 0, 0);
      cm.npc_ChangeController(9111035, "oid=3896501", 600, -60, 17, 550, 650, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3896501", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#来人，大佛祭要用的材料不够。\r\n你到村里去买些干净的黄瓜回来。", 37, 9111036, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#……黄瓜？您说要在祭祀中使用黄瓜吗？", 37, 9111035, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=3896500"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.sendNormalTalk_Bottom("#face0#你一个佣人，是在质疑我的话吗？叫你干嘛就干嘛，还不快去？！", 37, 9111036, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3896501"], [0, 0, 0, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#是……我这就去。", 37, 9111035, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else if (status === V++) {
                        cm.npc_LeaveField("oid=3896500");
                        cm.npc_LeaveField("oid=3896500");
                        cm.npc_LeaveField("oid=3896501");
                        cm.npc_LeaveField("oid=3896501");
                        cm.eventSKill(0);
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
  }
}
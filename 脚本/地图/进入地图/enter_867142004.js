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
      cm.npc_ChangeController(9401090, "oid=200566", -2080, 3344, 8, -2130, -2030, 1, false, 0, false);
      cm.npc_ChangeController(9401085, "oid=5582907", -2298, 3344, 1);
      cm.npc_ChangeController(9401084, "oid=5582908", -2602, 3344, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.npc_SetSpecialAction("oid=5582907", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=5582908", "summon", 0, 0);
      cm.sendNormalTalk_Bottom("我们说好的，现在帮我启动#b赛恩的前本体#k吧。", 56, 0, 0, 1);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_setForceFlip("oid=5582907", 1);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("啊啊，这是？这是……", 36, 9401085, 0, 1);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=5582907", 1, 200, 200);
            cm.inGameDirectionEvent_AskAnswerTime(3200);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("把这个电闸放上去就行。", 36, 9401085, 0, 1);
            } else {
              if (status === V++) {
                cm.npc_setForceFlip("oid=5582907", -1);
                cm.forceCompleteQuest(64941);
                cm.inGameDirectionEvent_AskAnswerTime(3200);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom('……？？？', 56, 0, 0, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('……', 36, 9400436, 1, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#哈哈哈哈！我取消刚刚的话。奥利弗也是笨蛋呢。", 36, 9401085, 1, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#h0#……要不我们把刚刚关闭的那个功能……重新打开吧？", 36, 9401084, 1, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("算了，真的是……我不忍心看他独自在这里。", 56, 0, 1, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("哼……", 36, 9401084, 1, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("我们快动手吧。", 56, 0, 1, 1);
                            } else if (status === V++) {
                              cm.setStandAloneMode(false);
                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                              cm.warp(867142003, 0, false);
                              cm.eventSKill(0);
                              cm.setInGameDirectionMode(false, true, false);
                              cm.forceStartQuest(64918, '');
                              cm.npc_LeaveField("oid=5582907");
                              cm.npc_LeaveField("oid=5582908");
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
    }
  }
}
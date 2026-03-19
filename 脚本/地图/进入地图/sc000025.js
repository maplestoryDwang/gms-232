var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  var V = "action" + cm.getNumberFromQuestCustomData(58900);
  eval(V)(f, E, e);
}
function action0(f, E, e) {
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
      if (!cm.isQuestFinished(58927) && cm.isQuestFinished(58925) || !cm.isQuestFinished(58940) && cm.isQuestFinished(58938) || !cm.isQuestFinished(58968) && cm.isQuestFinished(58966)) {
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(9130109, "oid=539086101", -36, 44, 17, -86, 14, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=539086101", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=539086101", -1, 300, 100);
          cm.sendNormalTalk("嗯？你是？", 5, 9130109, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("你不能进去。\r\n谁都不能进去。", 5, 9130109, true, true);
          } else if (status === V++) {
            cm.npc_LeaveField("oid=539086101");
            cm.npc_LeaveField("oid=539086101");
            cm.spawnMobLimit(9450037, 1, -336, 62, 1);
            cm.setStandAloneMode(false);
            cm.eventSKill(0);
            cm.setInGameDirectionMode(false, true, false);
            cm.updateInfoQuest(58973 + cm.getNumberFromQuestCustomData(58900), "m035=clear;dr1=clear;m037=clear");
            cm.dispose();
          }
        }
      }
    }
  }
}
function action1(f, E, e) {
  action0(f, E, e);
}
function action2(f, E, e) {
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
      if (!cm.isQuestFinished(58927) && cm.isQuestFinished(58925) || !cm.isQuestFinished(58940) && cm.isQuestFinished(58938) || !cm.isQuestFinished(58968) && cm.isQuestFinished(58966)) {
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(9130109, "oid=457885183", -36, 44, 17, -86, 14, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=457885183", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=457885183", -1, 300, 100);
          cm.sendNormalTalk("嗯？……菖蒲？天啊。\r\n我做梦都没想到你会来这儿。", 5, 9130109, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk(" 水镜，你还是老样子啊……嗯……", 17, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("哈，居然说老样子，怎么可能。\r\n我可是瘦了很多的？！？！？！？\r\n 不过，你怎么会来这里？", 5, 9130109, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("你不能让我进去吗？\r\n我要阻止“她”才行。", 17, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("NONONONO，不行。\r\n“她”说过谁都不能进去。", 5, 9130109, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("没用的，你不要怪我动粗了啊。", 5, 9130109, true, true);
                  } else if (status === V++) {
                    cm.npc_LeaveField("oid=457885183");
                    cm.npc_LeaveField("oid=457885183");
                    cm.spawnMobLimit(9450037, 1, -336, 62, 1);
                    cm.setStandAloneMode(false);
                    cm.eventSKill(0);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.updateInfoQuest(58972, "m035=clear;dr1=clear;m037=clear");
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
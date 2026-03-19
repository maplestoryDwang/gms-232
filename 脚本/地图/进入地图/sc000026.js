var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  var V = 'action' + cm.getNumberFromQuestCustomData(58900);
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
      if (!cm.isQuestFinished(58927) && cm.isQuestFinished(58926) || !cm.isQuestFinished(58940) && cm.isQuestFinished(58939) || !cm.isQuestFinished(58968) && cm.isQuestFinished(58967)) {
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9130120, "oid=539096406", 91, 166, 4, 41, 141, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=539096406", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=539096406", -1, 200, 100);
          cm.sendNormalTalk("你是谁啊…… ", 5, 9130120, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("我不会让你过去的……", 5, 9130120, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk(" 我不知道里面在做什么，让你来阻挡我们。但我不是找你有事，而是找里面的人有事。所以我一定要过去。", 17, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("哈，正好最近我的拳头痒痒", 5, 9130120, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("呃啊啊，果然，这种刺激的感觉无论什么时候都是最好的。", 5, 9130120, true, true);
                } else if (status === V++) {
                  cm.setStandAloneMode(false);
                  cm.eventSKill(0);
                  cm.setInGameDirectionMode(false, true, false);
                  cm.npc_LeaveField("oid=539096406");
                  cm.npc_LeaveField("oid=539096406");
                  cm.spawnMobLimit(9450039, 1, -109, 187, 1);
                  cm.updateInfoQuest(58973 + cm.getNumberFromQuestCustomData(58900), "m035=clear;dr1=clear;m037=clear;m039=clear");
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
      if (!cm.isQuestFinished(58927) && cm.isQuestFinished(58926) || !cm.isQuestFinished(58940) && cm.isQuestFinished(58939) || !cm.isQuestFinished(58968) && cm.isQuestFinished(58967)) {
        cm.dispose();
        return;
      }
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9130120, "oid=457894906", 91, 166, 4, 41, 141, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=457894906", 'summon', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=457894906", -1, 200, 100);
          cm.sendNormalTalk("喔喔，菖蒲，这是怎么回事啊。", 5, 9130120, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("你可不能在这儿啊。", 5, 9130120, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("这可不是你这个老家伙能决定的事情，哼。", 17, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("切，那个家伙的脾气还是和以前一样啊。", 5, 9130120, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("这脾气真得改改…… ", 5, 9130120, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("呃啊啊，果然，这种刺激的感觉无论什么时候都是最好的。", 5, 9130120, true, true);
                  } else if (status === V++) {
                    cm.setStandAloneMode(false);
                    cm.eventSKill(0);
                    cm.setInGameDirectionMode(false, true, false);
                    cm.npc_LeaveField("oid=457894906");
                    cm.npc_LeaveField("oid=457894906");
                    cm.spawnMobLimit(9450039, 1, -109, 187, 1);
                    cm.updateInfoQuest(58972, "m035=clear;dr1=clear;m037=clear;m039=clear");
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
var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (cm.getQuestStatus(40805) > 0) {
    action2(f, E, e);
  } else {
    action1(f, E, e);
  }
}
function action1(f, E, e) {
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
      cm.npc_ChangeController(2491000, "oid=254094", -464, -85, 12, -514, -414, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.sendNormalTalk("这里是…… 天上？", 1, 2400006, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("真是相当宏伟的地方啊。所以，你现在要给我们说明了吗？", 1, 2400005, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("不是由我来说明，站在这条路尽头的那个人会向你们说明的。你们去见见他再来吧。", 9, 2491000, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("……我还是觉得很可疑。真的不是陷阱吗？", 1, 2400005, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk('不是的。', 9, 2491000, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("哼…… 嗯，就算是陷阱也没关系。全部摧毁不就行了。走吧，贝塔。", 1, 2400005, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(2);
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(0);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("…………", 1, 2400006, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#b(……为什么那样？你还是觉得这像陷阱？)", 1, 2400005, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("#b(不…… 不是那样的…… 不知为何…… 我觉得这一切很熟悉……)", 1, 2400006, true, true);
                        } else if (status === V++) {
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
  } else if (status === V++) {
    cm.npc_ChangeController(2491000, "oid=254094", -464, -85, 12, -514, -414, 1, false, 0, false);
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;
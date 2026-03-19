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
      cm.setInGameDirectionMode(true, true, true);
      cm.npc_ChangeController(2400006, "oid=1360880", 1000, -24, 3, 950, 1050, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=1360880", "summon", 0, 0);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(1);
        cm.inGameDirectionEvent_AskAnswerTime(2000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("就这里吧。", 41, 2400005, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("我刚已经都说明过了，我们就来练习一下切换。", 41, 2400005, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("我战斗的时候#b贝塔#k你#b使用技能#k就会#b切换#k到你。知道了吗？", 41, 2400005, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("嗯……知道了。", 41, 2400006, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("那你往后退一点。", 41, 2400005, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk('#b(点头)#k', 41, 2400006, true, true);
                      } else {
                        if (status === V++) {
                          cm.npc_LeaveField("oid=1360880");
                          cm.sendNormalTalk('来吧……要开始了。', 41, 2400005, true, true);
                        } else if (status === V++) {
                          cm.setInGameDirectionMode(false, true, false);
                          cm.playerMessage(-1, "使用Ctrl按键使用贝塔的技能[上旋斩]。");
                          cm.playerMessage(5, "使用Ctrl按键使用贝塔的技能[上旋斩]。");
                          cm.updateInfoQuest(41929, '');
                          cm.forceStartQuest(41929, '');
                          cm.scheduleOpenNpcTask(10, 0, '神之子_空地练习');
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;
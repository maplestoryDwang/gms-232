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
      if (cm.isQuestFinished(25122)) {
        cm.playerMessage(5, "这里没有事情了，快点离开吧。");
        cm.dispose();
        return;
      } else {
        if (cm.isQuestFinished(25121)) {
          cm.playerMessage(5, "赶紧进去仓库吧。");
          cm.dispose();
          return;
        }
      }
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, false);
      cm.npc_ChangeController(1403002, "oid=739901", 290, 175, 4, 240, 340, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=739901", "summon", 0, 0);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("(过去建造的#o9001047#。当时花了一大笔钱……不过#o9001047#拥有非常强的力量，足以击退所有侵略者。)", 17, 1403002, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("开门。", 17, 1403002, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("声音……确认……", 1, 1403002, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("(启动比以前慢了……是生锈了吗？)", 17, 1403002, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("入侵者！入侵者！切换到战斗模式！击退入侵者！", 1, 1403002, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("怎么回事？喂，这是干什么？！你没听见主人的声音吗？！", 17, 1403002, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("立即消灭入侵者！", 1, 1403002, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("呃，呃呃呃……？", 17, 1403002, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("消灭！", 1, 1403002, true, true);
                        } else if (status === V++) {
                          cm.spawnMobLimit(9001047, 1, 290, 175, 100);
                          cm.npc_LeaveField("oid=739901");
                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
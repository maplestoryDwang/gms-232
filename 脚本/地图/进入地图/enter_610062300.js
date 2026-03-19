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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062300");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9201546, "oid=2679536", 2042, 8, 3, 1992, 2092, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2679536", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("呼，这下安静了。\r\n这么多小发明，肯定是张博士的手笔。", 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("不知道她现在在哪……", 57, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("等天黑了我和卢坎再来这儿看看。", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
              cm.inGameDirectionEvent_AskAnswerTime(4200);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("苏巴尼？\r\n这么晚了他在外头干啥呢？", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=2679536", -1);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.npc_setForceFlip("oid=2679536", 1);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=2679536", -1);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=2679536", 1);
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=2679536", 1, 700, 100);
                          cm.inGameDirectionEvent_AskAnswerTime(4200);
                        } else {
                          if (status === V++) {
                            cm.npc_LeaveField("oid=2679536");
                            cm.npc_LeaveField("oid=2679536");
                            cm.sendNormalTalk_Bottom("我不觉得他是在执行绯红之心的任务。\r\nI一个人出去太危险了……我应该跟上他。", 57, 0, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2200);
                            } else if (status === V++) {
                              cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 4);
                              cm.updateInfoQuest(61369, "1=1;2=1;3=1;4=1;5=1");
                              cm.gainExp(Math.pow(cm.getLevel(), 3) / 4);
                              cm.eventSKill(0);
                              cm.setInGameDirectionMode(false, true, false);
                              cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
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
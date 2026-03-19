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
      if (cm.getQuestStatus(64921) > 0) {
        cm.dispose();
        return;
      }
      cm.npc_ChangeController(9401116, 'oid=200572', -654, 28, 18, -704, -604, 4, true, 0, false);
      cm.npc_ChangeController(9401117, "oid=200573", -761, 28, 19, -811, -711, 4, true, 0, false);
      cm.npc_ChangeController(9401118, 'oid=200574', -67, 28, 28, -117, -17, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushMoveInfo(0, 0, -300, -800);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 300, -300, 80);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(4200);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2200);
              cm.effect_NormalSpeechBalloon("求你救救我吧。", 1, 0, 0, 4500, 1, 280, -10, 0, 4, 0, null, cm.getPlayer().getId());
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(3200);
                cm.effect_NormalSpeechBalloon("我们又没有做错什么……！", 1, 0, 0, 4500, 1, 160, -20, 0, 4, 0, null, cm.getPlayer().getId());
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("请快点把那块破铁解体吧。\r\n我要快点研制新产品，才能早日东山再起……", 36, 9401087, 0, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("克拉尼亚！", 56, 0, 1, 1);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                      cm.effect_NormalSpeechBalloon('!!', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9401118, null, cm.getPlayer().getId());
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("啊，你们怎么会在这里……？！", 36, 9401087, 0, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("我们找到了你的#b秘密文件#k！", 36, 9401071, 1, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("又不是什么秘密。下回要再藏严实点。", 36, 9401072, 1, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("哼……又看到了这些不想见到的面孔呢。", 36, 9401087, 1, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                } else if (status === V++) {
                                  cm.setStandAloneMode(false);
                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                  cm.eventSKill(0);
                                  cm.setInGameDirectionMode(false, true, false);
                                  cm.gainExp(Math.pow(cm.getLevel(), 3) * 2);
                                  cm.forceCompleteQuest(64920);
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
  }
}
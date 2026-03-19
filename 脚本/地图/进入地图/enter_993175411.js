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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.curNodeEventEnd(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("不好意思，打扰了……", 56, 0, false, true, 1);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=13959967", "summon", 0, 0);
            cm.sendNormalTalk_Bottom("#face0#谁！何人不经允许就进入我的房间！ ", 36, 9062258, true, true, 1);
          } else {
            if (status === V++) {
              cm.userSetFieldFloating(993175411, 3, 3, 20);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.userSetFieldFloating(993175411, 0, 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0# 既不是#b管家#k，也不是#b女仆#k，我第一次见你！", 36, 9062258, false, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("我也是受邀参加派对的客人。 \r\n有人让我来帮你……", 56, 0, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#帮我？！你说什么呢！\r\n我需要什么帮助！我谁的帮助都不需要！", 36, 9062258, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("那个……", 56, 0, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("您#b胳膊上的伤#k……看起来很严重，是不是和这个有关？", 56, 0, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#咦，这是什么？？！\r\n算了……身为男子汉，身上难免会有伤口的嘛！", 36, 9062258, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("看你自己也不知道，就更奇怪了……", 56, 0, true, true, 1);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0# 嗯……嗯！……#b伤口#k是怎么来的……好像是不小心伤到的……", 36, 9062258, true, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0# 啊！！！想起来了！！！！", 36, 9062258, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("是什么？", 56, 0, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#这个宅子，离#b五洞村#k远吗？", 36, 9062258, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom(" #五洞村#k？", 56, 0, true, true, 1);
                                      } else if (status === V++) {
                                        cm.forceCompleteQuest(100436);
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                        cm.setInGameDirectionMode(false, true, false);
                                        cm.setStandAloneMode(false);
                                        cm.npc_LeaveField("oid=13959967");
                                        cm.dispose();
                                        cm.warp(993175410, 1, false);
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
    }
  }
}
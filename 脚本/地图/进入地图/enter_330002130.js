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
      cm.npc_ChangeController(1530060, "oid=2081530", 475, 10, 31, 425, 525, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2081530", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("终于让我见到了! 找得我好苦啊. ", 37, 1530060, false, true, 1);
        cm.effect_Voice("Voice2.img/Friends/HID_01/1", 100);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("你待在这里会很危险, 我们去别的地方吧. ", 57, 0, true, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("没事! 我觉得这里也不错啊. ", 37, 1530060, true, true, 1);
            cm.effect_Voice("Voice2.img/Friends/HID_01/2", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('?', 57, 0, true, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("我的心里已经作好了准备. 美丽的天空, 不错的氛围……还正巧一个人都没有. ", 37, 1530060, true, true, 1);
                cm.effect_Voice("Voice2.img/Friends/HID_01/3", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("...?", 57, 0, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("哎呀, 怎么抖得这么厉害? 看来因为是第一次呢. ", 37, 1530060, true, true, 1);
                    cm.effect_Voice("Voice2.img/Friends/HID_01/4", 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("......???", 57, 0, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("好吧, 那我闭上眼睛……这么做全都是为了学校的和平, 对吧? ", 37, 1530060, true, true, 1);
                        cm.effect_Voice("Voice2.img/Friends/HID_01/5", 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("............?????", 57, 0, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=2081530", -1, 275, 100);
                            cm.inGameDirectionEvent_AskAnswerTime(4000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("我不能动吗? ", 37, 1530060, false, true, 1);
                              cm.effect_Voice("Voice2.img/Friends/HID_01/6", 100);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetSpecialAction("oid=2081530", 'love', -1, 1);
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                  cm.effect_Voice("Voice2.img/Friends/HID_01/7", 100);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#哎哟, 你还真的做到了……我不管了! ", 37, 1530061, false, true, 1);
                                      cm.effect_Voice("Voice2.img/Friends/HID_01/8", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.setNpcSpecialActionReset("oid=2081530");
                                        cm.sendNormalTalk_Bottom("#face0#这是我们两个之间的秘密. 你明白吗? ", 37, 1530061, true, true, 1);
                                        cm.effect_Voice("Voice2.img/Friends/HID_01/9", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetForceMove("oid=2081530", -1, 150, 200);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          cm.effect_Voice("Voice2.img/Friends/HID_01/11", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else if (status === V++) {
                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.forceStartQuest(33046, '');
                                            cm.updateInfoQuest(33046, "ok=1");
                                            cm.npc_LeaveField("oid=2081530");
                                            cm.dispose();
                                            cm.warp(330001900, 4, true);
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
  }
}
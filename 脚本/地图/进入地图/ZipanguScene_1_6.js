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
      cm.forceCompleteQuest(58725);
      cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 3);
      cm.gainExp(Math.pow(cm.getLevel(), 3) / 3);
      cm.updateInfoQuest(58724, "state1=mercy;state2=win");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9111010, "oid=3780856", 805, -30, 21, 755, 855, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3780856", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=3780856", "die1", 0, 1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("…………", 37, 9111010, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("……你跟其他人类不太一样。", 37, 9111010, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("……这个给你……现在我们不需要它了，你拿走吧。", 37, 9111010, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
                cm.effect_OnUserEff("Effect/OnUserEff.img/getFire/");
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("不管怎样，其他人类还是应该受罚……！\r\n竟然在我们的土地上欺辱我们，还把我们赶出去，可恨至极！", 37, 9111010, false, true);
                } else {
                  if (status === V++) {
                    cm.askMenu_Bottom("我会报仇的，人类！\r\n虽然我们现在只能灰溜溜地逃跑，但我们一定会积蓄力量报仇的！\r\n#L1# #b劝#p9111010#放弃复仇，选择其他方法。#l#k", 37, 9111010);
                  } else {
                    if (status === V++) {
                      cm.updateInfoQuest(58725, "state=mercy");
                      cm.sendNormalTalk_Bottom("放弃吧，复仇只会导致更多的悲剧。", 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("比起那样无谓的做法，总有更好的办法吧？", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.setNpcSpecialActionReset("oid=3780856");
                            cm.sendNormalTalk_Bottom("以眼还眼，以牙还牙，人类。\r\n今日之恨，我们一定会向人类全部讨回来。", 37, 9111010, false, true);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=3780856", "jump", 0, 1);
                              cm.inGameDirectionEvent_AskAnswerTime(600);
                            } else {
                              if (status === V++) {
                                cm.npc_SetSpecialAction("oid=3780856", "jump", 0, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(600);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetSpecialAction("oid=3780856", "jump", 0, 1);
                                  cm.sendNormalTalk_Bottom("正如你们迫害我的无数同胞一样，#r我一定会让人类血债血偿！#k", 37, 9111010, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetForceMove("oid=3780856", 1, 300, 150);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_LeaveField("oid=3780856");
                                      cm.npc_LeaveField("oid=3780856");
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("…………", 57, 0, false, true);
                                      } else if (status === V++) {
                                        cm.eventSKill(0);
                                        cm.warp(800020007, 0, true);
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
            }
          }
        }
      }
    }
  }
}
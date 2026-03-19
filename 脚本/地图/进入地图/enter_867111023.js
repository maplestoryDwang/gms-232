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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9400031, "oid=19779627", 380, 13, 247, 330, 430, 0, true, false);
      cm.npc_SetSpecialAction("oid=19779627", "summon", 0, 0);
      cm.npc_ChangeController(9400032, "oid=19779628", 330, 13, 244, 280, 380, 0, true, false);
      cm.npc_SetSpecialAction("oid=19779628", "summon", 0, 0);
      cm.npc_ChangeController(9400033, "oid=19779629", 260, 13, 243, 210, 310, 0, true, false);
      cm.npc_SetSpecialAction("oid=19779629", "summon", 0, 0);
      cm.npc_ChangeController(9400034, "oid=19779630", 210, 13, 27, 160, 260, 0, true, false);
      cm.npc_SetSpecialAction("oid=19779630", "summon", 0, 0);
      cm.npc_ChangeController(9400035, "oid=19779631", 435, 13, 278, 385, 485, 1, true, false);
      cm.npc_SetSpecialAction("oid=19779631", "summon", 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 0, 358, 120);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 358, 60);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("(居然把老虎都带走了……对方也真是不简单啊。)", 37, 9400064, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#如果那时候我没有让他带走灵灵……呜呜", 37, 9400035, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("之后我就一直在寻找灵灵和小偷的痕迹，不久之前，我在这附近发现了类似的人。", 37, 9400035, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("你知道那个小偷的长相吗？", 37, 9400034, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("他穿着长袍，还带着面具。", 37, 9400035, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("啊，那个衣服就是APORD的衣服啊！？", 37, 9400034, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("那么灵灵也和APORD有关系啊！！", 37, 9400031, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("既然如此，陈要不要也和我们一起呢？", 37, 9400031, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("没错，陈，请你和我们一起寻找APORD吧，灵灵肯定就在他们手上！", 37, 9400033, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("嗯……是啊，那我们就一起找找吧。", 37, 9400035, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("在这附近我虽然看到了相似的人，不过我也发现了很多奇怪的毛发。", 37, 9400035, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("看上去像是灵灵的毛……往这附近的森林里面走，毛就更多了。", 37, 9400035, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("那个地方在哪里？", 37, 9400034, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("就是这附近的森林。", 37, 9400035, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("我们快走吧？跟着动物的毛应该就能找到什么。", 37, 9400032, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 2147483647, 2147483647, 2147483647);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                              } else {
                                                if (status === V++) {
                                                  cm.forceCompleteQuest(59721);
                                                  cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                                  cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                                  cm.updateInfoQuest(59763, '1=1;2=1');
                                                  cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                } else if (status === V++) {
                                                  cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                  cm.inGameDirectionEvent_SetHideEffect(0);
                                                  cm.eventSKill(0);
                                                  cm.warp(cm.getNumberFromQuestInfo(59744, "map"), 0);
                                                  cm.setInGameDirectionMode(false, true, false);
                                                  cm.setStandAloneMode(false);
                                                  cm.npc_LeaveField("oid=19779627");
                                                  cm.npc_LeaveField("oid=19779628");
                                                  cm.npc_LeaveField("oid=19779629");
                                                  cm.npc_LeaveField("oid=19779630");
                                                  cm.npc_LeaveField("oid=19779631");
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
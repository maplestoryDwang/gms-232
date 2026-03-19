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
      cm.npc_ChangeController(9400031, "oid=19788898", -260, 316, 2, -310, -210, 0, true, false);
      cm.npc_SetSpecialAction("oid=19788898", 'summon', 0, 0);
      cm.npc_ChangeController(9400032, "oid=19788899", -100, 316, 9, -150, -50, 0, true, false);
      cm.npc_SetSpecialAction("oid=19788899", "summon", 0, 0);
      cm.npc_ChangeController(9400033, "oid=19788900", 300, 316, 11, 250, 350, 1, true, false);
      cm.npc_SetSpecialAction("oid=19788900", 'summon', 0, 0);
      cm.npc_ChangeController(9400034, "oid=19788901", 110, 316, 13, 60, 160, 1, true, false);
      cm.npc_SetSpecialAction("oid=19788901", "summon", 0, 0);
      cm.npc_ChangeController(9400035, "oid=19788902", -180, 316, 9, -230, -130, 0, true, false);
      cm.npc_SetSpecialAction("oid=19788902", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom('啊，等等！！', 37, 9400032, false, true);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=19788899", 1, 50, 200);
          cm.inGameDirectionEvent_AskAnswerTime(2200);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("……？？", 37, 9400034, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("难道……你要……一个人拿走那些钱吗？", 37, 9400032, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=19788901"], [0, 0, 0, 1, 0, 1, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(2200);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("(咳咳)", 37, 9400034, false, true);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=19788898", 1, 100, 200);
                    cm.inGameDirectionEvent_AskAnswerTime(2200);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("嗯……你应该……没有忘记一起战斗的我们吧？", 37, 9400031, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#呃……嗯……", 37, 9400034, true, true);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=19788900", -1, 50, 200);
                          cm.inGameDirectionEvent_AskAnswerTime(2200);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("我应该也有一份吧？我发现了宇宙飞船的位置哦！", 37, 9400033, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.npc_setForceFlip("oid=19788901", 1);
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=19788901", 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=19788901"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(2200);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("好好好……我知道了！", 37, 9400034, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("那就公平地平分吧，我们有六个人，公平地平分。^^", 37, 9400033, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("好，拿着吧，拿着~！", 37, 9400034, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2#虽然我不是为了这个才帮你们，但既然你给了，那就谢谢了。", 37, 9400033, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face2#嘻嘻，谢谢~！", 37, 9400031, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.forceCompleteQuest(59739);
                                                    cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                                    cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                                    cm.updateInfoQuest(59764, "1=1;2=1;3=1;5=1;6=1;7=1");
                                                    cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                  } else if (status === V++) {
                                                    cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                                    cm.eventSKill(0);
                                                    cm.warp(867111043, 0);
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.setStandAloneMode(false);
                                                    cm.npc_LeaveField("oid=19788898");
                                                    cm.npc_LeaveField("oid=19788899");
                                                    cm.npc_LeaveField("oid=19788900");
                                                    cm.npc_LeaveField("oid=19788901");
                                                    cm.npc_LeaveField("oid=19788902");
                                                    cm.dispose();
                                                    cm.forceCompleteQuest(59738);
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;
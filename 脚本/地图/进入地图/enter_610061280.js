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
      cm.updateInfoQuest(61333, "act1=610061280");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9201539, "oid=2833208", -268, 212, 4, -318, -218, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2833208", "summon", 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 0, 116, -370);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
        cm.inGameDirectionEvent_AskAnswerTime(7200);
        cm.effect_Text(["#fn黑体##fs18#守护者的要塞 - 宗师大厅"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1200);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                cm.inGameDirectionEvent_AskAnswerTime(1400);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3#不过我觉得，守护者的要塞看着也没那么危险嘛。", 37, 9201539, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face3#上次要不是被一群猫吓跑了，我的研究肯定有突破了。", 37, 9201539, true, true);
                  } else {
                    if (status === V++) {
                      cm.userSetFieldFloating(610061280, 5, 10, 40);
                      cm.inGameDirectionEvent_AskAnswerTime(2200);
                    } else {
                      if (status === V++) {
                        cm.userSetFieldFloating(610061280, 0, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3#……也可能没有。\r\n我还是赶紧……哈？", 37, 9201539, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushMoveInfo(0, 100, 500, 210);
                            } else {
                              if (status === V++) {
                                cm.npc_SetForceMove("oid=2833208", 1, 500, 100);
                                cm.inGameDirectionEvent_AskAnswerTime(7719);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(6200);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face3#那是什么东西？", 37, 9201539, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face3#这地方有这么亮的东西吗？", 37, 9201539, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=2833208", 1, 100, 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(4200);
                                          } else {
                                            if (status === V++) {
                                              cm.addPopupSay(9201534, 2000, "看来……这世上相信我存在的人，只有你了。", '', 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(7200);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_setForceFlip("oid=2833208", -1);
                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_setForceFlip("oid=2833208", 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                    cm.effect_NormalSpeechBalloon('??', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 9201539, null, cm.getPlayer().getId());
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face3#我好像听到了声音。\r\n谁在那儿？", 37, 9201539, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetForceMove("oid=2833208", 1, 430, 100);
                                                          cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 2000, 0, 1100, 190);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face3#是雕像传出来的？", 37, 9201539, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.addPopupSay(9201534, 2000, "你对我存在的笃信唤醒了我。", '', 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(5200);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face3#雕像……居然会说话？", 37, 9201539, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.addPopupSay(9201534, 2000, "就让你见识下你所相信的事物的真实模样吧。", '', 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(5200);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face3#啊！", 37, 9201539, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                          } else if (status === V++) {
                                                                            cm.eventSKill(0);
                                                                            cm.warp(610061290, 0, true);
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.npc_LeaveField("oid=2833208");
                                                                            cm.npc_LeaveField("oid=2833208");
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
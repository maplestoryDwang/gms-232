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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 156, 158);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3004326, "oid=2748788", 62, 171, 2, 12, 112, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2748788", "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(2500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face3#老师！！", 37, 3004323, false, true);
          cm.effect_Voice("Voice5.img/CH1/Lily/4", 128);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.OverlapScreenDetail19(0, 2000, 3000, 1);
              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 189, 191);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.fieldEffect_RemoveOverlapScreenDetail(2000);
                  cm.inGameDirectionEvent_AskAnswerTime(2500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#黑魔法师……\r\n他们正在渐渐揭晓#r虚假未来#k的真相。", 37, 3003250, false, true);
                    cm.effect_Voice("Voice5.img/CH1/Lucid/1", 128);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face1#……就这么由着他们吗？黑魔法师……", 37, 3003250, true, true);
                      cm.effect_Voice("Voice5.img/CH1/Lucid/2", 128);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("路西德创造的虚假未来……\r\n是指#r未来之门#k吗？", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#无所谓。只有这样，人类才能懂得恐惧的滋味。", 37, 3003923, false, true);
                            cm.effect_Voice("Voice5.img/CH1/Heinze/8", 128);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#被捏造的未来，被决定的命运，\r\n无时无刻，都不得不怀疑自我意志的封闭世界。", 37, 3003923, true, true);
                              cm.effect_Voice("Voice5.img/CH1/Heinze/9", 128);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face1#人类，该为这场巨大的骗局感到愤怒。", 37, 3003923, true, true);
                                cm.effect_Voice("Voice5.img/CH1/Heinze/10", 128);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2748788"], [0, 0, -50, 1, 0, 1, 0, 0]);
                                    cm.sendNormalTalk_Bottom("#face1#……！！", 37, 3003923, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face1#是的。这正是#r黑魔法师，在假设自己失败的前提下#k做出的安排。", 37, 3003923, true, true);
                                      cm.effect_Voice("Voice5.img/CH1/Heinze/11", 128);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#r未来之门#k是黑魔法师的安排？", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#老师！请您快清醒过来吧！", 37, 3004322, true, true);
                                          cm.effect_Voice("Voice5.img/CH1/Elwyn/2", 128);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=2748788", -1);
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1#但是，我还没接近答案。", 37, 3003923, false, true);
                                                cm.effect_Voice("Voice5.img/CH1/Heinze/12", 128);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face3#老师！！", 37, 3004323, true, true);
                                                  cm.effect_Voice("Voice5.img/CH1/Lily/5", 128);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/borderless/heinzTeleport", 100);
                                                      cm.npc_SetSpecialAction("oid=2748788", "teleport", 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.userSetFieldFloating(993135004, 3, 3, 3);
                                                        cm.npc_LeaveField("oid=2748788");
                                                        cm.npc_LeaveField("oid=2748788");
                                                        cm.inGameDirectionEvent_AskAnswerTime(700);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.userSetFieldFloating(993135004, 0, 0, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else if (status === V++) {
                                                            cm.warp(993131500, 0, false);
                                                            cm.eventSKill(0);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.setStandAloneMode(false);
                                                            cm.forceCompleteQuest(39715);
                                                            cm.gainExp(20 * Math.pow(cm.getLevel(), 3));
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
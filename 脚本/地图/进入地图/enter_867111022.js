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
      cm.npc_ChangeController(9400035, "oid=19779246", -1083, 1876, 3, -1133, -1033, 0, true, false);
      cm.npc_SetSpecialAction("oid=19779246", "summon", 0, 0);
      cm.npc_ChangeController(9400038, "oid=19779247", -486, 1876, 10, -536, -436, 1, true, false);
      cm.npc_SetSpecialAction("oid=19779247", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(2400);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(2400);
        cm.effect_NormalSpeechBalloon("#face0#吼吼吼", 1, 0, 0, 2400, 9400038, 9897148);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff/emotionBalloon/noSpeak", "oid=19779246"], [0, 0, 0, 1, 0, 1, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=19779246", 1, 300, 100);
            cm.inGameDirectionEvent_AskAnswerTime(5000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(0, 500, -580, 1860);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(736);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 0, -580, 1950);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
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
                              cm.sendNormalTalk_Bottom("哎呀……原来是受了伤的动物。", 37, 9400035, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#吼吼……！！", 37, 9400038, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("没关系，我不是坏人。我不会害你的，让我看看你的伤口吧。", 37, 9400035, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove("oid=19779246", 1, 50, 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff/emotion/angry", "oid=19779247"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(2400);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#吭吭", 37, 9400038, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("你应该很疼吧，来，我把这个药给你一点。", 37, 9400035, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove("oid=19779246", 1, 50, 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
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
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                            cm.effect_Text(["#fn黑体##fs18#不久后……"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetForceMove("oid=19779247", -1, 20, 200);
                                                              cm.npc_SetSpecialAction("oid=19779247", 'play', -1, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("哈哈哈，你来抓我啊！好极了！现在你已经完全恢复了啊。", 37, 9400035, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("在这里能遇到你真是太好了，你也这么觉得吧？", 37, 9400035, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("好，那我得给你起个名字。让我来想想……我喜欢灵灵这个名字，以后就这么叫你吧，灵灵。", 37, 9400035, true, true);
                                                                  } else if (status === V++) {
                                                                    cm.inGameDirectionEvent_SetHideEffect(0);
                                                                    cm.eventSKill(0);
                                                                    cm.warp(867111049, 0, true);
                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                    cm.setStandAloneMode(false);
                                                                    cm.npc_LeaveField("oid=19779246");
                                                                    cm.npc_LeaveField("oid=19779247");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;
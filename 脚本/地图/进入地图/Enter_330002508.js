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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1530210, "oid=38854362", 502, 275, 34, 452, 552, 1, false, false);
      cm.npc_SetSpecialAction("oid=38854362", "summon", 0, 0);
      cm.npc_ChangeController(1530250, "oid=38854363", 552, 275, 34, 502, 602, 1, false, false);
      cm.npc_SetSpecialAction("oid=38854363", "summon", 0, 0);
      cm.npc_ChangeController(1530256, "oid=38854364", 602, 275, 34, 552, 652, 1, false, false);
      cm.npc_SetSpecialAction("oid=38854364", "summon", 0, 0);
      cm.npc_ChangeController(1530256, "oid=38854365", 702, 275, 34, 652, 752, 1, false, false);
      cm.npc_SetSpecialAction("oid=38854365", "summon", 0, 0);
      cm.npc_ChangeController(1530300, "oid=38854366", 732, 275, 34, 682, 782, 1, true, false);
      cm.npc_SetSpecialAction("oid=38854366", "summon", 0, 0);
      cm.npc_ChangeController(1530310, "oid=38854367", 762, 275, 34, 712, 812, 1, true, false);
      cm.npc_SetSpecialAction("oid=38854367", 'summon', 0, 0);
      cm.npc_ChangeController(1530300, "oid=38854368", 792, 275, 35, 742, 842, 1, true, false);
      cm.npc_SetSpecialAction("oid=38854368", "summon", 0, 0);
      cm.npc_ChangeController(1530310, "oid=38854369", 822, 275, 35, 772, 872, 1, true, false);
      cm.npc_SetSpecialAction("oid=38854369", "summon", 0, 0);
      cm.npc_ChangeController(1530370, "oid=38854370", 302, 275, 34, 252, 352, 0, true, false);
      cm.npc_SetSpecialAction("oid=38854370", "summon", 0, 0);
      cm.npc_ChangeController(1530200, "oid=38854371", 402, 275, 34, 352, 452, 0, true, false);
      cm.npc_SetSpecialAction("oid=38854371", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=38854371", "flower", -1, 1);
      cm.inGameDirectionEvent_PushMoveInfo(0, 2000, 200, 280);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(299);
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
              cm.inGameDirectionEvent_PushMoveInfo(0, 130, 400, 280);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(2039);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("好了，今天是教学实习的最后一天。", 37, 1530370, false, true);
                  cm.effect_Text(["#fn黑体##fs26#教学实习\r\n#fs14# 最后一天"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
                  cm.effect_Voice("Voice2.img/Friends/CH5_05/1", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("老师，我们会想念你的。", 37, 1530250, true, true);
                    cm.effect_Voice("Voice2.img/Friends/CH5_05/2", 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom('老师……', 37, 1530256, true, true);
                      cm.effect_Voice("Voice2.img/Friends/CH5_05/3", 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("你们这些家伙，不要过于悲伤。#b有聚必有散#k，不是吗？", 37, 1530370, true, true);
                        cm.effect_Voice("Voice2.img/Friends/CH5_05/4", 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("…………", 37, 1530210, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("……？艾菲尼娅，你有话要对我说吗？", 37, 1530200, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("……实习老师。你走后……也要保持联系……", 37, 1530210, false, true);
                                cm.effect_Voice("Voice2.img/Friends/CH5_05/7", 100);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayBGM("Bgm15.img/ElinForest", 0, 0);
                                    cm.npc_SetSpecialAction("oid=38854362", "cry", -1, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      cm.effect_NormalSpeechBalloon("呜……", 1, 0, 0, 2000, 1530210, cm.getPlayer().getId());
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        cm.effect_NormalSpeechBalloon('呜呜……', 1, 0, 0, 1000, 1530250, cm.getPlayer().getId());
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          cm.effect_NormalSpeechBalloon("呜啊呜啊……", 1, 0, 0, 1000, 1530256, cm.getPlayer().getId());
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            cm.effect_NormalSpeechBalloon("呜呃……", 1, 0, 0, 1000, 1530250, cm.getPlayer().getId());
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              cm.effect_NormalSpeechBalloon("咳……咳呜……", 1, 0, 0, 2000, 1530256, cm.getPlayer().getId());
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("呃……你们这些家伙，吃错了什么药。为什么突然哭哭啼啼的？", 37, 1530370, false, true);
                                                cm.effect_Voice("Voice2.img/Friends/CH5_05/8", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("老师，我爱你。呜呜，呜呜……", 37, 1530250, true, true);
                                                  cm.effect_Voice("Voice2.img/Friends/CH5_05/9", 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("一定要保持联络，老师……", 37, 1530256, true, true);
                                                    cm.effect_Voice("Voice2.img/Friends/CH5_05/10", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("咳咳……咳……实习老师，你最后再对孩子们说句话吧。", 37, 1530370, true, true);
                                                      cm.effect_Voice("Voice2.img/Friends/CH5_05/11", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#呵呵呵……", 37, 1530200, true, true);
                                                        cm.effect_Voice("Voice2.img/Friends/CH5_05/12", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          cm.effect_NormalSpeechBalloon('?', 1, 0, 0, 2000, 1530370, cm.getPlayer().getId());
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("这段时间多谢大家的照顾。", 37, 1530200, false, true);
                                                            cm.effect_Voice("Voice2.img/Friends/CH5_05/13", 100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom('请不要忘记我们！', 37, 1530250, true, true);
                                                              cm.effect_Voice("Voice2.img/Friends/CH5_05/14", 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#好的，这段时间我也觉得很开心。", 37, 1530200, true, true);
                                                                cm.effect_Voice("Voice2.img/Friends/CH5_05/15", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetSpecialAction("oid=38854371", "flowerSmile", -1, 1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_ProcessOnOffLayer('0', "Map/Effect2.img/spinOff1/WhiteTeacher", 0, 1500, 0, 0, 12, 4, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                      cm.effect_Voice("UI.img/CameraShutter", 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 1500, 0, 0, 0, 0, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                      } else if (status === V++) {
                                                                        cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                                        cm.forceCompleteQuest(33021);
                                                                        cm.dispose();
                                                                        cm.warp(330000010, 0);
                                                                        cm.inGameDirectionEvent_SetHideEffect(0);
                                                                        cm.setInGameDirectionMode(false, true, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;
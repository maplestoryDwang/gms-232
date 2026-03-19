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
      cm.forceStartQuest(63061, '');
      cm.updateInfoQuest(63061, "start=1");
      cm.setStandAloneMode(true);
      cm.npc_ChangeController(9400233, "oid=22310908", 343, 80, 6, 293, 393, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22310908", "summon", 0, 0);
      cm.npc_ChangeController(9400234, "oid=22310909", 500, 80, 7, 450, 550, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22310909", "summon", 0, 0);
      cm.npc_ChangeController(9400235, "oid=22310910", 0, 80, 5, -50, 50, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22310910", "summon", 0, 0);
      cm.npc_ChangeController(9400236, "oid=22310911", -90, 80, 5, -140, -40, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22310911", 'summon', 0, 0);
      cm.npc_ChangeController(9400237, "oid=22310912", -40, 80, 5, -90, 10, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22310912", "summon", 0, 0);
      cm.npc_ChangeController(9400247, "oid=22310913", -82, 80, 5, -132, -32, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=22310913", 'summon', 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(700, 2000, 700, 200, 120);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
            cm.effect_NormalSpeechBalloon("#fs15##e今天的战斗使命是“讨伐怪物”！", 0, 0, 0, 2000, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId());
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2000);
              cm.effect_NormalSpeechBalloon("#fs14#最先消灭#o9402052#、#o9402053#各25只\r\n的人将成为最强勇士！", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 0, cm.getPlayer().getId());
            } else {
              if (status === V++) {
                cm.npc_SetForceMove("oid=22310908", 1, 457, 300);
                cm.npc_SetForceMove("oid=22310909", 1, 300, 150);
                cm.npc_SetForceMove("oid=22310910", 1, 800, 250);
                cm.npc_SetForceMove("oid=22310911", 1, 890, 300);
                cm.npc_SetForceMove("oid=22310912", 1, 840, 200);
                cm.inGameDirectionEvent_AskAnswerTime(3000);
                cm.effect_PlayMusic("SoundEff.img/blackHeaven/victoryshout");
                cm.effect_NormalSpeechBalloon("#fs15##e哇啊啊啊啊啊啊！！！！", 0, 0, 0, 2000, 0, 0, 0, 0, 4, 9400236, cm.getPlayer().getId());
                cm.effect_NormalSpeechBalloon("#fs15##e呜哇啊啊啊！！", 0, 0, 0, 2000, 0, 0, 0, 0, 4, 9400235, cm.getPlayer().getId());
                cm.effect_NormalSpeechBalloon("#fs15##e唔！！唔！！唔！！！", 0, 0, 0, 2000, 0, 0, 0, 0, 4, 9400237, cm.getPlayer().getId());
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                  cm.effect_NormalSpeechBalloon("#fs15##e不过，今天！", 0, 0, 0, 2000, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId());
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam"], [0, 0, 0, 1, 0, 0, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                      cm.effect_NormalSpeechBalloon("#fs13#哎呀，大伙儿这么快就全出发了……", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId());
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(2500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_Monologue("2分钟后。", 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.npc_setForceFlip("oid=22310908", -1);
                                cm.npc_setForceFlip("oid=22310909", -1);
                                cm.npc_setForceFlip("oid=22310910", -1);
                                cm.npc_setForceFlip("oid=22310911", -1);
                                cm.npc_setForceFlip("oid=22310912", -1);
                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=22310908", -1, 450, 150);
                                  cm.npc_SetForceMove("oid=22310909", -1, 330, 100);
                                  cm.npc_SetForceMove("oid=22310910", -1, 750, 250);
                                  cm.npc_SetForceMove("oid=22310911", -1, 400, 100);
                                  cm.npc_SetForceMove("oid=22310912", -1, 700, 200);
                                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=22310910", 1);
                                    cm.npc_setForceFlip("oid=22310912", 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(200);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("外面没有怪物！怎么回事？", 37, 9400210, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("我还是第一次见到怪物这么少的情况。今天的战斗使命该怎么办？", 37, 9400211, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("如果选不出“最强勇士”……今天的夜晚……", 37, 9400213, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#b我昨晚熬夜把怪物扫荡掉了。所以今天白天你们不用辛苦战斗了。大家可以好好休息，度过愉快的时光！", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 9400233, cm.getPlayer().getId());
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("你把怪物全部扫荡了……？", 37, 9400210, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                      cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 9400234, cm.getPlayer().getId());
                                                      cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 2000, 0, 0, 0, 0, 4, 9400236, cm.getPlayer().getId());
                                                      cm.effect_NormalSpeechBalloon('...', 1, 0, 0, 2000, 0, 0, 0, 0, 4, 9400237, cm.getPlayer().getId());
                                                      cm.effect_NormalSpeechBalloon("...", 1, 0, 0, 2000, 0, 0, 0, 0, 4, 9400235, cm.getPlayer().getId());
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=22310909"], [0, -20, -20, 1, 0, 1, 0, 0]);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("你为什么这么做？你是在侮辱我们吗？", 37, 9400211, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=22310908"], [0, -20, -20, 1, 0, 1, 0, 0]);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("真不能理解！讨伐怪物#e是我们的义务，也是我们的快乐和荣耀#n所在。你没有权利干涉。", 37, 9400210, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#b我没有要侮辱你们，或是干涉你们的意思！我只是觉得现在你们很需要休息……", 57, 0, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=22310911"], [0, -20, -20, 1, 0, 1, 0, 0]);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("这个由不得你来判断。要是不想侮辱我们，就马上重新变换回夜晚！", 37, 9400213, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                                          } else if (status === V++) {
                                                                            cm.dispose();
                                                                            cm.warp(867113200, 1, false);
                                                                            cm.setStandAloneMode(false);
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.npc_LeaveField("oid=22310908");
                                                                            cm.npc_LeaveField("oid=22310908");
                                                                            cm.npc_LeaveField("oid=22310909");
                                                                            cm.npc_LeaveField("oid=22310909");
                                                                            cm.npc_LeaveField("oid=22310910");
                                                                            cm.npc_LeaveField("oid=22310910");
                                                                            cm.npc_LeaveField("oid=22310911");
                                                                            cm.npc_LeaveField("oid=22310911");
                                                                            cm.npc_LeaveField("oid=22310912");
                                                                            cm.npc_LeaveField("oid=22310912");
                                                                            cm.npc_LeaveField("oid=22310913");
                                                                            cm.npc_LeaveField("oid=22310913");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;
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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063590;act4=610064060");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 400, 280);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.setAmbience("Ambience.img/warning", 100, 60);
            cm.npc_ChangeController(9201539, "oid=2744634", 433, 275, 22, 383, 483, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=2744634", "summon", 0, 0);
            cm.npc_SetSpecialAction("oid=2744634", "hurt", -1, 0);
            cm.inGameDirectionEvent_AskAnswerTime(2200);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#我很抱歉必须这样结束这场战斗。", 37, 9201539, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('哎哟！', 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/stopswitch", 100);
                    cm.fieldEffect_ProcessOnOffLayer('1', "Map/Effect2.img/blackHeavenCinematic/meetagain_2", 0, 500, 0, 0, 16, 4, 1, -1, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(2200);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_ProcessOnOffLayer('1', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                      cm.npc_ChangeController(9201536, "oid=2744737", -380, 200, 2, -430, -330, 0, true, 0, false);
                      cm.npc_SetSpecialAction("oid=2744737", "summon", 0, 0);
                      cm.npc_SetForceMove("oid=2744737", 1, 600, 300);
                      cm.inGameDirectionEvent_AskAnswerTime(3200);
                    } else {
                      if (status === V++) {
                        cm.npc_SetSpecialAction("oid=2744737", "attack", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.setNpcSpecialActionReset("oid=2744634");
                          cm.npc_SetSpecialAction("oid=2744634", 'dead', -1, 0);
                          cm.playSoundEffDirectly("Ambience.img/warning");
                          cm.inGameDirectionEvent_AskAnswerTime(2200);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=2744737", -1);
                            cm.sendNormalTalk_Bottom("见到你没事真让我高兴。有哪里受伤了吗？", 37, 9201536, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_MoveAction(4);
                                cm.sendNormalTalk_Bottom("呼……", 57, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("差点就被她干掉了……", 57, 0, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_MoveAction(0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("至少这个女恶魔终于消失了，多亏了你。", 37, 9201536, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("我倒不觉得她是什么恶魔。\r\n她的人生很凄惨……并且从中养成了错误的三观。", 57, 0, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("她只是需要有人帮帮她。", 57, 0, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
                                                  cm.npc_setForceFlip("oid=2744737", 1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("她在帮助纳瑞坎的时候是发自真心的高兴。", 57, 0, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face1#心灵是一种脆弱的事物。\r\n真是可悲可叹。", 37, 9201536, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.userSetFieldFloating(610064060, 0, 2, 50);
                                                          cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("话先说到这儿吧，绯红之心还在和纳瑞坎战斗呢。\r\n他需要我们的帮助。", 37, 9201536, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("快去宗师大厅！", 37, 9201536, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_setForceFlip("oid=2744737", -1);
                                                                  cm.npc_SetForceMove("oid=2744737", -1, 200, 200);
                                                                  cm.inGameDirectionEvent_同时移动镜头和人(1, 200);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_LeaveField("oid=2744737");
                                                                    cm.npc_LeaveField("oid=2744737");
                                                                    cm.inGameDirectionEvent_SetHideEffect(1);
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 2000, 0, 560, 300);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                      } else if (status === V++) {
                                                                        cm.eventSKill(0);
                                                                        cm.warp(610064070, 0, true);
                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                        cm.npc_LeaveField("oid=2744634");
                                                                        cm.npc_LeaveField("oid=2744634");
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
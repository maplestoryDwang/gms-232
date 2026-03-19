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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063170");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setAmbience("Ambience.img/warfare2", 100, 60);
      cm.npc_ChangeController(9201535, "oid=2715055", -629, 374, 9, -679, -579, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2715055", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 0, -790, -600);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(0);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 200, 663, -600);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(5200);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(0, 200, 663, 280);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(5200);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(0, 200, -663, 280);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(7200);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -388, 400);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(9201578, "oid=2715394", -253, 374, 11, -303, -203, 1, true, 0, false);
                            cm.npc_SetSpecialAction("oid=2715394", "summon", 0, 0);
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("绯红……之心……！纳瑞坎……", 37, 9201578, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=2715055", 1, 200, 200);
                                  cm.inGameDirectionEvent_AskAnswerTime(2200);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("情况如何？\r\n这场战斗的惨烈程度真是出乎我的意料……", 37, 9201535, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("我们会尽力……拖住它们。\r\n拜托你……一定要阻止纳瑞坎！", 37, 9201578, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom('我会的。', 37, 9201535, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("还有……一件事。", 37, 9201578, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("有个女人……在帮助他……", 37, 9201578, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom('女人？', 37, 9201535, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("她的名字叫克拉奇安博士。我听克拉奇安人提到过她，但没想到她会协助纳瑞坎……", 57, 0, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("一定就是她导致了人和动物变成那些怪物！\r\n必须阻止她！", 37, 9201578, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("包在我们身上。但你们呢？", 37, 9201535, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("不必担心，我们自有打算。", 37, 9201578, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("保重，绯红之心。", 37, 9201578, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                } else if (status === V++) {
                                                                  cm.playSoundEffDirectly("Ambience.img/warfare2");
                                                                  cm.eventSKill(0);
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
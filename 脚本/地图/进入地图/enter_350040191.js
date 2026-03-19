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
      cm.npc_ChangeController(1540489, "oid=36124", -586, 28, 4, -636, -536, 0, false, 0, false);
      cm.npc_ChangeController(1540489, "oid=36125", -493, 28, 3, -543, -443, 0, false, 0, false);
      cm.npc_ChangeController(1540489, "oid=36126", -400, 28, 5, -450, -350, 0, false, 0, false);
      cm.npc_ChangeController(1540489, 'oid=36127', -50, 28, 15, -100, 0, 0, false, 0, false);
      cm.npc_ChangeController(1540489, "oid=36128", 53, 28, 16, 3, 103, 0, false, 0, false);
      cm.npc_ChangeController(1540489, "oid=36129", 250, 28, 17, 200, 300, 0, false, 0, false);
      cm.npc_ChangeController(1540489, "oid=36130", 153, 28, 18, 103, 203, 0, false, 0, false);
      cm.npc_ChangeController(1540650, "oid=22236250", -320, 4, 2, -370, -270, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22236250", 'summon', 0, 0);
      cm.npc_ChangeController(1540651, "oid=22236251", -225, 4, 1, -275, -175, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22236251", 'summon', 0, 0);
      cm.npc_ChangeController(1540666, "oid=22236252", -135, 4, 6, -185, -85, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22236252", 'summon', 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -200, -100);
      cm.curNodeEventEnd(true);
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
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("在我们前面，还有个比我们更年轻的智能机器人。\r\n通过和那孩子聊天，我们很快变得十分亲近。", 37, 1540650, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(2500, 2000, 2500, -210, 50);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.npc_setForceFlip("oid=22236252", -1);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=22236252"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.npcMove(1540666, 0, -10, 100);
                        cm.inGameDirectionEvent_AskAnswerTime(120);
                      } else {
                        if (status === V++) {
                          cm.npcMove(1540666, 0, 10, 100);
                          cm.inGameDirectionEvent_AskAnswerTime(120);
                        } else {
                          if (status === V++) {
                            cm.npcMove(1540666, 0, -10, 100);
                            cm.inGameDirectionEvent_AskAnswerTime(120);
                          } else {
                            if (status === V++) {
                              cm.npcMove(1540666, 0, 10, 100);
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=22236252"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.sendNormalTalk_Bottom("那真是个可爱的孩子。\r\n当时我们还不知道，和某人变得亲近就是我们发生变化的开端。", 37, 1540650, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("然后，没过多久，我们开始对报废处理感到#b恐惧#k。", 37, 1540650, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(2500, 1000, 2500, 600, -100);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(2800);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_ChangeController(1540657, "oid=22237000", 820, 180, 75, 770, 870, 1, true, 500, false);
                                        cm.npc_SetSpecialAction("oid=22237000", "summon", 0, 0);
                                        cm.npcMove(1540657, 0, -180, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushScaleInfo(3500, 1000, 3500, -200, -100);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=22237000", -1, 730, 200);
                                            cm.inGameDirectionEvent_AskAnswerTime(5500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("管理员发现了我们的变化，就把我们的处理顺序提前了。\r\n那孩子排在我们前面，我们没能阻止那一切。", 37, 1540650, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_setForceFlip("oid=22236252", 1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_setForceFlip("oid=22236252", -1);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_setForceFlip("oid=22236252", 1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushScaleInfo(5500, 1000, 5500, 600, -100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetForceMove("oid=22236252", 1, 750, 130);
                                                          cm.npc_SetForceMove("oid=22237000", 1, 400, 130);
                                                          cm.inGameDirectionEvent_AskAnswerTime(6700);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_setForceFlip("oid=22236252", -1);
                                                            cm.npcMove(1540666, 0, -300, 5000);
                                                            cm.inGameDirectionEvent_AskAnswerTime(4500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 668, -270);
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
                                                                      cm.npcMove(1540666, 0, -15, 1000);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npcMove(1540666, 0, -300, 3000);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -294, 104);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 500, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_setForceFlip("oid=22236250", 0);
                                                                                cm.npc_setForceFlip("oid=22236251", 0);
                                                                                cm.npc_SetForceMove("oid=22236250", -1, 40, 200);
                                                                                cm.npc_SetForceMove("oid=22236251", -1, 40, 200);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_setForceFlip("oid=22236251", 1);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_setForceFlip("oid=22236250", 1);
                                                                                    cm.npc_SetForceMove("oid=22236251", 1, 40, 40);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_SetForceMove("oid=22236250", 1, 60, 50);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_SetForceMove("oid=22236250", -1, 1000, 50);
                                                                                        cm.npc_SetForceMove("oid=22236251", -1, 1000, 50);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.npc_setForceFlip("oid=22236250", -1);
                                                                                          cm.sendNormalTalk_Bottom("后来我们趁着管理员分心时，拿着这电脑芯片逃了出来。\r\n在那之后，我们一直过着这种东躲西藏的日子。", 37, 1540650, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                } else if (status === V++) {
                                                                                                  cm.dispose();
                                                                                                  cm.warp(350040192, 0, true);
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
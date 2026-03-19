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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 1200, -120);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(3003272, "oid=1798284", 1200, 0, 10, 1150, 1250, 1, true, false);
        cm.npc_SetSpecialAction("oid=1798284", "summon", 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
          cm.npc_SetForceMove("oid=1798284", 1, 50, 160);
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=1798284", -1, 50, 160);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
              cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                    cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 1100, 10);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(10);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 3000, 1200, 10);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face5#…这里是我的梦幻空间… 为什么突然在这里…", 37, 3003272, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face5#…但是，我的感觉不太好。必须赶紧离开这里。", 37, 3003272, false, true);
                            } else {
                              if (status === V++) {
                                cm.npc_SetForceMove("oid=1798284", -1, 200, 130);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 1000, 10);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("你要去哪里，主人？是我们召唤你来的，嘿嘿。", 37, 3003284, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1798284"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetForceMove("oid=1798284", 1, 1, 160);
                                          cm.npc_ChangeController(3003284, "oid=1798287", 1200, 0, 10, 1150, 1250, 1, true, 2000, false);
                                          cm.npc_SetSpecialAction("oid=1798287", 'summon', 0, 0);
                                          cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 1100, 10);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face2#你们是我梦中创造出来的人啊。请立刻消失，赶紧！", 37, 3003272, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("那怎么行呢？主人您已经被囚禁起来了，被困在您自己创造的世界里，呵呵。", 37, 3003284, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove("oid=1798287", -1, 75, 160);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("以后你就在这里和我们一起生活吧，永远永远。", 37, 3003284, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1798284"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                      cm.npc_SetForceMove("oid=1798284", -1, 1, 160);
                                                      cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 970, 10);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(750);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_ChangeController(3003284, "oid=1798290", 870, 0, 8, 820, 920, 0, true, 2000, false);
                                                          cm.npc_SetSpecialAction("oid=1798290", "summon", 0, 0);
                                                          cm.sendNormalTalk_Bottom("啊，请放心。你一刻都不会觉得无聊的。嘿嘿，因为恐怖的噩梦是不会停止的。", 37, 3003284, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("咳，干什么呢！还不赶紧伺候主人！", 37, 3003284, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_ChangeController(3003284, "oid=1798292", 780, 0, 7, 730, 830, 0, true, 2000, false);
                                                              cm.npc_SetSpecialAction("oid=1798292", 'summon', 0, 0);
                                                              cm.npc_ChangeController(3003284, "oid=1798293", 1190, 0, 10, 1140, 1240, 1, true, 2000, false);
                                                              cm.npc_SetSpecialAction("oid=1798293", 'summon', 0, 0);
                                                              cm.sendNormalTalk_Bottom("好了，好了，赶紧走吧！", 37, 3003284, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face5#不，这不可能。我还不能那么做。我要脱离梦幻空间。", 37, 3003272, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_ChangeController(3003284, "oid=1798294", 720, 0, 4, 670, 770, 0, true, 2000, false);
                                                                  cm.npc_SetSpecialAction("oid=1798294", 'summon', 0, 0);
                                                                  cm.npc_ChangeController(3003284, "oid=1798295", 1250, 0, 11, 1200, 1300, 1, true, 2000, false);
                                                                  cm.npc_SetSpecialAction("oid=1798295", "summon", 0, 0);
                                                                  cm.npc_ChangeController(3003284, "oid=1798296", 660, 0, 5, 610, 710, 0, true, 2500, false);
                                                                  cm.npc_SetSpecialAction("oid=1798296", "summon", 0, 0);
                                                                  cm.npc_ChangeController(3003284, "oid=1798297", 1310, 0, 12, 1260, 1360, 1, true, 2500, false);
                                                                  cm.npc_SetSpecialAction("oid=1798297", "summon", 0, 0);
                                                                  cm.npc_ChangeController(3003284, "oid=1798298", 600, 0, 5, 550, 650, 0, true, 3000, false);
                                                                  cm.npc_SetSpecialAction("oid=1798298", 'summon', 0, 0);
                                                                  cm.npc_ChangeController(3003284, "oid=1798299", 1370, 0, 12, 1320, 1420, 1, true, 3000, false);
                                                                  cm.npc_SetSpecialAction("oid=1798299", "summon", 0, 0);
                                                                  cm.npc_ChangeController(3003284, "oid=1798300", 540, 0, 3, 490, 590, 0, true, 3500, false);
                                                                  cm.npc_SetSpecialAction("oid=1798300", "summon", 0, 0);
                                                                  cm.npc_ChangeController(3003284, "oid=1798301", 1430, 0, 14, 1380, 1480, 1, true, 3500, false);
                                                                  cm.npc_SetSpecialAction("oid=1798301", "summon", 0, 0);
                                                                  cm.npc_ChangeController(3003284, "oid=1798302", 480, 0, 2, 430, 530, 0, true, 4000, false);
                                                                  cm.npc_SetSpecialAction("oid=1798302", 'summon', 0, 0);
                                                                  cm.npc_ChangeController(3003284, "oid=1798303", 1490, 0, 15, 1440, 1540, 1, true, 4000, false);
                                                                  cm.npc_SetSpecialAction("oid=1798303", 'summon', 0, 0);
                                                                  cm.npc_ChangeController(3003284, "oid=1798304", 420, 0, 2, 370, 470, 0, true, 4000, false);
                                                                  cm.npc_SetSpecialAction("oid=1798304", 'summon', 0, 0);
                                                                  cm.npc_ChangeController(3003284, "oid=1798305", 1550, 0, 15, 1500, 1600, 1, true, 4000, false);
                                                                  cm.npc_SetSpecialAction("oid=1798305", "summon", 0, 0);
                                                                  cm.npc_ChangeController(3003284, "oid=1798306", 360, 0, 1, 310, 410, 0, true, 4000, false);
                                                                  cm.npc_SetSpecialAction("oid=1798306", 'summon', 0, 0);
                                                                  cm.npc_ChangeController(3003284, "oid=1798307", 1610, 0, 13, 1560, 1660, 1, true, 4000, false);
                                                                  cm.npc_SetSpecialAction("oid=1798307", 'summon', 0, 0);
                                                                  cm.sendNormalTalk_Bottom("#face5#你们要听从我的命令，给我立刻消失。", 37, 3003272, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetForceMove("oid=1798287", -1, 10, 160);
                                                                    cm.npc_SetForceMove("oid=1798293", -1, 10, 160);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("呵呵，什么都不会如你所愿的，什么都不会！", 37, 3003284, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.npc_SetForceMove("oid=1798290", 1, 10, 160);
                                                                        cm.npc_SetForceMove("oid=1798292", 1, 10, 160);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("你被困在噩梦中，永远永远！", 37, 3003284, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_LeaveField("oid=1798284");
                                                                            cm.npc_ChangeController(3003273, "oid=1798310", 1000, 0, 6, 950, 1050, 1, true, false);
                                                                            cm.npc_SetSpecialAction("oid=1798310", "summon", 0, 0);
                                                                            cm.setNpcSpecialActionReset("oid=1798310");
                                                                            cm.npc_SetSpecialAction("oid=1798310", 'awake2', -1, 0);
                                                                            cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, 970, -120);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face6#…怎，怎么会这样！", 37, 3003272, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else if (status === V++) {
                                                                                  cm.npc_LeaveField("oid=1798287");
                                                                                  cm.npc_LeaveField("oid=1798290");
                                                                                  cm.npc_LeaveField("oid=1798292");
                                                                                  cm.npc_LeaveField("oid=1798293");
                                                                                  cm.npc_LeaveField("oid=1798294");
                                                                                  cm.npc_LeaveField("oid=1798295");
                                                                                  cm.npc_LeaveField("oid=1798296");
                                                                                  cm.npc_LeaveField("oid=1798297");
                                                                                  cm.npc_LeaveField("oid=1798298");
                                                                                  cm.npc_LeaveField("oid=1798299");
                                                                                  cm.npc_LeaveField("oid=1798300");
                                                                                  cm.npc_LeaveField("oid=1798301");
                                                                                  cm.npc_LeaveField("oid=1798302");
                                                                                  cm.npc_LeaveField("oid=1798303");
                                                                                  cm.npc_LeaveField("oid=1798304");
                                                                                  cm.npc_LeaveField("oid=1798305");
                                                                                  cm.npc_LeaveField("oid=1798306");
                                                                                  cm.npc_LeaveField("oid=1798307");
                                                                                  cm.npc_LeaveField("oid=1798310");
                                                                                  cm.dispose();
                                                                                  cm.warp(940200152, 0);
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
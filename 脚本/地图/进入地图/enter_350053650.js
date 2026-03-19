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
      cm.getMap().spawnReactorIfNotExist(3500032, 0, 2074, -283, 0, "wall");
      cm.updateInfoQuest(33240, "skip6=1;skip8=1;switch=1;skip23=1;skip15=1;skip17=1;act5=350053650");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(1540492, "oid=26135580", 1700, -10, 5, 1650, 1750, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=26135580", "summon", 0, 0);
      cm.npc_ChangeController(1540492, "oid=26135581", 2280, -10, 4, 2230, 2330, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=26135581", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=26135580", 'on', -1, 1);
      cm.npc_SetSpecialAction("oid=26135581", 'on', -1, 1);
      cm.npc_setForceFlip("oid=26135580", -1);
      cm.npc_setForceFlip("oid=26135581", -1);
      cm.npc_ChangeController(1540710, "oid=26135582", 3656, -10, 8, 3606, 3706, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=26135582", "summon", 0, 0);
      cm.npc_setForceFlip("oid=26135582", 1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_SetHideEffect(0);
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.npc_ChangeController(1540490, "oid=26136124", 1450, 5, 5, 1400, 1500, 0, true, 0, false);
              cm.npc_SetSpecialAction("oid=26136124", "summon", 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(300);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushMoveInfo(0, 1500, 3400, 0);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#终于到外面啦。", 37, 1540490, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushMoveInfo(1, 2000, 0, 0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_同时移动镜头和人(2, 140);
                        cm.inGameDirectionEvent_AskAnswerTime(600);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=26136124", 1, 100, 150);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.npc_SetSpecialAction("oid=26135580", "pushed", -1, 1);
                            cm.fieldEffect_PlayFieldSound("Sound/Field.img/FriendsStory/BtClose", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.getMap().getReactorByName("wall").forceHitReactor(null, 1, 2074, -283, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 1850, 0);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=26136124", 1, 370, 200);
                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(800);
                                    cm.effect_NormalSpeechBalloon('......', 1, 0, 0, 700, 0, 0, 0, 0, 4, 1540490, cm.getPlayer().getId());
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 3000, 2150, 0);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove("oid=26136124", 1, 270, 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetSpecialAction("oid=26135580", 'on', -1, 1);
                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                        } else {
                                          if (status === V++) {
                                            cm.getMap().getReactorByName('wall').forceHitReactor(null, 0, 2074, -283, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_同时移动镜头和人(2, 280);
                                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 1500, 0, 0, 0, 0, 4, 1540490, cm.getPlayer().getId());
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_同时移动镜头和人(2, 30);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("我们是时候分开了。", 37, 1540490, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("什么？", 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushScaleInfo(3000, 1500, 2000, 2200, 0);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_ChangeController(1540460, "oid=26137304", 3100, 0, 11, 3050, 3150, 0, true, 0, false);
                                                          cm.npc_SetSpecialAction("oid=26137304", "summon", 0, 0);
                                                          cm.npc_SetForceMove("oid=26137304", -1, 600, 250);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 1500, 0, 0, 0, 0, 4, 1540490, cm.getPlayer().getId());
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("啊！奥尔卡！\r\n原来你在这里啊。", 37, 1540460, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  cm.effect_NormalSpeechBalloon('!?', 1, 0, 0, 1500, 0, 0, 0, 0, 4, 1540460, cm.getPlayer().getId());
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_SetForceMove("oid=26137304", -1, 150, 200);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("咿？你也在？", 37, 1540460, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face1#奥尔卡…… ", 37, 1540490, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_SetForceMove("oid=26136124", -1, 5, 100);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("奥尔卡……要救斯乌。\r\n不过，你并没有这个打算啊？", 37, 1540490, false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("我无法相信把斯乌视为怪物的联盟。", 37, 1540490, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom('走吧，弗朗西斯！', 37, 1540490, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_SetForceMove("oid=26137304", 1, 2, 100);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("我们走，奥尔卡！", 37, 1540460, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_SetForceMove("oid=26137304", -1, 10, 100);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("抱歉，我只能跟从奥尔卡，不是吗？嘻嘻。", 37, 1540460, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_SetForceMove("oid=26137304", 1, 1000, 250);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 1500, 2000, 2300, 0);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.npc_SetForceMove("oid=26136124", 1, 10, 100);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.npc_setForceFlip("oid=26136124", 0);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npc_SetForceMove("oid=26136124", 1, 150, 150);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom('奥尔卡！', 57, 0, false, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(200);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.npc_setForceFlip("oid=26136124", 0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                          cm.effect_NormalSpeechBalloon('......', 1, 0, 0, 1000, 0, 0, 0, 0, 4, 1540490, cm.getPlayer().getId());
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#嗯……不过。", 37, 1540490, false, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.npc_SetForceMove("oid=26136124", 1, 100, 150);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#之前还是辛苦你了。\r\n那我先走啦。", 37, 1540490, false, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.npc_SetForceMove("oid=26136124", 1, 1000, 250);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_ChangeController(1540493, "oid=26138311", 1437, -33, 2, 1387, 1487, 0, true, 0, false);
                                                                                                                    cm.npc_SetSpecialAction("oid=26138311", "summon", 0, 0);
                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 1000, 1700, 0);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                        cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                        cm.npc_LeaveField("oid=26136124");
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.npc_SetSpecialAction("oid=26138311", "attack", -1, 1);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2720);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.npc_LeaveField("oid=26138311");
                                                                                                                            cm.npc_LeaveField("oid=26138311");
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.npc_ChangeController(1540751, "oid=26138673", 1460, -33, 2, 1410, 1510, 0, true, 0, false);
                                                                                                                              cm.npc_SetSpecialAction("oid=26138673", "summon", 0, 0);
                                                                                                                              cm.npc_SetForceMove("oid=26138673", 1, 300, 250);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(400);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.npc_ChangeController(1540751, "oid=26138718", 1450, -33, 2, 1400, 1500, 0, true, 0, false);
                                                                                                                                cm.npc_SetSpecialAction("oid=26138718", "summon", 0, 0);
                                                                                                                                cm.npc_SetForceMove("oid=26138718", 1, 200, 250);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(400);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.npc_ChangeController(1540751, "oid=26138775", 1440, -33, 2, 1390, 1490, 0, true, 0, false);
                                                                                                                                  cm.npc_SetSpecialAction("oid=26138775", "summon", 0, 0);
                                                                                                                                  cm.npc_SetForceMove("oid=26138775", 1, 100, 250);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(400);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.npc_ChangeController(1540751, "oid=26138776", 1440, -33, 2, 1390, 1490, 0, true, 0, false);
                                                                                                                                    cm.npc_SetSpecialAction("oid=26138776", "summon", 0, 0);
                                                                                                                                    cm.npc_SetForceMove("oid=26138776", 1, 20, 100);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.npc_SetSpecialAction("oid=26138776", "point", -1, 1);
                                                                                                                                      cm.sendNormalTalk_Bottom('咳！', 57, 0, false, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                      } else if (status === V++) {
                                                                                                                                        cm.dispose();
                                                                                                                                        cm.warp(350053700, 0, true);
                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                        cm.npc_LeaveField("oid=26135580");
                                                                                                                                        cm.npc_LeaveField("oid=26135580");
                                                                                                                                        cm.npc_LeaveField("oid=26135581");
                                                                                                                                        cm.npc_LeaveField("oid=26135581");
                                                                                                                                        cm.npc_LeaveField("oid=26135582");
                                                                                                                                        cm.npc_LeaveField("oid=26136124");
                                                                                                                                        cm.npc_LeaveField("oid=26137304");
                                                                                                                                        cm.npc_LeaveField("oid=26137304");
                                                                                                                                        cm.npc_LeaveField("oid=26138673");
                                                                                                                                        cm.npc_LeaveField("oid=26138673");
                                                                                                                                        cm.npc_LeaveField("oid=26138718");
                                                                                                                                        cm.npc_LeaveField("oid=26138718");
                                                                                                                                        cm.npc_LeaveField("oid=26138775");
                                                                                                                                        cm.npc_LeaveField("oid=26138775");
                                                                                                                                        cm.npc_LeaveField("oid=26138776");
                                                                                                                                        cm.npc_LeaveField("oid=26138776");
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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
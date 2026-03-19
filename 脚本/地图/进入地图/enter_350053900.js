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
      cm.updateInfoQuest(33240, "act5=350053900");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushMoveInfo(0, 1000, -100, -700);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(1540492, "oid=284647294", 360, 0, 5, 310, 410, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=284647294", "summon", 0, 0);
        cm.npc_ChangeController(1540492, "oid=284647295", 610, 0, 1, 560, 660, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=284647295", "summon", 0, 0);
        cm.npc_SetSpecialAction("oid=284647294", 'on', -1, 1);
        cm.npc_SetSpecialAction("oid=284647295", 'on', -1, 1);
        cm.npc_setForceFlip("oid=284647294", -1);
        cm.npc_setForceFlip("oid=284647295", -1);
        cm.npc_ChangeController(1540493, "oid=284647296", -100, 0, 5, -150, -50, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=284647296", 'summon', 0, 0);
        cm.npc_ChangeController(1540493, "oid=284647297", 0, 0, 5, -50, 50, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=284647297", "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
          cm.inGameDirectionEvent_PushMoveInfo(0, 50, 200, -400);
          cm.effect_Text(["#fn黑体##fs18#黑色天堂内部   #fs15##fn黑体#地下深处的某个地方"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=284647296", -1, 100, 200);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=284647297", -1, 50, 200);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.npc_setForceFlip("oid=284647297", 1);
                cm.inGameDirectionEvent_AskAnswerTime(200);
              } else {
                if (status === V++) {
                  cm.npc_setForceFlip("oid=284647296", 1);
                  cm.inGameDirectionEvent_AskAnswerTime(200);
                } else {
                  if (status === V++) {
                    cm.npc_setForceFlip("oid=284647297", -1);
                    cm.inGameDirectionEvent_AskAnswerTime(400);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=284647296", -1);
                      cm.inGameDirectionEvent_PushMoveInfo(0, 150, 200, -400);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=284647297", 1);
                          cm.npc_SetForceMove("oid=284647297", 1, 300, 300);
                          cm.inGameDirectionEvent_AskAnswerTime(600);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=284647296", 1);
                            cm.npc_SetForceMove("oid=284647296", 1, 360, 300);
                            cm.inGameDirectionEvent_AskAnswerTime(2300);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=284647297", "push_start", -1, 1);
                              cm.fieldEffect_PlayFieldSound("Sound/Field.img/FriendsStory/BtClose", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.npc_SetSpecialAction("oid=284647297", 'push_ing', -1, 1);
                                cm.setNpcSpecialActionReset("oid=284647294");
                                cm.npc_SetSpecialAction("oid=284647294", "pushed", -1, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=284647296", 1, 400, 300);
                                  cm.inGameDirectionEvent_AskAnswerTime(1800);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetSpecialAction("oid=284647297", "push_end", -1, 1);
                                    cm.fieldEffect_PlayFieldSound("Sound/Field.img/FriendsStory/BtClose", 100);
                                    cm.setNpcSpecialActionReset("oid=284647294");
                                    cm.npc_SetSpecialAction("oid=284647294", 'on', -1, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_setForceFlip("oid=284647296", -1);
                                      cm.setNpcSpecialActionReset("oid=284647297");
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetSpecialAction("oid=284647296", "push_start", -1, 1);
                                        cm.fieldEffect_PlayFieldSound("Sound/Field.img/FriendsStory/BtClose", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetSpecialAction("oid=284647296", "push_ing", -1, 1);
                                          cm.setNpcSpecialActionReset("oid=284647295");
                                          cm.npc_SetSpecialAction("oid=284647295", "pushed", -1, 1);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=284647297", 1, 150, 200);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetSpecialAction("oid=284647296", "push_end", -1, 1);
                                              cm.fieldEffect_PlayFieldSound("Sound/Field.img/FriendsStory/BtClose", 100);
                                              cm.setNpcSpecialActionReset("oid=284647295");
                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetSpecialAction("oid=284647295", 'on', -1, 1);
                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                              } else {
                                                if (status === V++) {
                                                  cm.setNpcSpecialActionReset("oid=284647296");
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetSpecialAction("oid=284647297", "attack", -1, 1);
                                                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8240084/Attack1", 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_PlayFieldSound("Sound/ItemPot.img/2000/sick", 100);
                                                      cm.npc_SetSpecialAction("oid=284647296", "awaking", -1, 1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.setNpcSpecialActionReset("oid=284647296");
                                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetSpecialAction("oid=284647296", "awaking", -1, 1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.setNpcSpecialActionReset("oid=284647296");
                                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetSpecialAction("oid=284647296", "awaking", -1, 1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.setNpcSpecialActionReset("oid=284647296");
                                                                cm.inGameDirectionEvent_AskAnswerTime(100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetSpecialAction("oid=284647296", "awaking", -1, 1);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.setNpcSpecialActionReset("oid=284647296");
                                                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.setNpcSpecialActionReset("oid=284647297");
                                                                      cm.npc_SetSpecialAction("oid=284647296", "awaking", -1, 1);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.setNpcSpecialActionReset("oid=284647296");
                                                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_SetSpecialAction("oid=284647296", 'awaking', -1, 1);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.setNpcSpecialActionReset("oid=284647296");
                                                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.setNpcSpecialActionReset("oid=284647296");
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.npc_SetSpecialAction("oid=284647296", "push_start", -1, 1);
                                                                                cm.fieldEffect_PlayFieldSound("Sound/Field.img/FriendsStory/BtClose", 100);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetSpecialAction("oid=284647296", 'push_ing', -1, 1);
                                                                                  cm.setNpcSpecialActionReset("oid=284647295");
                                                                                  cm.npc_SetSpecialAction("oid=284647295", "pushed", -1, 1);
                                                                                  cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                  cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/droping2", 100);
                                                                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                  cm.inGameDirectionEvent_MoveAction(4);
                                                                                  cm.emotion(5, 5000);
                                                                                  cm.npc_SetForceMove("oid=284647297", 1, 20, 150);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/koong", 100);
                                                                                    cm.setNpcSpecialActionReset("oid=284647296");
                                                                                    cm.npc_SetSpecialAction("oid=284647296", "attacked", -1, 1);
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/Field.img/FriendsStory/BtClose", 100);
                                                                                    cm.setNpcSpecialActionReset("oid=284647295");
                                                                                    cm.npc_SetSpecialAction("oid=284647295", 'on', -1, 1);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_SetSpecialAction("oid=284647297", 'die', -1, 1);
                                                                                      cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8240084/Die", 100);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1830);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_LeaveField("oid=284647297");
                                                                                        cm.npc_LeaveField("oid=284647297");
                                                                                        cm.npc_SetSpecialAction("oid=284647296", 'awaking', -1, 1);
                                                                                        cm.npc_ChangeController(1540490, "oid=284661213", -10, -630, 13, -60, 40, 0, true, 0, false);
                                                                                        cm.npc_SetSpecialAction("oid=284661213", 'summon', 0, 0);
                                                                                        cm.setNpcSpecialActionReset("oid=284661213");
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                        cm.effect_NormalSpeechBalloon("!!!!", 1, 0, 0, 2000, 1, 0, 0, 0, 4, 1540493, cm.getPlayer().getId());
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.emotion(3, 2180);
                                                                                          cm.npc_SetForceMove("oid=284661213", 1, 100, 200);
                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/droping1", 100);
                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_SetSpecialAction("oid=284661213", 'jump', -1, 1);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.npc_SetSpecialAction("oid=284661213", 'down', -1, 1);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.emotion(5, 3000);
                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/slap3", 100);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(400);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.npc_setForceFlip("oid=284647296", 1);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.npcMove(1540493, 400, 0, 1500);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.npc_LeaveField("oid=284647296");
                                                                                                      cm.npc_LeaveField("oid=284647296");
                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 5000, 125, 50);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face1#呃……", 37, 1540490, false, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#fs20#该死！格里梅尔！你这该死的秃头。", 37, 1540490, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("弗朗西斯。#fs20#弗朗西斯！快回答！", 37, 1540490, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                cm.effect_NormalSpeechBalloon('...', 1, 0, 1, 1000, 1, 0, 0, 0, 4, 1540490, cm.getPlayer().getId());
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face1#……关上了吗。\r\n我得赶紧去找斯乌才行……", 37, 1540490, false, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.setNpcSpecialActionReset("oid=284661213");
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom('呃呃……', 57, 0, false, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.npc_setForceFlip("oid=284661213", -1);
                                                                                                                            cm.npc_SetForceMove("oid=284661213", 1, 50, 200);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.npc_setForceFlip("oid=284661213", 0);
                                                                                                                              cm.npc_SetForceMove("oid=284661213", -1, 10, 50);
                                                                                                                              cm.sendNormalTalk_Bottom("#face2#啊！你搞什么啊？", 37, 1540490, false, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_MoveAction(0);
                                                                                                                                cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom('你是……刚刚那个？', 37, 1540490, false, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("呃……我的腰。\r\n好像只有我们俩掉落到了这里。", 57, 0, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#偏偏和你这个家伙在一起……\r\n哈，还真是没一件顺心的事。", 37, 1540490, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("你听好！我不想再跟你有任何牵扯，你给我老实待着。", 37, 1540490, true, true);
                                                                                                                                          } else if (status === V++) {
                                                                                                                                            cm.dispose();
                                                                                                                                            cm.warp(350053920, 0, true);
                                                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                                                            cm.npc_LeaveField("oid=284647294");
                                                                                                                                            cm.npc_LeaveField("oid=284647294");
                                                                                                                                            cm.npc_LeaveField("oid=284647295");
                                                                                                                                            cm.npc_LeaveField("oid=284647295");
                                                                                                                                            cm.npc_LeaveField("oid=284661213");
                                                                                                                                            cm.npc_LeaveField("oid=284661213");
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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
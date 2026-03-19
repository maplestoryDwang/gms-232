var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  if (cm.isQuestActive(35702) && !cm.isQuestFinished(35702)) {
    action1(f, E, e);
  } else {
    if (cm.isQuestActive(35705)) {
      cm.dispose();
      cm.setPartner(1, 3003760, 80002577, 0);
      cm.setPartner(1, 3003759, 80002579, 0);
    } else {
      if (cm.isQuestFinished(35706) && cm.getQuestStatus(35707) == 0) {
        cm.updateInfoQuest(16925, '');
        cm.setPartner(0, 3003758, 0, 0);
        cm.setPartner(0, 3003759, 0, 0);
        cm.setPartner(0, 3003763, 0, 0);
        cm.setPartner(0, 3003760, 0, 0);
        cm.setPartner(0, 3003764, 0, 0);
        cm.updateInfoQuest(35751, "800=h0;90=h0;91=h1;92=h0;93=h0;94=h0;95=h0;96=h1;87=h1;97=h0;88=h0;98=h0;89=h0;99=h1");
        cm.updateInfoQuest(35751, "800=h0;90=h0;91=h1;92=h0;93=h0;94=h0;95=h0;96=h0;87=h1;97=h0;88=h0;98=h0;89=h0;99=h1");
        cm.updateInfoQuest(35751, "800=h0;90=h0;91=h1;92=h0;93=h0;94=h0;95=h0;96=h0;87=h1;97=h0;88=h1;98=h0;89=h0;99=h1");
        cm.updateInfoQuest(35751, "800=h0;90=h0;91=h1;92=h0;93=h1;94=h0;95=h0;96=h0;87=h1;97=h0;88=h1;98=h0;89=h0;99=h1");
        cm.updateInfoQuest(35751, "800=h0;90=h0;91=h1;92=h1;93=h1;94=h0;95=h0;96=h0;87=h1;97=h0;88=h1;98=h0;89=h0;99=h1");
        cm.updateInfoQuest(35751, "800=h0;90=h0;91=h1;92=h1;93=h1;94=h0;95=h0;96=h0;87=h1;97=h1;88=h1;98=h0;89=h0;99=h1");
        cm.updateInfoQuest(35751, "800=h0;90=h0;91=h1;92=h1;93=h1;94=h0;95=h1;96=h0;87=h1;97=h1;88=h1;98=h0;89=h0;99=h1");
        cm.dispose();
      } else {
        if (cm.isQuestFinished(35707) && cm.getQuestStatus(35708) == 0) {
          action2(f, E, e);
        } else {
          if (cm.isQuestFinished(35708) && cm.getQuestStatus(35709) == 0) {
            action3(f, E, e);
          } else {
            if (cm.isQuestFinished(35712) && cm.getQuestStatus(35713) == 0) {
              cm.dispose();
              cm.endQuestScript(0, 35712);
            } else {
              if (cm.isQuestFinished(35713) && cm.getQuestStatus(35714) == 0) {
                action4(f, E, e);
              } else {
                if (cm.isQuestFinished(35716) && cm.getQuestStatus(35717) == 0) {
                  action5(f, E, e);
                } else {
                  if (cm.isQuestFinished(35717) && cm.getQuestStatus(35718) == 0) {
                    cm.dispose();
                    cm.startQuestScript(0, 35718);
                  } else {
                    if (cm.isQuestFinished(35723) && cm.getQuestStatus(35724) == 0) {
                      action6(f, E, e);
                    } else {
                      if (cm.isQuestFinished(35724) && cm.getQuestStatus(35725) == 0) {
                        action7(f, E, e);
                      } else {
                        if (cm.isQuestFinished(35725) && cm.getQuestStatus(35726) == 0) {
                          action8(f, E, e);
                        } else {
                          if (cm.isQuestFinished(35726) && cm.getQuestStatus(35727) == 0) {
                            action9(f, E, e);
                          } else {
                            if (cm.isQuestFinished(35726) && cm.getInfoQuest(35727) == "dir1=3") {
                              action10(f, E, e);
                            } else {
                              if (cm.isQuestFinished(35728) && cm.getQuestStatus(35729) == 0) {
                                action11(f, E, e);
                              } else if (cm.getMapId() == 450011220) {
                                if (cm.getItemQuantity(4036454) >= 50 && cm.getInfoQuest(35717) != "clear=end") {
                                  cm.updateInfoQuest(62461, "han=2;date=20/02/03");
                                  cm.updateInfoQuest(35717, "clear=1");
                                  cm.monadForceMove('appear', 0, 0);
                                  cm.monadForceMove("disappear", 1, 0);
                                  cm.dispose();
                                } else {
                                  cm.dispose();
                                }
                              } else {
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
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.updateInfoQuest(16925, '');
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -740, 140);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.updateInfoQuest(35751, "800=h1;90=h1;91=h1;92=h1;93=h1;94=h1;95=h1;96=h1;87=h1;97=h1;88=h1;98=h1;89=h1;99=h1");
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_OneTimeAction(25, 7000);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.effect_Text(["#fn黑体##fs18#痛苦迷宫内部，掉落地点"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(5000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("咳咳……", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("大家都还好吗？", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#是，我们没事！", 37, 3003760, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#这里是哪里呢？", 37, 3003758, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#周围都是这种路，曲折蜿蜒。", 37, 3003758, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#有几个人不见了！梅尔朗也不见了！无法进行通讯！", 37, 3003759, true, true);
                          } else {
                            if (status === V++) {
                              cm.updateInfoQuest(35702, "toMaze=end;dir=end");
                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                  } else if (status === V++) {
                                    cm.setStandAloneMode(false);
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
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.playerMessage(1, 'ss');
      cm.updateInfoQuest(16925, '');
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -616, 162);
      cm.updateInfoQuest(35751, "800=h0;90=h0;91=h1;92=h1;93=h0;94=h0;95=h1;96=h0;87=h1;97=h1;88=h1;98=h0;89=h0;99=h1");
      cm.updateInfoQuest(35751, "800=h0;90=h0;91=h1;92=h1;93=h0;94=h0;95=h1;96=h0;87=h1;97=h0;88=h1;98=h0;89=h0;99=h1");
      cm.updateInfoQuest(35751, "800=h0;90=h0;91=h1;92=h0;93=h0;94=h0;95=h1;96=h0;87=h1;97=h0;88=h1;98=h0;89=h0;99=h1");
      cm.updateInfoQuest(35751, "800=h0;90=h0;91=h1;92=h0;93=h0;94=h0;95=h1;96=h0;87=h1;97=h0;88=h0;98=h0;89=h0;99=h1");
      cm.updateInfoQuest(35751, "800=h0;04=h5;90=h0;91=h1;92=h0;93=h0;94=h0;95=h1;96=h0;87=h1;97=h0;88=h0;98=h0;89=h0;99=h1");
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(3003732, "oid=2306840", -200, 180, 4, -250, -150, 1, false, 1000, false);
        cm.npc_SetSpecialAction("oid=2306840", 'summon', 0, 0);
        cm.npc_ChangeController(3003733, "oid=2306841", -400, 180, 6, -450, -350, 1, false, 1000, false);
        cm.npc_SetSpecialAction("oid=2306841", 'summon', 0, 0);
        cm.npc_ChangeController(3003733, "oid=2306842", -50, 180, 8, -100, 0, 1, false, 1000, false);
        cm.npc_SetSpecialAction("oid=2306842", 'summon', 0, 0);
        cm.npc_SetSpecialAction("oid=2306840", "stand", -1, 1);
        cm.npc_SetSpecialAction("oid=2306841", "stand", -1, 1);
        cm.npc_SetSpecialAction("oid=2306842", "stand", -1, 1);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_OneTimeAction(10, 0);
            cm.fieldEffect_PlayFieldSound("Sound/MiniGame.img/othello/criHit", 200);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=2306840", "die1", 2400, 1);
              cm.npc_SetSpecialAction("oid=2306841", 'die1', 2400, 1);
              cm.npc_SetSpecialAction("oid=2306842", "die1", 2400, 1);
              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644702/die", 100);
              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644703/die", 100);
              cm.inGameDirectionEvent_AskAnswerTime(1600);
            } else {
              if (status === V++) {
                cm.npc_LeaveField("oid=2306840");
                cm.npc_LeaveField("oid=2306840");
                cm.npc_LeaveField("oid=2306841");
                cm.npc_LeaveField("oid=2306841");
                cm.npc_LeaveField("oid=2306842");
                cm.npc_LeaveField("oid=2306842");
                cm.updateInfoQuest(35704, "MazeAlarm=3;set1=1;set2=2;set3=2");
                cm.updateInfoQuest(35704, "MazeAlarm=3;set1=1;set2=1;set3=2");
                cm.updateInfoQuest(35704, "MazeAlarm=3;set1=1;set2=1;set3=1");
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("哈……要在这里结束吗。", 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("大家都还好吗？", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#咳……", 37, 3003758, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#有两个人受伤了，在追赶撤退的人的时候……", 37, 3003759, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("咳……原来如此……那么现在还剩下……", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_ForcedFlip(-1);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("……？", 57, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("……！", 57, 0, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, -1050, 150);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_同时移动镜头和人(1, 350);
                                          cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1000, 1000, -877, 50);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak"], [0, -1120, 180, 1, 0, 1, 1, 0]);
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom('其他人都去哪里了？', 57, 0, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak"], [0, -1120, 180, 1, 0, 1, 1, 0]);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("旁边……那两个人怎么样了？", 57, 0, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak"], [0, -1120, 180, 1, 0, 1, 1, 0]);
                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("请回答我！那两个人怎么样了！", 57, 0, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.updateInfoQuest(35707, 'dir=end');
                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                  } else if (status === V++) {
                                                                    cm.setStandAloneMode(false);
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
}
function action3(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 906, 168);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_LeaveField("oid=50981");
        cm.npc_LeaveField("oid=50984");
        cm.npc_LeaveField("oid=50985");
        cm.npc_LeaveField('oid=50989');
        cm.npc_LeaveField('oid=50990');
        cm.npc_LeaveField("oid=50993");
        cm.npc_LeaveField('oid=50996');
        cm.updateInfoQuest(35751, "800=h0;04=h5;90=h0;91=h0;92=h0;93=h0;94=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
        cm.updateInfoQuest(35751, "800=h0;04=h3;90=h0;91=h0;92=h0;93=h0;94=h0;95=h0;96=h0;87=h0;97=h0;88=h0;98=h0;89=h0;99=h0");
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("怎……怎么会……这应该是……连接着之前战舰坠落的地方吧？", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM2/novasmile2", 100);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("啊！战舰中剩下的人……", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_同时移动镜头和人(1, 1700);
                  cm.inGameDirectionEvent_AskAnswerTime(10000);
                } else {
                  if (status === V++) {
                    cm.npc_LeaveField("oid=50980");
                    cm.npc_LeaveField('oid=50982');
                    cm.npc_LeaveField("oid=50986");
                    cm.npc_LeaveField("oid=50988");
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                          } else if (status === V++) {
                            cm.setStandAloneMode(false);
                            cm.setInGameDirectionMode(false, true, false);
                            cm.updateInfoQuest(35708, "dir=end;ask=1");
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
function action4(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.monadForceMove('appear', 0, 0);
      cm.monadForceMove("disappear", 1, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -1248, 164);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ChangeEquipment([1103137]);
        cm.inGameDirectionEvent_同时移动镜头和人(2, 1000);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom('哈……哈……', 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(2, 700);
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_ForcedFlip(1);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_ForcedFlip(-1);
                  cm.inGameDirectionEvent_同时移动镜头和人(1, 1000);
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("现在才拉出来？", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#唔……嗯……", 37, 3003769, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                          cm.inGameDirectionEvent_ChangeEquipment([0]);
                          cm.inGameDirectionEvent_ForcedFlip(1);
                          cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;03=h1;04=h0;14=h1;05=h5;15=h1;17=h0;09=h0;79=h1");
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                } else if (status === V++) {
                                  cm.setStandAloneMode(false);
                                  cm.setInGameDirectionMode(false, true, false);
                                  cm.updateInfoQuest(35713, "dir=end;clear=1");
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
function action5(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.updateInfoQuest(16925, '');
      cm.monadForceMove('appear', 0, 0);
      cm.monadForceMove("disappear", 1, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -529, 90);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -529, 160);
        cm.inGameDirectionEvent_ForcedFlip(1);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;03=h1;04=h0;14=h0;05=h5;06=h1;15=h1;17=h0;09=h0;79=h1");
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face2#咻……还是又回来了。真是白费力气……", 37, 3003770, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("不过……好像甩开了怪物。", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(大家应该都没事吧……)", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2##h0#？你在听我说话吗？", 37, 3003770, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('嗯？', 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#咻……你真是在想什么呢？？\r\n你想不想找到其他人然后离开这里了？", 37, 3003770, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("啊……抱歉啊，你说了什么？", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face2##h0#看来确实是完全没有搜查的天赋，以后还是请你跟着我走吧！", 37, 3003770, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#我不想再浪费时间了。", 37, 3003770, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("好的……", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(总感觉……有点怪怪的……)", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                        } else if (status === V++) {
                                          cm.setStandAloneMode(false);
                                          cm.setInGameDirectionMode(false, true, false);
                                          cm.updateInfoQuest(35716, "dir=end");
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
function action6(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.monadForceMove('appear', 0, 0);
      cm.monadForceMove('disappear', 1, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.updateInfoQuest(35750, "01=h0;11=h0;02=h0;21=h2;03=h1;22=h2;04=h0;23=h2;14=h0;05=h5;06=h0;15=h1;07=h0;17=h0;09=h0;79=h1");
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -909, 169);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ForcedFlip(1);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("咳……咳……", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("真的……只有我一个人了吗……？", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("大家都变成了那样……？", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("我……能做什么呢……？", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("像这样什么也做不了……", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak"], [0, 0, 0, 1, 0, 0, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("必须离开这里……", 57, 0, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("先……离开吧……", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("那……会有路的。", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_同时移动镜头和人(2, 1500);
                              cm.inGameDirectionEvent_AskAnswerTime(5000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("这条路是……", 57, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                        } else if (status === V++) {
                                          cm.setStandAloneMode(false);
                                          cm.setInGameDirectionMode(false, true, false);
                                          cm.updateInfoQuest(35723, 'dir=end');
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
function action7(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.updateInfoQuest(16925, '');
      cm.monadForceMove("appear", 0, 0);
      cm.monadForceMove("disappear", 1, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 1006, 169);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_同时移动镜头和人(1, 300);
          cm.inGameDirectionEvent_AskAnswerTime(3000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom('咳……咳……', 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("难道……所有的联盟成员……都变成了那样……？", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3"], [0, 0, 0, 1, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(2000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("哈……哈哈……", 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom('刚才……那……里？', 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("居然……", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("真的……出不去了吗……？", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/scream/3", 128);
                            cm.sendNormalTalk_Bottom("#face1#呃……呃……", 37, 3003767, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#救……救命……", 37, 3003767, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_同时移动镜头和人(1, 300);
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("这个……也都是假的……", 57, 0, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/scream/4", 128);
                                      cm.sendNormalTalk_Bottom("#face1#不能就这么死……", 37, 3003767, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("我不能再被希拉愚弄了。", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_同时移动镜头和人(1, 600);
                                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayFieldSound("Sound/Voice4.img/BM2/scream/2", 128);
                                              cm.sendNormalTalk_Bottom("#face1#不……不……", 37, 3003767, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1#呃……啊啊啊啊！！", 37, 3003767, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                      } else if (status === V++) {
                                                        cm.setStandAloneMode(false);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.updateInfoQuest(35724, 'dir=end');
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
function action8(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.updateInfoQuest(16925, '');
      cm.monadForceMove('appear', 0, 0);
      cm.monadForceMove('disappear', 1, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -316, 166);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(大家……都……？)", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(守护冒险岛世界的人也……？)", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(去找黑魔法师的我们也……？)", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.setAmbience("SoundEff.img/BM2/voiceGstand", 80, 100);
                  cm.sendNormalTalk_Bottom("咳……又开始……", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("声音……声音！！！又开始出现在脑海里了！！！", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_OneTimeAction(25, 99999);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#救救我……", 37, 3003767, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(可循着惨叫声找过去，只有身份不明的人而已。)", 57, 0, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(发生变化的联盟成员……真的是联盟成员吗……？)", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#……和我们一起……", 37, 3003767, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(迷宫一直在变化，但却看不到路。)", 57, 0, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(不……也许一开始就没有路……)", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(现在已经没力气继续走了。)", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#……在这里舒舒服服地……", 37, 3003767, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(我……永远都无法逃离希拉的掌心吗……)", 57, 0, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#现在……", 37, 3003767, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#r在这里……放弃一切会觉得轻松吗……#k", 57, 0, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 5000, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(眼前一片黑暗。我慢慢闭上了眼……)", 57, 0, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM2/gateclose", 100);
                                                                    cm.fieldEffect_SaveEff("Map/Effect3.img/BM2/gate2");
                                                                    cm.inGameDirectionEvent_AskAnswerTime(6000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                          } else if (status === V++) {
                                                                            cm.dispose();
                                                                            cm.warp(993063049, 0, true);
                                                                            cm.setStandAloneMode(false);
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
  }
}
function action9(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 750, 190);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 529, 164);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_OneTimeAction(25, 99999);
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 10000, 0);
          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM2/gateopen", 100);
          cm.fieldEffect_SaveEff("Map/Effect3.img/BM2/gate");
          cm.inGameDirectionEvent_AskAnswerTime(6000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_OneTimeAction(2, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("咳……咳……", 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("过了……多久了……呢……？", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_ForcedFlip(1);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_ForcedFlip(-1);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_ForcedFlip(1);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_ForcedFlip(-1);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/exclamation3"], [0, 0, 0, 1, 0, 0, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("这里是……", 57, 0, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("究竟是什么时候……？", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("太……不像话了……", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction20.img/effect/BM2_hillahMaze/0", 0, 1500, 0, -80, 12, 4, 1, -1, 0, 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("不能……离开……这里吗……？", 57, 0, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("啊……啊……", 57, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("不行！！！", 57, 0, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction20.img/effect/BM2_hillahMaze/1", 0, 1500, 0, -80, 12, 4, 1, -1, 0, 0, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#只要有非常非常小的缝隙，总有一天就会让一切崩塌。", 37, 3003771, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.effect_Voice("Voice4.img/BM2/H2/1_1", 128);
                                                    cm.sendNormalTalk_Bottom("#face0#现在一切都准备好了。伟大的大人！一切都如您所愿！", 37, 3003771, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.effect_Voice("Voice4.img/BM2/H2/2_2", 128);
                                                      cm.sendNormalTalk_Bottom("#face0#哈哈哈哈哈哈！", 37, 3003771, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.effect_Voice("Voice4.img/BM2/H_effect/2_4", 128);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                          cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                    } else if (status === V++) {
                                                                      cm.setStandAloneMode(false);
                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                      cm.updateInfoQuest(35726, "dir=end");
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
function action10(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 529, 164);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom('白费力气……？？', 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("没办法出去……？永远……？", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("我……不可能……", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("你想告诉我什么，希拉……？", 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_OneTimeAction(25, 99999);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("咳……脑袋……", 57, 0, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction20.img/effect/BM2_mapleAttack/0", 0, 1500, 0, -80, 12, 4, 1, -1, 0, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#违抗那位大人的人只有死路一条。", 37, 3003771, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction20.img/effect/BM2_mapleAttack/1", 0, 1500, 0, -80, 12, 4, 1, -1, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#你的选择是什么呢？啊，当然……", 37, 3003771, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_ProcessOnOffLayer('02', "Effect/Direction20.img/effect/BM2_mapleAttack/2", 0, 1500, 0, -80, 12, 4, 1, -1, 0, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#那些人已经没机会选择了。", 37, 3003771, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#哈哈哈哈哈！", 37, 3003771, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("已经……没机会了……？", 57, 0, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("我……只能这么……这么虚弱……", 57, 0, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("只能被希拉玩弄于股掌之间吗……？", 57, 0, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("她究竟想要什么……？", 57, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("那我究竟要在这里到什么时候……", 57, 0, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("像这样……", 57, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("这样……徘徊……？？", 57, 0, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("到什么时候……？", 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("哈哈……", 57, 0, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("真是……可笑啊……？", 57, 0, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("这样的我……什么也做不到……", 57, 0, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("还怎么……拯救世界……？", 57, 0, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom('哈哈哈哈……', 57, 0, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                            cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                            cm.fieldEffect_ProcessOnOffLayer('02', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                                                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                      } else if (status === V++) {
                                                                                        cm.setStandAloneMode(false);
                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                        cm.forceCompleteQuest(35727);
                                                                                        cm.gainExp(512014069);
                                                                                        cm.updateInfoQuest(35727, "dir1=3;dir=end");
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
              }
            }
          }
        }
      }
    }
  }
}
function action11(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("哈……哈哈……", 57, 0, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom('又一次……？', 57, 0, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("真的无法逃出去吗？绝对……？", 57, 0, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("你对我做了什……", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("做了什么！", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('咳……咳……', 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#fc0xFFAAAAAA#(时间过了多久呢？)", 57, 0, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("哈……真是……累了……", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("冒险岛世界已经……", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("就算离开这里……#r我还有……", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#r能回去的地方吗……？", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#在这里……和我们一起……", 37, 3003767, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#永远……", 37, 3003767, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("哈哈……", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("声音……总能听到声音……", 57, 0, true, true);
                                } else if (status === V++) {
                                  cm.updateInfoQuest(35728, 'dir=end');
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
function action12(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {}
  }
}
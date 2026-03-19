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
      cm.setAmbience("Ambience.img/gravity", 100, 60);
      cm.showMapleHero();
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.npc_ChangeController(1540818, "oid=288197674", 154, 0, 3, 104, 204, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=288197674", "summon", 0, 0);
        cm.inGameDirectionEvent_MoveAction(2);
        cm.inGameDirectionEvent_PushScaleInfo(2000, 1500, 2000, 103, 245);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(0);
            cm.npc_ChangeController(1540817, "oid=288198265", 715, 0, 2, 665, 765, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=288198265", "summon", 0, 0);
            cm.npc_ChangeController(1540817, "oid=288198266", 715, 0, 2, 665, 765, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=288198266", "summon", 0, 0);
            cm.npc_ChangeController(1540817, "oid=288198267", 715, 0, 2, 665, 765, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=288198267", "summon", 0, 0);
            cm.npc_ChangeController(1540817, "oid=288198269", 715, 0, 2, 665, 765, 1, true, 0, false);
            cm.npc_SetSpecialAction("oid=288198269", "summon", 0, 0);
            cm.npc_SetForceMove("oid=288198265", -1, 615, 300);
            cm.npc_SetForceMove("oid=288198266", -1, 557, 300);
            cm.npc_SetForceMove("oid=288198267", -1, 301, 300);
            cm.npc_SetForceMove("oid=288198269", -1, 249, 300);
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('……小蜘蛛吗？', 37, 1540807, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face3#这怎么可能，它们在试图保护母亲。", 37, 1540805, true, true);
              } else {
                if (status === V++) {
                  cm.setNpcSpecialActionReset("oid=288198265");
                  cm.setNpcSpecialActionReset("oid=288198266");
                  cm.setNpcSpecialActionReset("oid=288198267");
                  cm.setNpcSpecialActionReset("oid=288198269");
                  cm.npc_SetSpecialAction("oid=288198265", "cry", -1, 0);
                  cm.npc_SetSpecialAction("oid=288198266", "cry", -1, 0);
                  cm.npc_SetSpecialAction("oid=288198267", "cry", -1, 0);
                  cm.npc_SetSpecialAction("oid=288198269", "cry", -1, 0);
                  cm.setAmbience("Field.img/dolphin/no_food", 30, 60);
                  cm.sendNormalTalk_Bottom("你还在犹豫什么？当然要一网打尽。", 37, 1540802, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("真心的，战神？连那些小蜘蛛也要吗？", 37, 1540806, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("这是当然，你没看到它们额头的纹样吗？肯定是被邪恶气息操纵了。", 37, 1540802, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("……连小蜘蛛也全都要？", 37, 1540806, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("这是当然，要是它们日后为了报仇，堵住我们的去路要怎么办？\r\n如果你不打算全都留活口，就全都灭掉。", 37, 1540802, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("但是它们感染得并不严重，其实无异于是一般的野生动物，\r\n既然没有侵犯到人类的领地……", 37, 1540806, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("等一下！我们没时间为了这种事争执了，龙神，你来决定。", 37, 1540802, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#我吗？", 37, 1540805, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("没错，既然我们意见有分歧，剩下的一票由你来投是最干净利落的吧？", 37, 1540802, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#我同意，我会无条件尊重你的决定的。", 37, 1540806, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.askMenu_Bottom("该怎么办？\r\n#b#L0#消灭掉#l\r\n#L1#留活口#l", 37, 1540802);
                                      } else {
                                        if (status === V++) {
                                          cm.updateInfoQuest(33927, "spare=1;ice=25");
                                          cm.setNpcSpecialActionReset("oid=288197674");
                                          cm.npc_SetSpecialAction("oid=288197674", "notdie", 0, 0);
                                          cm.playSoundEffDirectly("Field.img/dolphin/no_food");
                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/waddler/notdie", 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(600);
                                        } else {
                                          if (status === V++) {
                                            cm.setNpcSpecialActionReset("oid=288197674");
                                            cm.setNpcSpecialActionReset("oid=288198265");
                                            cm.setNpcSpecialActionReset("oid=288198266");
                                            cm.setNpcSpecialActionReset("oid=288198267");
                                            cm.setNpcSpecialActionReset("oid=288198269");
                                            cm.setAmbience("SoundEff.img/HofM/waddler/move2", 80, 60);
                                            cm.npc_SetSpecialAction("oid=288197674", 'move2', -1, 0);
                                            cm.npc_SetSpecialAction("oid=288198265", "move2", -1, 0);
                                            cm.npc_SetSpecialAction("oid=288198266", "move2", -1, 0);
                                            cm.npc_SetSpecialAction("oid=288198267", "move2", -1, 0);
                                            cm.npc_SetSpecialAction("oid=288198269", 'move2', -1, 0);
                                            cm.npc_setForceFlip("oid=288197674", 1);
                                            cm.npc_setForceFlip("oid=288198265", 1);
                                            cm.npc_setForceFlip("oid=288198266", 1);
                                            cm.npc_setForceFlip("oid=288198267", 1);
                                            cm.npc_setForceFlip("oid=288198269", 1);
                                            cm.npc_SetForceMove("oid=288197674", 1, 415, 300);
                                            cm.npc_SetForceMove("oid=288198265", 1, 615, 300);
                                            cm.npc_SetForceMove("oid=288198266", 1, 557, 300);
                                            cm.npc_SetForceMove("oid=288198267", 1, 301, 300);
                                            cm.npc_SetForceMove("oid=288198269", 1, 249, 300);
                                            cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, -97, 245);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                            } else {
                                              if (status === V++) {
                                                cm.playSoundEffDirectly("SoundEff.img/HofM/waddler/move2");
                                                cm.npc_LeaveField("oid=288197674");
                                                cm.npc_LeaveField("oid=288197674");
                                                cm.npc_LeaveField("oid=288198265");
                                                cm.npc_LeaveField("oid=288198265");
                                                cm.npc_LeaveField("oid=288198266");
                                                cm.npc_LeaveField("oid=288198266");
                                                cm.npc_LeaveField("oid=288198267");
                                                cm.npc_LeaveField("oid=288198267");
                                                cm.npc_LeaveField("oid=288198269");
                                                cm.npc_LeaveField("oid=288198269");
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("你考虑得很对，有时候胜者也需要慈悲。", 37, 1540806, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face4#我也不知道我这个决定是否正确。", 37, 1540805, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("正确答案是不存在的，重要的是不管做出什么样的选择都不要后悔。", 37, 1540806, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/HofM/act1/AF_roar", 100);
                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.userSetFieldFloating(350112250, 5, 5, 5);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.userSetFieldFloating(350112250, 0, 0, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face3#阿弗利埃！就在附近！", 37, 1540805, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, -27, 245);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_MoveAction(2);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(700);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_MoveAction(0);
                                                                        cm.sendNormalTalk_Bottom("主人……我很害怕亲眼见证到底发生了什么事情。", 37, 1540807, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face3#但是我们必须得去，米乐。", 37, 1540805, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_MoveAction(2);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) * 4);
                                                                                  cm.forceCompleteQuest(33924);
                                                                                  cm.gainExp(Math.pow(cm.getLevel(), 3) * 4);
                                                                                  cm.updateInfoQuest(33960, "33920=1;33921=1;33922=1;33923=1;33924=1");
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                  cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                  } else if (status === V++) {
                                                                                    cm.setPartner(0, 1540785, 0, 0);
                                                                                    cm.setPartner(0, 1540781, 0, 0);
                                                                                    cm.dispose();
                                                                                    cm.warp(350112300, 0, false);
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
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;
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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(9400031, "oid=19788323", -640, 316, 7, -690, -590, 0, true, false);
      cm.npc_SetSpecialAction("oid=19788323", 'summon', 0, 0);
      cm.npc_ChangeController(9400032, "oid=19788324", -130, 316, 9, -180, -80, 0, true, false);
      cm.npc_SetSpecialAction("oid=19788324", "summon", 0, 0);
      cm.npc_ChangeController(9400033, "oid=19788325", -60, 316, 14, -110, -10, 0, true, false);
      cm.npc_SetSpecialAction("oid=19788325", "summon", 0, 0);
      cm.npc_ChangeController(9400034, "oid=19788326", 140, 316, 13, 90, 190, 0, true, false);
      cm.npc_SetSpecialAction("oid=19788326", "summon", 0, 0);
      cm.npc_ChangeController(9400035, "oid=19788327", -190, 316, 2, -240, -140, 0, true, false);
      cm.npc_SetSpecialAction("oid=19788327", 'summon', 0, 0);
      cm.npc_ChangeController(9400051, "oid=19788328", 628, 316, 12, 578, 678, 1, false, false);
      cm.npc_SetSpecialAction("oid=19788328", 'summon', 0, 0);
      cm.npc_ChangeController(9400052, "oid=19788329", 60, 316, 15, 10, 110, 0, false, false);
      cm.npc_SetSpecialAction("oid=19788329", "summon", 0, 0);
      cm.npc_ChangeController(9400041, "oid=19788330", 250, 316, 10, 200, 300, 1, true, false);
      cm.npc_SetSpecialAction("oid=19788330", "summon", 0, 0);
      cm.npc_ChangeController(9400041, "oid=19788331", 410, 316, 17, 360, 460, 1, true, false);
      cm.npc_SetSpecialAction("oid=19788331", 'summon', 0, 0);
      cm.npc_SetSpecialAction("oid=19788330", 'catch', -1, 0);
      cm.npc_SetSpecialAction("oid=19788331", 'group', -1, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_SetForceMove("oid=19788323", 1, 320, 150);
        cm.inGameDirectionEvent_AskAnswerTime(5200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -10, 350);
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
                  cm.npc_setForceFlip("oid=19788327", -1);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.npc_setForceFlip("oid=19788324", -1);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=19788325", -1);
                      cm.sendNormalTalk_Bottom("喂~你怎么现在才来啊？", 37, 9400032, false, true);
                    } else {
                      if (status === V++) {
                        cm.npc_SetForceMove("oid=19788323", 1, 20, 100);
                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("哎？我最晚吗？", 37, 9400031, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("快来，现在可是个重要的时候啊。", 37, 9400035, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("嗯？什么？", 37, 9400031, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.npc_setForceFlip("oid=19788327", 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.npc_setForceFlip("oid=19788324", 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("杰特在把抓捕的宇宙APORD余孽交给同伴之前，正在寻找主谋者。", 37, 9400033, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=19788323"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face2#是吗~？！", 37, 9400031, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 200, 350);
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
                                                    cm.npc_setForceFlip("oid=19788325", 0);
                                                    cm.npc_SetForceMove("oid=19788326", 1, 20, 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("来，快点回答我问的话。这样你还能减点刑。", 37, 9400034, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetForceMove("oid=19788323", 1, 20, 100);
                                                        cm.npc_SetForceMove("oid=19788324", 1, 20, 100);
                                                        cm.npc_SetForceMove("oid=19788325", 1, 20, 100);
                                                        cm.npc_SetForceMove("oid=19788327", 1, 20, 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_setForceFlip("oid=19788330", 1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("哼！你觉得我会相信吗！", 37, 9400041, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/angry", "oid=19788326"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("嗯……不行啊，那我就得采取点特殊措施了……？！", 37, 9400034, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("嘻嘻！啊，哈哈哈哈，嘻嘻嘻。别挠了，哈哈哈哈哈，嘻嘻嘻TT", 37, 9400041, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.npc_setForceFlip("oid=19788330", 0);
                                                                          cm.sendNormalTalk_Bottom("我说……我说还不行吗……TT", 37, 9400041, false, true);
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
                                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=19788330"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face1#好，一开始就应该这么做嘛。", 37, 9400034, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("其实……我没见过上头的人。我只是按照指令去做。", 37, 9400041, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("我知道了，那你就原原本本地说清楚。", 37, 9400034, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("其实，我们穿梭在各个行星之间，寻找并抓住灵力强大的动物。", 37, 9400041, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("然后在宇宙飞船内部的实验室里，吸收动物们的灵力，制造克隆动物……", 37, 9400041, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("所以，你们打算用这些克隆动物做什么呢？", 37, 9400034, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("那个……那个……据说是为了组成那个人的军队……", 37, 9400041, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#军队？！", 37, 9400034, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("那个人是谁，为什要组建军队？！", 37, 9400034, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("我就只知道这么多，我只是接到了指示，只要有一点能力的动物都要抓来。", 37, 9400041, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("请相信我，我说的都是实话，像我这样的小喽啰只是按他们说的去做……", 37, 9400041, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("我也没见过上头的人，只是听说过这些事情……", 37, 9400041, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("(军队……今后还会发生什么可怕的事情呢……)", 57, 0, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face1#嗯……既然你也不知道更多的东西了，问了也白问。现在你该去为你的罪行付出代价了。", 37, 9400034, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("我……我能减轻一点刑罚吧？是吧？！！", 37, 9400041, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.npc_setForceFlip("oid=19788330", 1);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.npc_setForceFlip("oid=19788330", 0);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.npc_setForceFlip("oid=19788330", 1);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.npc_setForceFlip("oid=19788330", 0);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=19788330"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("你犯了什么罪自己最清楚，那么……再见了。", 37, 9400034, false, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.npc_setForceFlip("oid=19788326", 1);
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face1#这些罪犯就交给你们了，他们都是些狡猾的家伙，你们可要好好看管哦~", 37, 9400034, false, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.npc_setForceFlip("oid=19788326", 0);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.fieldEffect_ProcessOnOffLayer('0', "Map/EffectPL.img/MDIllust/illust6", 0, 1500, 0, 0, 14, 4, 0);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.npc_LeaveField("oid=19788330");
                                                                                                                                                cm.npc_LeaveField("oid=19788331");
                                                                                                                                                cm.npc_setForceFlip("oid=19788326", 1);
                                                                                                                                                cm.fieldEffect_ProcessOnOffLayer('0', '', 2, 1500, 0, 0, 0, 0, 0);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.sendNormalTalk_Bottom("嗯，这就是所有人了吗，船长？", 37, 9400051, false, true);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.sendNormalTalk_Bottom("我还以为是个很大的集团呢。", 37, 9400052, true, true);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.sendNormalTalk_Bottom("现在，有一部分人在我们攻击时逃走了……宇宙飞船里应该还有罪犯……", 37, 9400034, true, true);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.sendNormalTalk_Bottom("别担心，我会处理的。", 37, 9400034, true, true);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.sendNormalTalk_Bottom("好，这些就是抓住宇宙APORD的赏金！但是，因为你没能抓到所有人，所以就先给你一部分。", 37, 9400052, true, true);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.sendNormalTalk_Bottom("#face1#呃……好吧，我把剩下的那些家伙也抓住就行了吧，谢啦~", 37, 9400034, true, true);
                                                                                                                                                          } else {
                                                                                                                                                            if (status === V++) {
                                                                                                                                                              cm.sendNormalTalk_Bottom("那就下次再联系吧！再见！", 37, 9400052, true, true);
                                                                                                                                                            } else {
                                                                                                                                                              if (status === V++) {
                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2200);
                                                                                                                                                              } else {
                                                                                                                                                                if (status === V++) {
                                                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                                } else {
                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.forceCompleteQuest(59738);
                                                                                                                                                                        cm.fieldEffect_KinesisEXP(Math.pow(cm.getLevel(), 3) / 2);
                                                                                                                                                                        cm.gainExp(Math.pow(cm.getLevel(), 3) / 2);
                                                                                                                                                                        cm.updateInfoQuest(59764, "1=1;2=1;3=1;5=1;6=1");
                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(4200);
                                                                                                                                                                      } else if (status === V++) {
                                                                                                                                                                        cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                                                                                                                        cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                                                                                        cm.eventSKill(0);
                                                                                                                                                                        cm.warp(867111042, 0);
                                                                                                                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                                                                                                                        cm.setStandAloneMode(false);
                                                                                                                                                                        cm.npc_LeaveField("oid=19788323");
                                                                                                                                                                        cm.npc_LeaveField("oid=19788324");
                                                                                                                                                                        cm.npc_LeaveField("oid=19788325");
                                                                                                                                                                        cm.npc_LeaveField("oid=19788326");
                                                                                                                                                                        cm.npc_LeaveField("oid=19788327");
                                                                                                                                                                        cm.npc_LeaveField("oid=19788328");
                                                                                                                                                                        cm.npc_LeaveField("oid=19788329");
                                                                                                                                                                        cm.dispose();
                                                                                                                                                                        cm.forceCompleteQuest(59737);
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
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
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
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("Bgm47.img/DeathOfAsylum", 0, 0);
      cm.setAmbience("Ambience.img/warfare2", 130, 60);
      cm.npc_ChangeController(3001527, "oid=144328484", -800, 73, 2, -850, -750, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=144328484", 'summon', 0, 0);
      cm.npc_ChangeController(3001528, "oid=144328485", -760, 73, 2, -810, -710, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=144328485", "summon", 0, 0);
      cm.npc_ChangeController(3001527, "oid=144328486", -700, 73, 2, -750, -650, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=144328486", "summon", 0, 0);
      cm.npc_ChangeController(3001528, "oid=144328487", -640, 73, 2, -690, -590, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=144328487", "summon", 0, 0);
      cm.npc_ChangeController(3001527, "oid=144328488", -520, 73, 2, -570, -470, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=144328488", "summon", 0, 0);
      cm.npc_ChangeController(3001528, "oid=144328489", -500, 73, 2, -550, -450, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=144328489", 'summon', 0, 0);
      cm.npc_ChangeController(3001527, "oid=144328490", -940, 73, 2, -990, -890, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=144328490", "summon", 0, 0);
      cm.npc_ChangeController(3001528, "oid=144328491", -1000, 73, 2, -1050, -950, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=144328491", "summon", 0, 0);
      cm.npc_ChangeController(3001527, "oid=144328492", -170, 78, 3, -220, -120, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=144328492", "summon", 0, 0);
      cm.npc_ChangeController(3001528, "oid=144328493", -100, 78, 3, -150, -50, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=144328493", "summon", 0, 0);
      cm.npc_ChangeController(3001527, "oid=144328494", 0, 78, 3, -50, 50, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=144328494", 'summon', 0, 0);
      cm.npc_ChangeController(3001528, "oid=144328495", 100, 78, 3, 50, 150, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=144328495", "summon", 0, 0);
      cm.npc_ChangeController(3001527, "oid=144328496", 210, 78, 3, 160, 260, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=144328496", "summon", 0, 0);
      cm.npc_ChangeController(3001528, "oid=144328497", 380, 78, 3, 330, 430, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=144328497", "summon", 0, 0);
      cm.npc_ChangeController(3001527, "oid=144328498", 440, 78, 3, 390, 490, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=144328498", "summon", 0, 0);
      cm.npc_ChangeController(3001528, "oid=144328499", 580, 78, 3, 530, 630, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=144328499", "summon", 0, 0);
      cm.updateInfoQuest(34997, "27=h1;28=h0");
      cm.updateInfoQuest(34997, "27=h1;28=h1");
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -310, 200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_OneTimeAction(4, 999999);
        cm.emotion(1, 999000);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(1000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face6#不……必须再坚持一下……拜托……快……停……手……", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face6#呃，呃……那股力量又想吞噬我……", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 2000, 3000, -310, 300);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face7#呃啊啊啊啊啊啊啊啊啊啊！！！！！！！！", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                  } else {
                    if (status === V++) {
                      cm.npc_SetSpecialAction("oid=144328484", 'die', 0, 1);
                      cm.npc_SetSpecialAction("oid=144328485", 'die', 0, 1);
                      cm.npc_SetSpecialAction("oid=144328486", 'die', 0, 1);
                      cm.npc_SetSpecialAction("oid=144328487", "die", 0, 1);
                      cm.npc_SetSpecialAction("oid=144328488", "die", 0, 1);
                      cm.npc_SetSpecialAction("oid=144328489", "die", 0, 1);
                      cm.npc_SetSpecialAction("oid=144328490", "die", 0, 1);
                      cm.npc_SetSpecialAction("oid=144328491", "die", 0, 1);
                      cm.npc_SetSpecialAction("oid=144328492", "die", 0, 1);
                      cm.npc_SetSpecialAction("oid=144328493", "die", 0, 1);
                      cm.npc_SetSpecialAction("oid=144328494", 'die', 0, 1);
                      cm.npc_SetSpecialAction("oid=144328495", "die", 0, 1);
                      cm.npc_SetSpecialAction("oid=144328496", 'die', 0, 1);
                      cm.npc_SetSpecialAction("oid=144328497", "die", 0, 1);
                      cm.npc_SetSpecialAction("oid=144328498", "die", 0, 1);
                      cm.npc_SetSpecialAction("oid=144328499", "die", 0, 1);
                      cm.inGameDirectionEvent_AskAnswerTime(540);
                    } else {
                      if (status === V++) {
                        cm.npc_LeaveField("oid=144328484");
                        cm.npc_LeaveField("oid=144328485");
                        cm.npc_LeaveField("oid=144328486");
                        cm.npc_LeaveField("oid=144328487");
                        cm.npc_LeaveField("oid=144328488");
                        cm.npc_LeaveField("oid=144328489");
                        cm.npc_LeaveField("oid=144328490");
                        cm.npc_LeaveField("oid=144328491");
                        cm.npc_LeaveField("oid=144328492");
                        cm.npc_LeaveField("oid=144328493");
                        cm.npc_LeaveField("oid=144328494");
                        cm.npc_LeaveField("oid=144328495");
                        cm.npc_LeaveField("oid=144328496");
                        cm.npc_LeaveField("oid=144328497");
                        cm.npc_LeaveField("oid=144328498");
                        cm.npc_LeaveField("oid=144328499");
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 2000, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                        } else {
                          if (status === V++) {
                            cm.playSoundEffDirectly("Ambience.img/warfare2");
                            cm.inGameDirectionEvent_SetHideEffect(1);
                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -310, 200);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(4500);
                              cm.effect_Text(["#fn黑体##fs18#不久前，高等翼人使者会议"], [100, 1200, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_ProcessOnOffLayer('d0', "Effect/Direction17.img/effect/ark/illust/9/0", 0, 500, 0, -80, -1, 4, 1, -1, 0, 0, 0);
                                cm.sendNormalTalk_Bottom("#face0#计划进展顺利吗？", 37, 3001507, 0, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#没问题。", 37, 3001506, 1, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#那真的很有意思。咯吱吱地裂开，哗啦啦……呵呵……", 37, 3001507, 1, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#仪式的风波好像终于平息下去了。", 37, 3001507, 1, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#看来侦察成功的传闻是真的了。", 37, 3001507, 1, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#啊哈，夺取力量失败……是说第一个目标吗？", 37, 3001507, 1, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#你应该会负责搞定吧？……林波。", 37, 3001507, 1, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face1#指挥官马上就会到达那里。", 37, 3001506, 1, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#呵呵，希望这次不要有人出来捣乱。", 37, 3001507, 1, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#情况就这样吗？那今天的会议到此结束。", 37, 3001507, 1, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_ProcessOnOffLayer('d0', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(4700);
                                                        cm.effect_Text(["#fn黑体##fs45#为了13颗星星之下的真实世界！"], [50, 4200, 4, 0, 0, 0, 4, 3, 300, 300, 0]);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_ChangeController(3001527, "oid=144335759", -800, 73, 2, -850, -750, 0, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=144335759", "summon", 0, 0);
                                                            cm.npc_ChangeController(3001528, "oid=144335760", -760, 73, 2, -810, -710, 0, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=144335760", "summon", 0, 0);
                                                            cm.npc_ChangeController(3001527, "oid=144335761", -700, 73, 2, -750, -650, 0, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=144335761", "summon", 0, 0);
                                                            cm.npc_ChangeController(3001528, "oid=144335762", -640, 73, 2, -690, -590, 0, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=144335762", "summon", 0, 0);
                                                            cm.npc_ChangeController(3001527, "oid=144335763", -520, 73, 2, -570, -470, 0, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=144335763", "summon", 0, 0);
                                                            cm.npc_ChangeController(3001528, "oid=144335764", -500, 73, 2, -550, -450, 0, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=144335764", "summon", 0, 0);
                                                            cm.npc_ChangeController(3001527, "oid=144335765", -940, 73, 2, -990, -890, 0, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=144335765", "summon", 0, 0);
                                                            cm.npc_ChangeController(3001528, "oid=144335766", -1000, 73, 2, -1050, -950, 0, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=144335766", "summon", 0, 0);
                                                            cm.npc_ChangeController(3001527, "oid=144335767", -170, 78, 3, -220, -120, 1, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=144335767", "summon", 0, 0);
                                                            cm.npc_ChangeController(3001528, "oid=144335768", -100, 78, 3, -150, -50, 1, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=144335768", 'summon', 0, 0);
                                                            cm.npc_ChangeController(3001527, "oid=144335769", 0, 78, 3, -50, 50, 1, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=144335769", "summon", 0, 0);
                                                            cm.npc_ChangeController(3001528, "oid=144335770", 100, 78, 3, 50, 150, 1, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=144335770", "summon", 0, 0);
                                                            cm.npc_ChangeController(3001527, "oid=144335771", 210, 78, 3, 160, 260, 1, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=144335771", 'summon', 0, 0);
                                                            cm.npc_ChangeController(3001528, "oid=144335772", 380, 78, 3, 330, 430, 1, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=144335772", 'summon', 0, 0);
                                                            cm.npc_ChangeController(3001527, "oid=144335773", 440, 78, 3, 390, 490, 1, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=144335773", "summon", 0, 0);
                                                            cm.npc_ChangeController(3001528, "oid=144335774", 580, 78, 3, 530, 630, 1, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=144335774", "summon", 0, 0);
                                                            cm.npc_ChangeController(3001512, "oid=144335775", -425, 198, 2, -475, -375, 1, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=144335775", "summon", 0, 0);
                                                            cm.npc_ChangeController(3001513, "oid=144335776", -525, 198, 2, -575, -475, 1, true, 0, false);
                                                            cm.npc_SetSpecialAction("oid=144335776", "summon", 0, 0);
                                                            cm.npc_ChangeController(3001509, "oid=144335777", -163, 198, 3, -213, -113, 0, true, 1000, false);
                                                            cm.npc_SetSpecialAction("oid=144335777", 'summon', 0, 0);
                                                            cm.npc_SetSpecialAction("oid=144335775", 'attack', -1, 1);
                                                            cm.npc_SetSpecialAction("oid=144335776", 'attack', -1, 1);
                                                            cm.npc_SetSpecialAction("oid=144335777", 'attack', -1, 1);
                                                            cm.setAmbience("Ambience.img/warfare2", 130, 60);
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face3#啊，那些怪物真是没完没了↗ 但是我们必须守住↗", 37, 3001509, 0, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#消灭掉了不少，我还以为可以松一口气……这样下去……", 37, 3001513, 1, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#呃，维依那边……还没好吗？", 37, 3001512, 1, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/DLep4/war", 100);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#啊，远处有一大帮怪物冲过来了……", 37, 3001513, 0, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#……哈，完全……不是……一个数量级的。", 37, 3001512, 0, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#防，防，防线崩溃了！不行了，要撤退吗？", 37, 3001513, 0, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/DLep4/blow", 100);
                                                                                        cm.sendNormalTalk_Bottom("#face0#不能……死在这里。巴克巴克的旅行……我们的旅行……", 37, 3001509, 0, 1);
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
                                                                                              } else if (status === V++) {
                                                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                                cm.setStandAloneMode(false);
                                                                                                cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                cm.warp(402000640, 0, false);
                                                                                                cm.eventSKill(0);
                                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                                cm.npc_LeaveField("oid=144335759");
                                                                                                cm.npc_LeaveField("oid=144335760");
                                                                                                cm.npc_LeaveField("oid=144335761");
                                                                                                cm.npc_LeaveField("oid=144335762");
                                                                                                cm.npc_LeaveField("oid=144335763");
                                                                                                cm.npc_LeaveField("oid=144335764");
                                                                                                cm.npc_LeaveField("oid=144335765");
                                                                                                cm.npc_LeaveField("oid=144335766");
                                                                                                cm.npc_LeaveField("oid=144335767");
                                                                                                cm.npc_LeaveField("oid=144335768");
                                                                                                cm.npc_LeaveField("oid=144335769");
                                                                                                cm.npc_LeaveField("oid=144335770");
                                                                                                cm.npc_LeaveField("oid=144335771");
                                                                                                cm.npc_LeaveField("oid=144335772");
                                                                                                cm.npc_LeaveField("oid=144335773");
                                                                                                cm.npc_LeaveField("oid=144335774");
                                                                                                cm.npc_LeaveField("oid=144335775");
                                                                                                cm.npc_LeaveField("oid=144335776");
                                                                                                cm.npc_LeaveField("oid=144335777");
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
      }
    }
  }
}
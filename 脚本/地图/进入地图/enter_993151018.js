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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 3965, -50);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.playerMessage(5, "背景控制");
        cm.monadForceMove("cernium_bomb_a", 0, 0);
        cm.monadForceMove("cernium_bomb_b", 0, 0);
        cm.monadForceMove("cernium_bomb_c", 0, 0);
        cm.monadForceMove("cernium_bomb_d", 0, 0);
        cm.npc_ChangeController(3004436, "oid=63554403", 1820, 105, 8, 1770, 1870, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=63554403", "summon", 0, 0);
        cm.npc_ChangeController(3004435, "oid=63554404", 1900, 105, 8, 1850, 1950, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=63554404", 'summon', 0, 0);
        cm.npc_ChangeController(3004433, "oid=63554405", 2100, 105, 5, 2050, 2150, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=63554405", "summon", 0, 0);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 1950, 6);
        cm.inGameDirectionEvent_AskAnswerTime(100);
      } else {
        if (status === V++) {
          cm.userSetFieldFloating(993151018, 3, 3, 3);
          cm.sendNormalTalk_Bottom("天啊……", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 2000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(2500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#乌泱泱的敌人涌了过来……", 37, 3004435, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#看样子，上次的进攻不过是打个招呼而已……", 37, 3004436, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#你已经开始后悔了吗？", 37, 3004435, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#你才是，刚刚又在耍帅了吧？", 37, 3004436, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#胡克！切奇！#ho#！", 37, 3004433, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(700);
                              } else {
                                if (status === V++) {
                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                  cm.userSetFieldFloating(993151018, 0, 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1950, 249);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#你们三位来得正好。", 36, 3004433, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#火焰和黎明祭司们也共同参战了？", 37, 3004435, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#他们拒不认可新的圣剑之主，与我们一起出城应敌了。", 36, 3004433, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#总不能临阵脱逃吧。", 36, 3004444, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#据说拯救之法就在帕尔玛。希望一定会降临在塞尔提乌的大地之上。", 36, 3004442, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#可是伊黛娜大人呢？", 36, 3004433, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("（说明了情况。）", 57, 0, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#原来如此。看来她查到了重要的线索……", 36, 3004433, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#加油坚持住吧，直到她那边有所进展。", 36, 3004433, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#啊！他们来了！", 36, 3004436, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63554403"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63554404"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=63554405"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", 'oid=1'], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.monadForceMove("cernium_bomb_a", 1, 0);
                                                                  cm.monadForceMove("cernium_bomb_b", 1, 0);
                                                                  cm.monadForceMove("cernium_bomb_c", 1, 0);
                                                                  cm.monadForceMove("cernium_bomb_d", 1, 0);
                                                                  cm.userSetFieldFloating(993151018, 15, 15, 1);
                                                                  cm.setAmbience("SoundEff.img/blackHeaven/explosion10", 300, 60);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.setAmbience("SoundEff.img/blackHeaven/explosion9", 300, 60);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.setAmbience("SoundEff.img/blackHeaven/explosion8", 300, 60);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.userSetFieldFloating(993151018, 5, 5, 1);
                                                                        cm.sendNormalTalk_Bottom("#face3#反击！！！", 36, 3004433, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/victoryshout", 100);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else if (status === V++) {
                                                                            cm.eventSKill(0);
                                                                            cm.warp(410000970, 1, true);
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.setStandAloneMode(false);
                                                                            cm.setStringForQuestInfo(39900, '14', 'h1');
                                                                            cm.setStringForQuestInfo(39900, '15', 'h1');
                                                                            cm.setStringForQuestInfo(39900, '24', 'h1');
                                                                            cm.updateInfoQuest(39915, 'dir=1');
                                                                            cm.forceStartQuest(39916);
                                                                            cm.npc_LeaveField("oid=63554403");
                                                                            cm.npc_LeaveField("oid=63554403");
                                                                            cm.npc_LeaveField("oid=63554404");
                                                                            cm.npc_LeaveField("oid=63554404");
                                                                            cm.npc_LeaveField("oid=63554405");
                                                                            cm.npc_LeaveField("oid=63554405");
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
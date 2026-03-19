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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.fieldEffect_PlayBGM("Bgm00/Silence", 0, 0);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(3005102, "oid=623080", -1673, 287, 99, -1723, -1623, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=623080", "summon", 0, 0);
      cm.npc_ChangeController(3005113, 'oid=623081', -1977, 300, 100, -2027, -1927, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=623081", 'summon', 0, 0);
      cm.Npc_Fadeout("oid=623081", 0, 0);
      cm.npc_ChangeController(3005104, "oid=623082", -1510, 300, 78, -1560, -1460, 1, true, 0, false);
      cm.npc_SetSpecialAction('oid=623082', "summon", 0, 0);
      cm.npc_ChangeController(3005117, 'oid=623083', -1610, 300, 99, -1660, -1560, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=623083", 'summon', 0, 0);
      cm.npcMove(3005117, 0, -50, 2000);
      cm.npc_ChangeController(3005118, "oid=623084", -1530, 300, 78, -1580, -1480, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=623084", 'summon', 0, 0);
      cm.npc_ChangeController(3005119, 'oid=623085', -1580, 300, 78, -1630, -1530, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=623085", 'summon', 0, 0);
      cm.npcMove(3005118, 0, -50, 2000);
      cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（还不如一开始就不要相信。）", 37, 3005102, false, true, 1);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk_Bottom("#face3##fc0xFFbfbfbf#（就不该产生出对方或许不一样的念头。）", 37, 3005102, true, true, 1);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -1608, 285);
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
                cm.npc_SetForceMove("oid=623080", -1, 100, 100);
                cm.npc_SetForceMove("oid=623082", -1, 100, 100);
                cm.npc_SetForceMove('oid=623083', -1, 100, 100);
                cm.npc_SetForceMove('oid=623084', -1, 100, 100);
                cm.npc_SetForceMove('oid=623085', -1, 100, 100);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, -1831, 285);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#……", 37, 3005102, false, true, 1);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip('oid=623080', 1);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face2#你们为什么要跟过来啊！", 37, 3005102, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove('oid=623085', -1, 150, 100);
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=623085", 1);
                              cm.npc_SetSpecialAction('oid=623085', "jump", 1, 1);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.npc_setForceFlip("oid=623080", -1);
                                cm.sendNormalTalk_Bottom("#face0#为什么要带我去古董店？我都说了我没那个心情！", 37, 3005102, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.Npc_Fadeout('oid=623081', 255, 1000);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#哦，可鲁来了啊。", 37, 3005113, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#你是来找玩偶的吗？", 37, 3005113, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#玩偶？", 37, 3005102, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_屏幕渐入插图A(['00', "Effect/Direction26.img/Lara/illust/10", 'cc'], [1, 0, -20, 0, 1500, -1, 0, 0, -1]);
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#你的朋友叮嘱说不要将这个玩偶卖给其他人。", 37, 3005113, false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#那孩子开心地说像你呢。", 37, 3005113, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#还犹豫着说没有钱，留下一句很快会回来的，就火速离开了。", 37, 3005113, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#那个名字叫什么来着，就好像在哼唱一首歌……", 37, 3005113, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（这是我很久之前缠着哥哥，让他给我买的玩偶。）", 37, 3005102, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_setForceFlip('oid=623080', 1);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#你们为什么想要给我看这个？", 37, 3005102, false, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#反正哥哥丢下了我，那个家伙其实也……", 37, 3005102, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#……", 37, 3005118, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#这是……", 37, 3005102, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（玩偶嘴里塞着一封信。）", 37, 3005102, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_屏幕渐入插图消失A(['00'], [1000]);
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
                                                                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_Monologue("格里，终于攒够钱了。", 0);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_Monologue("现在可以从领主那里找回父亲的遗物了。", 0);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_Monologue("你总是时不时就念叨，\r\n那个遗物到底有多了不起，才会这么拼命攒钱。", 0);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_Monologue("反而正相反，虽然我未能对年幼的你提起……", 0);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_Monologue("其实那支毛笔#r是不能留存于世的#k。", 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_Monologue("父亲是后来才明白的这一点。", 0);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_Monologue("他说那是伤害了很多人的凶物，\r\n直到死之前都一直在叮嘱我除掉那家伙。", 0);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_Monologue("我想要在领主搞出更大阵仗之前找回毛笔。", 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#很抱歉这么晚才给你买来狼玩偶。", 37, 3005106, false, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face0#一会儿你要是消气了，我们就一起去吃好吃的吧。", 37, 3005106, true, true, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.fieldEffect_PlayBGM("SoundEff.img/ArcaneRiver/thrill", 0, 0);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom('#face3#哥……', 37, 3005102, false, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face3##fc0xFFbfbfbf#（该消灭的父亲的毛笔，啦啦 ，还有……）", 37, 3005102, true, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face3##fc0xFFbfbfbf#（之前在领主仓库的……那个卷轴……）", 37, 3005102, true, true, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face3##fc0xFFbfbfbf#（…… ！！）", 37, 3005102, true, true, 1);
                                                                                                          } else if (status === V++) {
                                                                                                            cm.inGameDirectionEvent_SetHideEffect(0);
                                                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                                            cm.setStandAloneMode(false);
                                                                                                            cm.npc_LeaveField("oid=623080");
                                                                                                            cm.npc_LeaveField("oid=623082");
                                                                                                            cm.npc_LeaveField("oid=623083");
                                                                                                            cm.npc_LeaveField("oid=623084");
                                                                                                            cm.npc_LeaveField("oid=623085");
                                                                                                            cm.dispose();
                                                                                                            cm.warp(993165527, 0, true);
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
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
      cm.forceStartQuest(34479, '');
      cm.forceCompleteQuest(34487);
      cm.forceStartQuest(34489, '');
      cm.onSetMapObjectCreateLayer("tree", 6, 0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(3003350, "oid=1901874", 185, 25, 7, 135, 235, 0, true, false);
      cm.npc_SetSpecialAction("oid=1901874", 'summon', 0, 0);
      cm.npc_ChangeController(3003362, "oid=1901875", 312, 25, 3, 262, 362, 0, false, false);
      cm.npc_SetSpecialAction("oid=1901875", "summon", 0, 0);
      cm.npc_ChangeController(3003351, "oid=1901876", 415, 25, 4, 365, 465, 1, true, false);
      cm.npc_SetSpecialAction("oid=1901876", "summon", 0, 0);
      cm.npc_ChangeController(3003358, "oid=1901877", 1125, 25, 25, 1075, 1175, 1, true, false);
      cm.npc_SetSpecialAction("oid=1901877", "summon", 0, 0);
      cm.npc_ChangeController(3003361, "oid=1901878", -470, 25, 14, -520, -420, 1, true, false);
      cm.npc_SetSpecialAction("oid=1901878", 'summon', 0, 0);
      cm.npc_ChangeController(3003361, "oid=1901879", -530, 25, 14, -580, -480, 1, true, false);
      cm.npc_SetSpecialAction("oid=1901879", "summon", 0, 0);
      cm.npc_setForceFlip("oid=1901875", -1);
      cm.npc_SetSpecialAction("oid=1901875", "down", -1, 0);
      cm.npc_SetSpecialAction("oid=1901874", 'cry', -1, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, 325, 25);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.sendNormalTalk_Bottom("#face4#一直以来你都是在孤军奋战啊……", 37, 3003301, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face4#为了防止邪恶的气息侵袭整片森林……苦苦坚持……因此失去了力量，才会如此干枯的啊……", 37, 3003301, true, true);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=1901877", -1, 520, 160);
              cm.npc_SetForceMove("oid=1901878", 1, 450, 160);
              cm.npc_SetForceMove("oid=1901879", 1, 450, 160);
              cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/0", 200);
              cm.inGameDirectionEvent_AskAnswerTime(50);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/1", 200);
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/1", 200);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/2", 200);
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/3", 200);
                      cm.inGameDirectionEvent_AskAnswerTime(50);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/1", 200);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/4", 200);
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/5", 200);
                            cm.inGameDirectionEvent_AskAnswerTime(50);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/1", 200);
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/2", 200);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/1", 200);
                                  cm.inGameDirectionEvent_AskAnswerTime(50);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/1", 200);
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/2", 200);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_PlayFieldSound("Sound/Foot.img/leaf/5", 200);
                                        cm.sendNormalTalk_Bottom("#face0#那个，精灵之树！", 37, 3003309, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#额，总感觉邪恶的气息一下子迸发出来了！", 37, 3003314, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face7#小伙伴们！", 37, 3003301, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 312, 180);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face4#就是他一直在守护着我们！", 37, 3003301, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face7#虽然现在彻底失去了力量，瘫倒在这里……", 37, 3003301, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face4#呜呜，求你一定要再次睁开双眼……", 37, 3003301, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face1#奇迹已在我们身边悄然发生~在那树叶里~在那树枝上~在那池塘中~蠢蠢欲动~", 37, 3003302, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1901874"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1901877"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1901878"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1901879"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                            cm.sendNormalTalk_Bottom("#face2#来，听一听森林之歌吧~", 37, 3003302, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_PushScaleInfo(1000, 1000, 1000, 325, 25);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/tree_revive", 100);
                                                                  cm.onSetMapObjectCreateLayerMore('tree', 2, "animation", 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1300, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_PlayBGM("Bgm47.img/TheTuneOfAzureLight", 0, 0);
                                                                      cm.forceCompleteQuest(34479);
                                                                      cm.forceStartQuest(34487, '');
                                                                      cm.forceCompleteQuest(34489);
                                                                      cm.fieldEffect_InsertCanvas(1, 255, 240, 240, 240, 1000, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.forceCompleteQuest(34457);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.onSetMapObjectCreateLayer("tree", 1, 0, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 3000, 0);
                                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/wind", 100);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, 312, 180);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
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
                                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 312, 180);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.setNpcSpecialActionReset("oid=1901875");
                                                                                          cm.sendNormalTalk_Bottom("#face0#额，额啊……", 37, 3003324, false, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#精灵之树……活过来了……", 37, 3003309, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face4#万幸啊，实在是万幸。", 37, 3003301, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face1#哟呵，这是咚咚树中出现的咚咚呢~", 37, 3003302, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 5000, 0);
                                                                                                  cm.sendNormalTalk_Bottom("#face0#喔，有新朋友了！那为了表示欢迎，大家得开心地玩起来啊！", 37, 3003314, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face2#玩耍可是我最擅长的~我最喜欢玩了~", 37, 3003302, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#不行，现在还为时尚早，当务之急是赶紧恢复，其次才是玩耍……", 37, 3003309, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face7#那，那个树精灵说得没错！", 37, 3003301, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.playVideoByScript("arcana1.avi");
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                                                } else if (status === V++) {
                                                                                                                  cm.npc_LeaveField("oid=1901874");
                                                                                                                  cm.npc_LeaveField("oid=1901875");
                                                                                                                  cm.npc_LeaveField("oid=1901876");
                                                                                                                  cm.npc_LeaveField("oid=1901877");
                                                                                                                  cm.npc_LeaveField("oid=1901878");
                                                                                                                  cm.npc_LeaveField("oid=1901879");
                                                                                                                  cm.dispose();
                                                                                                                  cm.warp(450005000, 0);
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
                            }
                          }
                        }
                      }
                    }
                  }
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
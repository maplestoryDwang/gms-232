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
      cm.npc_ChangeController(3003330, "oid=200986", 298, 79, 8, 248, 348, 1, false, false);
      cm.updateInfoQuest(34466, "enter=1");
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(300);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -300, 100);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(3003350, "oid=1831983", -600, 50, 13, -650, -550, 0, true, false);
            cm.npc_SetSpecialAction("oid=1831983", "summon", 0, 0);
            cm.npc_ChangeController(3003351, "oid=1831984", 360, 50, 8, 310, 410, 1, true, false);
            cm.npc_SetSpecialAction("oid=1831984", "summon", 0, 0);
            cm.npc_SetSpecialAction("oid=1831984", "stand2", -1, 1);
            cm.npc_SetForceMove("oid=1831983", 1, 280, 120);
            cm.inGameDirectionEvent_AskAnswerTime(300);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(2, 280);
              cm.inGameDirectionEvent_AskAnswerTime(300);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, -150, 100);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face1#额啊，这里在森林深处也算是格外昏暗之地。", 37, 3003301, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1831983"], [0, 0, 0, 1, 0, 1, 0, 0]);
                        cm.sendNormalTalk_Bottom("#face0#啊，那边，那个估计是……", 37, 3003301, false, true);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=1831983", 1, 280, 120);
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_同时移动镜头和人(2, 280);
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_PushScaleInfo(2000, 1500, 2000, 120, 50);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1800);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#是树枝竖琴！可是果然……", 37, 3003301, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face6#凋零了啊，和草叶笛一样。", 37, 3003301, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_setForceFlip("oid=1831983", -1);
                                      cm.inGameDirectionEvent_AskAnswerTime(600);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_setForceFlip("oid=1831983", 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(600);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_setForceFlip("oid=1831983", -1);
                                          cm.inGameDirectionEvent_AskAnswerTime(900);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#嗯，不过好像跟之前有些不太一样了，原来树枝竖琴所在的地方……", 37, 3003301, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=1831983", 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(600);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#是个很容易照到星光的地方，树精灵都是这么叫这里的。", 37, 3003301, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#b(可和这个名字相比，这里未免也太暗了。)#k", 57, 0, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushScaleInfo(2000, 1000, 2000, 120, 0);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#……", 37, 3003301, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(600);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face1#可是有些奇怪，我之前来的时候，这附近并没有那么大的树来着，更何况那个……", 37, 3003301, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face1#从刚刚开始我总觉得，好像有什么东西在动……", 37, 3003301, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(600);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face2#习习凉风~茁壮成长~提起这棵树~就像是一个在四处寻找声音的~", 37, 3003302, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.setNpcSpecialActionReset("oid=1831984");
                                                                    cm.npc_SetSpecialAction("oid=1831984", "wind2", 0, 1);
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/wind", 100);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face1#贪心鬼~？……应该这么叫吗~？", 37, 3003302, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=1831983"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/oh");
                                                                          cm.sendNormalTalk_Bottom("#face1#啊，风精灵，你难道对这棵树有所了解吗？", 37, 3003301, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face2#遮住了星光的那棵树喜欢嘈杂的声音~#k", 37, 3003302, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face2#啊，这么说来难道……", 37, 3003301, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face2#那，我就先告辞了~#k", 37, 3003302, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetSpecialAction("oid=1831984", "wind3", 0, 1);
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/wind", 100);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2400);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_LeaveField("oid=1831984");
                                                                                    cm.sendNormalTalk_Bottom("#face1#又走掉了呢……", 37, 3003301, false, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                      } else if (status === V++) {
                                                                                        cm.dispose();
                                                                                        cm.warp(940200216, 0, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;
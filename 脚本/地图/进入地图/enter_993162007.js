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
      cm.npc_ChangeController(3001936, 'oid=434124', -384, 18, 13, -434, -334, 1, false, 0, false);
      cm.npc_ChangeController(3001935, "oid=434125", -481, 21, 11, -531, -431, 0, false, 0, false);
      cm.npc_ChangeController(3001966, 'oid=434126', -104, 121, 2, -154, -54, 4, true, 0, false);
      cm.npc_ChangeController(3001967, "oid=434127", -201, 121, 2, -251, -151, 4, true, 0, false);
      cm.npc_ChangeController(3001921, "oid=434128", 1047, 121, 4, 952, 1052, 4, true, 0, false);
      cm.npc_ChangeController(3001922, 'oid=434129', 1138, 121, 4, 1104, 1204, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(3001952, "oid=6343591", 95, -98, 5, 45, 145, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=6343591", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 280, 90);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_同时移动镜头和人(1, 100);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#虽然有点破旧，但视野还是很开阔的。", 36, 3001952, false, true, 1);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_同时移动镜头和人(1, 100);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(3);
                  cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1000, 2000, 222, -33);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face6#要是不好爬上来，我可以拉你一把……", 36, 3001952, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#我自己能行。", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#啊，是吗？", 36, 3001952, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(500);
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
                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1250, 0, 180, 42);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#你来了，杰罗姆……哦，这位帅气的骑士是谁？", 36, 3001966, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=6343591", -1);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#哦，从今天开始，她就是我的骑士了。", 36, 3001952, false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#哇，看上去很厉害的样子……很高兴见到你！", 36, 3001966, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#我负责的区域已经搞定了。\r\n明天打算去其他区域转转。", 36, 3001967, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#辛苦你了，明天也有劳你费心。\r\n我们要让所有人都知道伯爵的恶行！", 36, 3001952, true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#听说有人撕掉了壁报，杰罗姆。", 36, 3001967, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#伯爵家也加强了戒备，凡事千万小心。", 36, 3001967, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#别担心，我有传说中的骑士保护，哼哼……", 36, 3001952, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_setForceFlip("oid=6343591", 1);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#他们是为了保卫王国而自发聚集起来的自卫队。\r\n专门惩治为非作歹的贵族，帮助受委屈的百姓。", 36, 3001952, false, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face3##fc0xFFbfbfbf#(就这点规模的人，想扭转王国的局面……根本不可能。\r\n凭他们的力量，和贵族斗就是以卵击石。)", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.forceCompleteQuest(39604);
                                                                        cm.gainExp(306);
                                                                        cm.gainExp(481);
                                                                        cm.updateInfoQuest(39660, "00=h0;01=h0;10=h0;02=h1;11=h0;20=h0;03=h0;12=h0;04=h0;13=h0;40=h0;05=h0;14=h0;23=h0;41=h0;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
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
                                                                              cm.warp(410000314, 0, false);
                                                                              cm.setStandAloneMode(false);
                                                                              cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                              cm.npc_LeaveField("oid=6343591");
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
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
      cm.npc_ChangeController(9400570, "oid=202916", 1699, 194, 7, 1649, 1749, 1, false, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.forceStartQuest(64076, '');
      cm.npc_ChangeController(9400580, "oid=7607418", 1650, 440, 24, 1600, 1700, 1, true, false);
      cm.npc_SetSpecialAction("oid=7607418", "summon", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 1700, 440);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(9400595, "oid=7607419", 1970, 440, 24, 1920, 2020, 1, true, false);
      cm.npc_SetSpecialAction("oid=7607419", "summon", 0, 0);
      cm.npc_ChangeController(9400682, "oid=7607420", 877, 440, 2, 827, 927, 1, false, false);
      cm.npc_SetSpecialAction("oid=7607420", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(300);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_SetForceMove("oid=7607418", -1, 500, 120);
        cm.sendNewEffects(1, [0, 0, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.sendNewEffects(12, [4000, 900, 342, 0, 0]);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(4000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_同时移动镜头和人(1, 500);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#唔哇，这里真的很美啊？树枝都被冻住了，在闪闪发光呢。", 37, 9400580, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(250);
                } else {
                  if (status === V++) {
                    cm.npc_setForceFlip("oid=7607418", 1);
                    cm.inGameDirectionEvent_AskAnswerTime(250);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face2#就像是吊灯一样！", 37, 9400580, false, true);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=7607418", -1);
                        cm.sendNewEffects(17, [1000, 1000, 2000, 860, 370]);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNewEffects(12, [3000, 860, 0, 0, 0]);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_同时移动镜头和人(1, 400);
                              cm.inGameDirectionEvent_AskAnswerTime(3500);
                              cm.npc_LeaveField("oid=7607419");
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_ForcedFlip(1);
                                cm.sendNormalTalk_Bottom("#face0##h0#，看看这个！", 37, 9400580, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNewEffects(12, [500, 860, 450, 0, 0]);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetSpecialAction("oid=7607418", "special4", -1, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.setNpcSpecialActionReset("oid=7607418");
                                      cm.inGameDirectionEvent_AskAnswerTime(250);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#这是什么？我还是第一次见到这种植物……是蘑菇……？", 37, 9400580, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetForceMove("oid=7607418", -1, 150, 100);
                                          cm.sendNormalTalk_Bottom("#face0#先是会飞的独眼触须怪，然后是粉红色的奇怪物体，这个森林真是神奇呢。", 37, 9400580, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetSpecialAction("oid=7607418", "special1", -1, 0);
                                              cm.sendNormalTalk_Bottom("#face0#这是什么……？好漂亮……", 37, 9400580, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetSpecialAction("oid=7607420", "special1", -1, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(600);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=7607418"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                    cm.setNpcSpecialActionReset("oid=7607418");
                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetForceMove("oid=7607418", 1, 30, 50);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_OneTimeAction(4, 500000);
                                                        cm.npc_ChangeController(9400641, "oid=7607835", 150, 440, 1, 100, 200, 0, true, false);
                                                        cm.npc_SetSpecialAction("oid=7607835", "summon", 0, 0);
                                                        cm.npc_ChangeController(9400672, "oid=7607836", 100, 440, 1, 50, 150, 0, true, false);
                                                        cm.npc_SetSpecialAction("oid=7607836", "summon", 0, 0);
                                                        cm.npc_ChangeController(9400642, "oid=7607837", 50, 440, 1, 0, 100, 0, true, false);
                                                        cm.npc_SetSpecialAction("oid=7607837", "summon", 0, 0);
                                                        cm.npc_ChangeController(9400674, "oid=7607838", 0, 440, 1, -50, 50, 0, true, false);
                                                        cm.npc_SetSpecialAction("oid=7607838", "summon", 0, 0);
                                                        cm.npc_ChangeController(9400641, "oid=7607839", 1600, 440, 24, 1550, 1650, 1, true, false);
                                                        cm.npc_SetSpecialAction("oid=7607839", "summon", 0, 0);
                                                        cm.npc_ChangeController(9400672, "oid=7607840", 1650, 440, 24, 1600, 1700, 1, true, false);
                                                        cm.npc_SetSpecialAction("oid=7607840", "summon", 0, 0);
                                                        cm.npc_ChangeController(9400642, "oid=7607841", 1700, 440, 24, 1650, 1750, 1, true, false);
                                                        cm.npc_SetSpecialAction("oid=7607841", "summon", 0, 0);
                                                        cm.npc_ChangeController(9400674, "oid=7607842", 1750, 440, 24, 1700, 1800, 1, true, false);
                                                        cm.npc_SetSpecialAction("oid=7607842", "summon", 0, 0);
                                                        cm.sendNewEffects(17, [1000, 2000, 1000, 860, 342]);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(250);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.npc_SetForceMove("oid=7607835", 1, 500, 100);
                                                            cm.npc_SetForceMove("oid=7607839", -1, 500, 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(250);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetForceMove("oid=7607836", 1, 500, 100);
                                                              cm.npc_SetForceMove("oid=7607840", -1, 500, 100);
                                                              cm.inGameDirectionEvent_AskAnswerTime(250);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_SetForceMove("oid=7607837", 1, 500, 100);
                                                                cm.npc_SetForceMove("oid=7607841", -1, 500, 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(250);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.npc_SetForceMove("oid=7607838", 1, 500, 100);
                                                                  cm.npc_SetForceMove("oid=7607842", -1, 500, 100);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.npc_setForceFlip("oid=7607418", 1);
                                                                    cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_ForcedFlip(1);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(600);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#b这，怎么回事？！艾丽卡，快躲到我身后！", 57, 0, false, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                          } else if (status === V++) {
                                                                            cm.dispose();
                                                                            cm.openNpc(0, "副本_莫奈德_Act2_探索森林三");
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;
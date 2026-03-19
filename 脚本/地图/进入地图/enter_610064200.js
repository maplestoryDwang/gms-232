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
      cm.updateInfoQuest(61333, "act1=610061570;act2=610062450;act3=610063590;act4=610064200");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(9201534, "oid=2748587", 339, 212, 14, 289, 389, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2748587", 'summon', 0, 0);
      cm.npc_ChangeController(9201535, "oid=2748588", -100, 212, 2, -150, -50, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2748588", 'summon', 0, 0);
      cm.npc_ChangeController(9201536, "oid=2748589", -200, 212, 4, -250, -150, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2748589", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 100, 250);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_同时移动镜头和人(2, 400);
          cm.inGameDirectionEvent_AskAnswerTime(3200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("张博士现在帮不了你了，纳瑞坎。\r\n她死了，和她的终极武器一起灰飞烟灭了。", 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=2748587", -1, 50, 200);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("怎么可……", 37, 9201534, false, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#你不是天不怕地不怕吗？\r\n不过是死个仆人，用得着这么动摇？", 37, 9201536, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face1#仆……仆人？", 37, 9201534, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_ScreenMsg("Map/EffectGL.img/MBlockbuster/whiteout");
                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_ScreenMsg("Map/EffectGL.img/MBlockbuster/illust8");
                                    cm.inGameDirectionEvent_AskAnswerTime(5200);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 100, 250);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_BackgroundCanvas(4, 80, 80, 80, 2000, 0, 0);
                                            cm.fieldEffect_BackgroundCanvas(5, 80, 80, 80, 2000, 0, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(800);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_BackgroundCanvas(2, 80, 80, 80, 2000, 0, 0);
                                              cm.fieldEffect_BackgroundCanvas(3, 80, 80, 80, 2000, 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                                            } else {
                                              if (status === V++) {
                                                cm.userSetFieldFloating(610064200, 10, 10, 20);
                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("发——发生了什么？", 57, 0, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom('好强大的黑暗能量！', 37, 9201536, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face2#她是我的爱人！！", 37, 9201534, false, true);
                                                      } else if (status === V++) {
                                                        cm.eventSKill(0);
                                                        cm.warp(610064210, 0, true);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.npc_LeaveField("oid=2748587");
                                                        cm.npc_LeaveField("oid=2748587");
                                                        cm.npc_LeaveField("oid=2748588");
                                                        cm.npc_LeaveField("oid=2748588");
                                                        cm.npc_LeaveField("oid=2748589");
                                                        cm.npc_LeaveField("oid=2748589");
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
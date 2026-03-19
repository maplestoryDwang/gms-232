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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.npc_ChangeController(3001981, "oid=6673623", -600, -10, 4, -650, -550, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=6673623", "summon", 0, 0);
      cm.npc_ChangeController(3001981, "oid=6673624", -326, -10, 4, -376, -276, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=6673624", "summon", 0, 0);
      cm.npc_ChangeController(3001982, "oid=6673625", 234, -10, 5, 184, 284, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=6673625", "summon", 0, 0);
      cm.npc_ChangeController(3001981, "oid=6673626", 328, -10, 5, 278, 378, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=6673626", "summon", 0, 0);
      cm.npc_ChangeController(3001957, "oid=6673627", -99, -10, 4, -149, -49, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=6673627", "summon", 0, 0);
      cm.npc_ChangeController(3001955, "oid=6673628", 89, -10, 5, 39, 139, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=6673628", "summon", 0, 0);
      cm.npc_ChangeController(3001959, "oid=6673629", -179, -10, 4, -229, -129, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=6673629", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -240, -10);
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
            cm.npc_SetForceMove("oid=6673627", 1, 50, 80);
            cm.inGameDirectionEvent_AskAnswerTime(3000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face3#传说中的骑士……你最终选择了追随这小子吗？", 36, 3001957, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face4#居然舍弃美貌与头脑兼备的我！？", 36, 3001957, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face7#放了他。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face3#王室的血统……那种东西就那么了不起吗！", 36, 3001957, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face6#真正纠结血统的人，正是你自己。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face3#！？", 36, 3001957, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face6#一味地沉迷过去，自甘堕落的人，没有成王的资格。\r\n这也是我无法奉你为主君的理由。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2000, 2000, -99, -10);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face3#你撒谎……我不想听……只要没有这小子……", 36, 3001957, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#西蒙，后面的事交给你了……", 36, 3001957, true, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_同时移动镜头和人(2, 10);
                                      cm.sendNormalTalk_Bottom("#face7#你站住，伯爵！", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetForceMove("oid=6673629", -1, 30, 120);
                                          cm.sendNormalTalk_Bottom("#face0#……", 36, 3001959, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#想要过去，就先打败我。", 36, 3001959, true, true, 1);
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
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -99, -10);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_LeaveField("oid=6673627");
                                                        cm.npc_LeaveField("oid=6673628");
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2000, 2000, -240, -10);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face7##fc0xFFbfbfbf#(伯爵……他拉着杰罗姆往塔顶去了。\r\n我只能尽快打败眼前这个人，才能去救他。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.forceCompleteQuest(39629);
                                                                  cm.gainExp(3185);
                                                                  cm.gainExp(6371);
                                                                  cm.updateInfoQuest(39601, "50=h0;51=h0;52=h0;53=h0;j=2;54=h0;55=h0;56=h0;57=h0;58=h0;59=h0;q=3");
                                                                  cm.updateInfoQuest(39660, "00=h0;01=h0;10=h0;02=h0;11=h1;20=h0;03=h0;12=h1;04=h0;13=h0;40=h0;05=h0;14=h0;23=h0;41=h0;15=h1;60=h0;06=h0;61=h0;07=h0;09=h1;19=h0;37=f;47=h0");
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
                                                                        cm.setStandAloneMode(false);
                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                        cm.npc_LeaveField("oid=6673623");
                                                                        cm.npc_LeaveField("oid=6673624");
                                                                        cm.npc_LeaveField("oid=6673625");
                                                                        cm.npc_LeaveField("oid=6673626");
                                                                        cm.npc_LeaveField("oid=6673629");
                                                                        cm.dispose();
                                                                        cm.warp(410000352, 0, false);
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
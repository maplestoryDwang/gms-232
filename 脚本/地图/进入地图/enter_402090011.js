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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.npc_ChangeController(3001511, "oid=143804629", -1100, -17, 80, -1150, -1050, 0, true, 300, false);
      cm.npc_SetSpecialAction("oid=143804629", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -1100, 50);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=143804629", 1, 20, 80);
          cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2000, 500, -970, 150);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=143804629", 1, 10, 80);
              cm.npc_SetSpecialAction("oid=143804629", 'falldown', 1700, 1);
              cm.inGameDirectionEvent_AskAnswerTime(1700);
            } else {
              if (status === V++) {
                cm.setNpcSpecialActionReset("oid=143804629");
                cm.sendNormalTalk_Bottom("#face0#咂咂……大家都去哪儿了……", 37, 3001511, 0, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#你是谁啊？", 37, 3001511, 1, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#我叫亚克……啊，现在没时间说这些了。", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face5#这里很危险。好了，跟我走。我带你到朋友们那里去。", 37, 3001500 + cm.getPlayer().getGender(), 1, 1);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2000, 500, -1170, 150);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.npc_ChangeController(3001527, "oid=143806316", -1550, 73, 81, -1600, -1500, 0, true, 500, false);
                              cm.npc_SetSpecialAction("oid=143806316", "summon", 0, 0);
                              cm.npc_ChangeController(3001528, "oid=143806317", -1430, 73, 81, -1480, -1380, 0, true, 500, false);
                              cm.npc_SetSpecialAction("oid=143806317", "summon", 0, 0);
                              cm.npc_ChangeController(3001527, "oid=143806318", -1320, 73, 85, -1370, -1270, 0, true, 500, false);
                              cm.npc_SetSpecialAction("oid=143806318", "summon", 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.OverlapScreenDetail19(0, 300, 300, 1);
                                cm.npc_ChangeController(3001527, "oid=143806319", 250, -273, 69, 200, 300, 0, true, 0, false);
                                cm.npc_SetSpecialAction("oid=143806319", "summon", 0, 0);
                                cm.npc_ChangeController(3001528, "oid=143806320", -30, -273, 15, -80, 20, 0, true, 0, false);
                                cm.npc_SetSpecialAction("oid=143806320", "summon", 0, 0);
                                cm.npc_ChangeController(3001527, "oid=143806321", -120, -273, 82, -170, -70, 0, true, 0, false);
                                cm.npc_SetSpecialAction("oid=143806321", 'summon', 0, 0);
                                cm.npc_ChangeController(3001528, "oid=143806322", -200, -273, 11, -250, -150, 0, true, 0, false);
                                cm.npc_SetSpecialAction("oid=143806322", "summon", 0, 0);
                                cm.npc_ChangeController(3001527, "oid=143806323", -280, -273, 11, -330, -230, 0, true, 0, false);
                                cm.npc_SetSpecialAction("oid=143806323", "summon", 0, 0);
                                cm.npc_ChangeController(3001528, "oid=143806324", 0, -273, 16, -50, 50, 0, true, 0, false);
                                cm.npc_SetSpecialAction("oid=143806324", "summon", 0, 0);
                                cm.npc_ChangeController(3001527, "oid=143806325", -50, -273, 14, -100, 0, 0, true, 0, false);
                                cm.npc_SetSpecialAction("oid=143806325", "summon", 0, 0);
                                cm.npc_ChangeController(3001528, "oid=143806326", 0, -273, 16, -50, 50, 0, true, 0, false);
                                cm.npc_SetSpecialAction("oid=143806326", 'summon', 0, 0);
                                cm.npc_ChangeController(3001527, "oid=143806327", -250, -78, 11, -300, -200, 0, true, 0, false);
                                cm.npc_SetSpecialAction("oid=143806327", "summon", 0, 0);
                                cm.npc_ChangeController(3001528, "oid=143806328", 0, -78, 16, -50, 50, 0, true, 0, false);
                                cm.npc_SetSpecialAction("oid=143806328", "summon", 0, 0);
                                cm.npc_ChangeController(3001527, "oid=143806329", -220, -78, 11, -270, -170, 0, true, 0, false);
                                cm.npc_SetSpecialAction("oid=143806329", "summon", 0, 0);
                                cm.npc_ChangeController(3001528, "oid=143806330", -110, -78, 12, -160, -60, 0, true, 0, false);
                                cm.npc_SetSpecialAction("oid=143806330", "summon", 0, 0);
                                cm.npc_ChangeController(3001527, "oid=143806331", 150, -78, 50, 100, 200, 0, true, 0, false);
                                cm.npc_SetSpecialAction("oid=143806331", "summon", 0, 0);
                                cm.npc_ChangeController(3001528, "oid=143806332", -80, -78, 13, -130, -30, 0, true, 0, false);
                                cm.npc_SetSpecialAction("oid=143806332", "summon", 0, 0);
                                cm.npc_ChangeController(3001527, "oid=143806333", -100, -78, 12, -150, -50, 0, true, 0, false);
                                cm.npc_SetSpecialAction("oid=143806333", "summon", 0, 0);
                                cm.npc_ChangeController(3001528, "oid=143806334", 280, -78, 53, 230, 330, 0, true, 0, false);
                                cm.npc_SetSpecialAction("oid=143806334", 'summon', 0, 0);
                                cm.npc_SetForceMove("oid=143806319", -1, 100, 80);
                                cm.npc_SetForceMove("oid=143806320", -1, 300, 80);
                                cm.npc_SetForceMove("oid=143806321", -1, 200, 80);
                                cm.npc_SetForceMove("oid=143806322", -1, 100, 100);
                                cm.npc_SetForceMove("oid=143806323", -1, 200, 80);
                                cm.npc_SetForceMove("oid=143806324", -1, 100, 80);
                                cm.npc_SetForceMove("oid=143806325", -1, 100, 80);
                                cm.npc_SetForceMove("oid=143806326", -1, 200, 100);
                                cm.npc_SetForceMove("oid=143806327", -1, 250, 80);
                                cm.npc_SetForceMove("oid=143806328", -1, 200, 80);
                                cm.npc_SetForceMove("oid=143806329", -1, 200, 80);
                                cm.npc_SetForceMove("oid=143806330", -1, 80, 80);
                                cm.npc_SetForceMove("oid=143806331", -1, 80, 100);
                                cm.npc_SetForceMove("oid=143806332", -1, 200, 80);
                                cm.npc_SetForceMove("oid=143806333", -1, 150, 80);
                                cm.npc_SetForceMove("oid=143806334", -1, 200, 80);
                                cm.npc_SetSpecialAction("oid=143806319", "move", -1, 1);
                                cm.npc_SetSpecialAction("oid=143806320", "move", -1, 1);
                                cm.npc_SetSpecialAction("oid=143806321", "move", -1, 1);
                                cm.npc_SetSpecialAction("oid=143806322", "move", -1, 1);
                                cm.npc_SetSpecialAction("oid=143806323", "move", -1, 1);
                                cm.npc_SetSpecialAction("oid=143806324", "move", -1, 1);
                                cm.npc_SetSpecialAction("oid=143806325", "move", -1, 1);
                                cm.npc_SetSpecialAction("oid=143806326", "move", -1, 1);
                                cm.npc_SetSpecialAction("oid=143806327", "move", -1, 1);
                                cm.npc_SetSpecialAction("oid=143806328", 'move', -1, 1);
                                cm.npc_SetSpecialAction("oid=143806329", "move", -1, 1);
                                cm.npc_SetSpecialAction("oid=143806330", "move", -1, 1);
                                cm.npc_SetSpecialAction("oid=143806331", "move", -1, 1);
                                cm.npc_SetSpecialAction("oid=143806332", "move", -1, 1);
                                cm.npc_SetSpecialAction("oid=143806333", "move", -1, 1);
                                cm.npc_SetSpecialAction("oid=143806334", "move", -1, 1);
                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -250, 150);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_RemoveOverlapScreenDetail(300);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 2000, 3000, -470, 150);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                    } else {
                                      if (status === V++) {
                                        cm.OverlapScreenDetail19(0, 300, 300, 1);
                                        cm.npc_LeaveField("oid=143804629");
                                        cm.fieldEffect_RemoveOverlapScreenDetail(500);
                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -1100, 0);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_ChangeController(3001511, "oid=143807087", -1266, -135, 75, -1316, -1216, 0, true, 300, false);
                                          cm.npc_SetSpecialAction("oid=143807087", 'summon', 0, 0);
                                          cm.onTeleport(0, 3, cm.getPlayer().getId(), -1100, -17);
                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#你在那里等一下。我马上回来。", 37, 3001500 + cm.getPlayer().getGender(), 0, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2000, 2000, -970, 50);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_ForcedFlip(1);
                                                cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove("oid=143806319", -1, 130, 80);
                                                  cm.npc_SetForceMove("oid=143806320", -1, 100, 80);
                                                  cm.npc_SetForceMove("oid=143806321", -1, 20, 80);
                                                  cm.npc_SetForceMove("oid=143806322", -1, 10, 100);
                                                  cm.npc_SetForceMove("oid=143806323", -1, 20, 80);
                                                  cm.npc_SetForceMove("oid=143806324", -1, 10, 80);
                                                  cm.npc_SetForceMove("oid=143806325", -1, 50, 80);
                                                  cm.npc_SetForceMove("oid=143806326", -1, 20, 100);
                                                  cm.npc_SetForceMove("oid=143806327", -1, 25, 80);
                                                  cm.npc_SetForceMove("oid=143806328", -1, 20, 80);
                                                  cm.npc_SetForceMove("oid=143806329", -1, 20, 80);
                                                  cm.npc_SetForceMove("oid=143806330", -1, 80, 80);
                                                  cm.npc_SetForceMove("oid=143806331", -1, 80, 100);
                                                  cm.npc_SetForceMove("oid=143806332", -1, 22, 80);
                                                  cm.npc_SetForceMove("oid=143806333", -1, 15, 80);
                                                  cm.npc_SetForceMove("oid=143806334", -1, 20, 80);
                                                  cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, -730, 50);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(3500);
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
                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                          } else if (status === V++) {
                                                            cm.setStandAloneMode(false);
                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                            cm.dispose();
                                                            cm.warp(940205000, 0, false);
                                                            cm.eventSKill(0);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.playerMessage(5, "为了安全地救出马尔，必须尽可能减少怪物的数量。");
                                                            cm.playerMessage(-1, "为了安全地救出马尔，必须尽可能减少怪物的数量。");
                                                            cm.npc_LeaveField("oid=143806316");
                                                            cm.npc_LeaveField("oid=143806317");
                                                            cm.npc_LeaveField("oid=143806318");
                                                            cm.npc_LeaveField("oid=143806319");
                                                            cm.npc_LeaveField("oid=143806320");
                                                            cm.npc_LeaveField("oid=143806321");
                                                            cm.npc_LeaveField("oid=143806322");
                                                            cm.npc_LeaveField("oid=143806323");
                                                            cm.npc_LeaveField("oid=143806324");
                                                            cm.npc_LeaveField("oid=143806325");
                                                            cm.npc_LeaveField("oid=143806326");
                                                            cm.npc_LeaveField("oid=143806327");
                                                            cm.npc_LeaveField("oid=143806328");
                                                            cm.npc_LeaveField("oid=143806329");
                                                            cm.npc_LeaveField("oid=143806330");
                                                            cm.npc_LeaveField("oid=143806331");
                                                            cm.npc_LeaveField("oid=143806332");
                                                            cm.npc_LeaveField("oid=143806333");
                                                            cm.npc_LeaveField("oid=143806334");
                                                            cm.npc_LeaveField("oid=143807087");
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
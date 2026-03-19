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
      cm.setAmbience("Ambience.img/blizzard_soft", 200, 60);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.Hidden_background("back0", 1, 0, 0, 0);
      cm.Hidden_background("back1", 1, 0, 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -329, 220);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -10, 250);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(3001509, "oid=144200863", -150, 250, 12, -200, -100, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=144200863", "summon", 0, 0);
          cm.npc_ChangeController(3001512, "oid=144200864", 0, 250, 12, -50, 50, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=144200864", "summon", 0, 0);
          cm.npc_ChangeController(3001513, "oid=144200865", -60, 250, 12, -110, -10, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=144200865", "summon", 0, 0);
          cm.npc_ChangeController(3001510, "oid=144200866", 160, 250, 12, 110, 210, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=144200866", "summon", 0, 0);
          cm.npc_SetForceMove("oid=144200866", 1, 330, 180);
          cm.npc_SetForceMove("oid=144200863", 1, 330, 180);
          cm.npc_SetForceMove("oid=144200864", 1, 330, 180);
          cm.npc_SetForceMove("oid=144200865", 1, 330, 180);
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_同时移动镜头和人(2, 420);
          cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, 300, 250);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face4#啊，我在这下面感觉到了电波。快确认一下吧。", 37, 3001510, 0, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face2#哈哈，轮到我巴克巴克出马啦啊啊啊啊啊啊啊啊啊啊！！！！！！！！", 37, 3001509, 1, 1);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=144200863", 1, 450, 150);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, 800, 250);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3"], [3000, 663, 152, 1, 0, 3, 0, 0]);
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion1", 100);
                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3"], [6000, 613, 112, 1, 0, 3, 0, 0]);
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion2", 100);
                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3"], [0, 813, 62, 1, 0, 3, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3"], [0, 313, 112, 1, 0, 3, 0, 0]);
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3"], [0, 1113, -88, 1, 0, 3, 0, 0]);
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion0", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3"], [6000, 1013, 62, 1, 0, 3, 0, 0]);
                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3"], [0, 473, 162, 1, 0, 3, 0, 0]);
                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3"], [0, 833, -38, 1, 0, 3, 0, 0]);
                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction19.img/effect/cadena/3"], [6000, 813, -238, 1, 0, 3, 0, 0]);
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/explosion1", 100);
                              cm.fieldEffect_Hero9(100, 500);
                              cm.fieldEffect_PlayBGM("Bgm45.img/Time Is Gold", 0, 0);
                              cm.userSetFieldFloating(402090005, 5, 5, 1);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face2#呃……这个……有种不祥的预感……", 37, 3001510, 0, 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.userSetFieldFloating(402090005, 0, 0, 0);
                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 800, 250);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_LeaveField("oid=144200866");
                                        cm.npc_LeaveField("oid=144200864");
                                        cm.npc_LeaveField("oid=144200865");
                                        cm.onTeleport(0, 3, cm.getPlayer().getId(), 829, 220);
                                        cm.npc_ChangeController(3001512, "oid=144204281", 660, 220, 8, 610, 710, 0, true, 0, false);
                                        cm.npc_SetSpecialAction("oid=144204281", 'summon', 0, 0);
                                        cm.npc_ChangeController(3001513, "oid=144204282", 600, 220, 1, 550, 650, 0, true, 0, false);
                                        cm.npc_SetSpecialAction("oid=144204282", "summon", 0, 0);
                                        cm.npc_ChangeController(3001510, "oid=144204283", 1010, 220, 9, 960, 1060, 1, true, 0, false);
                                        cm.npc_SetSpecialAction("oid=144204283", "summon", 0, 0);
                                        cm.Hidden_background("back0", 1, 1, 0, 0);
                                        cm.Hidden_background("back1", 1, 1, 0, 0);
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction17.img/effect/ark/hole/back", "oid=144200863"], [999999, 150, -50, 1, -6, 1, 0, 0]);
                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                        cm.userSetFieldFloating(402090005, 10, 10, 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 800, 250);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face1#呃……被吸进去啦啊啊啊啊啊啊啊啊啊啊！！！！！！！", 37, 3001509, 0, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 2000, 1000, 500, 3250);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
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
                                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                        } else if (status === V++) {
                                                          cm.setStandAloneMode(false);
                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                          cm.warp(402000630, 0, false);
                                                          cm.eventSKill(0);
                                                          cm.setInGameDirectionMode(false, true, false);
                                                          cm.npc_LeaveField("oid=144200863");
                                                          cm.npc_LeaveField("oid=144204281");
                                                          cm.npc_LeaveField("oid=144204282");
                                                          cm.npc_LeaveField("oid=144204283");
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
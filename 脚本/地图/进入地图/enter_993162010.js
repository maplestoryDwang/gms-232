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
      cm.npc_ChangeController(3001978, "oid=434135", 2189, 121, 10, 2139, 2239, 1, false, 0, false);
      cm.npc_ChangeController(3001988, "oid=434136", 2297, 121, 10, 2247, 2347, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.npc_ChangeController(3001960, "oid=6371952", 1520, 100, 7, 1470, 1570, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=6371952", "summon", 0, 0);
      cm.npc_ChangeController(3001952, "oid=6371953", 1460, 100, 7, 1410, 1510, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=6371953", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 1780, -430);
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
            cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1500, 4000, 1630, 90);
          } else {
            if (status === V++) {
              cm.effect_Text(["#fn黑体##fs18#次日，喷泉广场", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(5000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face6#我看你总是一直坐着……要睡会儿吗？", 36, 3001952, false, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face3#我这样挺好的。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/tuning", 100);
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
                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 2200, 90);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face6##fc0xFFbfbfbf#(那箱子是干什么的？是用来施魔法的装置吗？\r\n还是说，里面装着炸药？……我要去确认一下。)", 36, 3001951 - cm.getPlayer().getGender(), false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.onTeleport(0, 3, cm.getPlayer().getId(), 1715, 113);
                                  cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#阿黛尔！", 36, 3001952, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face7#别过去。谁知道里面装了什么。", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom('#face0#嗯？', 36, 3001952, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2#噗，噗哈哈！", 36, 3001952, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0#！？", 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetForceMove("oid=6371953", 1, 300, 120);
                                                cm.npc_SetForceMove("oid=6371952", 1, 300, 125);
                                                cm.inGameDirectionEvent_PushScaleInfo(1000, 0, 1500, 1000, 1950, 90);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face2#呵呵……阿黛尔，那只是个乐器啊？\r\n用来演奏音乐的工具！你不知道吗？", 36, 3001952, false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom('#face0#乐器？', 36, 3001951 - cm.getPlayer().getGender(), true, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face1#咘！", 36, 3001960, true, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.forceCompleteQuest(39605);
                                                            cm.gainExp(761);
                                                            cm.gainExp(91);
                                                            cm.updateInfoQuest(39660, "00=h0;01=h0;10=h0;02=h0;11=h0;20=h0;03=h0;12=h0;04=h0;13=h0;40=h0;05=h0;14=h0;23=h0;41=h0;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
                                                            cm.updateInfoQuest(39660, "00=h0;01=h1;10=h0;02=h0;11=h0;20=h0;03=h0;12=h0;04=h0;13=h0;40=h0;05=h0;14=h0;23=h0;41=h0;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
                                                            cm.updateInfoQuest(39660, "00=h0;01=h1;10=h0;02=h0;11=h0;20=h0;03=h0;12=h0;04=h0;13=h0;40=h0;05=h0;14=h1;23=h0;41=h0;60=h0;06=h0;61=h0;07=h0;09=h0;19=h0;37=f;47=h0");
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
                                                                  cm.warp(410000300, 0, false);
                                                                  cm.setStandAloneMode(false);
                                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                  cm.npc_LeaveField("oid=6371952");
                                                                  cm.npc_LeaveField("oid=6371953");
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
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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(9400928, "oid=91706649", 100, 260, 1, 50, 150, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=91706649", 'summon', 0, 0);
      cm.npc_ChangeController(9401160, "oid=91706650", 255, 260, 1, 205, 305, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=91706650", 'summon', 0, 0);
      cm.npc_ChangeController(9400934, "oid=91706651", -170, 60, 8, -220, -120, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=91706651", 'summon', 0, 0);
      cm.npc_ChangeController(9401175, "oid=91706652", -50, 260, 1, -100, 0, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=91706652", "summon", 0, 0);
      cm.npc_ChangeController(9401176, "oid=91706653", -90, 260, 1, -140, -40, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=91706653", "summon", 0, 0);
      cm.npc_ChangeController(9400929, "oid=91706654", -210, 260, 1, -260, -160, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=91706654", 'summon', 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -260, 260);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.fieldEffect_PlayBGM("bgmEvent.img/dolphin_night", 0, 0);
      cm.sendNewEffects(17, [0, 1000, 5000, 150, 240]);
      cm.curNodeEventEnd(true);
      cm.effect_Text(["#fn黑体##fs30##e火爆的开业日！"], [50, 3000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(5000);
      } else {
        if (status === V++) {
          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
          cm.sendNewEffects(17, [0, 1000, 2000, -150, 80]);
        } else {
          if (status === V++) {
            cm.sendNewEffects(13, [5000, 350, 0, 0, 0]);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(300);
            } else {
              if (status === V++) {
                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                cm.inGameDirectionEvent_AskAnswerTime(5000);
              } else {
                if (status === V++) {
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.sendNewEffects(12, [0, 250, 300, 0, 0]);
                  } else {
                    if (status === V++) {
                      cm.sendNewEffects(13, [5000, -350, 0, 0, 0]);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                        cm.npc_SetForceMove("oid=91706649", 1, 50, 100);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=91706649"], [0, 0, 0, 1, 0, 1, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=91706649", -1);
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.npc_SetForceMove("oid=91706649", -1, 50, 100);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=91706649"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                cm.sendNormalTalk_Bottom("#face2#啦啦啦~~", 37, 9400920, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face1#嘻嘻嘻！", 37, 9400920, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#真的很开心呢。头一次看到艾米那么专心的样子。", 37, 9400921, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#b我最近好像看到过一次，在她找到父母的时候。", 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face1#啊！没错！那时候她也热情高涨地说一定要找到妈妈。", 37, 9400921, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/myHome/7", "oid=91706649"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2#金币~金币~金币~那个人5000金币，这个人还点了沙拉吧？！15000金币！？", 37, 9400920, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/questEffect/myHome/8", "oid=91706649"], [2000, 0, 0, 1, 0, 1, 0, 0]);
                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face1#嘿嘿嘿……", 37, 9400920, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=91706649"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face3#看到那么喜欢钱的艾米……莫名其妙觉得是自己的错，对她很抱歉。", 37, 9400921, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_setForceFlip("oid=91706649", 1);
                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetForceMove("oid=91706649", 1, 50, 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=91706649"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                          } else if (status === V++) {
                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                            cm.eventSKill(0);
                                                            cm.warp(871000003, 1, true);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.forceCompleteQuest(65439);
                                                            cm.npc_LeaveField("oid=91706649");
                                                            cm.npc_LeaveField("oid=91706650");
                                                            cm.npc_LeaveField("oid=91706651");
                                                            cm.npc_LeaveField("oid=91706652");
                                                            cm.npc_LeaveField("oid=91706653");
                                                            cm.npc_LeaveField("oid=91706654");
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
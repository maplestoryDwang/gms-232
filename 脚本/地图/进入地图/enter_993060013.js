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
      cm.npc_ChangeController(3003605, "oid=275658", -1240, -92, 28, -1290, -1190, 1, false, 0, false);
      cm.npc_ChangeController(3003608, 'oid=275659', -2465, 88, 22, -2515, -2415, 1, false, 0, false);
      cm.updateInfoQuest(35157, "save=993060013;return=450006130");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.setAmbience("Ambience.img/night", 200, 60);
      cm.updateInfoQuest(35150, "01=h1;02=h1;03=h1;05=h0");
      cm.npc_ChangeController(3003651, "oid=2200153", -2010, 70, 2, -2060, -1960, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2200153", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -2020, 0);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.npc_SetForceMove("oid=2200153", 1, 150, 120);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_同时移动镜头和人(2, 370);
            cm.inGameDirectionEvent_PushScaleInfo(1500, 0, 1500, 1500, -1944, 150);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(3000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1500, 4000, -1430, 0);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayBGM("Bgm18/Injustice", 0, 0);
                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BMpre/monster/Regen", 100);
                    cm.npc_ChangeController(3003666, "oid=2200163", -2120, -320, 3, -2170, -2070, 0, true, 0, false);
                    cm.npc_SetSpecialAction("oid=2200163", 'summon', 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.npc_ChangeController(3003666, "oid=2200165", -2230, -320, 16, -2280, -2180, 0, true, 0, false);
                      cm.npc_SetSpecialAction("oid=2200165", "summon", 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(3003666, "oid=2200169", -1605, -320, 7, -1655, -1555, 1, true, 0, false);
                        cm.npc_SetSpecialAction("oid=2200169", 'summon', 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.npc_ChangeController(3003666, "oid=2200171", -1510, -320, 5, -1560, -1460, 1, true, 0, false);
                          cm.npc_SetSpecialAction("oid=2200171", "summon", 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(300);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(3003666, "oid=2200172", -1420, -320, 26, -1470, -1370, 1, true, 0, false);
                            cm.npc_SetSpecialAction("oid=2200172", "summon", 0, 0);
                            cm.sendNormalTalk_Bottom("#face0#呼……又出现了。到处都不太平。", 37, 3003651, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.npc_ChangeController(3003666, "oid=2200173", -1310, -320, 25, -1360, -1260, 1, true, 0, false);
                                cm.npc_SetSpecialAction("oid=2200173", "summon", 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(300);
                              } else {
                                if (status === V++) {
                                  cm.npc_ChangeController(3003666, "oid=2200174", -1200, -320, 28, -1250, -1150, 1, true, 0, false);
                                  cm.npc_SetSpecialAction("oid=2200174", 'summon', 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.npc_ChangeController(3003666, "oid=2200175", -1080, -320, 13, -1130, -1030, 1, true, 0, false);
                                    cm.npc_SetSpecialAction("oid=2200175", "summon", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#……你在干什么呢？#b#ho##k，快去把他们解决掉。", 37, 3003651, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.updateInfoQuest(35605, "enter=1");
                                          cm.forceCompleteQuest(35605);
                                          cm.gainExp(85793345);
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
                                                cm.setInGameDirectionMode(false, true, false);
                                                cm.npc_LeaveField("oid=2200153");
                                                cm.npc_LeaveField("oid=2200153");
                                                cm.updateInfoQuest(35150, "01=h1;02=h1;03=h1;05=h1");
                                                cm.playerMessage(5, "为了前往圣地，必须把路口挡道的怪物全部干掉！");
                                                cm.npc_LeaveField("oid=2200163");
                                                cm.npc_LeaveField("oid=2200163");
                                                cm.npc_LeaveField("oid=2200165");
                                                cm.npc_LeaveField("oid=2200165");
                                                cm.npc_LeaveField("oid=2200169");
                                                cm.npc_LeaveField("oid=2200169");
                                                cm.npc_LeaveField("oid=2200171");
                                                cm.npc_LeaveField("oid=2200171");
                                                cm.npc_LeaveField("oid=2200172");
                                                cm.npc_LeaveField("oid=2200172");
                                                cm.npc_LeaveField("oid=2200173");
                                                cm.npc_LeaveField("oid=2200173");
                                                cm.npc_LeaveField("oid=2200174");
                                                cm.npc_LeaveField("oid=2200174");
                                                cm.npc_LeaveField("oid=2200175");
                                                cm.npc_LeaveField("oid=2200175");
                                                var O = cm.getEventManager('月桥_战斗3');
                                                O.startInstance(cm.getPlayer(), cm.getMap());
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
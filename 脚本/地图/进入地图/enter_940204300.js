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
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -230, -100);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_ForcedFlip(1);
          cm.npc_ChangeController(3003480, "oid=2009342", -285, -100, 12, -335, -235, 0, true, false);
          cm.npc_SetSpecialAction("oid=2009342", "summon", 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=2009342", 1, 400, 180);
            cm.inGameDirectionEvent_同时移动镜头和人(2, 450);
            cm.inGameDirectionEvent_AskAnswerTime(200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, 140, -100);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/Foot.img/HofM_cave/0", 200);
                cm.inGameDirectionEvent_AskAnswerTime(700);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/Foot.img/HofM_cave/3", 200);
                  cm.inGameDirectionEvent_AskAnswerTime(700);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/Foot.img/HofM_cave/1", 200);
                    cm.inGameDirectionEvent_AskAnswerTime(700);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/Foot.img/HofM_cave/2", 200);
                      cm.inGameDirectionEvent_AskAnswerTime(700);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/Foot.img/HofM_cave/0", 200);
                        cm.inGameDirectionEvent_AskAnswerTime(700);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face13#……让人感觉很不舒服的寂静。", 37, 3003480, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face13#阴森森的，感觉背后有点发凉……", 37, 3003480, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("……那种话最好少说两句……", 57, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face13#感觉有什么东西会突然冒出来……", 37, 3003480, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                } else {
                                  if (status === V++) {
                                    cm.npc_ChangeController(3003482, "oid=2009346", 320, -125, 13, 270, 370, 1, false, 1000, false);
                                    cm.npc_SetSpecialAction("oid=2009346", "summon", 0, 0);
                                    cm.npc_ChangeController(3003482, "oid=2009347", 460, -125, 13, 410, 510, 1, false, 1000, false);
                                    cm.npc_SetSpecialAction("oid=2009347", 'summon', 0, 0);
                                    cm.npc_ChangeController(3003484, "oid=2009348", 600, -125, 14, 550, 650, 1, false, 1000, false);
                                    cm.npc_SetSpecialAction("oid=2009348", "summon", 0, 0);
                                    cm.npc_ChangeController(3003484, "oid=2009349", 700, -125, 14, 650, 750, 1, false, 1000, false);
                                    cm.npc_SetSpecialAction("oid=2009349", "summon", 0, 0);
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/regen", 200);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('#face1#咦……', 37, 3003480, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_setForceFlip("oid=2009342", -1);
                                        cm.inGameDirectionEvent_ForcedFlip(-1);
                                        cm.npc_ChangeController(3003483, "oid=2009351", -140, -125, 12, -190, -90, 0, false, 1000, false);
                                        cm.npc_SetSpecialAction("oid=2009351", "summon", 0, 0);
                                        cm.npc_ChangeController(3003485, "oid=2009352", -290, -125, 12, -340, -240, 0, false, 1000, false);
                                        cm.npc_SetSpecialAction("oid=2009352", "summon", 0, 0);
                                        cm.npc_ChangeController(3003485, "oid=2009353", -390, -125, 12, -440, -340, 0, false, 1000, false);
                                        cm.npc_SetSpecialAction("oid=2009353", "summon", 0, 0);
                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/regen", 200);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("我不是说了吗？那种话最好少说……", 57, 0, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644409/Attack1", 100);
                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644410/Attack1", 100);
                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644411/Attack1", 100);
                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8644412/Attack1", 100);
                                            cm.npc_SetSpecialAction("oid=2009348", 'attack', 0, 1);
                                            cm.npc_SetSpecialAction("oid=2009351", "attack", 0, 1);
                                            cm.npc_SetSpecialAction("oid=2009352", "attack", 0, 1);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetSpecialAction("oid=2009346", "attack", 0, 1);
                                              cm.npc_SetSpecialAction("oid=2009347", "attack", 0, 1);
                                              cm.npc_SetSpecialAction("oid=2009349", "attack", 0, 1);
                                              cm.npc_SetSpecialAction("oid=2009353", "attack", 0, 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face13#现在没时间浪费了……", 37, 3003480, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face13#尽快消灭掉他们，然后到斜塔去！", 37, 3003480, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
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
                                                        } else {
                                                          if (status === V++) {
                                                            cm.playerMessage(5, "必须消灭掉区域内的所有怪物，才能移动到下一地区。");
                                                            cm.npc_LeaveField("oid=2009342");
                                                            cm.npc_LeaveField("oid=2009346");
                                                            cm.npc_LeaveField("oid=2009347");
                                                            cm.npc_LeaveField("oid=2009348");
                                                            cm.npc_LeaveField("oid=2009349");
                                                            cm.npc_LeaveField("oid=2009351");
                                                            cm.npc_LeaveField("oid=2009352");
                                                            cm.npc_LeaveField("oid=2009353");
                                                            cm.dispose();
                                                            var O = cm.getEventManager("莫拉斯_剧情_战斗3");
                                                            O.startInstance(cm.getPlayer(), cm.getMap());
                                                            cm.setStandAloneMode(false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;
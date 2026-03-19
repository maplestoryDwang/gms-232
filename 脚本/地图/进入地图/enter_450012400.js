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
      if (!cm.isQuestFinished(35807) || cm.isQuestFinished(35808)) {
        cm.onSetMapObjectMove('attack', [1, 0, 0]);
        cm.onSetMapObjectMove("attackAll", [1, 0, 0]);
        cm.monadForceMove("giantHit1", 0, 0);
        cm.monadForceMove('giantHit2', 0, 0);
        cm.monadForceMove("giantHit3", 0, 0);
        cm.monadForceMove('giantHit4', 0, 0);
        cm.monadForceMove('giantHit5', 0, 0);
        cm.monadForceMove("giantHit6", 0, 0);
        cm.monadForceMove('giantHit7', 0, 0);
        cm.monadForceMove("giantHit8", 0, 0);
        cm.monadForceMove("giantHit9", 0, 0);
        cm.monadForceMove("giantHit10", 0, 0);
        cm.dispose();
        return;
      }
      cm.onSetMapObjectMove("attack", [1, 0, 0]);
      cm.onSetMapObjectMove("attackAll", [1, 0, 0]);
      cm.monadForceMove("giantHit1", 0, 0);
      cm.monadForceMove('giantHit2', 0, 0);
      cm.monadForceMove("giantHit3", 0, 0);
      cm.monadForceMove("giantHit4", 0, 0);
      cm.monadForceMove("giantHit5", 0, 0);
      cm.monadForceMove("giantHit6", 0, 0);
      cm.monadForceMove("giantHit7", 0, 0);
      cm.monadForceMove("giantHit8", 0, 0);
      cm.monadForceMove("giantHit9", 0, 0);
      cm.monadForceMove("giantHit10", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(3003676, "oid=2182140", -600, -440, 4, -650, -550, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2182140", 'summon', 0, 0);
      cm.npc_ChangeController(3003677, "oid=2182141", -700, -440, 4, -750, -650, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2182141", "summon", 0, 0);
      cm.npc_ChangeController(3003675, "oid=2182142", -770, -440, 5, -820, -720, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2182142", "summon", 0, 0);
      cm.npc_ChangeController(3003679, "oid=2182143", -400, -441, 6, -450, -350, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2182143", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -500, -425);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 441, -515);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.inGameDirectionEvent_AskAnswerTime(5000);
        cm.effect_Text(["#fn黑体##fs18#片刻之后，反抗者1号舰。"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face1#这像话吗？！！！\r\n船现在只能勉强支撑！", 37, 3003676, false, true);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#现在能在最前线活动的，肯定是破坏程度最轻的#b白色之矛#k啊！", 37, 3003676, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face2#……", 37, 3003751, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#除了旗舰和护卫舰之外，所有舰船前进？", 37, 3003677, true, true);
                  } else {
                    if (status === V++) {
                      cm.spawnMobLimit(8645040, 1, 279, 6, 100);
                      cm.spawnMobLimit(8645040, 1, 657, 6, 100);
                      cm.spawnMobLimit(8645040, 1, -666, 6, 100);
                      cm.spawnMobLimit(8645040, 1, -314, 6, 100);
                      cm.sendNormalTalk_Bottom("#face0#是女皇下达的命令吗？她现在在哪？", 37, 3003677, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#好！我要当面问问！", 37, 3003676, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face2#女皇陛下正在战斗……", 37, 3003751, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#行了，别闹了。", 37, 3003672, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2182140"], [0, 0, -30, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2182141"], [0, 0, -30, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2182142"], [0, 0, -30, 1, 0, 1, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushScaleInfo(200, 0, 2000, 200, -415, -794);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face1#吉格蒙特！！", 37, 3003676, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#不服从指挥，是绝对无法在战争中获胜的。", 37, 3003672, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#何况是在#r和神的战争#k中……更是必须服从命令。", 37, 3003672, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.spawnMobLimit(8645040, 1, -666, 6, 100);
                                          cm.spawnMobLimit(8645040, 1, 572, 6, 100);
                                          cm.spawnMobLimit(8645040, 1, 466, 6, 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2#谢谢你，吉格蒙特。", 37, 3003751, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face2#我知道情况很困难。请大家再坚持一下。援军马上就到。", 37, 3003751, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#援军？你说的该不会是那边开过来的那条小船吧？", 37, 3003677, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2000, 500, 387, -500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face1#啊！那是！", 37, 3003676, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0##h0#！", 37, 3003677, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#这样故事就不一样了。", 37, 3003675, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.spawnMobLimit(8645040, 1, -314, 6, 100);
                                                            cm.spawnMobLimit(8645040, 1, 466, 6, 100);
                                                            cm.spawnMobLimit(8645040, 1, 572, 6, 100);
                                                            cm.spawnMobLimit(8645040, 1, -775, 6, 100);
                                                            cm.spawnMobLimit(8645040, 1, -666, 6, 100);
                                                            cm.npc_LeaveField("oid=2182140");
                                                            cm.npc_LeaveField("oid=2182140");
                                                            cm.npc_LeaveField("oid=2182141");
                                                            cm.npc_LeaveField("oid=2182141");
                                                            cm.npc_LeaveField("oid=2182142");
                                                            cm.npc_LeaveField("oid=2182142");
                                                            cm.npc_LeaveField("oid=2182143");
                                                            cm.npc_LeaveField("oid=2182143");
                                                            cm.updateInfoQuest(35832, "dir000=end;dir010=end;dir200=end;dir400=end;skip=5;dir600=end;skip2=3");
                                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                              } else if (status === V++) {
                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                cm.setStandAloneMode(false);
                                                                cm.setInGameDirectionMode(false, true, false);
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
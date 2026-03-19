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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -140, -82);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(100);
      } else {
        if (status === V++) {
          cm.userSetFieldFloating(993070074, 3, 3, 10);
          cm.Hidden_background("993070020_tag", 1, 0, 0, 0);
          cm.setAmbience("SoundEff.img/BM3/egg1", 200, 60);
          cm.npc_ChangeController(3003902, "oid=2180364", -254, -180, 2, -304, -204, 0, true, 0, false);
          cm.npc_SetSpecialAction("oid=2180364", "summon", 0, 0);
          cm.npc_ChangeController(3003913, "oid=2180365", -41, 0, 2, -91, 9, 1, false, 0, false);
          cm.npc_SetSpecialAction("oid=2180365", "summon", 0, 0);
          cm.Npc_Fadeout("oid=2180365", 0, 0);
          cm.npc_ChangeController(3003908, "oid=2180366", -651, 0, 2, -701, -601, 0, false, 0, false);
          cm.npc_SetSpecialAction("oid=2180366", "summon", 0, 0);
          cm.npc_ChangeController(3003909, "oid=2180367", 37, 0, 2, -13, 87, 1, false, 0, false);
          cm.npc_SetSpecialAction("oid=2180367", "summon", 0, 0);
          cm.npc_ChangeController(3003912, "oid=2180368", 370, 0, 2, 320, 420, 1, false, 0, false);
          cm.npc_SetSpecialAction("oid=2180368", "summon", 0, 0);
          cm.Npc_Fadeout("oid=2180366", 0, 0);
          cm.Npc_Fadeout("oid=2180367", 0, 0);
          cm.Npc_Fadeout("oid=2180368", 0, 0);
          cm.npcMove(3003902, 0, -200, 0);
          cm.Hidden_background("993070020_tag", 1, 1, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(2000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom('变红了？！', 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face1#这什么东西……居然在吸收黑太阳……？", 37, 3003902, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("什么？", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2180364"], [0, 0, -220, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 2300, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("周围暗下来了……", 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face1#（莫非古瓦洛说的……）", 37, 3003902, true, true);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=2180364", -1);
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#我去确认一下再回来。", 37, 3003902, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#我不在的时候，你能保护好自己吧？", 37, 3003902, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom('什么？', 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(400);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetSpecialAction("oid=2180364", "special2", 1, 1);
                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM3/LimenOrcaUp", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(700);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_LeaveField("oid=2180364");
                                      cm.npc_LeaveField("oid=2180364");
                                      cm.sendNormalTalk_Bottom('奥尔卡？！', 57, 0, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("什么都不尝试的话……", 57, 0, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetSpecialAction("oid=2180365", "regen", 1, 1);
                                              cm.Npc_Fadeout("oid=2180365", 255, 0);
                                              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8645009/Regen", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(3500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom('！！！', 57, 0, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#对抗者，没想到你竟然能来到这里。", 37, 3003913, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#只要有我在，你们休想动主君一根寒毛。", 37, 3003913, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.Npc_Fadeout("oid=2180366", 255, 0);
                                                        cm.npc_SetSpecialAction("oid=2180366", "regen", 1, 1);
                                                        cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8645035/Regen", 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(200);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.Npc_Fadeout("oid=2180367", 255, 0);
                                                          cm.npc_SetSpecialAction("oid=2180367", 'regen', 1, 1);
                                                          cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8645035/Regen", 100);
                                                          cm.inGameDirectionEvent_AskAnswerTime(200);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.Npc_Fadeout("oid=2180368", 255, 0);
                                                            cm.npc_SetSpecialAction("oid=2180368", "regen", 1, 1);
                                                            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8645035/Regen", 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(200);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.playerMessage(5, "必须将区域内的怪物消灭掉一定数量以上，才能移动到下一关。");
                                                                cm.setInGameDirectionMode(false, true, false);
                                                                cm.npc_LeaveField("oid=2180365");
                                                                cm.npc_LeaveField("oid=2180365");
                                                                cm.npc_LeaveField("oid=2180366");
                                                                cm.npc_LeaveField("oid=2180366");
                                                                cm.npc_LeaveField("oid=2180367");
                                                                cm.npc_LeaveField("oid=2180367");
                                                                cm.npc_LeaveField("oid=2180368");
                                                                cm.npc_LeaveField("oid=2180368");
                                                                var O = cm.getEventManager('敦凯尔_故事');
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
              }
            }
          }
        }
      }
    }
  }
}
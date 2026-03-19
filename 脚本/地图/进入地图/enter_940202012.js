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
      cm.npc_ChangeController(3001377, "oid=252516", -973, 813, 2, -1023, -923, 1, false, 0, false);
      cm.updateInfoQuest(34800, "back=1;weapon=1");
      cm.updateInfoQuest(34800, "back=1;weapon=1;out=1");
      cm.updateInfoQuest(34800, "back=1;weapon=1;out=1;012=1");
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1, 512000, 256000, -222720, 205823);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.gainItem(1282021, 1);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1000);
        } else {
          if (status === V++) {
            cm.npc_ChangeController(3001346, 'oid=939467', -975, 802, 2, -1025, -925, 0, false, 0, false);
            cm.npc_SetSpecialAction("oid=939467", "summon", 0, 0);
            cm.npc_SetSpecialAction("oid=939467", 'open', 0, 1);
            cm.inGameDirectionEvent_AskAnswerTime(700);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/cg_open", 100);
              cm.inGameDirectionEvent_AskAnswerTime(2300);
            } else {
              if (status === V++) {
                cm.setNpcSpecialActionReset('oid=939467');
                cm.onTeleport(0, 3, cm.getPlayer().getId(), -982, 728);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(3001300, 'oid=939470', -975, 770, 2, -1025, -925, 0, true, 0, false);
                    cm.npc_SetSpecialAction('oid=939470', "summon", 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.npc_SetForceMove('oid=939470', 1, 50, 100);
                      cm.sendNormalTalk_Bottom("#face2#哇！！！！我竟然通过了#b水晶门#k！", 37, 3001351, false, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#你竟然成功逃离了村庄。", 37, 3001300, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face8#呃,这是什么#r气味#k呢？", 37, 3001351, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_ForcedFlip(-1);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_ForcedFlip(1);
                              cm.inGameDirectionEvent_PushScaleInfo(384000, 1, 256000, 512000, -156928, 177407);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_PlayBGM("Bgm47.img/HuntingGround", 0, 0);
                                cm.sendNormalTalk_Bottom("#face4#什么啊,这里……不是#r垃圾场#k嘛？！", 37, 3001351, false, true, 1);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(384000, 1, 512000, 512000, -223744, 205823);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face4#我们#b平民翼人#k……竟然在这种地方躲躲藏藏地生活……", 37, 3001351, false, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove("oid=939470", 1, 100, 200);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_setForceFlip("oid=939470", -1);
                                          cm.inGameDirectionEvent_AskAnswerTime(30);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.effect_NormalSpeechBalloon('?', 1, 0, 0, 1000, 1, 0, -10, 0, 4, 3001300, null, cm.getPlayer().getId());
                                              cm.npc_setForceFlip("oid=939470", 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(30);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#没时间犹豫了。请赶快去寻找配件吧。", 37, 3001300, false, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetForceMove("oid=939470", 1, 500, 250);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_LeaveField("oid=939470");
                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_同时移动镜头和人(2, 10);
                                                      cm.inGameDirectionEvent_同时移动镜头和人(2, 400);
                                                      cm.sendNormalTalk_Bottom("#face4#等、等等我！", 37, 3001351, false, true, 1);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 1, 256000, -256, -129, -129);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(300);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                cm.npc_LeaveField("oid=939467");
                                                                cm.updateInfoQuest(34858, 'gate=1');
                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                } else if (status === V++) {
                                                                  cm.setStandAloneMode(false);
                                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                  cm.setPartner(1, 3001330, 80002330, 0);
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
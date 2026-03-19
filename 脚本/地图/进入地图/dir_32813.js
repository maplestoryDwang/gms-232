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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(1530150, "oid=37606001", 691, 62, 2, 641, 741, 1, true, false);
      cm.npc_SetSpecialAction("oid=37606001", "summon", 0, 0);
      cm.npc_setForceFlip("oid=37606001", -1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#喂，你又在那儿探头探脑干什么呢？这里有什么好东西吗？", 37, 1530150, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('老师，您相信缘分吗？', 57, 0, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("嗯？你这说的又是什么？", 37, 1530150, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("在经历了数个世纪的人类的时代中，能够出生在同一时代、同一国家，而且还能够在同一地区、同一学校相遇，您说这种几率有多大呢？", 57, 0, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("你哪儿不舒服吗？到底想说什么？", 37, 1530150, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
                        cm.npc_SetForceMove("oid=37606001", 1, 100, 100);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("可是，说不定还有更令人惊讶的缘分等着您呢。如果，每天在同一所学校上班、下班，却一次都没能在路上碰到的话，那便是超越了缘分，而是成为#r命运#k了。", 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("命……运？", 37, 1530150, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
                              cm.npc_SetForceMove("oid=37606001", 1, 100, 100);
                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom('是的，命运。', 57, 0, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("别再靠近我了，你这家伙！我有压力！！", 37, 1530150, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
                                    cm.npc_SetForceMove("oid=37606001", 1, 50, 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
                                      cm.npc_SetForceMove("oid=37606001", 1, 50, 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("命运……就算想抗拒也是无法抗拒的。如果老师您的周围有这样命中注定的人，请千万要抓住啊。那么我就先失陪了……", 57, 0, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_setForceFlip("oid=37606001", 0);
                                          cm.setNpcSpecialActionReset("oid=37606001");
                                          cm.npc_SetForceMove("oid=37606001", -1, 10, 100);
                                          cm.inGameDirectionEvent_同时移动镜头和人(1, 700);
                                          cm.inGameDirectionEvent_AskAnswerTime(4500);
                                          cm.effect_NormalSpeechBalloon("这又是什么意思……喂！", 1, 0, 0, 2500, 1530150, cm.getPlayer().getId());
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_SetHideEffect(1);
                                            cm.inGameDirectionEvent_PushMoveInfo(0, 120, 900, 58);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(7724);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=37606001"], [0, 18, 0, 1, 0, 1, 0, 0]);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("这个螃蟹壳一样的家伙，搞什么嘛？", 37, 1530150, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#命运……命运……", 37, 1530150, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else if (status === V++) {
                                                        cm.forceCompleteQuest(32813);
                                                        cm.gainExp(Math.pow(cm.getLevel(), 3));
                                                        cm.dispose();
                                                        cm.warp(330000010, 0);
                                                        cm.inGameDirectionEvent_SetHideEffect(0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;
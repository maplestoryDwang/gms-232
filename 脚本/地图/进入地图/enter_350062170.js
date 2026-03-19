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
      cm.npc_ChangeController(1540715, "oid=286484515", -96, 84, 2, -146, -46, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=286484515", "summon", 0, 0);
      cm.npcMove(1540715, 0, -250, 100);
      cm.npc_ChangeController(1540714, "oid=286484517", 180, 25, 4, 130, 230, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=286484517", "summon", 0, 0);
      cm.npc_ChangeController(1540717, "oid=286484518", 280, -40, 4, 230, 330, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=286484518", "summon", 0, 0);
      cm.forceCompleteQuest(33265);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(500);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#fs30##r格里梅尔！！！", 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, -460, 40);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(2);
                  cm.inGameDirectionEvent_AskAnswerTime(1700);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 120, 40);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_MoveAction(0);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                          cm.sendNormalTalk_Bottom("嘻嘻嘻。", 37, 1540470, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("防毒面具？！", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("愚蠢的家伙。", 37, 1540470, true, true);
                            } else {
                              if (status === V++) {
                                cm.npcMove(1540715, 0, 250, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushScaleInfo(2000, 1000, 2000, -90, -50);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                    cm.npc_ChangeController(1540716, "oid=286491612", -96, 84, 2, -146, -46, 1, false, 0, false);
                                    cm.npc_SetSpecialAction("oid=286491612", "summon", 0, 0);
                                    cm.setAmbience("Ambience.img/gal_gas", 100, 60);
                                    cm.inGameDirectionEvent_MoveAction(1);
                                    cm.inGameDirectionEvent_AskAnswerTime(800);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_MoveAction(0);
                                      cm.inGameDirectionEvent_AskAnswerTime(200);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_MoveAction(2);
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_MoveAction(0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          cm.effect_NormalSpeechBalloon("#fn黑体##fs25##r呃!", 1, 0, 0, 3500, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId());
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_MoveAction(4);
                                            cm.inGameDirectionEvent_ChangeEquipment([1012503]);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_SetForceMove("oid=286484517", -1, 150, 100);
                                              cm.forceStartQuest(33265, '');
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("你觉得我会毫无准备地\r\n等着你吗？", 37, 1540470, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  cm.effect_NormalSpeechBalloon("#fn黑体##fs25##r你…… 咳!", 1, 0, 0, 3500, 0, 0, 0, 0, 4, 0, cm.getPlayer().getId());
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_LeaveField("oid=286491612");
                                                    cm.npc_LeaveField("oid=286491612");
                                                    cm.playSoundEffDirectly("Ambience.img/gal_gas");
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npcMove(1540715, 0, -250, 2000);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushScaleInfo(2000, 1000, 2000, -90, -50);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("你先像这样静静地待一会儿。", 37, 1540470, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("现在这一瞬间真的非常重要。", 37, 1540470, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_PushScaleInfo(1000, 2000, 1000, -50, 50);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("噢，你听到了吗？\r\n这动听的爆炸声。", 37, 1540470, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_SetSpecialAction("oid=286484517", "bomb", -1, 1);
                                                                      cm.sendNormalTalk_Bottom("这会将人类的感情彻底清除干净。", 37, 1540470, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#fs20#人类的进化即将完成！", 37, 1540470, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else if (status === V++) {
                                                                            cm.dispose();
                                                                            cm.warp(350062171, 0, true);
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
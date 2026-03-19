var status = -1;
function action(f, E, e) {
  status++;
  if (!cm.isQuestFinished(32970)) {
    action1(f, E, e);
  } else {
    cm.dispose();
  }
}
function action1(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.updateInfoQuest(32970, "s1=1;s2=1;e1=1");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -400, -25);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), 360, -30);
        cm.npc_ChangeController(2560009, "oid=3561860", -560, -30, 8, -610, -510, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=3561860", "summon", 0, 0);
        cm.npc_ChangeController(2560009, "oid=3561861", -710, -30, 8, -760, -660, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=3561861", "summon", 0, 0);
        cm.npc_ChangeController(2560009, "oid=3561862", -280, -30, 8, -330, -230, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=3561862", "summon", 0, 0);
        cm.npc_ChangeController(2560009, "oid=3561863", -80, -30, 7, -130, -30, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=3561863", "summon", 0, 0);
        cm.npc_ChangeController(2560003, "oid=3561864", -400, -30, 8, -450, -350, 1, true, 300, false);
        cm.npc_SetSpecialAction("oid=3561864", 'summon', 0, 0);
        cm.npc_SetSpecialAction("oid=3561864", "stand2", -1, 1);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
          cm.effect_PlayMusic("Skill.img/101000201/Use");
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=3561860", "die1", 0, 1);
              cm.npc_SetSpecialAction("oid=3561861", "die1", 0, 1);
              cm.npc_SetSpecialAction("oid=3561862", 'die1', 0, 1);
              cm.npc_SetSpecialAction("oid=3561863", "die1", 0, 1);
              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9300744/Die", 200);
              cm.inGameDirectionEvent_AskAnswerTime(100);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9300744/Die", 200);
                cm.inGameDirectionEvent_AskAnswerTime(100);
              } else {
                if (status === V++) {
                  cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9300744/Die", 200);
                  cm.inGameDirectionEvent_AskAnswerTime(100);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9300744/Die", 200);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.setNpcSpecialActionReset("oid=3561864");
                      cm.sendNormalTalk_Bottom("#face0#轻松搞定。", 37, 2560003, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom('（哇……）', 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=3561864", 1, 10, 150);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(230);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#嗯？", 37, 2560003, false, true);
                            } else {
                              if (status === V++) {
                                cm.npc_setForceFlip("oid=3561864", -1);
                                cm.inGameDirectionEvent_AskAnswerTime(100);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetSpecialAction("oid=3561864", "fight", 0, 1);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                  cm.effect_PlayMusic("Skill.img/101000200/Use");
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9300744/Die", 200);
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#哎呀，差点漏掉了一个。", 37, 2560003, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("那么强，那么帅……\r\n有时真的很难相信他就是#r不洁者#k……", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_Monologue("只要有机会，我就会出神地偷看他战斗的场景。", 0);
                                            cm.effect_Voice("Voice3.img/DLep5/pangM/B_1.mp3", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_Monologue('', 0);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_Monologue("坚定的脚步，敏捷的身形，高超华丽的剑术。", 0);
                                                cm.effect_Voice("Voice3.img/DLep5/pangM/B_2.mp3", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_Monologue("他是个很强大骑士。", 1);
                                                  cm.effect_Voice("Voice3.img/DLep5/pangM/B_3.mp3", 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_Monologue("但是……现实却不允许我崇拜他。", 0);
                                                    cm.effect_Voice("Voice3.img/DLep5/pangM/B_4.mp3", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_Monologue("因为他是#r不洁者#k。", 0);
                                                      cm.effect_Voice("Voice3.img/DLep5/pangM/B_5.mp3", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_Monologue('', 0);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_Monologue("我的任务就是欺骗他。", 1);
                                                          cm.effect_Voice("Voice3.img/DLep5/pangM/B_6.mp3", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("在外面的世界，也许我也是个帅气的骑士。", 57, 0, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("也许……但估计不可能。", 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else if (status === V++) {
                                                                    cm.setStandAloneMode(false);
                                                                    cm.eventSKill(0);
                                                                    cm.setInGameDirectionMode(false, true, false);
                                                                    cm.npc_LeaveField("oid=3561860");
                                                                    cm.npc_LeaveField("oid=3561860");
                                                                    cm.npc_LeaveField("oid=3561861");
                                                                    cm.npc_LeaveField("oid=3561861");
                                                                    cm.npc_LeaveField("oid=3561862");
                                                                    cm.npc_LeaveField("oid=3561862");
                                                                    cm.npc_LeaveField("oid=3561863");
                                                                    cm.npc_LeaveField("oid=3561863");
                                                                    cm.npc_LeaveField("oid=3561864");
                                                                    cm.npc_LeaveField("oid=3561864");
                                                                    cm.dispose();
                                                                    cm.warp(307000110, 0, true);
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
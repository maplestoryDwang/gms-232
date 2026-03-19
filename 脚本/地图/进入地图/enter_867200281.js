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
      cm.setPartner(0, 9400588, 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(100);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.npc_ChangeController(9400588, "oid=2278050", -20, 200, 5, -70, 30, 1, true, false);
          cm.npc_SetSpecialAction("oid=2278050", "summon", 0, 0);
          cm.npc_ChangeController(9400596, "oid=2278051", 920, 330, 11, 870, 970, 1, true, false);
          cm.npc_SetSpecialAction("oid=2278051", "summon", 0, 0);
          cm.npc_ChangeController(9400642, "oid=2278052", 960, 330, 11, 910, 1010, 1, true, false);
          cm.npc_SetSpecialAction("oid=2278052", "summon", 0, 0);
          cm.inGameDirectionEvent_ForcedFlip(1);
          cm.npc_setForceFlip("oid=2278050", 1);
          cm.npc_SetForceMove("oid=2278051", -1, 520, 250);
          cm.npc_SetForceMove("oid=2278052", -1, 500, 220);
          cm.inGameDirectionEvent_AskAnswerTime(900);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT1/archer", 128);
            cm.inGameDirectionEvent_AskAnswerTime(600);
          } else {
            if (status === V++) {
              cm.effect_NormalSpeechBalloon("#fs15##e呃啊啊啊！", 0, 0, 0, 2000, 9400596, cm.getPlayer().getId());
              cm.sendNewEffects(18, [500, 1000, 2000, 220, 120]);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.npc_SetSpecialAction("oid=2278052", "skill2", 2880, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(630);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/wolfgrab", "oid=2278051"], [2200, 0, 0, 1, 0, 1, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(500);
                  } else {
                    if (status === V++) {
                      cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation");
                      cm.inGameDirectionEvent_AskAnswerTime(900);
                    } else {
                      if (status === V++) {
                        cm.sendNewEffects(18, [500, 2000, 2000, -40, 30]);
                      } else {
                        if (status === V++) {
                          cm.sendNewEffects(8, [0, 0, 0, 0, 0]);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_同时移动镜头和人(2, 170);
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_OneTimeAction(5, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.setNpcSpecialActionReset("oid=2278052");
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetSpecialAction("oid=2278052", "die1", 1300, 0);
                                  cm.npc_SetForceMove("oid=2278051", -1, 90, 200);
                                  cm.inGameDirectionEvent_AskAnswerTime(1300);
                                } else {
                                  if (status === V++) {
                                    cm.npc_LeaveField("oid=2278052");
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetForceMove("oid=2278050", 1, 100, 150);
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_ForcedFlip(-1);
                                        cm.npc_setForceFlip("oid=2278051", 1);
                                        cm.setNpcSpecialActionReset("oid=2278050");
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("呃啊啊啊，多……多谢！", 37, 9400596, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("芬……芬里斯来到村里了！", 37, 9400596, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("传说中的狼芬里斯突然出现，把村子……把村子烧成了一片火海！！！", 37, 9400596, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("它在不断地召来其他怪物！快……快先干掉它！", 37, 9400596, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#b芬里斯？", 57, 0, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("它……他是传说中的狼！虽然长……长得不太一样，但看那庞大的身躯和喷出的火焰，肯定是它！", 37, 9400588, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("长着冲天巨角！眼睛和鼻子里喷出烈火的芬里斯！", 37, 9400588, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation");
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#b你在这儿等着，我去看看！", 57, 0, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_ForcedFlip(1);
                                                              cm.inGameDirectionEvent_同时移动镜头和人(2, 500);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                              } else if (status === V++) {
                                                                cm.forceCompleteQuest(64014);
                                                                cm.updateInfoQuest(64015, "map=0");
                                                                cm.npc_LeaveField("oid=2278050");
                                                                cm.npc_LeaveField("oid=2278051");
                                                                cm.dispose();
                                                                cm.openNpc(0, "副本_莫奈德_Act1_营救卡夫塔佩");
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
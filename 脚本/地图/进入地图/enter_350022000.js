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
      cm.npc_ChangeController(1540451, "oid=22666651", 150, 71, 3, 100, 200, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22666651", "summon", 0, 0);
      cm.npc_SetSpecialAction("oid=22666651", "prisoned", -1, 1);
      cm.inGameDirectionEvent_ChangeEquipment([1392001]);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setAmbience("Ambience.img/warfare_far", 80, 60);
      cm.sendNormalTalk_Bottom("请起来……\r\n#fs36#请快点起来！", 37, 1540451, false, true);
      cm.curNodeEventEnd(true);
      cm.effect_LastingEff("Effect/OnUserEff.img/blackHeaven/prisoned", 1, 180000, 0);
      cm.effect_Voice("Voice3.img/BlackHeaven/nh/5", 100);
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
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("你听到那声音了吗？\r\n甲板上面肯定发生了战斗。", 37, 1540451, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("所以说我不是早就警告过你了吗？\r\n我不是说那家伙会使用必杀技吗？", 37, 1540451, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("我事先埋伏好了兵力，等到变身术士露出真实面目，就活捉他，但\r\n我没想到他会变成女皇的模样……\r\n他变成女皇的模样，我实在是下不了手。", 37, 1540451, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("我们先把绳子解开吧。\r\n我想凭你的力量，应该能解开吧？", 37, 1540451, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                      cm.effect_Text(["#fn黑体##fs18#作战开始3小时后   #fs15##fn黑体#黑色之翼的袭击"], [100, 2200, 6, -50, -50, 1, 4, 0, 0, 0]);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/text", 100);
                        cm.playSoundEffDirectly("Ambience.img/warfare_far");
                        cm.setAmbience("Ambience.img/warfare_far", 40, 60);
                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 150, 71);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1400);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=22666651", "prisoned_shake", -1, 1);
                              cm.emotion(5, 99999);
                              cm.inGameDirectionEvent_QTE(0);
                              cm.effect_LastingEff("Effect/OnUserEff.img/blackHeaven/prisoned_shake", 1, 180000, 0);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetSpecialAction("oid=22666651", 'none', -1, 1);
                                  cm.inGameDirectionEvent_MoveAction(7);
                                  cm.inGameDirectionEvent_AskAnswerTime(470);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetSpecialAction("oid=22666651", "prisoned_shake", -1, 1);
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 2100, 0, 150, 101);
                                    cm.effect_Voice("Skill.img/4111010/Hit", 100);
                                    cm.effect_Voice("Skill.img/1121015/Hit", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 150, 101);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.addPopupSay(1540451, 2000, "你就这么点实力吗?", "Voice3.img/BlackHeaven/nh/6", 0);
                                            cm.inGameDirectionEvent_QTE(0);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.npc_SetSpecialAction("oid=22666651", "none", -1, 1);
                                                cm.inGameDirectionEvent_MoveAction(7);
                                                cm.inGameDirectionEvent_AskAnswerTime(470);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_SetSpecialAction("oid=22666651", "prisoned_shake", -1, 1);
                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 2300, 0, 150, 101);
                                                  cm.effect_Voice("Skill.img/4111010/Hit", 100);
                                                  cm.effect_Voice("Skill.img/1121015/Hit", 100);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 2200, 0, 150, 101);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.addPopupSay(1540451, 2000, "请再用点力. ", "Voice3.img/BlackHeaven/nh/7", 0);
                                                          cm.inGameDirectionEvent_QTE(0);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetSpecialAction("oid=22666651", 'none', -1, 1);
                                                              cm.inGameDirectionEvent_MoveAction(7);
                                                              cm.inGameDirectionEvent_AskAnswerTime(470);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_SetSpecialAction("oid=22666651", "prisoned_shake", -1, 1);
                                                                cm.inGameDirectionEvent_PushScaleInfo(0, 2700, 0, 150, 131);
                                                                cm.effect_Voice("Skill.img/4111010/Hit", 100);
                                                                cm.effect_Voice("Skill.img/1121015/Hit", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 2500, 0, 150, 131);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.addPopupSay(1540451, 2000, "几乎差不多了!", "Voice3.img/BlackHeaven/nh/8", 0);
                                                                        cm.emotion(15, 99999);
                                                                        cm.inGameDirectionEvent_QTE(0);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_SetSpecialAction("oid=22666651", "none", -1, 1);
                                                                            cm.inGameDirectionEvent_MoveAction(7);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(470);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_PlayFieldSound("Sound/Voice3.img/BlackHeaven/nh/9", 100);
                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 150, 71);
                                                                              cm.effect_Voice("Skill.img/3111003/Use", 100);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.emotion(0, 99999);
                                                                                cm.inGameDirectionEvent_OneTimeAction(563, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                cm.effect_LastingEff(null, 0, 0, 0);
                                                                                cm.effect_OnUserEff("Effect/OnUserEff.img/blackHeaven/prisoned_bang");
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.npc_SetSpecialAction("oid=22666651", "unprisoned", -1, 1);
                                                                                  cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                    cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/ddam");
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("……我已经老了，做不来这些事情了。", 37, 1540451, false, true);
                                                                                      cm.effect_Voice("Voice3.img/BlackHeaven/nh/10", 100);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_ChangeEquipment([0]);
                                                                                          cm.inGameDirectionEvent_ForcedFlip(0);
                                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                          } else if (status === V++) {
                                                                                            cm.dispose();
                                                                                            cm.warp(350022010, 0, true);
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
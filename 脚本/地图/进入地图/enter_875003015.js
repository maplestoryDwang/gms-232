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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.sendNewEffects(17, [0, 1000, 1500, -150, 350]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(9401277, "oid=78425319", -100, 290, 22, -150, -50, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=78425319", "summon", 0, 0);
        cm.npc_ChangeController(9401368, "oid=78425320", 20, 290, 22, -30, 70, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=78425320", "summon", 0, 0);
        cm.setNPC_Fadein(9401368, 1);
        cm.npc_ChangeController(9401368, "oid=78425321", 100, 290, 23, 50, 150, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=78425321", 'summon', 0, 0);
        cm.setNPC_Fadein(9401368, 1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9601665/Attack2", 50);
            cm.npc_SetSpecialAction("oid=78425319", "attack2", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(600);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9601657/Die", 100);
              cm.npc_SetSpecialAction("oid=78425320", "die", 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(600);
            } else {
              if (status === V++) {
                cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9601657/Attack1", 100);
                cm.npc_SetSpecialAction("oid=78425321", "attack", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(300);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=78425319", 1, 30, 100);
                  cm.inGameDirectionEvent_AskAnswerTime(300);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9601665/Attack1", 50);
                    cm.npc_SetSpecialAction("oid=78425319", "attack1", 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(600);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_PlayFieldSound("Sound/Mob.img/9601657/Die", 100);
                      cm.npc_SetSpecialAction("oid=78425321", 'die', 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.npc_LeaveField("oid=78425320");
                        cm.npc_LeaveField("oid=78425321");
                        cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face3##b……好像有点奇怪。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=78425319", -1);
                              cm.sendNormalTalk_Bottom("#face8#你在说什么呢？", 37, 9401277, false, true, 1);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_ForcedFlip(-1);
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                } else {
                                  if (status === V++) {
                                    cm.effect_NormalSpeechBalloon('......', 1, 0, 0, 2000, 1, 0, 0, 0, 4, 0, null, cm.getPlayer().getId());
                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                    cm.sendNormalTalk_Bottom("#face3##b……不，走吧。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face3##b（感觉……有种异样的气息。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face3##b（但愿只是杞人忧天……）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_同时移动镜头和人(2, 400);
                                              cm.sendNewEffects(13, [4000, 400, 0]);
                                            } else {
                                              if (status === V++) {
                                                cm.fieldEffect_InsertCanvas(1, 255, 30, 0, 0, 5000, 0);
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_ProcessOnOffLayer("noise", "Effect/DirectionWz2.img/MukhyunEff/noise/1366", 0, 500, -5, -5, 0, 4, 1, -1, 1, 0, 0);
                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/noise", 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_ProcessOnOffLayer('noise', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_ProcessOnOffLayer("noise", "Effect/DirectionWz2.img/MukhyunEff/noise/1366", 0, 500, -5, -5, 0, 4, 1, -1, 1, 0, 0);
                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/noise", 100);
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_ProcessOnOffLayer("noise", '', 2, 300, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.emotion(1, -1);
                                                          cm.inGameDirectionEvent_OneTimeAction(4, 3000);
                                                          cm.fieldEffect_InsertCanvas(1, 255, 30, 0, 0, 2000, 0);
                                                          cm.fieldEffect_ProcessOnOffLayer("noise", "Effect/DirectionWz2.img/MukhyunEff/noise/1366", 0, 500, -5, -5, 0, 4, 1, -1, 1, 0, 0);
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEffWz2.img/Mukhyun/noise", 100);
                                                          cm.setAmbience("SoundEffWz2.img/Mukhyun/burning_loop", 100, 60);
                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_ProcessOnOffLayer('00', "Effect/DirectionWz2.img/MukhyunStory/3", 0, 2000, 0, 0, 1, 4, 0, -1, 0, 0, 0);
                                                            cm.setAmbience("SoundEffWz2.img/Mukhyun/scream2", 100, 60);
                                                            cm.effect_Text(["#e#fs35##fc0xff990000#“饶、饶命！求求你！”", ''], [10, 2000, 4, 0, 0, 0, 4, 3, 0, 0, -1, 1]);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.effect_Text(["#e#fs40##fc0xff990000#“呃啊啊啊啊啊啊！！！！！！！！！！”", ''], [10, 2000, 4, 0, 0, 0, 4, 3, 0, 0, -1, 1]);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 2000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.playSoundEffDirectly("SoundEffWz2.img/Mukhyun/scream2");
                                                                  cm.fieldEffect_ProcessOnOffLayer("noise", '', 2, 6000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.playSoundEffDirectly("SoundEffWz2.img/Mukhyun/burning_loop");
                                                                    cm.emotion(1, -1);
                                                                    cm.sendNormalTalk_Bottom("#face5##b呃，呃呃呃……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, false, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face8#" + (cm.getPlayer().getGender() == 0 ? '师兄' : '师姐') + "？！你没事吧？！", 37, 9401277, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face3##b（呼，呼……到底是，谁的记忆呢？）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face3##b（心脏……在怦怦直跳。）", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face8#就快到家了。再坚持一下！", 37, 9401277, true, true, 1);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNewEffects(14, [0, 2000, 1000]);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNewEffects(19, [0]);
                                                                                } else if (status === V++) {
                                                                                  cm.forceCompleteQuest(65934);
                                                                                  cm.gainExp(2769);
                                                                                  cm.gainExp(907);
                                                                                  cm.updateInfoQuest(65932, 'obj=0');
                                                                                  cm.npc_LeaveField("oid=78425319");
                                                                                  cm.dispose();
                                                                                  cm.warp(875000102, 0, false);
                                                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
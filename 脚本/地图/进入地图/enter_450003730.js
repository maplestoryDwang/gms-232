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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(3003258, "oid=1754704", 660, -50, 11, 610, 710, 1, false, false);
      cm.npc_SetSpecialAction("oid=1754704", "summon", 0, 0);
      cm.npc_ChangeController(3003251, "oid=1754705", 460, -50, 8, 410, 510, 0, true, false);
      cm.npc_SetSpecialAction("oid=1754705", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 650, 50);
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
            cm.sendNormalTalk_Bottom("呃呃…… ", 37, 3003258, false, true);
          } else {
            if (status === V++) {
              cm.npc_SetSpecialAction("oid=1754704", "remove", 0, 0);
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/regen", 200);
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.npc_SetSpecialAction("oid=1754704", "stand2", -1, 1);
                cm.sendNormalTalk_Bottom('变成了音乐盒？！', 57, 0, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#看来音乐盒是维持梦境的装置的推测是正确的。", 37, 3003251, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushScaleInfo(450, 2000, 350, 180, 50);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.npc_setForceFlip("oid=1754705", -1);
                          cm.inGameDirectionEvent_ForcedFlip(-1);
                          cm.npc_ChangeController(3003257, "oid=1754706", 120, -50, 4, 70, 170, 0, true, false);
                          cm.npc_SetSpecialAction("oid=1754706", "summon", 0, 0);
                          cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 120, 70, 1, 0, 1, 1, 0]);
                          cm.fieldEffect_PlayFieldSound("summon/0", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(200);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(3003257, "oid=1754707", 60, -50, 4, 10, 110, 0, true, false);
                            cm.npc_SetSpecialAction("oid=1754707", "summon", 0, 0);
                            cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 60, 70, 1, 0, 1, 1, 0]);
                            cm.fieldEffect_PlayFieldSound("summon/0", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(200);
                          } else {
                            if (status === V++) {
                              cm.npc_ChangeController(3003257, "oid=1754708", 0, -50, 2, -50, 50, 0, true, false);
                              cm.npc_SetSpecialAction("oid=1754708", 'summon', 0, 0);
                              cm.inGameDirectionEvent_头顶图片(["Effect/Summon.img/50"], [0, 0, 70, 1, 0, 1, 1, 0]);
                              cm.fieldEffect_PlayFieldSound('summon/0', 100);
                              cm.inGameDirectionEvent_AskAnswerTime(200);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(700);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom(" 不要碰…… 音乐盒……", 45, 3003257, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushScaleInfo(500, 2000, 500, 650, 50);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove("oid=1754705", -1, 200, 160);
                                        cm.sendNormalTalk_Bottom("#face0#我会拖延时间的！请摧毁音乐盒！", 37, 3003251, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 650, 50);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_ForcedFlip(1);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_OneTimeAction(10, 0);
                                                cm.fieldEffect_PlayFieldSound("Aran/swingT2", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(100);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/regen", 200);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_OneTimeAction(10, 0);
                                                    cm.fieldEffect_PlayFieldSound("Aran/swingT2", 100);
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/regen", 200);
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_OneTimeAction(10, 0);
                                                      cm.fieldEffect_PlayFieldSound("Aran/swingT2", 100);
                                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/regen", 200);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_OneTimeAction(10, 0);
                                                          cm.fieldEffect_PlayFieldSound("Aran/swingT2", 100);
                                                          cm.inGameDirectionEvent_AskAnswerTime(100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/regen", 200);
                                                            cm.sendNormalTalk_Bottom("(比想象中的更加坚固。)", 57, 0, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom(" 让开…真是碍手碍脚的。", 45, 3003257, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#请摧毁音乐盒，#ho#！", 37, 3003251, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_OneTimeAction(10, 0);
                                                                    cm.fieldEffect_PlayFieldSound("Aran/swingT2", 100);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/regen", 200);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_OneTimeAction(10, 0);
                                                                        cm.fieldEffect_PlayFieldSound("Aran/swingT2", 100);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/regen", 200);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_OneTimeAction(10, 0);
                                                                            cm.fieldEffect_PlayFieldSound("Aran/swingT2", 100);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/regen", 200);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_OneTimeAction(10, 0);
                                                                                cm.fieldEffect_PlayFieldSound("Aran/swingT2", 100);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(100);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/regen", 200);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_SetSpecialAction("oid=1754704", "die", -1, 1);
                                                                                    cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8643013/Die", 200);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("音乐盒被摧毁了！", 57, 0, false, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.npc_SetSpecialAction("oid=1754705", 'sit', -1, 1);
                                                                                        cm.inGameDirectionEvent_PushScaleInfo(500, 2000, 500, 180, 50);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.npc_LeaveField("oid=1754704");
                                                                                            cm.sendNormalTalk_Bottom("防毒面具！！", 57, 0, false, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("     太迟了…… 音乐盒…… ", 45, 3003257, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("     梦境…………正在变弱……", 45, 3003257, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/Mob.img/8643000/Die", 200);
                                                                                                  cm.npc_SetSpecialAction("oid=1754706", "die", -1, 1);
                                                                                                  cm.npc_SetSpecialAction("oid=1754707", "die", -1, 1);
                                                                                                  cm.npc_SetSpecialAction("oid=1754708", "die", -1, 1);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                                                } else if (status === V++) {
                                                                                                  cm.forceCompleteQuest(34315);
                                                                                                  cm.forceStartQuest(34316, '');
                                                                                                  cm.gainItem(4034982, -20);
                                                                                                  cm.dispose();
                                                                                                  cm.warp(450003330, 0, true);
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
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;
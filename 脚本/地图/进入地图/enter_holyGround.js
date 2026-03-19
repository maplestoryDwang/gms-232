var status = -1;
function start() {
  action(1, 0, 0);
}
function action(f, E, e) {
  status++;
  if (cm.getMapId() == 940202043) {
    action三转(f, E, e);
  } else if (cm.getMapId() == 940202047) {
    action四转(f, E, e);
  } else {
    cm.dispose();
  }
}
function action四转(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.setAmbience("Ambience.img/blizzard_soft", 80, 60);
      cm.inGameDirectionEvent_PushMoveInfo(0, 0, 0, 1500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 170, 0, 120);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(6000);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayBGM("Bgm47/IlliumRebirth", 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(5000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_ProcessOnOffLayer("text40", "Effect/Direction14.img/illium/text4/0", 0, 1000, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_ProcessOnOffLayer("text40", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_ProcessOnOffLayer('text41', "Effect/Direction14.img/illium/text4/1", 0, 1000, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_ProcessOnOffLayer("text41", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_ProcessOnOffLayer("text42", "Effect/Direction14.img/illium/text4/2", 0, 1000, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_ProcessOnOffLayer("text42", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_ProcessOnOffLayer("text43", "Effect/Direction14.img/illium/text4/3", 0, 1000, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_ProcessOnOffLayer('text43', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_ProcessOnOffLayer("text44", "Effect/Direction14.img/illium/text4/4", 0, 1000, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_ProcessOnOffLayer("text44", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer("text45", "Effect/Direction14.img/illium/text4/5", 0, 1000, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_ProcessOnOffLayer("text45", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(3600);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/job", 100);
                                            cm.teachSkill(152120015, 0, 10);
                                            cm.teachSkill(152121011, 0, 10);
                                            cm.teachSkill(152121009, 0, 10);
                                            cm.teachSkill(152120008, 0, 10);
                                            cm.teachSkill(152121007, 0, 10);
                                            cm.teachSkill(152121005, 0, 10);
                                            cm.teachSkill(152121004, 0, 10);
                                            cm.teachSkill(152120001, 0, 10);
                                            cm.updateInfoQuest(1073, "15200=10;15210=38;15211=66;15212=201");
                                            cm.playerMessage(5, "转职后获得了更强大的魔法之翼。请查看背包。");
                                            cm.playerMessage(-1, "转职后获得了更强大的魔法之翼。请查看背包。");
                                            cm.changeJob(15212);
                                            cm.updateInfoQuest(34900, "targetMap=104000000;job1=1;job2=1;job3=1;job4=1");
                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                          } else {
                                            if (status === V++) {
                                              cm.effect_OnUserEff("Effect/BasicEff.img/JobChangedIlliumFront");
                                              cm.gainItem(1353503, 1);
                                              cm.gainItem(1143081, 1);
                                              cm.gainItem(1190532, 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(100);
                                            } else {
                                              if (status === V++) {
                                                cm.updateInfoQuest(34842, "045=1;exp=1");
                                                cm.inGameDirectionEvent_AskAnswerTime(5000);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_Hero9(0, 500);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else if (status === V++) {
                                                  cm.forceStartQuest(34827, '');
                                                  cm.forceCompleteQuest(34827);
                                                  cm.forceCompleteQuest(34842);
                                                  cm.dispose();
                                                  cm.warp(940202046, 1, true);
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
function action三转(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.setAmbience("Ambience.img/blizzard_soft", 80, 60);
      cm.inGameDirectionEvent_PushMoveInfo(0, 0, 0, 1500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 170, 0, 120);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(6000);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayBGM("Bgm47/IlliumRebirth", 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(5000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_ProcessOnOffLayer("text30", "Effect/Direction14.img/illium/text3/0", 0, 1000, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_ProcessOnOffLayer('text30', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_ProcessOnOffLayer("text31", "Effect/Direction14.img/illium/text3/1", 0, 1000, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_ProcessOnOffLayer("text31", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_ProcessOnOffLayer("text32", "Effect/Direction14.img/illium/text3/2", 0, 1000, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(3000);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_ProcessOnOffLayer("text32", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1200);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_ProcessOnOffLayer("text33", "Effect/Direction14.img/illium/text3/3", 0, 1000, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(3000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_ProcessOnOffLayer("text33", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_ProcessOnOffLayer("text34", "Effect/Direction14.img/illium/text3/4", 0, 1000, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                  } else {
                                    if (status === V++) {
                                      cm.fieldEffect_ProcessOnOffLayer("text34", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ProcessOnOffLayer("text35", "Effect/Direction14.img/illium/text3/5", 0, 1000, 0, 0, 0, 4, 1, -1, 0, 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_ProcessOnOffLayer("text35", '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(3600);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/illium/job", 100);
                                            cm.updateInfoQuest(1073, "15200=10;15210=38;15211=66");
                                            cm.playerMessage(5, "转职后获得了更强大的魔法之翼。请查看背包。");
                                            cm.playerMessage(-1, "转职后获得了更强大的魔法之翼。请查看背包。");
                                            cm.updateInfoQuest(34900, "job1=1;job2=1;job3=1");
                                            cm.forceStartQuest(34834, '');
                                            cm.inGameDirectionEvent_AskAnswerTime(100);
                                            cm.changeJob(15211);
                                          } else {
                                            if (status === V++) {
                                              cm.effect_OnUserEff("Effect/BasicEff.img/JobChangedIlliumFront");
                                              cm.gainItem(1353502, 1);
                                              cm.gainItem(1143080, 1);
                                              cm.gainItem(1190531, 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(100);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(5000);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_Hero9(0, 500);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else if (status === V++) {
                                                  cm.forceStartQuest(34826, '');
                                                  cm.forceCompleteQuest(34826);
                                                  cm.forceCompleteQuest(34834);
                                                  cm.updateInfoQuest(34834, "exp=1");
                                                  cm.dispose();
                                                  cm.warp(940202042, 1, true);
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
function randomNum(f, E) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * f + 1, 10);
    case 2:
      return parseInt(Math.random() * (E - f + 1) + f, 10);
    default:
      return 0;
  }
}
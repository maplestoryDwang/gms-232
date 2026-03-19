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
      cm.gainSkillBuff(80002824);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.setPartner(1, 3001651, 80002800, 0);
      cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
      cm.npc_ChangeController(3001651, "oid=2973795", 2151, -1026, 77, 2101, 2201, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2973795", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 350, -107);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(500, 0, 1500, 500, 350, -450);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.userSetFieldFloating(993160138, 0, 30, 1000);
                  cm.sendNormalTalk_Bottom("#face4#……", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                  cm.effect_Voice("Voice5.img/hoyoung/G/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + "/13", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face7#是我……召唤出来的？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                    cm.effect_Voice("Voice5.img/hoyoung/G/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + "/14", 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#现在总算明白了，小鬼。", 37, 3001651, true, true);
                      cm.effect_Voice("Voice5.img/hoyoung/G/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/15', 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face11#哈，哈哈……哈哈哈……", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                        cm.effect_Voice("Voice5.img/hoyoung/G/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + "/16", 100);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face6#不知道为什么……这倒是让人挺兴奋的嘛！好吧，那就一鼓作气，\r\n飞去魂魄所在的地方咯，抓牢了，饕餮！", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                          cm.effect_Voice("Voice5.img/hoyoung/G/" + (cm.getPlayer().getGender() == 0 ? "Male" : 'Female') + '/17', 100);
                        } else {
                          if (status === V++) {
                            cm.userSetFieldFloating(993160138, 0, 0, 0);
                            cm.inGameDirectionEvent_同时移动镜头和人(2, 1000);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_PlayFieldSound("Sound/Voice5.img/hoyoung/G/Male/18", 100);
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/cloud", 100);
                              cm.sendNormalTalk_Bottom("#face5#站住，你这个怪物！", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.setPartner(0, 3001651, 0, 0);
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 2200, -1020);
                                  } else {
                                    if (status === V++) {
                                      cm.setNpcSpecialActionReset("oid=2973795");
                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                      cm.inGameDirectionEvent_AskAnswerTime(100);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetSpecialAction("oid=2973795", "special3", 1800, 0);
                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/D_get", 100);
                                          cm.inGameDirectionEvent_AskAnswerTime(1800);
                                        } else {
                                          if (status === V++) {
                                            cm.setNpcSpecialActionReset("oid=2973795");
                                            cm.onTeleport(0, 3, cm.getPlayer().getId(), 1900, -1050);
                                            cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                            cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 2300, -1020);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1000, 4000, 2200, -914);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_同时移动镜头和人(2, 80);
                                                        cm.fieldEffect_PlayFieldSound("Sound/Voice5.img/hoyoung/G/Male/19", 100);
                                                        cm.sendNormalTalk_Bottom("#face6#成功了……回收了一只怪物。\r\n不，准确说来，应该是现在总算能真正施展道术了。", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.fieldEffect_PlayFieldSound("Sound/Voice5.img/hoyoung/G/Male/20", 100);
                                                            cm.sendNormalTalk_Bottom("#face0#力……力量好像稍微回来一些了！", 37, 3001651, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.fieldEffect_PlayFieldSound("Sound/Voice5.img/hoyoung/G/Male/21", 100);
                                                                cm.sendNormalTalk_Bottom("#face6#行了，行了！", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_ProcessOnOffLayer('09', "Effect/Direction9.img/HoyoungEffect/6", 0, 500, 430, 120, 1, 4, 0, -1, 0, 0, 0);
                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/complete", 100);
                                                                    cm.userSetFieldFloating(993160138, 10, 10, 10);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.userSetFieldFloating(993160138, 0, 0, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.teachSkill(164001004, 0, -1);
                                                                        cm.teachSkill(164001004, 1, 1);
                                                                        cm.fieldEffect_ProcessOnOffLayer('09', '', 2, 1000, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                        cm.fieldEffect_Hero9(0, 2000);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2300);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                          cm.fieldEffect_Hero9(100, 500);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                                                  } else if (status === V++) {
                                                                                    cm.npc_LeaveField("oid=2973795");
                                                                                    cm.npc_LeaveField("oid=2973795");
                                                                                    cm.dispose();
                                                                                    cm.warp(993160107, 0, false);
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
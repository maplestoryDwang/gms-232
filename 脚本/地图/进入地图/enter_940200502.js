var status = -1;
function start() {
  status = -1;
  action(1, 0, 0);
}
;
function action(f, E, e) {
  status++;
  if (cm.isQuestFinished(34600) || !cm.isQuestFinished(34600)) {
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
      cm.npc_ChangeController(3001221, 'oid=257940', 692, 41, 1);
      cm.npc_ChangeController(3001260, 'oid=257941', 813, 41, 1);
      cm.npc_ChangeController(3001260, 'oid=257942', 872, 33, 1);
      cm.npc_ChangeController(3001260, "oid=257943", 554, 26, 0);
      cm.npc_ChangeController(3001260, "oid=257944", 996, 13, 1);
      cm.forceCompleteQuest(34600);
      cm.onTeleport(1, cm.getPlayer().getId(), -373, -47);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -374, 43);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
          cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, -50, 43);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(2000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#今天城市里……也充斥了一股臭味。没办法，只能忍忍了。我到底在期待什么……\r\n", 37, 3001270, false, true);
            } else {
              if (status === V++) {
                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 350, 43);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(100);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 770, 43);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/people", 250);
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#呜哈哈，看到了吗？我这出神入化的身手！咻-咻-几下子就能把对手打趴下！\r\n", 37, 3001260, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#哈哈，你们这些家伙。跟我一伙是你们的光荣，知道吗？\r\n", 37, 3001260, true, true);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/people", 250);
                                  cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                  cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                        cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -50, 43);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#喂，那边之所以这么吵……是有人在打架吗？呃，该不会有什么高手吧？\r\n", 37, 3001270, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/cadena/people", 250);
                                            cm.inGameDirectionEvent_同时移动镜头和人(2, 420);
                                            cm.inGameDirectionEvent_PushScaleInfo(2000, 2000, 2000, 420, 43);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                            } else {
                                              if (status === V++) {
                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
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
                                                    } else {
                                                      if (status === V++) {
                                                        cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                              cm.onTeleport(1, cm.getPlayer().getId(), 270, -10);
                                                              cm.inGameDirectionEvent_ForcedFlip(1);
                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 484, 100);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#今天又干了一票大的！哈哈！我不过是吓唬而已，竟然吓得屁滚尿流！干坏事就是刺激！", 37, 3001260, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#那个，别在这傻站着了，分完东西赶快解散！", 37, 3001260, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face0#……", 37, 3001260, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#喂，你直勾勾看什么？有什么不满吗？还不快滚开！", 37, 3001260, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face3#……我为什么要这样做？", 37, 3001270, true, true);
                                                                        cm.effect_Voice("Voice3.img/cadena/Q1/Female/0", 128);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#干、干什么？", 37, 3001260, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face3#哈，我特意到这来看看到底是谁这么厉害，没想到就是群草包！啧，枉我白跑一趟！", 37, 3001270, true, true);
                                                                            cm.effect_Voice("Voice3.img/cadena/Q1/Female/1", 128);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face3#有什么不满，先打赢我再说！你们很能打吗！？", 37, 3001270, true, true);
                                                                              cm.effect_Voice("Voice3.img/cadena/Q1/Female/2", 128);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_OneTimeAction('圣晶使徒_蓄力', 0);
                                                                                cm.inGameDirectionEvent_头顶图片(["Skill/6002.img/skill/60021279/effect"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                cm.inGameDirectionEvent_头顶图片(["Skill/6002.img/skill/60021279/hit"], [0, 700, -90, 1, 0, 0, 0, 0]);
                                                                                cm.fieldEffect_PlayFieldSound("Sound/Skill.img/60021279/Use", 100);
                                                                                cm.fieldEffect_PlayFieldSound("Sound/Skill.img/60021279/Hit", 100);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#咦，刚刚过去的是什么？呃，难道是刚抢到的战利品！？", 37, 3001260, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face2#呼，这就是惹怒卡德娜大人的代价！有仇必报可是我的信条！", 37, 3001270, true, true);
                                                                                    cm.effect_Voice("Voice3.img/cadena/Q1/Female/3", 128);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face3#想要东西就打赢我！……哈哈，不过可能你没这个机会了！", 37, 3001270, true, true);
                                                                                      cm.effect_Voice("Voice3.img/cadena/Q1/Female/4", 128);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#呃、呃呃……气死我了，气死我了……小的们，给我干掉他们！", 37, 3001260, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
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
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  while (cm.getLevel() < 10) {
                                                                                                    cm.getPlayer().levelUp();
                                                                                                  }
                                                                                                  cm.setInGameDirectionMode(false, false, false);
                                                                                                  cm.setStandAloneMode(false);
                                                                                                  var O = cm.getEventManager("魔链影士_战斗1_击杀数");
                                                                                                  O.startInstance(cm.getPlayer(), cm.getMap());
                                                                                                  cm.dispose();
                                                                                                } else {
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
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function action2(f, E, e) {
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
    } else {
      if (status === V++) {} else if (status === V++) {
        cm.warp(992000000, 0);
        cm.curNodeEventEnd(true);
        cm.setInGameDirectionMode(false, true);
        cm.setStandAloneMode(false);
        cm.dispose();
        cm.npc_LeaveField(2540000);
      } else {
        cm.dispose();
      }
    }
  }
}
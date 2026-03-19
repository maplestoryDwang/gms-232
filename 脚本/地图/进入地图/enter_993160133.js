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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -30, -127);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(300);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_OneTimeAction(29, 999999);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 0, -52);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(300);
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
                cm.inGameDirectionEvent_ForcedFlip(0);
                cm.inGameDirectionEvent_AskAnswerTime(300);
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
                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 0, 110);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 2000, 3000, 0, 0);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(4000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face12#10根木头段儿，这些哪够100天的，\r\n不过我有一个连师父都不知道的秘密武器。", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face12##fc0xFFbfbfbf#（在开裂的缝隙处稍微用了用力便裂成了木头段儿，\r\n再然后一根木头段儿又变成了几根。）", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face5#我这小聪明简直在师父之上啊！嘻嘻……那接下来……\r\n就在木头段儿上刻上天地人的字样。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（捡起一片被劈开的木头段儿，刻上天、地、人，\r\n因为没用刀，手腕酸疼得厉害。）", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_OneTimeAction(2, 1);
                                          cm.sendNormalTalk_Bottom("#face0#“天”指天空，“地”指大地，而“人”便是我，\r\n领悟天与地之间便是我，道术的基本。", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_MoveAction(4);
                                              cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2000, 2000, 0, 110);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_MoveAction(0);
                                                  cm.inGameDirectionEvent_MoveAction(5);
                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face2#专注点……我正在运气呢……就是现在！", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#哈！", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_PushScaleInfo(500, 0, 2000, 500, -106, 110);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_OneTimeAction(5, 500);
                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face3#……成，成功了吗？不对，今天也失败了呢……", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face3#师父曾经说过，所有事情都有时机，可时机何时才会成熟呢？\r\n再这样下去该不会永远都用不了了吧？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.userSetFieldFloating(993160133, 10, 10, 50);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    cm.effect_Voice("Voice5.img/hoyoung/A/" + (cm.getPlayer().getGender() == 0 ? "Male" : "Female") + '/1', 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.userSetFieldFloating(993160133, 0, 0, 0);
                                                                      cm.inGameDirectionEvent_同时移动镜头和人(2, 10);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom('#face7#！？', 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("#face0#到这边来……小老虎……", 37, 3001676, true, true);
                                                                          cm.effect_Voice("Voice5.img/hoyoung/B-1/" + (cm.getPlayer().getGender() == 0 ? 'Male' : "Female") + '/5', 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face7#我好像听到有马的声音……出什么事了？该不会外面有人\r\n找过来了吧？可这道观这么偏僻？", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face7#嗓音又有点像个老人……不会是需要帮忙吧？\r\n我终于有机会当个行侠仗义的潇洒道士了！？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_同时移动镜头和人(2, 230);
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
                                                                                              cm.setStandAloneMode(false);
                                                                                              cm.eventSKill(0);
                                                                                              cm.setInGameDirectionMode(false, true, false);
                                                                                              cm.dispose();
                                                                                              cm.warp(993160101, 0, false);
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
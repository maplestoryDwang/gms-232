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
      cm.npc_ChangeController(3003627, 'oid=275831', 261, 299, 9, 211, 311, 1, false, 0, false);
      cm.npc_ChangeController(3003676, "oid=275832", -177, 299, 8, -227, -127, 4, true, 0, false);
      cm.npc_ChangeController(3003677, "oid=275833", -288, 299, 8, -338, -238, 4, true, 0, false);
      cm.npc_ChangeController(3003660, "oid=275834", 468, -36, 1, 418, 518, 5, true, 0, false);
      cm.npc_ChangeController(3003660, 'oid=275835', 539, -36, 1, 489, 589, 5, true, 0, false);
      cm.npc_ChangeController(3003660, "oid=275836", 612, -36, 1, 562, 612, 5, true, 0, false);
      cm.npc_ChangeController(3003660, "oid=275837", 711, -36, 3, 661, 761, 5, true, 0, false);
      cm.npc_ChangeController(3003660, "oid=275838", -211, -36, 6, -261, -170, 4, true, 0, false);
      cm.npc_ChangeController(3003660, "oid=275839", -288, -36, 5, -338, -238, 4, true, 0, false);
      cm.npc_ChangeController(3003660, 'oid=275840', -398, -36, 5, -448, -348, 4, true, 0, false);
      cm.npc_ChangeController(3003660, 'oid=275841', 701, 299, 9, 651, 751, 5, true, 0, false);
      cm.npc_ChangeController(3003660, "oid=275842", -475, 299, 8, -525, -425, 4, true, 0, false);
      cm.npc_ChangeController(3003675, "oid=275843", -43, 299, 8, -93, 7, 4, true, 0, false);
      cm.npc_ChangeController(3003660, "oid=275844", -481, -36, 5, -481, -431, 4, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 100, -637);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_ForcedFlip(0);
          cm.inGameDirectionEvent_PushScaleInfo(4000, 0, 1000, 4000, 100, 222);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(5000);
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
                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 100, 350);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#我们已经完全进入了迷雾。\r\n呃……周围的空气冷冷的……让人毛骨悚然。", 37, 3003675, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#伸手不见五指。我从没见过这么浓的雾气……\r\n真诡异……我有种不祥的预感。", 37, 3003676, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.npc_ChangeController(3003660, "oid=2202948", 105, 282, 9, 55, 155, 0, true, 1000, false);
                              cm.npc_SetSpecialAction("oid=2202948", "summon", 0, 0);
                              cm.npc_SetSpecialAction("oid=2202948", "alert", -1, 1);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#吉，吉格蒙特队长……\r\n里面的敌人有点……奇，奇怪。", 37, 3003660, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#奇怪？那是什么意思？", 37, 3003672, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#他们会在迷雾中悄无声息地出现，攻击之后又消失得无影无踪……\r\n而且看上去好像受到了某种东西的迷惑，真是让人束手无策。", 37, 3003660, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#……知道了。贝尔，韩利泰，切奇，你们全都去甲板上战斗。\r\n如果有什么其他的情报，我会马上和你们联系。", 37, 3003672, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#知道了，队长！！", 37, 3003676, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ark/noise_start", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#（吉格蒙特从白色之矛收到了消息。\r\n好像说是为了强化诺特勒斯号的防御，必须加强护卫。）", 37, 3003672, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#好的，我会如实转达。", 37, 3003672, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ark/noise_start", 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0##b#ho##k，你必须去助诺特勒斯号一臂之力。\r\n这是白色之矛给你的口信。", 37, 3003672, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.forceStartQuest(35615, '');
                                                          cm.forceCompleteQuest(35615);
                                                          cm.gainExp(171586691);
                                                          cm.updateInfoQuest(35611, "d5=1;d30=1;d74=1;medal=1;d1=1;d4=1");
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
                                                                cm.setInGameDirectionMode(false, true, false);
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
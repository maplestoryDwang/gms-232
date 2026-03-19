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
      cm.npc_ChangeController(3003656, 'oid=275933', -2212, -508, 6, -2262, -2162, 4, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275934", -1488, -480, 1, -1538, -1438, 5, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275935", -1404, -480, 1, -1454, -1366, 5, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275936", -1320, -480, 2, -1326, -1270, 5, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275937", -1236, -480, 2, -1286, -1186, 5, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275938", -2449, -497, 5, -2499, -2399, 4, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275939", -2535, -497, 5, -2585, -2485, 4, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275940", -2633, -497, 5, -2683, -2583, 4, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275941", -2822, -497, 5, -2872, -2772, 4, true, 0, false);
      cm.npc_ChangeController(3003674, 'oid=275942', -1952, -480, 3, -2002, -1902, 5, true, 0, false);
      cm.npc_ChangeController(3003659, "oid=275943", -2724, -497, 5, -2774, -2674, 4, true, 0, false);
      cm.npc_ChangeController(3003651, "oid=275944", -1860, -480, 3, -1910, -1816, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -1800, -1000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_ForcedFlip(-1);
          cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, -1800, -583);
        } else {
          if (status === V++) {
            cm.effect_Text(["#fn黑体##fs18#虚空波涛，白色之矛"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(4500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#我和#b#ho##k以及士兵们一起，救出了周围的一些失事船只。\r\n我们已经尽力了……", 37, 3003674, false, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#据说失去斗志的士兵们也差不多恢复了。", 37, 3003651, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#吸引敌人注意力的残骸已经全部被破坏掉……\r\n敌人应该不会再集中攻击我们了。", 37, 3003674, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#那样的话，我们舰队只要一边靠近巨大怪兽，\r\n一边消灭掉碰到的敌人就行了。", 37, 3003656, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#但是到达巨大怪兽附近之后，情况就会改变。\r\n在这之前一定要保存实力。", 37, 3003674, true, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face1#是的，我同意伊黛娜的意见。\r\n现在，我们应该在尽可能不使用武器的情况下靠近巨大怪兽。", 37, 3003656, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, -2200, -420);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face0#呼……这样啊。\r\n该做的准备工作，我们好像已经都做了。", 37, 3003651, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#女皇陛下，请下命令吧。", 37, 3003651, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face3#白色之矛，向着巨大怪兽前进。", 37, 3003656, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, -1800, -583);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/BM1/BM1_wind", 100);
                                                      cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.updateInfoQuest(35611, "d5=1;d6=1;d7=1;d8=1;d9=1;menu=0;d10=1;mPark75=1;d11=1;d582=1;d12=1;d30=1;di9=1;d46=1;d74=1;medal=1;d48=1;d1=1;d4=1");
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
                                                                cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 0, 0);
                                                                cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                              } else if (status === V++) {
                                                                cm.dispose();
                                                                cm.warp(993060064, 0, false);
                                                                cm.setStandAloneMode(false);
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
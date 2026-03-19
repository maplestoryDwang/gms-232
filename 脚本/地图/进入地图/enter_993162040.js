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
      cm.npc_ChangeController(3001955, "oid=434262", 89, 1, 5, 39, 139, 1, false, 0, false);
      cm.npc_ChangeController(3001957, 'oid=434263', -99, 1, 4, -149, -49, 4, true, 0, false);
      cm.npc_ChangeController(3001959, "oid=434264", -179, 1, 4, -229, -129, 4, true, 0, false);
      cm.npc_ChangeController(3001980, "oid=434265", -494, 1, 4, -544, -444, 4, true, 0, false);
      cm.npc_ChangeController(3001980, "oid=434266", -408, 1, 4, -458, -358, 4, true, 0, false);
      cm.npc_ChangeController(3001980, "oid=434267", -326, 1, 4, -376, -276, 4, true, 0, false);
      cm.npc_ChangeController(3001980, 'oid=434268', 234, 1, 5, 184, 284, 5, true, 0, false);
      cm.npc_ChangeController(3001980, "oid=434269", 328, 1, 5, 278, 378, 5, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.Hidden_background('0', 1, 0, 0, 0);
      cm.Hidden_background('1', 1, 0, 0, 0);
      cm.Hidden_background('2', 1, 0, 0, 0);
      cm.Hidden_background('3', 1, 0, 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -685, -1184);
      cm.curNodeEventEnd(true);
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
            cm.sendNormalTalk_Bottom("#face3#嘁，仅对嫡系血统起反应吗？\r\n西蒙，把那小鬼拖过来。", 36, 3001957, false, true, 1);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 3000, 0, -189);
              cm.effect_Text(["#fn黑体##fs18#此刻，尖塔", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(4000);
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
                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 0, -189);
                      } else {
                        if (status === V++) {
                          cm.onSetMapTagedObjectVisible(1, '0', 512);
                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/key0", 100);
                          cm.Hidden_background('0', 1, 1, 0, 0);
                          cm.onSetMapTagedObjectVisible(1, '0', 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1040);
                        } else {
                          if (status === V++) {
                            cm.Hidden_background('0', 1, 0, 0, 0);
                            cm.Hidden_background('1', 1, 1, 0, 0);
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
                                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 0, -10);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face4##fc0xFFbfbfbf#(古代的钥匙……与之前看到的那幅画的纹样一致。\r\n那不是为了让我落入圈套而故意放出的消息吗？)", 36, 3001954, false, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face4#伯爵，我不会让你如愿以偿的。", 36, 3001954, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face3#看样子你还没认清局势。你现在不是王子，也不是王公贵胄。", 36, 3001957, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face3#不过是个一文不值的后巷小偷。", 36, 3001957, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face3#里斯托尼亚已不再需要王室血统。", 36, 3001957, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face3#所以，你就认命，老老实实地消失吧。", 36, 3001957, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#啊，多谢你帮我拿到了古代的钥匙。", 36, 3001957, false, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1440);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/adele/key1", 100);
                                                      cm.Hidden_background('1', 1, 0, 0, 0);
                                                      cm.Hidden_background('2', 1, 1, 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.Hidden_background('2', 1, 0, 0, 0);
                                                        cm.Hidden_background('3', 1, 1, 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1440);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_SetHideEffect(0);
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
                                                                  cm.warp(993162041, 0, false);
                                                                  cm.setStandAloneMode(false);
                                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
}
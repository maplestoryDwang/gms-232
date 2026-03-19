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
      cm.inGameDirectionEvent_PushScaleInfo(0, 2500, 0, 1859, 343);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074047, "oid=1943575", 1578, 316, 557, 1528, 1628, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=1943575", "summon", 0, 0);
        cm.npc_ChangeController(2074105, "oid=1943576", 1888, 316, 561, 1838, 1938, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=1943576", 'summon', 0, 0);
        cm.sendNormalTalk_Bottom("啊，是#b#h0##k啊……", 37, 2074105, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("哎哟……自那以后，\r\n小可爱到现在还是那个状态。", 37, 2074105, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("她压根……就没打算从房里出来过。", 37, 2074105, true, true);
          } else {
            if (status === V++) {
              cm.npc_ChangeController(2074104, "oid=1943581", 1705, 316, 559, 1655, 1755, 0, false, 0, false);
              cm.npc_SetSpecialAction("oid=1943581", "summon", 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(300);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_ForcedFlip(-1);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("嗯，嗯嗯，大爷，\r\n那位姑娘的状态怎么样了？", 37, 2074104, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("今天……也是老样子呢。", 37, 2074105, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("是嘛……\r\n这个，听说是吃了就能有力气的药草，\r\n我就放在这儿了。", 37, 2074104, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("你没必要一直这样的……", 37, 2074105, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("……从某些方面来说，她是我们的恩人，\r\n毕竟我们也有错，\r\n那我就先告辞了……", 37, 2074104, true, true);
                        } else {
                          if (status === V++) {
                            cm.npc_setForceFlip("oid=1943581", -1);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else {
                            if (status === V++) {
                              cm.npc_LeaveField("oid=1943581");
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.npc_ChangeController(2074150, "oid=1943594", 1705, 316, 559, 1655, 1755, 0, false, 0, false);
                                cm.npc_SetSpecialAction("oid=1943594", "summon", 0, 0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("小可爱姐姐还那样吗？\r\n嗯……我也把这个放在这里了。", 37, 2074150, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("这样吗……我一定会转达的。", 37, 2074105, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_LeaveField("oid=1943594");
                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("哎哟……大家伙纷纷过来看她……\r\n可是，小可爱还是雷打不动……", 37, 2074105, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_ChangeController(2074100, "oid=1943597", 1770, 319, 560, 1720, 1820, 0, true, 0, false);
                                              cm.npc_SetSpecialAction("oid=1943597", "summon", 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("小，小可爱啊？", 37, 2074105, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom('#face3#……', 37, 2074100, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("……这是刚才兴夫，还有小荳留下的……", 37, 2074105, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face3#我知道……我说我知道，\r\n这里的隔音并不好……", 37, 2074100, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("不是，那个，你看看旁边还有呢。", 37, 2074105, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face2#什么？", 37, 2074100, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_PushScaleInfo(0, 2500, 500, 1598, 343);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_setForceFlip("oid=1943597", -1);
                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face3#这是……", 37, 2074100, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("那是七诚、七南送来的稻穗，那是服装店姑娘送来的花，", 37, 2074105, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face3#…………", 37, 2074100, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("哎，还有那~个是小日送来的年糕，然后那个是沈青送来的发带……", 37, 2074105, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face4#额啊啊啊！", 37, 2074100, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("小，小可爱啊……你没事吗？", 37, 2074105, false, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face4#额啊啊！呜呜，哐！……\r\n呜……呜呜，哇哇，额啊啊啊！", 37, 2074100, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 3000, 0);
                                                                                cm.updateInfoQuest(30456, "gExpCheck=1");
                                                                                cm.gainExp(369355);
                                                                                cm.forceStartQuest(30930, '1');
                                                                                cm.forceStartQuest(30456, '');
                                                                                cm.forceCompleteQuest(30456);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                                                                              } else if (status === V++) {
                                                                                cm.dispose();
                                                                                cm.warp(224000000, 21, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;
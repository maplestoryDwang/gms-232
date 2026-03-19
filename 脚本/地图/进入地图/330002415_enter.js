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
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(1530050, "oid=38024010", 982, 20, 5, 932, 1032, 0, true, false);
      cm.npc_SetSpecialAction("oid=38024010", "summon", 0, 0);
      cm.npc_ChangeController(1530184, "oid=38024011", 1202, 20, 6, 1152, 1252, 1, true, false);
      cm.npc_SetSpecialAction("oid=38024011", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("所以，你为了让大家相信你的谎言，想要拍些#b虚假照片#k？", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#嗯，对不起……", 37, 1530180, true, true);
            cm.effect_Voice("Voice2.img/Friends/CH4_05/1", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("你为了制造音乐室怪谈，在音乐室藏了录音机，为了制造旧楼怪谈，在旧楼洒了番茄酱，对不对？", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("还有，你看大家不太相信有关看门大叔的怪谈，就准备拍摄虚假照片。", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#嗯，对不起……", 37, 1530180, true, true);
                  cm.effect_Voice("Voice2.img/Friends/CH4_05/2", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("你说谎的事情就算了。\r\n但你弄伤南哈特和奥兹是不是太过分了。他们险些受了重伤。", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("不不，不是的！我可以发誓，那真的不是我做的！", 37, 1530180, true, true);
                      cm.effect_Voice("Voice2.img/Friends/CH4_05/3", 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("什么？", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("我说让他们受到惩罚只是随便说说而已。因为他们轻视我，所以我一怒之下说出那样的话……", 37, 1530180, true, true);
                          cm.effect_Voice("Voice2.img/Friends/CH4_05/4", 100);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("但是，你说的惩罚确实发生了啊！", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("没错，我说的惩罚确实发生了。但我也不知道这究竟是怎么回事，呜呜……", 37, 1530180, true, true);
                              cm.effect_Voice("Voice2.img/Friends/CH4_05/5", 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom(" #face0#总之，我承认。我之前说的都是谎话，我在说谎。", 37, 1530180, true, true);
                                cm.effect_Voice("Voice2.img/Friends/CH4_05/6", 100);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("……谎话？", 37, 1530240, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.setAmbience("Ambience.img/horrorpiano", 100, 60);
                                      cm.inGameDirectionEvent_PushMoveInfo(0, 120, 1482, 20);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(3846);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_ChangeController(1530240, "oid=38031719", 1582, 20, 7, 1532, 1632, 1, true, false);
                                          cm.npc_SetSpecialAction("oid=38031719", "summon", 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("好奇怪……卡珊德拉怎么可能会说谎呢。", 37, 1530240, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.npc_setForceFlip("oid=38024011", 1);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("呃，你……", 37, 1530180, false, true);
                                                cm.effect_Voice("Voice2.img/Friends/CH4_05/9", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("对吧？卡珊德拉是不可能说谎的。", 37, 1530240, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetForceMove("oid=38031719", -1, 50, 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_PushMoveInfo(0, 120, 1382, 20);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("你说只要我在不折断铅笔芯的情况下，将铅笔用尽，就能上好的大学。", 37, 1530240, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.npc_SetForceMove("oid=38031719", -1, 50, 100);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_PushMoveInfo(0, 120, 1332, 20);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("你说我下个月就能交到男朋友。", 37, 1530240, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.npc_SetForceMove("oid=38031719", -1, 50, 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_PushMoveInfo(0, 120, 1282, 20);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("你说只要我随身带着白手帕，就会有好运。", 37, 1530240, false, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("结果你现在告诉我，那些都是#r谎话#k……？", 37, 1530240, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("对，对不起。", 37, 1530180, true, true);
                                                                        cm.effect_Voice("Voice2.img/Friends/CH4_05/15", 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("不，你没必要觉得抱歉。", 37, 1530240, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("我会让你所说的话全部实现，就像我之前所做的那样。", 37, 1530240, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                                              cm.effect_NormalSpeechBalloon(" !!", 1, 0, 0, 3000, 0, cm.getPlayer().getId());
                                                                              cm.effect_NormalSpeechBalloon('!!', 1, 0, 0, 3000, 1530184, cm.getPlayer().getId());
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                              } else if (status === V++) {
                                                                                cm.dispose();
                                                                                cm.warp(330002418, 0);
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
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
      cm.npc_ChangeController(1013321, "oid=208439", 172, -214, 45, 122, 222, 1, false, 0, false);
      cm.npc_ChangeController(1013350, 'oid=208440', 1218, -94, 40, 1168, 1268, 0, true, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1, 384000, 0, 345600, -25600);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.effect_Text(["#fn黑体##fs18#高尔根家", ''], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(4500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#高尔根的家就在这里。现在他应该还在睡觉……\r\n因为那家伙的日夜完全是颠倒的。", 37, 1013350, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#高尔根,快起来。", 37, 1013350, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#高尔根！高尔根！", 37, 1013350, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#高～尔～根～！", 37, 1013350, true, true, 1);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#呼……呼……喊了半天都不出来。\r\n啊……对了,我想起来了。有个办法可以叫他出来。", 37, 1013350, true, true, 1);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#魔……魔,魔……", 37, 1013350, true, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#魔,魔神高尔根……", 37, 1013350, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom('#face3#！？', 37, 1013358, true, true, 1);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.npc_ChangeController(1013351, "oid=857629", 1372, -174, 57, 1322, 1422, 1, true, 1000, false);
                                cm.npc_SetSpecialAction("oid=857629", "summon", 0, 0);
                                cm.npc_SetForceMove('oid=857629', -1, 40, 80);
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#嗨,好久不见。但是……\r\n拜托不要用别的名字,要叫我魔神高尔根。", 37, 1013351, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0#唉……你也真是……不过你看上去很健康,太好了。\r\n你离开村子的时候,我还有点担心呢。", 37, 1013350, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#我……很强。啊哦……但是那个黑乎乎的家伙又是谁？\r\n难道……你收了个小弟？", 37, 1013351, true, true, 1);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#呃啊,别,别胡说！那是村外来的勇士！\r\n因为有点事情,所以决定和我同行。还有……他非常非常强。", 37, 1013350, true, true, 1);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face1#呵呵……那就来吧……我的对手终于登场了吗？\r\n我要用地狱之火把你烧成灰……", 37, 1013351, true, true, 1);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#高尔根！别,别胡说八道！\r\n勇士和我是为重要的事情而来。", 37, 1013350, true, true, 1);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0##b(说自己正在对废墟进行调查。\r\n最近那里的怪声越来越严重,所以决定出来调查。)#k", 37, 1013358, true, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#来,你看看。关于这个东西,你知道些什么吗？", 37, 1013358, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 2);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0##b(把遗物给那个叫高尔根的家伙看了一下。\r\n他跟村里的其他人一样,脸色一下子变得惨白。)#k", 37, 1013358, false, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("#face0#哎呀……我……我错了。求你……把东西放回去。", 37, 1013351, false, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#呼……呼啊……刚才那个东西散发出的气息,跟废墟一模一样。\r\n是不是有什么关联？有,而且还不少。", 37, 1013351, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0#我讨厌问东问西。听说你在观察废墟……是不是知道些什么？", 37, 1013358, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#那,那个……我只是喜欢可怕的东西。\r\n所以才会每天都在这里观察。其他的……不太清楚。", 37, 1013351, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#……但,但是如果你想寻找什么,我倒是有办法。", 37, 1013351, false, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                      cm.inGameDirectionEvent_PushScaleInfo(0, 1, 256000, -256, -129, -129);
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
                                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.forceCompleteQuest(35913);
                                                                            cm.gainExp(1818);
                                                                            cm.updateInfoQuest(35947, "12=1;2=1;6=1");
                                                                            cm.updateInfoQuest(35948, "00=h0;10=h1;11=h0;02=h1;12=h0;22=h1;13=h0;23=h1;14=h0;15=h0;06=h0;07=h0;16=h0;26=h1;08=h1;17=h0;09=h0;19=h0");
                                                                            cm.npc_LeaveField('oid=857629');
                                                                            cm.dispose();
                                                                            cm.warp(100051030, 0, false);
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
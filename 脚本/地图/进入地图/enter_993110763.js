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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(3004080, "oid=2244574", -1160, -131, 40, -1210, -1110, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2244574", "summon", 0, 0);
      var O = cm.getJob();
      if (Math.floor(O / 100) !== 51) {
        cm.npc_ChangeController(3004108, "oid=2244575", -992, -140, 43, -1042, -942, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=2244575", "summon", 0, 0);
      }
      cm.npc_ChangeController(3004106, "oid=2244576", -1282, -156, 36, -1332, -1232, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2244576", 'summon', 0, 0);
      cm.npc_ChangeController(3004107, "oid=2244577", -1342, -127, 34, -1392, -1292, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2244577", "summon", 0, 0);
      cm.npc_ChangeController(3004104, "oid=2244578", -920, -156, 44, -970, -870, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2244578", 'summon', 0, 0);
      cm.npc_ChangeController(3004159, "oid=2244579", -850, -156, 46, -900, -800, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2244579", "summon", 0, 0);
      cm.npc_ChangeController(3004081, "oid=2244580", -1060, -140, 42, -1110, -1010, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2244580", "summon", 0, 0);
      cm.npc_ChangeController(3003758, "oid=2244581", -1480, 50, 8, -1530, -1430, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2244581", "summon", 0, 0);
      cm.npc_ChangeController(3003758, "oid=2244582", -796, 41, 7, -846, -746, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2244582", "summon", 0, 0);
      cm.npc_ChangeController(3003758, "oid=2244583", -1638, 50, 4, -1688, -1588, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2244583", "summon", 0, 0);
      cm.npc_ChangeController(3003758, "oid=2244584", -1565, 50, 3, -1615, -1515, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2244584", "summon", 0, 0);
      cm.npc_ChangeController(3003758, "oid=2244585", -1408, 50, 13, -1458, -1358, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2244585", "summon", 0, 0);
      cm.npc_ChangeController(3003758, "oid=2244586", -1324, 50, 10, -1374, -1274, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2244586", 'summon', 0, 0);
      cm.npc_ChangeController(3003758, "oid=2244587", -958, 50, 1, -1008, -908, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2244587", "summon", 0, 0);
      cm.npc_ChangeController(3003758, "oid=2244588", -872, 50, 12, -922, -822, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2244588", "summon", 0, 0);
      cm.npc_ChangeController(3003758, "oid=2244589", -707, 50, 9, -757, -657, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2244589", "summon", 0, 0);
      cm.npc_ChangeController(3003758, "oid=2244590", -633, 50, 9, -683, -583, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=2244590", "summon", 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -1114, -60);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
        cm.effect_Text(["#fn黑体##fs18#圣地，大战告捷后的某一天。"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("看来得用感谢展开话题了。", 37, 1540450, false, true);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1200);
          } else {
            if (status === V++) {
              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
              cm.inGameDirectionEvent_AskAnswerTime(1400);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("我们骑士团创立的初衷就是对抗黑魔法师，\r\n在此过程中各位都展现了不俗的实力。", 37, 1540450, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("而这其中，#h0#，你更是在最危险的地方发挥了最为关键的作用。", 37, 1540450, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("如果没有各位以及#ho#，圣地就无法再度沐浴如此温暖的阳光。", 37, 1540450, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("我要征求在座的各位骑士团成员的意向。", 37, 1540450, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("为了守护这个世界……\r\n日后你们也愿意相信并追随我以及#h0#吗？", 37, 1540450, true, true);
                        } else {
                          if (status === V++) {
                            cm.npc_SetSpecialAction("oid=2244581", "cheer", -1, 1);
                            cm.npc_SetSpecialAction("oid=2244582", "cheer", -1, 1);
                            cm.npc_SetSpecialAction("oid=2244583", "cheer", -1, 1);
                            cm.npc_SetSpecialAction("oid=2244584", "cheer", -1, 1);
                            cm.npc_SetSpecialAction("oid=2244585", "cheer", -1, 1);
                            cm.npc_SetSpecialAction("oid=2244586", "cheer", -1, 1);
                            cm.npc_SetSpecialAction("oid=2244587", 'cheer', -1, 1);
                            cm.npc_SetSpecialAction("oid=2244588", "cheer", -1, 1);
                            cm.npc_SetSpecialAction("oid=2244589", 'cheer', -1, 1);
                            cm.npc_SetSpecialAction("oid=2244590", "cheer", -1, 1);
                            cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/victoryshout", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                              cm.effect_NormalSpeechBalloon("#fn黑体##fs30#   我愿追随女皇陛下！！！  ", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 3003758, "oid=2244581", cm.getPlayer().getId());
                              cm.effect_NormalSpeechBalloon("#fn黑体##fs30#   我相信#h0#！！！  ", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 3003758, "oid=2244582", cm.getPlayer().getId());
                            } else {
                              if (status === V++) {
                                cm.setNpcSpecialActionReset("oid=2244582");
                                cm.inGameDirectionEvent_AskAnswerTime(70);
                              } else {
                                if (status === V++) {
                                  cm.setNpcSpecialActionReset("oid=2244589");
                                  cm.inGameDirectionEvent_AskAnswerTime(50);
                                } else {
                                  if (status === V++) {
                                    cm.setNpcSpecialActionReset("oid=2244585");
                                    cm.setNpcSpecialActionReset("oid=2244590");
                                    cm.setNpcSpecialActionReset("oid=2244583");
                                    cm.inGameDirectionEvent_AskAnswerTime(100);
                                  } else {
                                    if (status === V++) {
                                      cm.setNpcSpecialActionReset("oid=2244584");
                                      cm.setNpcSpecialActionReset("oid=2244587");
                                      cm.inGameDirectionEvent_AskAnswerTime(50);
                                    } else {
                                      if (status === V++) {
                                        cm.setNpcSpecialActionReset("oid=2244581");
                                        cm.setNpcSpecialActionReset("oid=2244586");
                                        cm.inGameDirectionEvent_AskAnswerTime(120);
                                      } else {
                                        if (status === V++) {
                                          cm.setNpcSpecialActionReset("oid=2244588");
                                          cm.sendNormalTalk_Bottom("#face0#感谢你守护女皇的荣光，#h0#。", 37, cm.getJob() == 5112 ? 3004105 : 3004108, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face0#若要就此与你促膝长谈，可能会花上一整天的时间。", 37, cm.getJob() == 5112 ? 3004105 : 3004108, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#h0#，这虽然也是我常常挂在嘴边的话……", 37, 1540451, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("不过，现在依然必须再次做出相同的提问。", 37, 1540451, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("只要是为了女皇陛下，你便能直面一切艰险吗？", 37, 1540451, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("就像至今为止所做的那样……", 57, 0, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("我将一如既往地相信并追随女皇陛下。", 57, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.npc_SetSpecialAction("oid=2244581", 'cheer', -1, 1);
                                                              cm.npc_SetSpecialAction("oid=2244582", "cheer", -1, 1);
                                                              cm.npc_SetSpecialAction("oid=2244583", 'cheer', -1, 1);
                                                              cm.npc_SetSpecialAction("oid=2244584", "cheer", -1, 1);
                                                              cm.npc_SetSpecialAction("oid=2244585", "cheer", -1, 1);
                                                              cm.npc_SetSpecialAction("oid=2244586", "cheer", -1, 1);
                                                              cm.npc_SetSpecialAction("oid=2244587", "cheer", -1, 1);
                                                              cm.npc_SetSpecialAction("oid=2244588", "cheer", -1, 1);
                                                              cm.npc_SetSpecialAction("oid=2244589", "cheer", -1, 1);
                                                              cm.npc_SetSpecialAction("oid=2244590", 'cheer', -1, 1);
                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/blackHeaven/victoryshout", 100);
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                cm.effect_NormalSpeechBalloon("#fn黑体##fs18#   #h0#万岁！！！  ", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 3003758, "oid=2244583", cm.getPlayer().getId());
                                                                cm.effect_NormalSpeechBalloon("#fn黑体##fs18#   我愿追随！！！  ", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 3003758, "oid=2244585", cm.getPlayer().getId());
                                                                cm.effect_NormalSpeechBalloon("#fn黑体##fs18#   #h0#!!！  ", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 3003758, "oid=2244586", cm.getPlayer().getId());
                                                                cm.effect_NormalSpeechBalloon("#fn黑体##fs18#   我相信#h0#！！！  ", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 3003758, "oid=2244587", cm.getPlayer().getId());
                                                                cm.effect_NormalSpeechBalloon("#fn黑体##fs18#   骑士团万岁！！！  ", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 3003758, "oid=2244582", cm.getPlayer().getId());
                                                                cm.effect_NormalSpeechBalloon("#fn黑体##fs18#   女皇陛下万岁！！  ", 1, 0, 0, 2500, 1, 0, 0, 0, 4, 3003758, "oid=2244590", cm.getPlayer().getId());
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 2000, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                } else {
                                                                  if (status === V++) {
                                                                    var O = cm.getJob();
                                                                    if (Math.floor(O / 100) == 51) {
                                                                      cm.warp(993110764, 0, false);
                                                                      cm.setInGameDirectionMode(false, true, false);
                                                                      cm.npc_LeaveField("oid=2539062");
                                                                      cm.npc_LeaveField("oid=2539062");
                                                                      cm.npc_LeaveField("oid=2539063");
                                                                      cm.npc_LeaveField("oid=2539063");
                                                                      cm.npc_LeaveField("oid=2539064");
                                                                      cm.npc_LeaveField("oid=2539064");
                                                                      cm.npc_LeaveField("oid=2539065");
                                                                      cm.npc_LeaveField("oid=2539065");
                                                                      cm.npc_LeaveField("oid=2539066");
                                                                      cm.npc_LeaveField("oid=2539066");
                                                                      cm.npc_LeaveField("oid=2539067");
                                                                      cm.npc_LeaveField("oid=2539067");
                                                                      cm.npc_LeaveField("oid=2539068");
                                                                      cm.npc_LeaveField("oid=2539068");
                                                                      cm.npc_LeaveField("oid=2539069");
                                                                      cm.npc_LeaveField("oid=2539069");
                                                                      cm.npc_LeaveField("oid=2539070");
                                                                      cm.npc_LeaveField("oid=2539070");
                                                                      cm.npc_LeaveField("oid=2539071");
                                                                      cm.npc_LeaveField("oid=2539071");
                                                                      cm.npc_LeaveField("oid=2539072");
                                                                      cm.npc_LeaveField("oid=2539072");
                                                                      cm.npc_LeaveField("oid=2539073");
                                                                      cm.npc_LeaveField("oid=2539073");
                                                                      cm.npc_LeaveField("oid=2539074");
                                                                      cm.npc_LeaveField("oid=2539074");
                                                                      cm.npc_LeaveField("oid=2539075");
                                                                      cm.npc_LeaveField("oid=2539075");
                                                                      cm.npc_LeaveField("oid=2539076");
                                                                      cm.npc_LeaveField("oid=2539076");
                                                                      cm.npc_LeaveField("oid=2539077");
                                                                      cm.npc_LeaveField("oid=2539077");
                                                                      cm.dispose();
                                                                    } else {
                                                                      cm.fieldEffect_Hero9(0, 3000);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                    }
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk("喳喳！！", 4, 3004150, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk("嗯？摩柯？又有什么事？", 2, 0, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk("(摩柯递过来一封信。)", 4, 3004150, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk("啊！发件人是女皇陛下。", 2, 0, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                              cm.sendNormalTalk("亲爱的#h0#，\r\n\r\n不知你近来过得可好，在历经数百年的战争消弭之后，我和我的骑士团正过着平静又繁忙的日子。\r\n\r\n（……中间省略）\r\n\r\n还请你谅解，事关重大，我没办法在信中详述，希望能尽快在#r前哨基地#k见一面。\r\n\r\n\t\t\t\t\t\t\t\t\t女皇#b希纳斯#k敬上。", 4, 3003916, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk("该不会是出了什么事吧？赶紧过去看看吧。", 2, 0, true, true);
                                                                              } else if (status === V++) {
                                                                                cm.warp(993120000, 5, false);
                                                                                cm.forceStartQuest(39701, '');
                                                                                cm.setInGameDirectionMode(false, true, false);
                                                                                cm.npc_LeaveField("oid=2244574");
                                                                                cm.npc_LeaveField("oid=2244574");
                                                                                cm.npc_LeaveField("oid=2244575");
                                                                                cm.npc_LeaveField("oid=2244575");
                                                                                cm.npc_LeaveField("oid=2244576");
                                                                                cm.npc_LeaveField("oid=2244576");
                                                                                cm.npc_LeaveField("oid=2244577");
                                                                                cm.npc_LeaveField("oid=2244577");
                                                                                cm.npc_LeaveField("oid=2244578");
                                                                                cm.npc_LeaveField("oid=2244578");
                                                                                cm.npc_LeaveField("oid=2244579");
                                                                                cm.npc_LeaveField("oid=2244579");
                                                                                cm.npc_LeaveField("oid=2244580");
                                                                                cm.npc_LeaveField("oid=2244580");
                                                                                cm.npc_LeaveField("oid=2244581");
                                                                                cm.npc_LeaveField("oid=2244581");
                                                                                cm.npc_LeaveField("oid=2244582");
                                                                                cm.npc_LeaveField("oid=2244582");
                                                                                cm.npc_LeaveField("oid=2244583");
                                                                                cm.npc_LeaveField("oid=2244583");
                                                                                cm.npc_LeaveField("oid=2244584");
                                                                                cm.npc_LeaveField("oid=2244584");
                                                                                cm.npc_LeaveField("oid=2244585");
                                                                                cm.npc_LeaveField("oid=2244585");
                                                                                cm.npc_LeaveField("oid=2244586");
                                                                                cm.npc_LeaveField("oid=2244586");
                                                                                cm.npc_LeaveField("oid=2244587");
                                                                                cm.npc_LeaveField("oid=2244587");
                                                                                cm.npc_LeaveField("oid=2244588");
                                                                                cm.npc_LeaveField("oid=2244588");
                                                                                cm.npc_LeaveField("oid=2244589");
                                                                                cm.npc_LeaveField("oid=2244589");
                                                                                cm.npc_LeaveField("oid=2244590");
                                                                                cm.npc_LeaveField("oid=2244590");
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
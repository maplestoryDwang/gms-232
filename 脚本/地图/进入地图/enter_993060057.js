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
      cm.npc_ChangeController(3003610, "oid=275917", 216, -40, 13, 200, 266, 1, false, 0, false);
      cm.npc_ChangeController(3003621, "oid=275918", -231, -69, 2, -281, -181, 0, false, 0, false);
      cm.monadForceMove("white", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.updateInfoQuest(35162, "10=h0;12=h0;34=h1");
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, -229, -150);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 2000, 3000, -229, -5);
        } else {
          if (status === V++) {
            cm.monadForceMove("white", 1, 30);
            cm.inGameDirectionEvent_AskAnswerTime(30);
          } else {
            if (status === V++) {
              cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
              cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
              cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
              cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/thunder", 100);
              cm.inGameDirectionEvent_AskAnswerTime(30);
            } else {
              if (status === V++) {
                cm.monadForceMove('white', 0, 30);
                cm.inGameDirectionEvent_AskAnswerTime(30);
              } else {
                if (status === V++) {
                  cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 30, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(30);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                    cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                    cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                    cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(30);
                  } else {
                    if (status === V++) {
                      cm.monadForceMove("white", 1, 30);
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.monadForceMove('white', 0, 900);
                        cm.inGameDirectionEvent_AskAnswerTime(300);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 90, 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1990);
                        } else {
                          if (status === V++) {
                            cm.monadForceMove('white', 1, 30);
                            cm.inGameDirectionEvent_AskAnswerTime(30);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                              cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                              cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                              cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/thunder", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(30);
                            } else {
                              if (status === V++) {
                                cm.monadForceMove('white', 0, 30);
                                cm.inGameDirectionEvent_AskAnswerTime(30);
                              } else {
                                if (status === V++) {
                                  cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 30, 0, 0);
                                  cm.inGameDirectionEvent_AskAnswerTime(30);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                    cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                    cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                    cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(30);
                                  } else {
                                    if (status === V++) {
                                      cm.monadForceMove("white", 1, 30);
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.monadForceMove("white", 0, 900);
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else {
                                        if (status === V++) {
                                          cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 90, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1990);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_ForcedFlip(-1);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_ForcedFlip(0);
                                              cm.inGameDirectionEvent_同时移动镜头和人(1, 677);
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
                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 686, -5);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 2000, 5000, -100, -5);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(6000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.monadForceMove('white', 1, 30);
                                                            cm.inGameDirectionEvent_AskAnswerTime(30);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                              cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                              cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                              cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/thunder", 100);
                                                              cm.inGameDirectionEvent_AskAnswerTime(30);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.monadForceMove("white", 0, 30);
                                                                cm.inGameDirectionEvent_AskAnswerTime(30);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 30, 0, 0);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                                    cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                                    cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                                    cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.monadForceMove("white", 1, 30);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.monadForceMove("white", 0, 900);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 90, 0, 0);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1990);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0#我马上会下达准备进军命令。", 37, 3003656, false, true);
                                                                            cm.effect_Voice("Voice4.img/BM1/DIR4/1", 128);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#我们必须击退那个巨大的怪物……驱散迷雾。", 37, 3003656, true, true);
                                                                              cm.effect_Voice("Voice4.img/BM1/DIR4/2", 128);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("要把被波涛卷走的舰队救出来吗？", 57, 0, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face1#因为这场战争的目的，是为了保护所爱的人。", 37, 3003656, false, true);
                                                                                      cm.effect_Voice("Voice4.img/BM1/DIR4/3", 128);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.monadForceMove('white', 1, 30);
                                                                                        cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                                                          cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                                                          cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                                                          cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/thunder", 100);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.monadForceMove("white", 0, 30);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 30, 0, 0);
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                                                                cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                                                                cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                                                                cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                                                                cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.monadForceMove("white", 1, 30);
                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.monadForceMove("white", 0, 900);
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 90, 0, 0);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1990);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("希纳斯女皇陛下。", 57, 0, false, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("我相信你的决定，愿意誓死追随。", 57, 0, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.monadForceMove('white', 1, 30);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                                                                              cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                                                                              cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                                                                              cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/thunder", 100);
                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.monadForceMove('white', 0, 30);
                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 30, 0, 0);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                                                                                    cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                                                                                    cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                                                                                    cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.monadForceMove("white", 1, 30);
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.monadForceMove('white', 0, 900);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 90, 0, 0);
                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1990);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                            cm.effect_Voice("Voice4.img/BM1/DIR4/4", 128);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#我感觉到了那份信任的分量。尤其是在这种时候。", 37, 3003656, false, true);
                                                                                                                              cm.effect_Voice("Voice4.img/BM1/DIR4/5", 128);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.askMenu_Bottom("（指挥官的压力好像让希纳斯感到很痛苦。\r\n说点鼓励的话吧。）\r\n#b#L0# 不要试图独自背负一切。#l\r\n#L1# 有压力是当然的。#l#k", 57, 0);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.updateInfoQuest(35611, "d5=1;d6=1;d7=1;d8=1;d9=1;menu=0;mPark75=1;d30=1;di9=1;d46=1;d74=1;medal=1;d48=1;d1=1;d4=1");
                                                                                                                                  cm.sendNormalTalk_Bottom("别忘了，还有无数的勇士追随在女皇陛下的身边。", 57, 0, false, true);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("我们因为同样的意志而聚集在这里。\r\n不管遇到什么苦难，我们都会重新站起来。", 57, 0, true, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("每个人都有自己的责任，\r\n女皇陛下只要把只有你能做的事情做好就可以了。", 57, 0, true, true);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("只有你能够造成这一切。", 57, 0, true, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("#face1#只有我……能做到的事情。", 37, 3003656, false, true);
                                                                                                                                            cm.effect_Voice("Voice4.img/BM1/DIR4/6", 128);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.monadForceMove('white', 1, 30);
                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                                                                                                                cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                                                                                                                cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                                                                                                                cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/thunder", 100);
                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.monadForceMove("white", 0, 30);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                                } else {
                                                                                                                                                  if (status === V++) {
                                                                                                                                                    cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 30, 0, 0);
                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                                  } else {
                                                                                                                                                    if (status === V++) {
                                                                                                                                                      cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                                                                                                                      cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                                                                                                                      cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                                                                                                                      cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                                    } else {
                                                                                                                                                      if (status === V++) {
                                                                                                                                                        cm.monadForceMove('white', 1, 30);
                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                      } else {
                                                                                                                                                        if (status === V++) {
                                                                                                                                                          cm.monadForceMove('white', 0, 900);
                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                        } else {
                                                                                                                                                          if (status === V++) {
                                                                                                                                                            cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 90, 0, 0);
                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1990);
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
                                                                                                                                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 686, -10);
                                                                                                                                                                  } else {
                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                    } else {
                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                        cm.inGameDirectionEvent_PushScaleInfo(5000, 0, 1500, 5000, -100, -10);
                                                                                                                                                                      } else {
                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                          cm.npc_ChangeController(3003651, "oid=2204539", 680, -50, 14, 630, 730, 0, true, 0, false);
                                                                                                                                                                          cm.npc_SetSpecialAction("oid=2204539", "summon", 0, 0);
                                                                                                                                                                          cm.npc_SetForceMove("oid=2204539", -1, 430, 150);
                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(5000);
                                                                                                                                                                        } else {
                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#女皇陛下，我把伊黛娜的调查结果带回来了。", 37, 3003651, false, true);
                                                                                                                                                                            cm.effect_Voice("Voice4.img/BM1/DIR4/8", 128);
                                                                                                                                                                          } else {
                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#那个怪兽再次攻击的时间，是在半天之后。\r\n虽然不多，但我们还有一些时间。", 37, 3003651, true, true);
                                                                                                                                                                              cm.effect_Voice("Voice4.img/BM1/DIR4/9", 128);
                                                                                                                                                                            } else {
                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face0#现在迷雾中的突然袭击逐渐平息。\r\n要想避开攻击前进，现在是绝好的机会。", 37, 3003651, true, true);
                                                                                                                                                                                cm.effect_Voice("Voice4.img/BM1/DIR4/10", 128);
                                                                                                                                                                              } else {
                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                } else {
                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#目前了解到的情况就是这些。", 37, 3003651, false, true);
                                                                                                                                                                                    cm.effect_Voice("Voice4.img/BM1/DIR4/11", 128);
                                                                                                                                                                                  } else {
                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                    } else {
                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                        cm.sendNormalTalk_Bottom("#face0#好了，请您下决定吧。", 37, 3003651, false, true);
                                                                                                                                                                                        cm.effect_Voice("Voice4.img/BM1/DIR4/12", 128);
                                                                                                                                                                                      } else {
                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                        } else {
                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                            cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                                                                                          } else {
                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/wind", 100);
                                                                                                                                                                                              cm.fieldEffect_ProcessOnOffLayer("f00", "Effect/Direction20.img/effect/BMPre_flashBack/0", 0, 1000, 0, -80, 1, 4, 1);
                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                            } else {
                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/wind", 100);
                                                                                                                                                                                                cm.fieldEffect_ProcessOnOffLayer("f01", "Effect/Direction20.img/effect/BMPre_flashBack/1", 0, 1000, 0, -80, 1, 4, 1);
                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                              } else {
                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer("f00", '', 2, 300, 0, 0, 0, 0, 0);
                                                                                                                                                                                                  cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/wind", 100);
                                                                                                                                                                                                  cm.fieldEffect_ProcessOnOffLayer("f02", "Effect/Direction20.img/effect/BMPre_flashBack/2", 0, 1000, 0, -80, 1, 4, 1);
                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                } else {
                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("f01", '', 2, 300, 0, 0, 0, 0, 0);
                                                                                                                                                                                                    cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/wind", 100);
                                                                                                                                                                                                    cm.fieldEffect_ProcessOnOffLayer("f03", "Effect/Direction20.img/effect/BMPre_flashBack/3", 0, 1000, 0, -80, 1, 4, 1);
                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                  } else {
                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                      cm.fieldEffect_ProcessOnOffLayer("f02", '', 2, 300, 0, 0, 0, 0, 0);
                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                    } else {
                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                        cm.fieldEffect_ProcessOnOffLayer("f03", '', 2, 1500, 0, 0, 0, 0, 0);
                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                                                                                                      } else {
                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#（……我一定要守护心愿之火，不能让它熄灭。\r\n不管面临什么样的狂风骤雨……）", 37, 3003656, false, true);
                                                                                                                                                                                                        } else {
                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                          } else {
                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                              cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/ArcaneRiver/wind", 100);
                                                                                                                                                                                                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                  cm.sendNormalTalk_Bottom("#face0#我们马上就要向黑魔法师所在的地方进军了。\r\n前面不知道有什么样的危险在等待着我们。", 37, 3003656, false, true);
                                                                                                                                                                                                                  cm.effect_Voice("Voice4.img/BM1/DIR4/13", 128);
                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#但是那个巨大怪物的攻击我们已经经历过了。\r\n我们所有人齐心协力，准备共度难关。", 37, 3003656, true, true);
                                                                                                                                                                                                                    cm.effect_Voice("Voice4.img/BM1/DIR4/14", 128);
                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face1#我相信将所有人的心愿聚集在一起的话……。\r\n应该可以度过这个难关。", 37, 3003656, true, true);
                                                                                                                                                                                                                      cm.effect_Voice("Voice4.img/BM1/DIR4/15", 128);
                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face1#比起不确定的捷径，我宁愿选择确定的道路。", 37, 3003656, false, true);
                                                                                                                                                                                                                          cm.effect_Voice("Voice4.img/BM1/DIR4/16", 128);
                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                            cm.sendNormalTalk_Bottom("#face0#选择我们一直以来都遵循的道路……", 37, 3003656, true, true);
                                                                                                                                                                                                                            cm.effect_Voice("Voice4.img/BM1/DIR4/17", 128);
                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                              cm.monadForceMove("white", 1, 30);
                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                                                                cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                                                                cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                                                                cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                                                                cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/thunder", 100);
                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                  cm.monadForceMove("white", 0, 30);
                                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                    cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 30, 0, 0);
                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                      cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                                                                      cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                                                                      cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                                                                      cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                        cm.monadForceMove("white", 1, 30);
                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                          cm.monadForceMove("white", 0, 900);
                                                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                            cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 90, 0, 0);
                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1990);
                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#我在此下令。", 37, 3003656, false, true);
                                                                                                                                                                                                                                              cm.effect_Voice("Voice4.img/BM1/DIR4/18", 128);
                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("#face1#白色之矛开始为进军做好准备。", 37, 3003656, true, true);
                                                                                                                                                                                                                                                cm.effect_Voice("Voice4.img/BM1/DIR4/19", 128);
                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face3#让我们找回失踪的舰队，向着黑魔法师进军。", 37, 3003656, false, true);
                                                                                                                                                                                                                                                    cm.effect_Voice("Voice4.img/BM1/DIR4/20", 128);
                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                      cm.monadForceMove("white", 1, 30);
                                                                                                                                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                        cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                                                                                        cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                                                                                        cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                                                                                        cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                                                                                        cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/foxvalley/thunder", 100);
                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                          cm.monadForceMove("white", 0, 30);
                                                                                                                                                                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                            cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 30, 0, 0);
                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                              cm.fieldEffect_BackgroundCanvas(4, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                                                                                              cm.fieldEffect_BackgroundCanvas(5, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                                                                                              cm.fieldEffect_BackgroundCanvas(2, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                                                                                              cm.fieldEffect_BackgroundCanvas(3, 100, 100, 100, 30, 0, 0);
                                                                                                                                                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(30);
                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                cm.monadForceMove("white", 1, 30);
                                                                                                                                                                                                                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                                  cm.monadForceMove("white", 0, 900);
                                                                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                                    cm.fieldEffect_BackgroundCanvas(0, 255, 255, 255, 90, 0, 0);
                                                                                                                                                                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1990);
                                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#是，女皇陛下。", 37, 3003651, false, true);
                                                                                                                                                                                                                                                                      cm.effect_Voice("Voice4.img/BM1/DIR4/21", 128);
                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#我一直……在等待着这个命令。", 37, 3003651, false, true);
                                                                                                                                                                                                                                                                          cm.effect_Voice("Voice4.img/BM1/DIR4/22", 128);
                                                                                                                                                                                                                                                                        } else {
                                                                                                                                                                                                                                                                          if (status === V++) {
                                                                                                                                                                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                                                          } else {
                                                                                                                                                                                                                                                                            if (status === V++) {
                                                                                                                                                                                                                                                                              cm.sendNormalTalk_Bottom("（希纳斯向南哈特确认了今后的作战计划。\r\n好像决定采用以白色之矛为中心，集中全力突破的战术。）", 57, 0, false, true);
                                                                                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                                                                              if (status === V++) {
                                                                                                                                                                                                                                                                                cm.sendNormalTalk_Bottom("（她说道距离白色之矛稍微远一点的地方去搜索的话，\r\n应该可以找到用于补充兵力的勇士。）", 57, 0, true, true);
                                                                                                                                                                                                                                                                              } else {
                                                                                                                                                                                                                                                                                if (status === V++) {
                                                                                                                                                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                                                                } else {
                                                                                                                                                                                                                                                                                  if (status === V++) {
                                                                                                                                                                                                                                                                                    cm.sendNormalTalk_Bottom("#face3#拜托你了，南哈特。", 37, 3003656, false, true);
                                                                                                                                                                                                                                                                                    cm.effect_Voice("Voice4.img/BM1/DIR4/23", 128);
                                                                                                                                                                                                                                                                                  } else {
                                                                                                                                                                                                                                                                                    if (status === V++) {
                                                                                                                                                                                                                                                                                      cm.sendNormalTalk_Bottom("#face0#好的，我马上去准备。", 37, 3003651, true, true);
                                                                                                                                                                                                                                                                                      cm.effect_Voice("Voice4.img/BM1/DIR4/24", 128);
                                                                                                                                                                                                                                                                                    } else {
                                                                                                                                                                                                                                                                                      if (status === V++) {
                                                                                                                                                                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                                                                                                                                                                                      } else {
                                                                                                                                                                                                                                                                                        if (status === V++) {
                                                                                                                                                                                                                                                                                          cm.forceStartQuest(35622, '');
                                                                                                                                                                                                                                                                                          cm.forceCompleteQuest(35622);
                                                                                                                                                                                                                                                                                          cm.gainExp(85793345);
                                                                                                                                                                                                                                                                                          cm.updateInfoQuest(35611, "d5=1;d6=1;d7=1;d8=1;d9=1;menu=0;d10=1;mPark75=1;d30=1;di9=1;d46=1;d74=1;medal=1;d48=1;d1=1;d4=1");
                                                                                                                                                                                                                                                                                          cm.npc_LeaveField("oid=2204539");
                                                                                                                                                                                                                                                                                          cm.npc_LeaveField("oid=2204539");
                                                                                                                                                                                                                                                                                          cm.updateInfoQuest(35162, "10=h1;12=h0;34=h1");
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
                                                                                                                                                                                                                                                                                                cm.dispose();
                                                                                                                                                                                                                                                                                                cm.warp(450009300, 0, false);
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
                                                                                                                                                                                                                              }
                                                                                                                                                                                                                            }
                                                                                                                                                                                                                          }
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                      }
                                                                                                                                                                                                                    }
                                                                                                                                                                                                                  }
                                                                                                                                                                                                                }
                                                                                                                                                                                                              }
                                                                                                                                                                                                            }
                                                                                                                                                                                                          }
                                                                                                                                                                                                        }
                                                                                                                                                                                                      }
                                                                                                                                                                                                    }
                                                                                                                                                                                                  }
                                                                                                                                                                                                }
                                                                                                                                                                                              }
                                                                                                                                                                                            }
                                                                                                                                                                                          }
                                                                                                                                                                                        }
                                                                                                                                                                                      }
                                                                                                                                                                                    }
                                                                                                                                                                                  }
                                                                                                                                                                                }
                                                                                                                                                                              }
                                                                                                                                                                            }
                                                                                                                                                                          }
                                                                                                                                                                        }
                                                                                                                                                                      }
                                                                                                                                                                    }
                                                                                                                                                                  }
                                                                                                                                                                }
                                                                                                                                                              }
                                                                                                                                                            }
                                                                                                                                                          }
                                                                                                                                                        }
                                                                                                                                                      }
                                                                                                                                                    }
                                                                                                                                                  }
                                                                                                                                                }
                                                                                                                                              }
                                                                                                                                            }
                                                                                                                                          }
                                                                                                                                        }
                                                                                                                                      }
                                                                                                                                    }
                                                                                                                                  }
                                                                                                                                }
                                                                                                                              }
                                                                                                                            }
                                                                                                                          }
                                                                                                                        }
                                                                                                                      }
                                                                                                                    }
                                                                                                                  }
                                                                                                                }
                                                                                                              }
                                                                                                            }
                                                                                                          }
                                                                                                        }
                                                                                                      }
                                                                                                    }
                                                                                                  }
                                                                                                }
                                                                                              }
                                                                                            }
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
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
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 6000, -505, -737);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_ChangeController(3004079, "oid=2363229", -474, -709, 83, -524, -424, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=2363229", "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#不去聊一聊吗？", 37, 3004079, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("聊什么啊……远远地看一眼就足够了。", 57, 0, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("哈，这就是目送女儿离去时老父亲的心情吧？变得有些微妙了啊。", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#啊？您的意思是……", 37, 3004079, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#突然想起来，还有一箩筐的事等着我去处理呢。这就先告辞了。", 37, 3004079, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else {
                      if (status === V++) {
                        cm.npc_setForceFlip("oid=2363229", 1);
                        cm.Npc_Fadeout("oid=2363229", 0, 500);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_同时移动镜头和人(1, 200);
                          cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 1000, 5000, -895, -862);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(5000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom('……', 57, 0, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("你应该也会一直注视着这一切吧？", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.setAmbience("Ambience.img/wind", 150, 60);
                                  cm.fieldEffect_复合图片动画(["Map/Effect2.img/HofM/ACT1_5/5/main_001", "animation", '', ''], [0, 0, 0, 0, 0, 0, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(8000);
                                } else {
                                  if (status === V++) {
                                    cm.playSoundEffDirectly("Ambience.img/wind");
                                    cm.sendNormalTalk_Bottom('……', 57, 0, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("我就知道。", 57, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom('谢谢你，阿莉亚。', 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_Hero9(0, 3000);
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
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
                                                          cm.forceStartQuest(39701, '');
                                                          cm.warp(993120000, 5, false);
                                                          cm.setInGameDirectionMode(false, true, false);
                                                          cm.npc_LeaveField("oid=2363229");
                                                          cm.npc_LeaveField("oid=2363229");
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
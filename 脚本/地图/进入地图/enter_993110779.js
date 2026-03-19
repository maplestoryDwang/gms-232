var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(s, V, R) {
  if (status == 0 && s == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = R;
  var S = -1;
  if (status <= S++) {
    cm.dispose();
  } else {
    if (status === S++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 339, -270);
    } else {
      if (status === S++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
        cm.effect_Text(["#fn黑体##fs18#思念之地，某处"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
      } else {
        if (status === S++) {
          cm.fieldEffect_ProcessOnOffLayer('00', "Effect/Direction22.img/effect/restart_ark/0", 0, 500, 0, -60, 12, 4, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === S++) {
            cm.sendNormalTalk_Bottom("#face0#亚克，你在干嘛呢？", 36, 3001505, false, true);
          } else {
            if (status === S++) {
              cm.sendNormalTalk_Bottom("#face0#到时间训练了。", 36, 3001505, true, true);
            } else {
              if (status === S++) {
                cm.sendNormalTalk_Bottom("#face0#快点做好准备。", 36, 3001505, true, true);
              } else {
                if (status === S++) {
                  cm.sendNormalTalk_Bottom("#face2#阿尔贝……", 36, 3001500 + cm.getPlayer().getGender(), true, true);
                } else {
                  if (status === S++) {
                    cm.sendNormalTalk_Bottom("#face0#看你这一身冷汗……", 36, 3001505, true, true);
                  } else {
                    if (status === S++) {
                      cm.sendNormalTalk_Bottom("#face0#是不是发烧了……\r\n（探手抚摸）好像并没有呢。", 36, 3001505, true, true);
                    } else {
                      if (status === S++) {
                        cm.sendNormalTalk_Bottom("#face3#看样子是做了什么可怕至极的梦吧。", 36, 3001505, true, true);
                      } else {
                        if (status === S++) {
                          cm.sendNormalTalk_Bottom("#face2#阿尔贝，不要离开我。", 36, 3001500 + cm.getPlayer().getGender(), true, true);
                        } else {
                          if (status === S++) {
                            cm.sendNormalTalk_Bottom("#face0#你这没头没脑的话是什么意思？", 36, 3001505, true, true);
                          } else {
                            if (status === S++) {
                              cm.sendNormalTalk_Bottom("#face3#你就答应我嘛。", 36, 3001500 + cm.getPlayer().getGender(), true, true);
                            } else {
                              if (status === S++) {
                                cm.sendNormalTalk_Bottom("#face3#不管发生什么事情……都不会离开我。", 36, 3001500 + cm.getPlayer().getGender(), true, true);
                              } else {
                                if (status === S++) {
                                  cm.sendNormalTalk_Bottom("#face1#哈哈哈，亚克，\r\n净说些无谓的话。", 36, 3001505, true, true);
                                } else {
                                  if (status === S++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  } else {
                                    if (status === S++) {
                                      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                      cm.fieldEffect_ProcessOnOffLayer('00', '', 2, 1000, 0, 0, 0, 0, 0);
                                      cm.fieldEffect_ProcessOnOffLayer('01', "Effect/Direction22.img/effect/restart_ark/1", 0, 500, 0, -60, 12, 4, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                    } else {
                                      if (status === S++) {
                                        cm.sendNormalTalk_Bottom("#face2#到现在都不能放过我吗？", 37, 3001505, false, true);
                                      } else {
                                        if (status === S++) {
                                          cm.sendNormalTalk_Bottom("#face2#阿尔贝……？", 37, 3001500 + cm.getPlayer().getGender(), true, true);
                                        } else {
                                          if (status === S++) {
                                            cm.sendNormalTalk_Bottom("#face2#即便如此绝望，也还是会抱有一丝幻想的吗？", 37, 3001505, true, true);
                                          } else {
                                            if (status === S++) {
                                              cm.sendNormalTalk_Bottom("#face8#你……！", 37, 3001500 + cm.getPlayer().getGender(), true, true);
                                            } else {
                                              if (status === S++) {
                                                cm.sendNormalTalk_Bottom("#face2#真可惜，日后你的朋友可就只有我了。", 37, 3001505, true, true);
                                              } else {
                                                if (status === S++) {
                                                  cm.fieldEffect_ProcessOnOffLayer('01', '', 2, 1500, 0, 0, 0, 0, 0);
                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === S++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === S++) {
                                                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
                                                      cm.fieldEffect_PlayBGM("Bgm48.img/Doomsday_FULL", 0, 0);
                                                      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                    } else {
                                                      if (status === S++) {
                                                        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                      } else {
                                                        if (status === S++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                          cm.effect_Text(["#fn黑体##fs25#这片刻的幸福你可满足？"], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0]);
                                                        } else {
                                                          if (status === S++) {
                                                            cm.sendNormalTalk_Bottom("#face8#现如今连我的梦境都要干涉吗？", 37, 3001500 + cm.getPlayer().getGender(), false, true);
                                                          } else {
                                                            if (status === S++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(4100);
                                                              cm.effect_Text(["#fn黑体##fs25#哪有什么干涉，我现在只能影响你的潜意识而已。"], [0, 2100, 4, 0, 0, 1, 4, 0, 0, 0]);
                                                            } else {
                                                              if (status === S++) {
                                                                cm.sendNormalTalk_Bottom("#face5#……", 36, 3001500 + cm.getPlayer().getGender(), false, true);
                                                              } else {
                                                                if (status === S++) {
                                                                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                  cm.effect_Text(["#fn黑体##fs25#你太健忘，我只好时刻提醒你了。"], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0]);
                                                                } else {
                                                                  if (status === S++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                    cm.effect_Text(["#fn黑体##fs25#你所期待的那天是永远不会到来的。"], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0]);
                                                                  } else {
                                                                    if (status === S++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                      cm.effect_Text(["#fn黑体##fs25#还有，如果没了我，你也别想活下去。"], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0]);
                                                                    } else {
                                                                      if (status === S++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                        cm.effect_Text(["#fn黑体##fs25#只是从这次的战斗里也能感受得到吧？"], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0]);
                                                                      } else {
                                                                        if (status === S++) {
                                                                          cm.sendNormalTalk_Bottom("#face5#这可和你没什么关系……", 36, 3001500 + cm.getPlayer().getGender(), false, true);
                                                                        } else {
                                                                          if (status === S++) {
                                                                            cm.sendNormalTalk_Bottom("#face5#但是……", 37, 3001500 + cm.getPlayer().getGender(), true, true);
                                                                          } else {
                                                                            if (status === S++) {
                                                                              cm.sendNormalTalk_Bottom("#face5#看来不论好恶，我也只能和你一起活下去了。", 37, 3001500 + cm.getPlayer().getGender(), true, true);
                                                                            } else {
                                                                              if (status === S++) {
                                                                                cm.sendNormalTalk_Bottom("#face5#毕竟日后还会有战斗。", 36, 3001500 + cm.getPlayer().getGender(), true, true);
                                                                              } else {
                                                                                if (status === S++) {
                                                                                  cm.sendNormalTalk_Bottom("#face5#我不会放任世界被破坏的。", 37, 3001500 + cm.getPlayer().getGender(), true, true);
                                                                                } else {
                                                                                  if (status === S++) {
                                                                                    cm.sendNormalTalk_Bottom("#face8#就算抛下一切也要阻止灾难降临。", 37, 3001500 + cm.getPlayer().getGender(), true, true);
                                                                                  } else {
                                                                                    if (status === S++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                                                      cm.effect_Text(["#fn黑体##fs25#既然如此……那么以后也有劳了，朋友。"], [0, 2000, 4, 0, 0, 1, 4, 0, 0, 0]);
                                                                                    } else {
                                                                                      if (status === S++) {
                                                                                        cm.sendNormalTalk_Bottom("#face3#呵……先让我一个人静静吧。", 37, 3001500 + cm.getPlayer().getGender(), false, true);
                                                                                      } else {
                                                                                        if (status === S++) {
                                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                        } else {
                                                                                          if (status === S++) {
                                                                                            cm.fieldEffect_Hero9(0, 3000);
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                          } else {
                                                                                            if (status === S++) {
                                                                                              cm.sendNormalTalk("喳喳！！", 4, 3004150, false, true);
                                                                                            } else {
                                                                                              if (status === S++) {
                                                                                                cm.sendNormalTalk("嗯？摩柯？又有什么事？", 2, 0, true, true);
                                                                                              } else {
                                                                                                if (status === S++) {
                                                                                                  cm.sendNormalTalk("(摩柯递过来一封信。)", 4, 3004150, true, true);
                                                                                                } else {
                                                                                                  if (status === S++) {
                                                                                                    cm.sendNormalTalk("啊！发件人是女皇陛下。", 2, 0, true, true);
                                                                                                  } else {
                                                                                                    if (status === S++) {
                                                                                                      cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                      cm.sendNormalTalk("亲爱的#h0#，\r\n\r\n不知你近来过得可好，在历经数百年的战争消弭之后，我和我的骑士团正过着平静又繁忙的日子。\r\n\r\n（……中间省略）\r\n\r\n还请你谅解，事关重大，我没办法在信中详述，希望能尽快在#r前哨基地#k见一面。\r\n\r\n\t\t\t\t\t\t\t\t\t女皇#b希纳斯#k敬上。", 4, 3003916, true, true);
                                                                                                    } else {
                                                                                                      if (status === S++) {
                                                                                                        cm.sendNormalTalk("该不会是出了什么事吧？赶紧过去看看吧。", 2, 0, true, true);
                                                                                                      } else if (status === S++) {
                                                                                                        cm.warp(993120000, 5, false);
                                                                                                        cm.forceStartQuest(39701, '');
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
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
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
      cm.npc_ChangeController(1530140, "oid=36568946", 888, 50, 6, 838, 938, 1, true, false);
      cm.npc_SetSpecialAction("oid=36568946", 'summon', 0, 0);
      cm.npc_ChangeController(1530110, "oid=36568947", 660, 16, 5, 610, 710, 0, true, false);
      cm.npc_SetSpecialAction("oid=36568947", "summon", 0, 0);
      cm.npc_ChangeController(1530120, "oid=36568948", 760, 16, 6, 710, 810, 0, true, false);
      cm.npc_SetSpecialAction("oid=36568948", 'summon', 0, 0);
      cm.npc_ChangeController(1530060, "oid=36568949", 560, 16, 5, 510, 610, 0, true, false);
      cm.npc_SetSpecialAction("oid=36568949", 'summon', 0, 0);
      cm.npc_ChangeController(1530100, "oid=36568950", 320, 16, 4, 270, 370, 0, true, false);
      cm.npc_SetSpecialAction("oid=36568950", 'summon', 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 120, 760, 16);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3136);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("……你来啦，#h0#。\r\n我的爱情最终还是失败了。", 37, 1530140, false, true);
              cm.effect_Voice("Voice2.img/Friends/CH2_09/1", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("唉，既然没有缘分又能怎么办呢，对吧？", 37, 1530110, true, true);
                cm.effect_Voice("Voice2.img/Friends/CH2_09/2", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("唉……我也没什么可说的。总之打起精神来吧。", 37, 1530120, true, true);
                  cm.effect_Voice("Voice2.img/Friends/CH2_09/3", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("振作起来吧。虽然我也经常被甩……不过天涯何处无芳草嘛！", 37, 1530100, true, true);
                    cm.effect_Voice("Voice2.img/Friends/CH2_09/4", 100);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("真是一段短暂又深刻的爱情啊……", 37, 1530060, true, true);
                      cm.effect_Voice("Voice2.img/Friends/CH2_09/5", 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("这种时候最好的办法就是尽快忘记。", 37, 1530120, true, true);
                        cm.effect_Voice("Voice2.img/Friends/CH2_09/6", 100);
                      } else {
                        if (status === V++) {
                          cm.fieldEffect_PlayBGM("Bgm34.img/GoFight!ShowYourEnergy!", 0, 0);
                          cm.inGameDirectionEvent_PushMoveInfo(0, 120, 820, 16);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("不，我是不会放弃的。", 37, 1530140, false, true);
                              cm.effect_Voice("Voice2.img/Friends/CH2_09/7", 100);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_PushMoveInfo(0, 120, 560, 16);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(2670);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(3000);
                                    cm.effect_NormalSpeechBalloon('!?', 1, 0, 0, 2000, 1530110, cm.getPlayer().getId());
                                    cm.effect_NormalSpeechBalloon('!!', 1, 0, 0, 2000, 1530120, cm.getPlayer().getId());
                                    cm.effect_NormalSpeechBalloon('!', 1, 0, 0, 2000, 1530060, cm.getPlayer().getId());
                                    cm.effect_NormalSpeechBalloon('??', 1, 0, 0, 2000, 1530100, cm.getPlayer().getId());
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("最重要的是我坚定意志，\r\n无论发生任何事都一定要和她在一起的意志。", 37, 1530140, false, true);
                                      cm.effect_Voice("Voice2.img/Friends/CH2_09/8", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("又不是被拒绝就没有办法和她在一起？世界上所有的事都可以因我而改变！", 37, 1530140, true, true);
                                        cm.effect_Voice("Voice2.img/Friends/CH2_09/9", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("像个男子汉。", 37, 1530120, true, true);
                                          cm.effect_Voice("Voice2.img/Friends/CH2_09/10", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("受伤是可以让人成长的……好吧，我也不会放弃的！", 37, 1530100, true, true);
                                            cm.effect_Voice("Voice2.img/Friends/CH2_09/11", 100);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("这是个不错的结论，很好。", 37, 1530060, true, true);
                                              cm.effect_Voice("Voice2.img/Friends/CH2_09/12", 100);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("哈哈，所以我已经准备好了，就是这个！", 37, 1530140, true, true);
                                                cm.effect_Voice("Voice2.img/Friends/CH2_09/13", 100);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_PushMoveInfo(0, 120, 760, 16);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(2167);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.npc_SetSpecialAction("oid=36568946", "doll", -1, 1);
                                                        cm.fieldEffect_PlayBGM("Bgm38.img/LifeIsComedy", 0, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_PushMoveInfo(0, 120, 560, 16);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(2167);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                              cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 2000, 1530110, cm.getPlayer().getId());
                                                              cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 2000, 1530120, cm.getPlayer().getId());
                                                              cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 2000, 1530060, cm.getPlayer().getId());
                                                              cm.effect_NormalSpeechBalloon("......", 1, 0, 0, 2000, 1530100, cm.getPlayer().getId());
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("那是……奥尔卡人偶？", 37, 1530110, false, true);
                                                                cm.effect_Voice("Voice2.img/Friends/CH2_09/14", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("人偶是不会背叛我的。哈哈哈……我真应该从一开始就这么做。", 37, 1530140, true, true);
                                                                  cm.effect_Voice("Voice2.img/Friends/CH2_09/15", 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("现实中的女人就是个矛盾体。\r\n可是人偶却不同。", 37, 1530140, true, true);
                                                                    cm.effect_Voice("Voice2.img/Friends/CH2_09/16", 100);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("现实中的女人不喜欢个子矮的男人。\r\n可是人偶却不同。", 37, 1530140, true, true);
                                                                      cm.effect_Voice("Voice2.img/Friends/CH2_09/17", 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("人偶……人偶就是真理……哈哈哈哈……", 37, 1530140, true, true);
                                                                        cm.effect_Voice("Voice2.img/Friends/CH2_09/18", 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=36568949"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=36568950"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=36568948"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=36568947"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(2500);
                                                                          cm.effect_OnUserEff("Effect/OnUserEff.img/emotion/ddam");
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("所以你的结论就是这个？和奥尔卡人偶在一起？", 37, 1530110, false, true);
                                                                            cm.effect_Voice("Voice2.img/Friends/CH2_09/19", 100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_PushMoveInfo(0, 120, 760, 16);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(2167);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("当然了。我要带着奥尔卡人偶一起乘巴士，一起乘地铁，还要带着奥尔卡人偶一起去游乐场，一起去吃好吃的。", 37, 1530140, false, true);
                                                                                  cm.effect_Voice("Voice2.img/Friends/CH2_09/20", 100);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("我已经变了。现在任何人也不能阻止我。噢哈哈哈哈……", 37, 1530140, true, true);
                                                                                    cm.effect_Voice("Voice2.img/Friends/CH2_09/21", 100);
                                                                                  } else if (status === V++) {
                                                                                    cm.dispose();
                                                                                    cm.warp(330002217, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;
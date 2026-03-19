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
      cm.npc_ChangeController(3004080, "oid=2539119", -420, -10, 36, -470, -370, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2539119", "summon", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), -181, 20);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -290, -13);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
        cm.effect_Text(["#fn黑体##fs18#片刻后，联盟会场"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("绵延数百年的战争终于结束了啊。", 37, 1540450, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("这都要感谢女皇陛下的庇佑。", 57, 0, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("不，是因为所有人做出了崇高的牺牲。", 37, 1540450, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1500);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("有件事我一直都有些好奇，女皇陛下。", 57, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("是什么，#h0#？", 37, 1540450, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("在我年幼时，女皇陛下曾经俯就舍下。", 57, 0, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_ForcedFlip(-1);
                            cm.sendNormalTalk_Bottom("当初我不过是个平凡无奇的孩子，\r\n您为何笃定我能够成为光之骑士呢？", 57, 0, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("说起那段日子……我自然记忆犹新，#h0#。", 37, 1540450, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("当时我已经观察了你很久。", 37, 1540450, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("你的额头上满是大滴的汗珠呢，\r\n对尚且年幼的孩子而言，这工作一定很吃力。", 37, 1540450, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("在那满是不堪入耳的谩骂和叫嚷的破烂库房里，你连片刻都不能休息，一直都在干活。", 37, 1540450, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("而我看到了。", 37, 1540450, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("那是在何等艰难处境下都毫不动摇的坚定眼神。", 37, 1540450, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("那时起我就从心底确信，", 37, 1540450, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face2#你能够成为给我们带来光明的高贵骑士。", 37, 1540450, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("那这一次就是我问你答了。", 37, 1540450, false, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("当初我也不过是名弱不禁风的少女，\r\n所拥有的不过是女皇这个虚名而已。", 37, 1540450, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("那么，你究竟是出于怎样的原因才愿意追随在我左右呢？", 37, 1540450, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("任何人都不曾对我抱有过期待。", 57, 0, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("当初我不过是后巷一个默默无闻的小鬼，惟有您一直期盼着我。", 57, 0, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("就在那一刻，您将那个于我而言太过沉重的名字赋予我的时刻……", 57, 0, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("我重生了。", 57, 0, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom('直到生命的尽头……', 57, 0, false, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("我也只会追随在您左右。", 57, 0, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
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
                                                                                            cm.dispose();
                                                                                            cm.warp(993120000, 5, false);
                                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                                            cm.npc_LeaveField("oid=2539119");
                                                                                            cm.npc_LeaveField("oid=2539119");
                                                                                          }
                                                                                        }
                                                                                      }
                                                                                    }
                                                                                  }
                                                                                }
                                                                              }
                                                                            }
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
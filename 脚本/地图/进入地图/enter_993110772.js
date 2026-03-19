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
      cm.npc_ChangeController(3004126, "oid=2540704", -85, -34, 3, -135, -35, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2540704", "summon", 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 136, -15);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(4000);
      cm.effect_Text(["#fn黑体##fs18#当前，万神殿大神殿"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 21, -35);
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
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#终于结束了伟大的战斗，荣归故里。", 36, 3004126, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#然而你抛下那么多为你庆祝的人跑来找我，所为何求？", 36, 3004126, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("我……并不确定。", 56, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("先代狂龙战士，我真的能够胜任这样的重任吗？", 56, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#心生迷茫了啊，\r\n那姑且就听你讲一讲这些日子里的故事吧。", 36, 3004126, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("我们想尽办法阻止了即将降临在冒险岛世界上的危机，\r\n但是……在这过程中，许多和我并肩作战的人都牺牲了。", 56, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("如果我能再强一些……\r\n再强一点点也好，也许就能保护他们了。", 56, 0, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("回想起那些牺牲时，我就会怀疑自己是否真的有资格成为守护者。", 56, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#……", 36, 3004126, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("就像当初的冒险岛世界，这个世界很快也会有巨大的危险来袭。", 56, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("如果我没办法变得更强，就会重蹈覆辙。", 56, 0, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("我该怎么办才好？", 56, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("我真的能成长为像您这样守护所有人的伟大存在吗？", 56, 0, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face0##h0#……\r\n你对我的牺牲评价过高，\r\n我自己可并没有这么想。", 36, 3004126, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face0#吉伦·达尔摩尔的军队占领赫里希安时，我失败了。", 36, 3004126, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face0#我虽然守护住了万神殿，但却没能守护住我自己。\r\n结果就是在你出现之前，诺巴都深陷危机之中。", 36, 3004126, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#那是因为我傲慢的想法，我以为身为守护者就要独自背负所有人的命运，\r\n要独自守护所有人。", 36, 3004126, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face0#那是我的无知，也是我的草率。", 36, 3004126, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("#face0#想想你做了多少事情？\r\n你击败了堕落超越者，拯救了无数人的生命。", 36, 3004126, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("那……并不是我一个人的力量，\r\n毕竟还有许多人的帮助，以及许多人的牺牲……", 56, 0, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#没错，这就是你和我之间决定性的差别。", 36, 3004126, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face0#就是那种让许多人选择信任你，依赖你，和你并肩作战的力量。", 36, 3004126, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("相互信任，相互依赖，并肩作战吗……？", 56, 0, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("可是……可是他们是我应该守护的人。", 56, 0, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("#face0#你真是傻得可爱。", 36, 3004126, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("#face0#只要大家都接受你这个守护者的保护就好。", 36, 3004126, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("……！", 56, 0, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("#face0##h0#……\r\n你该守护的并不只有无辜之人的性命。", 36, 3004126, true, true);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face0#在这之前，更要守护好他们的意志和勇气。", 36, 3004126, true, true);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face0#就是那种直面邪恶，守护自己的世界的意愿。", 36, 3004126, true, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom('啊……！', 56, 0, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#诺巴之所以即使面临无数危险也屹立不倒，\r\n正是由于伟大的先代狂龙战士们深知这一点。", 36, 3004126, true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom('……', 56, 0, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("虽然有些困难……不过我也大概明白了。", 56, 0, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("我有个发小，\r\n从前总是哭哭啼啼的……\r\n不知从什么时候起，没有我，她也能坚强地生活了。", 56, 0, false, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("不知为何，她的样子让我难过，让我心痛，\r\n不过……那也许只是我的贪求罢了。", 56, 0, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("是我贪心地想要独自背负那份本应属于她的意志，那份勇往直前的意志。", 56, 0, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#很好，你终于领悟了，\r\n伟大的狂龙战士。", 36, 3004126, false, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#这样一来你今后要走的路也明晰起来了。", 36, 3004126, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("是的，我……", 56, 0, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("我要寻找并肩作战的伙伴，然后守护他们。", 56, 0, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("希望所有人都能凭借自己的意志走下去。", 56, 0, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("希望所有人都能像她一样依靠自己的意志战斗。", 56, 0, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
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
                                                                                                                                  cm.warp(993120000, 5, false);
                                                                                                                                  cm.forceStartQuest(39701, '');
                                                                                                                                  cm.setInGameDirectionMode(false, true, false);
                                                                                                                                  cm.npc_LeaveField("oid=2540704");
                                                                                                                                  cm.npc_LeaveField("oid=2540704");
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
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
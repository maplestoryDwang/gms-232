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
      cm.forceCompleteQuest(58771);
      cm.updateInfoQuest(58711, "10=4;11=3;0=2;1=3;2=3;3=3;4=2;5=2;6=3;7=2;8=1;9=1");
      cm.updateInfoQuest(58712, "0=1;1=1;2=3;3=1;4=1;5=1;6=1;7=1;8=1;9=1");
      cm.forceStartQuest(58709, "appear");
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9111008, "oid=3880712", 675, -35, 21, 625, 725, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=3880712", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1400);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(1500);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_同时移动镜头和人(2, 100);
            cm.sendNormalTalk_Bottom('天狗！', 57, 0, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#……你来晚了。", 37, 9111008, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("天狗，我有事想问你。", 57, 0, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotionBalloon/noSpeak", "oid=3880712"], [0, 0, 0, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(1600);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
                    cm.inGameDirectionEvent_AskAnswerTime(501);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("首先，我听说你有木之五行，是真的吗？", 57, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1600);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#……是的。", 37, 9111008, false, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("你知道的，为了救竹野子，很需要五行！\r\n现在只要收集到木之五行就完事了。你能不能把木之五行交给我？", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#你想要就拿去。", 37, 9111008, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("我就知道，天狗你是为竹野子着想的！", 57, 0, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom('#face0#不过！', 37, 9111008, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetSpecialAction("oid=3880712", 'morph', 0, 1);
                                        cm.inGameDirectionEvent_AskAnswerTime(4900);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_LeaveField("oid=3880712");
                                          cm.npc_LeaveField("oid=3880712");
                                          cm.npc_ChangeController(9111017, "oid=3881388", 675, -35, 21, 625, 725, 1, true, 0, false);
                                          cm.npc_SetSpecialAction("oid=3881388", 'summon', 0, 0);
                                          cm.sendNormalTalk_Bottom("#face0#条件是你必须具备带走五行的资格。", 37, 9111017, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                            cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("天狗！", 57, 0, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("天狗，我现在没时间跟你磨蹭。竹野子晕倒了！", 57, 0, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face0#……如果你已具备了资格，马上就可以拿去。", 37, 9111017, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
                                                      cm.inGameDirectionEvent_AskAnswerTime(501);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_QTE(0);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.playerMessage(-1, "<因为你心中有烦恼与执念，封印毫无反应。>");
                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                            cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0#你这家伙满心都是烦恼与执念啊。\r\n……在这种心态下使用五行，要出大事的。", 37, 9111017, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face0#……等你具备了资格，再来找我吧。", 37, 9111017, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("…！！！", 57, 0, true, true);
                                                                    cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.npc_LeaveField("oid=3881388");
                                                                      cm.npc_LeaveField("oid=3881388");
                                                                      cm.sendNormalTalk_Bottom("天狗！！！", 57, 0, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_同时移动镜头和人(1, 50);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_同时移动镜头和人(1, 50);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_同时移动镜头和人(2, 50);
                                                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("这条件简直不像话……！\r\n难不成天狗真的是暗所说的僧侣妖怪……", 57, 0, false, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.npc_ChangeController(9111018, "oid=3882060", 170, -35, 12, 120, 220, 0, true, 0, false);
                                                                                      cm.npc_SetSpecialAction("oid=3882060", "summon", 0, 0);
                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1600);
                                                                                      cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/noSpeak");
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0#你好叔叔", 37, 9111018, false, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                          cm.sendNormalTalk_Bottom("#face0#我是协助天狗的河童。\r\n我叫#b万事屋#k。", 37, 9111018, true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                            cm.sendNormalTalk_Bottom("河……童？", 57, 0, true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#嗯，我之前就住在这附近，因为对人类的技术感兴趣，所以在樱之岛各地游学。\r\n现在我已经结束了漫长的留学生活，回来协助天狗。", 37, 9111018, true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face0#最近我正在枫叶城学习各种陷阱和装置的有关知识。\r\n对了，叔叔你知道忍者吗？", 37, 9111018, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("(不及时打断她的话，估计会没完没了地说下去。)", 57, 0, true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("我知道。哎，你来找我有什么事？", 57, 0, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face0#我听说叔叔你正在为半妖收集五行？", 37, 9111018, true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0#“心中有烦恼和执念的人没资格拥有五行。”\r\n这是五行守护者们世代相传的告诫。", 37, 9111018, true, true);
                                                                                                        cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/noSpeak");
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#还有，守护者的任务就是将五行交给樱之岛的英雄。", 37, 9111018, true, true);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("#face0#说起来叔叔你已经是#b英雄#k了呢？但你跟我们所说的英雄无论在职位上还是职责上都有区别，所以你必须通过我们的试炼才能算数。", 37, 9111018, true, true);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("#face0#你看那边的石灯，它具有吸收周围的妖气并将其封印的力量，是我的特制品。", 37, 9111018, true, true);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("#face0#组成五行的力量是很奇妙的，也可以说是妖气。\r\n因此那个石灯也是将五行牢牢封印起来的装置。", 37, 9111018, true, true);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("#face0#所以呢，我下面就告诉你该如何将五行重新从石灯里取出来。\r\n正如我之前所说，只有心中无烦恼和执念的人才能办到。", 37, 9111018, true, true);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom("#face0#简单地说，具备资格的人触摸那石灯时，就可以将五行重新取出来。", 37, 9111018, true, true);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                      cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/noSpeak");
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.sendNormalTalk_Bottom("#face0#那么，是否具备资格要如何验证呢？\r\n“心中有烦恼和执念的人没资格拥有五行。”\r\n这是五行守护者们世代相传的告诫。", 37, 9111018, false, true);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("#face0#天狗从以前开始就对符合摒弃烦恼和执念做过研究。\r\n他不但开发出一套帮助训练者摒弃烦恼与执念的训练，甚至还设计了可以验证结果的试炼。", 37, 9111018, true, true);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.sendNormalTalk_Bottom("#face0#名字就叫#b乌鸦的试炼#k！", 37, 9111018, true, true);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.sendNormalTalk_Bottom("#face0#无论是谁，只要通过试炼，就能成为#b不为烦恼和执念所困的人#k。\r\n这是融合了我这留学派的学识与天狗的丰富经验才创造出来的试炼。", 37, 9111018, true, true);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.sendNormalTalk_Bottom("#face0#我一直想向外界展示一下我的技术，这次正好是个机会呢。\r\n这地方有被毁的村落和竹林，再加上我们的技术，就成了很棒的#b副本#k。", 37, 9111018, true, true);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                  cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/noSpeak");
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#啊！还有，要说通过这试炼如何能摒弃烦恼与执念的话，即是可以在五行中找到解决办法。\r\n再详细点说……", 37, 9111018, false, true);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam"], [0, 0, 0, 1, 0, 0, 0, 0]);
                                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.sendNormalTalk_Bottom("……打，打住！总之，你的意思是只要我通过试炼，就可以取出五行对吧？", 57, 0, false, true);
                                                                                                                                      } else {
                                                                                                                                        if (status === V++) {
                                                                                                                                          cm.sendNormalTalk_Bottom("#face0#对！", 37, 9111018, true, true);
                                                                                                                                        } else {
                                                                                                                                          if (status === V++) {
                                                                                                                                            cm.sendNormalTalk_Bottom("……OK，这样就好。我要怎么做才能挑战试炼？", 57, 0, true, true);
                                                                                                                                          } else {
                                                                                                                                            if (status === V++) {
                                                                                                                                              cm.sendNormalTalk_Bottom("#face0#哎呀，叔叔你真是个急性子。\r\n请跟我来~", 37, 9111018, true, true);
                                                                                                                                            } else {
                                                                                                                                              if (status === V++) {
                                                                                                                                                cm.sendNormalTalk_Bottom("(……真是个啰嗦的孩子。)", 57, 0, true, true);
                                                                                                                                              } else {
                                                                                                                                                if (status === V++) {
                                                                                                                                                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                                } else if (status === V++) {
                                                                                                                                                  cm.warp(800024001, 0, false);
                                                                                                                                                  cm.npc_LeaveField("oid=3882060");
                                                                                                                                                  cm.npc_LeaveField("oid=3882060");
                                                                                                                                                  cm.eventSKill(0);
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
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
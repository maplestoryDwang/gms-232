var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      if (cm.getMapId() != 410000670) {
        cm.dispose();
        cm.warp(993141023, 0, false);
        return;
      }
      cm.sendNormalTalk_Bottom("#face0#所以，接下来有什么打算？", 36, 3004433, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#塞伦说携带标志的天族肯定还没有离开塞尔提乌，所以去城里找他们了。", 36, 3004431, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#王子殿下呢？", 36, 3004431, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#我今天也会很忙。", 36, 3004433, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#是忙于应对#r黑太阳#k吗，或是其它的家伙？", 36, 3004431, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#对，昨天黎明祭司的寺院被贼人光顾了。\r\n特制#b圣水#k也不见了。", 36, 3004433, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#圣水？他们要圣水做什么？", 36, 3004431, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#圣水对普通的伤病有很好的医治效果。", 36, 3004433, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#问题是……当它和#r黑火药#k混合起来的时候……", 36, 3004433, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("会发生什么？", 56, 0, true, true);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#就像两个教团见面的时候一样。爆炸了。\r\n砰~！一声。", 36, 3004433, true, true);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face4#啊！", 36, 3004431, true, true);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face0#因此，我今天想劳烦伊黛娜帮忙#r追踪黑太阳#k。", 36, 3004433, true, true);
                            } else {
                              if (status === v++) {
                                cm.askYesNo_Bottom("#face0#还有，可以拜托#h0##b保护塞伦#k吗？", 36, 3004433);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("是，我知道了。", 56, 0, false, true);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face0#可我们这边也是一头雾水啊。", 36, 3004431, true, true);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("#face0#总之，我就期待两位的好消息了。", 36, 3004433, true, true);
                                    } else {
                                      if (status === v++) {
                                        cm.curNodeEventEnd(true);
                                        cm.eventSKill(0);
                                        cm.setInGameDirectionMode(true, false, true);
                                        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                        cm.setStandAloneMode(true);
                                        cm.forceStartQuest(39814, '');
                                        cm.updateInfoQuest(39800, "01=h0;10=h0;11=h1;02=h0;12=h0;04=h0;13=h0;05=h1;14=h1;06=h1;15=h1;07=h1;08=h1;09=h0;19=h1");
                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -246, 200);
                                      } else {
                                        if (status === v++) {
                                          cm.onTeleport(0, 3, cm.getPlayer().getId(), -356, 202);
                                          cm.inGameDirectionEvent_ForcedFlip(1);
                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                        } else {
                                          if (status === v++) {
                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                            cm.inGameDirectionEvent_AskAnswerTime(1400);
                                          } else {
                                            if (status === v++) {
                                              cm.npc_ChangeController(3004430, "oid=771860", -192, 200, 15, -242, -142, 1, true, 1000, false);
                                              cm.npc_SetSpecialAction("oid=771860", 'summon', 0, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === v++) {
                                                cm.sendNormalTalk_Bottom("#face0#很抱歉让您久等了。我们走吧。", 36, 3004430, false, true);
                                              } else {
                                                if (status === v++) {
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else {
                                                  if (status === v++) {
                                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                  } else {
                                                    if (status === v++) {
                                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                    } else {
                                                      if (status === v++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                      } else if (status === v++) {
                                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                        cm.eventSKill(0);
                                                        cm.setInGameDirectionMode(false, true, false);
                                                        cm.setStandAloneMode(false);
                                                        cm.OnStartNavigation(410000500, 1, "3004419", 39814);
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
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face0#守护者塞伦……最近和外乡人走得很近吗？", 36, 3004444, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#什么？有没有看到其他的天族？", 36, 3004444, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#哼，就算我看到了，也没必要对你坦白吧？", 36, 3004444, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#……", 37, 3004430, true, true);
          } else if (status === v++) {
            cm.updateInfoQuest(39814, "dir=1;NpcSpeech=30044191");
            cm.OnStartNavigation(410000500, 1, "3004421", 39814);
            cm.npc_LeaveField("oid=374139");
            cm.dispose();
          }
        }
      }
    }
  }
}
function stage1(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face0#大神官大人被驱逐，而我们却无能为力。", 36, 3004442, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#守护者，我对你很失望。", 36, 3004442, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face3#……", 37, 3004430, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("（上次的事件似乎让塞伦饱受非议。）", 57, 0, true, true);
          } else if (status === v++) {
            cm.updateInfoQuest(39814, "dir=1;NpcSpeech=30044191/30044212");
            cm.OnStartNavigation(410000500, 1, "3004422", 39814);
            cm.dispose();
          }
        }
      }
    }
  }
}
function stage2(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face0#姐姐，你的项链好漂亮。", 36, 3004422, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#不过之前也见过一条看起来差不多的啊。", 36, 3004422, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face4#！！", 37, 3004430, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("你在哪看到的？", 57, 0, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#它掉在地上，被我看到了。", 36, 3004422, true, true);
            } else {
              if (status === v++) {
                cm.curNodeEventEnd(true);
                cm.eventSKill(0);
                cm.setInGameDirectionMode(true, false, true);
                cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                cm.setStandAloneMode(true);
                cm.onTeleport(0, 3, cm.getPlayer().getId(), 22, -5);
                cm.inGameDirectionEvent_ForcedFlip(1);
                cm.setPartner(0, 3004430, 0, 0);
                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 182, 40);
              } else {
                if (status === v++) {
                  cm.npc_ChangeController(3004430, "oid=772451", 80, 10, 14, 30, 130, 0, true, 0, false);
                  cm.npc_SetSpecialAction("oid=772451", "summon", 0, 0);
                  cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                } else {
                  if (status === v++) {
                    cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1400);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#这是某个大叔叫我还给你的。", 36, 3004422, false, true);
                      cm.effect_Voice("Voice5.img/CH2/Child/1", 128);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face4#是吗？", 36, 3004430, true, true);
                        cm.effect_Voice("Voice5.img/CH2/Seren/46", 128);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#他还给了我糖果作跑腿费……糖果真好吃。", 36, 3004422, true, true);
                          cm.effect_Voice("Voice5.img/CH2/Child/2", 128);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0#糖果……真好吃……（目光在两人空空如也的手里扫来扫去）", 36, 3004422, true, true);
                            cm.effect_Voice("Voice5.img/CH2/Child/3", 128);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face4#是，是吗……", 36, 3004430, true, true);
                              cm.effect_Voice("Voice5.img/CH2/Seren/47", 128);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face4#（怎么办？我没有糖果啊。）", 36, 3004430, true, true);
                                cm.effect_Voice("Voice5.img/CH2/Seren/48", 128);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("（要快点拿糖果给守护者）", 56, 0, true, true);
                                } else {
                                  if (status === v++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === v++) {
                                      cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                    } else {
                                      if (status === v++) {
                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                      } else {
                                        if (status === v++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                        } else if (status === v++) {
                                          cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                          cm.eventSKill(0);
                                          cm.setInGameDirectionMode(false, true, false);
                                          cm.setStandAloneMode(false);
                                          cm.npc_LeaveField("oid=772451");
                                          cm.npc_LeaveField("oid=772451");
                                          cm.setPartner(1, 3004430, 80002825, 0);
                                          cm.updateInfoQuest(39814, "dir=1;NpcSpeech=30044191/30044212/30044223");
                                          cm.OnStartNavigation(410000500, 1, "3004420", 39814);
                                          cm.npc_LeaveField('oid=374139');
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
function stage3(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.setPartner(0, 3004430, 0, 0);
      cm.npc_ChangeController(3004430, "oid=772628", 322, 35, 11, 224, 424, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=772628", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 387, 35);
      cm.inGameDirectionEvent_ForcedFlip(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 395, 70);
    } else {
      if (status === v++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === v++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#我说，年轻人。", 36, 3004420, false, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#我正好有糖果。\r\n本来准备给我孙子的，就给你一个吧。", 36, 3004420, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom('谢谢。', 56, 0, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom('嗯？', 56, 0, true, true);
                } else {
                  if (status === v++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === v++) {
                      cm.npc_ChangeController(3004452, "oid=772629", 115, 35, 12, 0, 200, 0, false, 3000, true);
                      cm.npc_SetSpecialAction('oid=772629', "summon", 0, 0);
                      cm.inGameDirectionEvent_PushScaleInfo(3000, 0, 2000, 3000, 175, 20);
                    } else {
                      if (status === v++) {
                        cm.inGameDirectionEvent_AskAnswerTime(3300);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#乔伊，快走吧。", 36, 3004452, false, true);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0#唔，可是那位姐姐……", 36, 3004422, true, true);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face1#啊，我这边……一时间还……", 36, 3004430, true, true);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face0#算了，别和那种人说话。", 36, 3004452, true, true);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face0#啊……", 36, 3004430, true, true);
                                } else {
                                  if (status === v++) {
                                    cm.npc_LeaveField('oid=772628');
                                    cm.npc_LeaveField("oid=772628");
                                    cm.npc_LeaveField("oid=772629");
                                    cm.npc_LeaveField("oid=772629");
                                    cm.updateInfoQuest(39800, "01=h0;10=h0;11=h1;02=h0;12=h0;22=h0;04=h0;13=h0;05=h1;14=h1;06=h1;15=h1;16=h1;07=h1;08=h1;09=h0;19=h1");
                                    cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                    cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                  } else {
                                    if (status === v++) {
                                      cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                    } else {
                                      if (status === v++) {
                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                      } else if (status === v++) {
                                        cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                        cm.eventSKill(0);
                                        cm.setInGameDirectionMode(false, true, false);
                                        cm.setStandAloneMode(false);
                                        cm.updateInfoQuest(39814, "dir=1;NpcSpeech=30044191/30044212/30044223/30044204");
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
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom('那个小女孩呢？', 56, 0, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#被家长领走了。", 36, 3004430, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("啊……", 56, 0, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#这里已经没什么好调查的了，今天就到此为止吧。", 36, 3004430, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face5#对不起。都怪我，让您白跑了一趟。", 36, 3004430, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("可是……", 56, 0, true, true);
              } else {
                if (status === v++) {
                  cm.askMenu_Bottom("（肯定还有地方没有去……会是哪里呢？）#b\r\n#L0#坟墓#l\r\n#L1#王宫#l\r\n#L2#城墙上#l", 56, 3004416);
                } else {
                  if (status === v++) {
                    if (a == 0) {
                      cm.sendNormalTalk_Bottom("#face0#……啊。确实应该去那里探查一下。", 36, 3004430, false, true);
                    } else {
                      cm.sendNormalTalk_Bottom("#face0#感觉应该不会在那里。", 36, 3004430, false, true);
                      status -= 2;
                    }
                  } else if (status === v++) {
                    cm.forceCompleteQuest(39814);
                    cm.gainExp(25 * Math.pow(cm.getLevel(), 3));
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
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
      cm.npc_ChangeController(3001677, "oid=375501", 341, 38, 2, 291, 361, 1, false, 0, false);
      cm.npc_ChangeController(3001678, "oid=375502", 401, 38, 5, 401, 451, 1, false, 0, false);
      cm.npc_ChangeController(3001679, "oid=375503", 513, 38, 5, 463, 563, 1, false, 0, false);
      cm.npc_ChangeController(3001679, "oid=375504", 276, 38, 2, 226, 326, 1, false, 0, false);
      cm.npc_ChangeController(3001677, 'oid=375505', 574, 38, 5, 524, 613, 1, false, 0, false);
      cm.npc_ChangeController(3001678, "oid=375506", 637, 38, 6, 637, 687, 0, false, 0, false);
      cm.npc_ChangeController(3001679, "oid=375507", 785, 38, 6, 735, 835, 1, false, 0, false);
      cm.npc_ChangeController(3001677, "oid=375508", 730, 38, 6, 680, 780, 1, false, 0, false);
      cm.npc_ChangeController(3001678, "oid=375509", 886, 38, 3, 886, 936, 0, false, 0, false);
      cm.npc_ChangeController(3001679, "oid=375510", 953, 38, 3, 905, 1003, 0, false, 0, false);
      cm.npc_ChangeController(3001678, "oid=375511", 1011, 38, 3, 961, 1061, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 2000, 0, 347, 62);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 2000, 2000, 790, 62);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 250, 2);
                cm.inGameDirectionEvent_AskAnswerTime(250);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 80, 28);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                    cm.inGameDirectionEvent_AskAnswerTime(100);
                  } else {
                    if (status === V++) {
                      cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 250, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_同时移动镜头和人(2, 340);
                        cm.inGameDirectionEvent_PushScaleInfo(2000, 0, 1500, 2000, 346, 28);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#face0#……什么情况，大家都被抓起来了啊？", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face2#解……解决师？", 37, 3001661, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face7#这到底是怎么回事……不是，那什么……你该不会是老鼠吧！？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face2#不，不是的，反倒是我们遭了老鼠暗算，才会在这里……", 37, 3001661, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（那句话没错吗？）", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#就是上次遇到的那个修行者。", 37, 3001651, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#face0#总之整个寺院的气氛都有些非同寻常……到底出什么事了？\r\n之前这里的气氛可没有这么阴森诡异啊？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("#face2#那个……其实……", 37, 3001661, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 0, 80, 28);
                                              } else {
                                                if (status === V++) {
                                                  cm.fieldEffect_ProcessOnOffLayer('07', "Effect/Direction9.img/HoyoungStory/7", 0, 1000, 0, -80, 1, 4, 0, -1, 0, 0, 0);
                                                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face2##fc0xFFbfbfbf#（绑架事件之后回来的那些修行者其实都是老鼠变的，\r\n真正的修行者都被关在仓库里。）", 37, 3001661, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("#face2##fc0xFFbfbfbf#（然后没多久这位修行者也惨遭老鼠暗算，\r\n等醒过来时已经在这仓库之中了。）", 37, 3001661, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_ProcessOnOffLayer('07', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                          cm.fieldEffect_ProcessOnOffLayer('08', "Effect/Direction9.img/HoyoungStory/8", 0, 500, 0, -80, 1, 4, 0, -1, 0, 0, 0);
                                                          cm.fieldEffect_PlayFieldSound("Sound/SoundEff.img/hoyoung/surprise", 100);
                                                          cm.sendNormalTalk_Bottom("#face3#就这样……连脸都被生生夺走了。", 37, 3001661, false, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom('#face8#哇！！', 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face2##fc0xFF25f1ca#咦！！", 37, 3001651, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("#face3#还有丢失的东西，都说脸是灵魂的镜子，\r\n我们一直以来精心历练的法力也都被夺走了。", 37, 3001661, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("#face3#因为这样，就在这座仓库里毫不抵抗……", 37, 3001661, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.fieldEffect_ProcessOnOffLayer('08', '', 2, 500, 0, 0, 0, 0, 0, 0, 0, 0, 0);
                                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, 346, 28);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 2);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1400);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk_Bottom("#face8#吓，吓我一跳，修行者你也真是的……哎……吓得我一下子减寿十年。", 37, 3001674 + cm.getPlayer().getGender(), false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("#face0#呼……总之真正的修行者失去了自己的脸，被关在了这里，\r\n现在寺院里的那些修行者都是老鼠变的咯？", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("#face0#这么说那个德高望重的俊秀法师在哪儿？\r\n那么厉害的人总不会遭老鼠暗算吧。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face3#那个……虽然我也觉得难以置信……\r\n不过驱使那些老鼠的……貌似就是俊秀法师。", 37, 3001661, true, true);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#简直是乌烟瘴气。", 37, 3001651, true, true);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face2#比方说为了击败怪物而苦恼，一头扎进了法堂，到头来\r\n反而堕落了，这就是凝视深渊太久的结果。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face0#那什么，无论是什么原因都无所谓吧？我是觉得法师做的人偶可疑才过来的，\r\n亲自去找本人了解一下就是。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("#face0#那我就去法堂看看，修行者们还是赶紧从这里……", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face2#解决师……我们会留在这里，\r\n毕竟若是引发骚乱，搞不好会被敌人发现，从各个角度来说，我们都只会成为绊脚石。", 37, 3001661, true, true);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("#face12#既然你心意已决……那我明白了，我会抓到事件的元凶，好好教训一顿，\r\n让一切恢复原状的。", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("#face3#谢谢，我会为你祈愿，祝你安然无虞。", 37, 3001661, true, true);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face5##fc0xFFbfbfbf#（走吧，饕餮！去抓那个叫俊秀法师还是什么的家伙！）", 37, 3001674 + cm.getPlayer().getGender(), true, true);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face0##fc0xFF25f1ca#居然放下如此豪言壮语……真是徒有其表……", 37, 3001651, true, true);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.updateInfoQuest(39598, "02=h0;11=h0;03=h1;31=h0;05=h0;06=h0;15=h0;33=h0;34=h1;16=h1;35=h0;27=h0;09=h0;82=h1;28=h0;29=h0;84=h0;85=h0");
                                                                                                              cm.forceCompleteQuest(39529);
                                                                                                              cm.gainExp(332);
                                                                                                              cm.gainExp(3538);
                                                                                                              cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                                                                              cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                                                                              cm.gainItem(4036581, -25);
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
                                                                                                                    cm.warp(410000244, 0, false);
                                                                                                                    cm.setStandAloneMode(false);
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
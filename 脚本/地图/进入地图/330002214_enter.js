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
      cm.npc_ChangeController(1530130, "oid=36521147", 250, 142, 4, 200, 300, 0, true, false);
      cm.npc_SetSpecialAction("oid=36521147", "summon", 0, 0);
      cm.npc_ChangeController(1530140, "oid=36521148", 410, 142, 5, 360, 460, 1, true, false);
      cm.npc_SetSpecialAction("oid=36521148", "summon", 0, 0);
      cm.npc_ChangeController(1530110, "oid=36521149", 1221, 142, 7, 1171, 1271, 1, true, false);
      cm.npc_SetSpecialAction("oid=36521149", "summon", 0, 0);
      cm.npc_ChangeController(1530120, "oid=36521150", 1301, 142, 7, 1251, 1351, 1, true, false);
      cm.npc_SetSpecialAction("oid=36521150", "summon", 0, 0);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_PushMoveInfo(0, 2000, 370, 142);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(385);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=36521148", 'shy', -1, 1);
          cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1400);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom('你是弗朗西斯？', 37, 1530130, false, true);
              cm.effect_Voice("Voice2.img/Friends/CH2_08/1", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("嗯，没错……", 37, 1530140, true, true);
                cm.effect_Voice("Voice2.img/Friends/CH2_08/2", 100);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(0, 200, 1141, 142);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(4359);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("哎呦，这个笨蛋，连说话声音都颤抖了啊！", 37, 1530120, false, true);
                      cm.effect_Voice("Voice2.img/Friends/CH2_08/3", 100);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("啧啧，都白教他了。这怎么能行啊。", 37, 1530110, true, true);
                        cm.effect_Voice("Voice2.img/Friends/CH2_08/4", 100);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_PushMoveInfo(0, 200, 370, 142);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(4359);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("……你要和我说什么？", 37, 1530130, false, true);
                              cm.effect_Voice("Voice2.img/Friends/CH2_08/5", 100);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("……那个，你看过我给你写的信了吗？", 37, 1530140, true, true);
                                cm.effect_Voice("Voice2.img/Friends/CH2_08/6", 100);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("没有，被我扔了。", 37, 1530130, true, true);
                                  cm.effect_Voice("Voice2.img/Friends/CH2_08/7", 100);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("扔，扔了……太过分了。", 37, 1530140, true, true);
                                    cm.effect_Voice("Voice2.img/Friends/CH2_08/8", 100);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("过分？我就跟你明说了吧。我奥尔卡不打算和任何人谈恋爱，所以你放弃吧。", 37, 1530130, true, true);
                                      cm.effect_Voice("Voice2.img/Friends/CH2_08/9", 100);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("那个……", 37, 1530140, true, true);
                                        cm.effect_Voice("Voice2.img/Friends/CH2_08/10", 100);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom('行了吧？那么再见。', 37, 1530130, true, true);
                                          cm.effect_Voice("Voice2.img/Friends/CH2_08/11", 100);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_SetForceMove("oid=36521147", -1, 60, 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(3000);
                                              cm.effect_Voice("Voice2.img/Friends/CH2_08/12", 100);
                                              cm.effect_NormalSpeechBalloon("等……等等！", 1, 0, 0, 2000, 1530140, cm.getPlayer().getId());
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/what", "oid=36521147"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                cm.inGameDirectionEvent_AskAnswerTime(2500);
                                              } else {
                                                if (status === V++) {
                                                  cm.npc_setForceFlip("oid=36521147", 1);
                                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("你为什么不打算谈恋爱呢？", 37, 1530140, false, true);
                                                    cm.effect_Voice("Voice2.img/Friends/CH2_08/13", 100);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("哼，那不是明摆着的吗。", 37, 1530130, true, true);
                                                      cm.effect_Voice("Voice2.img/Friends/CH2_08/14", 100);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("你也和别人没什么两样。不都是因为奥尔卡会上电视，是偶像明星，所以才喜欢的吗？", 37, 1530130, true, true);
                                                        cm.effect_Voice("Voice2.img/Friends/CH2_08/15", 100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                          cm.sendNormalTalk_Bottom("……不是的。不管你是不是偶像明星，我都不在乎！", 37, 1530140, true, true);
                                                          cm.effect_Voice("Voice2.img/Friends/CH2_08/16", 100);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=36521147"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.fieldEffect_PlayBGM("Bgm02.img/AboveTheTreetops", 0, 0);
                                                              cm.setNpcSpecialActionReset("oid=36521148");
                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("我第一次遇到你的时候……根本就不知道你是偶像明星。只是看到你在雨中哭泣，样子那么孤独。", 37, 1530140, false, true);
                                                                cm.effect_Voice("Voice2.img/Friends/CH2_08/17", 100);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("对我来说……你既不是偶像，也不是我们学校最耀眼的明星，而仅仅是一个内心无比孤单的小女生啊。", 37, 1530140, true, true);
                                                                  cm.effect_Voice("Voice2.img/Friends/CH2_08/18", 100);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("…………", 37, 1530130, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("也许在你眼里，我还有很多不足之处……但是对于你的真心，我比任何人都强烈。", 37, 1530140, true, true);
                                                                      cm.effect_Voice("Voice2.img/Friends/CH2_08/19", 100);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("真……心……", 37, 1530130, true, true);
                                                                        cm.effect_Voice("Voice2.img/Friends/CH2_08/20", 100);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk_Bottom("如果可以的话，你愿意和我交往吗？", 37, 1530140, true, true);
                                                                          cm.effect_Voice("Voice2.img/Friends/CH2_08/21", 100);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.sendNormalTalk_Bottom("只要你愿意为我在你的心中留有一个空位，我会用我的一生去把它填满的。我会用我的一切来和你约定。", 37, 1530140, true, true);
                                                                            cm.effect_Voice("Voice2.img/Friends/CH2_08/22", 100);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_PushMoveInfo(0, 200, 1141, 142);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_AskAnswerTime(3859);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/shade", "oid=36521150"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                  cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/flower", "oid=36521149"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                                                                  cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("嗬哈……我的天啊……", 37, 1530120, false, true);
                                                                                    cm.effect_Voice("Voice2.img/Friends/CH2_08/23", 100);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("虽然有点肉麻，不过还是很不错的。看来教他谈恋爱还是挺有用的。", 37, 1530110, true, true);
                                                                                      cm.effect_Voice("Voice2.img/Friends/CH2_08/24", 100);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("是啊。能感受到他是真心的。", 37, 1530120, true, true);
                                                                                        cm.effect_Voice("Voice2.img/Friends/CH2_08/25", 100);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("看这情况，说不定有戏？！", 37, 1530110, true, true);
                                                                                          cm.effect_Voice("Voice2.img/Friends/CH2_08/26", 100);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.inGameDirectionEvent_PushMoveInfo(0, 200, 370, 142);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.inGameDirectionEvent_AskAnswerTime(4359);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("我不奢求现在就能得到你的回答。如果你决定的话……", 37, 1530140, false, true);
                                                                                                cm.effect_Voice("Voice2.img/Friends/CH2_08/27", 100);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.fieldEffect_PlayBGM("Bgm00.img/Silence", 0, 0);
                                                                                                  cm.sendNormalTalk_Bottom("我不愿意，你长得实在太丑了。", 37, 1530130, true, true);
                                                                                                  cm.effect_Voice("Voice2.img/Friends/CH2_08/28", 100);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.setAmbience("Ambience.img/ding", 100, 60);
                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.npc_SetSpecialAction("oid=36521148", "shy", -1, 1);
                                                                                                        cm.sendNormalTalk_Bottom('不是……呃……', 37, 1530140, false, true);
                                                                                                        cm.effect_Voice("Voice2.img/Friends/CH2_08/29", 100);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom('而且个子也很矮。', 37, 1530130, true, true);
                                                                                                          cm.effect_Voice("Voice2.img/Friends/CH2_08/30", 100);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.sendNormalTalk_Bottom("……那个，", 37, 1530140, true, true);
                                                                                                            cm.effect_Voice("Voice2.img/Friends/CH2_08/31", 100);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNormalTalk_Bottom("腿还很短。", 37, 1530130, true, true);
                                                                                                              cm.effect_Voice("Voice2.img/Friends/CH2_08/32", 100);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNormalTalk_Bottom("……你明明说，最讨厌那些只注重外表的人……", 37, 1530140, true, true);
                                                                                                                cm.effect_Voice("Voice2.img/Friends/CH2_08/33", 100);
                                                                                                              } else {
                                                                                                                if (status === V++) {
                                                                                                                  cm.sendNormalTalk_Bottom("我只是讨厌别人注重我的外表，又没说我不注重别人的外表？我喜欢个子高长得又帅的男人。", 37, 1530130, true, true);
                                                                                                                  cm.effect_Voice("Voice2.img/Friends/CH2_08/34", 100);
                                                                                                                } else {
                                                                                                                  if (status === V++) {
                                                                                                                    cm.sendNormalTalk_Bottom('…………', 37, 1530140, true, true);
                                                                                                                    cm.effect_Voice("Voice2.img/Friends/CH2_08/35", 100);
                                                                                                                  } else {
                                                                                                                    if (status === V++) {
                                                                                                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                    } else {
                                                                                                                      if (status === V++) {
                                                                                                                        cm.playSoundEffDirectly("Ambience.img/ding");
                                                                                                                        cm.setAmbience("Ambience.img/crow", 100, 60);
                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                      } else {
                                                                                                                        if (status === V++) {
                                                                                                                          cm.sendNormalTalk_Bottom("你的话说完了吗？那么再见。", 37, 1530130, false, true);
                                                                                                                          cm.effect_Voice("Voice2.img/Friends/CH2_08/36", 100);
                                                                                                                        } else {
                                                                                                                          if (status === V++) {
                                                                                                                            cm.npc_setForceFlip("oid=36521147", 0);
                                                                                                                            cm.npc_SetForceMove("oid=36521147", -1, 500, 100);
                                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                                                                                          } else {
                                                                                                                            if (status === V++) {
                                                                                                                              cm.npc_SetSpecialAction("oid=36521148", "die", -1, 1);
                                                                                                                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                                                                            } else {
                                                                                                                              if (status === V++) {
                                                                                                                                cm.inGameDirectionEvent_PushMoveInfo(0, 200, 1141, 142);
                                                                                                                              } else {
                                                                                                                                if (status === V++) {
                                                                                                                                  cm.inGameDirectionEvent_AskAnswerTime(4359);
                                                                                                                                } else {
                                                                                                                                  if (status === V++) {
                                                                                                                                    cm.sendNormalTalk_Bottom("#face0#哎呀，真够残忍的了……不过也很直率。", 37, 1530120, false, true);
                                                                                                                                    cm.effect_Voice("Voice2.img/Friends/CH2_08/37", 100);
                                                                                                                                  } else {
                                                                                                                                    if (status === V++) {
                                                                                                                                      cm.sendNormalTalk_Bottom("如果我们掺和进去的话只会让他的处境更加悲惨……那就由你去好好安慰他吧，#h0#。", 37, 1530110, true, true);
                                                                                                                                      cm.effect_Voice("Voice2.img/Friends/CH2_08/38", 100);
                                                                                                                                    } else {
                                                                                                                                      if (status === V++) {
                                                                                                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                                                                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                                                                                                      } else if (status === V++) {
                                                                                                                                        cm.forceStartQuest(32788, '');
                                                                                                                                        cm.forceCompleteQuest(32788);
                                                                                                                                        cm.updateInfoQuest(32720, "sms=81");
                                                                                                                                        cm.updateInfoQuest(32719, "sms=1;gal=0;add=0");
                                                                                                                                        cm.dispose();
                                                                                                                                        cm.warp(330000500, 0);
                                                                                                                                        cm.inGameDirectionEvent_ForcedFlip(0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;
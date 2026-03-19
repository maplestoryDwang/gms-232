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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.npc_ChangeController(9401280, "oid=2756848", -250, 400, 9, -300, -200, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=2756848", 'summon', 0, 0);
      cm.npc_ChangeController(9401278, "oid=2756849", 25, 400, 9, -25, 75, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2756849", "summon", 0, 0);
      cm.npc_ChangeController(9401293, "oid=2756850", 110, 400, 10, 60, 160, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=2756850", "summon", 0, 0);
      cm.updateInfoQuest(65998, "move=2");
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.sendNewEffects(17, [0, 1000, 1500, 0, 440]);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=2756848", "die", 0, 0);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#呃……", 37, 9401280, false, true, 1);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#不可能……这不可能。", 37, 9401280, true, true, 1);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face6##b够了，别再说了。别再羞辱我了！", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else {
                    if (status === V++) {
                      cm.setNpcSpecialActionReset("oid=2756848");
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face2#……你不明白。你……", 37, 9401280, false, true, 1);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face2#…", 37, 9401280, true, true, 1);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.npc_setForceFlip("oid=2756848", -1);
                              cm.npc_SetForceMove("oid=2756848", -1, 600, 300);
                              cm.inGameDirectionEvent_AskAnswerTime(300);
                            } else {
                              if (status === V++) {
                                cm.sendNewEffects(13, [1000, -250, 0]);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#face0#今天我先撤了，但是……", 37, 9401280, false, true, 1);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face3#喂！你这家伙，跑不了的！", 37, 9401278, true, true, 1);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_同时移动镜头和人(1, 240);
                                        cm.npc_SetForceMove("oid=2756849", -1, 430, 300);
                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_setForceFlip("oid=2756849", 1);
                                          cm.inGameDirectionEvent_AskAnswerTime(600);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNewEffects(13, [500, 50, 0]);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#face3#明明受了致命伤，竟然还能使出如此轻功。真是厉害。", 37, 9401278, false, true, 1);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("#face7##b……没想到会在这里遇到。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face3#啊，我也一样。", 37, 9401278, true, true, 1);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face3#云雾，不，魔教也在追踪武神吗……？不会吧？", 37, 9401278, true, true, 1);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetForceMove("oid=2756850", -1, 250, 150);
                                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("贫僧名叫元檀。你们就是联系我的人吧。", 37, 9401293, false, true, 1);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_ForcedFlip(1);
                                                          cm.sendNormalTalk_Bottom("#face0#是的，我们好像来晚了一步。", 37, 9401278, true, true, 1);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk_Bottom("#face0##b我是玄山派墨玄。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk_Bottom("#face0##b伤势好像很严重……你没事吧？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk_Bottom("是……", 37, 9401293, true, true, 1);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk_Bottom("存放着的有关武神的书籍全都被刚才逃跑的人拿走了。 ", 37, 9401293, true, true, 1);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk_Bottom("#face3##b都是因为我们，这里……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk_Bottom("事情都已经过去了。别太在意。", 37, 9401293, true, true, 1);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk_Bottom("而且亲眼见到了武神，那些书籍已经不需要了。", 37, 9401293, true, true, 1);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_ForcedFlip(-1);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_SetForceMove("oid=2756849", 1, 50, 100);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.sendNormalTalk_Bottom("#face1#嗯？干嘛看我？我已经知道了，所以别紧张。\r\n我好歹是分舵主，要是连这都不知道，还不如在尿盆里淹死！", 37, 9401278, false, true, 1);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.inGameDirectionEvent_ForcedFlip(1);
                                                                                cm.sendNormalTalk_Bottom("#face0##b你怎么一眼就看出来了？", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk_Bottom("我一生都在研究武神的记录。\r\n将武神的意志传给后人，是我的责任。\r\n没能认出你来，真是件怪事。", 37, 9401293, true, true, 1);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.sendNormalTalk_Bottom("武神留下了无数的记录，想说的话无非就是相信自己，不要后悔。", 37, 9401293, true, true, 1);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.sendNormalTalk_Bottom("#face0##b相信自己……不要后悔……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                    } else {
                                                                                      if (status === V++) {
                                                                                        cm.sendNormalTalk_Bottom("力量会自然地追随意志。", 37, 9401293, true, true, 1);
                                                                                      } else {
                                                                                        if (status === V++) {
                                                                                          cm.sendNormalTalk_Bottom("#face0##b谢谢你的建议。", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                        } else {
                                                                                          if (status === V++) {
                                                                                            cm.sendNormalTalk_Bottom("#face3#元檀法师，你看上去越来越疲惫了。\r\n好像受了很重的内伤，是不是应该进去休息一下？", 37, 9401278, true, true, 1);
                                                                                          } else {
                                                                                            if (status === V++) {
                                                                                              cm.sendNormalTalk_Bottom("……我没事。\r\n魔功本来就是歪门邪道，与我修习的心法截然不同，所以稍微有点吃力。", 37, 9401293, true, true, 1);
                                                                                            } else {
                                                                                              if (status === V++) {
                                                                                                cm.sendNormalTalk_Bottom("#face3#你知道魔功吗？", 37, 9401278, true, true, 1);
                                                                                              } else {
                                                                                                if (status === V++) {
                                                                                                  cm.sendNormalTalk_Bottom("是的。所谓魔功，就是以不正当手段夺取他人的东西，使自己变得更强的武功。", 37, 9401293, true, true, 1);
                                                                                                } else {
                                                                                                  if (status === V++) {
                                                                                                    cm.sendNormalTalk_Bottom("但却不知道在此过程中，那个人拥有的憎恨和愤怒也会一同积聚在自己体内，真是愚蠢。", 37, 9401293, true, true, 1);
                                                                                                  } else {
                                                                                                    if (status === V++) {
                                                                                                      cm.sendNormalTalk_Bottom("#face7##b……云雾……", 37, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                                                                                                    } else {
                                                                                                      if (status === V++) {
                                                                                                        cm.sendNormalTalk_Bottom("#face3#你在想什么呢？这是他自己的选择，有什么可怜的！", 37, 9401278, true, true, 1);
                                                                                                      } else {
                                                                                                        if (status === V++) {
                                                                                                          cm.sendNormalTalk_Bottom("#face0#我们回去吧。", 37, 9401278, true, true, 1);
                                                                                                        } else {
                                                                                                          if (status === V++) {
                                                                                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 600, 0);
                                                                                                            cm.inGameDirectionEvent_AskAnswerTime(900);
                                                                                                          } else {
                                                                                                            if (status === V++) {
                                                                                                              cm.sendNewEffects(14, [0, 2000, 1000]);
                                                                                                            } else {
                                                                                                              if (status === V++) {
                                                                                                                cm.sendNewEffects(19, [0]);
                                                                                                              } else if (status === V++) {
                                                                                                                cm.forceCompleteQuest(65981);
                                                                                                                cm.npc_LeaveField("oid=2756848");
                                                                                                                cm.npc_LeaveField("oid=2756849");
                                                                                                                cm.npc_LeaveField("oid=2756850");
                                                                                                                cm.dispose();
                                                                                                                cm.warp(875000108, 0, false);
                                                                                                                cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
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
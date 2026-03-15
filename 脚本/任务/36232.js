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
      cm.sendNormalTalk_Bottom("#face0#没错，是我借走了《器物的历史》剩下的部分。", 36, 3005107, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#原来在找那东西的你，就是格里盯上的那个铃铛原本的主人啊。", 36, 3005107, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#没错！你能将借走的剩下那部分还回来吗？", 36, 3005100, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#那个已经丢掉了。", 36, 3005107, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face1#你说丢掉了？！", 36, 3005100, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#抱歉，我们这样的人向来不留痕迹。", 36, 3005107, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#没关系，那你至少告诉我丢在哪儿了！", 36, 3005100, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#你难不成打算一个个攒吗？", 36, 3005107, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#没错，看来告诉你是正确的。", 36, 3005107, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#丢纸的地方是#b#m410004005##k，只要抓到那里的#b#o8645223##k，应该会有什么发现吧？", 36, 3005107, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face6#这样啊！谢谢你告诉我！", 36, 3005100, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.askYesNo_Bottom("#face0#现在就去#b#m410004005##k捕捉#b50只#k#o8645223#，\r\n收集#b10张#k#i4036780# #t4036780#就好。", 36, 3005100, 1);
                          } else if (status === v++) {
                            cm.forceStartQuest(36232, '');
                            cm.OnStartNavigation(410004005, 0, '', 36232);
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
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection2();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 0, -909, 267);
    } else {
      if (status === v++) {
        cm.onTeleport(0, 3, cm.getPlayer().getId(), -943, 285);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === v++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（真的集齐了呢……）", 36, 3005107, false, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#把这张纸贴在这里……成了！", 36, 3005100, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#嗯……剩下一张纸了，这张纸恐怕是从其他书上撕下来的吧。", 36, 3005100, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face6#有朝一日会派上用场的吧，先收好吧。", 36, 3005100, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1300, 0);
                    cm.inGameDirectionEvent_AskAnswerTime(1600);
                  } else {
                    if (status === v++) {
                      cm.inGameDirectionEvent_Monologue("从这一点来说，铃铛有别于其他器物，\r\n因为制作之初就承载了我们的意志和目的，因为……", 0);
                    } else {
                      if (status === v++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === v++) {
                          cm.inGameDirectionEvent_Monologue("因为#r因器物而得上的病#k要靠器物治疗。", 0);
                        } else {
                          if (status === v++) {
                            cm.inGameDirectionEvent_Monologue("所以铃铛会对其他器物产生反应，并#r净化#k邪恶。", 1);
                          } else {
                            if (status === v++) {
                              cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1300, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1600);
                            } else {
                              if (status === v++) {
                                cm.sendNormalTalk_Bottom("#face0#虽然不知道这是谁……但恐怕此人病得不轻啊。", 36, 3005107, false, true, 1);
                              } else {
                                if (status === v++) {
                                  cm.sendNormalTalk_Bottom("#face0#嗯，你最好竭尽所能，去珍藏那个铃铛。", 36, 3005107, true, true, 1);
                                } else {
                                  if (status === v++) {
                                    cm.sendNormalTalk_Bottom("#face0#话说你为什么会借走那本书？你对器物有所了解吗？", 36, 3005100, true, true, 1);
                                  } else {
                                    if (status === v++) {
                                      cm.sendNormalTalk_Bottom("#face0#不，我是借来当锅垫的。", 36, 3005107, true, true, 1);
                                    } else {
                                      if (status === v++) {
                                        cm.sendNormalTalk_Bottom("#face1#锅垫吗？", 36, 3005100, true, true, 1);
                                      } else {
                                        if (status === v++) {
                                          cm.sendNormalTalk_Bottom("#face0#当然是骗人的了，这可是商业机密。", 36, 3005107, true, true, 1);
                                        } else {
                                          if (status === v++) {
                                            cm.sendNormalTalk_Bottom("#face0#这样啊！什么生意啊？", 36, 3005100, true, true, 1);
                                          } else {
                                            if (status === v++) {
                                              cm.sendNormalTalk_Bottom("#face0#……", 36, 3005107, true, true, 1);
                                            } else {
                                              if (status === v++) {
                                                cm.sendNormalTalk_Bottom("#face0#说起来你的好朋友格里上哪儿去了？", 36, 3005107, true, true, 1);
                                              } else {
                                                if (status === v++) {
                                                  cm.sendNormalTalk_Bottom("#face0#啊，我得去找格里了！谢谢你的帮忙！", 36, 3005100, true, true, 1);
                                                } else {
                                                  if (status === v++) {
                                                    cm.inGameDirectionEvent_ForcedFlip(1);
                                                    cm.inGameDirectionEvent_同时移动镜头和人(2, 150, 0);
                                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                  } else {
                                                    if (status === v++) {
                                                      cm.inGameDirectionEvent_SetHideEffect(1);
                                                      cm.sendNormalTalk_Bottom("#face0#终于赶走了呢。", 36, 3005107, false, true, 1);
                                                    } else {
                                                      if (status === v++) {
                                                        cm.sendNormalTalk_Bottom("#face0#就算你这么实实在在地追问我，我也不能轻易提及自己的委托人。", 36, 3005107, true, true, 1);
                                                      } else {
                                                        if (status === v++) {
                                                          cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                          cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1000, 2147483647, 2147483647, 2147483647);
                                                        } else {
                                                          if (status === v++) {
                                                            cm.inGameDirectionEvent_Unknown9(1000);
                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                          } else if (status === v++) {
                                                            cm.fieldEffect_RemoveOverlapScreenDetail(1000);
                                                            cm.inGameDirectionEvent_SetHideEffect(0);
                                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                            cm.setInGameDirectionMode(false, true, false);
                                                            cm.setStandAloneMode(false);
                                                            cm.forceCompleteQuest(36232);
                                                            cm.gainExp(3564);
                                                            cm.gainItem(4036780, -10);
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
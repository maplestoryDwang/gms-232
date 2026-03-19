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
      cm.setStandAloneMode(true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.npc_ChangeController(1013350, -631, 60, 1);
      cm.npc_SetSpecialAction(1013350, 'summon');
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, -540, -400);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(500);
      } else {
        if (status === V++) {
          cm.effect_Text(["#fn黑体##fs18#帕勒坦遗迹"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
          cm.inGameDirectionEvent_PushScaleInfo(4000, 2000, 4000, -540, 100);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(4500);
          } else {
            if (status === V++) {
              cm.sendNext_Bottom("#face0#看来确实是遗迹的入口。", 1013358);
            } else {
              if (status === V++) {
                cm.sendNextNoESC_Bottom("#face0#呃啊……里面四通八达全都是路。好像是个非常复杂的地方。\r\n应该往哪边走呢？", 1013350);
              } else {
                if (status === V++) {
                  cm.sendNext_Bottom("#face3##b（是个有很多条路的地方。之前过来的时候没有感觉。\r\n因为有祭坛钥匙的光指引方向。）#k", 1013358);
                } else {
                  if (status === V++) {
                    cm.sendNext_Bottom("#face0##b（呼……解开诅咒的线索，是在发现遗物的那个地方吗？\r\n还是应该选择别的路呢？）#k", 1013358);
                  } else {
                    if (status === V++) {
                      cm.sendNextNoESC_Bottom("#face0#勇士，勇士……我听到了很轻的咚咚声。\r\n你不觉得跟废墟发出的声音很像吗？", 1013350);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("Ambience.img/ruin");
                        cm.sendNext_Bottom("#face6##b（集中精神听了一下。\r\n虽然非常微弱，但确实好像有什么东西在响。）#k", 1013358);
                      } else {
                        if (status === V++) {
                          cm.sendNext_Bottom("#face0##b（过去看看，说不定会有什么发现。\r\n但是这么小的声音，怎么能……不，那个小孩也许可以……）#k", 1013358);
                        } else {
                          if (status === V++) {
                            cm.sendNext_Bottom("#face0#你能找到这个声音的来源吗，小孩？", 1013358);
                          } else {
                            if (status === V++) {
                              cm.sendNextNoESC_Bottom("#face0#没问题。怪声我听得多了，\r\n就算是很小的声音，也会让人直起鸡皮疙瘩。", 1013350);
                            } else {
                              if (status === V++) {
                                cm.sendNext_Bottom("#face0#你在前面带路。我跟在后面。", 1013358);
                              } else {
                                if (status === V++) {
                                  cm.sendNextNoESC_Bottom("#face0#啊，你是想去发出声音的地方进行调查吗？\r\n好可怕……不过我一定会坚持下去的。请跟我来。", 1013350);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(2000, 1000, 2000, -120, -48);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove(1013350, 1, 550, 180);
                                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_同时移动镜头和人(2, 300);
                                          cm.inGameDirectionEvent_AskAnswerTime(2000);
                                        } else {
                                          if (status === V++) {
                                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 2);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_AskAnswerTime(500);
                                            } else {
                                              if (status === V++) {
                                                cm.OverlapScreenDetail19(0, 1000, 3000, 1);
                                                cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
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
                                                      cm.setStandAloneMode(false);
                                                      cm.setInGameDirectionMode(false, false, false);
                                                      cm.forceCompleteQuest(35923);
                                                      cm.npc_LeaveField(1013350);
                                                      cm.warp(100051041);
                                                      cm.gainExp(4000);
                                                      cm.dispose();
                                                    } else {
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;
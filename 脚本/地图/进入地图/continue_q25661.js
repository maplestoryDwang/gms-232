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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(false, true, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.npc_ChangeController(2159359, "oid=67199203", 500, -30, 16, 450, 550, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=67199203", "summon", 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 250, 250, -41);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.effect_PlayMusic("Bgm26.img/DarkMage");
        cm.inGameDirectionEvent_AskAnswerTime(1012);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("你对拉尼娅做了什么！", 17, 0, false, true);
        } else {
          if (status === V++) {
            cm.fieldEffect_ScreenMsg("lightning/screenMsg/8");
            cm.inGameDirectionEvent_AskAnswerTime(7000);
          } else {
            if (status === V++) {
              cm.effect_Voice("Voice.img/DarkMage/6", 100);
              cm.sendNormalTalk("露西娅、拉尼娅全都被你害了，我绝对不会放过你，黑魔法师！", 17, 0, false, true);
            } else {
              if (status === V++) {
                cm.fieldEffect_ScreenMsg("lightning/screenMsg/9");
                cm.inGameDirectionEvent_AskAnswerTime(5100);
              } else {
                if (status === V++) {
                  cm.effect_Voice("Voice.img/DarkMage/7", 100);
                  cm.sendNormalTalk("感情不会使人变得软弱，反而会更坚定意志。我就在这里证明给你看。受死吧，黑魔法师！", 17, 0, false, true);
                } else {
                  if (status === V++) {
                    cm.fieldEffect_ScreenMsg("lightning/screenMsg/10");
                    cm.inGameDirectionEvent_AskAnswerTime(9000);
                  } else {
                    if (status === V++) {
                      cm.effect_Voice("Voice.img/DarkMage/8", 100);
                      cm.fieldEffect_ScreenMsg("demonSlayer/whiteOut");
                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                    } else {
                      if (status === V++) {
                        cm.effect_Voice("Voice.img/DarkMage/3", 100);
                        cm.npc_LeaveField("oid=67199203");
                        cm.npc_LeaveField("oid=67199203");
                        cm.inGameDirectionEvent_AskAnswerTime(6000);
                      } else {
                        if (status === V++) {
                          cm.npc_ChangeController(1032201, "oid=67203652", -400, -30, 3, -450, -350, 0, true, 0, false);
                          cm.npc_SetSpecialAction("oid=67203652", "summon", 0, 0);
                          cm.sendNormalTalk("消失了……他再次从我身边夺去了我珍惜的人……", 17, 1032201, false, true);
                        } else {
                          if (status === V++) {
                            cm.effect_PlayMusic("Bgm26.img/Serenity");
                            cm.inGameDirectionEvent_AskAnswerTime(2000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk('夜光法师……', 1, 1032201, false, true);
                            } else {
                              if (status === V++) {
                                cm.effect_PlayMusic("MiniGame.img/Open");
                                cm.inGameDirectionEvent_PushMoveInfo(0, 250, -200, -41);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_MoveAction(1);
                                    cm.inGameDirectionEvent_AskAnswerTime(30);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_MoveAction(0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1498);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("拉尼娅？！你还活着！", 3, 1032201, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("夜光法师……我，我觉得……有点晕乎乎的。", 1, 1032201, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("很快会没事的，谢谢你还活着。", 3, 1032201, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("夜光法师，我被黑暗力量控制的时候，想起了那些被遗忘的记忆。那些记忆现在还在我的脑海里盘旋。", 1, 1032201, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("你现在什么也别想，乖乖休息。我送你回家。", 3, 1032201, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("不，我现在就要说。夜光法师，你还记不记得以前在希利尼提的小房子里偷吃点心挨训的事？", 1, 1032201, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("……拉尼娅？那件事你怎么知道……", 3, 1032201, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk("还记得你第一次使用光之力量时的情景吗？那时你在我面前兴奋地炫耀了好一会儿呢。那模样实在很可爱，我还忍不住摸了摸你的头呢。", 1, 1032201, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("难道，拉尼娅你就是……露西娅？", 3, 1032201, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk("是的，现在我既是拉尼娅，也带着露西娅的记忆。虽然还没全部想起来，但现在正逐渐地恢复记忆。", 1, 1032201, true, true);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.sendNormalTalk("(这，是命运的安排吗？)", 3, 1032201, true, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk("夜光法师，现在我可以明确地告诉你。我从来没有埋怨过你，所以不要感到抱歉。不管是对拉尼娅，还是露西娅。", 1, 1032201, true, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk("谢谢你，真的谢谢。", 3, 1032201, true, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk("从现在开始，也不要说什么感谢的话了。我们重新相逢，以后还要一起好好生活下去！", 1, 1032201, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk("嗯，说得没错，拉尼娅，不不，露西娅，不不……哎……", 3, 1032201, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk("呵呵，我现在更喜欢拉尼娅这个名字。这个名字记录了我们一同钓鱼、打雪仗的快乐回忆啊。", 1, 1032201, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.sendNormalTalk("知道了，我们回家吧，拉尼娅。", 3, 1032201, true, true);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.sendNormalTalk('嗯，夜光法师。', 1, 1032201, true, true);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_SetForceMove("oid=67203652", 1, 150, 100);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                                          } else if (status === V++) {
                                                                            cm.forceCompleteQuest(25661);
                                                                            cm.finishAchievement(251);
                                                                            cm.gainExp(1200000);
                                                                            cm.eventSKill(0);
                                                                            cm.setInGameDirectionMode(false, true, false);
                                                                            cm.npc_LeaveField("oid=67203652");
                                                                            cm.npc_LeaveField("oid=67203652");
                                                                            cm.dispose();
                                                                            cm.warp(101000100, 0, false);
                                                                          }
                                                                        }
                                                                      }
                                                                    }
                                                                  }
                                                                }
                                                              }
                                                            }
                                                          }
                                                        }
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
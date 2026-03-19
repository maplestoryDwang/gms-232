var status = -1;
function action(f, E, e) {
  if (f === 0) {
    status--;
  } else {
    status++;
  }
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true);
      cm.npc_ChangeController(2159357, 300, -80, 1);
      cm.npc_SetSpecialAction(2159357, "summon");
      cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/6"], [0, 0, -160]);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_PushMoveInfo(0, 300, 0, -500);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2322);
        } else {
          if (status === V++) {
            cm.fieldEffect_ScreenMsg("lightning/screenMsg/2");
            cm.effect_Voice("Voice.img/DarkMage/0");
            cm.inGameDirectionEvent_AskAnswerTime(4000);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(0, 300, 300, -100);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1667);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction5.img/effect/mercedesInIce/merBalloon/0", "oid=2159357"], [0, 0, -100, 1, 0, 1, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(2100);
                } else {
                  if (status === V++) {
                    cm.sendNextSNoESC("弗里德！……双弩精灵！");
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(300);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_PushMoveInfo(1, 3000, 0, 0);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_MoveAction(2);
                          cm.inGameDirectionEvent_AskAnswerTime(8000);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_MoveAction(0);
                            cm.sendNextNoESC("来啦。我们已经尽力了，但还是不行。", 2159357);
                          } else {
                            if (status === V++) {
                              cm.sendNextSNoESC("双弩精灵怎么啦？");
                            } else {
                              if (status === V++) {
                                cm.sendNextPrevNoESC("只是暂时晕过去了。关键是黑魔法师比我们想的厉害得多。现在只能靠这个了。", 2159357);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/10", "oid=2159357"], [0, 0, -100, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(1800);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Skill/2218.img/skill/22181003/affected", "oid=2159357"], [0, 0, 0, 1, 0, 1, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNextNoESC("#b(听好。从现在开始我说的话你绝不可以告诉其他人。之前提过的封印，你还记得吗？)#k", 2159357);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNextPrevSNoESC("#b(嗯。你和阿弗利埃研究了好长时间嘛。)#k");
                                      } else {
                                        if (status === V++) {
                                          cm.sendNextPrevNoESC("#b(那个封印可以逆转黑魔法师从伦娜那里抢来的时间力量。因此，无论黑魔法师有多么厉害，都绝不可能逃脱。只是，要启动封印的话，必须将黑魔法师的时间的力量牵引出来。)#k", 2159357);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNextPrevNoESC("#b(我发现战局不利时，就偷偷在这间房间设置了封印。但是光靠我和双弩精灵，无法引出黑魔法师的时间力量。现在你是我们唯一的希望。)#k", 2159357);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNextPrevSNoESC("#b(我应该怎么做？)#k");
                                            } else {
                                              if (status === V++) {
                                                cm.sendNextPrevNoESC("#b(首先要激活设置好的封印。我会用仅剩的力量，使时间暂时停滞，以防黑魔法师发现。你就趁机去把五个封印全部激活。)#k", 2159357);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNextPrevNoESC("#b(右方应该留有第一个封印的痕迹。你走近就能看到封印。你只要将所有封印激活就行。)#k", 2159357);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNextPrevSNoESC("#b(知道了。交给我吧。)#k");
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNextPrevNoESC("(#b封印全部激活后，停滞的时间就会恢复正常。拜托了。时间女神啊，赐予我力量……！！#k)", 2159357);
                                                    } else if (status === V++) {
                                                      cm.npc_LeaveField(2159357);
                                                      cm.curNodeEventEnd(true);
                                                      cm.setInGameDirectionMode(false, true);
                                                      cm.warp(927020071, 0);
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
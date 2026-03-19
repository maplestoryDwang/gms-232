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
      cm.inGameDirectionEvent_MoveAction(0);
      cm.npc_ChangeController(2159357, 300, -80, 1);
      cm.npc_SetSpecialAction(2159357, "summon");
      cm.sendNextNoESC("#b(怎么样了？)#k", 2159357);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNextSNoESC("#b(五个封印已经全部被启动。)#k");
      } else {
        if (status === V++) {
          cm.sendNextNoESC("#b(现在只要将黑魔法师时间的力量牵引出来就好了。我相信以你具备的光之力量能够做到。)#k", 2159357);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushMoveInfo(0, 300, 0, -500);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1456);
            } else {
              if (status === V++) {
                cm.fieldEffect_ScreenMsg("lightning/screenMsg/3");
                cm.inGameDirectionEvent_AskAnswerTime(4000);
                cm.effect_Voice("Voice.img/DarkMage/1");
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(0);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(1);
                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_MoveAction(0);
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction8.img/effect/tuto/BalloonMsg0/8"], [0, 0, -100]);
                        cm.inGameDirectionEvent_AskAnswerTime(2300);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction8.img/effect/tuto/BalloonMsg0/9"], [0, 0, -100]);
                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_PushMoveInfo(0, 300, 0, -500);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(2413);
                              cm.effect_Voice("Voice.img/DarkMage/4");
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_ScreenMsg("demonSlayer/whiteOut");
                                cm.inGameDirectionEvent_AskAnswerTime(5000);
                              } else if (status === V++) {
                                cm.setInGameDirectionMode(false);
                                cm.npc_LeaveField(2159357);
                                cm.warp(927020100, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;
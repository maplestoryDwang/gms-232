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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.forceStartQuest(34461, '');
      cm.updateInfoQuest(34461, "di=1");
      cm.npc_ChangeController(3003350, "oid=1830901", -750, 25, 33, -800, -700, 0, true, false);
      cm.npc_SetSpecialAction("oid=1830901", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 0, -393, 10);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(1000);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
          cm.inGameDirectionEvent_同时移动镜头和人(2, 210);
          cm.npc_SetForceMove("oid=1830901", 1, 180, 70);
          cm.inGameDirectionEvent_AskAnswerTime(2300);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face2#从这里开始就需要对森林深处知之甚详的树精灵的帮忙了。", 37, 3003301, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face3#从前他们经常带我去树枝竖琴所在的地方来着。", 37, 3003301, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face1#说不定会聚集在这里的某个地方……", 37, 3003301, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_PushScaleInfo(3000, 2000, 3000, -100, 100);
                } else {
                  if (status === V++) {
                    cm.npc_SetForceMove("oid=1830901", 1, 400, 200);
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(2);
                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_MoveAction(0);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#b(又是那团光，就是它让我见到了小不点精灵，跟着它走下去说不定……)#k", 57, 0, false, true);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=1830901", -1, 10, 100);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face1#嗯，#b#ho##k，有什么事情吗？", 37, 3003301, false, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#b(建议小不点精灵一起跟着那团光走下去。)#k", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=1830901", -1, 10, 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#face2#嗯，好吧，反正眼下我们也不知道树精灵究竟在哪里。", 37, 3003301, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(3000, 1000, 3000, 500, 10);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_SetForceMove("oid=1830901", 1, 200, 200);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("#face2#咦，那团光分成了两道岔路呢？怎么办……", 37, 3003301, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#b(看来只有分开行动了。)#k", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.askMenu_Bottom("#face1#好吧，知道了，这也是没办法的事。我们分开来找吧，你要走哪边？\r\n#L0# #b选项1：我要走上面那条路。#l\r\n#L1# #b选项2：我要走下面那条路。#l", 37, 3003301);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("#face1#嗯，你去那条路找找看吧，若是找到了树精灵，就再回来这里。", 37, 3003301, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("#face2#就算迷路了，再跟着这团光也能回到这里的，嘻嘻。", 37, 3003301, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetForceMove("oid=1830901", 1, 200, 100);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_同时移动镜头和人(2, 200);
                                                        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(500);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                                        } else if (status === V++) {
                                                          cm.dispose();
                                                          cm.warp(940200209, 0, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;
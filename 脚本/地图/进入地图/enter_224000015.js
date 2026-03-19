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
      cm.fieldEffect_PlayBGM("Bgm43/Unexpected crisis", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_PushScaleInfo(0, 2000, 0, 507, 230);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.npc_ChangeController(2074106, "oid=2587959", 730, 178, 4, 680, 780, 1, true, 500, false);
        cm.npc_SetSpecialAction("oid=2587959", "summon", 0, 0);
        cm.npc_ChangeController(2074107, "oid=2587960", 510, 178, 9, 460, 560, 0, true, 500, false);
        cm.npc_SetSpecialAction("oid=2587960", "summon", 0, 0);
        cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
          cm.inGameDirectionEvent_AskAnswerTime(1400);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(3000);
            cm.effect_Text(["#fn黑体##fs18#鬼怪家#fs15##fn黑体#死路"], [100, 1500, 6, -50, -50, 1, 4, 0, 0, 0]);
          } else {
            if (status === V++) {
              cm.npc_SetForceMove("oid=2587959", -1, 50, 100);
              cm.sendNormalTalk_Bottom("我被饭勺打脸，忍饥挨饿的时候，大哥做了些什么！\r\n我怎么想都咽不下这口气！", 37, 2074106, false, true);
            } else {
              if (status === V++) {
                cm.npc_setForceFlip("oid=2587960", 1);
                cm.npc_SetForceMove("oid=2587960", -1, 50, 100);
                cm.sendNormalTalk_Bottom("等等，打你的人是你大嫂嘛，\r\n冷静，你先冷静一下！", 37, 2074107, true, true);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=2587959", -1, 50, 100);
                  cm.npc_setForceFlip("oid=2587960", 1);
                  cm.npc_SetForceMove("oid=2587960", -1, 50, 100);
                  cm.sendNormalTalk_Bottom("冷静？额……额额……我的头！", 37, 2074106, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("额啊啊啊！我实在是忍不了了！额啊啊！", 37, 2074106, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("等一下！", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_SetHideEffect(0);
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2587959"], [0, 0, 0, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/oh", "oid=2587960"], [0, 0, 0, 1, 0, 1, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("你什么情况？给我让开！！", 37, 2074106, false, true);
                        } else {
                          if (status === V++) {
                            cm.askMenu_Bottom("#face0#'你要记住，一定要解开#g宝玉所对应的感情#k。'\r\n#b(到底该说什么才好呢？)#k\r\n\r\n#g#L0#别打了，我们还是用对话来解决吧。#l\r\n#L1#对大哥做这种事好像不太合适吧。#l\r\n#L2#我是站在你这边的。#l\r\n#L3#我要用爱与正义的名义，绝不轻饶了你！#l", 37, 2074100);
                          } else {
                            if (status === V++) {
                              selectionLog[666] = e;
                              if (selectionLog[666] == 0) {
                                cm.sendNormalTalk_Bottom("别打了，我们还是用对话来解决吧。", 57, 0, false, true);
                              } else {
                                if (selectionLog[666] == 1) {
                                  cm.sendNormalTalk_Bottom("对大哥做这种事好像不太合适吧。", 57, 0, false, true);
                                } else if (selectionLog[666] == 2) {
                                  cm.sendNormalTalk_Bottom("我是站在你这边的。", 57, 0, false, true);
                                } else {
                                  cm.sendNormalTalk_Bottom("我要用爱与正义的名义，绝不轻饶了你！", 57, 0, false, true);
                                }
                              }
                            } else {
                              if (status === V++) {
                                if (selectionLog[666] == 0) {
                                  cm.sendNormalTalk_Bottom("什么狗屁对话！别搞笑了！", 37, 2074106, true, true);
                                } else {
                                  if (selectionLog[666] == 1) {
                                    cm.sendNormalTalk_Bottom("什么狗屁道理！别想吓唬我！", 37, 2074106, true, true);
                                  } else if (selectionLog[666] == 2) {
                                    cm.sendNormalTalk_Bottom("什么狗屁玩意！别想糊弄我！", 37, 2074106, true, true);
                                  } else {
                                    cm.sendNormalTalk_Bottom("什么狗屁玩意！别吓唬人了！", 37, 2074106, true, true);
                                  }
                                }
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#b(话是说不通了，还是先拦下来吧。)#k", 57, 0, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                  } else if (status === V++) {
                                    cm.dispose();
                                    cm.warp(224005000, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;
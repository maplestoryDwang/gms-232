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
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(60);
    } else {
      if (status === V++) {
        cm.teachSkill(60011219, 0, -1);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.sendNormalTalk("唉……虽然回到了据点，我会变成什么样啊？", 17, 0, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(2);
            cm.sendNormalTalk("呜呜……我怎么这么倒霉？", 17, 0, false, true);
          } else {
            if (status === V++) {
              cm.effect_Direction("Effect/Direction10.img/angelicTuto/Scene1", 0, 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(900);
            } else {
              if (status === V++) {
                cm.npc_ChangeController(3000140, "oid=1226884", -400, 0, 1, -450, -350, 0, true, 0, false);
                cm.npc_SetSpecialAction("oid=1226884", "summon", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(30);
              } else {
                if (status === V++) {
                  cm.npc_SetForceMove("oid=1226884", 1, 170, 100);
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/story/BalloonMsg1/0"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(690);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(1);
                    cm.inGameDirectionEvent_AskAnswerTime(210);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(0);
                      cm.sendNormalTalk("啊！是卡伊尔。听说你成了狂龙战士？真帅。", 17, 0, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#h0#，我找你好久，你没事吧？", 1, 3000140, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("我？找我做什么？是因为这个吗？虽然手上附着奇怪的东西，不过没什么事。", 17, 3000140, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("你不也清楚嘛，我总是这么倒霉，哈哈哈。", 17, 3000140, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk('#h0#...', 1, 3000140, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("我还以为这东西附在手上的话，我会获得魔力，看来我还是没那么走运。本想着保护圣物，结果反而把它弄没了……我都觉得自己太没用了。", 17, 3000140, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("贝德罗斯也很担心你。", 1, 3000140, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("#p3000007#也很担心我？因为我又没本事强出头，害你们担心了。对不起，我没事。你们别担心。", 17, 3000140, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("嗯，我还有事，先走了。", 17, 3000140, true, true);
                                    } else if (status === V++) {
                                      cm.inGameDirectionEvent_MoveAction(1);
                                      cm.curNodeEventEnd(true);
                                      cm.npc_LeaveField("oid=1226884");
                                      cm.dispose();
                                      cm.warp(940011090, 0, false);
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
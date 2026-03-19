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
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/tuto/BalloonMsg1/2"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(1200);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("哎，看起来挺漂亮的，别不好意思。拥有特殊力量的正义勇士就得有一身漂亮制服。", 1, 3000132, false, true);
        } else {
          if (status === V++) {
            cm.effect_PlayMusic("Voice.img/Angelic_F/1");
            cm.sendNormalTalk("这……这好像不太适合我……", 17, 3000132, true, true);
          } else {
            if (status === V++) {
              cm.npc_ChangeController(3000119, "oid=1227131", 150, 220, 7, 100, 200, 1, true, 0, false);
              cm.npc_SetSpecialAction("oid=1227131", 'summon', 0, 0);
              cm.inGameDirectionEvent_AskAnswerTime(90);
            } else {
              if (status === V++) {
                cm.npc_ChangeController(3000115, "oid=1227132", 250, 220, 8, 200, 300, 1, true, 0, false);
                cm.npc_SetSpecialAction("oid=1227132", "summon", 0, 0);
                cm.inGameDirectionEvent_AskAnswerTime(90);
              } else {
                if (status === V++) {
                  cm.npc_ChangeController(3000111, "oid=1227133", 350, 220, 10, 300, 400, 1, true, 0, false);
                  cm.npc_SetSpecialAction("oid=1227133", "summon", 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(90);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("在那儿！那孩子手上戴的好像就是圣物。", 1, 3000119, false, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("我说，非得把那东西抢过来吗？圣物已经在圣殿里消失了啊。", 1, 3000115, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("少废话！必须得把那东西抢过来，这样毁掉圣物才能成为我们的功劳！", 1, 3000119, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("孩子，不好意思，你能不能把手上戴的圣物交给我们啊？", 1, 3000111, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("你们就是那时要偷圣物的坏祭司！", 17, 3000111, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("没错，我们正是坏人，所以快把你手上的圣物交出来，我们就不害你。", 1, 3000111, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("这东西我摘不下来。克里昂说现在还没办法摘掉它！", 17, 3000111, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("没法子啦。先把这孩子带走吧！", 1, 3000119, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("#h0#！快使用我给你的力量，打败他们！", 1, 3000132, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("我可以吗？", 17, 3000132, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/tuto/BalloonMsg1/3"], [900, 30, -70, 0, 0, 0, 0, 0, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(900);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("叽叽咕咕说什么啊！弟兄们！走！", 1, 3000119, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                          } else if (status === V++) {
                                            cm.npc_LeaveField("oid=1227131");
                                            cm.npc_LeaveField("oid=1227132");
                                            cm.spawnMobLimit(9300560, 1, 150, 239, 100);
                                            cm.spawnMobLimit(9300561, 1, 250, 239, 100);
                                            cm.spawnMobLimit(9300562, 1, 350, 239, 100);
                                            cm.playerMessage(-1, "反复按CTRL键可以进行攻击。");
                                            cm.playerMessage(5, "反复按CTRL键可以进行攻击。");
                                            cm.fieldEffect_ScreenMsg("lightning/screenMsg/0");
                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                            cm.setInGameDirectionMode(false, true, false);
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
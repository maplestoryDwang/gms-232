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
      cm.npc_ChangeController(2470018, "oid=27647", 417, -465, 1, 372, 467, 1, false, 0, false);
      cm.npc_ChangeController(2470023, "oid=2500299", 135, -459, 14, 85, 185, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2500299", "summon", 0, 0);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#face10#……好黑。", 41, 2400006, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#face11#第一次见到这么黑的女神的神殿…… 女神出了什么事情了吗？", 41, 2400005, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#face10#那边……", 41, 2400006, true, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(0, 250, 580, -450);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(6175);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#r阿卡伊勒#k，这样见到你，真是遗憾啊……", 33, 2470022, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("我不是跟你说过了吗？接受黑魔法师的提议…… 那样的话，我也不会对女神你做出这么无礼的事情了。", 33, 2470023, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("……你是打算进入我的梦，蒙上我的眼…… 最后除掉我吗？", 33, 2470022, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("我不会除掉你。因为这个世界需要时间超越者。我只会将你封印。", 33, 2470023, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("封印…… 在那之后呢？", 33, 2470022, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("……能看到未来的女神居然问我以后将会发生什么事，看来我的策略很成功啊。不要担心。所有的事情都会按照黑魔法师的意思进行。", 33, 2470023, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("好了，那么…… 现在结束这一切吧？", 33, 2470023, true, true);
                            } else {
                              if (status === V++) {
                                cm.npc_SetSpecialAction("oid=2500299", "resolve", 0, 1);
                                cm.inGameDirectionEvent_AskAnswerTime(5000);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_PushMoveInfo(0, 300, -962, -450);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(5146);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("#face1#那人是…… 黑魔法师的军团长吗！？", 41, 2400005, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("#face1#他准备攻击女神！", 41, 2400006, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("#face1#……该死的！快阻止他吧！", 41, 2400005, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.npc_LeaveField("oid=2500299");
                                            cm.spawnMobLimit(9300797, 1, 135, -450, 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else if (status === V++) {
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;
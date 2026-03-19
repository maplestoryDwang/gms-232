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
      cm.npc_ChangeController(1106003, 'oid=227397', 766, 65, 13, 716, 816, 1, false, 0, false);
      cm.npc_ChangeController(1106001, "oid=227398", 682, 65, 15, 632, 732, 1, false, 0, false);
      cm.npc_ChangeController(1106005, "oid=227399", -369, 65, 8, -419, -319, 1, false, 0, false);
      cm.npc_ChangeController(1106006, "oid=227400", 907, 65, 14, 857, 957, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.setStandAloneMode(true);
      cm.playerMessage(-1, "杂货店后院");
      cm.inGameDirectionEvent_头顶图片(["Effect/Direction7.img/effect/tuto/step0/4", "oid=16777215"], [2000, 0, -100, 1, 0, 156, 0, 0]);
      cm.inGameDirectionEvent_AskAnswerTime(2000);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.emotion(6, 10000);
        cm.sendNormalTalk("呃！真的有人。那个少年是谁？", 3, 1106005, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(2);
          cm.inGameDirectionEvent_MoveAction(0);
          cm.sendNormalTalk("你是谁？迷路了吗？", 3, 1106005, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("我找了你好久。终于找到了。拥有光之命运的人。", 5, 1106001, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("你说什么？光之命运？", 3, 1106005, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("要有礼貌，少年！这位大人是很高贵的！", 5, 1106003, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("啊！你是不久前到店里来的……对了！我想起来了。你问过我认不认识库洛姆，对吧？不久前我在商店的阁楼里发现了他寄来的信。虽然不知道是不是那个人……但林伯特也许认识那个人。等林伯特回来之后……", 3, 1106005, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("库洛姆……他和林伯特没什么关系，倒是和你有关。他就是你的父亲……", 5, 1106001, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("嗯？你说什么？……你说什么？我不记得我父亲是谁。在我很小的时候，他就离开了……", 3, 1106005, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("他并不是抛弃了你。你的父亲，光之骑士库洛姆因为失去了心爱的妻子而陷入了黑暗。光明和黑暗的差异其实只在一线之间。在黑暗波及到你之前，他把你送到了这里。最终他没能战胜黑暗，最后死去了……", 5, 1106001, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("他救了我？不对，我的人生充满了黑暗。我一直都不知道自己的名字，被关在这个小店里，在心中默默地等待着永远不会回来的父亲。", 3, 1106005, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("光明是从黑暗中诞生的。就像剑的双刃一样……因为一直在黑暗中，现在你才能变成光。跟我走吧。到属于你的地方去。", 5, 1106001, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("等等，女皇陛下。我还不能完全信任这个少年。必须确认一下他是否有成为光之骑士的资格。", 5, 1106003, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("南哈特，你还在怀疑吗……好吧。我同意你的方法，但是不能让他受伤。", 5, 1106001, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("等等！你想干什么？", 3, 1106005, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.eventSKill(0);
                                      cm.forceCompleteQuest(20034);
                                      cm.sendNormalTalk("稍等，女皇。我仍然不太相信这位少年。看来得确认一下他是否有资格成为真正的光之骑士。", 5, 1106003, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("南哈特仍然保持怀疑…好的，我同意采用你的方式。但是，不能伤到他。", 5, 1106001, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("等一下！你们现在在做什么？", 3, 1106003, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("我想确认一下你的潜力。请让我看看你的实力吧。", 5, 1106003, true, true);
                                          } else if (status === V++) {
                                            cm.forceStartQuest(20035, '');
                                            cm.spawnMobLimit(9001050, 1, 200, 50, 100);
                                            cm.spawnMobLimit(9001050, 1, 200, 50, 100);
                                            cm.spawnMobLimit(9001050, 1, 200, 50, 100);
                                            cm.spawnMobLimit(9001050, 1, 200, 50, 100);
                                            cm.spawnMobLimit(9001050, 1, 200, 50, 100);
                                            cm.spawnMobLimit(9001050, 1, 200, 50, 100);
                                            cm.spawnMobLimit(9001050, 1, 200, 50, 100);
                                            cm.spawnMobLimit(9001050, 1, 200, 50, 100);
                                            cm.spawnMobLimit(9001050, 1, 200, 50, 100);
                                            cm.spawnMobLimit(9001050, 1, 200, 50, 100);
                                            cm.spawnMobLimit(9001050, 1, 200, 50, 100);
                                            cm.teachSkill(50001000, 3, 0);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.setStandAloneMode(false);
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
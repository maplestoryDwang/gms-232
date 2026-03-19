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
      cm.setInGameDirectionMode(true, false, false);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(1);
        cm.inGameDirectionEvent_AskAnswerTime(30);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(0);
          cm.sendNormalTalk("#b#h0##k，现在开始，我来简单说明一下冲锋队长的技能。", 1, 1090000, false, true);
        } else {
          if (status === V++) {
            cm.askMenu("我先问你一个问题。你知道下面哪个是冲锋队长的基本技能吗？\r\n\r\n#b#L0#能量获得#l\r\n#L1#祈祷众生#l\r\n#L2#元素吸收#l", 1, 1090000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("很好，答对了！ #b能量获得#k!", 1, 1090000, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/skillUI/5100015"], [0, -150, -150, 0, 0, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(2520);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("看到了吧？冲锋队长在攻击时可以积累能量，就是在这种窗口出现的时候进行积累。", 1, 1090000, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/charge/0", "oid=0"], [500000, 400, -200, 1, 0, 1, 0, 1, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(2520);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("次数提高的话，可以学会多种攻击技能。包括一些可在能量充满时变化成更加强大攻击技能的技能。", 1, 1090000, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/skillUI/5121007"], [0, -150, -150, 0, 0, 0, 0, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(2520);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("使用一次试试吧。我会召唤一只怪物，供你练习。", 1, 1090000, false, true);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(1072009, "oid=1243549", -55, 120, 11, -105, -5, 0, false, 0, false);
                            cm.npc_SetSpecialAction("oid=1243549", "summon", 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(120);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("那么，用激怒拳进行攻击吧！", 1, 1090000, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_OneTimeAction(413, 0);
                                cm.inGameDirectionEvent_头顶图片(["Skill/512.img/skill/5121007/effect"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Skill/512.img/skill/5121007/effect0"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                cm.fieldEffect_PlayFieldSound("advTutorial/5121007/Use", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(90);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Skill/512.img/skill/5121007/hit/0", "oid=1243549"], [0, 0, 10, 1, -50, 1, 0, 0, 0]);
                                  cm.fieldEffect_PlayFieldSound("advTutorial/5121007/Hit", 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(120);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/charge/1", "oid=0"], [500000, 400, -200, 1, 1, 1, 0, 1, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/charge/2", "oid=0"], [500000, 400, -200, 1, 2, 1, 0, 1, 0]);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/charge/3", "oid=0"], [500000, 400, -200, 1, 3, 1, 0, 1, 0]);
                                        cm.inGameDirectionEvent_AskAnswerTime(1000);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("现在，能量已经充满了。再用激怒拳进行攻击吧！", 1, 1090000, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_OneTimeAction(413, 0);
                                            cm.inGameDirectionEvent_头顶图片(["Skill/512.img/skill/5121020/effect"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                            cm.inGameDirectionEvent_头顶图片(["Skill/512.img/skill/5121020/effect0"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                            cm.fieldEffect_PlayFieldSound("advTutorial/5121020/Use", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(90);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Skill/512.img/skill/5121020/hit/0", "oid=1243549"], [0, 0, 10, 1, -50, 1, 0, 0, 0]);
                                              cm.fieldEffect_PlayFieldSound("advTutorial/5121020/Hit", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(120);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("怎么样！是不是变得完全不一样了呢？能量充满时，能量会代替魔量进行消耗，因此可以使用更加强大的技能。", 1, 1090000, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.askYesNo("那么，冲锋队长技能的学习就到此结束了。如果还有疑问或想重新学习的话，点击“否”。\r\n#r(点击“是”，返回之前所在的地图。)#k", 1, 1090000);
                                                } else if (status === V++) {
                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                  cm.setInGameDirectionMode(false, true, false);
                                                  cm.forceCompleteQuest(32230);
                                                  cm.npc_LeaveField("oid=1243549");
                                                  cm.dispose();
                                                  cm.warp(120000101, 0, false);
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
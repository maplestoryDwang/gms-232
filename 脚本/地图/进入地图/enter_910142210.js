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
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(800);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.sendNormalTalk("#b#h0##k, 现在开始，我来简要说明一下火毒魔导师的技能。", 1, 1032001, false, true);
      } else {
        if (status === V++) {
          cm.askMenu("我先提一个问题。你知道以下哪个是火毒魔导师的基本技能吗？\r\n\r\n#b#L0#元素吸收#l\r\n#L1#斗气集中#l\r\n#L2#远近效应#l", 1, 1032001);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("很好，答对了！ #b元素吸收#k！是一种可以让自己变强，并给周围的敌人造成持续伤害的实用技能！", 1, 1032001, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/skillUI/2100009"], [0, 130, -150, 0, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(2500);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("基本技能非常重要……不过，你知道火毒魔导师技能中#r最强大的技能#k是什么吗？", 3, 1032001, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("那么，我来告诉你！就是叫做#r炙焰笼罩#k的技能。", 1, 1032001, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/skillUI/2121011"], [0, 130, -150, 0, 0, 0, 0, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(2500);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("你想试一试吗？我会召唤一只怪物让你进行练习。", 1, 1032001, false, true);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(1072009, "oid=1236600", -966, 1326, 52, -1016, -916, 0, false, 0, false);
                        cm.npc_SetSpecialAction("oid=1236600", "summon", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(120);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk('现在，进行攻击吧！', 1, 1032001, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_OneTimeAction(661, 0);
                            cm.inGameDirectionEvent_头顶图片(["Skill/212.img/skill/2121011/effect"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                            cm.fieldEffect_PlayFieldSound("advTutorial/2121011/Use", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(90);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Skill/212.img/skill/2121011/hit/0"], [0, 0, 10, 1, 1236600, 0, 0, 0, 0]);
                              cm.fieldEffect_PlayFieldSound("advTutorial/2121011/Hit", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(120);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Skill/212.img/skill/2121011/special/0", "oid=1236600"], [30000, 0, -20, 1, 0, 1, 0, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Skill/212.img/skill/2121011/special/1", "oid=1236600"], [30000, 0, -20, 1, 0, 1, 0, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Skill/212.img/skill/2121011/special/2", "oid=1236600"], [30000, 0, -20, 1, 0, 1, 0, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Skill/211.img/skill/2111003/tile/0"], [10000, -20, 80, 0, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Skill/211.img/skill/2111003/tile/1"], [10000, 20, 80, 0, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Skill/211.img/skill/2111003/tile/2"], [10000, -50, 50, 0, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Skill/211.img/skill/2111003/tile/3"], [10000, 50, 50, 0, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Skill/211.img/skill/2111003/tile/4"], [10000, -90, 80, 0, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Skill/211.img/skill/2111003/tile/5"], [10000, 90, 80, 0, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Skill/211.img/skill/2111003/tile/6"], [10000, -125, 0, 0, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Skill/211.img/skill/2111003/tile/7"], [10000, 125, 30, 0, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Skill/211.img/skill/2111003/tile/8"], [10000, 0, -80, 0, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Skill/211.img/skill/2111003/tile/0"], [10000, -20, -80, 0, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Skill/211.img/skill/2111003/tile/1"], [10000, 20, -50, 0, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Skill/211.img/skill/2111003/tile/2"], [10000, -50, -50, 0, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Skill/211.img/skill/2111003/tile/3"], [10000, 50, -80, 0, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Skill/211.img/skill/2111003/tile/4"], [10000, -90, -80, 0, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Skill/211.img/skill/2111003/tile/5"], [10000, 90, -50, 0, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Skill/211.img/skill/2111003/tile/6"], [10000, -125, -30, 0, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Skill/211.img/skill/2111003/tile/7"], [10000, 125, -30, 0, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Skill/211.img/skill/2111003/tile/8"], [10000, 0, 0, 0, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Skill/211.img/skill/2111003/tile/6"], [10000, -50, 0, 0, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Skill/211.img/skill/2111003/tile/6"], [10000, 50, 0, 0, 0, 0, 0, 0, 0]);
                                cm.sendNormalTalk("使用炙焰笼罩的话，就会被叫做致命毒雾的#b毒雾#k所笼罩。此时！可以趁机使用的技能就是……", 1, 1032001, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/skillUI/2121003"], [0, 130, -150, 0, 0, 0, 0, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(2520);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("使用#b迷雾爆发#k的话，毒雾就会爆炸！那么，快试试吧！", 1, 1032001, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_OneTimeAction(307, 0);
                                      cm.inGameDirectionEvent_头顶图片(["Skill/212.img/skill/2121003/effect"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                      cm.inGameDirectionEvent_AskAnswerTime(120);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Skill/212.img/skill/2121003/effect2"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                        cm.fieldEffect_PlayFieldSound("advTutorial/2121003/Use", 100);
                                        cm.fieldEffect_Tremble(0, 500, 30);
                                        cm.inGameDirectionEvent_头顶图片(["Skill/212.img/skill/2121003/hit/0"], [0, 0, 0, 1, 1236600, 0, 0, 0, 0]);
                                        cm.fieldEffect_PlayFieldSound("advTutorial/2121003/Hit", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("怎么样？如此华丽又强大的技能！是不是很厉害啊？", 1, 1032001, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.askYesNo("那么，火毒魔导师技能的学习就到此为止了。如果还有疑问或想重新学习的话，点击“否”。\r\n#r(点击“是”，返回之前所在的地图。)#k", 1, 1032001);
                                          } else if (status === V++) {
                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.forceCompleteQuest(32223);
                                            cm.npc_LeaveField("oid=1236600");
                                            cm.dispose();
                                            cm.warp(101000003, 0, false);
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
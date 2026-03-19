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
      cm.inGameDirectionEvent_AskAnswerTime(1300);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.sendNormalTalk("#b#h0##k，现在开始，我来简单说明一下冰雷魔导师的技能。", 1, 1032001, false, true);
      } else {
        if (status === V++) {
          cm.askMenu("我先提一个问题。 你是否知道以下哪个是冰雷魔导师的基本技能呢？\r\n\r\n#b#L0#冰冻强袭#l\r\n#L1#元素吸收#l\r\n#L2#斗气集中#l", 1, 1032001);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("很好，答对了！ #b冰冻强袭#k！可通过叠加冻结伤害，提升爆击伤害。是非常有用的技能！", 1, 1032001, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/skillUI/2200011"], [0, 130, -150, 0, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(2520);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("那么，我来向你说明如何叠加冻结效果。首先得召唤一只怪物。", 1, 1032001, false, true);
              } else {
                if (status === V++) {
                  cm.npc_ChangeController(1072009, "oid=967731", -800, 1326, 28, -850, -750, 1, false, 0, false);
                  cm.npc_SetSpecialAction("oid=967731", "summon", 0, 0);
                  cm.inGameDirectionEvent_AskAnswerTime(120);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(2);
                    cm.inGameDirectionEvent_AskAnswerTime(30);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(0);
                      cm.sendNormalTalk("现在，进行攻击吧！", 1, 1032001, false, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_OneTimeAction(670, 0);
                        cm.inGameDirectionEvent_头顶图片(["Skill/220.img/skill/2201008/effect"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                        cm.inGameDirectionEvent_头顶图片(["Skill/220.img/skill/2201008/effect0"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                        cm.fieldEffect_PlayFieldSound("advTutorial/2201008/Use", 100);
                        cm.inGameDirectionEvent_AskAnswerTime(90);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Skill/220.img/skill/2201008/hit/0", "oid=967731"], [0, 0, 10, 1, -50, 1, 0, 0, 0]);
                          cm.fieldEffect_PlayFieldSound("advTutorial/2201008/Hit", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(120);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Skill/220.img/skill/2200011/mob/0", "oid=967731"], [10000, 0, -70, 1, 0, 1, 0, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(120);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("你有没有看到怪物头上的X1标记呢？再攻击几次的话，这个数字就会增加。", 1, 1032001, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_OneTimeAction(670, 0);
                                cm.inGameDirectionEvent_头顶图片(["Skill/220.img/skill/2201008/effect"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_头顶图片(["Skill/220.img/skill/2201008/effect0"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                cm.fieldEffect_PlayFieldSound("advTutorial/2201008/Use", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(90);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Skill/220.img/skill/2201008/hit/0", 'oid=967731'], [0, 0, 10, 1, -50, 1, 0, 0, 0]);
                                  cm.fieldEffect_PlayFieldSound("advTutorial/2201008/Hit", 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(120);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Skill/220.img/skill/2200011/mob/1", 'oid=967731'], [10000, 0, -70, 1, 0, 1, 0, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(120);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_OneTimeAction(670, 0);
                                      cm.inGameDirectionEvent_头顶图片(["Skill/220.img/skill/2201008/effect"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                      cm.inGameDirectionEvent_头顶图片(["Skill/220.img/skill/2201008/effect0"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                      cm.fieldEffect_PlayFieldSound("advTutorial/2201008/Use", 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(90);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Skill/220.img/skill/2201008/hit/0", 'oid=967731'], [0, 0, 10, 1, -50, 1, 0, 0, 0]);
                                        cm.fieldEffect_PlayFieldSound("advTutorial/2201008/Hit", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(120);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Skill/220.img/skill/2200011/mob/2", "oid=967731"], [10000, 0, -70, 1, 0, 1, 0, 0, 0]);
                                          cm.inGameDirectionEvent_AskAnswerTime(120);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_OneTimeAction(670, 0);
                                            cm.inGameDirectionEvent_头顶图片(["Skill/220.img/skill/2201008/effect"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                            cm.inGameDirectionEvent_头顶图片(["Skill/220.img/skill/2201008/effect0"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                            cm.fieldEffect_PlayFieldSound("advTutorial/2201008/Use", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(90);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Skill/220.img/skill/2201008/hit/0", "oid=967731"], [0, 0, 10, 1, -50, 1, 0, 0, 0]);
                                              cm.fieldEffect_PlayFieldSound("advTutorial/2201008/Hit", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(120);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Skill/220.img/skill/2200011/mob/3", "oid=967731"], [10000, 0, -70, 1, 0, 1, 0, 0, 0]);
                                                cm.inGameDirectionEvent_AskAnswerTime(120);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_OneTimeAction(670, 0);
                                                  cm.inGameDirectionEvent_头顶图片(["Skill/220.img/skill/2201008/effect"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                                  cm.inGameDirectionEvent_头顶图片(["Skill/220.img/skill/2201008/effect0"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                                  cm.fieldEffect_PlayFieldSound("advTutorial/2201008/Use", 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(90);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_头顶图片(["Skill/220.img/skill/2201008/hit/0", "oid=967731"], [0, 0, 10, 1, -50, 1, 0, 0, 0]);
                                                    cm.fieldEffect_PlayFieldSound("advTutorial/2201008/Hit", 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(120);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Skill/220.img/skill/2200011/mob/4", "oid=967731"], [10000, 0, -70, 1, 0, 1, 0, 0, 0]);
                                                      cm.inGameDirectionEvent_AskAnswerTime(120);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("你有没有看到增加的数字呢？攻击叠加数字越高的敌人，其受到的爆击伤害就越高！", 1, 1032001, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.askYesNo("那么，冰雷魔导师技能的学习就到此为止了。如果还有疑问或想重新学习的话，点击“否”。\r\n#r(点击“是”，返回之前所在的地图。)#k", 1, 1032001);
                                                        } else if (status === V++) {
                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                          cm.setInGameDirectionMode(false, true, false);
                                                          cm.forceCompleteQuest(32224);
                                                          cm.npc_LeaveField("oid=967731");
                                                          cm.dispose();
                                                          cm.warp(101000003, 4, false);
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
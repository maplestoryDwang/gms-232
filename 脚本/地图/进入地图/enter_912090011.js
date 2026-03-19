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
          cm.sendNormalTalk("#b#h0##k，现在开始，我来简单说明一下船长的技能。", 1, 1090000, false, true);
        } else {
          if (status === V++) {
            cm.askMenu("我先问你一个问题。你知道下面哪个是船长的基本技能吗？\r\n\r\n#b#L0#召唤船员#l\r\n#L1#极冻效果#l\r\n#L2#元素吸收#l", 1, 1090000);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("很好，答对了！是#b召唤船员#k!", 1, 1090000, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/skillUI/5201012"], [0, -150, -150, 0, 0, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(2520);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("看到了吧？船长可以召唤4名船员中的两名，共同作战！而且，次数越高船员也会变强！", 1, 1090000, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("怎么样，要不要召唤一次试试看呢？本来最多只能召唤2名，不过这次，我允许你一下子召唤全部的4名船员。", 1, 1090000, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Skill/521.img/skill/5210015/summon/summoned"], [1500, -100, 0, 0, 0, 0, 0, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Skill/521.img/skill/5210016/summon/summoned"], [1500, -200, 0, 0, 0, 0, 0, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Skill/521.img/skill/5210017/summon/summoned"], [1500, 100, 0, 0, 0, 0, 0, 0, 0]);
                      cm.inGameDirectionEvent_头顶图片(["Skill/521.img/skill/5210018/summon/summoned"], [1500, 200, 0, 0, 0, 0, 0, 0, 0]);
                      cm.fieldEffect_PlayFieldSound("advTutorial/5211011/Use", 100);
                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Skill/521.img/skill/5210015/summon/stand"], [2000, -100, 0, 0, 0, 0, 0, 0, 0]);
                        cm.inGameDirectionEvent_头顶图片(["Skill/521.img/skill/5210016/summon/stand"], [2000, -200, 0, 0, 0, 0, 0, 0, 0]);
                        cm.inGameDirectionEvent_头顶图片(["Skill/521.img/skill/5210017/summon/stand"], [2000, 100, 0, 0, 0, 0, 0, 0, 0]);
                        cm.inGameDirectionEvent_头顶图片(["Skill/521.img/skill/5210018/summon/stand"], [2000, 200, 0, 0, 0, 0, 0, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(2000);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_头顶图片(["Skill/521.img/skill/5210015/summon/die"], [0, -100, 0, 0, 0, 0, 0, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Skill/521.img/skill/5210016/summon/die"], [0, -200, 0, 0, 0, 0, 0, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Skill/521.img/skill/5210017/summon/die"], [0, 100, 0, 0, 0, 0, 0, 0, 0]);
                          cm.inGameDirectionEvent_头顶图片(["Skill/521.img/skill/5210018/summon/die"], [0, 200, 0, 0, 0, 0, 0, 0, 0]);
                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("基本技能非常重要……不过，你知道船长技能中#r最强大的技能#k吗？", 3, 1090000, false, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("那么，我来告诉你吧！那就是叫做#r爆头#k的技能。", 1, 1090000, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/skillUI/5221016"], [0, -150, -150, 0, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(2520);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("虽然是比较强的技能，可看上去非常普通对吧？不过在施展技能前，使用#r神速衔接#k增益的话，就可以瞬间造成非常强大的伤害。", 1, 1090000, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/skillUI/5221021"], [0, -150, -150, 0, 0, 0, 0, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(2520);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("使用一次试试吧。我会召唤一只怪物，供你练习。", 1, 1090000, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.npc_ChangeController(1072009, "oid=1240520", -55, 120, 11, -105, -5, 0, false, 0, false);
                                        cm.npc_SetSpecialAction("oid=1240520", 'summon', 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(120);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("神速衔接是#b在攻击时，以一定概率触发的增益#k。所以，使用速射类攻击技能的时候，可以保持得更久。", 1, 1090000, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_OneTimeAction(61, 0);
                                            cm.inGameDirectionEvent_头顶图片(["Skill/522.img/skill/5221021/special"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                            cm.fieldEffect_PlayFieldSound("advTutorial/5221021/Use", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("那么，现在，在激活的状态下#b再次按下神速衔接的话，可触发增益#k，攻击力极速提升！", 1, 1090000, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_OneTimeAction(61, 0);
                                                cm.inGameDirectionEvent_头顶图片(["Skill/522.img/skill/5221021/effect"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                                cm.fieldEffect_PlayFieldSound("advTutorial/5221021/Use", 100);
                                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("此时！用爆头进行攻击！", 1, 1090000, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_OneTimeAction(409, 0);
                                                    cm.inGameDirectionEvent_头顶图片(["Skill/522.img/skill/5221016/effect"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                                    cm.fieldEffect_PlayFieldSound("advTutorial/5221016/Use", 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(90);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Skill/522.img/skill/5221016/hit/0", "oid=1240520"], [0, 0, 10, 1, -50, 1, 0, 0, 0]);
                                                      cm.fieldEffect_PlayFieldSound("advTutorial/5221016/Hit", 100);
                                                      cm.inGameDirectionEvent_AskAnswerTime(120);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk("哈哈，怎么样？这是非常强大的技能吧！以后，也通过这种方式进行连击的话，就能成为更强大的船长！", 1, 1090000, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.askYesNo("那么，船长技能的学习就到此为止了。如果还有疑问或想重新学习的话，点击“否”。\r\n#r(点击“是”，返回之前所在的地图。)#k", 1, 1090000);
                                                        } else if (status === V++) {
                                                          cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                          cm.setInGameDirectionMode(false, true, false);
                                                          cm.forceCompleteQuest(32231);
                                                          cm.npc_LeaveField("oid=1240520");
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
      }
    }
  }
}
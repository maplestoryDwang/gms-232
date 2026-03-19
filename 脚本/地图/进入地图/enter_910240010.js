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
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.inGameDirectionEvent_AskAnswerTime(500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("那么，#b#h0#!#k！现在开始，我来简单说明一下英雄的技能。", 1, 1022000, false, true);
      } else {
        if (status === V++) {
          cm.askMenu("我先提一个问题！以下哪个是英雄的基本技能呢？\r\n\r\n#b#L0# 斗气集中#l\r\n#L1# 能量获得#l\r\n#L2# 召唤船员#l", 1, 1022000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("很好，答对了！利用#b斗气集中#k攻击敌人的话，可以积累斗气。", 1, 1022000, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/skillUI/1101013"], [0, -200, -250, 0, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(2520);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("攻击敌人的话，可以积累斗气。使用积累的斗气，可以施展更加强大的技能。", 1, 1022000, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("基本技能非常重要……不过，你能不能告诉我英雄技能中#r最强大的技能#k是什么？", 3, 1022000, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("那么，我来告诉你！就是叫做#r终极打击#k的技能。", 1, 1022000, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/skillUI/1121008"], [0, -200, -250, 0, 0, 0, 0, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(2520);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("那么，这里召唤出了一只怪物。", 1, 1022000, false, true);
                      } else {
                        if (status === V++) {
                          cm.npc_ChangeController(1072009, "oid=1216634", 1100, 1950, 9, 1050, 1150, 0, false, 0, false);
                          cm.npc_SetSpecialAction("oid=1216634", "summon", 0, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(120);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk('现在，进行攻击吧！', 1, 1022000, false, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_OneTimeAction(424, 0);
                              cm.inGameDirectionEvent_头顶图片(["Skill/112.img/skill/1121008/effect/0"], [840, 0, 0, 0, 0, 0, 0, 0, 0]);
                              cm.fieldEffect_PlayFieldSound("advTutorial/1121008/Use", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(90);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Skill/112.img/skill/1121008/hit/0", "oid=1216634"], [600, 0, 10, 1, -50, 1, 0, 0, 0]);
                                cm.fieldEffect_PlayFieldSound("advTutorial/1121008/Hit", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(120);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("很厉害吧？不过，这还不是全部！这个技能中隐藏着一个秘密。就是……葵花宝典!", 1, 1022000, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/skillUI/1121010"], [0, -200, -250, 0, 0, 0, 0, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(2520);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk('先使用葵花宝典……', 1, 1022000, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_OneTimeAction(62, 0);
                                        cm.inGameDirectionEvent_头顶图片(["Skill/112.img/skill/1121010/effect"], [2010, 0, 0, 0, 0, 0, 0, 0, 0]);
                                        cm.fieldEffect_PlayFieldSound("advTutorial/1121010/Use", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(2010);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("现在再使用终极打击的话！", 1, 1022000, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_OneTimeAction(695, 0);
                                            cm.inGameDirectionEvent_头顶图片(["Skill/112.img/skill/1120017/effect/0"], [840, 0, 0, 0, 0, 0, 0, 0, 0]);
                                            cm.fieldEffect_PlayFieldSound("advTutorial/1120017/Use", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(90);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Skill/112.img/skill/1120017/hit/0", "oid=1216634"], [600, 0, 10, 1, -500, 1, 0, 0, 0]);
                                              cm.fieldEffect_PlayFieldSound("advTutorial/1120017/Hit", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(120);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("哈哈哈！怎么样！虽是相同的技能可威力却变得非常惊人了吧！你是不是很惊讶呢？", 1, 1022000, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.askYesNo("那么，英雄技能的学习就到此为止了。如果还有疑问或想重新学习的话，点击“否”……\r\n#r(点击“是”，返回之前所在的地图。)#k", 1, 1022000);
                                                } else if (status === V++) {
                                                  cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                  cm.setInGameDirectionMode(false, true, false);
                                                  cm.forceCompleteQuest(32220);
                                                  cm.npc_LeaveField("oid=1216634");
                                                  cm.dispose();
                                                  cm.warp(102000003, 5, false);
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
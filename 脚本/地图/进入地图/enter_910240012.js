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
        cm.sendNormalTalk("那么，#b#h0#!#k！现在开始，我来简单说明一下黑骑士的技能。", 1, 1022000, false, true);
      } else {
        if (status === V++) {
          cm.askMenu("我先提一个问题！你能否告诉我，以下哪个是黑骑士的技能呢？\r\n\r\n#b#L0# 灵魂助力#l\r\n#L1# 护甲消融#l\r\n#L2# 火凤凰#l", 1, 1022000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("很好，答对了！ 召唤#b灵魂助力#k后，可以获得增益、攻击、治疗、必杀技等多种帮助！", 1, 1022000, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/skillUI/1301013"], [0, -200, -250, 0, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(2520);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("基本技能非常重要……不过，你能告诉我黑骑士技能中#r最强大的技能#k是什么吗？", 3, 1022000, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("那么，我来告诉你吧！就是叫做#r神枪降临#k的技能。", 1, 1022000, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/skillUI/1321013"], [0, -200, -250, 0, 0, 0, 0, 0, 0]);
                    cm.inGameDirectionEvent_AskAnswerTime(2520);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("你想试一试吗？我会召唤一只怪物让你进行练习。", 1, 1022000, false, true);
                    } else {
                      if (status === V++) {
                        cm.npc_ChangeController(1072009, "oid=1199198", 1100, 1950, 9, 1050, 1150, 0, false, 0, false);
                        cm.npc_SetSpecialAction("oid=1199198", "summon", 0, 0);
                        cm.inGameDirectionEvent_AskAnswerTime(120);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk('现在，进行攻击吧！', 1, 1022000, false, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_OneTimeAction(652, 0);
                            cm.inGameDirectionEvent_头顶图片(["Skill/132.img/skill/1321013/effect"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                            cm.fieldEffect_PlayFieldSound("advTutorial/1321013/Use", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(90);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Skill/132.img/skill/1321013/hit/0", "oid=1199198"], [600, 0, 10, 1, -50, 1, 0, 0, 0]);
                              cm.fieldEffect_PlayFieldSound("advTutorial/1321013/Hit", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(120);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("是不是很厉害啊？不过，这里隐藏着一个秘密。那就是……", 1, 1022000, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/skillUI/1321015"], [0, -200, -250, 0, 0, 0, 0, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(2520);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("利用#b龙之献祭#k吸收灵魂助力，可以使神枪降临的冷却时间在一定时间内无效！", 1, 1022000, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("先召唤灵魂助力……", 1, 1022000, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_OneTimeAction(61, 0);
                                        cm.inGameDirectionEvent_头顶图片(["Skill/130.img/skill/1301013/summon/summoned"], [0, 100, 0, 0, 0, 0, 0, 0, 0]);
                                        cm.fieldEffect_PlayFieldSound("advTutorial/1301013/Use", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_头顶图片(["Skill/130.img/skill/1301013/summon/move"], [1440, 100, 0, 0, 0, 0, 0, 0, 0]);
                                          cm.sendNormalTalk("现在用龙之献祭吸收灵魂助力……", 1, 1022000, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_OneTimeAction(61, 0);
                                            cm.inGameDirectionEvent_头顶图片(["Skill/130.img/skill/1301013/summon/attack3"], [0, 100, 0, 0, 0, 0, 0, 0, 0]);
                                            cm.fieldEffect_PlayFieldSound("advTutorial/1301013/Use", 100);
                                            cm.inGameDirectionEvent_AskAnswerTime(120);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_OneTimeAction(653, 0);
                                              cm.inGameDirectionEvent_头顶图片(["Skill/132.img/skill/1321015/effect"], [0, 100, 0, 0, 0, 0, 0, 0, 0]);
                                              cm.fieldEffect_PlayFieldSound("advTutorial/1321015/Use", 100);
                                              cm.inGameDirectionEvent_AskAnswerTime(120);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("尽情施展神枪降临吧！", 1, 1022000, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_OneTimeAction(652, 0);
                                                  cm.inGameDirectionEvent_头顶图片(["Skill/132.img/skill/1321013/effect"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                                  cm.fieldEffect_PlayFieldSound("advTutorial/1321013/Use", 100);
                                                  cm.inGameDirectionEvent_AskAnswerTime(90);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_头顶图片(["Skill/132.img/skill/1321013/hit/0", "oid=1199198"], [0, 0, 10, 1, -50, 1, 0, 0, 0]);
                                                    cm.fieldEffect_PlayFieldSound("advTutorial/1321013/Hit", 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_OneTimeAction(652, 0);
                                                      cm.inGameDirectionEvent_头顶图片(["Skill/132.img/skill/1321013/effect"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                                      cm.fieldEffect_PlayFieldSound("advTutorial/1321013/Use", 100);
                                                      cm.inGameDirectionEvent_AskAnswerTime(90);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Skill/132.img/skill/1321013/hit/0", "oid=1199198"], [0, 0, 10, 1, -50, 1, 0, 0, 0]);
                                                        cm.fieldEffect_PlayFieldSound("advTutorial/1321013/Hit", 100);
                                                        cm.inGameDirectionEvent_AskAnswerTime(300);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_OneTimeAction(652, 0);
                                                          cm.inGameDirectionEvent_头顶图片(["Skill/132.img/skill/1321013/effect"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                                          cm.fieldEffect_PlayFieldSound("advTutorial/1321013/Use", 100);
                                                          cm.inGameDirectionEvent_AskAnswerTime(90);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_头顶图片(["Skill/132.img/skill/1321013/hit/0", "oid=1199198"], [0, 0, 10, 1, -50, 1, 0, 0, 0]);
                                                            cm.fieldEffect_PlayFieldSound("advTutorial/1321013/Hit", 100);
                                                            cm.inGameDirectionEvent_AskAnswerTime(300);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_OneTimeAction(652, 0);
                                                              cm.inGameDirectionEvent_头顶图片(["Skill/132.img/skill/1321013/effect"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                                              cm.fieldEffect_PlayFieldSound("advTutorial/1321013/Use", 100);
                                                              cm.inGameDirectionEvent_AskAnswerTime(90);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_头顶图片(["Skill/132.img/skill/1321013/hit/0", "oid=1199198"], [0, 0, 10, 1, -50, 1, 0, 0, 0]);
                                                                cm.fieldEffect_PlayFieldSound("advTutorial/1321013/Hit", 100);
                                                                cm.inGameDirectionEvent_AskAnswerTime(300);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.inGameDirectionEvent_OneTimeAction(652, 0);
                                                                  cm.inGameDirectionEvent_头顶图片(["Skill/132.img/skill/1321013/effect"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                                                  cm.fieldEffect_PlayFieldSound("advTutorial/1321013/Use", 100);
                                                                  cm.inGameDirectionEvent_AskAnswerTime(90);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_头顶图片(["Skill/132.img/skill/1321013/hit/0", "oid=1199198"], [0, 0, 10, 1, -50, 1, 0, 0, 0]);
                                                                    cm.fieldEffect_PlayFieldSound("advTutorial/1321013/Hit", 100);
                                                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk("哈哈哈！怎么样！那么强的技能竟然没有冷却时间！是不是很厉害？", 1, 1022000, false, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.askYesNo("那么，黑骑士技能的学习就到此为止了。如果还有疑问或想重新学习的话，点击“否”。\r\n#r(点击“是”，返回之前所在的地图。)#k", 1, 1022000);
                                                                      } else if (status === V++) {
                                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                                        cm.setInGameDirectionMode(false, true, false);
                                                                        cm.forceCompleteQuest(32222);
                                                                        cm.npc_LeaveField("oid=1199198");
                                                                        cm.dispose();
                                                                        cm.warp(102000003, 6, false);
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
            }
          }
        }
      }
    }
  }
}
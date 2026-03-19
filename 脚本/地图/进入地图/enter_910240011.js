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
        cm.sendNormalTalk("那么，#b#h0#!#k！现在开始，我来简单说明一下圣骑士的技能。", 1, 1022000, false, true);
      } else {
        if (status === V++) {
          cm.askMenu("我先提一个问题！以下哪个是圣骑士的基本技能呢？\r\n\r\n#b#L0# 元素冲击#l\r\n#L1# 召唤船员#l\r\n#L2# 冰冻强袭#l", 1, 1022000);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("很好，答对了！利用各种冲击类技能攻击敌人的话，会积累#b元素冲击#k！", 1, 1022000, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/skillUI/1200014"], [0, -200, -250, 0, 0, 0, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(2520);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("元素冲击会在轮流使用4种不同的冲击类技能时自动积累。因此无需繁琐地进行开或关。", 1, 1022000, false, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/skillUI/1201011"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/skillUI/1201012"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/skillUI/1211008"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_头顶图片(["Effect/CharacterEff.img/advTutorial/skillUI/1221004"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(3000);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("那么，为了进行练习，我会为你召唤一只怪物，请轮流使用一次火焰冲击、寒冰冲击、雷鸣冲击、神圣冲击！", 1, 1022000, false, true);
                  } else {
                    if (status === V++) {
                      cm.npc_ChangeController(1072009, "oid=3693165", 1100, 1950, 9, 1050, 1150, 0, false, 0, false);
                      cm.npc_SetSpecialAction("oid=3693165", "summon", 0, 0);
                      cm.inGameDirectionEvent_AskAnswerTime(120);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk('现在，进行攻击吧！', 1, 1022000, false, true);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_OneTimeAction(708, 0);
                          cm.inGameDirectionEvent_头顶图片(["Skill/120.img/skill/1201011/effect/1"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                          cm.fieldEffect_PlayFieldSound("advTutorial/1201011/Use", 100);
                          cm.inGameDirectionEvent_AskAnswerTime(90);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Skill/120.img/skill/1201011/hit/0", "oid=3693165"], [0, 10, -20, 1, 0, 1, 0, 0, 0]);
                            cm.fieldEffect_PlayFieldSound("advTutorial/1201011/Hit", 100);
                            cm.inGameDirectionEvent_AskAnswerTime(1200);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_OneTimeAction(708, 0);
                              cm.inGameDirectionEvent_头顶图片(["Skill/120.img/skill/1201012/effect/1"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                              cm.fieldEffect_PlayFieldSound("advTutorial/1201012/Use", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(90);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_头顶图片(["Skill/120.img/skill/1201012/hit/0", "oid=3693165"], [0, 10, -20, 1, 0, 1, 0, 0, 0]);
                                cm.fieldEffect_PlayFieldSound("advTutorial/1201012/Hit", 100);
                                cm.inGameDirectionEvent_AskAnswerTime(1200);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_OneTimeAction(708, 0);
                                  cm.inGameDirectionEvent_头顶图片(["Skill/121.img/skill/1211008/effect/1"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                  cm.fieldEffect_PlayFieldSound("advTutorial/1211008/Use", 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(90);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Skill/121.img/skill/1211008/hit/0", "oid=3693165"], [0, 10, -20, 1, 0, 1, 0, 0, 0]);
                                    cm.fieldEffect_PlayFieldSound("advTutorial/1211008/Hit", 100);
                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_OneTimeAction(708, 0);
                                      cm.inGameDirectionEvent_头顶图片(["Skill/122.img/skill/1221004/effect/1"], [0, 0, 0, 0, 0, 0, 0, 0, 0]);
                                      cm.fieldEffect_PlayFieldSound("advTutorial/1221004/Use", 100);
                                      cm.inGameDirectionEvent_AskAnswerTime(90);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Skill/122.img/skill/1221004/hit/0", "oid=3693165"], [0, 10, -20, 1, 0, 1, 0, 0, 0]);
                                        cm.fieldEffect_PlayFieldSound("advTutorial/1221004/Hit", 100);
                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("哈哈哈！冲击攻击并不需要按照顺序发动，而是随意指定下一个技能就可以了！", 1, 1022000, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.askYesNo("那么，圣骑士技能的学习就到此为止了。如果还有疑问或想重新学习的话，点击“否”。\r\n#r(点击“是”，返回之前所在的地图。)#k", 1, 1022000);
                                          } else if (status === V++) {
                                            cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                            cm.setInGameDirectionMode(false, true, false);
                                            cm.forceCompleteQuest(32221);
                                            cm.npc_LeaveField("oid=3693165");
                                            cm.dispose();
                                            cm.warp(102000003, 0, false);
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
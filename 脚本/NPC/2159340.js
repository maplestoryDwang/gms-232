var status = -1;
function action(f, W, U) {
  if (f == 0) {
    status--;
  } else {
    status++;
  }
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNextNoESC("怎……怎么回事？这是怎么回事？！", 2159340);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg2/1"], [2000, 0, -100]);
        cm.inGameDirectionEvent_AskAnswerTime(900);
      } else {
        if (status === V++) {
          cm.sendNextSNoESC("(……到底是怎么回事？精气几乎全部消失了。旁边的东西……难道是这个东西吸走了我的力量……？！)");
        } else {
          if (status === V++) {
            cm.sendNextPrevNoESC("从……从来没听说过这种东西！", 2159341);
          } else {
            if (status === V++) {
              cm.sendNextPrevSNoESC("你们在干什么！为什么要这么做？你们身上感觉到的那种力量……是黑魔法师的力量？！");
            } else {
              if (status === V++) {
                cm.sendNextPrevNoESC("必须消灭掉那些家伙，才能避免被追杀！！", 2159340);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/16"], [2000, 0, -100]);
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_OneTimeAction(372, 0);
                    cm.inGameDirectionEvent_头顶图片(["Skill/3112.img/skill/31121006/effect"], [0, 0, 0, 0, 0]);
                    cm.fieldEffect_PlayFieldSound("demonSlayer/31121006");
                    cm.inGameDirectionEvent_AskAnswerTime(900);
                    cm.effect_Direction("Effect/Direction6.img/DemonTutorial/Scene3");
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/17"], [2000, 0, -100]);
                      cm.inGameDirectionEvent_AskAnswerTime(900);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_PlayFieldSound("demonSlayer/31121006h");
                        cm.npc_SetSpecialAction(2159340, "die");
                        cm.npc_SetSpecialAction(2159341, "die");
                        cm.inGameDirectionEvent_AskAnswerTime(990);
                      } else {
                        if (status === V++) {
                          cm.npc_LeaveField(2159340);
                          cm.npc_LeaveField(2159341);
                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/13"], [2000, 0, -100]);
                          cm.sendNextPrevNoESC("(很厉害的技术……他们到底是什么人……？)", 2159342);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_AskAnswerTime(1500);
                          } else {
                            if (status === V++) {
                              cm.sendNextSNoESC("(呃……好不容易除掉了他们，但是花费了太多的力量……这是哪里？肯定不是什么友好的地方。快点离开这里吧。)");
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_MoveAction(2);
                                cm.inGameDirectionEvent_AskAnswerTime(990);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_MoveAction(0);
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/12"], [2000, 0, -100]);
                                  cm.inGameDirectionEvent_AskAnswerTime(990);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/4", "oid=1056511"], [2000, 0, -100, 1, 0, 1, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_SetForceMove(2159342, -1, 150, 100);
                                      cm.sendNextSNoESC("(不好。意识有点模糊……要是现在遭到攻击，那就危险了！)");
                                    } else {
                                      if (status === V++) {
                                        cm.sendNextPrevNoESC("等等，镇静。我不想和你战斗。你是谁？为什么会在这种地方……？", 2159342);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNextPrevSNoESC("(在那个人身上感觉不到黑魔法师的气息。)\r\n别过来……！");
                                        } else {
                                          if (status === V++) {
                                            cm.sendNextPrevNoESC("你这样踉踉跄跄的，在说什么呢？你知道黑色之翼对你做了什么吗？旁边的机器是能量传送装置……黑色之翼在吸取你的力量。", 2159342);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNextPrevSNoESC("(能量传送装置……？是这个东西吗？黑色之翼是什么？搞不明白……到底是怎么回事？)");
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg0/13"], [2000, 0, -100]);
                                                cm.inGameDirectionEvent_AskAnswerTime(1500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNextSNoESC("你是谁？怎么会……咳咳，知道这种事情？");
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNextPrevNoESC("我是反抗者的工作员J，和黑色之翼是敌对关系。虽然不清楚具体的情况，但我不是坏人，不会和受伤的人战斗的。你的状态看上去很不好，需要我帮忙……", 2159342);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNextPrevSNoESC("怎么会这样……力量……现在……没有……");
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_OneTimeAction(379, 0);
                                                        if (cm.getPlayer().getGender() == 0) {
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/fallMale"], [0, 0, 0, 0, 0]);
                                                        } else {
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/fallFemale"], [0, 0, 0, 0, 0]);
                                                        }
                                                        cm.inGameDirectionEvent_AskAnswerTime(600);
                                                      } else if (status === V++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction6.img/effect/tuto/balloonMsg1/13", "oid=1056511"], [2000, 0, -100, 1, 0, 1, 0, 0]);
                                                        cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                      } else {
                                                        cm.npc_LeaveField(2159342);
                                                        cm.dispose();
                                                        cm.warp(931050030, 0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;
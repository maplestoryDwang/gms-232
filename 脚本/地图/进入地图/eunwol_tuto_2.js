var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false);
      cm.setStandAloneMode(true);
      cm.sendNextSNoESC("……啊，我就知道会这样。幻影和夜光法师只要一见面就要吵架。也是，他们的性格相差太大了，这也是没办法的事。");
    } else {
      if (status === V++) {
        cm.sendNextSNoESC("在我看来，他们的性格还挺相配的。一个太吵，一个太无趣，刚好可以平衡一下。");
      } else {
        if (status === V++) {
          cm.sendNextSNoESC("啊哈哈，那倒也是。不过估计他们本人听了之后一定不会高兴。啊，他们来了。");
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushMoveInfo(0, 200, 1100, 66);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1364);
            } else {
              if (status === V++) {
                cm.npc_ChangeController(2159442, 770, 50, 0);
                cm.npc_SetSpecialAction(2159442, 'summon');
                cm.inGameDirectionEvent_AskAnswerTime(100);
              } else {
                if (status === V++) {
                  cm.npc_ChangeController(2159443, 970, 50, 0);
                  cm.npc_SetSpecialAction(2159443, "summon");
                  cm.inGameDirectionEvent_AskAnswerTime(100);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(2159444, 1170, 50, 0);
                    cm.npc_SetSpecialAction(2159444, 'summon');
                    cm.inGameDirectionEvent_AskAnswerTime(300);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushMoveInfo(1, 200, 0, 0);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1364);
                      } else {
                        if (status === V++) {
                          cm.sendNextSNoESC("等等，我来处理。");
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_MoveAction(1);
                            cm.inGameDirectionEvent_PushMoveInfo(0, 180, 1100, 66);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_MoveAction(0);
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_OneTimeAction(412, 900);
                                  cm.inGameDirectionEvent_头顶图片(["Skill/512.img/skill/5121007/effect"], [900, -40, -25]);
                                  cm.inGameDirectionEvent_头顶图片(["Skill/512.img/skill/5121007/effect0"], [810, -40, -25]);
                                  cm.fieldEffect_PlayFieldSound("eunwolTuto/Use");
                                  cm.npc_SetSpecialAction(2159442, "hit");
                                  cm.npc_SetSpecialAction(2159443, "hit");
                                  cm.npc_SetSpecialAction(2159444, "hit");
                                  cm.inGameDirectionEvent_头顶图片(["Skill/512.img/skill/5121007/hit/0", "oid=2159442"], [0, -5, -50, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_头顶图片(["Skill/512.img/skill/5121007/hit/0", "oid=2159443"], [0, -5, -50, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_头顶图片(["Skill/512.img/skill/5121007/hit/0", "oid=2159444"], [0, -5, -50, 1, 0, 1, 0, 0]);
                                  cm.fieldEffect_PlayFieldSound("eunwolTuto/Hit");
                                  cm.inGameDirectionEvent_头顶图片(["Skill/512.img/skill/5121020/effect"], [900, -40, -25]);
                                  cm.inGameDirectionEvent_头顶图片(["Skill/512.img/skill/5121020/effect0"], [810, -40, -25]);
                                  cm.fieldEffect_PlayFieldSound("eunwolTuto/Use");
                                  cm.npc_SetSpecialAction(2159442, 'hit');
                                  cm.npc_SetSpecialAction(2159443, "hit");
                                  cm.npc_SetSpecialAction(2159444, "hit");
                                  cm.inGameDirectionEvent_头顶图片(["Skill/512.img/skill/5121020/hit/0", "oid=2159442"], [0, -5, -50, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_头顶图片(["Skill/512.img/skill/5121020/hit/0", "oid=2159443"], [0, -5, -50, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_头顶图片(["Skill/512.img/skill/5121020/hit/0", "oid=2159444"], [0, -5, -50, 1, 0, 1, 0, 0]);
                                  cm.fieldEffect_PlayFieldSound("eunwolTuto/Hit");
                                  cm.inGameDirectionEvent_AskAnswerTime(600);
                                } else {
                                  if (status === V++) {
                                    cm.npc_SetSpecialAction(2159442, "die");
                                    cm.npc_SetSpecialAction(2159443, "die");
                                    cm.npc_SetSpecialAction(2159444, "die");
                                    cm.inGameDirectionEvent_AskAnswerTime(2100);
                                  } else {
                                    if (status === V++) {
                                      cm.npc_LeaveField(2159442);
                                      cm.npc_LeaveField(2159443);
                                      cm.npc_LeaveField(2159444);
                                      cm.inGameDirectionEvent_AskAnswerTime(800);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_MoveAction(2);
                                        cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(30);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_MoveAction(0);
                                            cm.inGameDirectionEvent_AskAnswerTime(500);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNextSNoESC("你打算一直待在这里吗？");
                                            } else {
                                              if (status === V++) {
                                                cm.sendNextSNoESC("嗯，必须有人守着这个路口。反正现在的状态也不是黑魔法师的对手。");
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNextSNoESC("那就先进去吧。……让我看看。");
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNextSNoESC('嗯！');
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_MoveAction(2);
                                                      cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_MoveAction(0);
                                                        cm.inGameDirectionEvent_AskAnswerTime(100);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_SetHideEffect(1);
                                                          cm.fieldEffect_InsertCanvas(1, 200, 0, 0, 0, 1000, 0);
                                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_Monologue("\r\n战神从他的背影中感到一种不祥之兆。", 0);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_Monologue("\r\n就好似再也看不到了一样......#fs35#一种预感#fs20#或者#fs35#直觉。", 0);
                                                            } else if (status === V++) {
                                                              cm.inGameDirectionEvent_SetHideEffect(0);
                                                              cm.forceStartQuest(38900, '1');
                                                              cm.curNodeEventEnd(true);
                                                              cm.setInGameDirectionMode(false, true);
                                                              cm.setStandAloneMode(false);
                                                              cm.warp(927030020, 0);
                                                              cm.dispose();
                                                            } else {
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
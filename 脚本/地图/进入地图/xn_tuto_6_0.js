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
      cm.setInGameDirectionMode(true, true, false);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(2159386, "oid=23863600", 350, 30, 10, 300, 400, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=23863600", "summon", 0, 0);
      cm.npc_ChangeController(2159382, "oid=23863601", 250, 30, 9, 200, 300, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=23863601", "summon", 0, 0);
      cm.npc_ChangeController(2159385, "oid=23863602", 480, 30, 11, 430, 530, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=23863602", "summon", 0, 0);
      cm.npc_ChangeController(2159427, "oid=23863603", 50, 30, 8, 0, 100, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=23863603", "summon", 0, 0);
      cm.npc_ChangeController(2159427, "oid=23863604", 0, 30, 8, -50, 50, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=23863604", "summon", 0, 0);
      cm.inGameDirectionEvent_PushMoveInfo(0, 150, 200, 22);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_AskAnswerTime(2100);
      } else {
        if (status === V++) {
          cm.npc_SetSpecialAction("oid=23863603", 'die', 0, 1);
          cm.inGameDirectionEvent_AskAnswerTime(120);
        } else {
          if (status === V++) {
            cm.npc_SetSpecialAction("oid=23863604", 'die', 0, 1);
            cm.inGameDirectionEvent_AskAnswerTime(1500);
          } else {
            if (status === V++) {
              cm.npc_LeaveField("oid=23863603");
              cm.inGameDirectionEvent_AskAnswerTime(120);
            } else {
              if (status === V++) {
                cm.npc_LeaveField("oid=23863604");
                cm.sendNormalTalk("那些家伙，真是没完没了。", 1, 2159386, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("接到报告说发现了秘密研究所，所以想潜入进来看看。看来这条鱼比想象的要大。", 1, 2159382, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("这里的防御这么强，反倒让人很想看看里面到底藏着什么东西？我一定要让他们的狐狸尾巴露出来。", 1, 2159385, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("贝尔，这都什么时候了，还说得这么轻松……", 1, 2159382, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg1/2", "oid=23863601"], [900, 0, -120, 1, 0, 1, 0, 0, 0]);
                        cm.inGameDirectionEvent_AskAnswerTime(900);
                      } else {
                        if (status === V++) {
                          cm.npc_LeaveField("oid=23863601");
                          cm.npc_ChangeController(2159382, "oid=23864176", 250, 30, 9, 200, 300, 0, true, 0, false);
                          cm.npc_SetSpecialAction("oid=23864176", "summon", 0, 0);
                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg2/12", "oid=23864176"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
                          cm.npc_SetSpecialAction("oid=23864176", "catched", 0, 1);
                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg1/1", "oid=23863600"], [900, 0, -120, 1, 0, 1, 0, 0, 0]);
                          cm.npc_SetForceMove("oid=23863600", 1, 30, 100);
                          cm.inGameDirectionEvent_AskAnswerTime(2160);
                        } else {
                          if (status === V++) {
                            cm.npc_SetForceMove("oid=23863600", -1, 2, 100);
                            cm.npc_LeaveField("oid=23864176");
                            cm.npc_ChangeController(2159383, "oid=23864288", 270, 30, 10, 220, 320, 1, true, 0, false);
                            cm.npc_SetSpecialAction("oid=23864288", 'summon', 0, 0);
                            cm.inGameDirectionEvent_SetHideEffect(0);
                            cm.inGameDirectionEvent_MoveAction(2);
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg2/13", "oid=23863602"], [900, 0, -120, 1, 0, 1, 0, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(300);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg2/13", "oid=23863602"], [900, 0, -120, 1, 0, 1, 0, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(900);
                            } else {
                              if (status === V++) {
                                cm.setSessionValue("bell", "23863602");
                                cm.setSessionValue("hen", "23863600");
                                cm.setSessionValue('sig', "23864288");
                                cm.npc_ChangeController(2159377, "oid=23864804", -700, 30, 5, -750, -650, 0, true, 0, false);
                                cm.npc_SetSpecialAction("oid=23864804", "summon", 0, 0);
                                cm.npc_ChangeController(2159378, "oid=23864805", -800, 30, 4, -850, -750, 0, true, 0, false);
                                cm.npc_SetSpecialAction("oid=23864805", "summon", 0, 0);
                                cm.sendNormalTalk('按照命令，攻击目标。', 3, 2159383, false, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg1/2", "oid=23864288"], [900, 0, -120, 1, 0, 1, 0, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(810);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("离开吉格蒙特！", 1, 2159385, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_OneTimeAction(4, 0);
                                      cm.inGameDirectionEvent_AskAnswerTime(2000);
                                    } else {
                                      if (status === V++) {
                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg1/1"], [900, 0, -120, 0, 0, 0, 0, 0, 0]);
                                        cm.fieldEffect_PlayBGM("Bgm30.img/thePhoto", 0, 0);
                                        cm.inGameDirectionEvent_AskAnswerTime(810);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("呃，头……头好痛。", 3, 2159385, false, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/memory/1"], [3900, 0, -120, 0, 0, 0, 0, 0, 0]);
                                            cm.inGameDirectionEvent_AskAnswerTime(3900);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg0/1"], [900, 0, -120, 0, 0, 0, 0, 0, 0]);
                                              cm.inGameDirectionEvent_AskAnswerTime(810);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("刚才那是什么？我想起了从没见过的场面。心里这种郁闷的感觉是什么……。", 3, 2159385, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg0/2", "oid=23864288"], [900, 0, -120, 1, 0, 1, 0, 0, 0]);
                                                  cm.inGameDirectionEvent_AskAnswerTime(810);
                                                } else {
                                                  if (status === V++) {
                                                    cm.npc_SetForceMove("oid=23864804", 1, 650, 100);
                                                    cm.inGameDirectionEvent_AskAnswerTime(150);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetForceMove("oid=23864805", 1, 650, 100);
                                                      cm.inGameDirectionEvent_PushMoveInfo(0, 200, -450, 43);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_AskAnswerTime(3251);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_PushMoveInfo(1, 80, 0, 0);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.inGameDirectionEvent_AskAnswerTime(6846);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.sendNormalTalk("嗯？你在干什么？快去抓住那个……不，先把剩下的家伙全部抓回来！", 1, 2159377, false, true);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg1/2", "oid=23863600"], [900, 0, -120, 1, 0, 1, 0, 0, 0]);
                                                                cm.inGameDirectionEvent_AskAnswerTime(810);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk("……贝尔！现在必须先逃走。", 1, 2159386, false, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.sendNormalTalk("吉格蒙特怎么办？", 1, 2159385, true, true);
                                                                  } else {
                                                                    if (status === V++) {
                                                                      cm.sendNormalTalk("光靠我们的力量不行！必须召集同伴们一起过来！哎呀！", 1, 2159386, true, true);
                                                                    } else {
                                                                      if (status === V++) {
                                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/smog", "oid=0"], [3300, 550, 0, 1, 0, 1, 1, 0, 0]);
                                                                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                      } else {
                                                                        if (status === V++) {
                                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg2/14", "oid=0"], [1200, 120, -260, 1, 0, 1, 0, 1, 0]);
                                                                          cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                        } else {
                                                                          if (status === V++) {
                                                                            cm.npc_LeaveField("oid=23863600");
                                                                            cm.npc_LeaveField("oid=23863602");
                                                                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg1/1", "oid=23864804"], [1500, 0, -120, 1, 0, 1, 0, 0, 0]);
                                                                            cm.inGameDirectionEvent_AskAnswerTime(840);
                                                                          } else {
                                                                            if (status === V++) {
                                                                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/smogEnd", "oid=0"], [0, 550, 0, 1, 0, 1, 1, 0, 0]);
                                                                              cm.inGameDirectionEvent_AskAnswerTime(1020);
                                                                            } else {
                                                                              if (status === V++) {
                                                                                cm.sendNormalTalk("不能放过那些家伙！", 1, 2159377, false, true);
                                                                              } else {
                                                                                if (status === V++) {
                                                                                  cm.sendNormalTalk("尖兵！抓住那个反抗者，别让他逃走！维丽尔! 你和我去追那些家伙！", 1, 2159377, true, true);
                                                                                } else {
                                                                                  if (status === V++) {
                                                                                    cm.npc_SetForceMove("oid=23864804", 1, 600, 100);
                                                                                    cm.npc_SetForceMove("oid=23864805", 1, 600, 100);
                                                                                    cm.inGameDirectionEvent_AskAnswerTime(1200);
                                                                                  } else {
                                                                                    if (status === V++) {
                                                                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg0/0"], [900, 0, -120, 0, 0, 0, 0, 0, 0]);
                                                                                      cm.sendNormalTalk("刚才那个，到底是什么呢……。", 3, 2159377, false, true);
                                                                                    } else if (status === V++) {
                                                                                      cm.curNodeEventEnd(true);
                                                                                      cm.npc_LeaveField("oid=23864288");
                                                                                      cm.npc_LeaveField("oid=23864804");
                                                                                      cm.npc_LeaveField("oid=23864805");
                                                                                      cm.dispose();
                                                                                      cm.warp(931050950, 0, false);
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
            }
          }
        }
      }
    }
  }
}
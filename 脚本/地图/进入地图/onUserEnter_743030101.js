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
      cm.inGameDirectionEvent_MoveAction(0);
      cm.npc_ChangeController(9330205, "oid=851908", 200, 3, 1, 150, 250, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=851908", "summon", 0, 0);
      cm.setSessionValue("Sunyo", "851908");
      cm.npc_ChangeController(9330202, "oid=851909", 80, 3, 1, 30, 130, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=851909", "summon", 0, 0);
      cm.setSessionValue("zhizonbo1", "851909");
      cm.inGameDirectionEvent_AskAnswerTime(1500);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.npc_SetSpecialAction('oid=851909', 'dead', 0, 1);
        cm.inGameDirectionEvent_AskAnswerTime(1500);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("你跟其他人一样都是笨蛋。为了救那种人奋不顾身。", 1, 9330205, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(500);
          } else {
            if (status === V++) {
              cm.emotion(4, 10000);
              cm.sendNormalTalk("父亲!!! 父亲!!! 父亲!!!!!!", 3, 9330205, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_MoveAction(2);
                cm.inGameDirectionEvent_AskAnswerTime(500);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(0);
                  cm.sendNormalTalk("现在全部都结束了。 呵呵", 1, 9330205, false, true);
                } else {
                  if (status === V++) {
                    cm.npc_ChangeController(9330204, "oid=851912", -130, 3, 1, -180, -80, 0, true, 0, false);
                    cm.npc_SetSpecialAction("oid=851912", "summon", 0, 0);
                    cm.setSessionValue("Suha4", '851912');
                    cm.sendNormalTalk("宏武团长!还有 小姐!", 1, 9330204, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("咻，秀禾….父亲，父亲!!!!", 3, 9330204, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("逃，必须要逃脱。这，这里的话，我会处理的。", 1, 9330202, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("所有东西都在我的计划里面。", 1, 9330205, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("为了不害你这样的家伙，我有必要站出来吗？呵呵", 1, 9330205, true, true);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=851908", "attack0", 0, 1);
                              cm.fieldEffect_PlayFieldSound("demonSlayer/arkAttack0", 100);
                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                            } else {
                              if (status === V++) {
                                cm.npc_ChangeController(9330212, "oid=851913", 300, -31, 1, 250, 350, 1, true, 0, false);
                                cm.npc_SetSpecialAction("oid=851913", 'summon', 0, 0);
                                cm.npc_ChangeController(9330212, 'oid=851914', 430, -31, 1, 380, 480, 1, true, 0, false);
                                cm.npc_SetSpecialAction("oid=851914", "summon", 0, 0);
                                cm.npc_ChangeController(9330212, "oid=851915", 370, -31, 1, 320, 420, 1, true, 0, false);
                                cm.npc_SetSpecialAction('oid=851915', 'summon', 0, 0);
                                cm.npc_ChangeController(9330212, "oid=851916", 400, -31, 1, 350, 450, 1, true, 0, false);
                                cm.npc_SetSpecialAction("oid=851916", "summon", 0, 0);
                                cm.npc_ChangeController(9330213, "oid=851917", 380, -31, 1, 330, 430, 1, true, 0, false);
                                cm.npc_SetSpecialAction("oid=851917", "summon", 0, 0);
                                cm.npc_ChangeController(9330212, 'oid=851918', 490, -31, 1, 440, 540, 1, true, 0, false);
                                cm.npc_SetSpecialAction('oid=851918', "summon", 0, 0);
                                cm.npc_ChangeController(9330212, 'oid=851919', 545, -31, 1, 495, 595, 1, true, 0, false);
                                cm.npc_SetSpecialAction('oid=851919', 'summon', 0, 0);
                                cm.npc_ChangeController(9330212, 'oid=851920', 600, -31, 1, 550, 650, 1, true, 0, false);
                                cm.npc_SetSpecialAction("oid=851920", "summon", 0, 0);
                                cm.npc_ChangeController(9330212, 'oid=851921', 612, -31, 1, 562, 662, 1, true, 0, false);
                                cm.npc_SetSpecialAction("oid=851921", 'summon', 0, 0);
                                cm.npc_ChangeController(9330213, "oid=851922", 678, -31, 1, 628, 728, 1, true, 0, false);
                                cm.npc_SetSpecialAction("oid=851922", "summon", 0, 0);
                                cm.npc_ChangeController(9330212, "oid=851923", 701, -31, 1, 651, 751, 1, true, 0, false);
                                cm.npc_SetSpecialAction("oid=851923", "summon", 0, 0);
                                cm.npc_ChangeController(9330212, "oid=851924", 731, -31, 1, 681, 781, 1, true, 0, false);
                                cm.npc_SetSpecialAction("oid=851924", 'summon', 0, 0);
                                cm.npc_ChangeController(9330212, "oid=851925", 800, -31, 1, 750, 850, 1, true, 0, false);
                                cm.npc_SetSpecialAction("oid=851925", "summon", 0, 0);
                                cm.sendNormalTalk("呼呼，那么现在就结束吧。各位！一个都不要救！", 1, 9330205, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("还....还没有结束。", 1, 9330202, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("跟我一起来！", 1, 9330204, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(500);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("不，我不会去的….", 3, 9330204, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.npc_SetSpecialAction('oid=851912', "attack0", 0, 1);
                                          cm.inGameDirectionEvent_AskAnswerTime(1000);
                                        } else {
                                          if (status === V++) {
                                            cm.emotion(1, 1000);
                                            cm.sendNormalTalk("啊啊，秀禾… 你会打….打我…..", 3, 9330204, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.emotion(4, 30000);
                                              cm.inGameDirectionEvent_OneTimeAction(29, 2000);
                                              cm.inGameDirectionEvent_AskAnswerTime(2000);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_OneTimeAction(25, 30000);
                                                cm.inGameDirectionEvent_AskAnswerTime(500);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("秀禾!赶紧走吧!!!", 1, 9330202, false, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.inGameDirectionEvent_AskAnswerTime(500);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/DaddysSkill0/4"], [1920, 150, 0, 0, 0, 0, 0, 0, 0]);
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/DaddysSkill0/5"], [3840, 600, 200, 0, 0, 0, 0, 0, 0]);
                                                      cm.fieldEffect_PlayFieldSound("chivalrousFighter/dragonSkillUse", 100);
                                                      cm.inGameDirectionEvent_AskAnswerTime(2640);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/BossHit/2"], [4000, 600, 20, 0, 0, 0, 0, 0, 0]);
                                                        cm.inGameDirectionEvent_AskAnswerTime(600);
                                                      } else if (status === V++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction100.img/effect/tuto/BossHit/2"], [4000, 400, -10, 0, 0, 0, 0, 0, 0]);
                                                        cm.npc_LeaveField("oid=851912");
                                                        cm.npc_LeaveField("oid=851908");
                                                        cm.npc_LeaveField("oid=851909");
                                                        cm.npc_LeaveField("oid=851913");
                                                        cm.npc_LeaveField("oid=851914");
                                                        cm.npc_LeaveField('oid=851915');
                                                        cm.npc_LeaveField('oid=851916');
                                                        cm.npc_LeaveField("oid=851917");
                                                        cm.npc_LeaveField("oid=851918");
                                                        cm.npc_LeaveField("oid=851919");
                                                        cm.npc_LeaveField('oid=851920');
                                                        cm.npc_LeaveField("oid=851921");
                                                        cm.npc_LeaveField("oid=851922");
                                                        cm.npc_LeaveField("oid=851923");
                                                        cm.npc_LeaveField("oid=851924");
                                                        cm.npc_LeaveField('oid=851925');
                                                        cm.dispose();
                                                        cm.warp(743020102, 0, false);
                                                        cm.inGameDirectionEvent_ForcedFlip15(700, 0, 0, 0, 0);
                                                        cm.setInGameDirectionMode(false, true, false);
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
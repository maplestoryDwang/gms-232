var status = -1;
var selectionLog = [];
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
      cm.npc_ChangeController(9075301, "oid=290916", 54, 56, 16, 4, 104, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.npc_ChangeController(9075300, "oid=2288464", -135, 120, 5, -185, -85, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=2288464", "summon", 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.updateInfoQuest(26011, '');
    } else {
      if (status === V++) {
        cm.sendNormalTalk("斯乌……你是斯乌吧？斯乌，斯乌！", 9, 9075300, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk('……', 5, 9075301, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("你为什么不回答我？你不会已经忘记我长什么样了吧？斯乌，你说话啊，嗯？", 9, 9075300, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("用户信息确认中。\r\n\r\n……………………\r\n\r\n奥尔卡，该用户名尚未注册。", 5, 9075301, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("斯乌，你在说什么啊？我怎么一点都听不懂。", 9, 9075300, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("如果想使用进化系统，需要先注册用户。确定要注册吗？", 5, 9075301, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("你……你不是斯乌。你是谁？你是谁，你为什么你和斯乌长得一样？", 9, 9075300, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("我是控制进化系统的人工智能控制装置ESS。为了给用户提供方便，我才采用了这样的形态。", 5, 9075301, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("人工智能？那你是格里梅尔制造的？", 9, 9075300, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("由于系统初始化，以前用户的信息已被删除。", 5, 9075301, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("我非常不满意。你为什么要用斯乌的外貌？斯乌和我奥尔卡是双胞胎。你只是格里梅尔制造的机器，居然敢装作斯乌的样子？", 9, 9075300, true, true);
                          } else {
                            if (status === V++) {
                              cm.npc_ChangeController(9075307, "oid=2288633", -135, 120, 5, -185, -85, 0, false, 0, false);
                              cm.npc_SetSpecialAction("oid=2288633", "summon", 0, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(1000);
                            } else {
                              if (status === V++) {
                                cm.npc_LeaveField("oid=2288464");
                                cm.sendNormalTalk("斯乌在哪里？把斯乌交出来！立刻把斯乌还给我！", 9, 9075300, false, true);
                              } else {
                                if (status === V++) {
                                  cm.setAmbience("Ambience.img/electronic", 100, 60);
                                  cm.inGameDirectionEvent_AskAnswerTime(2000);
                                  cm.effect_REPEAT("Effect/Direction5.img/effect/attack/1", 1, 1, 0, 64, 55);
                                  cm.effect_REPEAT("Effect/Direction5.img/effect/attack/2", 1, 1, 0, 64, 55);
                                  cm.effect_REPEAT("Effect/Direction5.img/effect/attack/3", 1, 1, 0, 64, 55);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("系统感知到攻击性。启动攻击防御系统。", 5, 9075301, false, true);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_SetHideEffect(0);
                                      cm.inGameDirectionEvent_AskAnswerTime(1000);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("奥尔卡？她不是完全失去力量了吗？", 3, 0, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("转换为目标追踪模式。正在追踪目标……", 5, 9075301, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_AskAnswerTime(3500);
                                            cm.effect_准心瞄准效果([9075307, 1, 0, 200, 2000, 100]);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("敌人识别完成。转换为攻击模式。开始对目标进行攻击。攻击……开始。", 5, 9075301, false, true);
                                            } else {
                                              if (status === V++) {
                                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                                              } else {
                                                if (status === V++) {
                                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction5.img/effect/attack/0"], [3000, 0, -65, 1, 0, 1, 1, 0]);
                                                  cm.forceStartQuest(1849, '1');
                                                  cm.inGameDirectionEvent_AskAnswerTime(4000);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("奥尔卡！", 3, 0, false, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.inGameDirectionEvent_MoveAction(2);
                                                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_MoveAction(0);
                                                        cm.sendNormalTalk("发现新目标。识别对象。", 5, 9075301, false, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_AskAnswerTime(3500);
                                                          cm.effect_准心瞄准效果([0, 1, 1, 200, 2000, 100]);
                                                        } else {
                                                          if (status === V++) {
                                                            cm.setAmbience("Ambience.img/warning", 100, 60);
                                                            cm.forceCompleteQuest(1850);
                                                            cm.sendNormalTalk("用户名#h0#。用户名确认完成。结束攻击防御系统，转换为系统强化模式。", 5, 9075301, false, true);
                                                          } else {
                                                            if (status === V++) {
                                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                                            } else {
                                                              if (status === V++) {
                                                                cm.sendNormalTalk("奥尔卡！振作起来，奥尔卡！", 3, 0, false, true);
                                                              } else {
                                                                if (status === V++) {
                                                                  cm.sendNormalTalk("斯乌……我好想你……", 9, 9075300, true, true);
                                                                } else {
                                                                  if (status === V++) {
                                                                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                                                                  } else if (status === V++) {
                                                                    cm.forceCompleteQuest(1846);
                                                                    cm.warp(957020004, 0, false);
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
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;
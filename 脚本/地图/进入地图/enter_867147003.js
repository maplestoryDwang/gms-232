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
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9401026, "oid=8644810", -100, 50, 2, -150, -50, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=8644810", 'summon', 0, 0);
      cm.npc_ChangeController(9401123, "oid=8644811", 1100, 50, 26, 1050, 1150, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=8644811", 'summon', 0, 0);
      cm.onTeleport(0, 3, cm.getPlayer().getId(), 1200, 50);
      cm.inGameDirectionEvent_ForcedFlip(-1);
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1200);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1000, 0);
        cm.inGameDirectionEvent_AskAnswerTime(300);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/love", "oid=8644811"], [3000, 0, 0, 1, 0, 1, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(300);
        } else {
          if (status === V++) {
            cm.npc_SetForceMove("oid=8644811", -1, 500, 150);
            cm.sendNewEffects(13, [6000, -200, 0, 0, 0]);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_同时移动镜头和人(1, 500);
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("我天天路过前院，可今天的空气和阳光全都让我感觉陌生！这里竟然如此美丽吗～～ ", 37, 9401029, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                  } else {
                    if (status === V++) {
                      cm.npc_setForceFlip("oid=8644810", 1);
                      cm.inGameDirectionEvent_AskAnswerTime(600);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("你这样会摔倒的，莫妮卡。", 37, 9401022, false, true);
                      } else {
                        if (status === V++) {
                          cm.npc_SetForceMove("oid=8644811", -1, 400, 200);
                          cm.inGameDirectionEvent_AskAnswerTime(600);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_同时移动镜头和人(1, 450);
                            cm.sendNewEffects(18, [3000, 1000, 2000, -80, 200]);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom('芽芽～！', 37, 9401029, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(1000);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("你就是莫妮卡的远征队队长吧。", 37, 9401022, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk_Bottom("#b你好。", 57, 0, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("嗯，幸会。莫妮卡居然是你的第一个队员……不知道该祝贺你，还是同情你。", 37, 9401022, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom("#b什么？", 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk_Bottom("这个孩子充满野心。", 37, 9401022, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk_Bottom("你该不会……是在说我坏话吧？充满野心怎么了！", 37, 9401029, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk_Bottom("#b我好像大概能够理解。", 57, 0, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk_Bottom("看来以后我们会经常见面。我是芽芽。", 37, 9401022, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk_Bottom("如果你想要快速成长，那就最好去升降机旁的公告栏接受调查任务。", 37, 9401022, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk_Bottom("任务奖励是声望，偶尔还会出现一些不错的物品。", 37, 9401022, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.sendNormalTalk_Bottom("加油吧，新进队长。", 37, 9401022, true, true);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.sendNormalTalk_Bottom("莫妮卡，早点回来。", 37, 9401022, true, true);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.sendNormalTalk_Bottom("队长！那就下去看看调查任务吧？去看看升降机旁的公告栏吧，我会在这里等着你。", 37, 9401029, true, true);
                                                        } else if (status === V++) {
                                                          cm.forceStartQuest(64763, '');
                                                          cm.updateInfoQuest(64763, "start=1");
                                                          cm.warp(867147001, 1, true);
                                                          cm.eventSKill(0);
                                                          cm.setInGameDirectionMode(false, true, false);
                                                          cm.npc_LeaveField("oid=8644810");
                                                          cm.npc_LeaveField("oid=8644810");
                                                          cm.npc_LeaveField("oid=8644811");
                                                          cm.npc_LeaveField("oid=8644811");
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
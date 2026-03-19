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
      if (cm.getMapId() == 400051400) {
        cm.spawnMobLimit(2400020, 1, 300, 29, 100);
        cm.spawnMobLimit(2400020, 1, 300, 29, 100);
        cm.spawnMobLimit(2400020, 1, 400, 29, 100);
        cm.spawnMobLimit(2400020, 1, 400, 29, 100);
        cm.spawnMobLimit(2400020, 1, 500, -331, 100);
        cm.spawnMobLimit(2400020, 1, 500, -331, 100);
        cm.spawnMobLimit(2400020, 1, 600, 29, 100);
        cm.spawnMobLimit(2400020, 1, 600, 29, 100);
        cm.spawnMobLimit(2400020, 1, 700, -331, 100);
        cm.spawnMobLimit(2400020, 1, 700, -331, 100);
        cm.spawnMobLimit(2400020, 1, 800, 29, 100);
        cm.spawnMobLimit(2400020, 1, 800, 29, 100);
        cm.spawnMobLimit(2400020, 1, 900, -391, 100);
        cm.spawnMobLimit(2400020, 1, 900, -391, 100);
        cm.spawnMobLimit(2400020, 1, 1000, 29, 100);
        cm.spawnMobLimit(2400020, 1, 1000, 29, 100);
        cm.spawnMobLimit(2400020, 1, 1000, -691, 100);
        cm.spawnMobLimit(2400020, 1, 1000, -691, 100);
        cm.spawnMobLimit(2400020, 1, 1100, -391, 100);
        cm.spawnMobLimit(2400020, 1, 1100, -391, 100);
        cm.spawnMobLimit(2400020, 1, 1200, 29, 100);
        cm.spawnMobLimit(2400020, 1, 1200, 29, 100);
        cm.spawnMobLimit(2400020, 1, 1200, -691, 100);
        cm.spawnMobLimit(2400020, 1, 1200, -691, 100);
        cm.spawnMobLimit(2400020, 1, 1300, -391, 100);
        cm.spawnMobLimit(2400020, 1, 1300, -391, 100);
        cm.spawnMobLimit(2400020, 1, 1400, 29, 100);
        cm.spawnMobLimit(2400020, 1, 1400, 29, 100);
        cm.spawnMobLimit(2400020, 1, 1400, -691, 100);
        cm.spawnMobLimit(2400020, 1, 1400, -691, 100);
        cm.spawnMobLimit(2400020, 1, 1500, -391, 100);
        cm.spawnMobLimit(2400020, 1, 1500, -391, 100);
        cm.spawnMobLimit(2400020, 1, 1600, 29, 100);
        cm.spawnMobLimit(2400020, 1, 1600, 29, 100);
        cm.spawnMobLimit(2400020, 1, 1600, -691, 100);
        cm.spawnMobLimit(2400020, 1, 1600, -691, 100);
        cm.spawnMobLimit(2400020, 1, 1700, -331, 100);
        cm.spawnMobLimit(2400020, 1, 1700, -331, 100);
        cm.spawnMobLimit(2400020, 1, 1800, 29, 100);
        cm.spawnMobLimit(2400020, 1, 1800, 29, 100);
        cm.spawnMobLimit(2400020, 1, 1800, -691, 100);
        cm.spawnMobLimit(2400020, 1, 1800, -691, 100);
        cm.spawnMobLimit(2400020, 1, 1900, -331, 100);
        cm.spawnMobLimit(2400020, 1, 1900, -331, 100);
        cm.spawnMobLimit(2400020, 1, 2000, 29, 100);
        cm.spawnMobLimit(2400020, 1, 2000, 29, 100);
        cm.spawnMobLimit(2400020, 1, 2100, -307, 100);
        cm.spawnMobLimit(2400020, 1, 2100, -307, 100);
        cm.spawnMobLimit(2400020, 1, 2200, -272, 100);
        cm.spawnMobLimit(2400020, 1, 2200, -272, 100);
        cm.fieldEffect_ScreenMsg("monsterPark/stageEff/final");
        cm.dispose();
      } else {
        cm.curNodeEventEnd(true);
        cm.eventSKill(0);
        cm.setInGameDirectionMode(true, true, true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.inGameDirectionEvent_MoveAction(1);
        cm.inGameDirectionEvent_AskAnswerTime(60);
      }
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.npc_ChangeController(3000138, "oid=31069392", 1450, 0, 5, 1400, 1500, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=31069392", "summon", 0, 0);
        cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg1/0"], [1200, 0, -120, 0, 0, 0, 0, 0]);
        cm.inGameDirectionEvent_AskAnswerTime(900);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_PushMoveInfo(0, 400, 1650, -3);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_AskAnswerTime(900);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("不错嘛，竟设置了这样的陷阱。", 1, 3000138, false, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg2/3"], [1200, 0, -120, 0, 0, 0, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(1200);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("只怪我那些部下太蠢，才让我和我的军队被骗到这里来。虽说你急功近利，不过给我的军队造成重大打击的作战还算精明。", 1, 3000138, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("我很清楚，你跟我一样，在保护罩内部无法发挥全部力量战斗！", 17, 3000138, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 2150, -3);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(1200);
                      } else {
                        if (status === V++) {
                          cm.inGameDirectionEvent_MoveAction(2);
                          cm.inGameDirectionEvent_AskAnswerTime(60);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_MoveAction(0);
                            cm.npc_ChangeController(3000144, "oid=31070569", 2200, 0, 8, 2150, 2250, 1, false, 0, false);
                            cm.npc_SetSpecialAction("oid=31070569", "summon", 0, 0);
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg1/0", "oid=31070569"], [900, 0, -120, 1, 0, 1, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(900);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg1/14"], [1200, 0, -120, 0, 0, 0, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(900);
                            } else {
                              if (status === V++) {
                                cm.npc_ChangeController(3000109, "oid=31070795", 2350, 0, 14, 2300, 2400, 1, false, 0, false);
                                cm.npc_SetSpecialAction("oid=31070795", "summon", 0, 0);
                                cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg2/4"], [1200, 0, -120, 0, 0, 0, 0, 0]);
                                cm.inGameDirectionEvent_AskAnswerTime(600);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg1/16", "oid=31070795"], [1200, 0, -120, 1, 0, 1, 0, 0]);
                                  cm.inGameDirectionEvent_AskAnswerTime(1200);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushMoveInfo(0, 1000, 1650, -3);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_AskAnswerTime(1200);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("原来如此，你就是投生现代的狂龙战士啊？和先代相比，还只是个小毛孩呢。", 1, 3000138, false, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_MoveAction(1);
                                          cm.inGameDirectionEvent_AskAnswerTime(60);
                                        } else {
                                          if (status === V++) {
                                            cm.inGameDirectionEvent_MoveAction(0);
                                            cm.sendNormalTalk("(太好了，贝德罗斯也来了……还看见一个像是爆莉萌天使的人，应该有足够的胜算！)少说废话，麦格纳斯，今天就是你的死期！", 17, 3000138, false, true);
                                          } else {
                                            if (status === V++) {
                                              cm.inGameDirectionEvent_OneTimeAction(62, 0);
                                              cm.inGameDirectionEvent_AskAnswerTime(1500);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("就靠我们几个消灭麦格纳斯？能不能行啊？", 1, 3000109, false, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("那家伙现在变弱很多，使不出多少力量！大家一起上！", 1, 3000144, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("一群不知天高地厚的小东西。就算我现在变弱了，你们也不是我的对手。", 1, 3000138, true, true);
                                                  } else if (status === V++) {
                                                    cm.eventSKill(0);
                                                    cm.setInGameDirectionMode(false, true, false);
                                                    cm.npc_LeaveField("oid=31069392");
                                                    cm.npc_LeaveField("oid=31069392");
                                                    cm.npc_LeaveField("oid=31070569");
                                                    cm.npc_LeaveField("oid=31070569");
                                                    cm.npc_LeaveField("oid=31070795");
                                                    cm.npc_LeaveField("oid=31070795");
                                                    cm.dispose();
                                                    cm.warp(940002000, 0, false);
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
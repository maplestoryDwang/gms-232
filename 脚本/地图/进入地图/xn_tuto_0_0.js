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
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_MoveAction(0);
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.npc_ChangeController(2159369, "oid=23835052", 665, -20, 6, 615, 715, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=23835052", "summon", 0, 0);
        cm.npc_ChangeController(2159374, "oid=23835053", 380, -20, 4, 330, 430, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=23835053", 'summon', 0, 0);
        cm.npc_ChangeController(2159372, "oid=23835054", 450, -20, 4, 400, 500, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=23835054", "summon", 0, 0);
        cm.npc_ChangeController(2159373, "oid=23835055", 520, -20, 2, 470, 570, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=23835055", 'summon', 0, 0);
        cm.npc_ChangeController(2159375, "oid=23835056", 590, -20, 5, 540, 640, 1, false, 0, false);
        cm.npc_SetSpecialAction("oid=23835056", 'summon', 0, 0);
        cm.fieldEffect_ScreenMsg("xenon/text0");
        cm.inGameDirectionEvent_AskAnswerTime(2900);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("好了，走吧？", 1, 2159373, false, true);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg2/0", "oid=23835055"], [900, 0, -120, 1, 0, 1, 0, 0, 0]);
            cm.inGameDirectionEvent_AskAnswerTime(900);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg2/1", "oid=23835056"], [900, 0, -120, 1, 0, 1, 0, 0, 0]);
              cm.inGameDirectionEvent_AskAnswerTime(1000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("冒险勇者红鹰！", 1, 2159375, false, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("冒险勇者黄雄！", 1, 2159373, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("冒险勇者蓝鲨！", 1, 2159372, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("冒险勇者绿虎！", 1, 2159374, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("冒险勇者熊猫！", 1, 2159369, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("合在一起……", 1, 2159373, true, true);
                        } else {
                          if (status === V++) {
                            cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg2/2", "oid=23835055"], [900, 0, -120, 1, 0, 1, 0, 0, 0]);
                            cm.inGameDirectionEvent_AskAnswerTime(900);
                          } else {
                            if (status === V++) {
                              cm.npc_SetSpecialAction("oid=23835055", "happy", 0, 1);
                              cm.inGameDirectionEvent_AskAnswerTime(900);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("呀！太帅了！", 1, 2159373, false, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk("贝尔非常喜欢冒险勇者游戏。", 1, 2159372, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.sendNormalTalk("嗯！不觉得很帅吗？守护埃德尔斯坦的正义英雄！", 1, 2159373, true, true);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk("虽然没有需要击败的坏蛋。", 1, 2159374, true, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk("所以每天只能喊喊口号。", 1, 2159375, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.sendNormalTalk("我来当坏蛋不就行了……。", 1, 2159369, true, true);
                                        } else {
                                          if (status === V++) {
                                            cm.sendNormalTalk("#h0#！你又在胡说什么啊？那可不行。大家都应该是正义一方！不然就太让人难过了。", 1, 2159373, true, true);
                                          } else {
                                            if (status === V++) {
                                              cm.sendNormalTalk("嗯……。", 1, 2159369, true, true);
                                            } else {
                                              if (status === V++) {
                                                cm.sendNormalTalk("即使没有坏蛋，只要好玩就行了。该做的游戏做完了，今天就此解散吧？", 1, 2159374, true, true);
                                              } else {
                                                if (status === V++) {
                                                  cm.sendNormalTalk("那我先走了。家里还有事。", 1, 2159369, true, true);
                                                } else {
                                                  if (status === V++) {
                                                    cm.sendNormalTalk("再见。#h0#，明天见！", 1, 2159373, true, true);
                                                  } else {
                                                    if (status === V++) {
                                                      cm.npc_SetForceMove("oid=23835052", -1, 550, 100);
                                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg2/3", "oid=23835056"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
                                                      cm.inGameDirectionEvent_AskAnswerTime(600);
                                                    } else {
                                                      if (status === V++) {
                                                        cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg2/4", "oid=23835053"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
                                                        cm.inGameDirectionEvent_AskAnswerTime(600);
                                                      } else {
                                                        if (status === V++) {
                                                          cm.inGameDirectionEvent_头顶图片(["Effect/Direction12.img/effect/tuto/BalloonMsg2/5", "oid=23835052"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
                                                          cm.inGameDirectionEvent_AskAnswerTime(3000);
                                                        } else if (status === V++) {
                                                          cm.npc_LeaveField("oid=23835052");
                                                          cm.npc_LeaveField("oid=23835053");
                                                          cm.npc_LeaveField("oid=23835054");
                                                          cm.npc_LeaveField("oid=23835055");
                                                          cm.npc_LeaveField("oid=23835056");
                                                          cm.dispose();
                                                          cm.warp(931050910, 0, false);
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
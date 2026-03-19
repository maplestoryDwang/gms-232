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
      cm.inGameDirectionEvent_MoveAction(2);
      cm.inGameDirectionEvent_AskAnswerTime(30);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.npc_ChangeController(3000103, "oid=1053580", -300, 220, 2, -350, -250, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=1053580", "summon", 0, 0);
        cm.npc_ChangeController(3000104, "oid=1053581", -450, 220, 11, -500, -400, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=1053581", "summon", 0, 0);
        cm.npc_ChangeController(3000110, "oid=1053582", -120, 220, 4, -170, -70, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=1053582", "summon", 0, 0);
        cm.npc_ChangeController(3000114, "oid=1053583", -100, 220, 4, -150, -50, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=1053583", 'summon', 0, 0);
        cm.npc_ChangeController(3000111, "oid=1053584", 130, 220, 6, 80, 180, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=1053584", "summon", 0, 0);
        cm.npc_ChangeController(3000115, "oid=1053585", 250, 220, 8, 200, 300, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=1053585", "summon", 0, 0);
        cm.sendNormalTalk("你到底是感觉到了什么……", 1, 3000104, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg1/3", "oid=1053581"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg1/3"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg1/4", "oid=1053580"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("祭司们在做什么？话说怎么是陌生面孔呃？", 1, 3000103, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("嘘！有异常，贝德罗斯！", 17, 3000103, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("我知道，我也发现情况很可疑！我先去村里求援，你们好好观察这些人在做什么。要是有危险，就赶紧逃。", 1, 3000104, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg0/0", "oid=1053580"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(900);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("你这是什么话？", 1, 3000103, false, true);
                  } else {
                    if (status === V++) {
                      cm.npc_LeaveField("oid=1053581");
                      cm.sendNormalTalk("(东侧圣殿遭到袭击了吗？那帮人想对圣物做什么手脚？)", 17, 3000103, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("拿掉圣物后，防御膜就会变弱。", 1, 3000110, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("可是如果搬动圣物，会不会受到诅咒啊？", 1, 3000114, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("你怎么那么迷信？这可是千载难逢的好机会！现在我们不能回头了！", 1, 3000110, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("你要拿走圣物吗？", 17, 3000110, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("必须阻止他们！！", 1, 3000103, true, true);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=1053580", 1, 300, 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_MoveAction(2);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg1/1", "oid=1053582"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg1/1", "oid=1053583"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg1/1", "oid=1053584"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg1/1", "oid=1053585"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(600);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_MoveAction(0);
                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction9.img/effect/story/BalloonMsg1/7", "oid=1053580"], [900, 0, -120, 1, 0, 1, 0, 0, 0]);
                                      cm.inGameDirectionEvent_AskAnswerTime(900);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ScreenMsg("kaiser/tear_rush");
                                        cm.inGameDirectionEvent_AskAnswerTime(3000);
                                      } else if (status === V++) {
                                        cm.npc_LeaveField("oid=1053580");
                                        cm.npc_LeaveField("oid=1053582");
                                        cm.npc_LeaveField("oid=1053583");
                                        cm.npc_LeaveField("oid=1053584");
                                        cm.npc_LeaveField("oid=1053585");
                                        cm.dispose();
                                        cm.warp(940001220, 0, false);
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
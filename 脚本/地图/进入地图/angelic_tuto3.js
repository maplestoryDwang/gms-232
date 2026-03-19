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
        cm.npc_ChangeController(3000140, "oid=2592748", -300, 220, 2, -350, -250, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2592748", 'summon', 0, 0);
        cm.npc_ChangeController(3000104, "oid=2592749", -450, 220, 11, -500, -400, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2592749", 'summon', 0, 0);
        cm.npc_ChangeController(3000110, "oid=2592750", -120, 220, 4, -170, -70, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2592750", "summon", 0, 0);
        cm.npc_ChangeController(3000114, "oid=2592751", -50, 220, 4, -100, 0, 0, true, 0, false);
        cm.npc_SetSpecialAction("oid=2592751", "summon", 0, 0);
        cm.npc_ChangeController(3000111, "oid=2592752", 130, 220, 6, 80, 180, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2592752", "summon", 0, 0);
        cm.npc_ChangeController(3000115, "oid=2592753", 250, 220, 8, 200, 300, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2592753", 'summon', 0, 0);
        cm.sendNormalTalk("你到底是感觉到了什么……", 1, 3000104, false, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/story/BalloonMsg1/0", "oid=2592749"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/story/BalloonMsg1/0", "oid=2592748"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
          cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/story/BalloonMsg1/3"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
          cm.inGameDirectionEvent_AskAnswerTime(1200);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("祭司们在做什么？话说怎么是陌生面孔呃？", 17, 3000104, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("嘘！有异常，贝德罗斯！", 1, 3000140, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("我知道，我也发现情况很可疑！我先去村里求援，你们好好观察这些人在做什么。要是有危险，就赶紧逃。", 1, 3000104, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/story/BalloonMsg0/0"], [1200, 0, -120, 0, 0, 0, 0, 0, 0]);
                  cm.inGameDirectionEvent_AskAnswerTime(900);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk('你这是什么话？', 17, 3000104, false, true);
                  } else {
                    if (status === V++) {
                      cm.npc_LeaveField("oid=2592749");
                      cm.sendNormalTalk("拿掉圣物后，防御膜就会变弱。", 1, 3000110, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("可是如果搬动圣物，会不会受到诅咒啊？", 1, 3000114, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("你怎么那么迷信？这可是千载难逢的好机会！现在我们不能回头了！", 1, 3000110, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("(他们是要偷圣物吗？)", 17, 3000110, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("你要拿走圣物吗？", 1, 3000140, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk('必须阻止他们！！', 17, 3000140, true, true);
                              } else {
                                if (status === V++) {
                                  cm.npc_SetForceMove("oid=2592748", 1, 300, 100);
                                  cm.inGameDirectionEvent_AskAnswerTime(300);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_MoveAction(2);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/story/BalloonMsg1/1", "oid=2592750"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/story/BalloonMsg1/1", "oid=2592751"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/story/BalloonMsg1/1", "oid=2592752"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
                                    cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/story/BalloonMsg1/1", "oid=2592753"], [1200, 0, -120, 1, 0, 1, 0, 0, 0]);
                                    cm.inGameDirectionEvent_AskAnswerTime(300);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_头顶图片(["Effect/Direction10.img/effect/story/BalloonMsg1/6"], [900, 0, -120, 0, 0, 0, 0, 0, 0]);
                                      cm.inGameDirectionEvent_AskAnswerTime(300);
                                    } else {
                                      if (status === V++) {
                                        cm.fieldEffect_ScreenMsg("kaiser/tear_rush");
                                        cm.inGameDirectionEvent_AskAnswerTime(1800);
                                      } else if (status === V++) {
                                        cm.npc_LeaveField("oid=2592748");
                                        cm.npc_LeaveField("oid=2592750");
                                        cm.npc_LeaveField("oid=2592751");
                                        cm.npc_LeaveField("oid=2592752");
                                        cm.npc_LeaveField("oid=2592753");
                                        cm.dispose();
                                        cm.warp(940011040, 0, false);
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
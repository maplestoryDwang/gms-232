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
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_PushScaleInfo(0, 0, 1500, 1000, 57, -20);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
        cm.npc_ChangeController(1540807, "oid=2196634", 228, -37, 2, 178, 278, 1, true, 0, false);
        cm.npc_SetSpecialAction("oid=2196634", "summon", 0, 0);
        cm.npc_ChangeController(3004083, "oid=2196635", -91, -105, 2, -141, -41, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=2196635", "summon", 0, 0);
        cm.npc_ChangeController(3004082, "oid=2196636", -242, -33, 5, -292, -192, 0, false, 0, false);
        cm.npc_SetSpecialAction("oid=2196636", "summon", 0, 0);
        cm.inGameDirectionEvent_ForcedFlip(-1);
        cm.inGameDirectionEvent_AskAnswerTime(4000);
        cm.effect_Text(["#fn黑体##fs18#几日后，龙神家"], [100, 1000, 6, -50, -50, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("我回来了。", 57, 0, false, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("呀，你怎么说得跟放学回家似的，主人？", 37, 1540807, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#回来了？", 37, 3004082, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#为了给你当零食吃，我煮了一箩筐的土豆，结果都放凉了啊，\r\n你跑哪儿去了？", 37, 3004083, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("唔……这边也不遑多让啊……", 37, 1540807, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("刚刚结束了一场大战回来呢。", 57, 0, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#战斗？这次难不成是要击败魔王之类的人物，儿子？", 37, 3004082, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("啊，你是怎么知道的？", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face2#这不是在调侃我们嘛，主人……", 37, 1540807, true, true);
                        } else {
                          if (status === V++) {
                            cm.npc_ChangeController(3004084, "oid=2196644", 278, 10, 2, 228, 328, 1, true, 1500, false);
                            cm.npc_SetSpecialAction("oid=2196644", "summon", 0, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(1000);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#（附耳悄声）埃文，发生了什么事？你终于做到了吗？", 37, 3004084, false, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_ForcedFlip(1);
                                cm.inGameDirectionEvent_AskAnswerTime(90);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("哥……", 57, 0, false, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_AskAnswerTime(1500);
                                  } else {
                                    if (status === V++) {
                                      cm.sendNormalTalk_Bottom("#face0#终于还是成功拿到了爆莉萌天使的签名吗？嗯？", 37, 3004084, false, true);
                                    } else {
                                      if (status === V++) {
                                        cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
                                      } else {
                                        if (status === V++) {
                                          cm.inGameDirectionEvent_AskAnswerTime(1500);
                                        } else if (status === V++) {
                                          cm.warp(993110755, 0, true);
                                          cm.setInGameDirectionMode(false, true, false);
                                          cm.npc_LeaveField("oid=2196634");
                                          cm.npc_LeaveField("oid=2196634");
                                          cm.npc_LeaveField("oid=2196635");
                                          cm.npc_LeaveField("oid=2196635");
                                          cm.npc_LeaveField("oid=2196636");
                                          cm.npc_LeaveField("oid=2196636");
                                          cm.npc_LeaveField("oid=2196644");
                                          cm.npc_LeaveField("oid=2196644");
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
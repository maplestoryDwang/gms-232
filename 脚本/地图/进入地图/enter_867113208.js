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
      cm.forceStartQuest(63062, '');
      cm.updateInfoQuest(63062, "Start=1");
      cm.forceStartQuest(63254, 'sit');
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.setStandAloneMode(true);
      cm.forceStartQuest(63088, "sit");
      cm.npc_ChangeController(9400238, "oid=22548624", 334, 80, 6, 284, 384, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22548624", "summon", 0, 0);
      cm.npc_ChangeController(9400239, "oid=22548625", 565, 80, 7, 515, 615, 1, true, 0, false);
      cm.npc_SetSpecialAction("oid=22548625", "summon", 0, 0);
      cm.npc_ChangeController(9400240, "oid=22548626", -250, 80, 4, -300, -200, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22548626", "summon", 0, 0);
      cm.npc_ChangeController(9400241, "oid=22548627", -752, 80, 2, -802, -702, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22548627", 'summon', 0, 0);
      cm.npc_ChangeController(9400242, "oid=22548628", -613, 80, 3, -663, -563, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=22548628", "summon", 0, 0);
      cm.npc_ChangeController(9400247, "oid=22548629", -82, 80, 5, -132, -32, 0, false, 0, false);
      cm.npc_SetSpecialAction("oid=22548629", 'summon', 0, 0);
      cm.inGameDirectionEvent_PushScaleInfo(700, 2000, 700, 200, 120);
      cm.curNodeEventEnd(true);
      cm.effect_Text(["#fn黑体##fs30#异逝界\r\n#fs20#勇士之地"], [100, 4000, 4, 0, 0, 1, 4, 0, 0, 0]);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(3000);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2000);
          cm.effect_OnUserEff("Effect/OnUserEff.img/emotionBalloon/exclamation3");
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_PushScaleInfo(700, 2000, 700, -300, 120);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_AskAnswerTime(1500);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_PushScaleInfo(700, 2000, 700, 550, 120);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(1500);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_PushScaleInfo(700, 2000, 700, 200, 120);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#b诶？怎么回事？大家为什么都倒在地上！", 57, 0, false, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#fc0xfff3ddff#他们好像没有受伤……我觉得他们只是没力气才躺着哦？", 37, 9400205, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("#b到底为什么……？", 57, 0, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#fc0xfff3ddff#这个嘛……是不是因为你妨碍了他们，让他们没法做自己真正想做的事？", 37, 9400205, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#b他们真正想做的事……？不是安稳的生活吗……？", 57, 0, true, true);
                              } else {
                                if (status === V++) {
                                  cm.sendNormalTalk_Bottom("#fc0xfff3ddff#我看……你最好先转换到白天。", 37, 9400205, true, true);
                                } else {
                                  if (status === V++) {
                                    cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
                                  } else {
                                    if (status === V++) {
                                      cm.inGameDirectionEvent_PushScaleInfo(0, 1000, 2147483647, 2147483647, 2147483647);
                                    } else if (status === V++) {
                                      cm.setStandAloneMode(false);
                                      cm.dispose();
                                      cm.warp(867113200, 1, false);
                                      cm.setInGameDirectionMode(false, true, false);
                                      cm.npc_LeaveField("oid=22548624");
                                      cm.npc_LeaveField("oid=22548624");
                                      cm.npc_LeaveField("oid=22548625");
                                      cm.npc_LeaveField("oid=22548625");
                                      cm.npc_LeaveField("oid=22548626");
                                      cm.npc_LeaveField("oid=22548626");
                                      cm.npc_LeaveField("oid=22548627");
                                      cm.npc_LeaveField("oid=22548627");
                                      cm.npc_LeaveField("oid=22548628");
                                      cm.npc_LeaveField("oid=22548628");
                                      cm.npc_LeaveField("oid=22548629");
                                      cm.npc_LeaveField("oid=22548629");
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
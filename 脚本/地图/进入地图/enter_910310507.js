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
      cm.npc_ChangeController(1052229, "oid=218939", 5, 132, 2, -45, 55, 1, false, false);
      cm.npc_ChangeController(1052234, "oid=218940", 189, 132, 2, 139, 239, 1, true, false);
      cm.npc_ChangeController(1052233, "oid=218941", -156, 132, 1, -206, -106, 1, false, false);
      cm.npc_ChangeController(1052232, "oid=218942", -254, 132, 1, -304, -204, 0, true, false);
      cm.npc_ChangeController(1052231, "oid=218943", 268, 132, 2, 218, 318, 1, false, false);
      cm.npc_ChangeController(1052230, 'oid=218944', -70, 132, 1, -120, -20, 0, true, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.inGameDirectionEvent_SetAdditionalEffectVisibleForInGameDirection();
      cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 0, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.fieldEffect_InsertCanvas(0, 0, 0, 0, 0, 1500, 0);
        cm.sendNormalTalk_Bottom(" #b（向阿赫推荐了迪亚当新人歌手候选人。）#k", 57, 0, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#什么？你说你要推荐迪亚？迪亚，再次站在舞台上真的无妨吗？", 37, 1052229, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#是！如果再给我一次机会，我会更加努力的。", 37, 1052230, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#这样啊……我原以为你已经完全放弃了歌手这条路，真是的，虽然我与你一直在一起，却从来不知道迪亚你的心意呢。", 37, 1052229, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#如果再加上有歌手经验的迪亚，一定会很踏实的，这一次希望一定要成功！其他人是怎么想的呢？", 37, 1052229, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#好吧！好像是挺有趣的，嘻嘻！", 37, 1052231, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#我也赞成，新人组合的人数为奇数比较好，呵呵。", 37, 1052232, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#face0#我们日后就一起为了实现梦想努力吧！", 37, 1052233, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#face0#……我也觉得好。", 37, 1052234, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#face0#这一次一定要成功！我们一起努力！", 37, 1052229, true, true);
                        } else {
                          if (status === V++) {
                            cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                            cm.inGameDirectionEvent_AskAnswerTime(500);
                          } else if (status === V++) {
                            cm.dispose();
                            cm.warp(103041001, 0);
                            cm.inGameDirectionEvent_SetHideEffect(0);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;
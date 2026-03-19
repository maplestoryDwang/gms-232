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
      cm.setInGameDirectionMode(true, true, true);
      cm.npc_ChangeController(1032209, "oid=46449920", -15, -30, 3, -65, 35, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=46449920", "summon", 0, 0);
      cm.sendNormalTalk("你之所以回希利尼提，是因为觉得这里最适合修炼黑暗力量吧？也是，这里最为安静，还有许多从古代遗留下来的禅师们的记录。", 1, 1032209, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("黑暗力量正在不断地蚕食着我。这样下去，这种力量将脱离我的控制，邪恶气息会将我完全吞噬。我必须赶在这之前，学会控制它。所以我需要一个和我实力相当的，使用光之力量的人……", 17, 1032209, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("夜光法师不在的这段时间，我也进步很大，已经不再是以前的我了。虽然我的肉体已经回归大自然，但我的光影仍然可以发挥出和生前不相上下的光之力量。", 1, 1032209, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("光影……飞鱼丸，你已经达到那种境界啦？真让我吃惊啊。确实不再是我记忆中的你了。不过光之力量真的能压制出黑暗力量吗？弄不好我们都会受伤的。", 17, 1032209, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("行不行总得试试才知道。来吧。", 1, 1032209, true, true);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_SetFaceOff(20071);
                cm.inGameDirectionEvent_头顶图片(["Effect/Direction8.img/effect/tuto/floodEffect/1", "oid=16777215"], [2100, 0, 0, 1, 0, 251, 0, 0]);
                cm.inGameDirectionEvent_头顶图片(["Effect/Direction8.img/effect/tuto/floodEffect/2", "oid=16777215"], [2100, 0, 0, 1, 0, 250, 0, 0]);
                cm.inGameDirectionEvent_AskAnswerTime(1800);
              } else {
                if (status === V++) {
                  cm.npc_ChangeController(1032217, "oid=46450331", -330, -30, 3, -380, -280, 0, false, 0, false);
                  cm.npc_SetSpecialAction("oid=46450331", "summon", 0, 0);
                  cm.sendNormalTalk("夜光法师，不要！", 9, 1032217, false, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_MoveAction(1);
                    cm.inGameDirectionEvent_AskAnswerTime(30);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_MoveAction(0);
                      cm.sendNormalTalk("……？！拉尼娅？", 3, 1032217, false, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("夜光法师。我一直在等你，从未放弃过。那数不清的漫长岁月……", 9, 1032217, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("什么意思？拉尼娅，拉尼娅！！", 3, 1032217, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk('……夜光法师？', 1, 1032209, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_头顶图片(["Effect/Direction8.img/effect/tuto/BalloonMsg1/3"], [0, 0, -180, 0, 0, 0, 0, 0]);
                              cm.inGameDirectionEvent_AskAnswerTime(2100);
                            } else {
                              if (status === V++) {
                                cm.fieldEffect_ScreenMsg("demonSlayer/whiteOut");
                                cm.inGameDirectionEvent_AskAnswerTime(4000);
                              } else if (status === V++) {
                                cm.eventSKill(0);
                                cm.setInGameDirectionMode(false, true, false);
                                cm.npc_LeaveField("oid=46449920");
                                cm.npc_LeaveField("oid=46449920");
                                cm.npc_LeaveField("oid=46450331");
                                cm.npc_LeaveField("oid=46450331");
                                cm.dispose();
                                cm.warp(910142051, 0, false);
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
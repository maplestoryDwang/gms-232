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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.inGameDirectionEvent_SetHideEffect(1);
      cm.npc_ChangeController(1530300, "oid=38377344", -315, 118, 20, -365, -265, 0, true, false);
      cm.npc_SetSpecialAction("oid=38377344", "summon", 0, 0);
      cm.npc_ChangeController(1530100, "oid=38377345", -199, 118, 18, -249, -149, 1, true, false);
      cm.npc_SetSpecialAction("oid=38377345", "summon", 0, 0);
      cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
      cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
      cm.inGameDirectionEvent_AskAnswerTime(1600);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_AskAnswerTime(3000);
        cm.effect_Text(["#fn黑体##fs26#一天前\r\n#fs14#~ 学校前, 大树下 ~"], [100, 2500, 4, 0, 0, 1, 4, 0, 0, 0]);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("很抱歉，哥哥。", 33, 1530300, false, true);
          cm.effect_Voice("Voice2.img/Friends/CH5_02/1", 100);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("呃，为什么？上周我们还在一起玩得很开心啊。你为什么突然不想跟我交往了呢？", 33, 1530100, true, true);
            cm.effect_Voice("Voice2.img/Friends/CH5_02/2", 100);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("实际上，我已经不再把你当做男人。", 33, 1530300, true, true);
              cm.effect_Voice("Voice2.img/Friends/CH5_02/3", 100);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("我曾经觉得你很帅……但自从见到他之后，在我眼中，所有的男生都成了乌贼！", 33, 1530300, true, true);
                cm.effect_Voice("Voice2.img/Friends/CH5_02/4", 100);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("你指的是那个叫做什么白的传闻中的实习老师吗？", 33, 1530100, true, true);
                  cm.effect_Voice("Voice2.img/Friends/CH5_02/5", 100);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("阿。白。实习老师！他是拥有纯白的头发与乳白色皮肤的阿白实习老师！什么白？？对我们实习老师说话请放尊重点！", 33, 1530300, true, true);
                    cm.effect_Voice("Voice2.img/Friends/CH5_02/6", 100);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_头顶图片(["Effect/OnUserEff.img/emotion/ddam", "oid=38377345"], [0, 0, 0, 1, 0, 1, 0, 0]);
                      cm.inGameDirectionEvent_AskAnswerTime(1500);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("呃，那个……", 33, 1530100, false, true);
                        cm.effect_Voice("Voice2.img/Friends/CH5_02/7", 100);
                      } else {
                        if (status === V++) {
                          cm.npc_LeaveField("oid=38377344");
                          cm.npc_LeaveField("oid=38377344");
                          cm.npc_ChangeController(1530300, "oid=38385750", -315, 118, 20, -365, -265, 1, true, false);
                          cm.npc_SetSpecialAction("oid=38385750", 'summon', 0, 0);
                          cm.fieldEffect_InsertCanvas11(0, 256, 0, 0, 0, 0);
                          cm.fieldEffect_InsertCanvas(1, 150, 0, 0, 0, 1300, 0);
                          cm.inGameDirectionEvent_AskAnswerTime(1600);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk_Bottom("以后请不要跟我说话了！哼！！", 33, 1530300, false, true);
                            cm.effect_Voice("Voice2.img/Friends/CH5_02/8", 100);
                          } else {
                            if (status === V++) {
                              cm.fieldEffect_InsertCanvas(1, 255, 0, 0, 0, 500, 0);
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else if (status === V++) {
                              cm.dispose();
                              cm.warp(330002503, 0);
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;
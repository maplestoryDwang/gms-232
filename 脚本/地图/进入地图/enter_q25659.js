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
      cm.npc_ChangeController(1032210, "oid=67188167", 400, -50, 15, 350, 450, 1, false, 0, false);
      cm.npc_SetSpecialAction("oid=67188167", "summon", 0, 0);
      cm.sendNormalTalk("浓厚的黑暗力量笼罩下来，树林发生了明显的变化。难道黑魔法师亲自来了？", 17, 0, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_PushMoveInfo(0, 450, 500, -23);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_AskAnswerTime(2687);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("飞鱼丸……？！他怎么会离开拉尼娅的家来到这种地方？", 17, 0, false, true);
          } else {
            if (status === V++) {
              cm.inGameDirectionEvent_PushMoveInfo(1, 0, 0, 0);
            } else {
              if (status === V++) {
                cm.inGameDirectionEvent_AskAnswerTime(1000);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_MoveAction(2);
                  cm.sendNormalTalk("你来了，我真没脸见你。", 1, 1032210, false, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("怎么回事？你怎么会在这里？拉尼娅呢？其他人在哪里？", 3, 1032210, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("天知道黑魔法师怎么知道了那个地方，亲自来突袭我们。守护者机器人被毁了，工作员0和佩妮好不容易才躲起来。可拉尼娅……很抱歉。靠我的力量，实在抵挡不住黑魔法师。幸好我是个光影，这才艰辛地保留形态，躲到了这里。", 1, 1032210, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("这么说拉尼娅被黑魔法师带走了？！", 3, 1032210, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("是的，他们离开还没多长时间，得赶快追上去。我把你送到黑暗力量最强的地方去吧。", 1, 1032210, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("拉尼娅一定要平安无事啊……你可能会再到那地方去，我把坐标记录在极光三棱镜上了。", 1, 1032210, true, true);
                          } else if (status === V++) {
                            cm.forceCompleteQuest(25659);
                            cm.gainExp(301609);
                            cm.curNodeEventEnd(true);
                            cm.npc_LeaveField("oid=67188167");
                            cm.npc_LeaveField("oid=67188167");
                            cm.dispose();
                            cm.warp(910142090, 0, false);
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
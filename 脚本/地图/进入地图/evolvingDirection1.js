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
      cm.npc_ChangeController(9075005, "oid=290907", -84, 136, 9, -134, -34, 0, false, 0, false);
      cm.npc_ChangeController(9075004, "oid=290908", 384, 136, 16, 334, 434, 1, false, 0, false);
      cm.npc_ChangeController(9075000, "oid=290909", 312, -72, 28, 262, 341, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.fieldEffect_ScreenMsg("evolving/mapname");
      cm.inGameDirectionEvent_AskAnswerTime(3000);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("你在干什么？格里梅尔！为什么不经允许就把斯乌搬到这里！", 1, 9075005, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("奥，奥尔卡，你来啦？我正在等你。", 1, 9075004, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("废话少说，快给我解释一下！我不是让你把斯乌放在奥尔卡房间旁边的嘛！斯乌是奥尔卡的双胞胎哥哥！必须一直和奥尔卡在一起！我可没说过你能随便动他！", 1, 9075005, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("呃……我是有理由的。请别激动，听我解释。", 1, 9075004, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("你……最近看你越来越不顺眼了。你不是说实验马上就要结束了吗？为什么斯乌还没醒来？我跟你说过吧？不好好干的话，就把你干掉！", 1, 9075005, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("刚好你提起来了。现在实验差不多已经结束了。斯乌可以醒过来了。", 1, 9075004, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("真的吗？斯乌真的能醒过来吗？如果斯乌真的能醒过来，这次的事情就算了。但如果这次醒不过来……我绝不会原谅你。", 1, 9075005, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("真的能醒过来。来，请看。", 1, 9075004, true, true);
                    } else {
                      if (status === V++) {
                        cm.fieldEffect_ScreenMsg("evolving/swoo1");
                        cm.inGameDirectionEvent_AskAnswerTime(5000);
                      } else if (status === V++) {
                        cm.dispose();
                        cm.warp(957020002, 0, false);
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
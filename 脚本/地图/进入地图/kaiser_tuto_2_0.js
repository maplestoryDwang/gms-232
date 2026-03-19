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
      cm.npc_ChangeController(3000107, "oid=1053329", -2000, 20, 21, -2050, -1950, 0, true, 0, false);
      cm.npc_SetSpecialAction("oid=1053329", "summon", 0, 0);
      cm.sendNormalTalk("没想到竟然连这里都出现了幽灵……", 17, 3000107, false, true);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.sendNormalTalk("看来情况比想象的更严重！", 1, 3000107, true, true);
      } else {
        if (status === V++) {
          cm.inGameDirectionEvent_MoveAction(1);
          cm.inGameDirectionEvent_AskAnswerTime(30);
        } else {
          if (status === V++) {
            cm.inGameDirectionEvent_MoveAction(0);
            cm.sendNormalTalk("我有不好的预感。请你赶紧返回，立即建立防御膜，做好万全准备。", 3, 3000107, false, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("越是这种时候，我才更应该跟你一起去。虽然你是狂龙战士，可是单枪匹马对付他们……", 1, 3000107, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("卡塔利安，你是诺巴骑士。你难道忘了，比性命更宝贵的首要任务正是保卫诺巴族的安全？而且我是狂龙战士，从来只有我操心别人的，才没有弱到需要别人操心呢。", 3, 3000107, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("既然你这么坚持……那么只能祝你好运了。", 1, 3000107, true, true);
                } else {
                  if (status === V++) {
                    cm.inGameDirectionEvent_AskAnswerTime(1000);
                  } else if (status === V++) {
                    cm.npc_LeaveField("oid=1053329");
                    cm.dispose();
                    cm.warp(940001100, 0, false);
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
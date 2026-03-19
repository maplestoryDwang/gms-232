var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.npc_ChangeController(1302024, "oid=4409", 1250, 123, 1, 1200, 1300, 1, false, false);
      cm.npc_ChangeController(1302025, "oid=4410", 901, 305, 7, 851, 951, 1, false, false);
      cm.npc_ChangeController(1302002, "oid=4411", 817, 305, 7, 767, 867, 1, false, false);
      cm.curNodeEventEnd(true);
      cm.eventSKill(0);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_MoveAction(1);
      cm.inGameDirectionEvent_AskAnswerTime(100);
    } else {
      if (status === V++) {
        cm.curNodeEventEnd(true);
        cm.inGameDirectionEvent_MoveAction(0);
        cm.sendNormalTalk_Bottom("(力，力气可真大！但是如果能这么容易就把铁链解开的话，还有必要非得找到钥匙吗？)", 57, 1302001, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("好了，我们快逃吧。啊，但是……怎么办呢？我走不动了。我从小身体就很弱。没办法。我就给你一个背我的机会吧。", 33, 1302001, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("我，我可以拒绝吗……呃？！", 57, 1302001, true, true);
          } else {
            if (status === V++) {
              cm.forceStartQuest(30067, '');
              cm.inGameDirectionEvent_AskAnswerTime(2000);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom('哥哥，快跑！', 33, 1302001, false, true);
              } else if (status === V++) {
                cm.eventSKill(0);
                cm.setInGameDirectionMode(false, true, false);
                cm.dispose();
                cm.warp(106031500, 0);
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
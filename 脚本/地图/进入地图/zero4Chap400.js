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
      cm.npc_ChangeController(2450040, 'oid=26541', -367, 586, 521, -417, -317, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("……你们是来找#p2450000#患者的吧？唉。他还没回过神来。", 33, 2450040, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#face10#……那没问题吧？", 41, 2400005, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("他的状况并不好。有时睁开眼睛就开始说胡话……并不像服用了破坏精神的药而产生的影响。", 33, 2450040, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#face10#……他不可能恢复正常了？", 41, 2400006, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk('很遗憾……', 33, 2450040, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else if (status === V++) {
                  cm.dispose();
                  cm.warp(325000000, 15, true);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;
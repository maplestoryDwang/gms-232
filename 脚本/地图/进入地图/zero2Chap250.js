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
      cm.npc_ChangeController(2400012, "oid=25308", 724, -189, 39, 674, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400013, "oid=25309", -120, -78, 92, -170, -70, 0, false, 0, false);
      cm.npc_ChangeController(2400014, "oid=25310", -7, -189, 35, -10, 43, 0, false, 0, false);
      cm.npc_ChangeController(2400015, "oid=25311", 697, -410, 53, 647, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400016, "oid=25312", 29, -410, 18, -10, 79, 0, false, 0, false);
      cm.npc_ChangeController(2400017, "oid=25313", 215, -230, 36, 165, 265, 0, false, 0, false);
      cm.npc_ChangeController(2400019, 'oid=25314', 621, -151, 74, 571, 644, 1, false, 0, false);
      cm.npc_ChangeController(2400021, "oid=25315", 886, -298, 100, 836, 936, 1, false, 0, false);
      cm.npc_ChangeController(2400026, 'oid=25316', 360, 5, 4, 310, 410, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("差不多到了#p2430004#该告诉我们#p2430000#所在地方的时候了。", 41, 2400005, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("嗯，时间到了。", 41, 2400006, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("竟然被他们关起来了，怎么会就这么乖乖地说出来呢，而且看起来还挺担心#p2430000#似的。", 41, 2400005, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("难道……他们也不想关着他？", 41, 2400006, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("难说……", 41, 2400005, true, true);
              } else {
                if (status === V++) {
                  cm.inGameDirectionEvent_AskAnswerTime(500);
                } else if (status === V++) {
                  cm.dispose();
                  cm.setInGameDirectionMode(false, true, false);
                  cm.warp(323000000, 14, false);
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
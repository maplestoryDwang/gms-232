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
      cm.npc_ChangeController(2400012, "oid=27081", 380, -269, 35, 330, 430, 1, false, 0, false);
      cm.npc_ChangeController(2400013, "oid=27082", -120, -78, 90, -170, -70, 0, false, 0, false);
      cm.npc_ChangeController(2400014, "oid=27083", -7, -189, 33, -10, 43, 0, false, 0, false);
      cm.npc_ChangeController(2400015, "oid=27084", 697, -410, 52, 647, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400016, "oid=27085", 29, -410, 16, -10, 79, 0, false, 0, false);
      cm.npc_ChangeController(2400019, "oid=27086", 457, -230, 34, 407, 507, 1, false, 0, false);
      cm.npc_ChangeController(2400021, 'oid=27087', 885, -298, 98, 835, 935, 1, false, 0, false);
      cm.npc_ChangeController(2400026, "oid=27088", 363, 5, 4, 313, 413, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#face0#……#p2400007#神官说要去找#p2400008#神官，就出去了。", 33, 2400000, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("…………", 41, 2400005, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("……在神殿外待太久的话……不太好吧？", 41, 2400006, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#face0#嗯。我们只能待在神殿里才能拥有很长的寿命。在神殿外面待太久的话，时间之力会消失，我们也会随之灭亡。", 33, 2400000, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#face0#虽然#p2400007#神官会时常进去确认下状况……#p2400008#神官究竟是怎么……", 33, 2400000, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#face10#为什么……那么做呢。", 41, 2400006, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("#face11#……先等等#p2400007#吧。", 41, 2400005, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else if (status === V++) {
                      cm.dispose();
                      cm.warp(320000000, 4, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;
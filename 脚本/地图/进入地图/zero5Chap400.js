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
      cm.npc_ChangeController(2400012, "oid=27094", 728, -189, 38, 678, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400013, "oid=27095", -120, -78, 90, -170, -70, 0, false, 0, false);
      cm.npc_ChangeController(2400014, "oid=27096", -7, -189, 33, -10, 43, 0, false, 0, false);
      cm.npc_ChangeController(2400015, "oid=27097", 697, -410, 52, 647, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400016, "oid=27098", 29, -410, 16, -10, 79, 0, false, 0, false);
      cm.npc_ChangeController(2400017, 'oid=27099', 208, -230, 34, 158, 258, 0, false, 0, false);
      cm.npc_ChangeController(2400019, "oid=27100", 421, -269, 35, 371, 471, 1, false, 0, false);
      cm.npc_ChangeController(2400021, 'oid=27101', 887, -298, 98, 837, 937, 1, false, 0, false);
      cm.npc_ChangeController(2400026, "oid=27102", 362, 5, 4, 312, 412, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.inGameDirectionEvent_MoveAction(0);
        cm.sendNormalTalk("#face2#……#p2400008#那家伙……由于太爱护两位，才会背叛两位的啊……糊涂的家伙……", 33, 2400007, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#face0#……很抱歉。这都怪我没能管理好神官。", 33, 2400000, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#face2#我也很抱歉。我们是兄弟……我却没能照顾好他……", 33, 2400007, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#face10#……我知道这不是你们的错。", 41, 2400005, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#face9#…………", 41, 2400006, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#face2#还是……很抱歉。", 33, 2400007, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("#face1#以后……搜索女神之泪的事情就由#p2400007#神官负责。我们不能停留于此。请帮我们证明……#p2400008#神官的担忧只是错觉。", 33, 2400000, true, true);
                  } else {
                    if (status === V++) {
                      cm.inGameDirectionEvent_AskAnswerTime(500);
                    } else if (status === V++) {
                      cm.dispose();
                      cm.warp(320000000, 1, false);
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
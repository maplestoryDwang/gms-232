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
      cm.npc_ChangeController(2400012, "oid=25938", 728, -189, 39, 678, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400013, "oid=25939", -120, -78, 92, -170, -70, 0, false, 0, false);
      cm.npc_ChangeController(2400014, "oid=25940", -7, -189, 35, -10, 43, 0, false, 0, false);
      cm.npc_ChangeController(2400015, "oid=25941", 697, -410, 53, 647, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400016, "oid=25942", 29, -410, 18, -10, 79, 0, false, 0, false);
      cm.npc_ChangeController(2400017, "oid=25943", 446, -230, 36, 396, 496, 1, false, 0, false);
      cm.npc_ChangeController(2400018, "oid=25944", 284, -230, 36, 234, 334, 0, false, 0, false);
      cm.npc_ChangeController(2400019, "oid=25945", 393, -206, 59, 343, 443, 1, false, 0, false);
      cm.npc_ChangeController(2400021, 'oid=25946', 885, -298, 100, 835, 935, 1, false, 0, false);
      cm.npc_ChangeController(2400026, "oid=25947", 362, 5, 4, 312, 412, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("……就这样，第三个女神之泪，#p2440000#不愿意回来。", 41, 2400005, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("这……这个还是第一次碰到这种情况。女神之泪竟然会说不想跟着二位。", 33, 2400008, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#face0##p2420000#和#p2430000#是想当然地跟着两位了。这也太神奇了，这可能吗？", 33, 2400007, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("就是说。女神之泪是当初女神伦娜为了两位，分离出的一部分力量，要重新被两位吸收那是理所当然的事情……难道这也是镜世界的副作用？", 33, 2400000, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("副作用？不是不良品？早已厌倦的想睡午觉的女神之泪，我能怎么办？", 41, 2400005, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("虽然很荒谬，但是#p2420000#和#p2430000#那样，就把他当做是自己的个性吧……", 33, 2400000, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk('当做？', 41, 2400006, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk('总得要说服他吧。', 33, 2400000, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#face3#……那就是说你们也没办法。好，我去说服他，但是说服不了的话……就要找找#r其他方法#k了。", 41, 2400005, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("其他方法？", 41, 2400006, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("#face3#我以后再告诉你。", 41, 2400005, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else if (status === V++) {
                              cm.dispose();
                              cm.warp(324090110, 0, false);
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
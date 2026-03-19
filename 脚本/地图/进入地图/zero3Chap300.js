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
      cm.npc_ChangeController(2400012, 'oid=25966', 728, -189, 39, 678, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400013, 'oid=25967', -120, -78, 92, -170, -70, 0, false, 0, false);
      cm.npc_ChangeController(2400014, "oid=25968", -7, -189, 35, -10, 43, 0, false, 0, false);
      cm.npc_ChangeController(2400015, "oid=25969", 697, -410, 53, 647, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400016, "oid=25970", 29, -410, 18, -10, 79, 0, false, 0, false);
      cm.npc_ChangeController(2400017, "oid=25971", 208, -230, 36, 158, 258, 0, false, 0, false);
      cm.npc_ChangeController(2400019, "oid=25972", 157, 5, 5, 107, 207, 0, false, 0, false);
      cm.npc_ChangeController(2400021, "oid=25973", 886, -298, 100, 836, 936, 1, false, 0, false);
      cm.npc_ChangeController(2400026, "oid=25974", 361, 5, 4, 311, 411, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#face10#…………", 41, 2400006, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#face11#…………", 41, 2400005, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#face10#怎么……办？", 41, 2400006, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("什么？", 41, 2400005, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#face10#影子骑士团……你还没有和神官提起过……", 41, 2400006, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#face10#也不打算告诉我吗？", 41, 2400006, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("#face11#……我正在想呢。", 41, 2400005, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#face10#你要回到影子骑士团吗？", 41, 2400006, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#face11#正在思考呢，如果他说的真是事实……如果影子骑士团内部真的会出现叛乱，那么去加入他们也不是坏事。", 41, 2400005, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("#face11#也不用被他们追着寻找女神之泪……还可以直接攻打#p2410000#。", 41, 2400005, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("#face10#……我不愿意……", 41, 2400006, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("……我还没决定呢，还要再考虑一下，我们还是先去武陵吧。", 41, 2400005, true, true);
                            } else {
                              if (status === V++) {
                                cm.inGameDirectionEvent_AskAnswerTime(500);
                              } else if (status === V++) {
                                cm.dispose();
                                cm.warp(324090230, 0, false);
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;
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
      cm.npc_ChangeController(2400012, "oid=24178", 377, -260, 56, 327, 427, 1, false, 0, false);
      cm.npc_ChangeController(2400013, "oid=24179", -120, -78, 133, -170, -70, 0, false, 0, false);
      cm.npc_ChangeController(2400014, "oid=24180", -7, -189, 33, -10, 43, 0, false, 0, false);
      cm.npc_ChangeController(2400015, "oid=24181", 697, -410, 53, 647, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400016, "oid=24182", 29, -410, 16, -10, 79, 0, false, 0, false);
      cm.npc_ChangeController(2400017, 'oid=24183', 215, -230, 34, 165, 265, 0, false, 0, false);
      cm.npc_ChangeController(2400018, "oid=24184", 520, -230, 34, 470, 556, 1, false, 0, false);
      cm.npc_ChangeController(2400019, "oid=24185", 453, -230, 34, 403, 503, 1, false, 0, false);
      cm.npc_ChangeController(2400021, "oid=24186", 886, -298, 146, 836, 936, 1, false, 0, false);
      cm.npc_ChangeController(2400026, "oid=24187", 363, 5, 4, 313, 413, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("两位找到的圣物已经停止了暴走，不再施加诅咒了。", 33, 2400000, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("但是，还没有变成两位可以使用的形态哦。其实原因也很简单。", 33, 2400000, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("虽然圣物是为时间超越者而诞生，但是它不认可的话就不会展现出真正的形态，它的自尊心的确很强哦。", 33, 2400000, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("换句话说，从现在开始就要进行#b获得圣物认可的考验#k了。", 33, 2400000, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("从头到尾这家伙怎么这么招人烦呢，切。", 41, 2400005, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("呵呵，因为它有那个价值嘛。", 33, 2400000, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("为了考试，首先得进入#b圣物的内心世界#k，和圣物本身见面才可以。", 33, 2400000, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#p2400007#神官会带两位到圣物的内心世界。呵呵，准备好了就和#b#p2400007##k神官对话吧。", 33, 2400000, true, true);
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;
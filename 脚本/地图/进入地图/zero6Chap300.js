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
      cm.npc_ChangeController(2400012, "oid=27628", 728, -189, 39, 678, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400013, "oid=27629", -120, -78, 133, -170, -70, 0, false, 0, false);
      cm.npc_ChangeController(2400014, "oid=27630", -7, -189, 33, -10, 43, 0, false, 0, false);
      cm.npc_ChangeController(2400015, 'oid=27631', 697, -410, 53, 647, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400016, "oid=27632", 29, -410, 16, -10, 79, 0, false, 0, false);
      cm.npc_ChangeController(2400017, 'oid=27633', 208, -230, 34, 158, 258, 0, false, 0, false);
      cm.npc_ChangeController(2400019, "oid=27634", 421, -276, 35, 371, 471, 1, false, 0, false);
      cm.npc_ChangeController(2400021, "oid=27635", 886, -298, 146, 836, 936, 1, false, 0, false);
      cm.npc_ChangeController(2400026, 'oid=27636', 364, 5, 4, 314, 414, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#face4#……阿尔法。我们，去见见女神吧。", 41, 2400006, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("什么？不是跟你说过了嘛。我们去到冒险岛世界的话，女神就会消亡。我们没法见到女神。", 41, 2400005, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#face5#在冒险岛世界不行。但是在镜世界是可能的啊。", 41, 2400006, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("……到时间碎片生成的空间中去见女神？那可行吗？在无数个时间碎片中，找到女神所在的地方的方法是？", 41, 2400005, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#face10#……没办法吗？", 41, 2400006, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("……看你说得那么坚定，我还以为你有办法呢，原来你没啊…… 我真不该对你有所期待。但是…… 我仔细想了一下，我觉得这样行得通。", 41, 2400005, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("女神之泪，赫尔和梅拉…… 他们俩能在时间碎片生成的无数空间中为我们引路。如果是他俩的话…… 尤其是#b掌管过去的梅拉的话，应该知道女神所在的空间在哪吧#k？", 41, 2400005, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#face7#阿尔法…… 你真是聪明啊。", 41, 2400006, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#face0#什么啊……你为什么这么看我，好像到现在才知道我聪明一样！我一直都很聪明啊？！", 41, 2400005, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk('……？', 41, 2400006, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("#face0#所以你不要那么看我！额额额额！真郁闷！", 41, 2400005, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("#face10#……别生气。", 41, 2400006, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("#face0#还不是因为你！", 41, 2400005, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else if (status === V++) {
                                  cm.dispose();
                                  cm.warp(327000000, 10, false);
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
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;
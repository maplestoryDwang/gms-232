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
      cm.npc_ChangeController(2400012, "oid=27050", 728, -189, 39, 678, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400013, 'oid=27051', -120, -78, 92, -170, -70, 0, false, 0, false);
      cm.npc_ChangeController(2400014, "oid=27052", -7, -189, 35, -10, 43, 0, false, 0, false);
      cm.npc_ChangeController(2400015, "oid=27053", 697, -410, 53, 647, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400016, "oid=27054", 29, -410, 18, -10, 79, 0, false, 0, false);
      cm.npc_ChangeController(2400017, "oid=27055", 208, -230, 36, 158, 258, 0, false, 0, false);
      cm.npc_ChangeController(2400019, "oid=27056", 269, 5, 11, 219, 319, 1, false, 0, false);
      cm.npc_ChangeController(2400018, "oid=27057", 515, -230, 36, 465, 556, 1, false, 0, false);
      cm.npc_ChangeController(2400021, "oid=27058", 887, -298, 100, 837, 937, 1, false, 0, false);
      cm.npc_ChangeController(2400026, "oid=27059", 363, 5, 4, 313, 413, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("怎么样？这次的女神之泪是真的吗？", 33, 2400000, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#face0#这次一定！得是真的才行啊。两位实力很强，所以我并不担心，但是继续这样白跑的话，两位会泄气的。不是吗？", 33, 2400007, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#face4#我还不知道他是真是假。但，不是真的吗？", 41, 2400005, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("真的……是女神之泪吗？", 33, 2400018, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#face5#恩，不是那样吗？虽然像抓住#p2450000#那样，直接抓住他的手就能确认了，但说不定又会爆炸，我想再观察下看看。", 41, 2400005, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk('…………', 41, 2400006, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("#b(恩？为什么要拉我的衣服？是有话要说吗？)", 41, 2400005, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#face10##b(#p2460000#……你觉得他是真的？)", 41, 2400006, true, true);
                      cm.updateInfoQuest(15172, "mobid=9101078");
                      cm.updateInfoQuest(15172, "mobid=9101078;lasttime=2019/12/08 17:28:51");
                      cm.updateInfoQuest(15172, "count=1;mobid=9101078;lasttime=2019/12/08 17:28:51");
                      cm.updateInfoQuest(15172, "count=1;mobid=9101078;lasttime=2019/12/08 17:28:51;mobDead=1");
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#face11##b(不是的。我并不那么认为。只是……我觉得我们应该谨慎行事。)", 41, 2400005, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("#face10##b(……谨慎……)", 41, 2400006, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("#face5#我们先走了。不管是真是假，都要再见到#p2460000#才行。", 41, 2400005, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("#face1#请小心啊……也许他会是敌人呢。", 33, 2400008, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("#face11#当然，我们会时刻警惕的。别担心。", 41, 2400005, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else if (status === V++) {
                                  cm.dispose();
                                  cm.warp(326000000, 11, false);
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
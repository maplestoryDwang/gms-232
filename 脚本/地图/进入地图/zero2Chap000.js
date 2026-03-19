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
      cm.npc_ChangeController(2400012, "oid=25235", 460, -230, 36, 410, 510, 1, false, 0, false);
      cm.npc_ChangeController(2400013, "oid=25236", -120, -78, 92, -170, -70, 0, false, 0, false);
      cm.npc_ChangeController(2400014, "oid=25237", -7, -189, 35, -10, 43, 0, false, 0, false);
      cm.npc_ChangeController(2400015, "oid=25238", 697, -410, 53, 647, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400016, "oid=25239", 29, -410, 18, -10, 79, 0, false, 0, false);
      cm.npc_ChangeController(2400017, "oid=25240", 542, -248, 51, 522, 592, 1, false, 0, false);
      cm.npc_ChangeController(2400018, "oid=25241", 382, -260, 57, 332, 432, 1, false, 0, false);
      cm.npc_ChangeController(2400019, "oid=25242", 281, -230, 36, 231, 331, 0, false, 0, false);
      cm.npc_ChangeController(2400021, "oid=25243", 886, -298, 100, 836, 936, 1, false, 0, false);
      cm.npc_ChangeController(2400026, 'oid=25244', 361, 5, 4, 311, 411, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("好了，两位该去寻找第二个女神之泪了。#p2400008#神官已经找到了第二个女神之泪的位置……是在哪里？", 33, 2400000, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("第二个女神之泪所在的地方是……在这个地图上叫做#b射手村#k的地方。虽然看起来像个小村子，但具体是什么地方我们也不清楚。也有可能我们在成为神官之前，这个村子也不曾存在过。", 33, 2400008, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("我们只知道以前女神被封印之前的冒险岛世界。那时候我们也去很多地方旅行过，没有我们不知道的地方。但是这次这个地方如此陌生，恐怕就是后来才建造的。那里到底生活着什么人，真是令人期待呢。", 33, 2400007, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("……嗯，这次女神之泪会不会又是个人类的形态呢？", 41, 2400005, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("那种可能性比较高哦？不过不用担心，之前的#p2420000#我们根本就不知道是人类的形态，不过这一次我们已经有了充分的准备，肯定能马上找到的。", 33, 2400000, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("这次应该不会像之前那样，没有看出来光在那里做傻事吧。女神之泪也不会像#p2420000#那么年老，这次估计以年轻点的人为目标寻找就可以了。", 41, 2400005, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("……这次的女神之泪，会是什么样的人呢？", 41, 2400006, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("去了才能知道，快去射手村看看吧。", 41, 2400005, true, true);
                    } else {
                      if (status === V++) {
                        cm.inGameDirectionEvent_AskAnswerTime(500);
                      } else if (status === V++) {
                        cm.dispose();
                        cm.warp(323090010, 0, false);
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
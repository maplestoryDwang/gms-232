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
      cm.npc_ChangeController(2400012, "oid=24738", 729, -189, 40, 679, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400013, 'oid=24739', -120, -78, 92, -170, -70, 0, false, 0, false);
      cm.npc_ChangeController(2400014, 'oid=24740', -7, -189, 35, -10, 43, 0, false, 0, false);
      cm.npc_ChangeController(2400015, "oid=24741", 697, -410, 54, 647, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400016, "oid=24742", 29, -410, 18, -10, 79, 0, false, 0, false);
      cm.npc_ChangeController(2400017, "oid=24743", 215, -230, 36, 165, 265, 0, false, 0, false);
      cm.npc_ChangeController(2400019, "oid=24744", 462, -167, 61, 412, 512, 0, false, 0, false);
      cm.npc_ChangeController(2400021, "oid=24745", 886, -298, 100, 836, 936, 1, false, 0, false);
      cm.npc_ChangeController(2400026, "oid=24746", 362, 5, 4, 312, 412, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.sendNormalTalk("嗯……有点清闲啊。沙图团要联系我们还有些时间……在神殿里上课也太无聊了。咦？#p2400008#哪里去了？", 41, 2400005, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#p2400008#神官去了趟村子里，好像要买什么东西。", 33, 2400000, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("两位不觉得很无聊吗？#p2400000#在外界的时候，学会了不少有趣的游戏。要不要一起来玩？", 33, 2400000, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("游戏？什么？", 41, 2400005, true, true);
          } else {
            if (status === V++) {
              cm.fieldEffect_PlayBGM("Bgm33.img/SmileZero", 0, 0);
              cm.sendNormalTalk("把这个#r棒棒饼干一人咬一端，然后吃到剩下一点点#k。#p2400005#，你要一起玩吗？", 33, 2400000, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#face6#不、不要……算了。", 41, 2400005, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("那么#p2400006#？", 33, 2400000, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk('试一下？', 41, 2400006, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#face6#你也不可以！我、我们要去阿里特安了！", 41, 2400005, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("咳，太可惜了。啊，对了，我听说阿里特安最近正在举办叫做#b#p2420018##k的庆典，你们去那看看吧？", 33, 2400000, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk('嗯……知道了。', 41, 2400006, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("#face6#我们走吧？", 41, 2400005, true, true);
                          } else if (status === V++) {
                            cm.dispose();
                            cm.warp(322000000, 10, false);
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
function start() {
  status = -1;
  action(1, 0, 0);
}
;
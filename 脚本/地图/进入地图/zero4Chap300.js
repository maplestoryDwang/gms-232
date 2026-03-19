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
      cm.npc_ChangeController(2400012, 'oid=26525', 728, -189, 40, 678, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400013, "oid=26526", -120, -78, 92, -170, -70, 0, false, 0, false);
      cm.npc_ChangeController(2400014, "oid=26527", -7, -189, 35, -10, 43, 0, false, 0, false);
      cm.npc_ChangeController(2400015, "oid=26528", 697, -410, 54, 647, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400016, 'oid=26529', 29, -410, 18, -10, 79, 0, false, 0, false);
      cm.npc_ChangeController(2400017, "oid=26530", 208, -230, 36, 158, 258, 0, false, 0, false);
      cm.npc_ChangeController(2400019, "oid=26531", 421, -269, 37, 371, 471, 1, false, 0, false);
      cm.npc_ChangeController(2400018, "oid=26532", 515, -230, 36, 465, 556, 1, false, 0, false);
      cm.npc_ChangeController(2400021, "oid=26533", 886, -298, 100, 836, 936, 1, false, 0, false);
      cm.npc_ChangeController(2400026, 'oid=26534', 363, 5, 4, 313, 413, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#face11#……我觉得在电站爆炸之前，还是和他断绝这关系比较好，于是抓住#p2450000#的手，放弃了这时间之力。并且，就在那瞬间#r爆炸#k发生了。", 41, 2400005, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("爆炸！？你们没事吧？！没有受伤吧！？", 33, 2400008, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("没有，爆炸发生在#p2450000# 附近，对我们没有多大影响。这种程度，感觉好像在挠痒。", 41, 2400005, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#face0#哈啊，真是谢天谢地……啊，很抱歉。我太惊慌了所以才这样。", 33, 2400008, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("#face0#爆炸后怎么样了？#p2450000#从女神之泪变成普通人了吗？", 33, 2400000, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#face10#……不，#p2450000#不可能变成人类。因为……他本来就是个普通人。", 41, 2400006, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("#face1#嗯？你是说……不会吧……", 33, 2400007, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#face11#在抓住他的手的瞬间，我才发现。#r#p2450000#本来就不是女神之泪。#k 突然感受到的时间之力是围绕在#p2450000#周围的力量，他本身并不具有时间之力。", 41, 2400005, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("#face1#等下！他不是女神之泪，周围怎么会有时间之力……还有，他又不是女神之泪，为什么喊着要和超越者脱离关系呢？那家伙的真实身份是什么啊？", 33, 2400007, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("#face11#这个。我们还不知道。现在得去了解下了。还好#p2450000#还活着。他被送到了埃德尔斯坦的医院。我们现在得对不是女神之泪的#p2450000#进行一番调查。", 41, 2400005, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("由于他一时半会还醒不了……我们想先询问下#b埃德尔斯坦#k的人们。警察#b#p2450001##k应该知道些什么吧。", 41, 2400005, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else if (status === V++) {
                              cm.dispose();
                              cm.warp(325000000, 8, false);
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
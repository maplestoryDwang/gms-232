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
      cm.npc_ChangeController(2400012, "oid=27564", 728, -189, 37, 678, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400013, "oid=27565", -120, -78, 90, -170, -70, 0, false, 0, false);
      cm.npc_ChangeController(2400014, "oid=27566", -7, -189, 33, -10, 43, 0, false, 0, false);
      cm.npc_ChangeController(2400015, 'oid=27567', 697, -410, 51, 647, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400016, "oid=27568", 29, -410, 16, -10, 79, 0, false, 0, false);
      cm.npc_ChangeController(2400017, "oid=27569", 208, -230, 34, 158, 258, 0, false, 0, false);
      cm.npc_ChangeController(2400019, 'oid=27570', 421, -269, 35, 371, 471, 1, false, 0, false);
      cm.npc_ChangeController(2400021, "oid=27571", 886, -298, 98, 836, 936, 1, false, 0, false);
      cm.npc_ChangeController(2400026, 'oid=27572', 364, 5, 4, 314, 414, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.inGameDirectionEvent_AskAnswerTime(500);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("#face0#……通过占卜器寻找到第四个女神之泪啦。女神之泪在玩具城…… 那里有很强的时间之力。", 33, 2400007, false, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("#face0#找到第三个女神之泪之后，事情一直毫无进展…… 说不定女神之泪也希望我们能快点找到他呢……", 33, 2400000, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("#face2#……如果没人妨碍的话，说不定早就找到了。", 33, 2400007, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("#face0#…………", 33, 2400000, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("……玩具城是什么样的地方？", 41, 2400005, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("#face0#是个时间停止的村庄。玩具城的国王认为要想村民们永远都幸福，就要让他们永远不变老。所以他请求女神伦娜将玩具城的时间停止了。", 33, 2400007, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("女神把时间停止的村庄……？", 41, 2400006, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("#face0#嗯，玩具城中央有个巨大的时间塔。时间停止以后，时间塔下面破碎的时间碎片聚集在一起，形成了奇异的空间。这还曾成为我们神官之间的话题。", 33, 2400000, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("不知道在这镜世界会是什么样的。两位也可能会受到这停止的时间的影响，请小心。", 33, 2400000, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("停止的时间，破碎的时间碎片吗。……我知道了。我会小心的。那我们出发吧，贝塔？", 41, 2400005, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("嗯……", 41, 2400006, true, true);
                          } else {
                            if (status === V++) {
                              cm.inGameDirectionEvent_AskAnswerTime(500);
                            } else if (status === V++) {
                              cm.dispose();
                              cm.warp(327090010, 0, false);
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
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
      cm.npc_ChangeController(2400012, "oid=28078", 728, -189, 39, 678, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400013, "oid=28079", -120, -78, 133, -170, -70, 0, false, 0, false);
      cm.npc_ChangeController(2400014, "oid=28080", -7, -189, 33, -10, 43, 0, false, 0, false);
      cm.npc_ChangeController(2400015, "oid=28081", 697, -410, 53, 647, 730, 1, false, 0, false);
      cm.npc_ChangeController(2400016, "oid=28082", 29, -410, 16, -10, 79, 0, false, 0, false);
      cm.npc_ChangeController(2400017, 'oid=28083', 208, -230, 34, 158, 258, 0, false, 0, false);
      cm.npc_ChangeController(2400019, "oid=28084", 448, -269, 36, 398, 498, 1, false, 0, false);
      cm.npc_ChangeController(2490003, 'oid=28085', 382, -276, 35, 332, 432, 1, false, 0, false);
      cm.npc_ChangeController(2400021, 'oid=28086', 886, -298, 146, 836, 936, 1, false, 0, false);
      cm.npc_ChangeController(2400026, "oid=28087", 363, 5, 4, 313, 413, 1, false, 0, false);
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, true, true);
      cm.sendNormalTalk("……真没想到我还能这么活下来…… 有点陌生呢。这么小的模样…… 你们这么救我值得吗？", 33, 2490003, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk("你们在镜世界摧毁的同时，用自己的力量使我新生…… 这样我把我所有的力量转移给你们就没有意义了啊。", 33, 2490003, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk("……嗯。所以你不喜欢？", 41, 2400005, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk("呼呼呼……", 41, 2400006, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk("怎么可能会不喜欢。我还这样活着。虽然我现在不是超越者，只是普通的伦娜…… 实际上，这种改变让我很激动。", 33, 2490003, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk("虽然你把作为超越者的力量全部给了我们，但是这镜世界因伦娜你而创造的，现在伦娜你也是这里的中心。", 41, 2400005, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk("只有伦娜你出力，这镜世界才能维持下去…… 没关系吗？即使不回到冒险岛世界……", 41, 2400006, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk("当然啦。反倒是我才想问问呢，你们还好吧？你们二位被困在这像监狱一样的镜世界中…………肯定有很多不好的记忆吧…………", 33, 2490003, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk("确实…… 虽然我们在镜世界里有些不开心的回忆…… 但是也有很多开心的回忆。", 41, 2400005, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk("这里也是我们的故乡。我们并不想摧毁这里……", 41, 2400006, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk("唉，两位真的很固执呢…… 也许因此你们会没有足够的力量与黑魔法师战斗。这样也没关系吗？", 33, 2490003, true, true);
                        } else {
                          if (status === V++) {
                            cm.sendNormalTalk("#face5#嗯，如果我们在镜世界里认识的人同样存在于冒险岛世界的话…… 那冒险岛世界也有很多值得为我们所用之人，我们和他们合作就行啦。", 41, 2400005, true, true);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk("#face4#更重要的是…… 我们不是一个人而是两个。我们齐心协力的话…… 一定能发挥出更大的力量。", 41, 2400006, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk("我只能相信你们了。", 33, 2490003, true, true);
                              } else {
                                if (status === V++) {
                                  cm.inGameDirectionEvent_AskAnswerTime(500);
                                } else if (status === V++) {
                                  cm.dispose();
                                  cm.warp(320000000, 3, false);
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
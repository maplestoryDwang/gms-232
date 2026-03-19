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
      cm.curNodeEventEnd(true);
      cm.setInGameDirectionMode(true, false, true);
      cm.npc_ChangeController(9400590, "oid=7538441", 400, 120, 13, 350, 450, 1, true, false);
      cm.npc_SetSpecialAction("oid=7538441", 'summon', 0, 0);
      cm.npc_ChangeController(9400597, "oid=7538442", 500, 120, 22, 450, 550, 1, true, false);
      cm.npc_SetSpecialAction("oid=7538442", "summon", 0, 0);
      cm.sendNormalTalk_Bottom("#b呵额，呵额… 古纳德村长！你太了不起了？", 57, 0, false, true);
      cm.curNodeEventEnd(true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face0#咳哈哈哈，这点没什么！", 37, 9400597, true, true);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#看来我们也对得起这口饭了！", 37, 9400597, true, true);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face0#…", 37, 9400590, true, true);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#现在总算知道到底是谁在耗粮食了，咳呃！", 37, 9400597, true, true);
            } else {
              if (status === V++) {
                cm.sendNormalTalk_Bottom("#face0#虚有其表的家伙，呸！", 37, 9400597, true, true);
              } else {
                if (status === V++) {
                  cm.sendNormalTalk_Bottom("#face0#不… 不会告诉村里人吧？", 37, 9400590, true, true);
                } else {
                  if (status === V++) {
                    cm.sendNormalTalk_Bottom("#face0#你是怕丢脸吗？", 37, 9400597, true, true);
                  } else {
                    if (status === V++) {
                      cm.sendNormalTalk_Bottom("#b不，大家都安全就可以了。", 57, 0, true, true);
                    } else {
                      if (status === V++) {
                        cm.sendNormalTalk_Bottom("#b不过这地方也会出现芬里斯，要尽快告诉大家。", 57, 0, true, true);
                      } else {
                        if (status === V++) {
                          cm.sendNormalTalk_Bottom("#b我们快点回去吧！", 57, 0, true, true);
                        } else {
                          if (status === V++) {
                            cm.setInGameDirectionMode(false, true, false);
                            cm.monadEndingScene(135 * Math.pow(cm.getLevel(), 3), 50 * Math.pow(cm.getLevel(), 2), [2439159, 0, 0, 0, 0, 0]);
                            cm.sendNormalTalk_Bottom("#face0#额哈哈，好痛快啊，好久没有这么敞开大笑过了？", 37, 9400597, true, true);
                            cm.effect_Voice("Field.img/masteryBook/EnchantSuccess", 100);
                          } else {
                            if (status === V++) {
                              cm.sendNormalTalk_Bottom("#face0#你也看到斯洛克的表情了吧？那一副苦逼脸。从此以后再也不敢说大话了吧！额哈哈哈", 37, 9400597, true, true);
                            } else {
                              if (status === V++) {
                                cm.sendNormalTalk_Bottom("#face0#这多亏了你和吉莉骑士！谁会想到我们竟然能在战斗中帮的上忙？", 37, 9400597, true, true);
                              } else if (status === V++) {
                                cm.forceCompleteQuest(64123);
                                cm.gainExp(135 * Math.pow(cm.getLevel(), 3));
                                cm.gainMeso(50 * Math.pow(cm.getLevel(), 2));
                                cm.gainItem(2439159, 1);
                                cm.npc_LeaveField("oid=7538441");
                                cm.npc_LeaveField("oid=7538441");
                                cm.npc_LeaveField("oid=7538442");
                                cm.npc_LeaveField("oid=7538442");
                                cm.dispose();
                                cm.warp(867202308, 0);
                                cm.monadEndingScene(-1, -1, null);
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
var status = -1;
var selectionLog = [];
function start(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      if (cm.getPlayer().isGM()) {
        cm.askYesNo("");
      } else {
        cm.forceStartQuest();
        cm.forceCompleteQuest();
        cm.dispose();
      }
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
  }
}
function stage0(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else if (status == v++) {
    cm.forceStartQuest();
    cm.dispose();
  }
}
function end(g, w, a) {
  if (status == 0 && g == 0) {
    cm.dispose();
    return;
  }
  if (g == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = a;
  var v = -1;
  if (status <= v++) {
    cm.dispose();
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face2#经历了那么一番波折，最后带回了这条项链啊。", 36, 1540451, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face2#仔细看看，这项链的外观太粗糙了……", 36, 1540451, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face2#也好像是从哪里掉下来的碎片。", 36, 1540451, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face2#如果是失忆漂泊的过程中，也依然珍藏的东西……", 36, 1540451, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("嗯……。", 56, 0, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face2#联盟方面也会继续调查项链的来历。", 36, 1540451, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face2#如果说这项链中发出的光芒，是在对它的主人起反应……。", 36, 1540451, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face2#即是说，我们总有一天也可以到达她所在之处。", 36, 1540451, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face2#这次也辛苦你了，#h0#。\r\n#b(#i1143211#  吞下星星的鲸鱼、#i1005599#  探索队员的潜水头盔)\r\n(#i2630437#  神秘徽章x20个，不可交换，#r期限：14天#b)", 36, 1540451, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.forceCompleteQuest(37921);
                        cm.gainExp(132738181);
                        cm.sendNormalTalk_Bottom("#face2#话说回来……真是可惜了那潜水艇。", 36, 1540451, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.gainItem(1005599, 1);
                          cm.gainItem(292662016, 256);
                          cm.gainItem(589627392, 1310760);
                          cm.forceStartQuest(37930, '');
                          cm.forceCompleteQuest(37930);
                          cm.sendNormalTalk_Bottom("#face2#甚至还花大价钱加了三个逃生舱。", 36, 1540451, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face0#平安回来就行。", 36, 3003502, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face3#等一下……", 36, 3003502, true, true, 1);
                            } else if (status === v++) {
                              cm.sendNormalTalk_Bottom("#face2#你说你把逃生舱怎么了？？", 36, 3003502, true, true, 1);
                              cm.dispose();
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
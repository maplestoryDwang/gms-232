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
      cm.sendNormalTalk_Bottom("#face0#信号来源就在附近。正在周期性地发出震动。", 36, 3003502, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face3#那是我们要找的目标吗？", 36, 3003500, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#有很大可能。我们再靠近点。\r\n沃莉，你看着机器，告诉我是哪个方向。", 36, 3003502, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face3#哦……嗯……那个……", 36, 3003500, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face1#好像……在下面……", 36, 3003500, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#那倒是……", 36, 3003502, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#从这里往后的路，潜水艇进不去。我们下艇搜索吧。", 36, 3003502, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.askYesNo_Bottom("#face0#我先过去了。你准备好就出来。", 36, 3003502, 1);
                  } else if (status === v++) {
                    cm.forceStartQuest(37906, '');
                    cm.updateInfoQuest(37900, "00=h0;01=h0;20=h0;02=h1;21=h0;03=h0;04=h0;41=h0;24=h1;25=h1;09=h0");
                    cm.updateInfoQuest(37900, "00=h0;10=h0;01=h0;20=h0;02=h1;21=h0;03=h0;04=h0;41=h0;24=h1;25=h1;09=h0");
                    cm.updateInfoQuest(37900, "00=h0;10=h0;01=h0;20=h0;02=h1;21=h0;03=h0;04=h0;05=h1;41=h0;24=h1;25=h1;09=h0");
                    cm.updateInfoQuest(37900, "00=h0;10=h0;01=h0;11=h1;20=h0;02=h1;21=h0;03=h0;04=h0;05=h1;41=h0;24=h1;25=h1;09=h0");
                    cm.dispose();
                    cm.warp(450016010, 3, false);
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
  } else {
    if (status == v++) {
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceStartQuest();
      cm.dispose();
    }
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
      cm.sendNormalTalk_Bottom("#face0#这和我在书里看过的潜水服很不一样呢。", 36, 3004851, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#这是最近改良的新型潜水服。", 36, 3004850, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#从前的潜水服非常重。\r\n尚未适应的时候，光是彼此打几次手势信号，第二天手臂都是麻的。", 36, 3004850, true, true, 1);
        } else if (status === v++) {
          cm.forceCompleteQuest(37906);
          cm.gainExp(132738181);
          cm.dispose();
        }
      }
    }
  }
}
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
      cm.sendNormalTalk_Bottom("#face0#不过幸好一来到村庄就遇到了好朋友！", 36, 3005100, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（我得先让对方放松警惕，之后再夺走那个看起来很值钱的铃铛。）", 36, 3005102, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#你了解这座村庄吗？那你可以为我介绍一下这座村庄吗？", 36, 3005100, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（那在向导完后，就要盯着铃铛了。）", 36, 3005102, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face1#好吧，跟我来。", 36, 3005102, true, true, 1);
            } else {
              if (status === v++) {
                cm.askYesNo_Bottom("#face0#要跟着格里前往#b#m410004000##k吗？\r\n\r\n#r（※自动前往村庄地图。）#k", 37, 3005100, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face6#哇！肯定很好玩！", 36, 3005100, false, true, 1);
                } else if (status === v++) {
                  cm.forceStartQuest(36204, '');
                  cm.updateInfoQuest(36200, "50=h0;51=h0;76=h0;77=h0;78=h0;set=1");
                  cm.updateInfoQuest(36200, "50=h0;51=h0;52=h1;76=h0;77=h0;78=h0;set=1");
                  cm.updateInfoQuest(36200, "50=h0;51=h0;52=h1;53=h1;76=h0;77=h0;78=h0;set=1");
                  cm.dispose();
                  cm.warp(410004000, 0, false);
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
      cm.sendNormalTalk_Bottom("#face0#呜呜，呜呜……", 36, 3005115, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#……", 36, 3005102, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face1#额啊啊啊啊啊！！！", 36, 3005115, true, true, 1);
        } else if (status === v++) {
          cm.forceCompleteQuest(36204);
          cm.gainExp(163);
          cm.gainExp(1132);
          cm.dispose();
        }
      }
    }
  }
}
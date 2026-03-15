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
      cm.sendNormalTalk_Bottom("#face0#这家伙是德拉卡兹啊？", 36, 3004921, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#我要带这位去见头目，此事事关重大，让开吧。", 36, 3004914, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#别搞笑了，这件事可不能就这么过去了。", 36, 3004921, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#唔……这样搞不好会挨头目训的。", 36, 3004914, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#哟！你一个小不点！找抽啊！", 36, 3004921, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#呼……为什么大人都一个样……", 36, 3004914, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#没办法了，我既然这么暴力，就用暴力的方式解决问题吧。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom('#face0#呼……', 36, 3004914, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.askAcceptDecline_Bottom("#face0#（去解决掉附近的巴伊托兹吧。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#你一定不会如愿的，小屁孩！", 36, 3004921, false, true, 1);
                      } else if (status === v++) {
                        cm.forceStartQuest(39419, '');
                        cm.updateInfoQuest(39400, "51=h0;52=h0;53=h0;73=h0;54=h0;74=h0;75=h0;76=h0;57=h0;77=h0;58=h0;78=h0;59=h0;79=h0;60=h1;80=h0;61=h0;81=h0;62=h0;82=h0;63=h0;83=h0;64=h0;84=h0;65=h1;85=h0");
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
  } else if (status == v++) {
    cm.dispose();
    cm.warp(993164017, 0, true);
  }
}
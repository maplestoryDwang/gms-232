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
      cm.sendNormalTalk_Bottom("#face0#好了，我解释得还清楚吗？啊，很清楚吗？那就先谢谢你了。", 36, 3004404, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom('嗯？', 56, 0, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#真是的，是导游费啦。", 36, 3004404, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("……500金币足够吗？", 56, 0, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#金币？我们不用那种钱。没办法了。你去替我打一份工吧。", 36, 3004404, true, true);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("为什么我要打工……", 56, 0, true, true);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("（伊黛娜大人让我们给市民们留下一点好印象，最好还是按他说的做吧。）", 56, 0, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#听说最近城墙西侧出现了很多#r海鸥#k，这些海鸥的粪便把神圣的城墙弄得脏兮兮的。", 36, 3004404, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#但是#b黎明祭司#k他们的眼睛看不清，可没那么容易就能赶走海鸥。", 36, 3004404, true, true);
                    } else {
                      if (status === v++) {
                        cm.askYesNo_Bottom("要我去收拾那些海鸥吗？", 56, 3004404);
                      } else {
                        if (status === v++) {
                          cm.forceStartQuest(39805, '');
                          cm.updateInfoQuest(39800, "01=h0;02=h0;11=h1;04=h1;05=h1");
                          cm.OnStartNavigation(410000590, 0, '', 39805);
                          cm.sendNormalTalk_Bottom("去通往西边城墙的传送口吧。", 57, 0, false, true);
                        } else if (status === v++) {
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
function stage0(g, w, a) {
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
      cm.sendNormalTalk_Bottom("#face0#啊！#h0#。你怎么来这儿了？", 37, 3004435, false, true);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom('（说明了情况。）', 57, 0, true, true);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#……你也中招了啊。", 37, 3004435, true, true);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom('……', 57, 0, true, true);
          } else if (status === v++) {
            cm.dispose();
            cm.warp(993141025, 0);
          }
        }
      }
    }
  }
}
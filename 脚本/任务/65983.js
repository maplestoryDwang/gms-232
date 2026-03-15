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
      cm.sendNormalTalk_Bottom("#face3#找到了。", 36, 9401278, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face4##b……这次绝对不会让他跑掉。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face3#……既然找到了魔教的根据地，这次不会再让他跑掉了。", 36, 9401278, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face3##b根据地！？", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face3#是气焰谷。", 36, 9401278, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0##b气焰谷应该是江湖中……被抛弃的土地……", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face3#……没错。平时只有在江湖之外才能见到他们的行踪，没想到根据地竟然就设在江湖之中。\r\n在江湖上活动，就算是再小的行动也会引起人们的警惕，很多门派会联合起来讨伐他们。看来他们动了不少脑筋。", 36, 9401278, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0##b我马上就去。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face3#不用着急。回一趟玄山派，和师兄弟们做好万全的准备之后再来吧。", 36, 9401278, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face4##b……我一个人去。我不想让师兄弟们陷入危险。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#好吧……如果这是你的选择。\r\n但如果我是素笑姑娘，一定会非常伤心。", 36, 9401278, true, true, 1);
                        } else {
                          if (status === v++) {
                            cm.sendNormalTalk_Bottom("#face4##b不过最重要的还是他们的安全。", 36, cm.getPlayer().getGender() == 0 ? 9401275 : 9401276, true, true, 1);
                          } else {
                            if (status === v++) {
                              cm.askAcceptDecline_Bottom("#face3#对了……你能马上到这里来一趟吗？\r\n#r（※接受时，自动移动到任务地图。）", 37, 9401278, 1);
                            } else if (status === v++) {
                              cm.forceStartQuest(65998, '2');
                              cm.updateInfoQuest(65983, 'portal=1');
                              cm.forceStartQuest(65983, '');
                              cm.dispose();
                              cm.warp(875002000, 0, false);
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
      cm.sendNormalTalk_Bottom("#face3#应该就是这里。前面是进入魔教根据地的入口。\r\n我说他们之前藏在哪儿呢，原来把根据地建在洞穴深处了。", 36, 9401278, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face3#入口应该只有前面那个洞穴。\r\n所以入口处有很多人看守。现在看到的人只不过是冰山一角。", 36, 9401278, true, true, 1);
      } else if (status === v++) {
        cm.forceCompleteQuest(65983);
        cm.dispose();
      }
    }
  }
}
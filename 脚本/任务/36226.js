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
      cm.sendNormalTalk_Bottom("#face0#这可如何是好……大事不妙。", 36, 3005128, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1#如果交不上税钱会如何呢？", 36, 3005100, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#就沦落被赶到了后巷，\r\n所以大家都对领主大人敢怒不敢言。", 36, 3005128, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#毕竟没人会想去那里的。", 36, 3005128, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face1#后巷……", 36, 3005100, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face1##fc0xFFbfbfbf#（格里刚刚也说过，这地方恐怕就是被赶走的村民流落之处。）", 36, 3005100, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#那个，要是你不介意，有什么我可以帮你的吗？", 36, 3005100, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#啊，那你能……帮忙去#b#m410004012##k教训一下那里的#o8645225#和#o8645226#\r\n吗？", 36, 3005128, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#那帮家伙也不知怎么就看出最近村庄人心惶惶，整日里成群结队地打家劫舍。", 36, 3005128, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#只要分别消灭#b50只#k，应该就能让人稍微喘口气了。", 36, 3005128, true, true, 1);
                      } else {
                        if (status === v++) {
                          cm.sendNormalTalk_Bottom("#face0#好，交给我吧！\r\n#b（*前往#m410004012#处，各捕获50只#o8645225#和#o8645226#吧。）#k", 36, 3005100, true, true, 1);
                        } else if (status === v++) {
                          cm.forceStartQuest(36226, '');
                          cm.OnStartNavigation(410004012, 0, '', 36226);
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
      cm.sendNormalTalk_Bottom("#face0#怪物数量当真减少了啊？", 36, 3005128, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#谢谢，这次我算是欠了你一个人情呢。", 36, 3005128, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#这点小事算什么。", 36, 3005100, true, true, 1);
        } else if (status === v++) {
          cm.forceCompleteQuest(36226);
          cm.gainExp(2227);
          cm.dispose();
        }
      }
    }
  }
}
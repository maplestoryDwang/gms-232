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
      cm.sendNormalTalk_Bottom("#face0#容我再做个自我介绍，我是魔法师转职教官汉斯。", 36, 1032001, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face6#见到你很高兴，我叫啦啦，正在为了摇响这个铃铛而四处旅行。", 36, 3005100, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#我可以问问这个铃铛的来历吗？", 36, 1032001, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#多少都行！", 36, 3005100, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#这个铃铛是我们阿尼玛村珍藏了多年的宝物。", 36, 3005100, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#不过现在不管怎么摇都没有声响……", 36, 3005100, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#村里人一直珍藏着铃铛，他们相信有一天它会再次发出声响。", 36, 3005100, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#同时也伴随着信念，那就是有朝一日铃铛被摇响时，所有人的希望都会实现的信念。", 36, 3005100, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#我知道那份信念并不假，毕竟我曾亲耳听到过铃铛的声响。", 36, 3005100, true, true, 1);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face6#虽然声音很小，但确实是响了。", 36, 3005100, true, true, 1);
                      } else if (status === v++) {
                        cm.forceStartQuest(36245, '');
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
  } else {
    if (status == v++) {
      cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（这个铃铛……原来如此，它肯定和某个古老的东西有关。）", 36, 1032001, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（虽然比不上古代的神，可至少和实力相当的某个人……）", 36, 1032001, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（历经多年流传下来的遗物以及会让那个遗物起反应的人，看来有必要再深入研究了。）", 36, 1032001, true, true, 1);
        } else if (status === v++) {
          cm.forceCompleteQuest(36245);
          cm.dispose();
        }
      }
    }
  }
}
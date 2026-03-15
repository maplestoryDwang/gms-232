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
      cm.sendNormalTalk_Bottom("#face0#对了，这段时间我可能会很忙。麻烦两位代我继续寻找圣剑的主人，好吗？", 36, 3004433, false, true);
      cm.effect_Voice("Voice5.img/CH2/Carlyle/60", 128);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#这能行吗？万一被人知道你拜托我们这些外地人插手有关圣剑的事，教团方面会意见很大吧？", 36, 3004431, true, true);
        cm.effect_Voice("Voice5.img/CH2/Idea/47", 128);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#那你们小心点，别被发现就好了。", 36, 3004433, true, true);
          cm.effect_Voice("Voice5.img/CH2/Carlyle/61", 128);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#这可不是三言两语能糊弄过去的事……", 36, 3004431, true, true);
            cm.effect_Voice("Voice5.img/CH2/Idea/48", 128);
          } else {
            if (status === v++) {
              cm.askYesNo_Bottom("#face0#我相信二位一定不会辜负我的期望。对吗？", 36, 3004433);
              cm.effect_Voice("Voice5.img/CH2/Carlyle/62", 128);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#你们先去见见我朋友吧。\r\n他精通史学和神学，估计会给你们提供很大帮助。", 36, 3004433, false, true);
                cm.effect_Voice("Voice5.img/CH2/Carlyle/63-1", 128);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#你们去王室图书馆找#b图书管理员艾伦#k就行。", 36, 3004433, true, true);
                  cm.effect_Voice("Voice5.img/CH2/Carlyle/64-1", 128);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#图书管理员？", 36, 3004431, true, true);
                    cm.effect_Voice("Voice5.img/CH2/Idea/49", 128);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face0#啊，请你们对他温柔点，别太凶哦。", 36, 3004433, true, true);
                      cm.effect_Voice("Voice5.img/CH2/Carlyle/65", 128);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face0#嗯？？", 36, 3004431, true, true);
                      } else if (status === v++) {
                        cm.forceStartQuest(39810, '');
                        cm.updateInfoQuest(39800, "10=h0;01=h0;02=h0;11=h1;12=h0;13=h0;04=h0;14=h1;05=h1;15=h1;06=h1;07=h1;08=h1;09=h0");
                        cm.OnStartNavigation(410000690, 0, '', 39810);
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
      var e = cm.getQuest();
      cm.askYesNo("");
    } else if (status == v++) {
      cm.forceCompleteQuest();
      cm.dispose();
    }
  }
}
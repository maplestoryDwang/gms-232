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
      cm.sendNormalTalk_Bottom("#face4#卡莱尔，这是怎么回事？哪来这么多人……", 36, 3004431, false, true);
      cm.effect_Voice("Voice5.img/CH2/Idea/111", 128);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1#他们可能是混在难民群中溜进来的。", 36, 3004433, true, true);
        cm.effect_Voice("Voice5.img/CH2/Carlyle/87", 128);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#报告。翼人军正在越过东门城墙。", 36, 3004437, true, true);
          cm.effect_Voice("Voice5.img/CH2/Knight/14", 128);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face1#……", 36, 3004433, true, true);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#我们去拦住城墙那边的敌人。请王子殿下平息混乱，召集兵力。", 36, 3004431, true, true);
              cm.effect_Voice("Voice5.img/CH2/Idea/112", 128);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face1#我知道了。", 36, 3004433, true, true);
                cm.effect_Voice("Voice5.img/CH2/Carlyle/88", 128);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face3#我也来帮忙。", 36, 3004430, true, true);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0##h0#，请你与我们同行。", 36, 3004431, true, true);
                  } else {
                    if (status === v++) {
                      cm.sendNormalTalk_Bottom("#face1#该死，尽是些打不死捶不烂的家伙！", 36, 3004435, true, true);
                    } else {
                      if (status === v++) {
                        cm.sendNormalTalk_Bottom("#face3##h0#，请你协助把守城墙。我去阻止罗兰德。", 36, 3004430, true, true);
                        cm.effect_Voice("Voice5.img/CH2/Seren/64", 128);
                      } else if (status === v++) {
                        cm.forceStartQuest(39816, '');
                        cm.updateInfoQuest(39800, "01=h0;10=h0;11=h1;02=h0;12=h0;22=h0;04=h0;13=h0;05=h1;14=h1;06=h1;15=h1;16=h0;07=h1;17=h1;08=h1;18=h1;09=h0;19=h1");
                        cm.OnStartNavigation(410000620, 0, "east00", 39816);
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
      cm.sendNormalTalk_Bottom("#face1#城墙上面的战况已经大致稳定。不过，城门那边似乎还打得难舍难分呢？", 37, 3004435, false, true);
    } else if (status === v++) {
      cm.forceCompleteQuest(39816);
      cm.gainExp(25 * Math.pow(cm.getLevel(), 3));
      cm.dispose();
    }
  }
}
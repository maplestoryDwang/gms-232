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
      cm.sendNormalTalk_Bottom("#face0#唔……这样啊，\r\n看来这个铃铛果真是很久之前就被造出来的。", 36, 3005100, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face1#究竟该怎么调查那些陈旧之物呢？", 36, 3005100, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#村庄里倒是有一个#b古董店#k，那地方本就堆了一堆杂物。", 36, 3005102, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#问题在于……由于太过繁杂，连主人都记不清了。", 36, 3005102, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face2#那就去#b古董店#k看看吧！", 36, 3005100, true, true, 1);
            } else {
              if (status === v++) {
                cm.sendNormalTalk_Bottom("#face0#喂，你知道在哪吗，就这样大摇大摆地走过去！", 36, 3005102, true, true, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#这个嘛，毕竟如果走错了方向，你会给我指路的！", 36, 3005100, true, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face7#那是……！", 36, 3005102, true, true, 1);
                  } else {
                    if (status === v++) {
                      cm.askYesNo_Bottom("#face0#去#b图梅古董店#k看看吧？", 36, 3005100, 1);
                    } else if (status === v++) {
                      cm.forceStartQuest(36212, '');
                      cm.updateInfoQuest(36200, "50=h0;51=h0;52=h0;53=h1;55=h0;76=h0;77=h0;78=h0;set=1");
                      cm.updateInfoQuest(36200, "50=h0;51=h0;70=h1;52=h0;53=h1;55=h0;76=h0;77=h0;78=h0;set=1");
                      cm.OnStartNavigation(410004002, 1, "3005157", 36212);
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
      cm.sendNormalTalk_Bottom("#face0#哦，可鲁来了啊！", 36, 3005113, false, true, 1);
    } else if (status === v++) {
      cm.forceCompleteQuest(36212);
      cm.gainExp(1126);
      cm.gainExp(3553);
      cm.dispose();
    }
  }
}
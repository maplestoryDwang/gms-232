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
      cm.sendNormalTalk_Bottom("#face0#你们带我去头目那里吧。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#那个……我们也想的……", 36, 3004914, true, true, 1);
      } else {
        if (status === v++) {
          cm.sendNormalTalk_Bottom("#face0#我说，德拉卡兹，你擅自闯入我们的领地，还以为我们会夹道欢迎你吗？", 36, 3004920, true, true, 1);
        } else {
          if (status === v++) {
            cm.sendNormalTalk_Bottom("#face0#好……", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
          } else {
            if (status === v++) {
              cm.sendNormalTalk_Bottom("#face0#我知道，要先把你们几个收拾了，事情才能顺利起来。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
            } else {
              if (status === v++) {
                cm.askAcceptDecline_Bottom("#face0#（去解决掉附近的#r巴伊托兹#k吧。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, 1);
              } else {
                if (status === v++) {
                  cm.sendNormalTalk_Bottom("#face0#哈！那就放马过来吧。", 36, 3004920, false, true, 1);
                } else {
                  if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#（嗯……）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                  } else if (status === v++) {
                    cm.sendNormalTalk_Bottom("#face0#（话说回来，怨恨石现在所剩不多，我们得抓紧时间了。）", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
                    cm.forceStartQuest(39417, '');
                    cm.updateInfoQuest(39400, "60=h1;51=h0;61=h0;52=h0;62=h0;80=h0;53=h0;63=h0;81=h0;54=h0;64=h1;82=h0;73=h0;74=h0;83=h0;75=h0;57=h0;84=h0;58=h0;76=h0;85=h0;59=h0;77=h0;78=h0");
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
      cm.sendNormalTalk_Bottom("#face0#唔……太暴力了，罗伊斯，别看。", 36, 3004914, false, true, 1);
    } else {
      if (status === v++) {
        cm.sendNormalTalk_Bottom("#face0#闭嘴，你还是好好指路吧。", 36, cm.getPlayer().getGender() == 0 ? 3004901 : 3004902, true, true, 1);
      } else if (status === v++) {
        cm.forceCompleteQuest(39417);
        cm.getPlayer().levelUp();
        cm.dispose();
      }
    }
  }
}
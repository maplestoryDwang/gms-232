var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    status++;
  } else {
    status--;
  }
  selectionLog[status] = U;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      cm.sendNormalTalk_Bottom("#face0#啊，老弟！", 36, 3001668, false, true, 1);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom('#face0#大哥！', 36, 3001668, true, true, 1);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0##fc0xFFbfbfbf#（蚕茧怪互相确认对方身份后泪眼汪汪，\r\n看来要帮忙尽快找到其他兄弟。）", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1);
        } else {
          if (status === V++) {
            cm.sendNormalTalk_Bottom("#face5#跟我来吧，我让你见到其他兄弟。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1);
          } else {
            if (status === V++) {
              cm.sendNormalTalk_Bottom("#face0#知道了，蚕茧。", 36, 3001668, true, true, 1);
            } else if (status === V++) {
              cm.updateInfoQuest(39566, "dir=1;NpcSpeech=30016831;gochi1=1;gochi2=1;do=1");
              cm.updateInfoQuest(39598, "10=h0;11=h0;31=h0;32=h0;33=h0;34=h1;15=h0;35=h0;16=h1;77=h0;78=h0;79=h0;02=h0;03=h1;80=h1;23=h0;81=h1;24=h0;05=h0;82=h0;25=h0;06=h0;84=h1;27=h0;08=h0;09=h1;28=h0;85=h0;29=h1");
              cm.setPartner(1, 3001649, 80002807, 0);
              cm.OnStartNavigation(410000113, 1, '3001648', 39566);
              cm.dispose();
            }
          }
        }
      }
    }
  }
}
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
      cm.sendNormalTalk_Bottom("#face0#你是谁，蚕茧？", 36, 3001668, false, true, 1);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("#face9#我不过就是个路过的道士，要说起我的情况可就有些复杂了……\r\n总之我是来找你兄弟的，来，和我一起走吧。", 36, 3001674 + cm.getPlayer().getGender(), true, true, 1);
      } else {
        if (status === V++) {
          cm.sendNormalTalk_Bottom("#face0#知道了，蚕茧。", 36, 3001668, true, true, 1);
        } else {
          if (status === V++) {
            cm.updateInfoQuest(39566, "dir=1;NpcSpeech=30016831;gochi1=1;do=1");
            cm.updateInfoQuest(39598, "10=h0;11=h0;31=h0;32=h0;33=h0;34=h1;15=h0;35=h0;16=h1;77=h0;78=h0;79=h0;02=h0;03=h1;80=h1;23=h0;81=h1;24=h0;05=h0;82=h0;25=h0;06=h0;84=h1;27=h0;08=h0;09=h1;28=h0;85=h0;29=h1");
            cm.updateInfoQuest(39598, "10=h0;11=h0;31=h0;32=h0;33=h0;34=h1;15=h0;35=h0;16=h1;77=h0;78=h0;79=h0;02=h0;03=h1;80=h1;23=h0;81=h1;24=h0;05=h0;82=h0;25=h0;06=h0;84=h1;27=h0;08=h0;09=h1;28=h1;85=h0;29=h1");
            cm.setPartner(1, 3001668, 80002806, 0);
            cm.OnStartNavigation(410000112, 1, "3001628", 39566);
            cm.sendNormalTalk_Bottom("#face0#既然已经找到了一个家伙，就去接下来的地点看看吧。", 36, 3001651, true, true, 1);
          } else if (status === V++) {
            cm.dispose();
          }
        }
      }
    }
  }
}
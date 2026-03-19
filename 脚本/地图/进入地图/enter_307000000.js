var status = -1;
function action(f, E, e) {
  status++;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else {
    if (status === V++) {
      if (cm.getNumberFromQuestInfo(32970, 's1') > 0) {
        cm.dispose();
        return;
      }
      cm.updateInfoQuest(32970, "s1=1");
      cm.updateInfoQuest(32999, "10=h0;01=h0;02=h1;20=h0;11=h0;21=h0;12=h0;03=h0;13=h0;04=h0;14=h0;05=h0;15=h0;06=h0;16=h0;07=h0;17=h0;18=h0;19=h0");
      cm.sendNormalTalk_Bottom("直到某一天回到外面的世界……", 57, 0, false, true);
    } else {
      if (status === V++) {
        cm.sendNormalTalk_Bottom("那是什么时候呢？", 57, 0, true, true);
      } else if (status === V++) {
        cm.dispose();
      }
    }
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;
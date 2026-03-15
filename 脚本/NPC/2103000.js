var status = -1;
function action(f, W, U) {
  if (cm.isQuestActive(3900)) {
    cm.sendNormalTalk("我尝过绿洲的水。甘甜清爽的水帮我解了渴。", 0, 2103000, false, false);
    cm.setQuestCustomData(3900, 5);
  } else {
    cm.sendNormalTalk("绿洲的水一直都这么清澈。仔细看的话能清澈见底。", 0, 2103000, false, true);
  }
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;
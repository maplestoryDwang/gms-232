var status = -1;
var selectionLog = [];
function action(f, E, e) {
  if (status == 0 && f == 0) {
    cm.dispose();
    return;
  }
  status++;
  selectionLog[status] = e;
  var V = -1;
  if (status <= V++) {
    cm.dispose();
  } else if (status === V++) {
    cm.scheduleWarpTask(90, 350043000, 0, true);
    cm.scheduleOpenNpcTask(25, 1, "黑色天堂_Act4_逃离甲板");
    cm.scheduleOpenNpcTask(30, 10, "黑色天堂_Act4_逃离甲板");
    cm.scheduleOpenNpcTask(35, 10, "黑色天堂_Act4_逃离甲板");
    cm.scheduleOpenNpcTask(40, 11, "黑色天堂_Act4_逃离甲板");
    cm.scheduleOpenNpcTask(45, 2, "黑色天堂_Act4_逃离甲板");
    cm.scheduleOpenNpcTask(50, 3, "黑色天堂_Act4_逃离甲板");
    cm.scheduleOpenNpcTask(55, 20, "黑色天堂_Act4_逃离甲板");
    cm.scheduleOpenNpcTask(50, 20, "黑色天堂_Act4_逃离甲板");
    cm.scheduleOpenNpcTask(65, 20, "黑色天堂_Act4_逃离甲板");
    cm.scheduleOpenNpcTask(70, 20, "黑色天堂_Act4_逃离甲板");
    cm.scheduleOpenNpcTask(75, 4, "黑色天堂_Act4_逃离甲板");
    cm.scheduleOpenNpcTask(80, 21, "黑色天堂_Act4_逃离甲板");
    cm.scheduleOpenNpcTask(85, 22, "黑色天堂_Act4_逃离甲板");
    cm.dispose();
  }
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;
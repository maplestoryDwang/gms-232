var status = -1;
function action(f, E, e) {
  status++;
  cm.fieldEffect_ScreenMsg("temaD/enter/glacierExplorer");
  cm.dispose();
}
function start() {
  status = -1;
  action(1, 0, 0);
}
;
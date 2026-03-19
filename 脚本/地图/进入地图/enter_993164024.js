var status = -1;
var selectionLog = [];
function start() {
  action(1, 0, 0);
}
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
    cm.forceCompleteQuest(39422);
    cm.gainExp(4986);
    cm.updateInfoQuest(39400, "51=h0;52=h0;53=h0;73=h0;54=h0;74=h0;56=h1;75=h0;76=h0;57=h0;77=h0;58=h0;78=h0;59=h0;79=h0;60=h1;80=h0;61=h0;81=h0;62=h0;82=h0;63=h0;83=h0;64=h0;84=h0;65=h0;66=h0;85=h0;67=h1");
    cm.dispose();
    cm.warp(410000402, 0, true);
  }
}
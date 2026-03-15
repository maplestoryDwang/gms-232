var chat = -1;
var select;
function start() {
  action(1, 0, 0);
}
function action(f, W, U) {
  if (f == -1 || f == 0 && chat == 0) {
    cm.dispose();
    return;
  }
  if (f == 1) {
    chat++;
  } else {
    if (f == 0) {
      chat--;
    }
  }
  if (cm.getMapId() == 300000012) {
    cm.sendOk("I don't trust you, but It isn't in my control.");
    cm.dispose();
  } else {
    cm.dispose();
  }
}
var status = -1;
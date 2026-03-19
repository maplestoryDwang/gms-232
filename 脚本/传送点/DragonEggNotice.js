function start() {
    if (cm.getInfoQuest(22014).equals("mo30=o;mo40=o;mo41=o;mo42=o;mo50=o;mo60=o")) {
        cm.updateInfoQuest(22014, "mo30=o;mo40=o;mo41=o;mo50=o;mo42=o;mo60=o;egg=o");
        cm.onScriptMessage_显示教程引导图片(["UI/tutorial/evan/8/0"]);
        return true
    }
};
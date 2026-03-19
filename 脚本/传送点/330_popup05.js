function start() {
    var b = cm.getPortal().getId();
    var a = cm.getPortal().getName();
    cm.Hidden_background("hideRope01", 1);
    cm.fieldEffect_PlayFieldSound("Sound/PL_MONAD.img/EP1/ACT1/burning2", 128);
    cm.addPopupSay(9400580, 2000, "#face4#当心！火势在蔓延！", "", 0)
};
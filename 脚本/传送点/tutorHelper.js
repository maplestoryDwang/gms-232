function start() {
    if (cm.getQuestStatus(20021) == 0) {
        cm.hireTutor(true);
        cm.hireTutorMsg("Welcome to the world of Maple！My name is Koo, and I will be your guide！I will be here to answer your questions and guide you until you reach Level 10 and become a Knight-in-Training. If you have any questions, double-click me!");
        cm.forceCompleteQuest(20021)
    }
};
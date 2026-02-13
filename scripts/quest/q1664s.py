# [Silent Crusade] An Emergency Summons

STARLING = 9120221
LORA = 9073004
DANGEROUS_CAVE = 230040410
TICKET = 2030027

sm.setPlayerAsSpeaker()
sm.sendNext("(之前见过的信又到了我的手里。)有新任务吗？")

sm.setSpeakerID(STARLING)
sm.sendSay("看来发生了比上次更紧急的任务，怎么办？")

sm.setPlayerAsSpeaker()
response = sm.sendAskAccept("还好放得进移动券。赶紧用它前往#p9073023#吧。")

if response:
    sm.sendNext("The ticket's in here. Use it to visit #p"+ str(LORA) +"#.")

    if not sm.canHold(TICKET):
        sm.sendSayOkay("Let me make some space in my inventory.")
        sm.dispose()

    sm.startQuest(parentID)
    sm.showFieldEffect("Map/Effect.img/crossHunter/chapter/start4")
    sm.giveItem(TICKET)
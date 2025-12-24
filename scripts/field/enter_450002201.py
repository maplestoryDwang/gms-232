# id 450002201 (Chu Chu Island : Muto's Descent), field 450002201
if not sm.hasQuest(34218) and not sm.hasQuestCompleted(34218) and sm.hasQuestCompleted(34200):
    sm.setMapTaggedObjectVisible("obj_01", True, 0, 0)
    sm.createQuestWithQRValue(34220, "a=1;b=1;c=1;e=1;f=1")
    sm.lockInGameUI(True, False)
    sm.spawnNpc(3003164, 194, 138)
    sm.showNpcSpecialActionByTemplateId(3003164, "summon", 0)
    sm.spawnNpc(3003162, 143, 138)
    sm.showNpcSpecialActionByTemplateId(3003162, "summon", 0)
    sm.spawnNpc(3003163, 75, 138)
    sm.showNpcSpecialActionByTemplateId(3003163, "summon", 0)
    sm.spawnNpc(3003160, -6, 138)
    sm.showNpcSpecialActionByTemplateId(3003160, "summon", 0)
    sm.blind(True, 255, 0, 0, 0, 0)
    sm.removeAdditionalEffect()
    sm.setMapTaggedObjectVisible("obj_01", True, 0, 0)
    sm.completeQuestNoCheck(34224)
    sm.blind(True, 255, 0, 0, 0, 0)
    sm.sendDelay(1200)
    sm.blind(False, 0, 0, 0, 0, 1000)
    sm.sendDelay(1400)
    sm.spawnNpc(3003167, -350, 138)
    sm.showNpcSpecialActionByTemplateId(3003167, "summon", 0)
    sm.moveNpcByTemplateId(3003167, False, 70, 250)
    sm.sendDelay(1000)
    sm.spawnNpc(3003168, -250, 138)
    sm.showNpcSpecialActionByTemplateId(3003168, "summon", 0)
    sm.moveNpcByTemplateId(3003168, False, 220, 250)
    sm.sendDelay(1000)
    sm.setSpeakerType(3)
    sm.setParam(57)
    sm.setColor(1)
    sm.sendNext("#bChief! Chef!#k Hurry, over here!")
    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(3003150) # Lyon
    sm.sendSay("(Panting) Well...?! Where is that mysterious #bassistant#k who helped you, and where's that #bdish#k of yours?")
    sm.setParam(57)
    sm.sendSay("...Seriously? They're standing right there... Ahem. Allow me to introduce, the #bDelicious Beefy Tastesplosion Sandwich#k, and #bSimia#k, the magnificent chef who assisted me! ")
    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(3003152) # Master Lyck
    sm.sendSay("W-what?! #bSimia#k?")
    sm.setInnerOverrideSpeakerTemplateID(3003151) # Simia
    sm.sendSay("H-hello Chef...")
    sm.setInnerOverrideSpeakerTemplateID(3003152) # Master Lyck
    sm.sendSay("#face0#You! The entire kitchen is in a fervor trying to prepare my masterpiece \r\nfor Muto before it's too late, and you... You were you helping \r\nthat idiot over there make food this whole time?")
    sm.setInnerOverrideSpeakerTemplateID(3003151) # Simia
    sm.sendSay("I'm sorry... I know the kitchen is very busy... But it's not like you would've let me cook anyway. That's why I wanted to help this traveler...")
    sm.setInnerOverrideSpeakerTemplateID(3003152) # Master Lyck
    sm.sendSay("#face0#Even if you cannot cook, there is still trash to empty! Slurp! \r\nThere are many things to do! Don't think for a moment I will forget this.")
    sm.setInnerOverrideSpeakerTemplateID(3003153) # Pibik
    sm.sendSay("Hey! Who's this long-tongued jerk?")
    sm.setInnerOverrideSpeakerTemplateID(3003154) # Pimi
    sm.sendSay("It must be that stupid bully Chef. Yawn. I'm bored now...")
    sm.setInnerOverrideSpeakerTemplateID(3003152) # Master Lyck
    sm.sendSay("Who are these pipsqueaks?! Oh, you must be the three siblings who \r\nhave #btaste only for garbage#k, just like Simia!")
    sm.sendSay("#face4#Even if you were in a hurry, why would you accept help from those \r\nwith no taste making food? Pitiful!")
    sm.setInnerOverrideSpeakerTemplateID(3003150) # Lyon
    sm.sendSay("#face0#But the dish has such a #bcatchy name#k!")
    sm.setInnerOverrideSpeakerTemplateID(3003152) # Master Lyck
    sm.sendSay("#face0#Stupid Chief! There's no time!\r\nHurry and instruct Muto to pick a food!")
    sm.setInnerOverrideSpeakerTemplateID(3003150) # Lyon
    sm.sendSay("Hold your horses. I'm on it!\r\nHey Muto! #bGulla#k is attacking! We've prepared #b2 types#k of food for you. So eat something and go kick #bGulla#k's butt!")
    sm.setInnerOverrideSpeakerTemplateID(3003156) # Muto
    sm.sendSay("#face2#Mu-to... is... hun... gry...")
    sm.setInnerOverrideSpeakerTemplateID(3003152) # Master Lyck
    sm.sendSay("Hey! #bBlockhead#k! Stop saying you're hungry and try my dish!\r\nI don't know why you've been so picky about your food,\r\nbut even you will see my dish is a masterpiece!")
    sm.setInnerOverrideSpeakerTemplateID(3003151) # Simia
    sm.sendSay("Chef... You shouldn't be so mean to Muto... Muto is a nice child who protects us.")
    sm.setInnerOverrideSpeakerTemplateID(3003152) # Master Lyck
    sm.sendSay("#face0#W-what?! Are you lecturing me? You're not even a real chef, and now \r\nyou're trying to tell me what to do?")
    sm.sendSay("#face0#Simia! You are hereby banned from my kitchen! \rmPtooey! I am finished with you!")
    sm.setInnerOverrideSpeakerTemplateID(3003151) # Simia
    sm.sendSay("...")
    sm.setInnerOverrideSpeakerTemplateID(3003152) # Master Lyck
    sm.sendSay("Hurry up and choose Muto! Do you know how much trouble you have \r\nput us through?! Hurry up and eat this, and go defeat Gulla!")
    sm.setInnerOverrideSpeakerTemplateID(3003156) # Muto
    sm.sendSay("Hm... (Sniff, sniff)")
    sm.setInnerOverrideSpeakerTemplateID(3003150) # Lyon
    sm.sendSay("Oh... Muto's giving it the old sniff test!")
    sm.flipNpcByTemplateId(3003164, False)
    sm.flipNpcByTemplateId(3003162, False)
    sm.flipNpcByTemplateId(3003163, False)
    sm.flipNpcByTemplateId(3003160, False)
    sm.setInnerOverrideSpeakerTemplateID(3003156) # Muto
    sm.sendSay("#fs50#Hmm?!")
    sm.setInnerOverrideSpeakerTemplateID(3003152) # Master Lyck
    sm.sendSay("#face4#Doesn't it smell delectable? Slurp! Now, consume my delicious \r\ndelicacy, and get up!")
    sm.onLayer(1500, "eat", 0, 0, 0, "Map/Effect2.img/ArcaneRiver2/eat", 4, True, -1, False)
    sm.sendDelay(3000)
    sm.offLayer(1500, "eat", False)
    sm.sendDelay(2500)
    sm.speechBalloon(True, 0, 0, "!", 2500, 1, 0, 0, 0, 4, 0, 4878499)
    sm.speechBalloon(True, 0, 0, "!", 2500, 1, 0, 0, 0, 4, 3003160, 4878499)
    sm.speechBalloon(True, 0, 0, "!", 2500, 1, 0, 0, 0, 4, 3003162, 4878499)
    sm.speechBalloon(True, 0, 0, "!", 2500, 1, 0, 0, 0, 4, 3003163, 4878499)
    sm.speechBalloon(True, 0, 0, "!", 2500, 1, 0, 0, 0, 4, 3003164, 4878499)
    sm.speechBalloon(True, 0, 0, "!", 2500, 1, 0, 0, 0, 4, 3003167, 4878499)
    sm.speechBalloon(True, 0, 0, "!", 2500, 1, 0, 0, 0, 4, 3003168, 4878499)
    sm.setInnerOverrideSpeakerTemplateID(3003155) # Pidol
    sm.sendNext("M-Muto! Chooses our #bDelicious Beefy Tastesplosion Sandwich#k!")
    sm.setInnerOverrideSpeakerTemplateID(3003156) # Muto
    sm.sendSay("#face0##fs30#Th... This is... Goo... Good!")
    sm.setInnerOverrideSpeakerTemplateID(3003152) # Master Lyck
    sm.sendSay("#face0#What are you talking about Muto? You haven't even tried my food!\r\nHurry and eat it!")
    sm.setInnerOverrideSpeakerTemplateID(3003156) # Muto
    sm.sendSay("#face0#Muto... HATE.. You eat it...")
    sm.setInnerOverrideSpeakerTemplateID(3003152) # Master Lyck
    sm.sendSay("#face0#You ungrateful rock! Why aren't you eating my food!?")
    sm.setParam(57)
    sm.sendSay("Shut it, Lyck! Muto doesn't want to eat it!")
    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(3003153) # Pibik
    sm.sendSay("Yeah! Your food tastes like #bCrilia poop#k!")
    sm.setInnerOverrideSpeakerTemplateID(3003152) # Master Lyck
    sm.sendSay("#face0#How DARE you! I won't accept this insult! Eat! Eat it now!")
    sm.sendDelay(1000)
    sm.setInnerOverrideSpeakerTemplateID(3003156) # Muto
    sm.sendNext("#face1##fs50#NO EAT!")
    sm.setInnerOverrideSpeakerTemplateID(3003150) # Lyon
    sm.sendSay("Uh... Is it time for me to step in!? Chef Lyck, go get some air! Hyaaa!")
    sm.blind(True, 500, 255, 255, 255, 0)
    sm.sendDelay(2000)
    sm.blind(False, 0, 0, 0, 0, 1000)
    sm.sendNext("There. Master Lyck should be landing safely in the village any minute now.")
    sm.setParam(57)
    sm.sendSay("H-huh? I have the strangest feeling of Deja vu...")
    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(3003156) # Muto
    sm.sendSay("#face2##fs30#Waaah! No eat! No fight!")
    sm.setInnerOverrideSpeakerTemplateID(3003150) # Lyon
    sm.sendSay("Muto, didn't we give you delicious food? Now get up and stop Gulla!")
    sm.setInnerOverrideSpeakerTemplateID(3003151) # Simia
    sm.sendSay("Chief, why don't you let me try...")
    sm.sendSay("Muto. It's been hard protecting us until now, hasn't it?")
    sm.sendSay("You couldn't eat anything you wanted... It must have been hard going hungry for so long... You poor thing...")
    sm.sendSay("You don't need to fight if you don't want to. I'm just happy that you're eating... And thank you for eating the food I made. I know it isn't very good...")
    sm.setInnerOverrideSpeakerTemplateID(3003156) # Muto
    sm.sendSay("Muto... Want to eat... the rest...")
    sm.setInnerOverrideSpeakerTemplateID(3003151) # Simia
    sm.sendSay("#face0#Y-You do? Please, go ahead! We made it #bjust for you#k.")
    sm.setMapTaggedObjectVisible("obj_01", False, 0, 0)
    sm.setInnerOverrideSpeakerTemplateID(3003156) # Muto
    sm.sendSay("#face0##fs30#Om... Yum! Gooooood.")
    sm.setInnerOverrideSpeakerTemplateID(3003153) # Pibik
    sm.sendSay("Ah! He even ate Master Lyck's food!")
    sm.sendDelay(1000)
    sm.setInnerOverrideSpeakerTemplateID(3003154) # Pimi
    sm.sendNext("Gulla's almost here! Eek!")
    sm.setInnerOverrideSpeakerTemplateID(3003156) # Muto
    sm.sendSay("#face0#Muto... is full... ...Thank you.")
    sm.sendSay("#face0#Now... I go... Play... With #rGulla#k...")
    sm.setInnerOverrideSpeakerTemplateID(3003151) # Simia
    sm.sendSay("Muto... You're going to protect us?")
    sm.setInnerOverrideSpeakerTemplateID(3003156) # Muto
    sm.sendSay("#face0#Yes... Muto... Eat delicious food... Protect... #bfriends#k...")
    sm.setInnerOverrideSpeakerTemplateID(3003151) # Simia
    sm.sendSay("(Sniffs) #bFriends#k... Muto... Thanks...")
    sm.blind(True, 255, 0, 0, 0, 1500)
    sm.onLayer(1500, "fight", 0, 0, 0, "Map/Effect2.img/ArcaneRiver2/fight", 4, True, -1, False)
    sm.sendDelay(3000)
    sm.offLayer(1500, "fight", False)
    sm.sendDelay(1000)
    sm.lockInGameUI(False, True)
    sm.warp(450002021)
elif sm.hasQuestCompleted(34217) and not sm.hasQuestCompleted(34218):
    sm.setMapTaggedObjectVisible("obj_01", False, 0, 0)
    sm.spawnNpc(3003164, 194, 138)
    sm.showNpcSpecialActionByTemplateId(3003164, "summon", 0)
    sm.spawnNpc(3003162, 143, 138)
    sm.showNpcSpecialActionByTemplateId(3003162, "summon", 0)
    sm.spawnNpc(3003163, 75, 138)
    sm.showNpcSpecialActionByTemplateId(3003163, "summon", 0)
    sm.spawnNpc(3003160, -6, 138)
    sm.showNpcSpecialActionByTemplateId(3003160, "summon", 0)
    sm.spawnNpc(3003167, -200, 138, True)
    sm.showNpcSpecialActionByTemplateId(3003167, "summon", 0)
    sm.spawnNpc(3003168, -300, 138, True)
    sm.showNpcSpecialActionByTemplateId(3003168, "summon", 0)
    sm.lockInGameUI(True, False)
    sm.removeAdditionalEffect()
    sm.setSpeakerType(3)
    sm.setParam(37)
    sm.setColor(1)
    sm.setSpeakerID(3003151) # Simia
    sm.setInnerOverrideSpeakerTemplateID(3003152) # Master Lyck
    sm.sendSay("Ow... My head... What happened? One moment I'm here, the next I'm waking up outside the village!")
    sm.setInnerOverrideSpeakerTemplateID(3003150) # Lyon
    sm.sendSay("#face0#Oh! You're awake? #bMuto#k got angry and attacked you! Haha!")
    sm.setInnerOverrideSpeakerTemplateID(3003152) # Master Lyck
    sm.sendSay("#face0#What?! Why that giant little...!")
    sm.sendSay("He was refusing to eat my masterpiece! ...Wait?! \r\nWhat about #bGulla#k? What happened?!")
    sm.setInnerOverrideSpeakerTemplateID(3003153) # Pibik
    sm.sendSay("Muto stopped him while you were ...Sleeping!")
    sm.setInnerOverrideSpeakerTemplateID(3003152) # Master Lyck
    sm.sendSay("What did you say? #bHe moved#k?")
    sm.setInnerOverrideSpeakerTemplateID(3003150) # Lyon
    sm.sendSay("#face0#Yup! He sent that shark running with its tail between its... Uh... fins. Hehe!")
    sm.setInnerOverrideSpeakerTemplateID(3003152) # Master Lyck
    sm.sendSay("#bMy masterpiece#k... He didn't even glance at it... \r\nInstead, he ate #bSimia#k's food and moved?")
    sm.sendSay("#face1##fs50#(Sniffs) ...Waaaaah!")
    sm.setInnerOverrideSpeakerTemplateID(3003153) # Pibik
    sm.sendSay("Hey... Arte you crying?!")
    sm.setInnerOverrideSpeakerTemplateID(3003152) # Master Lyck
    sm.sendSay("#face2#Wah... My food... I #bput my heart and soul into that dish#k... \r\nHe didn't even look at it... Wah...")
    sm.sendSay("#face1#I... I will never cook again... \r\nI'm going to close my kitchen forever... Wah...")
    sm.setInnerOverrideSpeakerTemplateID(3003151) # Simia
    sm.sendSay("You're worng, Chef Lyck... Your food is #bamazing#k...")
    sm.sendSay("#face0#Just look! #bMuto#k ate all of your food.")
    sm.setInnerOverrideSpeakerTemplateID(3003152) # Master Lyck
    sm.sendSay("#face2#No... Slurp. #bMuto#k hates my food... \r\n He hated my food from the start... Slurp...")
    sm.setInnerOverrideSpeakerTemplateID(3003154) # Pimi
    sm.sendNext("Yeesh... He's a lot more emotional than he looks...")
    sm.setInnerOverrideSpeakerTemplateID(3003156) # Muto
    sm.sendSay("Muto... Eat everything... Muto is good child... If he eat everything...")
    sm.sendSay("The food before... #btaste yucky#k, but I eat... To protect #bfriends#k. #bSimia#k food... Very good.")
    sm.setParam(57)
    sm.sendSay("Master Lyck... It's not that your food is bad. Muto just has #runusual taste#k, like Simia and the Pi siblings...")
    sm.sendSay("That's why he got tired of your food.")
    sm.sendSay("So don't feel sad. You're still the #bbest chef#k around, as far as the villagers are concerned.")
    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(3003150) # Lyon
    sm.sendSay("#face0#That's right Master Lyck! I really love your food. Haha! Don't say something awful like you're gonna quit!")
    sm.setInnerOverrideSpeakerTemplateID(3003152) # Master Lyck
    sm.sendSay("#face2#I... I...")
    sm.sendSay("#face1##bMuto#k... I'm sorry...")
    sm.sendSay("#face2#I was so arrogant to assume you would like anything i made... \r\nIt must have been hard forcing yourself to eat my food...")
    sm.setInnerOverrideSpeakerTemplateID(3003156) # Muto
    sm.sendSay("It's... okay... Your food #bvery big#k... In that way, good...")
    sm.setInnerOverrideSpeakerTemplateID(3003150) # Lyon
    sm.sendSay("Then... this whole time, Muto's been protecting us while eating food that tasted bad to him?")
    sm.setInnerOverrideSpeakerTemplateID(3003151) # Simia
    sm.sendSay("My cooking skills are... Years behind Master Lyck's technique... But I knew #h #was right...")
    sm.sendSay("Muto has done so much for us... But we never showed him kindness. We took him for granted.")
    sm.sendSay("I'm not good at much, but I knew I couldn't let Muto starve. Giving him a warm meal was the least I could do...")
    sm.sendSay("Chef. This isn't about whose food is better...")
    sm.sendSay("We took Muto's sacrifice for granted... We need to be better.")
    sm.sendSay("So cheer up Chef. I'll look after Muto from now on...")
    sm.setInnerOverrideSpeakerTemplateID(3003152) # Master Lyck
    sm.sendSay("#face2#Simia... I didn't recognize your skills as a chef because I couldn't look past your #bunusual taste#k...")
    sm.sendSay("#face2#I'm sorry Simia... I was very arrogant, and I was wrong.")
    sm.sendSay("#face2#From now on, I will give you the recognition you deserve... \r\nAs Muto's #bpersonal chef#k.")
    sm.sendSay("#face2#Will you do me this favor?")
    sm.setInnerOverrideSpeakerTemplateID(3003151) # Simia
    sm.sendSay("You're making me... an official chef?")
    sm.setInnerOverrideSpeakerTemplateID(3003154) # Pimi
    sm.sendNext("He can't make you what you already are!")
    sm.setInnerOverrideSpeakerTemplateID(3003152) # Master Lyck
    sm.sendSay("#face2#Your friend is right. In any case, I will continue to cook for the villagers... \r\nAnd you will cook for Muto and the other villagers with un... \r\nDifferent tastes.")
    sm.setInnerOverrideSpeakerTemplateID(3003151) # Simia
    sm.sendSay("Me... A real chef?")
    sm.setInnerOverrideSpeakerTemplateID(3003152) # Master Lyck
    sm.sendSay("#face2#I understand if you don't want to do it, after all I've put you through...")
    sm.setInnerOverrideSpeakerTemplateID(3003151) # Simia
    sm.sendSay("#face0#Oh! No, Master Lyck! It would be my honor to cook for Muto and the Pi siblings! I'll do my best to get better, and make you proud!")
    sm.setInnerOverrideSpeakerTemplateID(3003150) # Lyon
    sm.sendSay("Uh... It seems that I could have handled this Chiefing business a little better...")
    sm.setInnerOverrideSpeakerTemplateID(3003153) # Pibik
    sm.sendSay("You're the one who's most at fault here!")
    sm.setInnerOverrideSpeakerTemplateID(3003150) # Lyon
    sm.sendSay("I know... I'll do my best to be a good Chief, and to take care of Muto and all of you...")
    sm.sendSay("#face0#Anyways... Hey traveler! Our village is more united than ever thanks to you! \r\nWe owe you a great debt!")
    sm.sendSay("#face0#I'll do whatever yyou want to make up for it! You want a back-rub? just say the word!")
    sm.setParam(57)
    sm.sendSay("I... just need to pass through... That's what I've been telling you from the start.")
    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(3003150) # Lyon
    sm.sendSay("#face1#Oh, that's right! I forgot! Whoops... Hehe!")
    sm.sendSay("#face0#Hey Muto, now that you're not hungry anymore, would you mind moving aside so our friend here can pass?")
    sm.setInnerOverrideSpeakerTemplateID(3003156) # Muto
    sm.sendSay("Yes... You can pass... Muto will move...")
    sm.setParam(57)
    sm.sendSay("Thanks Muto! I can finally make my way to the Black Mage!")
    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(3003150) # Lyon
    sm.sendSay("But... Why are you trying to pass through here anyway? Do you have some business with that #rBlack Mage#k fellow?")
    sm.setParam(57)
    sm.sendSay("Yes... #bvery important#k business...")
    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(3003155) # Pidol
    sm.sendNext("Just a moment...")
    sm.sendNext("Take this with you #v1712002#")
    sm.setParam(57)
    sm.sendSay("Oh? It looks like you've finally regained your senses. But what's this?")
    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(3003155) # Pidol
    sm.sendNext("Something you will need #bfor trhe challenges that await you#k.")
    sm.setParam(57)
    sm.sendSay("This is... An #bArcane Symbol#k?!")
    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(3003155) # Pidol
    sm.sendNext("I knew that you were #bdifferent#k from us from the moment you stepped into our lives...")
    sm.sendSay("We #blost our memories of our origin#k... But you aren't like us. #bIt's as though you are under the guardianship of a great power...#k")
    sm.sendSay("I realized that #bround object#k #v1712001# of yours was protecting you.")
    sm.sendSay("When I stumbled across #bthis object#k, #v1712002# I knew I had to give it to you as a #bgift#k.")
    sm.setParam(57)
    sm.sendSay("You're giving this to me? But why now? What do you know? Please, tell me!")
    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(3003155) # Pidol
    sm.sendNext("Err...")
    sm.sendNext("Uhmm... I don't know!")
    sm.setParam(57)
    sm.sendSay("Oh no... He changed back")
    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(3003151) # Simia
    sm.sendSay("Um... You haven't seen those before?")
    sm.sendSay("We occasionally stumble into objects like that around Chu CHu Island. \r\nThey're rare, but they appear more frequently in the wake of #bMuto's fights with Gulla#k.")
    sm.setParam(57)
    sm.sendSay("This is an #bArcane Symbol#k. An immense power lies within it.")
    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(3003151) # Simia
    sm.sendSay("Hmm... I don't know what to say, nothing happened when we held it.")
    sm.sendSay("We occasionally stumble into objects like that around Chu CHu Island. \r\nThey're rare, but they appear more frequently in the wake of #bMuto's fights with Gulla#k.")
    sm.setInnerOverrideSpeakerTemplateID(3003153) # Pibik
    sm.sendSay("And it tastes horrible!")
    sm.setParam(57)
    sm.sendSay("This object and the #rBlack Mage#k who I've been searching for... They're all connected to you and #bbirth of Chu Chu Island#k... As I understand it, #bmany different Erdas were mixed together#k and...")
    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(3003151) # Simia
    sm.sendSay("We have many questions about our origins, and why we can't leave this place.")
    sm.setInnerOverrideSpeakerTemplateID(3003153) # Pibik
    sm.sendSay("That's right! Every time we try to cross the river, we always #brun into something#k, like an invisible barrier!")
    sm.setInnerOverrideSpeakerTemplateID(3003151) # Simia
    sm.sendSay("But we're satisfied with our lives here... And we're happy.")
    sm.sendSay("So wahtever it is you know... Please don't tell us if it would threaten our happiness")
    sm.setParam(57)
    sm.sendSay("Simia... I... I understand.")
    sm.sendSay("To be honest, even I don't know why this place was created.")
    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(3003151) # Simia
    sm.sendSay("#face0#Since you are such a kindhearted person, I trust that whatever you are doing is the right thing. No matter what it means for us.")
    sm.sendSay("#face0#Come visit us again if you need more of those orbs. We will try to help you as best as we can.")
    sm.setInnerOverrideSpeakerTemplateID(3003154) # Pimi
    sm.sendSay("Then... is this farewell? Can't you stay a little longer?")
    sm.setParam(57)
    sm.sendSay("I'm afraid I've stayed here long enough. If I don't hurry, something terrible could happen.")
    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(3003151) # Simia
    sm.sendSay("#h #... Thank you for all you've done for Chu Chu Island... We will never forget it...")
    sm.setInnerOverrideSpeakerTemplateID(3003150) # Lyon
    sm.sendSay("Yeah... Our village is safe and happy again thanks to you... Come visit us whenever you need anything!")
    sm.setInnerOverrideSpeakerTemplateID(3003153) # Pibik
    sm.sendSay("(Sniffs) I'll never get to eat a #bDelicious Beefy Tastesplosion Sandwich#k again! It was so good! Waaah!")
    sm.setInnerOverrideSpeakerTemplateID(3003155) # Pidol
    sm.sendSay("Waaah... He's crying. Waah!")
    sm.setParam(57)
    sm.sendSay("Thank you Simia, Pi siblings, Chief Lyon. Even you, Master Lyck... If I get to return here at the end of my journey...")
    sm.sendSay("Then let's all share a #bDelicious Beefy Tastesplosion Sandwich#k together...")
    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(3003150) # Lyon
    sm.sendSay("#face0#Hehe. You're talking as if you're going to die out there!")
    sm.sendSay("#face0#What's the big deal? Stop acting like we're never gonna see each other again! Here, since you're feeling so blue I'll give you a lift, hehe!")
    sm.setParam(57)
    sm.sendSay("W-wait!")
    sm.setParam(37)
    sm.setInnerOverrideSpeakerTemplateID(3003150) # Lyon
    sm.sendSay("#face1#See you later! Huuup!")
    sm.blind(True, 255, 0, 0, 0, 1500)
    sm.sendDelay(1000)
    sm.warp(450002021)
    sm.progressMessageFont(3, 20, 10, 0, "Speak with Muto to continue your journey.")
    sm.completeQuestNoCheck(34218)
    sm.giveItem(1712002)
    sm.lockInGameUI(False, True)



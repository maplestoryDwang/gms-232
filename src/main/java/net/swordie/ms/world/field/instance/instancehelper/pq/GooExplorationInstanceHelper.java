package net.swordie.ms.world.field.instance.instancehelper.pq;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.connection.packet.MapLoadable;
import net.swordie.ms.connection.packet.WvsContext;
import net.swordie.ms.connection.packet.field.FieldPacket;
import net.swordie.ms.enums.WeatherEffNoticeType;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.Reactor;
import net.swordie.ms.life.drop.Drop;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.loaders.ReactorData;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;
import net.swordie.ms.world.field.MapTaggedObject;
import net.swordie.ms.world.field.fieldeffect.FieldEffect;
import net.swordie.ms.world.field.instance.Instance;
import net.swordie.ms.world.field.instance.instancehelper.InstanceHelper;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.concurrent.ScheduledFuture;

public class GooExplorationInstanceHelper extends InstanceHelper {

    private int[] stage1Code = {2,3,2,3,3,2,3};
    private boolean[] stage1CorrectGuesses = {false, false, false, false, false, false, false};
    private boolean isStage2Setup = false;
    private int redCount;
    private int yellowCount;
    private int blueCount;
    private Boolean[] redCode = {false, false,false, false,false, false,false, false,false, false,false, false,false, false,false, false};
    private Boolean[] yellowCode = {false, false,false, false,false, false,false, false,false, false,false, false,false, false,false, false};
    private Boolean[] blueCode = {false, false,false, false,false, false,false, false,false, false,false, false,false, false,false, false};
    private int redState = 1;
    private int yellowState = 1;
    private int blueState = 1;
    private int[] stage3ReactorTemplates = {8679003, 8679004, 8679005, 8679006, 8679007, 8679008, 8679009, 8679010, 8679011};
    private Position[] stage3Positions = {new Position(-26, -145), new Position(315, -305), new Position(-2, -990), new Position(-285, -791), new Position(783, -1484), new Position(1293, -991), new Position(1884, -991), new Position(1599, -539), new Position(1400, -174)};
    private List<Reactor> stage3Reactors = new ArrayList<>();
    private boolean stage3Started = false;
    private int stage3CurNum = 0;
    private int stage4BurningChalices = 0;
    private int stage4BurningChalicesRequired = 5;
    private boolean stage5BossSpawned = false;
    private boolean rewardBoxesSpawned = false;



    @Override
    public void setup(Instance instance) {
        super.setup(instance);
        for(int i = 0; i < stage1Code.length; i++){
            stage1Code[i] = Util.getRandomInclUpperBound(1, stage1Code[i]);
        }
        yellowCount = Util.getRandomInclUpperBound(1, 9);
        setupStage2Color(yellowCount, yellowCode);
        redCount = Util.getRandomInclUpperBound(1, 9);
        setupStage2Color(redCount, redCode);
        blueCount = Util.getRandomInclUpperBound(1, 9);
        setupStage2Color(blueCount, blueCode);

        //Shuffle Stage 3 reactor positions
        List<Position> positionList = Arrays.asList(stage3Positions);
        Collections.shuffle(positionList);
        positionList.toArray(stage3Positions);
    }


    public int getStage1CodeAtIndex(int index){
        return stage1Code[index];
    }

    public void guessStage1Code(Char chr, int index, int guess){
        if(stage1Code[index] == guess && stage1CorrectGuesses[index] == false){
            stage1CorrectGuesses[index] = true;
            chr.getField().broadcastPacket(WvsContext.weatherEffectNotice(WeatherEffNoticeType.GooIsland, chr.getName() + " has completed stage " + Integer.toString(index + 2), 3000));

            if(index == stage1CorrectGuesses.length - 1){
                increaseStage();
                for(Char fieldChr : chr.getField().getChars()){
                    fieldChr.getScriptManager().teleportToPortal(9);
                }
            }
        }
    }

    public boolean isStage1Finished(){
        for(int i = 0; i < stage1CorrectGuesses.length; i++){
            if(!stage1CorrectGuesses[i]){
                return false;
            }
        }
        return true;
    }

    public void setupStage2ForChr(Char chr){
            setStage2ColorVisible(chr, "R_", redCode);
            setStage2ColorVisible(chr, "Y_", yellowCode);
            setStage2ColorVisible(chr, "B_", blueCode);
    }

    private void setStage2ColorVisible(Char chr, String type, Boolean[] code){
        for(int i = 0; i < code.length; i++){
            chr.write(MapLoadable.setMapTaggedObjectVisible(new MapTaggedObject(type + Integer.toString(i + 1), code[i], 0, 0)));
        }
    }

    public void onStateChanged(Char chr, int reactorNumber, int state){
        switch (reactorNumber){
            case 1:
                redState = state + 1;
                break;
            case 2:
                yellowState = state + 1;
                break;
            case 3:
                blueState = state + 1;
                break;
        }
        if(redCount == redState && yellowCount == yellowState && blueCount == blueState){
            for(Reactor reactor : chr.getField().getReactors()){
                if(reactor.getTemplateId() == 8679000 || reactor.getTemplateId() == 8679001 || reactor.getTemplateId() == 8679002){
                    reactor.setState((byte)9);
                    reactor.broadcastChangeState();
                }
            }
            chr.getField().broadcastPacket(WvsContext.weatherEffectNotice(WeatherEffNoticeType.GooIsland, "You've cleared this stage. Proceed to the next one.", 3000));
            increaseStage();
        }
    }

    public int getCurrentStageProgress(){
        return getCurrentStage();
    }

    private void setupStage2Color(int count, Boolean[] code){
        for(int i = 0; i < count; i++){
            code[i] = true;
        }

        List<Boolean> codeList = Arrays.asList(code);
        Collections.shuffle(codeList);
        codeList.toArray(code);
    }

    public void setupStage3(){
        if(!stage3Started){
            for(int i = 0; i < stage3ReactorTemplates.length; i++){
                Field field = getInstance().getField(867156100);
                Reactor reactor = ReactorData.getReactorByID(stage3ReactorTemplates[i]);
                reactor.setPosition(stage3Positions[i]);
                field.spawnLife(reactor, null);
                stage3Reactors.add(reactor);
            }
            stage3Started = true;
        }
    }

    public boolean OnStage3ReactorPressed(Char chr, int templateID){
        if(getCurrentStage() < 4) {
            if (stage3ReactorTemplates[stage3CurNum] == templateID) {
                stage3CurNum += 1;
                if(stage3CurNum == stage3ReactorTemplates.length){
                    chr.getField().broadcastPacket(WvsContext.weatherEffectNotice(WeatherEffNoticeType.GooIsland, "You've cleared this stage. Proceed to the next one.", 3000));
                    increaseStage();
                } else {
                    chr.getField().broadcastPacket(WvsContext.weatherEffectNotice(WeatherEffNoticeType.GooIsland, chr.getName() + " pressed switch " + Integer.toString(stage3CurNum), 3000));
                }
                return true;
            } else {
                stage3CurNum = 0;
                chr.getField().broadcastPacket(WvsContext.weatherEffectNotice(WeatherEffNoticeType.GooIsland, chr.getName() + " pressed the wrong switch. All switches have been reset", 3000));
                for (Reactor reactor : stage3Reactors) {
                    reactor.setState((byte) 0);
                    reactor.broadcastChangeState();
                }
            }
            return false;
        }
        return true;
    }

    @Override
    public void onItemDroppedByMob(Field field, int quantity, Position position, Drop drop) {
        super.onItemDroppedByMob(field, quantity, position, drop);
        if(drop.getItem() == null) return;
        if(field.getId() == 867156200 && drop.getItem().getItemId() == 4001907) {
            drop.setBlockFromPickup(true);
            for (Reactor reactor : field.getReactors()) {
                Rect rect = new Rect(-65, -65, 65, 45);
                if(reactor.getRectAround(rect).hasPositionInside(position) && reactor.getState() == 0){
                    reactor.setState((byte)1);
                    reactor.broadcastChangeState();
                    stage4BurningChalices += 1;
                    field.removeDrop(drop.getObjectId(), 0, false, 0);
                }
            }
            if(stage4BurningChalices >= stage4BurningChalicesRequired){
                field.broadcastPacket(WvsContext.weatherEffectNotice(WeatherEffNoticeType.GooIsland, "You've cleared this stage. Proceed to the next one.", 3000));
                increaseStage();
            }
        }
    }

    public void spawnStage5Boss(Field field){
        if (!stage5BossSpawned){
            field.spawnMob(9601695, new Position(724, -394));
            field.broadcastPacket(WvsContext.weatherEffectNotice(WeatherEffNoticeType.GooIsland, "Those that want to reach the treasure must defeat the obstacles of the Goo Guardian.", 3000));
            stage5BossSpawned = true;
        }
    }

    @Override
    public void onMobDeath(Field field, Mob mob) {
        super.onMobDeath(field, mob);
        if(mob.getTemplateId() == 9601695){
            field.broadcastPacket(WvsContext.weatherEffectNotice(WeatherEffNoticeType.GooIsland, "Stage cleared! Proceed to the next map.", 3000));
            increaseStage();
        }
    }

    public void spawnLootChests(){
        if(!rewardBoxesSpawned) {
            int secondsLeft = (int) (getInstance().getRemainingTime() / 1000L);
            int mobTemplateID = 9601702;
            if (secondsLeft > 600) {
                mobTemplateID = 9601700;
            } else if (secondsLeft > 300) {
                mobTemplateID = 9601701;
            }
            Field field = getInstance().getField(867156400);
            field.spawnMob(mobTemplateID, new Position(-282, -210));
            field.spawnMob(mobTemplateID, new Position(417, -208));
            field.spawnMob(mobTemplateID, new Position(1122, -208));
            field.spawnMob(mobTemplateID, new Position(1830, -211));
            rewardBoxesSpawned = true;
        }
    }
}

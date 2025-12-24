package net.swordie.ms.world.field.instance.instancehelper.pq;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.client.character.items.Item;
import net.swordie.ms.connection.packet.UserPacket;
import net.swordie.ms.enums.ProgressMessageColourType;
import net.swordie.ms.enums.ProgressMessageFontType;
import net.swordie.ms.handlers.executors.EventManager;
import net.swordie.ms.life.drop.Drop;
import net.swordie.ms.life.mob.Mob;
import net.swordie.ms.loaders.ItemData;
import net.swordie.ms.util.Position;
import net.swordie.ms.util.Rect;
import net.swordie.ms.util.Util;
import net.swordie.ms.world.field.Field;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.concurrent.ScheduledFuture;
import java.util.concurrent.TimeUnit;

/**
 * Created on 12/02/2022.
 *
 * @author Asura
 */
public class MoonBunnyInstanceHelper extends PartyQuestInstanceHelper {
    /**
     * https://strategywiki.org/wiki/MapleStory/Moon_Bunny%27s_Rice_Cake
     *
     *
     * Stage 1:
     *  Kill Pigs and get Primrose Seeds
     *  Click on Reactors to use Primrose Seeds
     *  Enter Stage 2 when all reactors have been activated
     *
     * Stage 2:
     *  Kill Pigs
     *  Spawn Moon Bunny
     *  Spawn Horde Constantly
     *
     *  Moon Bunny will drop rice cake every 10 seconds. It is interrupted if Moon bunny is hit by a mob.
     *
     */


    private static final List<Position> pigSpawnPositions = Arrays.asList(
            new Position(641, 213),
            new Position(302, 273),
            new Position(139, 273),

            new Position(-62, 213),
            new Position(-200, 213),
            new Position(-387, 273),

            new Position(-579, 273),
            new Position(-845, 213)
    );

    // Stage 1
    private static final int PIG_TEMPLATE = 9500101;
    private static final int RIBBON_PIG_TEMPLATE = 9480281;

    private static final int PRIMROSE_SEED = 4001453;
    private static final int SEED_PLANTED_REQ = 6;
    private static final int PRIMROSE_SEED_DROP_RATE = 80;

    private int seedsPlanted;

    public int getSeedsPlanted() {
        return seedsPlanted;
    }

    public void setSeedsPlanted(int seedsPlanted) {
        this.seedsPlanted = seedsPlanted;
    }

    /**
     * Called from Primrose Plant Reactor Script
     */
    public synchronized void incSeedsPlanted() {
        setSeedsPlanted(getSeedsPlanted() + 1);

        if (getSeedsPlanted() >= SEED_PLANTED_REQ) {
            completeStage();
        }
    }

    // Stage 2
    private static final Position SPRING_BUNNY_POSITION = new Position(-195, -195);
    private static final int SPRING_BUNNY = 9300902;
    private static final int MOON_BUNNY_RICE_CAKE = 2430287;
    public static final int RICE_CAKE_REQ = 80;
    private ScheduledFuture riceCakeDropTimer;

    private static final int FLY_EYE = 9300903;
    private static final int STIRGE = 9300904;
    private static final int GOBLIN_FIRE = 9300905;

    private static final int MOBS_PER_WAVE = 20;
    private static final Rect LEFT_SPAWN_RECT = new Rect(-950, -880, -500, 150);
    private static final Rect RIGHT_SPAWN_RECT = new Rect(250, -880, 700, 150);

    private int mobQueue;
    private int riceCakesCollected;

    public int getMobQueue() {
        return mobQueue;
    }

    public void setMobQueue(int mobQueue) {
        this.mobQueue = mobQueue;
    }

    public void decMobQueue() {
        setMobQueue(getMobQueue() - 1);
    }

    public int getRiceCakesCollected() {
        return riceCakesCollected;
    }

    public void setRiceCakesCollected(int riceCakesCollected) {
        this.riceCakesCollected = riceCakesCollected;
    }

    public void addRiceCakesCollected(int addedRiceCakes) {
        setRiceCakesCollected(Math.max(0, Math.min(getRiceCakesCollected() + addedRiceCakes, RICE_CAKE_REQ)));
    }

    @Override
    protected void startStage(int stageNumber) {
        var stage = Stage.getByVal(getCurrentStage());
        if (stage == null) {
            stage = Stage.MonsterDefense;
        }
        switch (stage) {
            case PrimroseCollection:
                var field = getField();
                for (var pos : pigSpawnPositions) {
                    field.spawnMob(Util.getRandomBool() ? PIG_TEMPLATE : RIBBON_PIG_TEMPLATE, pos.getX(), pos.getY(), false, -1);
                }
                break;
            case MonsterDefenseSetup:
                for (var pigs : new HashSet<>(getField().getMobs())) {
                    pigs.die(false);
                }

                getField().spawnMob(SPRING_BUNNY, SPRING_BUNNY_POSITION.getX(), SPRING_BUNNY_POSITION.getY(), false, -1);
                var lastDelay = 10000;
                EventManager.stopTimer(riceCakeDropTimer);
                riceCakeDropTimer = addTimer(EventManager.addEvent(() -> dropRiceCake(SPRING_BUNNY_POSITION, lastDelay), lastDelay, TimeUnit.MILLISECONDS));
                completeStage();
                break;
            case MonsterDefense:
                setMobQueue(MOBS_PER_WAVE);
                var randMobs = Arrays.asList(
                        FLY_EYE,
                        STIRGE,
                        GOBLIN_FIRE
                );
                var delay = 100;
                for (var i = 0; i < MOBS_PER_WAVE; i++) {
                    var mob = Util.getRandomFromCollection(randMobs);
                    var randPos = Util.getRandomBool() ? LEFT_SPAWN_RECT.getRandomPositionInside() : RIGHT_SPAWN_RECT.getRandomPositionInside();

                    addTimer(EventManager.addEvent(() -> spawnMob(mob, randPos.getX(), randPos.getY(), -1), delay, TimeUnit.MILLISECONDS));
                    delay += 50;
                }
                break;
        }
    }

    private synchronized void dropRiceCake(Position position, int lastDelay) {
        var randQuantity = Util.getRandom(1, 4);
        var item = ItemData.getItemDeepCopy(MOON_BUNNY_RICE_CAKE);
        item.setQuantity(randQuantity);
        var drop = new Drop(-1, item);
        getField().drop(drop, position, true);

        var newLastDelay = Math.max(3000, Math.min(lastDelay - 1000, 10000));
        EventManager.stopTimer(riceCakeDropTimer);
        riceCakeDropTimer = addTimer(EventManager.addEvent(() -> dropRiceCake(position, newLastDelay), newLastDelay, TimeUnit.MILLISECONDS));
    }

    @Override
    public synchronized void onMobDamaged(Char attacker, Mob mob, long damage, long oldHp, long newHp) {
        if (mob.getTemplateId() == SPRING_BUNNY) {
            // reset timer with 10s interval
            var lastDelay = 10000;
            EventManager.stopTimer(riceCakeDropTimer);
            riceCakeDropTimer = addTimer(EventManager.addEvent(() -> dropRiceCake(SPRING_BUNNY_POSITION, lastDelay), lastDelay, TimeUnit.MILLISECONDS));
        }

        super.onMobDamaged(attacker, mob, damage, oldHp, newHp);
    }

    @Override
    public synchronized void onMobDeath(Field field, Mob mob) {
        var stage = Stage.getByVal(getCurrentStage());
        if (stage == null) {
            stage = Stage.MonsterDefense;
        }

        if (mob.getTemplateId() == SPRING_BUNNY) {
            EventManager.stopTimer(riceCakeDropTimer);
            addTimer(EventManager.addEvent(() -> clearInstance(), 2000, TimeUnit.MILLISECONDS));
        }

        switch (stage) {
            case PrimroseCollection:
                // Respawn Pig & 30% chance of dropping primrose seed
                var pos = Util.getRandomFromCollection(pigSpawnPositions);
                field.spawnMob(mob.getTemplateId(), pos.getX(), pos.getY(), false, -1);

                if (Util.succeedProp(PRIMROSE_SEED_DROP_RATE)) {
                    var drop = new Drop(-1, ItemData.getItemDeepCopy(PRIMROSE_SEED));
                    field.drop(drop, mob.getPosition());
                }
                break;
            case MonsterDefense:
                if (getMobQueue() <= 0 && field.getMobs().stream().allMatch(m -> getIgnoredMobs().contains(m.getTemplateId()))) {
                    completeStage();
                }
                break;
        }

        super.onMobDeath(field, mob);
    }

    @Override
    public synchronized void onItemLooted(Char chr, Item item, int quantity) {

        if (item.getItemId() == MOON_BUNNY_RICE_CAKE) {
            addRiceCakesCollected(quantity);
            var msg = String.format("Collected %d Rice Cakes.", getRiceCakesCollected());
            getInstance().broadcast(UserPacket.progressMessageFont(ProgressMessageFontType.Normal, 20, ProgressMessageColourType.Orange, 2000, msg));
        }

        super.onItemLooted(chr, item, quantity);
    }

    private synchronized void spawnMob(int templateId, int x, int y, long hp) {
        getField().spawnMob(templateId, x, y, false, hp);
        decMobQueue();
    }

    /**
     * Called by moonrabbit_tiger script
     * @return
     */
    public boolean hasAllRiceCakes() {
        return getRiceCakesCollected() >= RICE_CAKE_REQ;
    }

    /**
     * Called by moonrabbit_tiger script
     */
    public void completeMoonBunny() {
        completeInstance();
    }

    @Override
    protected void completeInstance() {
        // clear effect
        super.completeInstance();
    }

    @Override
    protected List<Integer> getIgnoredMobs() {
        return Arrays.asList(SPRING_BUNNY);
    }

    @Override
    protected boolean finishedInstance() {
        return false; // always false.
        // Talk to Growlie once 80 rice cakes are obtained.
    }

    @Override
    protected int getNextStageDelay() {
        return 2000;
    }

    @Override
    protected List<Integer> getPartyQuestItems() {
        return Arrays.asList(
                PRIMROSE_SEED,
                MOON_BUNNY_RICE_CAKE
        );
    }

    public enum Stage {
        PrimroseCollection(1),
        MonsterDefenseSetup(2),
        MonsterDefense(3), // 3 and more
        ;
        private int val;

        Stage(int val) {
            this.val = val;
        }

        public int getVal() {
            return val;
        }

        public static Stage getByVal(int val) {
            return Arrays.stream(values()).filter(s -> s.getVal() == val).findFirst().orElse(null);
        }
    }
}

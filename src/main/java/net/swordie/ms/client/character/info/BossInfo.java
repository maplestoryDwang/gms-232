package net.swordie.ms.client.character.info;

import net.swordie.ms.client.character.Char;
import net.swordie.ms.connection.packet.field.WillFieldPacket;
import net.swordie.ms.life.mob.boss.will.WillInfection;

public class BossInfo {

    private static final int MOONLIGHT_COOLDOWN = 5000; // 5 seconds
    private static final int MOONLIGHT_MAX = 100;
    private static final int MOONLIGHT_USE = 40;

    private final Char chr;

    // Will
    private int moonlight; // max = 100
    private long nextPossibleMoonlight;
    private long willPotionUseTime;
    private WillInfection willInfection;

    public BossInfo(Char chr) {
        this.chr = chr;
    }

    public int getMoonlight() {
        return moonlight;
    }

    public void setMoonlight(int moonlight) {
        this.moonlight = moonlight;
    }

    public long getNextPossibleMoonlight() {
        return nextPossibleMoonlight;
    }

    public void setNextPossibleMoonlight(long nextPossibleMoonlight) {
        this.nextPossibleMoonlight = nextPossibleMoonlight;
    }

    public void setMoonlightCooldown() {
        setNextPossibleMoonlight(System.currentTimeMillis() + MOONLIGHT_COOLDOWN);
        chr.write(WillFieldPacket.moonlightCooldown(MOONLIGHT_COOLDOWN));
    }

    public boolean canUseMoonlight() {
        return getNextPossibleMoonlight() <= System.currentTimeMillis() && getMoonlight() >= MOONLIGHT_USE;
    }

    public void addMoonlight(int amount) {
        setMoonlight(getMoonlight() + amount);
        if (getMoonlight() > MOONLIGHT_MAX) {
            setMoonlight(MOONLIGHT_MAX);
            // activate the button?
        } else if (getMoonlight() < 0) {
            setMoonlight(0);
        }

        chr.write(WillFieldPacket.moonlightStatus(getMoonlight()));
    }

    public void reset() {
        setMoonlight(0);
        setNextPossibleMoonlight(0);
    }

    public void onMoonlightUse() {
        addMoonlight(-MOONLIGHT_USE);
        setMoonlightCooldown();
    }

    public void setWillPotionUseTime(long willPotionUseTime) {
        this.willPotionUseTime = willPotionUseTime;
    }

    public long getWillPotionUseTime() {
        return willPotionUseTime;
    }

    public WillInfection getWillInfection() {
        return willInfection;
    }

    public void setWillInfection(WillInfection willInfection) {
        this.willInfection = willInfection;
    }
}

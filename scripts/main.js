Hooks.once("init", async function ()
{
    game.settings.register("swrpg-status-icons", "disableStatusEffectBackground", {
        name: "Disable Status Effect Icon Background",
        hint: "",
        scope: "world",
        config: true,
        default: true,
        type: Boolean,
        onChange: (rule) => window.location.reload(),
    });


    if (game.settings.get("swrpg-status-icons", "disableStatusEffectBackground"))
    {
        // Effectively hook at the end of the drawEffects call to remove the background before it's actually rendered
        const originalDrawEffect = Token.prototype.drawEffects;
        
        Token.prototype.drawEffects = function()
        {
            originalDrawEffect.call(this);

            // If there are any effects being drawn, the first display object in effects will always be the background 
            if (this.effects.children.length > 0)
            {
                this.effects.removeChildAt(0);
            }
        };
    }
});

CONFIG.statusEffects.push(
    {
        id: "Add Ability",
        label: "SOTB.AddAbility",
        icon: "modules/swrpg-status-icons/images/markers/AddAbility.png"
    },
    {
        id: "Add Boost",
        label: "SOTB.AddBoost",
        icon: "modules/swrpg-status-icons/images/markers/AddBoost.png"
    },
    {
        id: "Add Challenge",
        label: "SOTB.AddChallenge",
        icon: "modules/swrpg-status-icons/images/markers/AddChallenge.png"
    },
    {
        id: "Add Difficulty",
        label: "SOTB.AddDifficulty",
        icon: "modules/swrpg-status-icons/images/markers/AddDifficulty.png"
    },
    {
        id: "Add Proficiency",
        label: "SOTB.AddProficiency",
        icon: "modules/swrpg-status-icons/images/markers/AddProficiency.png"
    },
    {
        id: "Add Setback",
        label: "SOTB.AddSetback",
        icon: "modules/swrpg-status-icons/images/markers/AddSetback.png"
    },
    {
        id: "Downgrade Ability",
        label: "SOTB.DowngradeAbility",
        icon: "modules/swrpg-status-icons/images/markers/DowngradeAbility.png"
    },
    {
        id: "Downgrade Difficulty",
        label: "SOTB.DowngradeDifficulty",
        icon: "modules/swrpg-status-icons/images/markers/DowngradeDifficulty.png"
    },
    {
        id: "Reduce Ability",
        label: "SOTB.ReduceAbility",
        icon: "modules/swrpg-status-icons/images/markers/ReduceAbility.png"
    },
    {
        id: "Reduce Boost",
        label: "SOTB.ReduceBoost",
        icon: "modules/swrpg-status-icons/images/markers/ReduceBoost.png"
    },
    {
        id: "Reduce Challenge",
        label: "SOTB.ReduceChallenge",
        icon: "modules/swrpg-status-icons/images/markers/ReduceChallenge.png"
    },
    {
        id: "Reduce Difficulty",
        label: "SOTB.ReduceDifficulty",
        icon: "modules/swrpg-status-icons/images/markers/ReduceDifficulty.png"
    },
    {
        id: "Reduce Proficiency",
        label: "SOTB.ReduceProficiency",
        icon: "modules/swrpg-status-icons/images/markers/ReduceProficiency.png"
    },
    {
        id: "Reduce Setback",
        label: "SOTB.ReduceSetback",
        icon: "modules/swrpg-status-icons/images/markers/ReduceSetback.png"
    },
    {
        id: "Upgrade Ability",
        label: "SOTB.UpgradeAbility",
        icon: "modules/swrpg-status-icons/images/markers/UpgradeAbility.png"
    },
    {
        id: "Upgrade Difficulty",
        label: "SOTB.UpgradeDifficulty",
        icon: "modules/swrpg-status-icons/images/markers/UpgradeDifficulty.png"
    },
    {
        id: "No Action",
        label: "SOTB.NoAction",
        icon: "modules/swrpg-status-icons/images/markers/NoAction.png"
    },
    {
        id: "No Manuever",
        label: "SOTB.NoManeuver",
        icon: "modules/swrpg-status-icons/images/markers/NoManeuver.png"
    },
);
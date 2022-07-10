class randomleague {
    constructor() {
        // zorgen dat alle vakjes beginnen met het vraagteken
        document.getElementById("champ").classList.add("rugzijdechamp")
        document.getElementById("boots").classList.add("rugzijdebuild")
        document.getElementById("mythic").classList.add("rugzijdebuild")
        document.getElementById("item1").classList.add("rugzijdebuild")
        document.getElementById("item2").classList.add("rugzijdebuild")
        document.getElementById("item3").classList.add("rugzijdebuild")
        document.getElementById("item4").classList.add("rugzijdebuild")
        document.getElementById("rol").classList.add("rugzijdechamp")

    }
}
const champions = [
    'aatrox.png',
    'ahri.png',
    'akali.png',
    'akshan.png',
    'alistar.png',
    'amumu.png',
    'anivia.png',
    'annie.png',
    'aphelios.png',
    'ashe.png',
    'aurelion_Sol.png',
    'azir.png',
    'bard.png',
    'belveth.png',
    'blitzcrank.png',
    'brand.png',
    'braum.png',
    'caitlyn.png',
    'camille.png',
    'cassiopeia.png',
    'chogath.png',
    'corki.png',
    'darius.png',
    'diana.png',
    'draven.png',
    'dr._Mundo.png',
    'ekko.png',
    'elise.png',
    'evelynn.png',
    'ezreal.png',
    'fiddlesticks.png',
    'fiora.png',
    'fizz.png',
    'galio.png',
    'gangplank.png',
    'garen.png',
    'gnar.png',
    'gragas.png',
    'graves.png',
    'gwen.png',
    'hecarim.png',
    'heimerdinger.png',
    'illaoi.png',
    'irelia.png',
    'ivern.png',
    'janna.png',
    'jarvin.png',
    'jax.png',
    'jayce.png',
    'jhin.png',
    'jinx.png',
    'kaisa.png',
    'kalista.png',
    'karma.png',
    'karthus.png',
    'kassadin.png',
    'katarina.png',
    'kayle.png',
    'kayn.png',
    'kennen.png',
    'khazix.png',
    'kindred.png',
    'kled.png',
    'kogmaw.png',
    'leblanc.png',
    'lee_Sin.png',
    'leona.png',
    'lillia.png',
    'lissandra.png',
    'lucian.png',
    'lulu.png',
    'lux.png',
    'malphite.png',
    'malzahar.png',
    'maokai.png',
    'master_yi.png',
    'miss_Fortune.png',
    'mordekaiser.png',
    'morgana.png',
    'nami.png',
    'nasus.png',
    'nautilus.png',
    'neeko.png',
    'nidalee.png',
    'nocturne.png',
    'nunu.png',
    'olaf.png',
    'orianna.png',
    'ornn.png',
    'pantheon.png',
    'poppy.png',
    'pyke.png',
    'quinn.png',
    'qiyana.png',
    'rakan.png',
    'rammus.png',
    'reksai.png',
    'rell.png',
    'renata_Glasc.png',
    'renekton.png',
    'rengar.png',
    'riven.png',
    'rumble.png',
    'ryze.png',
    'samira.png',
    'sejuani.png',
    'senna.png',
    'seraphine.png',
    'sett.png',
    'shaco.png',
    'shen.png',
    'shyvana.png',
    'singed.png',
    'sion.png',
    'sivir.png',
    'skarner.png',
    'sona.png',
    'soraka.png',
    'swain.png',
    'sylas.png',
    'syndra.png',
    'tahm_Kench.png',
    'taliyah.png',
    'talon.png',
    'taric.png',
    'teemo.png',
    'thresh.png',
    'tristana.png',
    'trundle.png',
    'tryndamere.png',
    'twisted_Fate.png',
    'twitch.png',
    'udyr.png',
    'urgot.png',
    'varus.png',
    'vayne.png',
    'veigar.png',
    'velkoz.png',
    'vex.png',
    'vi.png',
    'viego.png',
    'viktor.png',
    'vladimir.png',
    'volibear.png',
    'warwick.png',
    'wukong.png',
    'xayah.png',
    'xerath.png',
    'xin_Zhao.png',
    'yasuo.png',
    'yone.png',
    'yorick.png',
    'yuumi.png',
    'zac.png',
    'zed.png',
    'zeri.png',
    'ziggs.png',
    'zilean.png',
    'zoe.png',
    'zyra.png'
]

const boots = [
    'berserkers.png',
    'swifties.png',
    'ionian.png',
    'mercs.png',
    'mobies.png',
    'plated_steelcaps.png',
    'sorcshoes.png'
]

const mythics = [
    'chemtank.png',
    'crown.png',
    'duskblade.png',
    'eclipse.png',
    'evenshroud.png',
    'everfrost.png',
    'frostfire.png',
    'galeforce.png',
    'goredrinker.png',
    'imperial mandate.png',
    'kraken slayer.png',
    'liandrys.png',
    'locket_of_the_iron_solary.png',
    'ludens.png',
    'moonstone.png',
    'night_harvester.png',
    'prowlers.png',
    'riftmaker.png',
    'rocketbelt.png',
    'shieldbow.png',
    'shurelyas.png',
    'stridebreaker.png',
    'sunderer.png',
    'sunfire.png',
    'trinity.png'
]

const items = [
    'abyssal_mask.png',
    'anathemas_chains.png',
    'ardent_censer.png',
    'axiom_arc.png',
    'banshees_veil.png',
    'black_cleaver.png',
    'blade_of_the_ruined_king.png',
    'bloodthirster.png',
    'chempunk_chainsword.png',
    'chemtech_putrifier.png',
    'cosmic_drive.png',
    'dead_mans_plate.png',
    'deaths_dance.png',
    'demonic_embrace.png',
    'edge_of_night.png',
    'essence_reaver.png',
    'fimbulwinter.png',
    'force_of_nature.png',
    'frozen_heart.png',
    'gargoyole_stoneplate.png',
    'guardian_angel.png',
    'guinsoos_rageblade.png',
    'horizon_focus.png',
    'hullbreaker.png',
    'infinity_edge.png',
    'knights_vow.png',
    'lich_bane.png',
    'lord_dominiks_regards.png',
    'manamune.png',
    'maw_of_malmortius.png',
    'mejais_soulstealer.png',
    'mercurial_scimitar.png',
    'mikaels_blessing.png',
    'morellonomicon.png',
    'mortal_reminder.png',
    'nashers_tooth.png',
    'navori_quickblade.png',
    'phantom_dancer.png',
    'rabadons_deathcap.png',
    'randuins_omen.png',
    'rapid_firecannon.png',
    'ravenous_hydra.png',
    'redemption.png',
    'runaans_hurricane.png',
    'rylais_crystal_scepter.png',
    'seraphs_embrace.png',
    'serpents_fang.png',
    'seryldas_grudge.png',
    'shadowflame.png',
    'silvermere_dawn.png',
    'spirit_visage.png',
    'staff_of_flowing_water.png',
    'steraks_gage.png',
    'stormrazer.png',
    'the_collector.png',
    'thornmail.png',
    'titanic_hydra.png',
    'umbral_glaive.png',
    'void_staff.png',
    'warmogs_armor.png',
    'winters_approuch.png',
    'wits_end.png',
    'youmuus_ghostblade.png',
    'zekes_convergence.png',
    'zhonyas_hourglass.png'
]

const roles = [
    'botlane.png',
    'jungle.png',
    'midlane.png',
    'support.png',
    'toplane.png'
]

function naarHoofdletter(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function klikChamp(){
    let champ = champions[Math.floor(Math.random()*champions.length)]; // de champ kiezen
    document.getElementById("champ").classList.remove("rugzijde")
    document.getElementById("champ").style.backgroundImage = `url(afbeeldingen/champs/${champ})`
    document.getElementById("champ").style.backgroundSize = "180px 180px"
    // naam van de champ
    document.getElementById("champknop").textContent = `${naarHoofdletter(champ.replace(".png", "").replace("_"," "))}`
}


function klikBuild(){
    let boot = boots[Math.floor(Math.random()*boots.length)]; // boots
    document.getElementById("boots").classList.remove("rugzijde")
    document.getElementById("boots").style.backgroundImage = `url(afbeeldingen/boots/${boot})`
    document.getElementById("boots").style.backgroundSize = "113px 113px"
    let mythic = mythics[Math.floor(Math.random()*mythics.length)]; // mythic item
    document.getElementById("mythic").classList.remove("rugzijde")
    document.getElementById("mythic").style.backgroundImage = `url(afbeeldingen/mythics/${mythic})`
    document.getElementById("boots").style.backgroundSize = "113px 113px"
    let itemslijst = [] // lijst maken voor de niet mythic items
    // zorgen dat er altijd 4 items in de lijst zitten
    while (!(itemslijst.length === 4)){
        let item = items[Math.floor(Math.random()*items.length)];
        if (!(itemslijst.includes(item))){
            itemslijst.push(item)
        }
    }
    // eerste item
    document.getElementById("item1").classList.remove("rugzijde")
    document.getElementById("item1").style.backgroundImage = `url(afbeeldingen/items/${itemslijst[0]})`
    document.getElementById("item1").style.backgroundSize = "113px 113px"
    // tweede item
    document.getElementById("item2").classList.remove("rugzijde")
    document.getElementById("item2").style.backgroundImage = `url(afbeeldingen/items/${itemslijst[1]})`
    document.getElementById("item2").style.backgroundSize = "113px 113px"
    // derde item
    document.getElementById("item3").classList.remove("rugzijde")
    document.getElementById("item3").style.backgroundImage = `url(afbeeldingen/items/${itemslijst[2]})`
    document.getElementById("item3").style.backgroundSize = "113px 113px"
    // vierde item
    document.getElementById("item4").classList.remove("rugzijde")
    document.getElementById("item4").style.backgroundImage = `url(afbeeldingen/items/${itemslijst[3]})`
    document.getElementById("item4").style.backgroundSize = "113px 113px"
}

function klikRole(){
    let rol = roles[Math.floor(Math.random()*roles.length)]; // de rol kiezen
    document.getElementById("rol").classList.remove("rugzijde")
    document.getElementById("rol").style.backgroundImage = `url(afbeeldingen/roles/${rol})`
    document.getElementById("champ").style.backgroundSize = "180px 180px"
}

function allRandom(){
    klikChamp()
    klikBuild()
    klikRole()
}
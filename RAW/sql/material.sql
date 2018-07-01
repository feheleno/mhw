CREATE TABLE mhw.material (
  material_id INT NOT NULL AUTO_INCREMENT,
  material_name VARCHAR(100) NOT NULL,
  material_rarity VARCHAR(1) NULL,
  PRIMARY KEY (material_id));

INSERT INTO mhw.material (material_name, material_rarity)
  VALUES ("Ace Hunter Coin","8"),
  ("Advanced Armor Sphere","6"),
  ("Adamant Seed","2"),
  ("Antidote","1"),
  ("Aqua Fang",null),
  ("Attack Jewel","7"),
  ("Azure Star Shard",null),
  ("Baitbug","3"),
  ("Black Bandage",null),
  ("Black Diablos Carapace",null),
  ("Black Diablos Ridge +",null),
  ("Black Spiral Horn +",null),
  ("Blastnut","1"),
  ("Blazenut","2"),
  ("Blissbill",null),
  ("Bomb Arowana",null),
  ("Bomb Arowana Scale","2"),
  ("Botany Jewel","5"),
  ("Brutal Bone","6"),
  ("Brute Coin",null),
  ("Burst Arowana",null),
  ("Bomb Pod",null),
  ("Deceased Scale",null),
  ("Devil\'s Blight","2"),
  ("Diablos Carapace",null),
  ("Dodogama Hide +",null),
  ("Dodogama Jaw",null),
  ("Dodogama Scale +",null),
  ("Dodogama Tail",null),
  ("Dodogama Talon",null),
  ("Dragon Treasure",null),
  ("Dragonfell Berry","4"),
  ("Dragonbone Relic","7"),
  ("Dragonstrike Nut","2"),
  ("Dreamcore Ore","7"),
  ("Dundormarin","4"),
  ("Dung","1"),
  ("Elder Dragon Blood","7"),
  ("Elder Dragon Bone","7"),
  ("Electro Sac","4"),
  ("Empty Phial","1"),
  ("Exciteshroom","3"),
  ("Firecell Stone","7"),
  ("Flamenut","2"),
  ("Flashbug","2"),
  ("Flying Coin",null),
  ("Freezer Sac","6"),
  ("Frost Sac","4"),
  ("Fucium Ore","6"),
  ("Gama Coin",null),
  ("Gastodon Carapace","6"),
  ("Gastodon Tuna",null),
  ("Great Sushifish Scale","4"),
  ("Girros Scale +","6"),
  ("Gilded Scale",null),
  ("Gilded Scale +",null),
  ("Glutton Tuna",null),
  ("Goldenfish",null),
  ("Golden Egg",null),
  ("Golden Scale",null),
  ("Golden Scale +",null),
  ("Great Bomb Arowana Scale","4"),
  ("Great Gajau Whisker",null),
  ("Great Jagras Claw +","6"),
  ("Great Jagras Hide +","6"),
  ("Great Jagras Scale +","6"),
  ("Great Burst Arowana Scale","4"),
  ("Gunpowderfish Scale","3"),
  ("Great Gunpowderfish Scale","4"),
  ("Hard Armor Sphere","7"),
  ("Hardshell Powder","4"),
  ("Heavy Armor Sphere",null),
  ("Herbivore Egg",null),
  ("Hero\'s Streamstone: Sword",null),
  ("Hero\'s Streamstone: Blade",null),
  ("Hero\'s Streamstone: Hammer",null),
  ("Hero\'s Streamstone: Lance",null),
  ("Hero\'s Streamstone: Axe",null),
  ("Hero\'s Streamstone: Shaft",null),
  ("Hero\'s Streamstone: Ranged",null),
  ("High Commendation","7"),
  ("Hunter King Coin",null),
  ("Inferno Sac","6"),
  ("Jagras Hide +","6"),
  ("Jagras Scale +","6"),
  ("Large Barrel","2"),
  ("Large Wyvern Gem",null),
  ("Large Wyvern Tear",null),
  ("Latchberry","1"),
  ("Loc Lac Ore","5"),
  ("Minegardenite",null),
  ("Mega Nutrients","5"),
  ("Nutrients","2"),
  ("Platinum Scale",null),
  ("Platinum Scale +",null),
  ("Piercing Pod",null),
  ("Rathalos Coin",null),
  ("Screamer Sac",null),
  ("Silver Egg",null),
  ("Shinebloom",null),
  ("Slashberry","1"),
  ("Sleep Sac","4"),
  ("Small Goldenfish",null),
  ("Steel Egg","4"),
  ("Thorn Pod",null),
  ("Thunder Sac",null),
  ("Thunderbug","4"),
  ("Toadstool","6"),
  ("Tobi-Kadachi Claw +","6"),
  ("Torch Pod",null),
  ("Tzitzi Coin",null),
  ("Unknown Skull","7"),
  ("Val Habar Quartz",null),
  ("Voucher","4"),
  ("Warrior\'s Streamstone: Sword",null),
  ("Warrior\'s Streamstone: Blade",null),
  ("Warrior\'s Streamstone: Hammer",null),
  ("Warrior\'s Streamstone: Lance",null),
  ("Warrior\'s Streamstone: Axe",null),
  ("Warrior\'s Streamstone: Shaft",null),
  ("Warrior\'s Streamstone: Ranged",null),
  ("Whetfish Fin",null),
  ("White Liver",null),
  ("Kulu Coin","4"),
  ("Pinnacle Coin","4"),
  ("Lightcrystal","5"),
  ("Aquacore Ore","4"),
  ("Spiritcore Ore","6"),
  ("Warped Bone","4"),
  ("Sturdy Bone","4"),
  ("Coral Bone","4"),
  ("Parashroom","3"),
  ("Bomberry","2"),
  ("Nitroshroom","2"),
  ("Needleberry","1"),
  ("Redpit",null),
  ("Sleep Herb","1"),
  ("Spider Web","1"),
  ("Piercing Claw","6"),
  ("Might Seed","2"),
  ("Aqua Sac","4"),
  ("Coral Crystal","4"),
  ("Wyvern Tear",null),
  ("Honey","2"),
  ("Sinister Cloth","5"),
  ("Burnt Meat","1"),
  ("Gastodon Horn","6"),
  ("Sushifish Scale",null),
  ("Great Hornfly","5"),
  ("Poison Sac","4"),
  ("Boomerang","4"),
  ("Flame Sac","4"),
  ("Dragonite Ore","4"),
  ("First Wyverian Print","4"),
  ("Wyvern Egg",null),
  ("Smokenut","1"),
  ("Forgotten Fossil",null),
  ("Anjanath Fang","4"),
  ("Anjanath Fang +","6"),
  ("Anjanath Gem",null),
  ("Anjanath Nosebone","4"),
  ("Anjanath Nosebone +","6"),
  ("Anjanath Pelt","4"),
  ("Anjanath Pelt +","6"),
  ("Anjanath Plate","5"),
  ("Anjanath Scale","4"),
  ("Anjanath Scale +","6"),
  ("lAnjanath Tail","4"),
  ("Pukei Coin","4"),
  ("Tailraider Voucher","4"),
  ("Azure Rathalos Carapace","6"),
  ("Azure Rathalos Scale +","6"),
  ("Azure Rathalos Tail","6"),
  ("Azure Rathalos Wing","6"),
  ("Barnos Talon","6"),
  ("Barnos Hide +","6"),
  ("Barroth Carapace","6"),
  ("Barroth Claw","4"),
  ("Barroth Claw +","6"),
  ("Barroth Ridge","4"),
  ("Barroth Ridge +","6"),
  ("Barroth Scalp","4"),
  ("Barroth Shell","4"),
  ("Barroth Tail","4"),
  ("Barroth Coin",null),
  ("Fertile Mud","4"),
  ("Bazelgeuse Carapace",null),
  ("Bazelgeuse Fuse",null),
  ("Bazelgeuse Gem",null),
  ("Bazelgeuse Scale +","6"),
  ("Bazelgeuse Tail",null),
  ("Bazelgeuse Talon",null),
  ("Bazelgeuse Wing",null),
  ("Bird Wyvern Gem","7"),
  ("Majestic Horn",null),
  ("Carbalite Ore","6"),
  ("Blue Mushroom","2"),
  ("Boulder Bone","4"),
  ("Quality Bone","6"),
  ("Monster Bone S","4"),
  ("Ancient Bone","4"),
  ("Monster Fluid","4"),
  ("Pearl Oyster",null),
  ("Gunpowder Level 2","2"),
  ("Gunpowder Level 3","2"),
  ("Elysian Fruit",null),
  ("Heavenberry",null),
  ("Commendation","5"),
  ("Blos Medulla",null),
  ("Twisted Horn","4"),
  ("Diablos Marrow","4"),
  ("Diablos Shell","4"),
  ("Diablos Tailcase",""),
  ("Diablos Fang","4"),
  ("Diablos Ridge","4"),
  ("Dragoncore Ore",null),
  ("Bitterbug","1"),
  ("Godbug","4"),
  ("Dragonbloom",null),
  ("Gajau Scale","6"),
  ("Gajau Skin","4"),
  ("Gajau Whisker","4"),
  ("Brightmoss",null),
  ("Girros Hide","4"),
  ("Sharp Claw","4"),
  ("Girros Hide +","6"),
  ("Girros Fang","4"),
  ("Girros Scale","4"),
  ("Omniplegia Sac","6"),
  ("Paralysis Sac","4"),
  ("Great Girros Fang","4"),
  ("Great Girros Tail",null),
  ("Great Girros Scale","4"),
  ("Great Girros Scale +","6"),
  ("Great Girros Hood","4"),
  ("Great Girros Hood +","6"),
  ("Great Girros Hide","4"),
  ("Great Girros Hide +","6"),
  ("Great Jagras Hide","4"),
  ("Great Jagras Scale","4"),
  ("Great Jagras Claw","4"),
  ("Great Jagras Mane","4"),
  ("Whetfish Fin +","4"),
  ("Nulberry","2"),
  ("Ivy","1"),
  ("Herb","1"),
  ("Antidote Herb","1"),
  ("Fire Herb","2"),
  ("Flowfern","1"),
  ("Hornetaur Carapace","6"),
  ("Hornetaur Innerwing",null),
  ("Hornetaur Shell","4"),
  ("Hornetaur Wing","4"),
  ("Hornetaur Head","4"),
  ("Monster Broth","6"),
  ("Jagras Hide","4"),
  ("Jagras Scale","4"),
  ("Jyuratodus Fang +","6"),
  ("Jyuratodus Fin +","6"),
  ("Jyuratodus Scale +","6"),
  ("Torrent Sac","6"),
  ("Jyuratodus Scale","4"),
  ("Jyuratodus Fin","4"),
  ("Jyuratodus Fang","4"),
  ("Jyuratodus Shell","4"),
  ("Raw Meat","1"),
  ("Warm Pelt","4"),
  ("Kelbi Horn",null),
  ("Kestodon Shell","4"),
  ("Kestodon Carapace","6"),
  ("Kestodon Scalp","4"),
  ("Kirin Azure Horn",null),
  ("Kirin Hide",null),
  ("Kirin Hide +",null),
  ("Kirin Mane",null),
  ("Kirin Tail",null),
  ("Kirin Thunderhorn",null),
  ("Kirin Thundertail",null),
  ("Kulu-Ya-ku Beak +","6"),
  ("Kulu-Ya-Ku Hide +","6"),
  ("Kulu-Ya-Ku Plume +","6"),
  ("Kulu-Ya-Ku Scale +","6"),
  ("Kulu-Ya-Ku Hide","4"),
  ("Kulu-Ya-Ku Plume","4"),
  ("Kulu-Ya-Ku Beak","4"),
  ("Kulu-Ya-Ku Scale","4"),
  ("Daora Carapace","7"),
  ("Daora Claw +","7"),
  ("Daora Dragon Scale +","7"),
  ("Daora Gem",null),
  ("Daora Horn +","7"),
  ("Daora Tail","7"),
  ("Daora Webbing","7"),
  ("Lavasioth Carapace",null),
  ("Lavasioth Fang +","6"),
  ("Lavasioth Fin +","6"),
  ("Lavasioth Scale +","6"),
  ("Legiana Claw +","6"),
  ("Legiana Gem",null),
  ("Legiana Hide +","6"),
  ("Legiana Wing",null),
  ("Legiana Claw","4"),
  ("Legiana Tail Webbing","4"),
  ("Legiana Webbing","4"),
  ("Legiana Plate","5"),
  ("Legiana Scale","4"),
  ("Legiana Scale +","6"),
  ("Legiana Hide","4"),
  ("Iron Ore","4"),
  ("Machalite Ore","4"),
  ("Earth Crystal","4"),
  ("Mosswine Hide","4"),
  ("Nergigante Gem",null),
  ("Nergigante Carapace","7"),
  ("Nergigante Horn +","7"),
  ("Immortal Dragonscale","7"),
  ("Nergigante Talon","7"),
  ("Nergigante Tail","7"),
  ("Nergigante Regrowth Plate","7"),
  ("Wingdrake Hide +","6"),
  ("Wingdrake Hide","4"),
  ("Research Commission Ticket","7"),
  ("Odogaron Claw +",null),
  ("Odogaron Fang +",null),
  ("Odogaron Gem",null),
  ("Odogaron Scale +",null),
  ("Odogaron Sinew +",null),
  ("Odogaron Fang","4"),
  ("Odogaron Plate",null),
  ("Odogaron Scale","4"),
  ("Odogaron Claw","4"),
  ("Odogaron Sinew","4"),
  ("Nourishing Extract","4"),
  ("Odogaron Tail","4"),
  ("Paolumu Carapace +","6"),
  ("Paolumu Pelt +","6"),
  ("Paolumu Scale +","6"),
  ("Paolumu Wing","6"),
  ("Paolumu Scale","4"),
  ("Paolumu Shell","4"),
  ("Paolumu Webbing","4"),
  ("Paolumu Pelt","4"),
  ("Pink Rathian Carapace","6"),
  ("Pink Rathian Scale +","6"),
  ("Toxin Sac","6"),
  ("Pukei-Pukei Scale","4"),
  ("Pukei-Pukei Scale +","6"),
  ("Pukei-Pukei Carapace","6"),
  ("Pukei-Pukei Sac","4"),
  ("Pukei-Pukei Sac +","6"),
  ("Pukei-Pukei Quill","4"),
  ("Pukei-Pukei Wing","6"),
  ("Pukei-Pukei Shell","4"),
  ("Pukei-Pukei Tail","4"),
  ("Astera Jerky","2"),
  ("Mandragora","3"),
  ("Small Barrel","1"),
  ("Snow Herb","2"),
  ("Coma Sac","6"),
  ("Radobaan Marrow","4"),
  ("Radobaan Scale","4"),
  ("Radobaan Oilshell","4"),
  ("Wyvern Bonemass","4"),
  ("Radobaan Shell","4"),
  ("Radobaan Carapace","6"),
  ("Radobaan Medulla","6"),
  ("Radobaan Scale +","6"),
  ("Wyvern Gem","7"),
  ("Rathalos Carapace","6"),
  ("Rathalos Ruby","7"),
  ("Rathalos Marrow","4"),
  ("Rathalos Plate","5"),
  ("Rathalos Scale","4"),
  ("Rathalos Tail","4"),
  ("Rathalos Webbing","4"),
  ("Rathalos Wing","6"),
  ("Rathalos Shell","4"),
  ("Rath Wingtalon","4"),
  ("Rathalos Scale +","6"),
  ("Rathian Carapace","6"),
  ("Rathian Coin",null),
  ("Rathian Ruby",null),
  ("Rathian Scale +","6"),
  ("Rathian Spike +","6"),
  ("Rathian Plate","4"),
  ("Rathian Scale","4"),
  ("Rathian Spike","4"),
  ("Rathian Shell","4"),
  ("Rathian Webbing","4"),
  ("Dragonvein Crystal","6"),
  ("Novacrystal","7"),
  ("Monster Bone +","4"),
  ("Monster Keenbone","6"),
  ("Monster HardBone","6"),
  ("Monster Bone M","4"),
  ("Monster Bone L","4"),
  ("Armor Sphere","4"),
  ("Armor Sphere +","5"),
  ("Kingly Cactus",null),
  ("Jewel Cactus",null),
  ("Shamos Hide","4"),
  ("Shamos Hide +","6"),
  ("Shamos Scale +","6"),
  ("Shamos Scale","4"),
  ("High Quality Pelt","6"),
  ("Teostra Carapace","6"),
  ("Teostra Claw +","6"),
  ("Teostra Powder",null),
  ("Teostra Tail",null),
  ("Teostra Webbing",null),
  ("Fire Dragonscale +",null),
  ("Teostra Gem",null),
  ("Teostra Horn +",null),
  ("Teostra Mane",null),
  ("Tobi-Kadachi Electrode +","6"),
  ("Tobi-Kadachi Pelt +","6"),
  ("Tobi-Kadachi Scale +","6"),
  ("Tobi-Kadachi Pelt","4"),
  ("Tobi-Kadachi Membrane","4"),
  ("Tobi-Kadachi Scale","4"),
  ("Tobi-Kadachi Claw","4"),
  ("Tobi-Kadachi Electrode","4"),
  ("Divine Apple",null),
  ("Hardfruit",null),
  ("Rockfruit",null),
  ("Tzitzi-Ya-Ku Claw","4"),
  ("Tzitzi-Ya-Ku Claw +","6"),
  ("Tzitzi-Ya-Ku Scale","4"),
  ("Tzitzi-Ya-Ku Scale +","6"),
  ("Tzitzi-Ya-Ku Photophore","4"),
  ("Tzitzi-Ya-Ku Photophore +","6"),
  ("Tzitzi-Ya-Ku Hide","4"),
  ("Tzitzi-Ya-Ku Hide +","6"),
  ("Lava Nugget",null),
  ("Uragaan Carapace","6"),
  ("Uragaan Jaw","6"),
  ("Uragaan Marrow","6"),
  ("Uragaan Ruby",null),
  ("Uragaan Scale +","6"),
  ("Uragaan Scute","6"),
  ("Vaal Hazak Carapace",null),
  ("Vaal Hazak Fang +",null),
  ("Vaal Hazak Gem",null),
  ("Vaal Hazak Membrane",null),
  ("Vaal Hazak Tail",null),
  ("Vaal Hazak Talon",null),
  ("Vaal Hazak Wing",null),
  ("Vespoid Carapace","6"),
  ("Vespoid Innerwing","6"),
  ("Vespoid Shell","4"),
  ("Vespoid Wing","4"),
  ("Xeno\'jiiva Claw",null),
  ("Xeno\'jiiva Gem","8"),
  ("Xeno\'jiiva Horn",null),
  ("Xeno\'jiiva Shell",null),
  ("Xeno\'jiiva Soulscale",null),
  ("Xeno\'jiiva Tail",null),
  ("Xeno\'jiiva Veil","7"),
  ("Xeno\'jiiva Wing",null),
  ("Zorah Magdaros Heat Scale","6"),
  ("Zorah Magdaros Pleura","6"),
  ("Zorah Magdaros Magma","6"),
  ("Zorah Magdaros Carapace","6"),
  ("Zorah Magdaros Gem","7"),
  ("Zorah Magdaros Ridge","6");
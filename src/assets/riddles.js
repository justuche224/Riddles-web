const Riddles = {
    1: "The shorter I am, the bigger I am. What am I?",
    2: "What is bought by the yard but is worn by the foot?",
    3: "With pointed fangs it sits in wait, With piercing force it doles out fate, Over bloodless victims proclaiming its might, Eternally joining in a single bite. What is it?",
    4: "What has a foot but no leg?",
    5: "What stinks when living and smells good when dead?",
    6: "What takes hours to pull off, Is most satisfying when it's done, And requires consent from the person you're doing it to?",
    7: "What has a big mouth, yet never speaks?",
    8: "The more you take the more you leave behind.",
    9: "The virgin gave birth to a child and threw away the blanket.",
    10: "There is a creature of God whose body is hard; it does not wish to eat unless you strike its head.",
    11: "I have three hundred cattle, with a single nose cord.",
    12: "What do you have when you're sitting down that you don't have when you're standing up?",
    13: "First you see me in the grass dressed in yellow gay; next I am in dainty white, then I fly away. What am I?",
    14: "Born of sorrow, grows with age. You need a lot to be a sage. What is it?",
    15: "Patch upon patch, without any stitches, if you tell me this riddle, I'll give you my breeches.",
    16: "Some are quick to take it. Others must be coaxed. Those who choose to take it gain and lose the most.",
    17: "I go in dry and come out wet, The longer I'm in, the stronger I get. What am I?",
    18: "No thicker than your finger when it folds. As thick as what it's holding when it holds.",
    19: "I work hard most every day, Not much time to dance and play, If I could reach what I desire, all like me would now retire. What am I?",
    20: "Begotten, and born, and dying with noise, The terror of women, and pleasure of boys, Like the fiction of poets concerning the wind, I'm chiefly unruly, when strongest confined.",
    21: "They can be harbored, but few hold water, You can nurse them, but only by holding them against someone else, You can carry them, but not with your arms, You can bury them, but not in the earth.",
    22: "Full of dark, filled with everything Both on my skin they color With my pack, I am always Afraid of the cat. What am I?",
    23: "What goes up, but at the same time goes down? Up toward the sky, and down toward the ground. Its present tense and past tense too, come for a ride, just you and me.",
    24: "We travel much, yet prisoners are, and close confined to boot. Yet with any horse, we will keep the pace, and will always go on foot. What are they?",
    25: "I bubble and laugh And spit water in your face. I am no lady, And I don't wear lace.",
    26: "When the creeper passes, all the grass kneels.",
    27: "What goes in the water black and comes out red?",
    28: "Iron roof, glass walls, burns and burns and never falls.",
    29: "You can only have it once you have given it.",
    30: "What can you fold but not crease?",
    31: "I bind it and it walks. I loose it and it stops.",
    32: "I have a tongue but cannot taste. I have a soul but cannot feel. What am I?",
    33: "We are five little objects of an everyday sort, You will find us all in a tennis court.",
    34: "To unravel me, you need a key. No key that was made by locksmith's hand, but a key that only I will understand. What am I?",
    35: "I can always go up, never down, I can always turn left, never right, I am always hot when I'm cold.",
    36: "I don't exist unless you cut me, but if you stab me I won't bleed. I hate no one yet am abhorred by all. What am I?",
    37: "I do not listen to reason, but I hear every siren's song and will try to steer us towards the rocks if you let me take the wheel. Who am I?",
    38: "I am something all men have but all men deny. Man created me but no man can hold me. What am I?",
    39: "I cannot be other than what I am, Until the man who made me dies, Power and glory will fall to me finally, Only when he last closes his eyes.",
    40: "I saw a man in white, he looked quite a sight. He was not old, but he stood in the cold. And when he felt the sun, he started to run. Who could he be? Please answer me.",
    41: "A hundred brothers lie next to each other; Each white and fine - they've only one spine. I am the tongue that lies between two. Remove me to gather their wisdom to you.",
    42: "For our ambrosia we were blessed, By Jupiter, with a sting of death. Though our might, to some is jest, We have quelled the dragon's breath. Who are we?",
    43: "What must be in the oven yet cannot be baked? Grows in the heat yet shuns the light of day? What sinks in water but rises with air? Looks like skin, but is fine as hair?",
    44: "I dig out tiny caves, and store gold and silver in them. I also build bridges of silver and make crowns of gold. They are the smallest you could imagine. Sooner or later everybody needs my help, yet many people are afraid to let me help them. Who am I?",
    45: "What is put on a table, cut, but never eaten?",
    46: "Slayer of regrets, old and new, sought by many, found by few.",
    47: "I ate one and threw away two.",
    48: "Kills the bad ones and the sad ones. Tightens to fit, so one size fits all.",
    49: "Break it and it is better, immediately set and harder to break again.",
    50: "An open ended barrel, it is shaped like a hive. It is filled with the flesh, and the flesh is alive!",
    51: "Two legs I have, and this will confound, only at rest do they touch the ground. What am I?",
    52: "A deep well full of knives.",
    53: "We hurt without moving. We poison without touching. We bear the truth and the lies. We are not to be judged by our size. What are we?",
    54: "The strangest creature you'll ever find: Two eyes in front and many many more behind.",
    55: "I cover what is real and hide what is true, But sometimes I bring out the courage in you. What am I?",
    56: "I'm so simple I only point, Yet I guide people all over the world. What am I?",
    57: "Goes over all the hills and hollows, Bites hard, but never swallows.",
    58: "What is that which goes with a carriage, comes with a carriage, is of no use to a carriage, and yet the carriage cannot go without it?",
    59: "Thousands lay up gold within this house, But no man made it. Spears past counting guard this house, But no man wards it.",
    60: "I cut through evil Like a double edged sword, And chaos flees at my approach. Balance I single-handedly upraise, Through battles fought with heart and mind, Instead of with my gaze. What am I?",
    61: "No head has he but he wears a hat. No feet has he but he stands up straight. On him perhaps a fairy sat, weaving a spell one evening late!",
    62: "What has everything inside it? Everything you can imagine even god, wind, world, sky, heaven, earth and everything that comes to your mind?",
    63: "Above the kingdom I reign, Spotted, speckled, with a mane, I travel in packs, And if you're lucky, you'd ride me. What am I?",
    64: "I am made from an animal, Although you nickname me after a different one. You can't eat me; you can only hold me, And once a year a festival is erected in my honor. What am I?",
    65: "What grows in winter, dies in summer, and grows roots upward?",
    66: "Downward grows the root. Outward grows the skin. Upward grows the shoot. What way blows the wind?",
    67: "Shorter than my four siblings, but easily the strongest, Sometimes I wear a funny hat.",
    68: "With head without hair. With mouth without tooth.",
    69: "What flies around all day but never goes anywhere?",
    70: "What's as small as a mouse but guards a house like a lion?",
    71: "What gets whiter the dirtier that it gets?",
    72: "On the wall, in the air,\nYou just want me out of your hair,\nTry to catch me, but you cannot,\nFor my vision is thousand fold.\nWhat am I?",
    73: "I am born in fear, raised in truth,\nAnd I come to my own in deed.\nWhen comes a time that I'm called forth,\nI come to serve the cause of need.",
    74: "I am slim and tall\nMany find me desirable and appealing\nThey touch me and I give a false good feeling\nOnce I shine in splendor\nBut only once and then no more\nFor many I am to die for.\nWhat am I?",
    75: "A little pool with two layers of wall around it. One white and soft and\nthe other dark and hard, amidst a light brown grassy lawn with an\noutline of a green grass. What am I?",
    76: "Looks like water, but it's heat.\nSits on sand, lays on concrete.\nPeople have been known,\nTo follow it everywhere.\nBut it gets them no place,\nAnd all they can do is stare.",
    77: "You use me for multiple reasons,\nI am many colored, and many shaped.\nI may or may not also tell you your sexual preference.\nWhat am I?",
    78: "My thunder comes before my lightning.\nMy lightning comes before my rain.\nAnd my rain dries all the ground it touches.\nWhat am I?",
    79: "I come when the weather is at its prime,\nThough, it might be wise to leave nothing on the street.\nBut, in the wintertime\nMy name is obsolete\nWhat am I?",
    80: "Useful tool for who in darkness dwell.\nWithin you, corrupting like a deadly spell.",
    81: "A leathery snake,\nWith a stinging bite,\nI'll stay coiled up,\nUnless I must fight.",
    82: "I'm a bearer of darkness.\nI'm feared and often hated.\nI'm a symbol of the unwanted,\nAn omen that leaves you jaded.\nSome people can predict my coming,\nBut then you'll forever see\nThings lurking around corners...\nAre you sure that it was me?",
    83: "Black we are and much admired,\nMen seek us if they are tired,\nWe tire the horse, comfort man,\nGuess this riddle if you can.",
    84: "My step is slow, the snow's my breath\nI give the ground, a grinding death\nMy marching makes an end of me\nSlain by sun or drowned in sea",
    85: "If your life is cut short, I am not the one to blame.\nYou signed up, and your death was not my aim.\nEnter our doors; there is so much to see,\nWe just happen to hold the key,\nTo adventure abound\nAnd fun to be found\nStep in our door\nAnd see what is in store.\nWhat am I?",
    86: "What has roots that nobody sees,\nIs taller than trees,\nUp, up it goes,\nYet it never grows?",
    87: "A natural state, I'm sought by all.\nGo with me and you shall fall.\nYou do me when you spend,\nand you use me when you eat to no end.\nWhat am I?",
    88: "At the sound of me, men may dream\nOr stamp their feet\nAt the sound of me, women may laugh\nOr sometimes weep.",
    89: "When set loose, I fly away,\nNever so cursed, as when I go astray",
    90: "Early ages the iron boot tread,\nWith Europe at her command.\nThrough time power slipped and fled,\n'til the creation of new holy land.\nWho am I?",
    91: "Armless, legless, I crawl around when I'm young.\nThen the time of changing sleep will come.\nI will awake like a newborn, flying beast,\n'till then on the remains of the dead I feast",
    92: "With my pair I should be,\nBut I am usually alone you see,\nFor a monster always eats me.\nDo you know what I must be?",
    93: "Shifting, Shifting, Drifting deep.\nBelow me great and mighty cities sleep.\nSwirling, Scurlling, All around.\nI'm only where no water will be found.",
    94: "We are emeralds and diamonds,\nLost by the moon;\nFound by the sun,\nAnd picked up soon.",
    95: "What is red and nailed to a wall?",
    96: "What has 3 feet but cannot walk?",
    97: "What can an elephant and a shrimp both be?",
    98: "What is given but kept by the giver?",
    99: "The stack just might be sent all over. Full of what's new, yet it's nearly\nobsolete.",
    100: "I'm tall when I'm young and I'm short when I'm old.\nWhat am I?",
    101: "I'm light as a feather, yet the strongest man can't hold me for more than 5 minutes. What am I?",
    102: "I come in many colors, some are blue and white. While some people annoy me, I am not much for the fight. I live where people rarely tread, but you will find me close to bed. What am I?",
    103: "Sometimes I am light, sometimes I am dark. What am I?",
    104: "I have no life, but I can die. What am I?",
    105: "I have a hundred legs but cannot stand, a long neck but no head; I eat the maid's life. What am I?",
    106: "I can sizzle like bacon, I am made with an egg, I have plenty of backbone, but lack a good leg. I peel layers like onions, but still remain whole. I can be long like a flagpole, yet fit in a hole. What am I?",
    107: "I build up castles. I tear down mountains. I make some men blind, I help others to see. What am I?",
    108: "I have a tongue, but cannot speak. I have a bed but cannot sleep. I have four legs but cannot walk. Yet I move as you do. What am I?",
    109: "A hill full, a hole full; yet you cannot catch a bowl full. What is it?",
    110: "Big as a biscuit, deep as a cup, but even a river can't fill it up. What is it?",
    111: "What is it something that you always have but you always leave behind?",
    112: "What is it that makes tears without sorrow and takes its journey to heaven?",
    113: "Round like a dishpan and smaller than a bathtub. But the ocean can't fill it. What is it?",
    114: "A mile from end to end, yet as close to as a friend. A precious commodity, freely given. Seen on the dead and on the living. Found on the rich, poor, short and tall, but shared among children most of all. What is it?",
    115: "Born at the same time as the world, destined to live as long as the world, and yet never five weeks old. What is it?",
    116: "What has wings, but can not fly. Is enclosed, but can outside also lie. Can open itself up, Or close itself away. Is the place of kings and queens, And doggerel of every means. What is it upon which I stand? Which can lead us to different lands.",
    117: "A mother had five boys Marco, Tucker, Webster and Thomas. Was the fifth boys name Frank, Evan or Alex?",
    118: "A pet shop owner had a parrot with a sign on its cage that said 'Parrot repeats everything it hears.' A young man bought the parrot and for two weeks he spoke to it and it didn't say a word. He returned the parrot but the shopkeeper said he never lied about the parrot. How can this be?",
    119: "In the land of the green glass door there are riddles but no answers, sheets but no blankets, and books but no words. Name something found in the land of the green glass door.",
    120: "There is a clothing store in Bartlesville. The owner has devised his own method of pricing items. A vest costs $20, socks cost $25, a tie costs $15 and a blouse costs $30. Using the method, how much would a pair of underwear cost?",
    121: "If you're 8 feet away from a door and with each move you advance half the distance to the door. How many moves will it take to reach the door?",
    122: "I never was, am always to be, No one ever saw me, nor ever will, And yet I am the confidence of all, To live and breathe on this terrestrial ball. Who am I?",
    123: "It's been around for millions of years, but is never more than a month old. What is it?",
    124: "What can you keep after giving it to someone?",
    125: "There was a little heart inside a little white house, which was inside a little yellow house, which was inside a little brown house, which was inside a little green house.",
    126: "I cannot be bought, cannot be sold, even if I'm sometimes made of gold. What am I?",
    127: "Although glory but not at my best. Power will fall to me finally, when the man made me is dead. What am I?",
    128: "I am an English word with 3 consecutive double letters. What am I?",
    129: "It stands on one leg with its heart in its head. What is it?",
    130: "As your ideas grow, I shrink. What am I?",
    131: "What's higher than the king?",
    132: "To unravel me you need a simple key, no key that was made by locksmith's hand. But a key that only I will understand.",
    133: "Toss me out of the window. You'll find a grieving wife. Pull me back but through the door, and watch someone give life.",
    134: "My back and belly is wood, and my ribs is lined with leather. I've a hole in my nose and one in my breast, And I'm mostly used in cold weather.",
    135: "I can honk without using a horn. What am I?",
    136: "I have two hands but cannot clap.",
    137: "A precious fluid, thicker than water.",
    138: "I am a mother from a family of eight. Spins around all day despite my weight. Had a ninth sibling before finding out its fake. What am I?",
    139: "Where do sailors take their baths?",
    140: "What is made of wood but can't be sawed?",
    141: "A young lady walked through the meadow and scattered her glass pearls. The Moon saw this, yet didn't tell her. The Sun woke up and gathered the pearls.",
    142: "Gets rid of bad ones, short and tall. Tightens when used, one size fits all.",
    143: "Inside a great blue castle lives a shy young maid. She blushes in the morning and comes not out at night.",
    144: "I stand up tall and made of steel, with baguettes and garlic at my heel. I love the colours red, white and blue, but obviously not as much as you. I am a marvel for all to see, though to some I am a monstrosity! What am I?",
    145: "Where do cows go to dance?",
    146: "It's a game played by serious people that takes place on a global scale.",
    147: "The more you take of me, the more you leave behind. What am I?",
    148: "A dagger thrust at my own heart, dictates the way I'm swayed. Left I stand, and right I yield, to the twisting of the blade.",
    149: "Bury deep, Pile on stones, My mind will always Dig up them bones.",
    150: "It hisses but it's not a snake. It holds water but it's not a lake. When it's done you hear it scream. Pour from it and add some cream.",
    151: "This small creature kills even the largest one.",
    152: "Never resting, never still.\nMoving silently from hill to hill.\nIt does not walk, run or trot.\nAll is cool where it is not.",
    153: "Its tail is round and hollow,\nSeems to get chewed a bit,\nBut you'll rarely see this thing\nUnless the other end is lit.",
    154: "Whoever makes it, tells it not.\nWhoever takes it, knows it not.\nWhoever knows it, wants it not.\nWhat am I?",
    155: "I am weightless, but you can see me.\nPut me in a bucket, and I'll make it lighter.\nWhat am I?",
    156: "I'm the start of eternity and the end of space.\nThere are two of me in heaven and one in hell.",
    157: "What liquid can contain the soul?",
    158: "I'm an old relative who's hand's can't hold anything and eyes can't see anything.\nWhat am I?",
    159: "It speaks without a tongue, and listens without ears.",
    160: "You need a key to receive an answer from me.\nThe answer you'll find is straight from your mind.\nWhat is it?",
    161: "I am everywhere but cannot be seen, captured or held, only heard.\nWhat am I?",
    162: "What gets beaten, and whipped, but never cries?",
    163: "Sitting down you have it, Standing up you don't.",
    164: "I hold two people together but touch only one.\nWhat am I?",
    165: "I am a window, I am a lamp, I am clouded, I am shining, I am colored and set in white,\nI fill with water and overflow.\nI say much, but I have no words.",
    166: "This is your stomach's way of letting you know you've neglected it.",
    167: "Though it be cold, I wear no clothes,\nthe frost and snow I never fear;\nI value neither shoes nor hose,\nAnd yet I wander far and near:\nMy diet is forever good,\nI drink no cider, port, nor sack,\nwhat Providence doth send for food,\nI neither buy, nor sell, nor lack.",
    168: "I tremble at each breath of air, and yet can heaviest burdens bear.",
    169: "What covers its face with its hands,\nspeaks no language, yet most known what it's saying?",
    170: "I give life for my own, have a beginning, but my end is unknown.\nWhat am I?",
    171: "I make you weak at the worst of all times.\nI keep you safe, I keep you fine.\nI make your hands sweat.\nAnd your heart grow cold.\nI visit the weak, but seldom the bold.",
    172: "Soldiers line up spaced with pride.\nTwo long rows lined side by side.\nOne sole unit can decide,\nif the rows will unite or divide.",
    173: "Has no feet, but travels far.\nIs literate, but not a scholar.\nHas no mouth, yet clearly speaks.",
    174: "Comes in bits and pieces, put together forms a whole.\nIt's athletics for the mind, the more you think the more you find.\nSometimes it can be a grind, but then, that is the goal.",
    175: "I am the ultimate killing machine, used not once but TWICE, I can be made by humans.\nWhat am I?",
    176: "A muttered rumble was heard from the pen, and I, in my walking stopped to look in.\nWhat was this I saw? A massive beast, hoofed, and jawed.\nWith spikes upon its mighty brow, I watched as he struck the turf and prowled.\nAnd yet for all of his magnificence, he couldn't get out of that wooden fence.",
    177: "Men seize it from its home, tear apart its flesh, drink the sweet blood,\nthen cast its skin aside.",
    178: "One of the few times it's encouraged to lock lips with a stranger.",
    179: "Though it is not an ox, it has horns;\nThough it is not a donkey, it has packed-saddle;\nAnd wherever it goes it leaves silver behind.",
    180: "What animal has feet on the head?",
    181: "A house full, a yard full, a chimney full, no one can get a spoonful.",
    182: "What is between heaven and earth?",
    183: "A thousand colored folds stretch toward the sky.\nAtop a tender strand, rising from the land,\nuntil killed by maiden's hand.\nPerhaps a token of love, perhaps to say goodbye.",
    184: "To give me to someone I don't belong to is cowardly, but to take me is noble.\nI can be a game, but there are no winners.\nWhat am I?",
    185: "What has two spines and a lot of ribs, and carries much but never moves?",
    186: "When I get closer my tail grows longer, but when I go away my tail leads the way.",
    187: "Fighting technique taken from rams.",
    188: "Stealthy as a shadow in the dead of night,\ncunning but affectionate if given a bite.\nNever owned but often loved.\nAt my sport considered cruel,\nbut that's because you never know me at all.",
    189: "Crooked as a rainbow, and slick as a plate,\nTen thousand horses can't pull it straight.",
    190: "Currency that flirted with a British spy.",
    191: "Has feathers but can't fly.\nRests on legs but can't walk.",
    192: "What is deep within you, never dies or gets worn out, and only needs some fire from time to time?",
    193: "Locked up inside you and yet they can steal it from you.",
    194: "This is the tallest peak in the happiest place on earth.",
    195: "My parents are singers, and while my father has red hair I am pale and completely bald.",
    196: "I may be made of metal, bone, or wood and have many teeth.\nMy bite hurts no one and the ladies love me.\nWhat am I?",
    197: "Green arrows grow out of my sides.\nI go from yellow to white.\nMy babies fly in the wind.\nWhat am I?",
    198: "I have no voice but I can teach you all there is to know.\nI have spines and hinges but I am not a door.\nOnce I've told you all, I cannot tell you more.\nWhat am I?",
    199: "Sharp and long, flag of the world.\nWhat is it?",
    200: "I cannot be felt or moved, but as you come closer, I get more distant. What am I"
};

export default Riddles
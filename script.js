// Animal database - 5000 animals with Wikipedia articles
const ANIMALS = [
    // Mammals - Carnivores
    'dog', 'cat', 'lion', 'tiger', 'leopard', 'jaguar', 'cheetah', 'puma', 'cougar', 'lynx',
    'bobcat', 'ocelot', 'serval', 'caracal', 'margay', 'jaguarundi', 'clouded leopard', 'snow leopard', 'fishing cat', 'jungle cat',
    'bear', 'polar bear', 'grizzly bear', 'black bear', 'brown bear', 'panda', 'red panda', 'sun bear', 'sloth bear', 'spectacled bear',
    'wolf', 'gray wolf', 'red wolf', 'arctic wolf', 'timber wolf', 'dire wolf', 'maned wolf', 'ethiopian wolf', 'dhole', 'african wild dog',
    'fox', 'red fox', 'arctic fox', 'fennec fox', 'gray fox', 'kit fox', 'swift fox', 'bat-eared fox', 'corsac fox', 'tibetan fox',
    'coyote', 'jackal', 'golden jackal', 'black-backed jackal', 'side-striped jackal', 'dingo', 'hyena', 'spotted hyena', 'striped hyena', 'brown hyena',
    'raccoon', 'coati', 'kinkajou', 'olingo', 'ringtail', 'cacomistle', 'red panda', 'binturong', 'palm civet', 'african civet',
    'mongoose', 'meerkat', 'banded mongoose', 'yellow mongoose', 'dwarf mongoose', 'marsh mongoose', 'egyptian mongoose', 'indian grey mongoose', 'white-tailed mongoose', 'cusimanse',
    'weasel', 'ermine', 'stoat', 'ferret', 'polecat', 'mink', 'american mink', 'european mink', 'marbled polecat', 'steppe polecat',
    'badger', 'honey badger', 'american badger', 'european badger', 'hog badger', 'japanese badger', 'chinese ferret-badger', 'burmese ferret-badger', 'javan ferret-badger', 'bornean ferret-badger',
    'otter', 'sea otter', 'river otter', 'eurasian otter', 'north american river otter', 'giant otter', 'smooth-coated otter', 'asian small-clawed otter', 'spotted-necked otter', 'hairy-nosed otter',
    'skunk', 'striped skunk', 'spotted skunk', 'hooded skunk', 'hog-nosed skunk', 'pygmy spotted skunk', 'eastern spotted skunk', 'western spotted skunk', 'molina hog-nosed skunk', 'humboldt hog-nosed skunk',
    
    // Mammals - Primates
    'monkey', 'gorilla', 'chimpanzee', 'bonobo', 'orangutan', 'gibbon', 'siamang', 'baboon', 'mandrill', 'drill',
    'macaque', 'rhesus macaque', 'japanese macaque', 'barbary macaque', 'bonnet macaque', 'toque macaque', 'lion-tailed macaque', 'pig-tailed macaque', 'long-tailed macaque', 'stump-tailed macaque',
    'lemur', 'ring-tailed lemur', 'ruffed lemur', 'mouse lemur', 'sifaka', 'indri', 'aye-aye', 'loris', 'slow loris', 'slender loris',
    'tarsier', 'philippine tarsier', 'spectral tarsier', 'dian tarsier', 'horsfield tarsier', 'pygmy tarsier', 'sangihe tarsier', 'siau island tarsier', 'peleng tarsier', 'lariang tarsier',
    'capuchin', 'white-faced capuchin', 'tufted capuchin', 'golden-bellied capuchin', 'black-striped capuchin', 'blond capuchin', 'kaapori capuchin', 'rio cesar white-fronted capuchin', 'shock-headed capuchin', 'spix white-fronted capuchin',
    'howler monkey', 'red howler monkey', 'black howler monkey', 'mantled howler', 'guatemalan black howler', 'amazon black howler', 'brown howler', 'coiba island howler', 'colombian red howler', 'maranhao red-handed howler',
    'spider monkey', 'black-headed spider monkey', 'brown spider monkey', 'white-fronted spider monkey', 'peruvian spider monkey', 'red-faced spider monkey', 'white-bellied spider monkey', 'brown-headed spider monkey', 'geoffroy spider monkey', 'ornate spider monkey',
    'marmoset', 'common marmoset', 'pygmy marmoset', 'black-tufted marmoset', 'buffy-headed marmoset', 'white-headed marmoset', 'buffy-tufted marmoset', 'wied marmoset', 'santarem marmoset', 'maues marmoset',
    'tamarin', 'golden lion tamarin', 'cotton-top tamarin', 'emperor tamarin', 'saddleback tamarin', 'red-handed tamarin', 'pied tamarin', 'black-mantled tamarin', 'moustached tamarin', 'white-lipped tamarin',
    'squirrel monkey', 'common squirrel monkey', 'central american squirrel monkey', 'black-capped squirrel monkey', 'humboldt squirrel monkey', 'ecuadorian squirrel monkey', 'bare-eared squirrel monkey', 'black squirrel monkey', 'collins squirrel monkey', 'guianan squirrel monkey',
    
    // Mammals - Ungulates
    'horse', 'zebra', 'plains zebra', 'mountain zebra', 'grevy zebra', 'quagga', 'donkey', 'wild ass', 'onager', 'kiang',
    'cow', 'bull', 'ox', 'buffalo', 'water buffalo', 'african buffalo', 'cape buffalo', 'forest buffalo', 'bison', 'american bison',
    'european bison', 'wisent', 'yak', 'wild yak', 'domestic yak', 'gaur', 'gayal', 'banteng', 'kouprey', 'anoa',
    'pig', 'wild boar', 'warthog', 'giant forest hog', 'red river hog', 'bushpig', 'babirusa', 'pygmy hog', 'javan warty pig', 'visayan warty pig',
    'sheep', 'bighorn sheep', 'dall sheep', 'mouflon', 'argali', 'urial', 'snow sheep', 'barbary sheep', 'blue sheep', 'bharal',
    'goat', 'mountain goat', 'wild goat', 'ibex', 'alpine ibex', 'nubian ibex', 'siberian ibex', 'spanish ibex', 'walia ibex', 'markhor',
    'chamois', 'goral', 'serow', 'japanese serow', 'mainland serow', 'red serow', 'sumatran serow', 'chinese serow', 'himalayan serow', 'formosan serow',
    'deer', 'white-tailed deer', 'mule deer', 'black-tailed deer', 'red deer', 'elk', 'wapiti', 'sika deer', 'fallow deer', 'roe deer',
    'moose', 'reindeer', 'caribou', 'chital', 'axis deer', 'sambar', 'barasingha', 'eld deer', 'hog deer', 'calamian deer',
    'muntjac', 'indian muntjac', 'reeves muntjac', 'hairy-fronted muntjac', 'gongshan muntjac', 'giant muntjac', 'bornean yellow muntjac', 'sumatran muntjac', 'black muntjac', 'roosevelt muntjac',
    'pronghorn', 'antelope', 'gazelle', 'thomson gazelle', 'grant gazelle', 'springbok', 'gerenuk', 'dibatag', 'common eland', 'giant eland',
    'kudu', 'greater kudu', 'lesser kudu', 'nyala', 'mountain nyala', 'sitatunga', 'bushbuck', 'bongo', 'common tsessebe', 'topi',
    'hartebeest', 'hirola', 'bontebok', 'blesbok', 'black wildebeest', 'blue wildebeest', 'impala', 'blackbuck', 'nilgai', 'four-horned antelope',
    'saiga', 'chiru', 'oryx', 'arabian oryx', 'scimitar oryx', 'gemsbok', 'addax', 'roan antelope', 'sable antelope', 'waterbuck',
    'kob', 'lechwe', 'puku', 'redunca', 'rhebok', 'klipspringer', 'oribi', 'steenbok', 'grysbok', 'dik-dik',
    'giraffe', 'okapi', 'hippopotamus', 'pygmy hippopotamus', 'camel', 'dromedary', 'bactrian camel', 'wild bactrian camel', 'llama', 'alpaca',
    'guanaco', 'vicuna', 'tapir', 'brazilian tapir', 'malayan tapir', 'mountain tapir', 'baird tapir', 'kabomani tapir', 'rhinoceros', 'white rhinoceros',
    'black rhinoceros', 'indian rhinoceros', 'javan rhinoceros', 'sumatran rhinoceros', 'woolly rhinoceros', 'elephant', 'african elephant', 'asian elephant', 'african bush elephant', 'african forest elephant',
    
    // Mammals - Rodents
    'mouse', 'house mouse', 'field mouse', 'deer mouse', 'wood mouse', 'harvest mouse', 'yellow-necked mouse', 'long-tailed field mouse', 'striped field mouse', 'alpine field mouse',
    'rat', 'norway rat', 'black rat', 'roof rat', 'brown rat', 'pack rat', 'kangaroo rat', 'cotton rat', 'rice rat', 'marsh rice rat',
    'squirrel', 'gray squirrel', 'red squirrel', 'fox squirrel', 'flying squirrel', 'ground squirrel', 'tree squirrel', 'rock squirrel', 'antelope squirrel', 'chipmunk',
    'eastern chipmunk', 'least chipmunk', 'townsend chipmunk', 'yellow-pine chipmunk', 'red-tailed chipmunk', 'colorado chipmunk', 'uinta chipmunk', 'palmer chipmunk', 'panamint chipmunk', 'siskiyou chipmunk',
    'prairie dog', 'black-tailed prairie dog', 'white-tailed prairie dog', 'gunnison prairie dog', 'utah prairie dog', 'mexican prairie dog', 'marmot', 'alpine marmot', 'hoary marmot', 'yellow-bellied marmot',
    'woodchuck', 'groundhog', 'beaver', 'american beaver', 'eurasian beaver', 'mountain beaver', 'porcupine', 'north american porcupine', 'crested porcupine', 'indian crested porcupine',
    'malayan porcupine', 'himalayan porcupine', 'african brush-tailed porcupine', 'long-tailed porcupine', 'prehensile-tailed porcupine', 'stump-tailed porcupine', 'mexican hairy dwarf porcupine', 'bahia hairy dwarf porcupine', 'frosted hairy dwarf porcupine', 'black dwarf porcupine',
    'hamster', 'golden hamster', 'syrian hamster', 'dwarf hamster', 'roborovski hamster', 'campbell hamster', 'winter white hamster', 'chinese hamster', 'european hamster', 'turkish hamster',
    'gerbil', 'mongolian gerbil', 'fat-tailed gerbil', 'great gerbil', 'indian gerbil', 'pallid gerbil', 'sundevall gerbil', 'libyan jird', 'persian jird', 'king jird',
    'vole', 'field vole', 'bank vole', 'water vole', 'meadow vole', 'prairie vole', 'tundra vole', 'sagebrush vole', 'montane vole', 'creeping vole',
    'lemming', 'norway lemming', 'siberian brown lemming', 'northern bog lemming', 'southern bog lemming', 'wood lemming', 'steppe lemming', 'collared lemming', 'ungava collared lemming', 'richardson collared lemming',
    'guinea pig', 'cavy', 'capybara', 'lesser capybara', 'pacarana', 'paca', 'lowland paca', 'mountain paca', 'agouti', 'central american agouti',
    'mexican agouti', 'orinoco agouti', 'red-rumped agouti', 'azara agouti', 'black agouti', 'crested agouti', 'red acouchi', 'green acouchi', 'degu', 'coruro',
    'chinchilla', 'long-tailed chinchilla', 'short-tailed chinchilla', 'chinchilla rat', 'plains viscacha', 'mountain viscacha', 'wolffsohn viscacha', 'peruvian mountain viscacha', 'southern viscacha', 'taruca',
    'tuco-tuco', 'coypu', 'nutria', 'hutia', 'jamaican hutia', 'bahaman hutia', 'cuban hutia', 'hispaniolan hutia', 'desmarest hutia', 'garrido hutia',
    'mole rat', 'naked mole rat', 'damaraland mole rat', 'cape mole rat', 'giant mole rat', 'common mole rat', 'greater mole rat', 'lesser mole rat', 'balkan mole rat', 'bukovina mole rat',
    'dormouse', 'hazel dormouse', 'edible dormouse', 'garden dormouse', 'forest dormouse', 'japanese dormouse', 'african dormouse', 'masked dormouse', 'desert dormouse', 'spectacled dormouse',
    'jerboa', 'lesser egyptian jerboa', 'greater egyptian jerboa', 'four-toed jerboa', 'five-toed jerboa', 'long-eared jerboa', 'gobi jerboa', 'thick-tailed pygmy jerboa', 'euphrates jerboa', 'andrews jerboa',
    
    // Mammals - Marsupials
    'kangaroo', 'red kangaroo', 'eastern grey kangaroo', 'western grey kangaroo', 'antilopine kangaroo', 'common wallaroo', 'black wallaroo', 'wallaby', 'red-necked wallaby', 'swamp wallaby',
    'agile wallaby', 'parma wallaby', 'tammar wallaby', 'toolache wallaby', 'bridled nailtail wallaby', 'northern nailtail wallaby', 'crescent nailtail wallaby', 'quokka', 'pademelon', 'red-legged pademelon',
    'red-necked pademelon', 'tasmanian pademelon', 'dusky pademelon', 'calaby pademelon', 'mountain pademelon', 'rock wallaby', 'brush-tailed rock wallaby', 'yellow-footed rock wallaby', 'black-footed rock wallaby', 'proserpine rock wallaby',
    'koala', 'wombat', 'common wombat', 'southern hairy-nosed wombat', 'northern hairy-nosed wombat', 'tasmanian devil', 'quoll', 'spotted-tailed quoll', 'eastern quoll', 'western quoll',
    'northern quoll', 'numbat', 'thylacine', 'tasmanian wolf', 'tasmanian tiger', 'bandicoot', 'eastern barred bandicoot', 'western barred bandicoot', 'southern brown bandicoot', 'northern brown bandicoot',
    'bilby', 'lesser bilby', 'greater bilby', 'pig-footed bandicoot', 'rabbit-eared bandicoot', 'possum', 'brushtail possum', 'common brushtail possum', 'mountain brushtail possum', 'short-eared brushtail possum',
    'ringtail possum', 'common ringtail possum', 'green ringtail possum', 'lemur-like ringtail possum', 'rock ringtail possum', 'striped possum', 'leadbeater possum', 'sugar glider', 'squirrel glider', 'mahogany glider',
    'yellow-bellied glider', 'greater glider', 'feathertail glider', 'pygmy possum', 'mountain pygmy possum', 'long-tailed pygmy possum', 'tasmanian pygmy possum', 'eastern pygmy possum', 'western pygmy possum', 'little pygmy possum',
    'opossum', 'virginia opossum', 'common opossum', 'gray four-eyed opossum', 'water opossum', 'yapok', 'lutrine opossum', 'thick-tailed opossum', 'mouse opossum', 'woolly opossum',
    'monito del monte', 'shrew opossum', 'caenolestid', 'rat opossum', 'chilean shrew opossum', 'blackish shrew opossum', 'gray-bellied shrew opossum', 'incan shrew opossum', 'anderson shrew opossum', 'dusky caenolestid',
    
    // Mammals - Other
    'platypus', 'echidna', 'short-beaked echidna', 'western long-beaked echidna', 'sir david long-beaked echidna', 'eastern long-beaked echidna', 'hedgehog', 'european hedgehog', 'african pygmy hedgehog', 'long-eared hedgehog',
    'desert hedgehog', 'indian hedgehog', 'brandt hedgehog', 'daurian hedgehog', 'amur hedgehog', 'hugh hedgehog', 'moonrat', 'gymnure', 'mindanao gymnure', 'hainan gymnure',
    'shrew', 'common shrew', 'pygmy shrew', 'water shrew', 'elephant shrew', 'giant elephant shrew', 'short-eared elephant shrew', 'golden-rumped elephant shrew', 'black and rufous elephant shrew', 'checkered elephant shrew',
    'mole', 'european mole', 'star-nosed mole', 'hairy-tailed mole', 'eastern mole', 'coast mole', 'broad-footed mole', 'townsend mole', 'american shrew mole', 'japanese shrew mole',
    'bat', 'little brown bat', 'big brown bat', 'vampire bat', 'common vampire bat', 'hairy-legged vampire bat', 'white-winged vampire bat', 'fruit bat', 'flying fox', 'grey-headed flying fox',
    'large flying fox', 'spectacled flying fox', 'black flying fox', 'little red flying fox', 'indian flying fox', 'lyle flying fox', 'rodrigues flying fox', 'golden-crowned flying fox', 'hammer-headed bat', 'egyptian fruit bat',
    'horseshoe bat', 'greater horseshoe bat', 'lesser horseshoe bat', 'mediterranean horseshoe bat', 'mehely horseshoe bat', 'blyth horseshoe bat', 'big-eared horseshoe bat', 'formosan woolly horseshoe bat', 'intermediate horseshoe bat', 'bourret horseshoe bat',
    'sloth', 'three-toed sloth', 'brown-throated sloth', 'pale-throated sloth', 'maned sloth', 'pygmy three-toed sloth', 'two-toed sloth', 'hoffman two-toed sloth', 'linnaeus two-toed sloth', 'giant ground sloth',
    'anteater', 'giant anteater', 'silky anteater', 'northern tamandua', 'southern tamandua', 'pygmy anteater', 'armadillo', 'nine-banded armadillo', 'three-banded armadillo', 'six-banded armadillo',
    'giant armadillo', 'pink fairy armadillo', 'screaming hairy armadillo', 'greater fairy armadillo', 'southern naked-tailed armadillo', 'northern naked-tailed armadillo', 'greater long-nosed armadillo', 'southern long-nosed armadillo', 'llanos long-nosed armadillo', 'great long-nosed armadillo',
    'pangolin', 'chinese pangolin', 'indian pangolin', 'sunda pangolin', 'philippine pangolin', 'tree pangolin', 'giant pangolin', 'ground pangolin', 'temminck ground pangolin', 'long-tailed pangolin',
    'aardvark', 'hyrax', 'rock hyrax', 'bush hyrax', 'yellow-spotted hyrax', 'tree hyrax', 'western tree hyrax', 'eastern tree hyrax', 'southern tree hyrax', 'matschie tree hyrax',
    
    // Marine Mammals
    'whale', 'blue whale', 'fin whale', 'sei whale', 'bryde whale', 'minke whale', 'humpback whale', 'gray whale', 'right whale', 'bowhead whale',
    'sperm whale', 'pygmy sperm whale', 'dwarf sperm whale', 'beluga', 'narwhal', 'dolphin', 'bottlenose dolphin', 'common dolphin', 'spinner dolphin', 'striped dolphin',
    'fraser dolphin', 'atlantic spotted dolphin', 'pantropical spotted dolphin', 'clymene dolphin', 'pacific white-sided dolphin', 'dusky dolphin', 'hourglass dolphin', 'peale dolphin', 'commerson dolphin', 'heaviside dolphin',
    'hector dolphin', 'irrawaddy dolphin', 'australian snubfin dolphin', 'tucuxi', 'guiana dolphin', 'risso dolphin', 'melon-headed whale', 'pygmy killer whale', 'false killer whale', 'killer whale',
    'orca', 'pilot whale', 'short-finned pilot whale', 'long-finned pilot whale', 'porpoise', 'harbor porpoise', 'vaquita', 'dall porpoise', 'spectacled porpoise', 'burmeister porpoise',
    'finless porpoise', 'indo-pacific finless porpoise', 'narrow-ridged finless porpoise', 'seal', 'harbor seal', 'grey seal', 'ringed seal', 'bearded seal', 'harp seal',
    'hooded seal', 'ribbon seal', 'spotted seal', 'caspian seal', 'baikal seal', 'leopard seal', 'weddell seal', 'crabeater seal', 'ross seal', 'southern elephant seal',
    'northern elephant seal', 'mediterranean monk seal', 'hawaiian monk seal', 'caribbean monk seal', 'sea lion', 'california sea lion', 'steller sea lion', 'south american sea lion', 'australian sea lion', 'new zealand sea lion',
    'walrus', 'atlantic walrus', 'pacific walrus', 'laptev walrus', 'fur seal', 'northern fur seal', 'antarctic fur seal', 'south american fur seal', 'new zealand fur seal', 'brown fur seal',
    'subantarctic fur seal', 'juan fernandez fur seal', 'guadalupe fur seal', 'galapagos fur seal', 'manatee', 'west indian manatee', 'amazonian manatee', 'african manatee', 'florida manatee', 'antillean manatee',
    'dugong', 'steller sea cow', 'sea otter', 'marine otter', 'sea mink',
    
    // Birds - Raptors
    'eagle', 'bald eagle', 'golden eagle', 'white-tailed eagle', 'steller sea eagle', 'african fish eagle', 'philippine eagle', 'harpy eagle', 'crowned eagle', 'martial eagle',
    'wedge-tailed eagle', 'booted eagle', 'bonelli eagle', 'tawny eagle', 'steppe eagle', 'imperial eagle', 'spanish imperial eagle', 'eastern imperial eagle', 'greater spotted eagle', 'lesser spotted eagle',
    'hawk', 'red-tailed hawk', 'ferruginous hawk', 'rough-legged hawk', 'harris hawk', 'cooper hawk', 'sharp-shinned hawk', 'broad-winged hawk', 'swainson hawk', 'zone-tailed hawk',
    'goshawk', 'northern goshawk', 'crested goshawk', 'african goshawk', 'chinese goshawk', 'sparrowhawk', 'eurasian sparrowhawk', 'shikra', 'levant sparrowhawk', 'little sparrowhawk',
    'falcon', 'peregrine falcon', 'gyrfalcon', 'prairie falcon', 'saker falcon', 'lanner falcon', 'merlin', 'kestrel', 'american kestrel', 'common kestrel',
    'lesser kestrel', 'greater kestrel', 'mauritius kestrel', 'seychelles kestrel', 'spotted kestrel', 'hobby', 'eurasian hobby', 'african hobby', 'oriental hobby', 'australian hobby',
    'owl', 'barn owl', 'great horned owl', 'snowy owl', 'barred owl', 'spotted owl', 'tawny owl', 'eagle owl', 'eurasian eagle owl', 'great grey owl',
    'long-eared owl', 'short-eared owl', 'screech owl', 'eastern screech owl', 'western screech owl', 'little owl', 'burrowing owl', 'saw-whet owl', 'northern saw-whet owl', 'boreal owl',
    'hawk owl', 'northern hawk owl', 'pygmy owl', 'eurasian pygmy owl', 'northern pygmy owl', 'ferruginous pygmy owl', 'elf owl', 'scops owl', 'eurasian scops owl', 'oriental scops owl',
    'vulture', 'turkey vulture', 'black vulture', 'california condor', 'andean condor', 'king vulture', 'griffon vulture', 'eurasian griffon', 'ruppell vulture', 'white-backed vulture',
    'cape vulture', 'himalayan vulture', 'cinereous vulture', 'lappet-faced vulture', 'white-headed vulture', 'egyptian vulture', 'hooded vulture', 'palm-nut vulture', 'bearded vulture', 'lammergeier',
    'buzzard', 'common buzzard', 'red-tailed buzzard', 'rough-legged buzzard', 'long-legged buzzard', 'upland buzzard', 'ferruginous buzzard', 'augur buzzard', 'honey buzzard', 'european honey buzzard',
    'kite', 'red kite', 'black kite', 'black-eared kite', 'whistling kite', 'brahminy kite', 'white-tailed kite', 'swallow-tailed kite', 'mississippi kite', 'snail kite',
    'harrier', 'northern harrier', 'hen harrier', 'montagu harrier', 'pallid harrier', 'pied harrier', 'marsh harrier', 'western marsh harrier', 'eastern marsh harrier', 'african marsh harrier',
    'osprey', 'secretary bird', 'caracara', 'crested caracara', 'yellow-headed caracara', 'mountain caracara', 'striatedcaracara', 'chimango caracara', 'red-throated caracara', 'black caracara',
    
    // Birds - Waterfowl
    'duck', 'mallard', 'muscovy duck', 'wood duck', 'mandarin duck', 'teal', 'green-winged teal', 'blue-winged teal', 'cinnamon teal', 'garganey',
    'northern pintail', 'northern shoveler', 'gadwall', 'wigeon', 'american wigeon', 'eurasian wigeon', 'canvasback', 'redhead', 'ring-necked duck', 'tufted duck',
    'greater scaup', 'lesser scaup', 'common pochard', 'ferruginous pochard', 'common goldeneye', 'barrow goldeneye', 'bufflehead', 'harlequin duck', 'long-tailed duck', 'oldsquaw',
    'eider', 'common eider', 'king eider', 'spectacled eider', 'steller eider', 'scoter', 'black scoter', 'surf scoter', 'white-winged scoter', 'velvet scoter',
    'goose', 'canada goose', 'snow goose', 'ross goose', 'greater white-fronted goose', 'emperor goose', 'brant', 'barnacle goose', 'greylag goose', 'bean goose',
    'pink-footed goose', 'egyptian goose', 'ruddy shelduck', 'common shelduck', 'paradise shelduck', 'radjah shelduck', 'cape barren goose', 'magpie goose', 'swan goose', 'bar-headed goose',
    'swan', 'mute swan', 'trumpeter swan', 'tundra swan', 'whooper swan', 'black swan', 'black-necked swan', 'coscoroba swan', 'whistling duck', 'fulvous whistling duck',
    'black-bellied whistling duck', 'west indian whistling duck', 'white-faced whistling duck', 'spotted whistling duck', 'plumed whistling duck', 'wandering whistling duck', 'lesser whistling duck', 'white-backed duck', 'comb duck', 'muscovy',
    'merganser', 'common merganser', 'red-breasted merganser', 'hooded merganser', 'smew', 'brazilian merganser', 'auckland merganser', 'scaly-sided merganser', 'steamer duck', 'flying steamer duck',
    'falkland steamer duck', 'white-headed steamer duck', 'chubut steamer duck', 'torrent duck', 'blue duck', 'pink-eared duck', 'freckled duck', 'musk duck', 'stiff-tailed duck', 'ruddy duck',
    
    // Birds - Seabirds
    'albatross', 'wandering albatross', 'royal albatross', 'black-browed albatross', 'yellow-nosed albatross', 'shy albatross', 'grey-headed albatross', 'light-mantled albatross', 'sooty albatross', 'laysan albatross',
    'black-footed albatross', 'waved albatross', 'pelican', 'american white pelican', 'brown pelican', 'peruvian pelican', 'great white pelican', 'dalmatian pelican', 'spot-billed pelican', 'pink-backed pelican',
    'australian pelican', 'cormorant', 'great cormorant', 'double-crested cormorant', 'neotropic cormorant', 'little cormorant', 'long-tailed cormorant', 'crowned cormorant', 'pygmy cormorant', 'japanese cormorant',
    'pelagic cormorant', 'red-faced cormorant', 'european shag', 'guanay cormorant', 'pied cormorant', 'black-faced cormorant', 'little pied cormorant', 'shag', 'anhinga', 'darter',
    'gannet', 'northern gannet', 'cape gannet', 'australasian gannet', 'booby', 'blue-footed booby', 'red-footed booby', 'brown booby', 'masked booby', 'nazca booby',
    'peruvian booby', 'abbott booby', 'frigatebird', 'magnificent frigatebird', 'great frigatebird', 'lesser frigatebird', 'christmas frigatebird', 'ascension frigatebird', 'tropicbird', 'red-billed tropicbird',
    'red-tailed tropicbird', 'white-tailed tropicbird', 'puffin', 'atlantic puffin', 'horned puffin', 'tufted puffin', 'rhinoceros auklet', 'auk', 'great auk', 'razorbill',
    'guillemot', 'common guillemot', 'brunnich guillemot', 'black guillemot', 'pigeon guillemot', 'spectacled guillemot', 'murre', 'common murre', 'thick-billed murre', 'auklet',
    'cassin auklet', 'parakeet auklet', 'least auklet', 'whiskered auklet', 'crested auklet', 'murreiet', 'marbled murrelet', 'long-billed murrelet', 'kittlitz murrelet', 'xantus murrelet',
    'craveri murrelet', 'ancient murrelet', 'japanese murrelet', 'puffleg', 'petrel', 'northern fulmar', 'southern fulmar', 'antarctic petrel', 'cape petrel', 'snow petrel',
    
    // Birds - Waders
    'gull', 'herring gull', 'great black-backed gull', 'lesser black-backed gull', 'glaucous gull', 'iceland gull', 'ring-billed gull', 'california gull', 'western gull', 'slaty-backed gull',
    'laughing gull', 'franklin gull', 'black-headed gull', 'little gull', 'ross gull', 'sabine gull', 'ivory gull', 'kittiwake', 'black-legged kittiwake', 'red-legged kittiwake',
    'tern', 'common tern', 'arctic tern', 'roseate tern', 'forster tern', 'caspian tern', 'royal tern', 'elegant tern', 'sandwich tern', 'least tern',
    'black tern', 'white-winged tern', 'whiskered tern', 'gull-billed tern', 'sooty tern', 'bridled tern', 'fairy tern', 'white tern', 'brown noddy', 'black noddy',
    'skimmer', 'black skimmer', 'african skimmer', 'indian skimmer', 'skua', 'great skua', 'south polar skua', 'brown skua', 'pomarine skua', 'parasitic skua',
    'long-tailed skua', 'arctic skua', 'jaeger', 'pomarine jaeger', 'parasitic jaeger', 'long-tailed jaeger', 'sandpiper', 'common sandpiper', 'spotted sandpiper', 'green sandpiper',
    'wood sandpiper', 'solitary sandpiper', 'spotted redshank', 'common redshank', 'marsh sandpiper', 'common greenshank', 'greater yellowlegs', 'lesser yellowlegs', 'willet', 'wandering tattler',
    'grey-tailed tattler', 'terek sandpiper', 'upland sandpiper', 'buff-breasted sandpiper', 'curlew sandpiper', 'dunlin', 'purple sandpiper', 'rock sandpiper', 'baird sandpiper', 'least sandpiper',
    'white-rumped sandpiper', 'buff-breasted sandpiper', 'pectoral sandpiper', 'sharp-tailed sandpiper', 'stilt sandpiper', 'western sandpiper', 'semipalmated sandpiper', 'sanderling', 'red knot', 'great knot',
    'ruff', 'broad-billed sandpiper', 'plover', 'ringed plover', 'semipalmated plover', 'killdeer', 'piping plover', 'little ringed plover', 'snowy plover', 'kentish plover', 'wilson plover',
    'american golden plover', 'pacific golden plover', 'european golden plover', 'grey plover', 'black-bellied plover', 'dotterel', 'eurasian dotterel', 'lapwing', 'northern lapwing', 'spur-winged lapwing',
    'red-wattled lapwing', 'sociable lapwing', 'white-tailed lapwing', 'oystercatcher', 'eurasian oystercatcher', 'american oystercatcher', 'black oystercatcher', 'african oystercatcher', 'magellanic oystercatcher', 'blackish oystercatcher',
    'avocet', 'pied avocet', 'american avocet', 'red-necked avocet', 'andean avocet', 'stilt', 'black-winged stilt', 'black-necked stilt', 'white-headed stilt', 'banded stilt',
    'curlew', 'eurasian curlew', 'long-billed curlew', 'bristle-thighed curlew', 'far eastern curlew', 'slender-billed curlew', 'whimbrel', 'little curlew', 'eskimo curlew', 'godwit',
    'bar-tailed godwit', 'black-tailed godwit', 'hudsonian godwit', 'marbled godwit', 'snipe', 'common snipe', 'wilson snipe', 'jack snipe', 'great snipe', 'pintail snipe',
    'swinhoe snipe', 'latham snipe', 'wood snipe', 'solitary snipe', 'dowitcher', 'short-billed dowitcher', 'long-billed dowitcher', 'asian dowitcher', 'woodcock', 'eurasian woodcock',
    'american woodcock', 'amami woodcock', 'sulawesi woodcock', 'moluccan woodcock', 'turnstone', 'ruddy turnstone', 'black turnstone', 'phalarope', 'red phalarope', 'grey phalarope',
    
    // Birds - Game Birds
    'chicken', 'rooster', 'hen', 'cockerel', 'turkey', 'wild turkey', 'ocellated turkey', 'pheasant', 'ring-necked pheasant', 'common pheasant',
    'golden pheasant', 'lady amherst pheasant', 'silver pheasant', 'kalij pheasant', 'swinhoe pheasant', 'reeves pheasant', 'copper pheasant', 'green pheasant', 'elliot pheasant', 'hume pheasant',
    'grouse', 'red grouse', 'willow grouse', 'rock ptarmigan', 'white-tailed ptarmigan', 'black grouse', 'caucasian grouse', 'western capercaillie', 'black-billed capercaillie', 'hazel grouse',
    'ruffed grouse', 'spruce grouse', 'greater sage-grouse', 'gunnison sage-grouse', 'sharp-tailed grouse', 'greater prairie-chicken', 'lesser prairie-chicken', 'dusky grouse', 'sooty grouse', 'siberian grouse',
    'partridge', 'grey partridge', 'red-legged partridge', 'chukar partridge', 'barbary partridge', 'rock partridge', 'philby partridge', 'arabian partridge', 'przevalski partridge', 'daurian partridge',
    'tibetan partridge', 'common hill partridge', 'rufous-throated partridge', 'white-cheeked partridge', 'bamboo partridge', 'mountain bamboo partridge', 'chinese bamboo partridge', 'taiwan bamboo partridge', 'red-billed partridge', 'madagascar partridge',
    'quail', 'common quail', 'japanese quail', 'rain quail', 'harlequin quail', 'brown quail', 'blue quail', 'king quail', 'california quail', 'gambel quail',
    'scaled quail', 'elegant quail', 'mountain quail', 'northern bobwhite', 'crested bobwhite', 'black-throated bobwhite', 'spot-bellied bobwhite', 'yucatan bobwhite', 'black-breasted quail', 'snow mountain quail',
    'guineafowl', 'helmeted guineafowl', 'crested guineafowl', 'vulturine guineafowl', 'white-breasted guineafowl', 'black guineafowl', 'plumed guineafowl', 'peafowl', 'indian peafowl', 'green peafowl',
    'congo peafowl', 'peacock', 'francolin', 'black francolin', 'painted francolin', 'chinese francolin', 'grey francolin', 'swamp francolin', 'coqui francolin', 'white-throated francolin', 'schlegel francolin',
    
    // Birds - Pigeons & Doves
    'pigeon', 'rock pigeon', 'feral pigeon', 'stock dove', 'wood pigeon', 'hill pigeon', 'snow pigeon', 'speckled pigeon', 'white-crowned pigeon', 'red-billed pigeon',
    'band-tailed pigeon', 'pale-vented pigeon', 'spotted dove', 'laughing dove', 'mourning dove', 'eared dove', 'zenaida dove', 'white-winged dove', 'diamond dove', 'peaceful dove',
    'zebra dove', 'collared dove', 'eurasian collared dove', 'african collared dove', 'red collared dove', 'turtle dove', 'european turtle dove', 'oriental turtle dove', 'dusky turtle dove', 'adamawa turtle dove',
    'emerald dove', 'common emerald dove', 'stephan emerald dove', 'new guinea bronzewing', 'brush bronzewing', 'common bronzewing', 'flock bronzewing', 'crested pigeon', 'spinifex pigeon', 'squatter pigeon',
    'wonga pigeon', 'passenger pigeon', 'crowned pigeon', 'victoria crowned pigeon', 'western crowned pigeon', 'southern crowned pigeon', 'fruit dove', 'pink-necked fruit dove', 'orange-bellied fruit dove', 'whistling dove',
    
    // Birds - Parrots
    'parrot', 'african grey parrot', 'grey parrot', 'timneh parrot', 'amazon parrot', 'yellow-crowned amazon', 'blue-fronted amazon', 'orange-winged amazon', 'yellow-headed amazon', 'mealy amazon',
    'budgerigar', 'budgie', 'cockatiel', 'galah', 'cockatoo', 'sulphur-crested cockatoo', 'major mitchell cockatoo', 'pink cockatoo', 'red-tailed black cockatoo', 'yellow-tailed black cockatoo',
    'white cockatoo', 'moluccan cockatoo', 'umbrella cockatoo', 'palm cockatoo', 'gang-gang cockatoo', 'macaw', 'scarlet macaw', 'blue-and-yellow macaw', 'hyacinth macaw', 'military macaw',
    'green-winged macaw', 'red-and-green macaw', 'blue-throated macaw', 'spix macaw', 'great green macaw', 'red-fronted macaw', 'chestnut-fronted macaw', 'red-bellied macaw', 'blue-headed macaw', 'glaucous macaw',
    'conure', 'sun conure', 'jenday conure', 'nanday conure', 'green-cheeked conure', 'maroon-bellied conure', 'pearly conure', 'painted conure', 'crimson-bellied conure', 'blue-crowned conure',
    'lovebird', 'rosy-faced lovebird', 'fischer lovebird', 'black-masked lovebird', 'yellow-collared lovebird', 'black-cheeked lovebird', 'red-headed lovebird', 'grey-headed lovebird', 'black-winged lovebird', 'lilian lovebird',
    'lorikeet', 'rainbow lorikeet', 'coconut lorikeet', 'scaly-breasted lorikeet', 'varied lorikeet', 'musk lorikeet', 'red-collared lorikeet', 'purple-crowned lorikeet', 'blue-crowned lorikeet', 'chattering lory',
    'rosella', 'eastern rosella', 'crimson rosella', 'pale-headed rosella', 'northern rosella', 'western rosella', 'adelaide rosella', 'green rosella', 'kakapo', 'kea',
    'kaka', 'eclectus parrot', 'red-sided eclectus', 'australian king parrot', 'superb parrot', 'regent parrot', 'princess parrot', 'red-capped parrot', 'red-winged parrot', 'mulga parrot',
    
    // Reptiles
    'snake', 'python', 'ball python', 'reticulated python', 'burmese python', 'african rock python', 'indian python', 'blood python', 'carpet python', 'green tree python',
    'boa', 'boa constrictor', 'red-tailed boa', 'emerald tree boa', 'rainbow boa', 'anaconda', 'green anaconda', 'yellow anaconda', 'king cobra', 'cobra',
    'indian cobra', 'egyptian cobra', 'forest cobra', 'cape cobra', 'spitting cobra', 'black mamba', 'green mamba', 'eastern green mamba', 'western green mamba', 'viper',
    'russell viper', 'saw-scaled viper', 'gaboon viper', 'rhinoceros viper', 'puff adder', 'common adder', 'death adder', 'horned viper', 'rattlesnake', 'timber rattlesnake',
    'eastern diamondback rattlesnake', 'western diamondback rattlesnake', 'sidewinder', 'prairie rattlesnake', 'copperhead', 'cottonmouth', 'water moccasin', 'coral snake', 'eastern coral snake', 'texas coral snake',
    'garter snake', 'common garter snake', 'ribbon snake', 'water snake', 'northern water snake', 'brown water snake', 'rat snake', 'black rat snake', 'corn snake', 'texas rat snake',
    'king snake', 'california king snake', 'common king snake', 'milk snake', 'scarlet king snake', 'hognose snake', 'eastern hognose snake', 'western hognose snake', 'grass snake', 'smooth snake',
    'sea snake', 'yellow-bellied sea snake', 'beaked sea snake', 'annulated sea snake', 'sea krait', 'file snake', 'wart snake', 'tentacled snake', 'flying snake', 'paradise tree snake',
    'lizard', 'iguana', 'green iguana', 'marine iguana', 'desert iguana', 'rhinoceros iguana', 'fiji banded iguana', 'rock iguana', 'chuckwalla', 'spiny-tailed iguana',
    'gecko', 'leopard gecko', 'crested gecko', 'tokay gecko', 'day gecko', 'madagascar day gecko', 'house gecko', 'mourning gecko', 'gargoyle gecko', 'flying gecko',
    'chameleon', 'veiled chameleon', 'panther chameleon', 'jackson chameleon', 'parson chameleon', 'meller chameleon', 'carpet chameleon', 'oustalets chameleon', 'pygmy chameleon', 'flap-necked chameleon',
    'monitor', 'komodo dragon', 'water monitor', 'nile monitor', 'savannah monitor', 'lace monitor', 'perentie', 'crocodile monitor', 'emerald monitor', 'timor monitor',
    'agama', 'bearded dragon', 'central bearded dragon', 'eastern bearded dragon', 'frilled lizard', 'blue-tongued skink', 'eastern blue-tongued skink', 'northern blue-tongued skink', 'shingleback', 'bobtail',
    'anole', 'green anole', 'brown anole', 'knight anole', 'jamaican anole', 'cuban anole', 'skink', 'five-lined skink', 'blue-tailed skink', 'fire skink',
    'tegu', 'argentine black and white tegu', 'red tegu', 'gold tegu', 'uromastyx', 'ornate uromastyx', 'egyptian uromastyx', 'gila monster', 'mexican beaded lizard', 'slow worm',
    'crocodile', 'nile crocodile', 'saltwater crocodile', 'american crocodile', 'mugger crocodile', 'cuban crocodile', 'orinoco crocodile', 'siamese crocodile', 'philippine crocodile', 'new guinea crocodile',
    'alligator', 'american alligator', 'chinese alligator', 'caiman', 'spectacled caiman', 'yacare caiman', 'broad-snouted caiman', 'black caiman', 'smooth-fronted caiman', 'dwarf caiman',
    'gavial', 'gharial', 'false gharial', 'tomistoma', 'turtle', 'sea turtle', 'green sea turtle', 'loggerhead sea turtle', 'hawksbill sea turtle', 'leatherback sea turtle',
    'kemp ridley sea turtle', 'olive ridley sea turtle', 'flatback sea turtle', 'box turtle', 'eastern box turtle', 'ornate box turtle', 'painted turtle', 'red-eared slider', 'pond slider', 'yellow-bellied slider',
    'map turtle', 'common map turtle', 'false map turtle', 'cooter', 'river cooter', 'florida cooter', 'snapping turtle', 'common snapping turtle', 'alligator snapping turtle', 'softshell turtle',
    'spiny softshell turtle', 'smooth softshell turtle', 'mud turtle', 'musk turtle', 'stinkpot', 'wood turtle', 'bog turtle', 'spotted turtle', 'diamondback terrapin', 'tortoise',
    'galapagos tortoise', 'aldabra giant tortoise', 'african spurred tortoise', 'sulcata tortoise', 'leopard tortoise', 'red-footed tortoise', 'yellow-footed tortoise', 'indian star tortoise', 'radiated tortoise', 'ploughshare tortoise',
    'hermann tortoise', 'greek tortoise', 'russian tortoise', 'horsfield tortoise', 'marginated tortoise', 'elongated tortoise', 'pancake tortoise', 'desert tortoise', 'gopher tortoise', 'texas tortoise',
    'tuatara', 'komodo dragon', 'bearded dragon', 'basilisk', 'common basilisk', 'green basilisk', 'brown basilisk', 'plumed basilisk',
    
    // Amphibians
    'frog', 'bullfrog', 'american bullfrog', 'african bullfrog', 'leopard frog', 'northern leopard frog', 'southern leopard frog', 'pickerel frog', 'wood frog', 'green frog',
    'tree frog', 'european tree frog', 'gray tree frog', 'green tree frog', 'pacific tree frog', 'red-eyed tree frog', 'white tree frog', 'dumpy tree frog', 'barking tree frog', 'squirrel tree frog',
    'poison dart frog', 'strawberry poison dart frog', 'golden poison frog', 'blue poison dart frog', 'dyeing poison frog', 'green and black poison frog', 'yellow-banded poison frog', 'granular poison frog', 'harlequin poison frog', 'bumble bee poison frog',
    'toad', 'american toad', 'fowler toad', 'southern toad', 'common toad', 'european toad', 'natterjack toad', 'green toad', 'cane toad', 'marine toad',
    'colorado river toad', 'sonoran desert toad', 'western toad', 'great plains toad', 'red-spotted toad', 'oak toad', 'houston toad', 'spadefoot toad', 'eastern spadefoot', 'western spadefoot',
    'couch spadefoot', 'plains spadefoot', 'salamander', 'fire salamander', 'european fire salamander', 'alpine salamander', 'tiger salamander', 'spotted salamander', 'marbled salamander', 'mole salamander',
    'giant salamander', 'japanese giant salamander', 'chinese giant salamander', 'hellbender', 'mudpuppy', 'common mudpuppy', 'red salamander', 'mud salamander', 'spring salamander', 'newt',
    'eastern newt', 'red-spotted newt', 'rough-skinned newt', 'california newt', 'great crested newt', 'smooth newt', 'palmate newt', 'alpine newt', 'fire-bellied newt', 'paddle-tail newt',
    'siren', 'greater siren', 'lesser siren', 'dwarf siren', 'amphiuma', 'two-toed amphiuma', 'three-toed amphiuma', 'one-toed amphiuma', 'axolotl', 'olm',
    'caecilian', 'ringed caecilian', 'burrowing caecilian', 'aquatic caecilian', 'sticky caecilian', 'fish caecilian', 'yellow-striped caecilian', 'koa tao caecilian', 'thompson caecilian', 'brazilian caecilian',
    
    // Fish - Freshwater
    'goldfish', 'common goldfish', 'comet goldfish', 'shubunkin', 'fantail goldfish', 'oranda', 'ranchu', 'lionhead goldfish', 'bubble eye goldfish', 'black moor',
    'carp', 'common carp', 'koi', 'mirror carp', 'leather carp', 'grass carp', 'bighead carp', 'silver carp', 'black carp', 'crucian carp',
    'catfish', 'channel catfish', 'blue catfish', 'flathead catfish', 'walking catfish', 'wels catfish', 'glass catfish', 'upside-down catfish', 'pictus catfish', 'redtail catfish',
    'bass', 'largemouth bass', 'smallmouth bass', 'spotted bass', 'striped bass', 'white bass', 'black sea bass', 'rock bass', 'guadalupe bass', 'redeye bass',
    'trout', 'rainbow trout', 'brown trout', 'brook trout', 'cutthroat trout', 'lake trout', 'bull trout', 'dolly varden', 'golden trout', 'apache trout',
    'salmon', 'chinook salmon', 'king salmon', 'coho salmon', 'sockeye salmon', 'pink salmon', 'chum salmon', 'atlantic salmon', 'cherry salmon', 'danube salmon',
    'pike', 'northern pike', 'muskellunge', 'muskie', 'chain pickerel', 'grass pickerel', 'amur pike', 'perch', 'yellow perch', 'european perch',
    'walleye', 'sauger', 'zander', 'sunfish', 'bluegill', 'pumpkinseed', 'green sunfish', 'redear sunfish', 'longear sunfish', 'redbreast sunfish',
    'crappie', 'black crappie', 'white crappie', 'tilapia', 'nile tilapia', 'mozambique tilapia', 'blue tilapia', 'wami tilapia', 'redbelly tilapia', 'mango tilapia',
    'betta', 'siamese fighting fish', 'gourami', 'dwarf gourami', 'pearl gourami', 'blue gourami', 'kissing gourami', 'giant gourami', 'honey gourami', 'paradise fish',
    
    // Fish - Saltwater
    'tuna', 'bluefin tuna', 'yellowfin tuna', 'bigeye tuna', 'albacore', 'skipjack tuna', 'longtail tuna', 'blackfin tuna', 'little tunny', 'bullet tuna',
    'swordfish', 'marlin', 'blue marlin', 'black marlin', 'striped marlin', 'white marlin', 'sailfish', 'atlantic sailfish', 'indo-pacific sailfish', 'spearfish',
    'shark', 'great white shark', 'tiger shark', 'bull shark', 'hammerhead shark', 'great hammerhead', 'scalloped hammerhead', 'smooth hammerhead', 'whale shark', 'basking shark',
    'megalodon', 'mako shark', 'shortfin mako', 'longfin mako', 'blue shark', 'thresher shark', 'common thresher', 'bigeye thresher', 'pelagic thresher', 'sand tiger shark',
    'nurse shark', 'lemon shark', 'blacktip shark', 'blacktip reef shark', 'whitetip reef shark', 'oceanic whitetip shark', 'grey reef shark', 'caribbean reef shark', 'galapagos shark', 'bronze whaler',
    'leopard shark', 'zebra shark', 'wobbegong', 'spotted wobbegong', 'tasselled wobbegong', 'angel shark', 'pacific angel shark', 'sawshark', 'longnose sawshark', 'goblin shark',
    'frilled shark', 'cow shark', 'greenland shark', 'sleeper shark', 'dogfish', 'spiny dogfish', 'smooth dogfish', 'cat shark', 'bamboo shark', 'horn shark',
    'ray', 'manta ray', 'giant manta ray', 'reef manta ray', 'devil ray', 'eagle ray', 'spotted eagle ray', 'bat ray', 'cownose ray', 'stingray',
    'southern stingray', 'atlantic stingray', 'round stingray', 'yellow stingray', 'blue spotted stingray', 'ribbontail ray', 'electric ray', 'torpedo ray', 'skate', 'common skate',
    'barndoor skate', 'winter skate', 'little skate', 'clearnose skate', 'sawfish', 'smalltooth sawfish', 'largetooth sawfish', 'green sawfish', 'dwarf sawfish', 'guitarfish',
    'cod', 'atlantic cod', 'pacific cod', 'greenland cod', 'polar cod', 'haddock', 'pollock', 'alaska pollock', 'walleye pollock', 'saithe',
    'hake', 'european hake', 'silver hake', 'red hake', 'pacific hake', 'whiting', 'blue whiting', 'southern blue whiting', 'ling', 'burbot',
    'mackerel', 'atlantic mackerel', 'spanish mackerel', 'king mackerel', 'cero mackerel', 'chub mackerel', 'blue mackerel', 'herring', 'atlantic herring', 'pacific herring',
    'anchovy', 'european anchovy', 'northern anchovy', 'japanese anchovy', 'peruvian anchovy', 'sardine', 'pacific sardine', 'european pilchard', 'sardinella', 'menhaden',
    'snapper', 'red snapper', 'lane snapper', 'yellowtail snapper', 'mutton snapper', 'mangrove snapper', 'cubera snapper', 'dog snapper', 'mahogany snapper', 'silk snapper',
    'grouper', 'goliath grouper', 'nassau grouper', 'red grouper', 'gag grouper', 'black grouper', 'yellowfin grouper', 'warsaw grouper', 'snowy grouper', 'yellowmouth grouper',
    'barracuda', 'great barracuda', 'pacific barracuda', 'european barracuda', 'yellowtail barracuda', 'wahoo', 'kingfish', 'king mackerel', 'yellowtail kingfish', 'trevally',
    'pompano', 'florida pompano', 'african pompano', 'permit', 'jack crevalle', 'horse-eye jack', 'bar jack', 'yellow jack', 'almaco jack', 'greater amberjack',
    'flounder', 'summer flounder', 'winter flounder', 'southern flounder', 'olive flounder', 'starry flounder', 'peacock flounder', 'sole', 'common sole', 'dover sole',
    'lemon sole', 'petrale sole', 'pacific halibut', 'atlantic halibut', 'california halibut', 'turbot', 'brill', 'plaice', 'european plaice', 'american plaice',
    'seahorse', 'lined seahorse', 'dwarf seahorse', 'pacific seahorse', 'pot-bellied seahorse', 'tiger tail seahorse', 'pipefish', 'sea dragon', 'leafy sea dragon', 'weedy sea dragon',
    'eel', 'moray eel', 'green moray', 'snowflake moray', 'chain moray', 'zebra moray', 'ribbon eel', 'garden eel', 'spotted garden eel', 'conger eel',
    'american eel', 'european eel', 'japanese eel', 'electric eel', 'gulper eel', 'pelican eel', 'snipe eel', 'cutthroat eel', 'swamp eel', 'tire track eel',
    'anglerfish', 'goosefish', 'monkfish', 'frogfish', 'sargassum fish', 'batfish', 'short-nosed batfish', 'red-lipped batfish', 'pufferfish', 'northern puffer',
    'smooth puffer', 'stripebelly puffer', 'guineafowl puffer', 'porcupinefish', 'spotted porcupinefish', 'balloonfish', 'boxfish', 'cowfish', 'scrawled cowfish', 'trunkfish',
    'smooth trunkfish', 'spotted trunkfish', 'triggerfish', 'grey triggerfish', 'queen triggerfish', 'clown triggerfish', 'titan triggerfish', 'undulate triggerfish', 'filefish', 'orange filefish',
    'scrawled filefish', 'unicorn filefish', 'lionfish', 'red lionfish', 'common lionfish', 'devil firefish', 'fu manchu lionfish', 'spotfin lionfish', 'scorpionfish', 'spotted scorpionfish',
    'rockfish', 'black rockfish', 'blue rockfish', 'yelloweye rockfish', 'stonefish', 'reef stonefish', 'clownfish', 'ocellaris clownfish', 'percula clownfish', 'tomato clownfish',
    'maroon clownfish', 'clarkii clownfish', 'tang', 'blue tang', 'yellow tang', 'powder blue tang', 'regal tang', 'achilles tang', 'sailfin tang', 'unicorn tang',
    'parrotfish', 'rainbow parrotfish', 'stoplight parrotfish', 'midnight parrotfish', 'queen parrotfish', 'blue parrotfish', 'wrasse', 'bluehead wrasse', 'creole wrasse', 'humphead wrasse',
    'cleaner wrasse', 'bird wrasse', 'christmas wrasse', 'moon wrasse', 'damselfish', 'sergeant major', 'bicolor damselfish', 'chromis', 'blue chromis', 'green chromis',
    
    // Invertebrates - Insects
    'ant', 'carpenter ant', 'fire ant', 'red imported fire ant', 'leafcutter ant', 'army ant', 'bullet ant', 'harvester ant', 'argentine ant', 'pharaoh ant',
    'bee', 'honey bee', 'bumblebee', 'buff-tailed bumblebee', 'carpenter bee', 'mining bee', 'mason bee', 'leafcutter bee', 'sweat bee', 'stingless bee',
    'wasp', 'paper wasp', 'yellow jacket', 'hornet', 'european hornet', 'asian giant hornet', 'murder hornet', 'bald-faced hornet', 'cicada killer', 'potter wasp',
    'termite', 'subterranean termite', 'drywood termite', 'dampwood termite', 'formosan termite', 'beetle', 'ladybug', 'asian lady beetle', 'ground beetle', 'tiger beetle',
    'stag beetle', 'rhinoceros beetle', 'hercules beetle', 'elephant beetle', 'goliath beetle', 'june bug', 'japanese beetle', 'colorado potato beetle', 'firefly', 'lightning bug',
    'click beetle', 'dung beetle', 'scarab beetle', 'jewel beetle', 'longhorn beetle', 'weevil', 'boll weevil', 'bark beetle', 'blister beetle', 'checkered beetle',
    'butterfly', 'monarch butterfly', 'painted lady', 'red admiral', 'mourning cloak', 'peacock butterfly', 'comma butterfly', 'swallowtail', 'black swallowtail', 'tiger swallowtail',
    'pipevine swallowtail', 'spicebush swallowtail', 'zebra swallowtail', 'blue morpho', 'glasswing butterfly', 'birdwing', 'white', 'cabbage white', 'orange tip', 'sulphur',
    'fritillary', 'pearl-bordered fritillary', 'small tortoiseshell', 'blue', 'common blue', 'holly blue', 'skipper', 'silver-spotted skipper', 'moth', 'luna moth',
    'cecropia moth', 'polyphemus moth', 'io moth', 'rosy maple moth', 'emperor moth', 'atlas moth', 'sphinx moth', 'hawk moth', 'hummingbird moth', 'death-head hawk moth',
    'clothes moth', 'gypsy moth', 'tent caterpillar', 'eastern tent caterpillar', 'fall webworm', 'woolly bear', 'dragonfly', 'common darter', 'emperor dragonfly', 'hawker',
    'damselfly', 'azure damselfly', 'blue-tailed damselfly', 'grasshopper', 'red-legged grasshopper', 'differential grasshopper', 'migratory grasshopper', 'lubber grasshopper', 'locust', 'desert locust',
    'migratory locust', 'cricket', 'field cricket', 'house cricket', 'mole cricket', 'jerusalem cricket', 'mormon cricket', 'katydid', 'bush cricket', 'mantis',
    'praying mantis', 'chinese mantis', 'european mantis', 'carolina mantis', 'orchid mantis', 'cockroach', 'american cockroach', 'german cockroach', 'oriental cockroach', 'madagascar hissing cockroach',
    'walkingstick', 'stick insect', 'leaf insect', 'cicada', 'periodical cicada', 'aphid', 'greenfly', 'blackfly', 'scale insect', 'mealybug',
    'whitefly', 'psyllid', 'flea', 'cat flea', 'dog flea', 'human flea', 'rat flea', 'louse', 'head louse', 'body louse',
    'crab louse', 'booklouse', 'thrips', 'lacewing', 'green lacewing', 'antlion', 'dobsonfly', 'caddisfly', 'mayfly', 'stonefly',
    
    // Invertebrates - Arachnids & Others
    'spider', 'tarantula', 'mexican redknee tarantula', 'chilean rose tarantula', 'goliath birdeater', 'brazilian salmon pink tarantula', 'jumping spider', 'bold jumping spider', 'zebra jumping spider', 'wolf spider',
    'garden spider', 'orb weaver', 'golden orb weaver', 'black widow', 'brown widow', 'redback spider', 'brown recluse', 'hobo spider', 'yellow sac spider', 'daddy longlegs',
    'cellar spider', 'huntsman spider', 'fishing spider', 'funnel-web spider', 'sydney funnel-web', 'trapdoor spider', 'mouse spider', 'recluse spider', 'camel spider', 'wind scorpion',
    'scorpion', 'emperor scorpion', 'arizona bark scorpion', 'deathstalker', 'fattail scorpion', 'whip scorpion', 'vinegaroon', 'pseudoscorpion', 'tick', 'deer tick',
    'wood tick', 'american dog tick', 'lone star tick', 'brown dog tick', 'mite', 'dust mite', 'spider mite', 'chigger', 'harvest mite', 'scabies mite',
    'centipede', 'house centipede', 'giant centipede', 'amazonian giant centipede', 'texas redheaded centipede', 'millipede', 'giant millipede', 'pill millipede', 'woodlouse', 'pillbug',
    'sowbug', 'roly-poly', 'isopod', 'giant isopod', 'terrestrial isopod', 'snail', 'garden snail', 'roman snail', 'grove snail', 'banded snail',
    'apple snail', 'giant african snail', 'cone snail', 'sea snail', 'moon snail', 'periwinkle', 'whelk', 'conch', 'cowrie', 'slug',
    'black slug', 'leopard slug', 'banana slug', 'sea slug', 'nudibranch', 'sea hare', 'sea butterfly', 'pteropod', 'earthworm', 'nightcrawler',
    'red wiggler', 'brandling worm', 'blueworm', 'leech', 'medicinal leech', 'horse leech', 'flatworm', 'planarian', 'tapeworm', 'fluke',
    
    // Mollusks & Echinoderms
    'octopus', 'common octopus', 'giant pacific octopus', 'blue-ringed octopus', 'mimic octopus', 'blanket octopus', 'dumbo octopus', 'squid', 'giant squid', 'colossal squid',
    'caribbean reef squid', 'bigfin reef squid', 'humboldt squid', 'vampire squid', 'bobtail squid', 'firefly squid', 'cuttlefish', 'common cuttlefish', 'giant cuttlefish', 'flamboyant cuttlefish',
    'nautilus', 'chambered nautilus', 'clam', 'geoduck', 'giant clam', 'soft-shell clam', 'hard-shell clam', 'quahog', 'razor clam', 'atlantic jackknife clam',
    'oyster', 'eastern oyster', 'pacific oyster', 'olympia oyster', 'european flat oyster', 'scallop', 'bay scallop', 'sea scallop', 'calico scallop', 'mussel',
    'blue mussel', 'zebra mussel', 'quagga mussel', 'green-lipped mussel', 'cockle', 'common cockle', 'ark shell', 'abalone', 'red abalone', 'green abalone',
    'black abalone', 'white abalone', 'limpet', 'keyhole limpet', 'chiton', 'starfish', 'crown-of-thorns starfish', 'sunflower star', 'ochre sea star', 'brittle star',
    'basket star', 'serpent star', 'sea urchin', 'purple sea urchin', 'red sea urchin', 'green sea urchin', 'long-spined sea urchin', 'pencil urchin', 'sand dollar', 'keyhole sand dollar',
    'sea cucumber', 'californea sea cucumber', 'giant red sea cucumber', 'sea apple', 'crinoid', 'feather star', 'sea lily', 'jellyfish', 'moon jellyfish', 'lion mane jellyfish',
    'box jellyfish', 'sea wasp', 'irukandji jellyfish', 'mauve stinger', 'compass jellyfish', 'cannonball jellyfish', 'portuguese man o war', 'by-the-wind sailor', 'sea anemone', 'beadlet anemone',
    'plumose anemone', 'magnificent sea anemone', 'tube anemone', 'coral', 'brain coral', 'elkhorn coral', 'staghorn coral', 'fire coral', 'sea fan', 'gorgonian',
    
    // Crustaceans
    'crab', 'blue crab', 'dungeness crab', 'king crab', 'snow crab', 'stone crab', 'hermit crab', 'coconut crab', 'spider crab', 'japanese spider crab',
    'fiddler crab', 'ghost crab', 'horseshoe crab', 'shore crab', 'rock crab', 'jonah crab', 'peekytoe crab', 'lobster', 'american lobster', 'maine lobster',
    'european lobster', 'spiny lobster', 'caribbean spiny lobster', 'california spiny lobster', 'rock lobster', 'slipper lobster', 'crayfish', 'signal crayfish', 'red swamp crayfish', 'yabby',
    'marron', 'shrimp', 'pacific white shrimp', 'tiger shrimp', 'brown shrimp', 'pink shrimp', 'rock shrimp', 'spot prawn', 'mantis shrimp', 'pistol shrimp',
    'cleaner shrimp', 'brine shrimp', 'fairy shrimp', 'tadpole shrimp', 'prawn', 'giant river prawn', 'king prawn', 'langostino', 'krill', 'antarctic krill',
    'barnacle', 'acorn barnacle', 'gooseneck barnacle', 'copepod', 'water flea', 'daphnia', 'triops', 'lobster', 'crayfish', 'crawdad',
    
    // Additional Mammals - Primates
    'golden lion tamarin', 'emperor tamarin', 'cotton-top tamarin', 'black-handed spider monkey', 'woolly spider monkey', 'guatemalan black howler', 'colobus monkey', 'olive baboon', 'gelada', 'drill',
    'mandrill monkey', 'proboscis monkey', 'snub-nosed monkey', 'douc langur', 'silvered leaf monkey', 'capped langur', 'nilgiri langur', 'grey langur', 'purple-faced langur', 'patas monkey',
    'vervet monkey', 'green monkey', 'allen swamp monkey', 'owl-faced monkey', 'diana monkey', 'mona monkey', 'campbell monkey', 'lesser spot-nosed monkey', 'greater spot-nosed monkey', 'blue monkey',
    'red-tailed monkey', 'schmidt guenon', 'moustached guenon', 'sclater guenon', 'white-throated guenon', 'hamlyn monkey', 'sun-tailed monkey', 'golden guenon', 'wolf guenon', 'mountain gorilla',
    'lowland gorilla', 'cross river gorilla', 'sumatran orangutan', 'tapanuli orangutan', 'bornean orangutan', 'siamang', 'white-handed gibbon', 'black gibbon', 'hoolock gibbon', 'silvery gibbon',
    
    // Additional Rodents
    'thirteen-lined ground squirrel', 'arctic ground squirrel', 'california ground squirrel', 'columbian ground squirrel', 'richardson ground squirrel', 'golden-mantled ground squirrel', 'rock squirrel', 'spotted ground squirrel', 'washington ground squirrel', 'idaho ground squirrel',
    'mohave ground squirrel', 'round-tailed ground squirrel', 'merriam kangaroo rat', 'ord kangaroo rat', 'desert kangaroo rat', 'giant kangaroo rat', 'stephens kangaroo rat', 'san joaquin kangaroo rat', 'texas kangaroo rat', 'banner-tailed kangaroo rat',
    'northern pocket gopher', 'plains pocket gopher', 'botta pocket gopher', 'camas pocket gopher', 'desert pocket gopher', 'mazama pocket gopher', 'mountain pocket gopher', 'southeastern pocket gopher', 'texas pocket gopher', 'townsend pocket gopher',
    'mexican prairie dog', 'utah prairie dog', 'gunnison prairie dog', 'white-tailed prairie dog', 'eastern woodrat', 'desert woodrat', 'bushy-tailed woodrat', 'dusky-footed woodrat', 'stephens woodrat', 'key largo woodrat',
    'allegheny woodrat', 'mexican woodrat', 'san martin island woodrat', 'big-eared woodrat', 'arizona cotton rat', 'hispid cotton rat', 'marsh rice rat', 'oryzomys', 'tawny-bellied cotton rat', 'yellow-nosed cotton rat',
    
    // Additional Birds - Waterfowl
    'fulvous whistling duck', 'black-bellied whistling duck', 'wandering whistling duck', 'plumed whistling duck', 'lesser whistling duck', 'cuban whistling duck', 'spotted whistling duck', 'white-faced whistling duck', 'coscoroba swan', 'black-necked swan',
    'black swan', 'trumpeter swan', 'tundra swan', 'bewick swan', 'whooper swan', 'mute swan', 'brant goose', 'barnacle goose', 'red-breasted goose', 'emperor goose',
    'ross goose', 'lesser snow goose', 'greater snow goose', 'blue goose', 'greylag goose', 'swan goose', 'bean goose', 'pink-footed goose', 'greater white-fronted goose', 'lesser white-fronted goose',
    'cape barren goose', 'magpie goose', 'hawaiian goose', 'cackling goose', 'ruddy shelduck', 'common shelduck', 'paradise shelduck', 'australian shelduck', 'raja shelduck', 'crested shelduck',
    'radjah shelduck', 'south african shelduck', 'egyptian goose', 'muscovy duck', 'comb duck', 'hartlaub duck', 'american wigeon', 'eurasian wigeon', 'chiloe wigeon', 'falcated duck',
    'gadwall', 'baikal teal', 'garganey', 'blue-winged teal', 'cinnamon teal', 'green-winged teal', 'common teal', 'marbled duck', 'red-crested pochard', 'common pochard',
    'canvasback', 'redhead duck', 'ring-necked duck', 'ferruginous duck', 'tufted duck', 'greater scaup', 'lesser scaup', 'steller eider', 'spectacled eider', 'king eider',
    'common eider', 'northern eider', 'pacific eider', 'harlequin duck', 'long-tailed duck', 'oldsquaw', 'bufflehead', 'common goldeneye', 'barrow goldeneye', 'hooded merganser',
    'common merganser', 'red-breasted merganser', 'scaly-sided merganser', 'smew', 'brazilian duck', 'crested duck', 'bronze-winged duck', 'spectacled duck', 'steamer duck', 'flightless steamer duck',
    'flying steamer duck', 'torrent duck', 'salvadori duck', 'blue duck', 'pink-eared duck', 'freckled duck', 'musk duck', 'black-headed duck', 'masked duck', 'white-backed duck',
    
    // Additional Birds - Raptors & Birds of Prey
    'african harrier-hawk', 'madagascar harrier-hawk', 'african cuckoo-hawk', 'bat hawk', 'crane hawk', 'long-winged harrier', 'spotted harrier', 'swamp harrier', 'reunion harrier', 'black harrier',
    'cinereous harrier', 'pallid harrier', 'pied harrier', 'montagu harrier', 'african marsh harrier', 'eastern marsh harrier', 'western marsh harrier', 'papuan harrier', 'swamp harrier', 'brahminy kite',
    'whistling kite', 'black kite', 'yellow-billed kite', 'letter-winged kite', 'black-winged kite', 'black-shouldered kite', 'african swallow-tailed kite', 'pearl kite', 'snail kite', 'slender-billed kite',
    'double-toothed kite', 'mississippi kite', 'plumbeous kite', 'long-tailed honey buzzard', 'black honey buzzard', 'barred honey buzzard', 'oriental honey buzzard', 'european honey buzzard', 'crested honey buzzard', 'pernis',
    'square-tailed kite', 'rufous-bellied eagle', 'long-crested eagle', 'cassin hawk-eagle', 'black-and-white hawk-eagle', 'ornate hawk-eagle', 'black hawk-eagle', 'crowned eagle', 'martial eagle', 'indian spotted eagle',
    'greater spotted eagle', 'lesser spotted eagle', 'tawny eagle', 'steppe eagle', 'spanish imperial eagle', 'eastern imperial eagle', 'gurney eagle', 'black eagle', 'verreaux eagle', 'wahlberg eagle',
    'bonelli eagle', 'african hawk-eagle', 'booted eagle', 'little eagle', 'ayres hawk-eagle', 'rufous-bellied hawk-eagle', 'philippine hawk-eagle', 'wallace hawk-eagle', 'sulawesi hawk-eagle', 'mountain hawk-eagle',
    'blyth hawk-eagle', 'javan hawk-eagle', 'legge hawk-eagle', 'pinsker hawk-eagle', 'australian king parrot', 'new guinea harpy eagle', 'philippine eagle', 'crested serpent eagle', 'great nicobar serpent eagle', 'mountain serpent eagle',
    'sulawesi serpent eagle', 'philippine serpent eagle', 'andaman serpent eagle', 'short-toed snake eagle', 'beaudouin snake eagle', 'black-chested snake eagle', 'brown snake eagle', 'southern banded snake eagle', 'western banded snake eagle', 'congo serpent eagle',
    'madagascar serpent eagle', 'bateleur', 'palm-nut vulture', 'lammergeier', 'egyptian vulture', 'hooded vulture', 'white-backed vulture', 'rueppell vulture', 'himalayan griffon', 'eurasian griffon',
    
    // Additional Birds - Seabirds
    'wandering albatross', 'royal albatross', 'amsterdam albatross', 'tristan albatross', 'antipodean albatross', 'southern royal albatross', 'northern royal albatross', 'short-tailed albatross', 'waved albatross', 'laysan albatross',
    'black-footed albatross', 'black-browed albatross', 'campbell albatross', 'shy albatross', 'white-capped albatross', 'salvin albatross', 'chatham albatross', 'buller albatross', 'sooty albatross', 'light-mantled albatross',
    'atlantic yellow-nosed albatross', 'indian yellow-nosed albatross', 'gray-headed albatross', 'southern giant petrel', 'northern giant petrel', 'southern fulmar', 'northern fulmar', 'antarctic petrel', 'cape petrel', 'snow petrel',
    'great-winged petrel', 'white-headed petrel', 'atlantic petrel', 'kerguelen petrel', 'soft-plumaged petrel', 'juan fernandez petrel', 'hawaiian petrel', 'galapagos petrel', 'cook petrel', 'de filippi petrel',
    'tahiti petrel', 'phoenix petrel', 'herald petrel', 'kermadec petrel', 'jamaica petrel', 'black-capped petrel', 'bermuda petrel', 'zino petrel', 'fea petrel', 'stejneger petrel',
    'bulwer petrel', 'jouanin petrel', 'white-chinned petrel', 'parkinson petrel', 'westland petrel', 'flesh-footed petrel', 'pink-footed shearwater', 'great shearwater', 'wedge-tailed shearwater', 'buller shearwater',
    'sooty shearwater', 'short-tailed shearwater', 'christmas shearwater', 'manx shearwater', 'yelkouan shearwater', 'balearic shearwater', 'fluttering shearwater', 'hutton shearwater', 'little shearwater', 'audubon shearwater',
    'persian shearwater', 'heinroth shearwater', 'wilson storm petrel', 'leach storm petrel', 'european storm petrel', 'fork-tailed storm petrel', 'ashy storm petrel', 'black storm petrel', 'least storm petrel', 'guadalupe storm petrel',
    'white-faced storm petrel', 'white-bellied storm petrel', 'black-bellied storm petrel', 'polynesian storm petrel', 'white-throated storm petrel', 'grey-backed storm petrel', 'new zealand storm petrel', 'hornby storm petrel', 'ringed storm petrel', 'swinhoe storm petrel',
    'tristram storm petrel', 'matsudaira storm petrel', 'markham storm petrel', 'common diving petrel', 'south georgian diving petrel', 'peruvian diving petrel', 'magellanic diving petrel', 'red-tailed tropicbird', 'white-tailed tropicbird', 'red-billed tropicbird',
    
    // Additional Reptiles - Lizards
    'green iguana', 'black spiny-tailed iguana', 'yucatan spiny-tailed iguana', 'mexican spiny-tailed iguana', 'desert iguana', 'fiji banded iguana', 'fiji crested iguana', 'galapagos land iguana', 'galapagos marine iguana', 'lesser antillean iguana',
    'cuban iguana', 'rhinoceros iguana', 'blue iguana', 'jamaican iguana', 'andros iguana', 'turks and caicos iguana', 'bartsch iguana', 'green basilisk', 'brown basilisk', 'common basilisk',
    'western basilisk', 'helmeted iguana', 'black iguana', 'spiny-tailed iguana', 'angel island chuckwalla', 'common chuckwalla', 'san esteban chuckwalla', 'chinese water dragon', 'eastern water dragon', 'australian water dragon',
    'sailfin dragon', 'philippines sailfin lizard', 'green crested lizard', 'boyd forest dragon', 'eastern bearded dragon', 'central bearded dragon', 'western bearded dragon', 'dwarf bearded dragon', 'nullarbor bearded dragon', 'rankin dragon',
    'frilled lizard', 'indonesian frilled dragon', 'armadillo girdled lizard', 'sungazer', 'giant girdled lizard', 'rough-scaled plated lizard', 'black-lined plated lizard', 'giant plated lizard', 'sudan plated lizard', 'yellow-throated plated lizard',
    'ornate mastigure', 'egyptian mastigure', 'indian spiny-tailed lizard', 'arabian spiny-tailed lizard', 'berber skink', 'schneider skink', 'black tree monitor', 'blue tree monitor', 'emerald tree monitor', 'green tree monitor',
    'crocodile monitor', 'peach-throated monitor', 'quince monitor', 'yellow monitor', 'argus monitor', 'black-headed monitor', 'pilbara rock monitor', 'rusty monitor', 'storr monitor', 'kimberley rock monitor',
    'ridge-tailed monitor', 'mangrove monitor', 'mitchell water monitor', 'mertens water monitor', 'yellow-spotted monitor', 'black-palmed rock monitor', 'pilbara mulga monitor', 'freckled monitor', 'stripe-tailed monitor', 'blue-spotted tree monitor',
    'common tegu', 'black tegu', 'argentine black and white tegu', 'red tegu', 'gold tegu', 'colombian tegu', 'desert tegu', 'caiman lizard', 'northern caiman lizard', 'paraguayan caiman lizard',
    'prehensile-tailed skink', 'monkey-tailed skink', 'pink-tongued skink', 'blue-tongued skink', 'eastern blue-tongued skink', 'northern blue-tongued skink', 'western blue-tongued skink', 'blotched blue-tongued skink', 'centralian blue-tongued skink', 'shingleback skink',
    
    // Additional Amphibians - Frogs
    'alabama waterdog', 'dwarf waterdog', 'gulf coast waterdog', 'neuse river waterdog', 'black warrior waterdog', 'red hills salamander', 'green salamander', 'apalachicola dusky salamander', 'black mountain salamander', 'seal salamander',
    'shovel-nosed salamander', 'longtail salamander', 'cave salamander', 'spring salamander', 'purple salamander', 'four-toed salamander', 'tennessee cave salamander', 'berry cave salamander', 'grotto salamander', 'oklahoma salamander',
    'eastern red-backed salamander', 'southern red-backed salamander', 'valley and ridge salamander', 'northern slimy salamander', 'white-spotted slimy salamander', 'sequoyah slimy salamander', 'kiamichi slimy salamander', 'western slimy salamander', 'louisiana slimy salamander', 'mississippi slimy salamander',
    'allegheny mountain dusky salamander', 'blue ridge dusky salamander', 'northern dusky salamander', 'spotted dusky salamander', 'santeetlah dusky salamander', 'ocoee salamander', 'pygmy salamander', 'red-cheeked salamander', 'imitator salamander', 'metcalf salamander',
    'yonahlossee salamander', 'weller salamander', 'mud salamander', 'rusty mud salamander', 'dwarf mud salamander', 'red salamander', 'black salamander', 'ringed salamander', 'marbled salamander', 'mole salamander',
    'streamside salamander', 'oklahoma salamander', 'smallmouth salamander', 'spotted salamander', 'blue-spotted salamander', 'mabee salamander', 'flatwoods salamander', 'jefferson salamander', 'silvery salamander', 'tremblay salamander',
    'puerto rican crested toad', 'houston toad', 'southwestern toad', 'arroyo toad', 'yosemite toad', 'black toad', 'boreal toad', 'canadian toad', 'great basin spadefoot', 'couch spadefoot',
    'plains spadefoot', 'mexican spadefoot', 'western spadefoot', 'eastern spadefoot', 'hurter spadefoot', 'pine barrens treefrog', 'mountain chorus frog', 'brimley chorus frog', 'southern chorus frog', 'boreal chorus frog',
    'western chorus frog', 'ornate chorus frog', 'little grass frog', 'strecker chorus frog', 'spotted chorus frog', 'spring peeper', 'pine woods treefrog', 'barking treefrog', 'canyon treefrog', 'cuban treefrog',
    'mountain treefrog', 'arizona treefrog', 'california treefrog', 'pacific treefrog', 'northern cricket frog', 'southern cricket frog', 'blanchard cricket frog', 'crawfish frog', 'gopher frog', 'dusky gopher frog',
    
    // Additional Fish - Freshwater
    'bluegill sunfish', 'pumpkinseed sunfish', 'redear sunfish', 'green sunfish', 'longear sunfish', 'redbreast sunfish', 'spotted sunfish', 'dollar sunfish', 'bantam sunfish', 'orangespotted sunfish',
    'northern longear sunfish', 'southern longear sunfish', 'mud sunfish', 'everglades pygmy sunfish', 'banded pygmy sunfish', 'bluebarred pygmy sunfish', 'carolina pygmy sunfish', 'okefenokee pygmy sunfish', 'spring pygmy sunfish', 'blackbanded sunfish',
    'banded sunfish', 'shadow bass', 'roanoke bass', 'ozark bass', 'guadalupe bass', 'shoal bass', 'suwannee bass', 'alabama bass', 'spotted bass', 'kentucky spotted bass',
    'northern rock bass', 'roanoke rock bass', 'sacramento perch', 'white crappie', 'black crappie', 'flier', 'banded darter', 'mud darter', 'crystal darter', 'scaly sand darter',
    'eastern sand darter', 'southern sand darter', 'western sand darter', 'stargazing darter', 'arrow darter', 'ashy darter', 'greenside darter', 'christmas darter', 'candy darter', 'variegate darter',
    'redline darter', 'stripeback darter', 'bluebreast darter', 'orangethroat darter', 'rainbow darter', 'barcheek darter', 'stippled darter', 'bluntnose darter', 'fantail darter', 'banded fantail darter',
    'johnny darter', 'tessellated darter', 'gilt darter', 'speckled darter', 'orangefin darter', 'wounded darter', 'goldstripe darter', 'bronze darter', 'riverweed darter', 'splendid darter',
    'spotted darter', 'glassy darter', 'teardrop darter', 'striated darter', 'redfin darter', 'yazoo darter', 'blotchside logperch', 'appalachia darter', 'greenfin darter', 'sharpnose darter',
    'blackside darter', 'channel darter', 'tennessee snubnose darter', 'blackbanded darter', 'firebelly darter', 'yellow perch', 'walleye', 'blue pike', 'sauger', 'saugeye',
    'river redhorse', 'black redhorse', 'golden redhorse', 'shorthead redhorse', 'silver redhorse', 'greater redhorse', 'copper redhorse', 'blacktail redhorse', 'sicklefin redhorse', 'robust redhorse',
    
    // Additional Invertebrates - Beetles
    'seven-spotted ladybug', 'asian lady beetle', 'convergent lady beetle', 'pink spotted lady beetle', 'twice-stabbed lady beetle', 'eyed ladybug', 'thirteen-spotted lady beetle', 'fifteen-spotted lady beetle', 'parenthesis lady beetle', 'striped lady beetle',
    'american burying beetle', 'tomentose burying beetle', 'margined burying beetle', 'carrion beetles', 'red-breasted carrion beetle', 'american carrion beetle', 'rainbow scarab', 'phanaeus vindex', 'ox beetle', 'bulls-eye dung beetle',
    'earth-boring dung beetle', 'aphodius', 'tumble bug', 'june beetle', 'green june beetle', 'japanese beetle', 'oriental beetle', 'european chafer', 'asiatic garden beetle', 'rose chafer',
    'ten-lined june beetle', 'grapevine beetle', 'bumble flower beetle', 'hermit flower beetle', 'pelidnota punctata', 'figeater beetle', 'masked chafer', 'european rhinoceros beetle', 'eastern hercules beetle', 'western hercules beetle',
    'unicorn beetle', 'triceratops beetle', 'elephant beetle', 'ox beetle', 'dynastes beetle', 'goliath beetle', 'flower chafer', 'cetonia', 'green rose chafer', 'golden chafer',
    'northern pine weevil', 'pales weevil', 'diaprepes root weevil', 'black vine weevil', 'strawberry root weevil', 'alfalfa weevil', 'clover leaf weevil', 'rice water weevil', 'sweetclover weevil', 'vegetable weevil',
    'boll weevil', 'plum curculio', 'rhubarb curculio', 'rose curculio', 'nut weevil', 'acorn weevil', 'chestnut weevil', 'pecan weevil', 'granary weevil', 'rice weevil',
    'maize weevil', 'lesser grain borer', 'grain weevil', 'billbug', 'hunting billbug', 'bluegrass billbug', 'denver billbug', 'rocky mountain billbug', 'pine bark beetle', 'mountain pine beetle',
    'southern pine beetle', 'ips beetle', 'spruce beetle', 'douglas-fir beetle', 'western pine beetle', 'eastern larch beetle', 'elm bark beetle', 'smaller european elm bark beetle', 'native elm bark beetle', 'hickory bark beetle',
    'ash bark beetle', 'walnut twig beetle', 'shothole borer', 'asian ambrosia beetle', 'european shot borer', 'emerald ash borer', 'bronze birch borer', 'two-lined chestnut borer', 'flatheaded appletree borer', 'pacific flatheaded borer',
    
    // Additional Butterflies & Moths
    'pipevine swallowtail', 'polydamas swallowtail', 'zebra swallowtail', 'black swallowtail', 'appalachian tiger swallowtail', 'canadian tiger swallowtail', 'western tiger swallowtail', 'two-tailed swallowtail', 'three-tailed swallowtail', 'pale swallowtail',
    'old world swallowtail', 'anise swallowtail', 'indra swallowtail', 'short-tailed swallowtail', 'ozark swallowtail', 'giant swallowtail', 'thoas swallowtail', 'ornythion swallowtail', 'palamedes swallowtail', 'spicebush swallowtail',
    'ruby-spotted swallowtail', 'baird swallowtail', 'white peacock', 'malachite butterfly', 'banded peacock', 'american snout', 'gulf fritillary', 'julia heliconian', 'isabella tiger', 'mexican silverspot',
    'variegated fritillary', 'diana fritillary', 'great spangled fritillary', 'aphrodite fritillary', 'atlantis fritillary', 'northwestern fritillary', 'hydaspe fritillary', 'coronis fritillary', 'mormon fritillary', 'callippe fritillary',
    'unsilvered fritillary', 'bog fritillary', 'silver-bordered fritillary', 'meadow fritillary', 'frigga fritillary', 'dingy fritillary', 'arctic fritillary', 'polaris fritillary', 'freija fritillary', 'purple lesser fritillary',
    'pearl crescent', 'northern crescent', 'tawny crescent', 'phaon crescent', 'mylitta crescent', 'painted crescent', 'cuban crescent', 'texan crescent', 'vesta crescent', 'california crescent',
    'field crescent', 'baltimore checkerspot', 'harris checkerspot', 'gorgone checkerspot', 'silvery checkerspot', 'rockslide checkerspot', 'northern checkerspot', 'sagebrush checkerspot', 'hoffmann checkerspot', 'chalcedon checkerspot',
    'colon checkerspot', 'anicia checkerspot', 'edith checkerspot', 'leanira checkerspot', 'variable checkerspot', 'arachne checkerspot', 'pearl-bordered fritillary', 'small pearl-bordered fritillary', 'shepherd fritillary', 'relict fritillary',
    'mourning cloak', 'milbert tortoiseshell', 'compton tortoiseshell', 'california tortoiseshell', 'hoary comma', 'gray comma', 'green comma', 'faunus anglewing', 'oreas anglewing', 'satyr comma',
    'eastern comma', 'question mark', 'gooseberry hairstreak', 'white m hairstreak', 'gray hairstreak', 'red-banded hairstreak', 'juniper hairstreak', 'brown elfin', 'hoary elfin', 'western pine elfin',
    
    // Additional Snakes
    'smooth earthsnake', 'rough earthsnake', 'western smooth earthsnake', 'mountain earthsnake', 'bog turtle snake', 'western worm snake', 'eastern worm snake', 'midwest worm snake', 'texas blind snake', 'plains blind snake',
    'trans-pecos blind snake', 'desert blind snake', 'california legless lizard', 'southern alligator lizard', 'northern alligator lizard', 'rubber boa', 'southern rubber boa', 'rosy boa', 'desert rosy boa', 'coastal rosy boa',
    'mexican rosy boa', 'common boa constrictor', 'red-tailed boa', 'colombian boa', 'argentine boa', 'bolivian boa', 'peruvian boa', 'ecuadorian boa', 'hog island boa', 'crawl cay boa',
    'emerald tree boa', 'amazon tree boa', 'garden tree boa', 'cook tree boa', 'green anaconda', 'yellow anaconda', 'dark-spotted anaconda', 'bolivian anaconda', 'scarlet kingsnake', 'mole kingsnake',
    'prairie kingsnake', 'black kingsnake', 'desert kingsnake', 'speckled kingsnake', 'mexican black kingsnake', 'california mountain kingsnake', 'sonoran mountain kingsnake', 'arizona mountain kingsnake', 'utah mountain kingsnake', 'central plains milk snake',
    'coastal plains milk snake', 'dixie milk snake', 'eastern milk snake', 'honduran milk snake', 'louisiana milk snake', 'mexican milk snake', 'nelson milk snake', 'new mexico milk snake', 'pale milk snake', 'pueblan milk snake',
    'red milk snake', 'sinaloan milk snake', 'stuart milk snake', 'utah milk snake', 'prairie ringneck snake', 'regal ringneck snake', 'mississippi ringneck snake', 'northern ringneck snake', 'southern ringneck snake', 'key ringneck snake',
    'northwestern ringneck snake', 'san bernardino ringneck snake', 'san diego ringneck snake', 'monterey ringneck snake', 'coral-bellied ringneck snake', 'rough green snake', 'smooth green snake', 'western smooth green snake', 'short-headed garter snake', 'butler garter snake',
    'checkered garter snake', 'mexican garter snake', 'blackneck garter snake', 'western aquatic garter snake', 'two-striped garter snake', 'mexican wandering garter snake', 'terrestrial garter snake', 'western terrestrial garter snake', 'plateau garter snake', 'valley garter snake',
    'sierra garter snake', 'coast garter snake', 'giant garter snake', 'northwestern garter snake', 'puget sound garter snake', 'maritime garter snake', 'plains garter snake', 'western plains garter snake', 'texas garter snake', 'red-sided garter snake',
    
    // Additional Marine Life
    'whitespotted eagle ray', 'longnose eagle ray', 'bullnose eagle ray', 'ornate eagle ray', 'new zealand eagle ray', 'blue-spotted ribbontail ray', 'bluespotted stingray', 'cowtail stingray', 'honeycomb stingray', 'marbled stingray',
    'pearl stingray', 'plain maskray', 'river stingray', 'black stingray', 'california butterfly ray', 'spiny butterfly ray', 'smooth butterfly ray', 'diamond stingray', 'yellow stingray', 'round stingray',
    'thorny stingray', 'porcupine ray', 'smalleye stingray', 'giant freshwater stingray', 'atlantic stingray', 'bluntnose stingray', 'roughtail stingray', 'pelagic stingray', 'brown stingray', 'estuary stingray',
    'whale shark', 'basking shark', 'megamouth shark', 'cookiecutter shark', 'cigar shark', 'largetooth cookiecutter', 'pygmy shark', 'dwarf lanternshark', 'velvet belly lanternshark', 'blackbelly lanternshark',
    'lined lanternshark', 'hawaiian lanternshark', 'broadnose lanternshark', 'brown lanternshark', 'great lanternshark', 'blackmouth lanternshark', 'luminous shark', 'slendertail lanternshark', 'taillight shark', 'kitefin shark',
    'prickly shark', 'birdbeak dogfish', 'sailfin roughshark', 'angular roughshark', 'japanese roughshark', 'roughskin dogfish', 'mandarin dogfish', 'japanese spurdog', 'shortspine spurdog', 'longnose spurdog',
    'brown smoothhound', 'grey smoothhound', 'narrowfin smoothhound', 'sicklefin smoothhound', 'spotless smoothhound', 'venezuelan dwarf smoothhound', 'sharpnose smoothhound', 'starspotted smoothhound', 'whiskery shark', 'tope shark',
    'school shark', 'spotted gully shark', 'soupfin shark', 'rig', 'sailback houndshark', 'blackspot shark', 'whitefin topeshark', 'leopard shark', 'narrowtooth shark', 'narrownose smoothhound',
    'striped smoothhound', 'humpback smoothhound', 'venezuelan smoothhound', 'dwarf smoothhound', 'whitenose shark', 'sicklefin houndshark', 'largenose catshark', 'blackmouth catshark', 'longnose catshark', 'iceland catshark',
    'marbled catshark', 'nursehound', 'small-spotted catshark', 'ghost catshark', 'black roughscale catshark', 'rough catshark', 'whitefin catshark', 'broadmouth catshark', 'blotched catshark', 'brownspotted catshark',
    
    // Additional Insects - Dragonflies & Damselflies
    'common green darner', 'comet darner', 'lance-tipped darner', 'arroyo darner', 'blue-eyed darner', 'california darner', 'paddle-tailed darner', 'sedge darner', 'shadow darner', 'swamp darner',
    'Variable darner', 'black-tipped darner', 'spatterdock darner', 'cyrano darner', 'bar-sided darner', 'harlequin darner', 'malachite darner', 'taper-tailed darner', 'zigzag darner', 'common baskettail',
    'spiny baskettail', 'robust baskettail', 'beaverpond baskettail', 'mantled baskettail', 'stripe-winged baskettail', 'prince baskettail', 'florida baskettail', 'swift river cruiser', 'royal river cruiser', 'bronzed river cruiser',
    'fine-lined emerald', 'clamp-tipped emerald', 'brush-tipped emerald', 'delicate emerald', 'kennedy emerald', 'mountain emerald', 'mocha emerald', 'ocellated emerald', 'ozark emerald', 'petite emerald',
    'racket-tailed emerald', 'ringed emerald', 'ski-tipped emerald', 'tennessee emerald', 'texas emerald', 'treetop emerald', 'common whitetail', 'desert whitetail', 'ornate pennant', 'calico pennant',
    'martha pennant', 'halloween pennant', 'banded pennant', 'black setwing', 'delicate white-tailed skimmer', 'hoary skimmer', 'chalk-fronted corporal', 'pale-faced clubskimmer', 'slaty skimmer', 'bar-winged skimmer',
    'bronze whiteface', 'common whiteface', 'crimson-ringed whiteface', 'dot-tailed whiteface', 'frosted whiteface', 'hudsonian whiteface', 'red-waisted whiteface', 'wandering glider', 'spot-winged glider', 'eastern amberwing',
    'mexican amberwing', 'blue corporal', 'widow skimmer', 'twelve-spotted skimmer', 'four-spotted skimmer', 'eight-spotted skimmer', 'red rock skimmer', 'flame skimmer', 'neon skimmer', 'roseate skimmer',
    'painted skimmer', 'golden-winged skimmer', 'bleached skimmer', 'epaulet skimmer', 'great blue skimmer', 'spangled skimmer', 'comanche skimmer', 'blue dasher', 'eastern pondhawk', 'great pondhawk',
    'double-striped bluet', 'atlantic bluet', 'azure bluet', 'big bluet', 'boreal bluet', 'taiga bluet', 'orange bluet', 'marsh bluet', 'cherry bluet', 'stream bluet',
    
    // Additional North American Wildlife
    'spotted salamander', 'blue spotted salamander', 'smallmouth bass', 'spotted bass', 'rock bass', 'white bass', 'yellow bass', 'striped bass', 'white perch', 'northern pike',
    'muskellunge', 'tiger musky', 'chain pickerel', 'grass pickerel', 'redfin pickerel', 'bluegill', 'pumpkinseed', 'redear sunfish', 'spotted sunfish', 'longear sunfish',
    'orangespotted sunfish', 'green sunfish', 'redbreast sunfish', 'warmouth', 'dollar sunfish', 'bantam sunfish', 'spring pygmy sunfish', 'everglades pygmy sunfish', 'blackbanded sunfish', 'banded sunfish',
    'mud sunfish', 'shadow bass', 'brook trout', 'brown trout', 'rainbow trout', 'cutthroat trout', 'golden trout', 'apache trout', 'gila trout', 'lake trout',
    'bull trout', 'dolly varden', 'arctic char', 'brook char', 'splake', 'tiger trout', 'coho salmon', 'chinook salmon', 'sockeye salmon', 'pink salmon',
    'chum salmon', 'atlantic salmon', 'landlocked salmon', 'kokanee salmon', 'mountain whitefish', 'lake whitefish', 'round whitefish', 'cisco', 'lake herring', 'bloater',
    'shortjaw cisco', 'kiyi', 'blackfin cisco', 'inconnu', 'arctic grayling', 'american shad', 'hickory shad', 'alabama shad', 'skipjack herring', 'alewife',
    'blueback herring', 'gizzard shad', 'threadfin shad', 'american eel', 'moray eel', 'conger eel', 'garden eel', 'snake eel', 'brook lamprey', 'chestnut lamprey',
    'least brook lamprey', 'mountain brook lamprey', 'northern brook lamprey', 'ohio lamprey', 'southern brook lamprey', 'silver lamprey', 'sea lamprey', 'pacific lamprey', 'western brook lamprey', 'western river lamprey',
    'paddlefish', 'american paddlefish', 'chinese paddlefish', 'lake sturgeon', 'white sturgeon', 'green sturgeon', 'atlantic sturgeon', 'gulf sturgeon', 'shortnose sturgeon', 'pallid sturgeon',
    'shovelnose sturgeon', 'alabama sturgeon', 'alligator gar', 'spotted gar', 'longnose gar', 'shortnose gar', 'florida gar', 'tropical gar', 'cuban gar', 'bowfin',
    'burbot', 'white catfish', 'black bullhead', 'yellow bullhead', 'brown bullhead', 'snail bullhead', 'flathead catfish', 'blue catfish', 'channel catfish', 'headwater catfish',
    'yaqui catfish', 'white river spinedace', 'little colorado spinedace', 'virgin river spinedace', 'big river stingray', 'colorado river toad', 'sonoran green toad', 'great plains toad', 'canadian toad', 'gulf coast toad',
    
    // Additional Coral Reef Fish
    'yellowtail damselfish', 'sergeant major', 'threespot damselfish', 'beau gregory', 'dusky damselfish', 'cocoa damselfish', 'longfin damselfish', 'honey damselfish', 'bicolor damselfish', 'yellowtail reeffish',
    'blue chromis', 'brown chromis', 'purple reeffish', 'sunkiss chromis', 'blue reef chromis', 'green chromis', 'spanish hogfish', 'creole wrasse', 'slippery dick', 'bluehead wrasse',
    'clown wrasse', 'yellowhead wrasse', 'yellowcheek wrasse', 'puddingwife wrasse', 'rainbow wrasse', 'painted wrasse', 'dwarf wrasse', 'greenbanded wrasse', 'blackear wrasse', 'rosy razorfish',
    'pearly razorfish', 'green razorfish', 'peacock wrasse', 'masked wrasse', 'terminal wrasse', 'saddle wrasse', 'psychedelic wrasse', 'redside wrasse', 'surge wrasse', 'sunset wrasse',
    'four-eye butterflyfish', 'spotfin butterflyfish', 'banded butterflyfish', 'reef butterflyfish', 'longsnout butterflyfish', 'bank butterflyfish', 'foureye butterflyfish', 'caribbean longsnout', 'dusky butterflyfish', 'threadfin butterflyfish',
    'racoon butterflyfish', 'saddleback butterflyfish', 'oval butterflyfish', 'teardrop butterflyfish', 'pyramid butterflyfish', 'milletseed butterflyfish', 'peppered butterflyfish', 'sunset butterflyfish', 'ornate butterflyfish', 'scrawled butterflyfish',
    'queen angelfish', 'blue angelfish', 'french angelfish', 'gray angelfish', 'rock beauty', 'cherubfish', 'flameback angelfish', 'yellowface angelfish', 'blueface angelfish', 'emperor angelfish',
    'royal angelfish', 'regal angelfish', 'semicircle angelfish', 'scribbled angelfish', 'koran angelfish', 'majestic angelfish', 'three-spot angelfish', 'purple moon angelfish', 'blue ring angelfish', 'cream angelfish',
    'blue hamlet', 'barred hamlet', 'butter hamlet', 'golden hamlet', 'yellowbelly hamlet', 'yellowtail hamlet', 'shy hamlet', 'indigo hamlet', 'masked hamlet', 'tan hamlet',
    'mutton hamlet', 'black hamlet', 'tobacco fish', 'red hind', 'rock hind', 'speckled hind', 'yellowedge grouper', 'snowy grouper', 'warsaw grouper', 'yellowmouth grouper',
    
    // Additional Tropical Fish
    'sailfin tang', 'powder blue tang', 'yellow tang', 'purple tang', 'achilles tang', 'clown tang', 'naso tang', 'unicorn tang', 'lipstick tang', 'mimic tang',
    'convict tang', 'orangeshoulder tang', 'chocolate tang', 'goldrim tang', 'scopas tang', 'tomini tang', 'yellow eye tang', 'fowler tang', 'bristletooth tang', 'twospot bristletooth',
    'green birdmouth wrasse', 'black leopard wrasse', 'christmas wrasse', 'checkerboard wrasse', 'eightline wrasse', 'ornate wrasse', 'red coris wrasse', 'yellowtail coris', 'formosan wrasse', 'bluestreak cleaner wrasse',
    'lyretail wrasse', 'moon wrasse', 'yellowtail wrasse', 'pearl wrasse', 'pastel ring wrasse', 'red margin fairy wrasse', 'lubbock fairy wrasse', 'social fairy wrasse', 'carpenter flasher wrasse', 'mccosker flasher wrasse',
    'firefish goby', 'purple firefish', 'scissortail dartfish', 'zebra dartfish', 'decorated dartfish', 'blue gudgeon dartfish', 'sleeper blue dot goby', 'watchman goby', 'yellow watchman goby', 'diamond watchman goby',
    'spotted watchman goby', 'pink spotted watchman', 'randall pistol goby', 'dracula goby', 'court jester goby', 'clown goby', 'green clown goby', 'yellow clown goby', 'black clown goby', 'citron clown goby',
    'neon goby', 'sharknose goby', 'orangespotted goby', 'catalina goby', 'twospot goby', 'panda goby', 'redhead goby', 'orangemarked goby', 'steinitz goby', 'wheeler goby',
    'mandarinfish', 'spotted mandarin', 'green mandarin', 'red mandarin', 'psychedelic mandarin', 'ruby dragonet', 'picturesque dragonet', 'fingered dragonet', 'starry dragonet', 'scooter blenny',
    'lawnmower blenny', 'starry blenny', 'bicolor blenny', 'flametail blenny', 'striped blenny', 'midas blenny', 'canary blenny', 'golden blenny', 'red sea mimic blenny', 'smith blenny',
    'sailfin blenny', 'linear blenny', 'tailspot blenny', 'blackline fangblenny', 'bluestriped fangblenny', 'piano fangblenny', 'yellow fangblenny', 'striped poi son fangblenny', 'harptail blenny', 'pink streaked wrasse',
    
    // Additional Deep Sea Creatures
    'fangtooth fish', 'common fangtooth', 'shorthorn fangtooth', 'viperfish', 'sloane viperfish', 'pacific viperfish', 'black dragonfish', 'barbeled dragonfish', 'scaleless dragonfish', 'stoplight loosejaw',
    'hatchetfish', 'silver hatchetfish', 'lovely hatchetfish', 'spurred hatchetfish', 'highlight hatchetfish', 'pacific hatchetfish', 'giant hatchetfish', 'barreleye', 'brownsnout spookfish', 'glasshead barreleye',
    'lanternfish', 'bigfin lanternfish', 'diaphus', 'headlight fish', 'pinpoint lampfish', 'spotted lanternfish', 'metallic lanternfish', 'blue lanternfish', 'bigscale lanternfish', 'california headlight fish',
    'pearleye', 'pacific pearleye', 'northern pearleye', 'sabertooth fish', 'northern sabertooth', 'longnose sabertooth', 'slender sabertooth', 'tripodfish', 'abyssal spiderfish', 'telescopefish',
    'tube-eye', 'glowing bristlemouth', 'veiled anglemouth', 'bristle mouth', 'grey bristlemouth', 'lightfish', 'prickly javelin fish', 'shortnose greeneye', 'longnose greeneye', 'javelin fish',
    'pelican eel', 'gulper eel', 'umbrella mouth gulper', 'abyssal eel', 'snipe eel', 'slender snipe eel', 'whiptail gulper', 'bobtail snipe eel', 'cutthroat eel', 'saw-tooth eel',
    
    // Additional Arctic & Antarctic Wildlife  
    'antarctic silverfish', 'blackfin icefish', 'mackerel icefish', 'humped rockcod', 'antarctic rockcod', 'bald notothen', 'emerald rockcod', 'antarctic toothfish', 'patagonian toothfish', 'marbled rockcod',
    'scaled rockcod', 'yellow rockcod', 'grey rockcod', 'dusky rockcod', 'ocellated icefish', 'south georgia icefish', 'sno wflake moray cod', 'splitfin plunderfish', 'longfin plunderfish', 'grey plunderfish',
    'arctic char', 'arctic cod', 'polar cod', 'boreogadus', 'arctic flounder', 'arctic staghorn sculpin', 'fourhorn sculpin', 'arctic hookear sculpin', 'ribbed sculpin', 'bigeye sculpin',
    'longhorn sculpin', 'shorthorn sculpin', 'arctic shanny', 'daubed shanny', 'radiated shanny', 'stout eelblenny', 'slender eelblenny', 'arctic eelpout', 'pale eelpout', 'polar eelpout',
    'adolf jensen eelpout', 'schmidt eelpout', 'blackbelly eelpout', 'snailfish', 'variegated snailfish', 'gelatinous snailfish', 'dusky snailfish', 'polar snailfish', 'tadpole snailfish', 'kelp snailfish',
    
    // Additional Freshwater Tropical Fish
    'neon tetra', 'cardinal tetra', 'black neon tetra', 'green neon tetra', 'ember tetra', 'flame tetra', 'bleeding heart tetra', 'serpae tetra', 'red phantom tetra', 'black phantom tetra',
    'lemon tetra', 'congo tetra', 'buenos aires tetra', 'bloodfin tetra', 'diamond tetra', 'emperor tetra', 'rummy nose tetra', 'firehead tetra', 'glowlight tetra', 'head and tail light tetra',
    'pristella tetra', 'silver tip tetra', 'kitty tetra', 'black line tetra', 'penguin tetra', 'bentos tetra', 'loreto tetra', 'dawn tetra', 'splash tetra', 'cochu blue tetra',
    'zebra danio', 'leopard danio', 'pearl danio', 'spotted danio', 'giant danio', 'gold danio', 'malabar danio', 'celestial pearl danio', 'glowlight danio', 'rosy danio',
    'gold barb', 'rosy barb', 'tiger barb', 'cherry barb', 'checker barb', 'denison barb', 'odessa barb', 'pentazona barb', 'five-banded barb', 'black ruby barb',
    'silver shark', 'bala shark', 'rainbow shark', 'red-tailed black shark', 'red-finned cigar shark', 'flying fox', 'siamese algae eater', 'chinese algae eater', 'zebra loach', 'yoyo loach',
    'clown loach', 'skunk loach', 'dojo loach', 'weather loach', 'kuhli loach', 'black kuhli loach', 'silver kuhli loach', 'chain loach', 'pakistani loach', 'dwarf chain loach',
    'angelfish', 'altum angelfish', 'leopard angelfish', 'marble angelfish', 'koi angelfish', 'zebra angelfish', 'black lace angelfish', 'silver angelfish', 'gold angelfish', 'platinum angelfish',
    'discus', 'red discus', 'blue discus', 'green discus', 'heckel discus', 'brown discus', 'pigeon blood discus', 'leopard discus', 'snake skin discus', 'checkerboard discus',
    'oscar fish', 'tiger oscar', 'red oscar', 'albino oscar', 'lemon oscar', 'black oscar', 'wild oscar', 'severum', 'green severum', 'gold severum',
    
    // Additional Cichlids
    'electric blue ram', 'german blue ram', 'gold ram', 'balloon ram', 'bolivian ram', 'agassizi cichlid', 'cockatoo cichlid', 'macmaster cichlid', 'blue acara', 'electric blue acara',
    'green terror', 'red terror', 'convict cichlid', 'pink convict', 'jack dempsey', 'electric blue jack dempsey', 'texas cichlid', 'pearl cichlid', 'port acara', 'keyhole cichlid',
    'firemouth cichlid', 'sajica cichlid', 'salvini cichlid', 'rainbow cichlid', 'nicaraguan cichlid', 'blue-eyed cichlid', 'red devil', 'midas cichlid', 'flowerhorn', 'parrot cichlid',
    'jaguar cichlid', 'wolf cichlid', 'dovii', 'red bay snook cichlid', 'festae', 'umbee cichlid', 'yellow jacket cichlid', 'rio grande cichlid', 'peacock bass', 'butterfly peacock',
    'malawi eye-biter', 'venustus', 'taiwan reef', 'red empress', 'sunshine peacock', 'dragon blood peacock', 'aulonocara', 'ob peacock', 'flavescent peacock', 'ruby red peacock',
    'electric yellow', 'red zebra', 'kenyi cichlid', 'ice blue zebra', 'orange blotch zebra', 'snow white socolofi', 'red top zebra', 'cobalt zebra', 'lombardi', 'rustry cichlid',
    'demanson', 'maingano', 'acei cichlid', 'yellow tail acei', 'frontosa', 'blue mpimbwe', 'six-stripe frontosa', 'burundi frontosa', 'calvus', 'black calvus',
    'compressiceps', 'gold compressiceps', 'julie', 'masked julie', 'dickfeld julie', 'brevis', 'multi', 'leleupi', 'cylindricus', 'brichardi',
    
    // Additional Invertebrates - Spiders
    'garden spider', 'black widow spider', 'brown widow', 'red widow', 'northern widow', 'western widow', 'brown recluse', 'desert recluse', 'arizona recluse', 'chile recluse',
    'mediterranean recluse', 'wolf spider', 'carolina wolf spider', 'rabid wolf spider', 'hogna', 'tarantula wolf spider', 'fishing spider', 'six-spotted fishing spider', 'striped fishing spider', 'dark fishing spider',
    'nursery web spider', 'grass spider', 'funnel weaver', 'barn funnel weaver', 'hobo spider', 'giant house spider', 'tegenaria', 'domestic house spider', 'cellar spider', 'long-bodied cellar spider',
    'daddy long-legs spider', 'marbled cellar spider', 'orb weaver', 'golden orb weaver', 'banana spider', 'writing spider', 'argiope', 'banded garden spider', 'silver argiope', 'spotted orbweaver',
    'furrow spider', 'shamrock spider', 'cat-faced spider', 'marbled orbweaver', 'arabesque orbweaver', 'triangulate orbweaver', 'basilica spider', 'arrowshaped micrathena', 'spiny orbweaver', 'jewel spider',
    'crab spider', 'goldenrod crab spider', 'whitebanded crab spider', 'northern crab spider', 'bark crab spider', 'ground crab spider', 'running crab spider', 'jumping spider', 'bold jumping spider', 'zebra spider',
    'twin-flagged jumping spider', 'pantropical jumping spider', 'emerald jumping spider', 'bronze jumping spider', 'tan jumping spider', 'apache jumping spider', 'dimorphic jumping spider', 'spitting spider', 'woodlouse spider', 'long-legged sac spider',
    
    // Additional Sea Creatures
    'sea pen', 'orange sea pen', 'phosphorescent sea pen', 'slender sea pen', 'stiff sea pen', 'white sea pen', 'sea whip', 'golden sea whip', 'colorful sea whip', 'bent sea rod',
    'knobby sea rod', 'deepwater sea rod', 'shelf-edge sea rod', 'swollen-knob candelabrum', 'slimy sea plume', 'angular sea whip', 'warty sea rod', 'corky sea finger', 'porous sea rod', 'black sea rod',
    
    // Final Additional Species to Reach 5000+
    'atlantic puffin', 'horned puffin', 'tufted puffin', 'rhinoceros auklet', 'cassin auklet', 'least auklet', 'whiskered auklet', 'crested auklet', 'parakeet auklet', 'ancient murrelet',
    'marbled murrelet', 'kittlitz murrelet', 'xantus murrelet', 'craveri murrelet', 'long-billed murrelet', 'pigeon guillemot', 'black guillemot', 'spectacled guillemot', 'common murre', 'thick-billed murre',
    'razorbill', 'dovekie', 'atlantic tern', 'arctic tern', 'roseate tern', 'common tern', 'forster tern', 'least tern', 'black tern', 'white-winged tern',
    'caspian tern', 'royal tern', 'sandwich tern', 'elegant tern', 'black skimmer', 'pomarine jaeger', 'parasitic jaeger', 'long-tailed jaeger', 'south polar skua', 'great skua',
    'laughing gull', 'franklin gull', 'bonaparte gull', 'black-headed gull', 'little gull', 'ross gull', 'sabine gull', 'black-legged kittiwake', 'red-legged kittiwake', 'ivory gull',
    'glaucous gull', 'iceland gull', 'thayer gull', 'glaucous-winged gull', 'western gull', 'yellow-footed gull', 'slaty-backed gull', 'california gull', 'herring gull', 'lesser black-backed gull',
    'great black-backed gull', 'kelp gull', 'heermann gull', 'mew gull', 'ring-billed gull', 'black-tailed gull', 'belcher gull', 'olrog gull', 'white stork', 'black stork',
    'maguari stork', 'oriental white stork', 'woolly-necked stork', 'storm stork', 'asian openbill', 'african openbill', 'saddle-billed stork', 'yellow-billed stork', 'painted stork', 'milky stork',
    'wood stork', 'greater flamingo', 'lesser flamingo', 'chilean flamingo', 'andean flamingo', 'puna flamingo', 'american flamingo', 'scarlet ibis', 'glossy ibis', 'white-faced ibis',
    'puna ibis', 'black-faced ibis', 'buff-necked ibis', 'green ibis', 'plumbeous ibis', 'hadada ibis', 'wattled ibis', 'olive ibis', 'spot-breasted ibis', 'madagascar ibis',
    'roseate spoonbill', 'eurasian spoonbill', 'african spoonbill', 'black-faced spoonbill', 'yellow-billed spoonbill', 'royal spoonbill', 'great blue heron', 'great white heron', 'grey heron', 'purple heron',
    'goliath heron', 'black-headed heron', 'cocoi heron', 'white-necked heron', 'pied heron', 'white-bellied heron', 'great egret', 'intermediate egret', 'snowy egret', 'little egret',
    'western reef heron', 'reddish egret', 'tricolored heron', 'little blue heron', 'black heron', 'cattle egret', 'squacco heron', 'indian pond heron', 'chinese pond heron', 'javan pond heron',
    'green heron', 'striated heron', 'lava heron', 'black-crowned night heron', 'yellow-crowned night heron', 'nankeen night heron', 'white-backed night heron', 'boat-billed heron', 'whistling heron', 'capped heron',
    'american bittern', 'eurasian bittern', 'australasian bittern', 'south american bittern', 'pinnated bittern', 'least bittern', 'little bittern', 'yellow bittern', 'schrenck bittern', 'cinnamon bittern',
    'black bittern', 'stripe-backed bittern', 'dwarf bittern', 'zigzag heron', 'sandhill crane', 'whooping crane', 'common crane', 'hooded crane', 'black-necked crane', 'red-crowned crane',
    'siberian crane', 'white-naped crane', 'sarus crane', 'brolga crane', 'blue crane', 'wattled crane', 'demoiselle crane', 'grey crowned crane', 'black crowned crane', 'limpkin',
    'american coot', 'eurasian coot', 'red-knobbed coot', 'white-winged coot', 'giant coot', 'horned coot', 'caribbean coot', 'hawaiian coot', 'common moorhen', 'dusky moorhen',
    'lesser moorhen', 'common gallinule', 'purple gallinule', 'azure gallinule', 'american purple gallinule', 'allen gallinule', 'red-gartered coot', 'purple swamphen', 'african swamphen', 'grey-headed swamphen',
    'black-tailed native-hen', 'tasmanian native-hen', 'sora rail', 'virginia rail', 'clapper rail', 'king rail', 'ridgway rail', 'aztec rail', 'yellow rail', 'black rail',
    'california black rail', 'eastern black rail', 'corn crake', 'water rail', 'african rail', 'madagas car rail', 'slaty-breasted rail', 'spotted crake', 'baillon crake', 'little crake',
    'grey-throated rail', 'african crake', 'striped crake', 'red-necked crake', 'band-bellied crake', 'white-browed crake', 'rufous-sided crake', 'black crake', 'okinawa rail', 'woodford rail',
    'bar-winged rail', 'inaccessible island rail', 'invisible rail', 'new guinea flightless rail', 'weka', 'buff-banded rail', 'guam rail', 'american avocet', 'pied avocet', 'red-necked avocet',
    'andean avocet', 'black-winged stilt', 'black-necked stilt', 'white-headed stilt', 'pied stilt', 'banded stilt', 'black stilt', 'american oystercatcher', 'eurasian oystercatcher', 'african black oystercatcher',
    'american black oystercatcher', 'variable oystercatcher', 'chatham oystercatcher', 'magellanic oystercatcher', 'blackish oystercatcher', 'sooty oystercatcher', 'pied oystercatcher', 'canarian oystercatcher', 'northern lapwing', 'southern lapwing',
    'spur-winged lapwing', 'red-wattled lapwing', 'yellow-wattled lapwing', 'white-tailed lapwing', 'grey-headed lapwing', 'masked lapwing', 'banded lapwing', 'crowned lapwing', 'senegal lapwing', 'black-headed lapwing',
    'spot-breasted lapwing', 'brown-chested lapwing', 'long-toed lapwing', 'blacksmith lapwing', 'sociable lapwing', 'white-tailed plover', 'killdeer', 'common ringed plover', 'semipalmated plover', 'long-billed plover',
    'little ringed plover', 'wilson plover', 'kentish plover', 'snowy plover', 'piping plover', 'madagascar plover', 'kittlitz plover', 'st helena plover', 'two-banded plover', 'double-banded plover',
    'lesser sand plover', 'greater sand plover', 'caspian plover', 'oriental plover', 'eurasian dotterel', 'rufous-chested dotterel', 'mountain plover', 'tawny-throated dotterel', 'hooded plover', 'shore plover', 'wrybill',
    
    // Additional Songbirds & Passerines - 2500+ new animals
    'american robin', 'european robin', 'clay-colored robin', 'rufous-backed robin', 'white-throated robin', 'black robin', 'eastern bluebird', 'western bluebird', 'mountain bluebird', 'varied thrush',
    'hermit thrush', 'wood thrush', 'swainson thrush', 'gray-cheeked thrush', 'veery', 'northern wheatear', 'european blackbird', 'common blackbird', 'ring ouzel', 'song thrush',
    'mistle thrush', 'redwing', 'fieldfare', 'american dipper', 'white-throated dipper', 'brown dipper', 'blue mockingbird', 'northern mockingbird', 'tropical mockingbird', 'bahama mockingbird',
    'brown thrasher', 'long-billed thrasher', 'sage thrasher', 'curve-billed thrasher', 'california thrasher', 'crissal thrasher', 'le conte thrasher', 'bendire thrasher', 'gray catbird', 'black catbird',
    'european starling', 'common starling', 'spotless starling', 'common myna', 'bank myna', 'jungle myna', 'hill myna', 'bali myna', 'rothschild myna', 'superb starling',
    'golden-breasted starling', 'violet-backed starling', 'red-winged starling', 'wattled starling', 'oxpecker', 'red-billed oxpecker', 'yellow-billed oxpecker', 'house sparrow', 'eurasian tree sparrow', 'spanish sparrow',
    'italian sparrow', 'cinnamon sparrow', 'russet sparrow', 'cape sparrow', 'great sparrow', 'southern grey-headed sparrow', 'chipping sparrow', 'clay-colored sparrow', 'field sparrow', 'brewer sparrow',
    'black-chinned sparrow', 'vesper sparrow', 'lark sparrow', 'black-throated sparrow', 'sage sparrow', 'five-striped sparrow', 'lark bunting', 'savannah sparrow', 'grasshopper sparrow', 'baird sparrow',
    'henslow sparrow', 'le conte sparrow', 'nelson sparrow', 'seaside sparrow', 'saltmarsh sparrow', 'fox sparrow', 'song sparrow', 'lincoln sparrow', 'swamp sparrow', 'white-throated sparrow',
    'white-crowned sparrow', 'golden-crowned sparrow', 'harris sparrow', 'dark-eyed junco', 'yellow-eyed junco', 'black phoebe', 'eastern phoebe', 'say phoebe', 'vermilion flycatcher', 'ash-throated flycatcher',
    'great crested flycatcher', 'brown-crested flycatcher', 'tropical kingbird', 'western kingbird', 'eastern kingbird', 'thick-billed kingbird', 'cassin kingbird', 'couch kingbird', 'scissor-tailed flycatcher', 'fork-tailed flycatcher',
    'great kiskadee', 'boat-billed flycatcher', 'social flycatcher', 'sulphur-bellied flycatcher', 'piratic flycatcher', 'olive-sided flycatcher', 'greater pewee', 'western wood-pewee', 'eastern wood-pewee', 'yellow-bellied flycatcher',
    'acadian flycatcher', 'alder flycatcher', 'willow flycatcher', 'least flycatcher', 'hammond flycatcher', 'dusky flycatcher', 'gray flycatcher', 'pacific-slope flycatcher', 'cordilleran flycatcher', 'buff-breasted flycatcher',
    'northern beardless-tyrannulet', 'rose-throated becard', 'masked tityra', 'common tody-flycatcher', 'slate-headed tody-flycatcher', 'black-capped vireo', 'white-eyed vireo', 'bell vireo', 'gray vireo', 'yellow-throated vireo',
    'plumbeous vireo', 'cassin vireo', 'blue-headed vireo', 'hutton vireo', 'warbling vireo', 'philadelphia vireo', 'red-eyed vireo', 'yellow-green vireo', 'black-whiskered vireo', 'canada jay',
    'blue jay', 'steller jay', 'florida scrub jay', 'island scrub jay', 'western scrub jay', 'california scrub jay', 'woodhouse scrub jay', 'mexican jay', 'pinyon jay', 'clark nutcracker',
    'black-billed magpie', 'yellow-billed magpie', 'eurasian magpie', 'azure-winged magpie', 'american crow', 'fish crow', 'northwestern crow', 'tamaulipas crow', 'carrion crow', 'hooded crow',
    'common raven', 'chihuahuan raven', 'white-necked raven', 'thick-billed raven', 'fan-tailed raven', 'australian raven', 'little raven', 'forest raven', 'jackdaw', 'daurian jackdaw',
    'rook', 'house crow', 'pied crow', 'somali crow', 'horned lark', 'shore lark', 'purple martin', 'cuban martin', 'caribbean martin', 'gray-breasted martin',
    'southern martin', 'brown-chested martin', 'tree swallow', 'violet-green swallow', 'bahama swallow', 'mangrove swallow', 'white-winged swallow', 'black-capped swallow', 'bank swallow', 'sand martin',
    'barn swallow', 'cliff swallow', 'cave swallow', 'northern rough-winged swallow', 'southern rough-winged swallow', 'house martin', 'common house martin', 'asian house martin', 'crag martin', 'rock martin',
    'black-throated blue warbler', 'yellow-rumped warbler', 'myrtle warbler', 'audubon warbler', 'townsend warbler', 'hermit warbler', 'golden-cheeked warbler', 'black-throated green warbler', 'blackburnian warbler', 'yellow-throated warbler',
    'grace warbler', 'prairie warbler', 'palm warbler', 'pine warbler', 'bay-breasted warbler', 'blackpoll warbler', 'cerulean warbler', 'cape may warbler', 'chestnut-sided warbler', 'magnolia warbler',
    'tennessee warbler', 'orange-crowned warbler', 'nashville warbler', 'virginia warbler', 'colima warbler', 'lucy warbler', 'northern parula', 'tropical parula', 'yellow warbler', 'chestnut-sided warbler',
    'mangrove warbler', 'american redstart', 'prothonotary warbler', 'worm-eating warbler', 'swainson warbler', 'ovenbird', 'northern waterthrush', 'louisiana waterthrush', 'kentucky warbler', 'connecticut warbler',
    'macgillivray warbler', 'mourning warbler', 'common yellowthroat', 'gray-crowned yellowthroat', 'hooded warbler', 'wilson warbler', 'canada warbler', 'painted redstart', 'slate-throated redstart', 'fan-tailed warbler',
    'yellow-breasted chat', 'olive warbler', 'red-faced warbler', 'red warbler', 'pink-headed warbler', 'golden-crowned warbler', 'rufous-capped warbler', 'golden-browed warbler', 'crescent-chested warbler', 'flame-throated warbler',
    'bananaquit', 'white-collared seedeater', 'yellow-bellied seedeater', 'rusty-collared seedeater', 'lesson seedeater', 'slate-colored seedeater', 'variable seedeater', 'black-and-white seedeater', 'lined seedeater', 'band-tailed seedeater',
    'grassland yellow-finch', 'saffron finch', 'grassland sparrow', 'rufous-collared sparrow', 'yellow-browed sparrow', 'black-striped sparrow', 'orange-billed sparrow', 'olive sparrow', 'green-tailed towhee', 'spotted towhee',
    'eastern towhee', 'canyon towhee', 'california towhee', 'abert towhee', 'white-throated towhee', 'collared towhee', 'red-eyed towhee', 'pipilo', 'rufous-crowned sparrow', 'five-striped sparrow',
    'american tree sparrow', 'chipping sparrow', 'clay-colored sparrow', 'brewer sparrow', 'field sparrow', 'worthen sparrow', 'black-chinned sparrow', 'vesper sparrow', 'lark sparrow', 'black-throated sparrow',
    'sage sparrow', 'bell sparrow', 'sagebrush sparrow', 'botteria sparrow', 'cassin sparrow', 'bachman sparrow', 'grasshopper sparrow', 'le conte sparrow', 'nelson sparrow', 'henslow sparrow',
    'hepatic tanager', 'summer tanager', 'scarlet tanager', 'western tanager', 'flame-colored tanager', 'white-winged tanager', 'red-crowned ant-tanager', 'red-throated ant-tanager', 'black-cheeked ant-tanager', 'sooty ant-tanager',
    'blue-gray tanager', 'palm tanager', 'blue-capped tanager', 'blue-necked tanager', 'golden-hooded tanager', 'speckled tanager', 'spotted tanager', 'bay-headed tanager', 'rufous-winged tanager', 'fulvous-crested tanager',
    'silver-throated tanager', 'green honeycreeper', 'shining honeycreeper', 'red-legged honeycreeper', 'purple honeycreeper', 'blue dacnis', 'scarlet-thighed dacnis', 'yellow-bellied dacnis', 'turquoise dacnis', 'white-bellied dacnis',
    'blue-black grassquit', 'yellow-faced grassquit', 'dull-colored grassquit', 'sooty grassquit', 'cuban grassquit', 'yellow-shouldered grassquit', 'black-faced grassquit', 'slate-colored grosbeak', 'rose-breasted grosbeak', 'black-headed grosbeak',
    'blue grosbeak', 'lazuli bunting', 'indigo bunting', 'varied bunting', 'painted bunting', 'orange-breasted bunting', 'blue bunting', 'yellow grosbeak', 'golden-bellied grosbeak', 'black-backed grosbeak',
    'northern cardinal', 'vermilion cardinal', 'yellow cardinal', 'red-crested cardinal', 'yellow-billed cardinal', 'red-capped cardinal', 'crimson-fronted cardinal', 'pyrrhuloxia', 'dickcissel', 'red-cowled cardinal',
    'bobolink', 'red-winged blackbird', 'tricolored blackbird', 'tawny-shouldered blackbird', 'red-shouldered blackbird', 'red-breasted blackbird', 'white-browed blackbird', 'yellow-headed blackbird', 'yellow-hooded blackbird', 'saffron-cowled blackbird',
    'eastern meadowlark', 'western meadowlark', 'lilian meadowlark', 'pampas meadowlark', 'long-tailed meadowlark', 'peruvian meadowlark', 'white-browed meadowlark', 'red-breasted meadowlark', 'lesser red-breasted meadowlark', 'cuban blackbird',
    'melodious blackbird', 'scrub blackbird', 'common grackle', 'boat-tailed grackle', 'great-tailed grackle', 'nicaraguan grackle', 'carib grackle', 'greater antillean grackle', 'shiny cowbird', 'bronzed cowbird',
    'brown-headed cowbird', 'screaming cowbird', 'giant cowbird', 'bay-winged cowbird', 'orchard oriole', 'hooded oriole', 'streak-backed oriole', 'bullock oriole', 'baltimore oriole', 'black-backed oriole',
    'audubon oriole', 'altamira oriole', 'spotted-breasted oriole', 'orange oriole', 'yellow-backed oriole', 'orange-crowned oriole', 'yellow oriole', 'white-edged oriole', 'scott oriole', 'black-vented oriole',
    'bar-winged oriole', 'black-cowled oriole', 'yellow-tailed oriole', 'troupial', 'orange-backed troupial', 'venezuelan troupial', 'campo troupial', 'jamaican oriole', 'orange-shouldered blackbird', 'yellow-shouldered blackbird',
    'epaulet oriole', 'moriche oriole', 'chopi blackbird', 'forbes blackbird', 'solitary black cacique', 'ecuadorian cacique', 'scarlet-rumped cacique', 'subtropical cacique', 'golden-winged cacique', 'mountain cacique',
    'selva cacique', 'casqued cacique', 'yellow-rumped cacique', 'red-rumped cacique', 'crested oropendola', 'green oropendola', 'dusky-green oropendola', 'chestnut-headed oropendola', 'russet-backed oropendola', 'montezuma oropendola',
    'black oropendola', 'band-tailed oropendola', 'casqued oropendola', 'amazonian oropendola', 'para oropendola', 'european goldfinch', 'oriental greenfinch', 'eurasian siskin', 'pine siskin', 'black-capped siskin',
    'american goldfinch', 'lesser goldfinch', 'lawrence goldfinch', 'common redpoll', 'hoary redpoll', 'twite', 'eurasian linnet', 'common linnet', 'warsangli linnet', 'yemen linnet',
    'house finch', 'purple finch', 'cassin finch', 'beautiful rosefinch', 'blanford rosefinch', 'common rosefinch', 'scarlet rosefinch', 'pine grosbeak', 'gray-crowned rosy-finch', 'black rosy-finch',
    'brown-capped rosy-finch', 'asian rosy-finch', 'evening grosbeak', 'hooded grosbeak', 'hawfinch', 'yellow-billed grosbeak', 'white-winged grosbeak', 'crimson-browed finch', 'red crossbill', 'cassia crossbill',
    'scottish crossbill', 'parrot crossbill', 'white-winged crossbill', 'two-barred crossbill', 'bullfinch', 'eurasian bullfinch', 'azores bullfinch', 'brown bullfinch', 'orange bullfinch', 'grey-headed bullfinch',
    'pileated woodpecker', 'lineated woodpecker', 'red-bellied woodpecker', 'golden-fronted woodpecker', 'gila woodpecker', 'red-headed woodpecker', 'acorn woodpecker', 'lewis woodpecker', 'williamson sapsucker', 'yellow-bellied sapsucker',
    'red-naped sapsucker', 'red-breasted sapsucker', 'ladder-backed woodpecker', 'nuttall woodpecker', 'downy woodpecker', 'hairy woodpecker', 'arizona woodpecker', 'red-cockaded woodpecker', 'white-headed woodpecker', 'black-backed woodpecker',
    'american three-toed woodpecker', 'northern flicker', 'gilded flicker', 'red-shafted flicker', 'yellow-shafted flicker', 'guatemalan flicker', 'fernandina flicker', 'campo flicker', 'chilean flicker', 'andean flicker',
    'great spotted woodpecker', 'syrian woodpecker', 'white-backed woodpecker', 'lesser spotted woodpecker', 'middle spotted woodpecker', 'grey-headed woodpecker', 'european green woodpecker', 'iberian green woodpecker', 'black woodpecker', 'white-bellied woodpecker',
    'great slaty woodpecker', 'orange-backed woodpecker', 'buff-spotted woodpecker', 'brown-backed woodpecker', 'grey-and-buff woodpecker', 'rufous woodpecker', 'bamboo woodpecker', 'crimson-bellied woodpecker', 'yellow-crowned woodpecker', 'golden-naped woodpecker',
    'wryneck', 'eurasian wryneck', 'red-throated wryneck', 'rufous piculet', 'white-barred piculet', 'ochre-collared piculet', 'white-wedged piculet', 'rusty-necked piculet', 'bar-breasted piculet', 'plain-breasted piculet',
    'scaled piculet', 'white-bellied piculet', 'guianan piculet', 'golden-spangled piculet', 'spotted piculet', 'speckle-chested piculet', 'varzea piculet', 'white-browed piculet', 'tawny piculet', 'ochraceous piculet',
    'ruby-throated hummingbird', 'black-chinned hummingbird', 'anna hummingbird', 'costa hummingbird', 'calliope hummingbird', 'rufous hummingbird', 'allen hummingbird', 'broad-tailed hummingbird', 'blue-throated mountain-gem', 'magnificent hummingbird',
    'lucifer hummingbird', 'broad-billed hummingbird', 'berylline hummingbird', 'buff-bellied hummingbird', 'violet-crowned hummingbird', 'white-eared hummingbird', 'xantus hummingbird', 'green violet-ear', 'mexican violet-ear', 'sparkling violet-ear',
    'green-breasted mango', 'black-throated mango', 'antillean mango', 'jamaican mango', 'green mango', 'purple-throated carib', 'green-throated carib', 'ruby-topaz hummingbird', 'antillean crested hummingbird', 'rufous-breasted hermit',
    'band-tailed barbthroat', 'bronzy hermit', 'grey-chinned hermit', 'pale-bellied hermit', 'white-whiskered hermit', 'green hermit', 'long-billed hermit', 'stripe-throated hermit', 'tawny-bellied hermit', 'koepcke hermit',
    'needle-billed hermit', 'straight-billed hermit', 'buff-tailed sicklebill', 'white-tipped sicklebill', 'rufous-breasted sabrewing', 'violet sabrewing', 'wedge-tailed sabrewing', 'buff-breasted sabrewing', 'rufous sabrewing', 'lazuline sabrewing',
    'white-necked jacobin', 'great sapphirewing', 'bronze-tailed plumeleteer', 'white-vented plumeleteer', 'crowned woodnymph', 'mexican woodnymph', 'emerald-bellied woodnymph', 'violet-bellied hummingbird', 'sparkling violetear', 'lesser violetear',
    'purple-crowned fairy', 'black-eared fairy', 'long-billed starthroat', 'stripe-breasted starthroat', 'blue-tufted starthroat', 'oasis hummingbird', 'peruvian sheartail', 'slender sheartail', 'mexican sheartail', 'sparkling-tailed hummingbird',
    'woodstar', 'purple-collared woodstar', 'white-bellied woodstar', 'little woodstar', 'gorgeted woodstar', 'chilean woodstar', 'short-tailed woodstar', 'slender-tailed woodstar', 'esmeraldas woodstar', 'bee hummingbird',
    'vervain hummingbird', 'bumblebee hummingbird', 'wine-throated hummingbird', 'purple-throated woodstar', 'magenta-throated woodstar', 'amethyst woodstar', 'blue-throated goldentail', 'tepui goldentail', 'white-tailed goldentail', 'green-tailed goldentail',
    'fiery-tailed awlbill', 'crimson topaz', 'fiery topaz', 'rainbow-bearded thornbill', 'bearded mountaineer', 'andean hillstar', 'chimborazo hillstar', 'white-sided hillstar', 'ecuadorian hillstar', 'black-breasted hillstar',
    'belted kingfisher', 'ringed kingfisher', 'green kingfisher', 'amazon kingfisher', 'american pygmy kingfisher', 'common kingfisher', 'european kingfisher', 'half-collared kingfisher', 'shining-blue kingfisher', 'malachite kingfisher',
    'madagascar kingfisher', 'white-bellied kingfisher', 'african pygmy kingfisher', 'asian emerald kingfisher', 'sacred kingfisher', 'collared kingfisher', 'white-throated kingfisher', 'black-capped kingfisher', 'woodland kingfisher', 'mangrove kingfisher',
    'blue-eared kingfisher', 'rufous-collared kingfisher', 'chocolate-backed kingfisher', 'grey-headed kingfisher', 'chestnut-bellied kingfisher', 'blue-breasted kingfisher', 'black-billed kingfisher', 'laughing kookaburra', 'blue-winged kookaburra', 'spangled kookaburra',
    'shovel-billed kookaburra', 'rufous-bellied kookaburra', 'stork-billed kingfisher', 'brown-winged kingfisher', 'ruddy kingfisher', 'banded kingfisher', 'pied kingfisher', 'crested kingfisher', 'giant kingfisher', 'megaceryle',
    'european bee-eater', 'blue-cheeked bee-eater', 'blue-tailed bee-eater', 'rainbow bee-eater', 'white-throated bee-eater', 'little bee-eater', 'blue-breasted bee-eater', 'cinnamon-chested bee-eater', 'swallow-tailed bee-eater', 'white-fronted bee-eater',
    'northern carmine bee-eater', 'southern carmine bee-eater', 'rosy bee-eater', 'somali bee-eater', 'red-bearded bee-eater', 'blue-bearded bee-eater', 'purple-bearded bee-eater', 'celebes bee-eater', 'black-headed bee-eater', 'blue-headed bee-eater',
    'european roller', 'lilac-breasted roller', 'abyssinian roller', 'racket-tailed roller', 'rufous-crowned roller', 'blue-bellied roller', 'broad-billed roller', 'dollar bird', 'oriental dollarbird', 'purple roller',
    'indian roller', 'indochinese roller', 'purple-winged roller', 'azure roller', 'cuckoo-roller', 'hoopoe', 'eurasian hoopoe', 'african hoopoe', 'madagascar hoopoe', 'wood hoopoe',
    'green wood hoopoe', 'violet wood hoopoe', 'black-billed wood hoopoe', 'white-headed wood hoopoe', 'forest wood hoopoe', 'black scimitarbill', 'abyssinian scimitarbill', 'common scimitarbill', 'hornbill', 'great hornbill',
    'rhinoceros hornbill', 'helmeted hornbill', 'rufous hornbill', 'wreathed hornbill', 'plain-pouched hornbill', 'wrinkled hornbill', 'black hornbill', 'white-crowned hornbill', 'malabar grey hornbill', 'sri lanka grey hornbill',
    'barn owl', 'western barn owl', 'eastern barn owl', 'american barn owl', 'andaman barn owl', 'australian barn owl', 'ashy-faced barn owl', 'greater sooty owl', 'lesser sooty owl', 'oriental bay owl',
    'congo bay owl', 'african grass owl', 'eastern grass owl', 'great horned owl', 'magellanic horned owl', 'lesser horned owl', 'snowy owl', 'great grey owl', 'lapland owl', 'tawny owl',
    'hume tawny owl', 'spotted wood owl', 'mottled wood owl', 'brown wood owl', 'african wood owl', 'ural owl', 'pere david owl', 'barred owl', 'fulvous owl', 'spotted owl',
    'northern spotted owl', 'california spotted owl', 'mexican spotted owl', 'long-eared owl', 'abyssinian long-eared owl', 'madagascar long-eared owl', 'short-eared owl', 'marsh owl', 'striped owl', 'stygian owl',
    'eastern screech owl', 'western screech owl', 'whiskered screech owl', 'pacific screech owl', 'tropical screech owl', 'vermiculated screech owl', 'guatemalan screech owl', 'middle american screech owl', 'balsas screech owl', 'cuban screech owl',
    'puerto rican screech owl', 'white-throated screech owl', 'bearded screech owl', 'rufescent screech owl', 'colombian screech owl', 'cinnamon screech owl', 'tawny-bellied screech owl', 'cloudforest screech owl', 'rufous-banded owl', 'black-banded owl',
    'eurasian pygmy owl', 'pearl-spotted pygmy owl', 'red-chested pygmy owl', 'ferruginous pygmy owl', 'northern pygmy owl', 'cuban pygmy owl', 'tamaulipas pygmy owl', 'central american pygmy owl', 'yungas pygmy owl', 'austral pygmy owl',
    'collared owlet', 'asian barred owlet', 'jungle owlet', 'javan owlet', 'chestnut-backed owlet', 'spotted owlet', 'forest owlet', 'long-whiskered owlet', 'elf owl', 'burrowing owl',
    'little owl', 'spotted little owl', 'athene noctua', 'boreal owl', 'tengmalm owl', 'northern saw-whet owl', 'unspotted saw-whet owl', 'buff-fronted owl', 'maned owl', 'crested owl',
    'spectacled owl', 'tawny-browed owl', 'band-bellied owl', 'black-and-white owl', 'lesser nighthawk', 'common nighthawk', 'antillean nighthawk', 'short-tailed nighthawk', 'rufous-bellied nighthawk', 'least nighthawk',
    'sand-colored nighthawk', 'common pauraque', 'common poorwill', 'eared poorwill', 'yucatan poorwill', 'ocellated poorwill', 'chuck-will widow', 'rufous nightjar', 'greater antillean nightjar', 'tawny-collared nightjar',
    'silky-tailed nightjar', 'buff-collared nightjar', 'whip-poor-will', 'eastern whip-poor-will', 'mexican whip-poor-will', 'dusky nightjar', 'band-winged nightjar', 'white-winged nightjar', 'spot-tailed nightjar', 'white-tailed nightjar',
    'scissor-tailed nightjar', 'long-trained nightjar', 'standard-winged nightjar', 'pennant-winged nightjar', 'european nightjar', 'eurasian nightjar', 'sombre nightjar', 'rufous-cheeked nightjar', 'egyptian nightjar', 'sykes nightjar',
    'nubian nightjar', 'golden nightjar', 'jungle nightjar', 'grey nightjar', 'large-tailed nightjar', 'jotaka nightjar', 'philippine nightjar', 'great eared-nightjar', 'malaysian eared-nightjar', 'spotted eared-nightjar',
    'black swift', 'american black swift', 'white-collared swift', 'chestnut-collared swift', 'white-chinned swift', 'ashy-tailed swift', 'chimney swift', 'vaux swift', 'chapman swift', 'short-tailed swift',
    'white-throated swift', 'alpine swift', 'common swift', 'pallid swift', 'african swift', 'little swift', 'horus swift', 'white-rumped swift', 'fork-tailed swift', 'pacific swift',
    'salim ali swift', 'blyth swift', 'dark-rumped swift', 'bare-legged swiftlet', 'glossy swiftlet', 'cave swiftlet', 'edible-nest swiftlet', 'black-nest swiftlet', 'german swiftlet', 'white-bellied swiftlet',
    'himalayan swiftlet', 'indian swiftlet', 'volcano swiftlet', 'whitehead swiftlet', 'australian swiftlet', 'mountain swiftlet', 'papuan swiftlet', 'mayr swiftlet', 'mossy-nest swiftlet', 'uniform swiftlet',
    'yellow-billed cuckoo', 'black-billed cuckoo', 'mangrove cuckoo', 'dark-billed cuckoo', 'pearly-breasted cuckoo', 'grey-capped cuckoo', 'common cuckoo', 'african cuckoo', 'madagascar cuckoo', 'oriental cuckoo',
    'himalayan cuckoo', 'sunda cuckoo', 'lesser cuckoo', 'indian cuckoo', 'pallid cuckoo', 'brush cuckoo', 'chestnut-breasted cuckoo', 'fan-tailed cuckoo', 'plaintive cuckoo', 'rusty-breasted cuckoo',
    'asian emerald cuckoo', 'violet cuckoo', 'little bronze cuckoo', 'shining bronze cuckoo', 'horsfield bronze cuckoo', 'black-eared cuckoo', 'red-chested cuckoo', 'black cuckoo', 'thick-billed cuckoo', 'sulawesi cuckoo',
    'bay-breasted cuckoo', 'moluccan cuckoo', 'brush-cuckoo', 'chestnut-winged cuckoo', 'coral-billed ground cuckoo', 'banded ground cuckoo', 'rufous-vented ground cuckoo', 'scaled ground cuckoo', 'pheasant cuckoo', 'pavonine cuckoo',
    'greater roadrunner', 'lesser roadrunner', 'striped cuckoo', 'pheasant-tailed jacana', 'northern jacana', 'wattled jacana', 'bronze-winged jacana', 'african jacana', 'madagascar jacana', 'comb-crested jacana',
    'lesser jacana', 'smooth-billed ani', 'groove-billed ani', 'greater ani', 'guira cuckoo', 'striped cuckoo', 'little cuckoo', 'dwarf cuckoo', 'ash-colored cuckoo', 'squirrel cuckoo',
    'white-crowned pigeon', 'scaly-naped pigeon', 'red-billed pigeon', 'pale-vented pigeon', 'bare-eyed pigeon', 'scaled pigeon', 'picazuro pigeon', 'spot-winged pigeon', 'band-tailed pigeon', 'chilean pigeon',
    'ring-tailed pigeon', 'white-naped pigeon', 'yellow-legged pigeon', 'eastern bronze-naped pigeon', 'western bronze-naped pigeon', 'sao tome bronze-naped pigeon', 'afep pigeon', 'african olive pigeon', 'comoro olive pigeon', 'dusky turtle dove',
    'island collared dove', 'philippine collared dove', 'white-bellied dove', 'caribbean dove', 'grenada dove', 'key west quail-dove', 'bridled quail-dove', 'grey-headed quail-dove', 'crested quail-dove', 'violaceous quail-dove',
    'ruddy quail-dove', 'blue-headed quail-dove', 'olive-backed quail-dove', 'white-faced quail-dove', 'lined quail-dove', 'white-throated quail-dove', 'inca dove', 'common ground dove', 'plain-breasted ground dove', 'ruddy ground dove',
    'blue ground dove', 'maroon-chested ground dove', 'bare-faced ground dove', 'purple-winged ground dove', 'blue-eyed ground dove', 'scaled dove', 'picui ground dove', 'croaking ground dove', 'blue-spotted wood dove', 'white-tipped dove',
    'grey-fronted dove', 'grey-chested dove', 'ochre-bellied dove', 'tolima dove', 'sapphire quail-dove', 'purple quail-dove', 'maroon-naped sunbird', 'amethyst brown dove', 'carunculated fruit dove', 'african harrier-hawk',
    'madagascar harrier-hawk', 'african cuckoo-hawk', 'bat hawk', 'long-winged harrier', 'spotted harrier', 'papuan harrier', 'reunion harrier', 'swamp harrier', 'crested honey buzzard', 'brahminy kite',
    'whistling kite', 'square-tailed kite', 'letter-winged kite', 'black-winged kite', 'african swallow-tailed kite', 'pearl kite', 'grey-headed kite', 'hook-billed kite', 'rufous-thighed kite', 'cayenne kite',
    'black kite', 'red kite', 'yellow-billed kite', 'black-eared kite', 'white-tailed kite', 'australian black-shouldered kite', 'plumbeous kite', 'mississippi kite', 'double-toothed kite', 'african fish eagle',
    'madagascar fish eagle', 'pallas fish eagle', 'grey-headed fish eagle', 'lesser fish eagle', 'sanford sea eagle', 'philippine eagle', 'harpy eagle', 'new guinea eagle', 'crested eagle', 'crowned solitary eagle',
    'solitary eagle', 'black-and-chestnut eagle', 'black hawk-eagle', 'ornate hawk-eagle', 'black-and-white hawk-eagle', 'long-crested eagle', 'cassin hawk-eagle', 'ayres hawk-eagle', 'african hawk-eagle', 'bonelli eagle',
    'rufous-bellied hawk-eagle', 'mountain hawk-eagle', 'blyth hawk-eagle', 'javan hawk-eagle', 'sulawesi hawk-eagle', 'philippine hawk-eagle', 'wallace hawk-eagle', 'changeable hawk-eagle', 'martial eagle', 'least weasel',
    'long-tailed weasel', 'short-tailed weasel', 'siberian weasel', 'yellow-bellied weasel', 'malayan weasel', 'colombian weasel', 'mountain weasel', 'tropical weasel', 'amazon weasel', 'patagonian weasel',
    'african striped weasel', 'back-striped weasel', 'common genet', 'small-spotted genet', 'cape genet', 'angolan genet', 'servaline genet', 'haussa genet', 'abyssinian genet', 'rusty-spotted genet',
    'crested servaline genet', 'schouteden genet', 'giant forest genet', 'aquatic genet', 'linsang', 'african linsang', 'banded linsang', 'spotted linsang', 'owston banded civet', 'otter civet',
    'african palm civet', 'masked palm civet', 'small indian civet', 'large indian civet', 'malayan civet', 'large-spotted civet', 'banded civet', 'celebes palm civet', 'golden wet-zone palm civet', 'jerdon palm civet',
    'brown palm civet', 'sulawesi palm civet', 'hose palm civet', 'otter-civet', 'small-toothed palm civet', 'three-striped palm civet', 'banded palm civet', 'hemigalus', 'mexican free-tailed bat', 'brazilian free-tailed bat',
    'european free-tailed bat', 'wrinkle-lipped free-tailed bat', 'egyptian free-tailed bat', 'angolan free-tailed bat', 'natal free-tailed bat', 'duke of abruzzi free-tailed bat', 'spotted free-tailed bat', 'seychelles free-tailed bat',
    'little free-tailed bat', 'mastiff bat', 'western mastiff bat', 'wagner mastiff bat', 'underwood mastiff bat', 'peale free-tailed bat', 'broad-eared free-tailed bat', 'big bonneted bat', 'bonneted bat', 'florida bonneted bat',
    'greater bulldog bat', 'lesser bulldog bat', 'fisherman bat', 'mexican fishing bat', 'ghost-faced bat', 'wagner ghost-faced bat', 'macconnell ghost-faced bat', 'mustached bat', 'parnell mustached bat', 'sooty mustached bat',
    'tricolored bat', 'eastern red bat', 'western red bat', 'hoary bat', 'northern yellow bat', 'southern yellow bat', 'seminole bat', 'silver-haired bat', 'canyon bat', 'western pipistrelle',
    'evening bat', 'rafinesque big-eared bat', 'townsend big-eared bat', 'mexican big-eared bat', 'allen big-eared bat', 'spotted bat', 'western small-footed bat', 'eastern small-footed bat', 'california myotis', 'western long-eared bat',
    'southwestern myotis', 'northern long-eared myotis', 'indiana myotis', 'gray myotis', 'southeastern myotis', 'cave myotis', 'fringed myotis', 'long-legged myotis', 'yuma myotis', 'arizona myotis',
    'greater mouse-eared bat', 'lesser mouse-eared bat', 'pond bat', 'nathusius pipistrelle', 'common pipistrelle', 'soprano pipistrelle', 'kuhl pipistrelle', 'noctule', 'common noctule', 'lesser noctule',
    'giant noctule', 'serotine', 'common serotine', 'northern bat', 'particolored bat', 'barbastelle', 'western barbastelle', 'eastern barbastelle', 'bechstein bat', 'natterer bat', 'whiskered bat',
    'pudu', 'northern pudu', 'southern pudu', 'brocket deer', 'red brocket', 'brown brocket', 'grey brocket', 'little red brocket', 'pygmy brocket', 'yucatan brown brocket',
    'small red brocket', 'merida brocket', 'dwarf brocket', 'mazama', 'marsh deer', 'pampas deer', 'taruca', 'huemul', 'north andean huemul', 'south andean huemul',
    'peruvian huemul', 'chilean huemul', 'tufted deer', 'black muntjac', 'leaf muntjac', 'annamite muntjac', 'roosevelt muntjac', 'truong son muntjac', 'pu hoat muntjac', 'schomburgk deer',
    'visayan spotted deer', 'philippine deer', 'kuhl deer', 'bawean deer', 'timor deer', 'javan rusa', 'sunda sambar', 'philippine spotted deer', 'vietnamese sika', 'formosan sika',
    'manchurian sika', 'dybowski sika', 'thorold deer', 'père david deer', 'shou', 'hangul', 'yarkand deer', 'bactrian deer', 'bukhara deer', 'maral',
    'caspian red deer', 'corsican red deer', 'sardinian red deer', 'barbary red deer', 'atlas deer', 'norwegian red deer', 'merriam elk', 'manitoban elk', 'rocky mountain elk', 'tule elk',
    'roosevelt elk', 'central asian red deer', 'steenboki', 'dorcas gazelle', 'saudi gazelle', 'red-fronted gazelle', 'thomson gazelle', 'mongalla gazelle', 'red gazelle', 'cuvier gazelle',
    'speke gazelle', 'dama gazelle', 'mhorr gazelle', 'soemmerring gazelle', 'goitered gazelle', 'sand gazelle', 'mountain gazelle', 'arabian gazelle', 'chinkara', 'edmi gazelle',
    'rhim gazelle', 'slender-horned gazelle', 'pelzeln gazelle', 'mongolian gazelle', 'przewalski gazelle', 'tibetan gazelle', 'alpine ibex', 'nubian ibex', 'bezoar ibex', 'siberian ibex',
    'walia ibex', 'spanish ibex', 'west caucasian tur', 'east caucasian tur', 'himalayan tahr', 'nilgiri tahr', 'arabian tahr', 'alpine chamois', 'pyrenean chamois', 'apennine chamois',
    'steller sea lion', 'california sea lion', 'south american sea lion', 'australian sea lion', 'galapagos sea lion', 'new zealand sea lion', 'northern fur seal', 'guadalupe fur seal', 'galapagos fur seal', 'south american fur seal',
    'antarctic fur seal', 'subantarctic fur seal', 'new zealand fur seal', 'brown fur seal', 'cape fur seal', 'juan fernandez fur seal', 'pacific walrus', 'atlantic walrus', 'laptev walrus', 'harbour seal',
    'spotted seal', 'ringed seal', 'baikal seal', 'caspian seal', 'ladoga seal', 'saimaa seal', 'grey seal', 'baltic grey seal', 'bearded seal', 'harp seal',
    'hooded seal', 'ribbon seal', 'crabeater seal', 'leopard seal', 'ross seal', 'weddell seal', 'southern elephant seal', 'northern elephant seal', 'mediterranean monk seal', 'hawaiian monk seal',
    'caribbean monk seal', 'narwhal', 'beluga whale', 'pygmy sperm whale', 'dwarf sperm whale', 'long-finned pilot whale', 'short-finned pilot whale', 'melon-headed whale', 'pygmy killer whale', 'false killer whale',
    'northern bottlenose whale', 'southern bottlenose whale', 'cuvier beaked whale', 'baird beaked whale', 'arnoux beaked whale', 'sowerby beaked whale', 'andrew beaked whale', 'hubbs beaked whale', 'gervais beaked whale', 'true beaked whale',
    'shepherd beaked whale', 'strap-toothed whale', 'spade-toothed whale', 'pygmy beaked whale', 'perrin beaked whale', 'stejneger beaked whale', 'blainville beaked whale', 'ginkgo-toothed beaked whale', 'hector beaked whale', 'deraniyagala beaked whale',
    'longman beaked whale', 'atlantic spotted dolphin', 'pantropical spotted dolphin', 'clymene dolphin', 'striped dolphin', 'spinner dolphin', 'fraser dolphin', 'white-beaked dolphin', 'atlantic white-sided dolphin', 'pacific white-sided dolphin',
    'dusky dolphin', 'hourglass dolphin', 'peale dolphin', 'black-chinned dolphin', 'commerson dolphin', 'chilean dolphin', 'heaviside dolphin', 'hector dolphin', 'maui dolphin', 'long-beaked common dolphin',
    'short-beaked common dolphin', 'indo-pacific bottlenose dolphin', 'burrunan dolphin', 'australian snubfin dolphin', 'irrawaddy dolphin', 'guiana dolphin', 'tucuxi', 'fraser dolphin', 'rough-toothed dolphin', 'risso dolphin',
    
    // Additional Mammals - Shrews, Moles & Small Insectivores
    'masked shrew', 'cinereus shrew', 'mount lyell shrew', 'preble shrew', 'prairie shrew', 'hayden shrew', 'southeastern shrew', 'smoky shrew', 'long-tailed shrew', 'gaspe shrew',
    'maryland shrew', 'st lawrence island shrew', 'pribilof island shrew', 'barren ground shrew', 'tundra shrew', 'montane shrew', 'dwarf shrew', 'american pygmy shrew', 'eurasian pygmy shrew', 'etruscan shrew',
    'savi pygmy shrew', 'asian lesser shrew', 'american water shrew', 'pacific water shrew', 'glacier bay water shrew', 'marsh shrew', 'fog shrew', 'vagrant shrew', 'dusky shrew', 'ornate shrew',
    'trowbridge shrew', 'pacific shrew', 'inyo shrew', 'arizona shrew', 'crawford's gray shrew', 'carmen mountain shrew', 'mexican small-eared shrew', 'cockrum shr ew', 'nelson shrew', 'merriam shrew',
    'enders small-eared shrew', 'scaly-footed small-eared shrew', 'wandering shrew', 'tien shan shrew', 'laxmann shrew', 'eurasian common shrew', 'taiga shrew', 'siberian large-toothed shrew', 'lesser shrew', 'bicolored shrew',
    'flat-headed shrew', 'crowned shrew', 'armored shrew', 'hero shrew', 'lesser red musk shrew', 'asian house shrew', 'etruscan white-toothed shrew', 'lesser white-toothed shrew', 'greater white-toothed shrew', 'crocidura',
    'eurasian mole', 'blind mole', 'roman mole', 'iberian mole', 'balkan mole', 'levant mole', 'persian mole', 'small japanese mole', 'tokuda mole', 'sado mole',
    'hairy-tailed mole', 'eastern mole', 'coast mole', 'townsend mole', 'broad-footed mole', 'long-tailed mole', 'california mole', 'american shrew mole', 'japanese shrew mole', 'long-tailed shrew mole',
    'himalayan mole', 'chinese mole', 'kloss mole', 'long-nosed mole', 'echigo mole', 'insular mole', 'senkaku mole', 'ryukyu mole', 'chinese short-faced mole', 'taiwan mole',
    'golden mole', 'cape golden mole', 'giant golden mole', 'hottentot golden mole', 'yellow golden mole', 'arends golden mole', 'congo golden mole', 'duthie golden mole', 'juliana golden mole', 'rough-haired golden mole',
    'tenrec', 'tailless tenrec', 'common tenrec', 'highland streaked tenrec', 'lowland streaked tenrec', 'large-eared tenrec', 'aquatic tenrec', 'web-footed tenrec', 'shrew tenrec', 'gracile shrew tenrec',
    'lesser hedgehog tenrec', 'greater hedgehog tenrec', 'dobson shrew tenrec', 'naked-nosed shrew tenrec', 'pygmy shrew tenrec', 'talazac shrew tenrec', 'pale shrew tenrec', 'dryad shrew tenrec', 'ruwenzori shrew', 'mount cameroon shrew',
    
    // Additional Rodents - Specialized Species
    'eastern chipmunk', 'least chipmunk', 'alpine chipmunk', 'yellow-pine chipmunk', 'merriam chipmunk', 'grey-footed chipmunk', 'long-eared chipmunk', 'siskiyou chipmunk', 'yellow-cheeked chipmunk', 'grey-collared chipmunk',
    'cliff chipmunk', 'colorado chipmunk', 'red-tailed chipmunk', 'hopi chipmunk', 'palmer chipmunk', 'panamint chipmunk', 'lodgepole chipmunk', 'uinta chipmunk', 'sonoma chipmunk', 'allen chipmunk',
    'buller chipmunk', 'durango chipmunk', 'siberian chipmunk', 'korean chipmunk', 'chinese striped hamster', 'grey dwarf hamster', 'sokolov dwarf hamster', 'striped dwarf hamster', 'eversmann hamster', 'ciscaucasian hamster',
    'romanian hamster', 'greater long-tailed hamster', 'tibetan dwarf hamster', 'ladak hamster', 'mongolian hamster', 'gansu hamster', 'kam dwarf hamster', 'lama dwarf hamster', 'long-tailed dwarf hamster', 'przewalski hamster',
    'desert hamster', 'mouse-like hamster', 'grey hamster', 'migratory hamster', 'southern mole vole', 'tien shan mole vole', 'siberian mole vole', 'amur lemming', 'norwegian lemming', 'wrangel lemming',
    'wood lemming', 'yellow steppe lemming', 'alashan ground squirrel', 'cape ground squirrel', 'damara ground squirrel', 'mountain ground squirrel', 'geoffroy ground squirrel', 'red-cheeked ground squirrel', 'little ground squirrel', 'spermophilus',
    'mexican ground squirrel', 'spotted ground squirrel', 'mohave ground squirrel', 'perote ground squirrel', 'cascade golden-mantled ground squirrel', 'columbian basin pygmy rabbit', 'pygmy rabbit', 'robust cottontail', 'dice cottontail', 'tres marias cottontail',
    'omilteme cottontail', 'mexican cottontail', 'eastern cottontail', 'new england cottontail', 'appalachian cottontail', 'mountain cottontail', 'nuttall cottontail', 'desert cottontail', 'texas cottontail', 'marsh rabbit',
    'swamp rabbit', 'san jose brush rabbit', 'riparian brush rabbit', 'brush rabbit', 'riverine rabbit', 'bunyoro rabbit', 'central african rabbit', 'ethiopian highland hare', 'abyssinian hare', 'cape hare',
    'european hare', 'mountain hare', 'irish hare', 'arctic hare', 'alaskan hare', 'snowshoe hare', 'white-tailed jackrabbit', 'black-tailed jackrabbit', 'antelope jackrabbit', 'tehuantepec jackrabbit',
    'black jackrabbit', 'scrub hare', 'natal red rock hare', 'jameson red rock hare', 'smith red rock hare', 'woolly hare', 'tolai hare', 'yarkand hare', 'corsican hare', 'korean hare',
    'japanese hare', 'broom hare', 'yunnan hare', 'hainan hare', 'burmese hare', 'indian hare', 'desert hare', 'ethiopian hare', 'african savanna hare', 'hispid hare',
    
    // Additional Birds - Warblers, Sparrows & Finches
    'tennessee warbler', 'orange-crowned warbler', 'colima warbler', 'lucy warbler', 'nashville warbler', 'virginia warbler', 'connecticut warbler', 'macgillivray warbler', 'mourning warbler', 'kentucky warbler',
    'worm-eating warbler', 'swainson warbler', 'ovenbird', 'northern waterthrush', 'louisiana waterthrush', 'golden-winged warbler', 'blue-winged warbler', 'brewster warbler', 'lawrence warbler', 'black-and-white warbler',
    'american redstart', 'prothonotary warbler', 'hooded warbler', 'wilson warbler', 'canada warbler', 'yellow-breasted chat', 'chestnut-sided warbler', 'magnolia warbler', 'cape may warbler', 'black-throated blue warbler',
    'yellow-rumped warbler', 'black-throated gray warbler', 'townsend warbler', 'hermit warbler', 'golden-cheeked warbler', 'black-throated green warbler', 'yellow-throated warbler', 'pine warbler', 'prairie warbler', 'palm warbler',
    'bay-breasted warbler', 'blackpoll warbler', 'cerulean warbler', 'blackburnian warbler', 'grace warbler', 'kirtland warbler', 'olive warbler', 'red-faced warbler', 'painted redstart', 'slate-throated redstart',
    'fan-tailed warbler', 'golden-crowned warbler', 'rufous-capped warbler', 'golden-browed warbler', 'black-eared warbler', 'pink-headed warbler', 'red warbler', 'crescent-chested warbler', 'flame-throated warbler', 'grey-throated chat',
    'white-lored gnatcatcher', 'california gnatcatcher', 'black-tailed gnatcatcher', 'black-capped gnatcatcher', 'blue-gray gnatcatcher', 'tropical gnatcatcher', 'cuban gnatcatcher', 'guianan gnatcatcher', 'masked gnatcatcher', 'creamy-bellied gnatcatcher',
    'tawny-faced gnat-eater', 'streak-capped treehunter', 'striped treehunter', 'rufous-tailed xenops', 'slender-billed xenops', 'plain xenops', 'streaked xenops', 'great xenops', 'common thornbird', 'spot-breasted thornbird',
    'freckle-breasted thornbird', 'plain-crowned spinetail', 'pale-breasted spinetail', 'sooty-fronted spinetail', 'azara spinetail', 'white-bellied spinetail', 'red-shouldered spinetail', 'slaty spinetail', 'dark-breasted spinetail', 'light-crowned spinetail',
    'spotted barbtail', 'white-throated barbtail', 'roraiman barbtail', 'rusty-winged barbtail', 'pearled treerunner', 'ruddy treerunner', 'beautiful treerunner', 'striped woodhaunter', 'lineated woodcreeper', 'plain-brown woodcreeper',
    'olivaceous woodcreeper', 'wedge-billed woodcreeper', 'long-billed woodcreeper', 'cinnamon-throated woodcreeper', 'ruddy woodcreeper', 'tyrannine woodcreeper', 'plain-winged woodcreeper', 'white-chinned woodcreeper', 'spotted woodcreeper', 'olive-backed woodcreeper',
    'straight-billed woodcreeper', 'zimmer woodcreeper', 'striped woodcreeper', 'ocellated woodcreeper', 'spot-crowned woodcreeper', 'black-banded woodcreeper', 'strong-billed woodcreeper', 'northern barred woodcreeper', 'amazonian barred woodcreeper', 'white-throated woodcreeper',
    'buff-throated woodcreeper', 'cocoa woodcreeper', 'black-striped woodcreeper', 'montane woodcreeper', 'brown-throated treecreeper', 'eurasian treecreeper', 'short-toed treecreeper', 'bar-tailed treecreeper', 'rufous treecreeper', 'sichuan treecreeper',
    'streaked wren-babbler', 'eyebrowed wren-babbler', 'scaly-breasted wren-babbler', 'pygmy wren-babbler', 'bar-winged wren-babbler', 'spotted wren-babbler', 'long-billed wren-babbler', 'rufous-throated wren-babbler', 'streaked wren', 'plain wren',
    'house wren', 'cobb wren', 'southern house wren', 'clarion wren', 'cozumel wren', 'socorro wren', 'northern house wren', 'brown-throated wren', 'rufous-browed wren', 'ochraceous wren',
    'timberline wren', 'mountain wren', 'grey-breasted wood-wren', 'lowland wood-wren', 'bar-winged wood-wren', 'white-breasted wood-wren', 'grey-mantled wren', 'black-capped donacobius', 'house martin', 'eurasian crag martin',
    
    // Additional Fish & Aquatic Species
    'lake sturgeon', 'green sturgeon', 'white sturgeon', 'gulf sturgeon', 'shovelnose sturgeon', 'pallid sturgeon', 'sterlet', 'siberian sturgeon', 'russian sturgeon', 'adriatic sturgeon',
    'shortnose sturgeon', 'alabama sturgeon', 'european sea sturgeon', 'kaluga', 'beluga sturgeon', 'huso', 'chinese sturgeon', 'dabry sturgeon', 'yangtze sturgeon', 'sakhalin sturgeon',
    'american paddlefish', 'chinese paddlefish', 'american eel', 'european eel', 'japanese eel', 'australian eel', 'australian long-finned eel', 'new zealand long-finned eel', 'giant mottled eel', 'marbled eel',
    'brook lamprey', 'river lamprey', 'sea lamprey', 'pacific lamprey', 'pouched lamprey', 'arctic lamprey', 'ohio lamprey', 'southern brook lamprey', 'least brook lamprey', 'northern brook lamprey',
    'mountain brook lamprey', 'chestnut lamprey', 'silver lamprey', 'caspian lamprey', 'ukrainian brook lamprey', 'greek brook lamprey', 'brook trout', 'lake trout', 'splake trout', 'bull trout',
    'dolly varden', 'arctic char', 'brook char', 'lake char', 'aurora trout', 'tiger trout', 'golden trout', 'apache trout', 'gila trout', 'mexican golden trout',
    'rainbow trout', 'steelhead', 'redband trout', 'california golden trout', 'kern river rainbow trout', 'cutthroat trout', 'coastal cutthroat', 'westslope cutthroat', 'yellowstone cutthroat', 'colorado river cutthroat',
    'greenback cutthroat', 'rio grande cutthroat', 'lahontan cutthroat', 'paiute cutthroat', 'bonneville cutthroat', 'humboldt cutthroat', 'whitehorse basin cutthroat', 'alvord cutthroat', 'brown trout', 'sea trout',
    'ferox trout', 'gillaroo trout', 'sonaghen trout', 'marbled trout', 'ohrid trout', 'zebra trout', 'adriatic trout', 'sevan trout', 'caspian trout', 'amu darya trout',
    'aral trout', 'tiger trout', 'pink salmon', 'chum salmon', 'sockeye salmon', 'red salmon', 'kokanee salmon', 'chinook salmon', 'king salmon', 'coho salmon',
    'silver salmon', 'cherry salmon', 'masou salmon', 'formosan landlocked salmon', 'atlantic salmon', 'landlocked salmon', 'ouananiche', 'sebago salmon', 'arctic grayling', 'european grayling',
    'mongolian grayling', 'amur grayling', 'baikal grayling', 'montana grayling', 'thymallus', 'lake whitefish', 'atlantic whitefish', 'round whitefish', 'mountain whitefish', 'broad whitefish',
    'humpback whitefish', 'lake cisco', 'cisco', 'bloater', 'kiyi', 'blackfin cisco', 'shortnose cisco', 'shortjaw cisco', 'deepwater cisco', 'inconnu',
    'american shad', 'alabama shad', 'hickory shad', 'gizzard shad', 'threadfin shad', 'alewife', 'blueback herring', 'skipjack herring', 'atlantic menhaden', 'gulf menhaden',
    
    // Additional Reptiles - More Snakes & Lizards
    'western diamondback rattlesnake', 'eastern diamondback rattlesnake', 'timber rattlesnake', 'canebrake rattlesnake', 'mojave rattlesnake', 'prairie rattlesnake', 'great basin rattlesnake', 'hopi rattlesnake', 'grand canyon rattlesnake', 'midget faded rattlesnake',
    'arizona black rattlesnake', 'banded rock rattlesnake', 'mottled rock rattlesnake', 'twin-spotted rattlesnake', 'ridge-nosed rattlesnake', 'mexican west coast rattlesnake', 'mexican lance-headed rattlesnake', 'black-tailed rattlesnake', 'red diamond rattlesnake', 'southwestern speckled rattlesnake',
    'panamint rattlesnake', 'coronado island rattlesnake', 'cape rattlesnake', 'cedros island rattlesnake', 'red rattlesnake', 'isla santa catalina rattlesnake', 'isla san esteban rattlesnake', 'la paz rattlesnake', 'san lorenzo island rattlesnake', 'angel de la guarda rattlesnake',
    'massasauga', 'western massasauga', 'eastern massasauga', 'desert massasauga', 'pygmy rattlesnake', 'western pygmy rattlesnake', 'dusky pygmy rattlesnake', 'carolina pygmy rattlesnake', 'northern copperhead', 'southern copperhead',
    'osage copperhead', 'trans-pecos copperhead', 'broad-banded copperhead', 'western cottonmouth', 'eastern cottonmouth', 'florida cottonmouth', 'texas coral snake', 'arizona coral snake', 'sonoran coral snake', 'harlequin coral snake',
    'northern scarlet snake', 'florida scarlet snake', 'texas scarlet snake', 'northern pine snake', 'florida pine snake', 'louisiana pine snake', 'black pine snake', 'northern pine snake', 'bullsnake', 'great basin gopher snake',
    'pacific gopher snake', 'sonoran gopher snake', 'san diego gopher snake', 'santa cruz gopher snake', 'central baja california gopher snake', 'cape gopher snake', 'northern mexican gopher snake', 'trans-pecos rat snake', 'baird rat snake', 'green rat snake',
    'grey rat snake', 'texas rat snake', 'yellow rat snake', 'everglades rat snake', 'slowisnki corn snake', 'great plains rat snake', 'fox snake', 'eastern fox snake', 'western fox snake', 'northern black racer',
    'southern black racer', 'brownchin racer', 'tan racer', 'everglades racer', 'buttermilk racer', 'blue racer', 'mexican racer', 'eastern yellow-bellied racer', 'western yellow-bellied racer', 'coachwhip',
    'eastern coachwhip', 'western coachwhip', 'red coachwhip', 'baja california coachwhip', 'sonoran coachwhip', 'lined coachwhip', 'ruthven whipsnake', 'alameda whipsnake', 'chaparral whipsnake', 'striped whipsnake',
    'california whipsnake', 'sonoran whipsnake', 'central texas whipsnake', 'ruthven whipsnake', 'mexican whipsnake', 'schott whipsnake', 'trans-pecos striped whipsnake', 'northern rubber boa', 'southern rubber boa', 'desert rosy boa',
    'coastal rosy boa', 'mexican rosy boa', 'peninsular rosy boa', 'mid-baja rosy boa', 'central baja rosy boa', 'charina',  'lichanura', 'charina umbratica', 'boa imperator', 'boa constrictor',
    'argentine boa', 'bolivian boa', 'peruvian boa', 'ecuadorian boa', 'colombian boa', 'mexican boa', 'central american boa', 'hog island boa', 'caulker cay boa', 'crawl cay boa',
    
    // Additional Amphibians - Salamanders & Newts
    'eastern tiger salamander', 'barred tiger salamander', 'california tiger salamander', 'plateau tiger salamander', 'sonoran tiger salamander', 'blotched tiger salamander', 'arizona tiger salamander', 'gray tiger salamander', 'east texas tiger salamander', 'diablan tiger salamander',
    'santa cruz long-toed salamander', 'eastern long-toed salamander', 'northern long-toed salamander', 'southern long-toed salamander', 'yellow-blotched salamander', 'northwestern salamander', 'blue-spotted salamander', 'jefferson salamander', 'smallmouth salamander', 'streamside salamander',
    'mole salamander', 'frosted flatwoods salamander', 'reticulated flatwoods salamander', 'florida flatwoods salamander', 'ringed salamander', 'mabee salamander', 'marbled salamander', 'oklahoma salamander', 'spotted salamander', 'plateau spotted salamander',
    'silvery salamander', 'siskiyou mountains salamander', 'del norte salamander', 'scott bar salamander', 'clouded salamander', 'wandering salamander', 'van dyke salamander', 'coeur d alene salamander', 'larch mountain salamander', 'siskiyou torrent salamander',
    'cascade torrent salamander', 'columbia torrent salamander', 'southern torrent salamander', 'olympic torrent salamander', 'dunn salamander', 'siskiyou torrent salamander', 'jemez mountains salamander', 'western red-backed salamander', 'ensatina', 'yellow-eyed ensatina',
    'oregon ensatina', 'painted ensatina', 'sierra nevada ensatina', 'large-blotched ensatina', 'monterey ensatina', 'yellow-blotched ensatina', 'black salamander', 'arboreal salamander', 'california slender salamander', 'channel islands slender salamander',
    'garden slender salamander', 'inyo mountains salamander', 'kern plateau salamander', 'hell hollow slender salamander', 'kings river slender salamander', 'relictual slender salamander', 'santa lucia mountains slender salamander', 'yellow-blotched slender salamander', 'gabilan mountains slender salamander', 'tehachapi slender salamander',
    'gregarious slender salamander', 'black-bellied slender salamander', 'lesser slender salamander', 'sequoia slender salamander', 'web-toed salamander', 'dunn salamander', 'siskiyou mountains salamander', 'del norte salamander', 'larch mountain salamander', 'cascade torrent salamander',
    'olympic torrent salamander', 'southern torrent salamander', 'california newt', 'rough-skinned newt', 'red-bellied newt', 'black-spotted newt', 'striped newt', 'broken-striped newt', 'central newt', 'peninsula newt',
    'louisiana newt', 'eastern newt', 'red-spotted newt', 'red eft', 'great crested newt', 'northern crested newt', 'italian crested newt', 'danube crested newt', 'balkan crested newt', 'macedonian crested newt',
    'smooth newt', 'northern smooth newt', 'southern smooth newt', 'palmate newt', 'alpine newt', 'bosca newt', 'lanzai newt', 'pyrenean brook newt', 'iberian ribbed newt', 'spanish ribbed newt',
    'sharp-ribbed newt', 'spectacled salamander', 'italian spectacled salamander', 'northern spectacled salamander', 'fire salamander', 'near eastern fire salamander', 'lanza fire salamander', 'alpine salamander', 'golden alpine salamander', 'lanza alpine salamander',
    'lyciasalamander', 'mertensiella', 'caucasian salamander', 'caucasus parsley frog', 'yellow-bellied toad', 'apennine yellow-bellied toad', 'common spadefoot', 'eastern spadefoot', 'western spadefoot', 'couch spadefoot',
    
    // Additional Insects - Butterflies, Bees & Wasps
    'monarch butterfly', 'viceroy butterfly', 'queen butterfly', 'soldier butterfly', 'red-spotted purple', 'white admiral', 'mourning cloak butterfly', 'milbert tortoiseshell', 'compton tortoiseshell', 'california tortoiseshell',
    'small tortoiseshell', 'peacock butterfly', 'kamehameha butterfly', 'painted lady butterfly', 'american lady butterfly', 'west coast  lady', 'red admiral butterfly', 'buckeye butterfly', 'mangrove buckeye', 'tropical buckeye',
    'caribbean buckeye', 'white peacock butterfly', 'banded peacock', 'malachite butterfly', 'ruddy daggerwing', 'tropical leafwing', 'goatweed leafwing', 'florida leafwing', 'cloudless sulphur', 'orange sulphur',
    'clouded sulphur', 'pink-edged sulphur', 'southern dogface', 'california dogface', 'orange-barred sulphur', 'large orange sulphur', 'sleepy orange', 'dainty sulphur', 'little yellow', 'mimosa yellow',
    'mexican yellow', 'barred yellow', 'boisduval yellow', 'cabbage white butterfly', 'great southern white', 'checkered white', 'western white', 'spring white', 'margined white', 'falcate orangetip',
    'sara orangetip', 'western orangetip', 'olympia marble', 'large marble', 'sonoran marble', 'pearly marble', 'california marble', 'gray marble', 'green marble', 'desert marble',
    'pine white butterfly', 'chiricahua white', 'becker white', 'common alpine', 'taiga alpine', 'lustrous copper', 'american copper', 'small copper', 'bronze copper', 'bog copper',
    'dorcas copper', 'purplish copper', 'lilac-bordered copper', 'mariposa copper', 'hermes copper', 'gorgon copper', 'tailed copper', 'great copper', 'blue copper', 'ruddy copper',
    'spring azure', 'summer azure', 'cherry gall azure', 'atlantic holly azure', 'appalachian azure', 'dusky azure', 'hops blue', 'silvery blue', 'western tailed blue', 'eastern tailed blue',
    'marine blue', 'ceraunus blue', 'reakirt blue', 'melissa blue', 'greenish blue', 'boisduval blue', 'arctic blue', 'northern blue', 'anna blue', 'cranberry blue',
    'european bumblebee', 'common eastern bumblebee', 'american bumblebee', 'two-spotted bumblebee', 'yellow bumblebee', 'red-belted bumblebee', 'brown-belted bumblebee', 'yellow-faced bumblebee', 'golden northern bumblebee', 'fuzzy-horned bumblebee',
    'half-black bumblebee', 'red-tailed bumblebee', 'early bumblebee', 'tree bumblebee', 'buff-tailed bumblebee', 'white-tailed bumblebee', 'garden bumblebee', 'ruderal bumblebee', 'southern cuckoo bumblebee', 'gypsy cuckoo bumblebee',
    'forest cuckoo bumblebee', 'barbut cuckoo bumblebee', 'american cuckoo bumblebee', 'fernald cuckoo bumblebee', 'indiscriminate cuckoo bumblebee', 'suckley cuckoo bumblebee', 'californian bumblebee', 'western bumblebee', 'sitka bumblebee', 'nevada bumblebee',
    'mormon metalmark', 'little metalmark', 'swamp metalmark', 'northern metalmark', 'fatal metalmark', 'red-bordered metalmark', 'pixie metalmark', 'narrow-winged metalmark', 'curve-winged metalmark', 'rounded metalmark',
    'blue metalmark', 'ares metalmark', 'arizona metalmark', 'wright metalmark', 'palmer metalmark', 'zela metalmark', 'rawson metalmark', 'hepburn hairstreak', 'great purple hairstreak', 'atala hairstreak',
    'coral hairstreak', 'acadian hairstreak', 'california hairstreak', 'sylvan hairstreak', 'willow hairstreak', 'banded hairstreak', 'king oak hairstreak', 'striped hairstreak', 'mountain mahogany hairstreak', 'hedgerow hairstreak',
    'brown elfin', 'hoary elfin', 'frosted elfin', 'henry elfin', 'bog elfin', 'western pine elfin', 'eastern pine elfin', 'moss elfin', 'desert elfin', 'sandia hairstreak'
];

// Game state
let gameState = {
    score: 0,
    timeRemaining: 60,
    listedAnimals: [],
    initialTime: 60,
    timeIncrement: 5,
    timerInterval: null,
    gameActive: false
};

// DOM elements
const menu = document.getElementById('menu');
const game = document.getElementById('game');
const gameOver = document.getElementById('gameOver');
const startBtn = document.getElementById('startBtn');
const cancelBtn = document.getElementById('cancelBtn');
const playAgainBtn = document.getElementById('playAgainBtn');
const copyListBtn = document.getElementById('copyListBtn');
const howToPlayBanner = document.getElementById('howToPlayBanner');
const closeBannerBtn = document.getElementById('closeBanner');
const learnMoreLink = document.getElementById('learnMoreLink');
const toggleHowToPlayBtn = document.getElementById('toggleHowToPlay');
const howToPlayWidget = document.getElementById('howToPlayWidget');
const closeWidgetBtn = document.getElementById('closeWidget');
const toggleSettingsBtn = document.getElementById('toggleSettings');
const settingsPanel = document.getElementById('settingsPanel');
const animalInput = document.getElementById('animalInput');
const toggleStatsBtn = document.getElementById('toggleStats');
const statsModal = document.getElementById('statsModal');
const closeStatsModal = document.getElementById('closeStatsModal');
const resetStatsBtn = document.getElementById('resetStatsBtn');
const statGamesPlayed = document.getElementById('statGamesPlayed');
const statBestScore = document.getElementById('statBestScore');
const statMostAnimals = document.getElementById('statMostAnimals');
const statTotalAnimals = document.getElementById('statTotalAnimals');
const statAvgAnimals = document.getElementById('statAvgAnimals');
const showDatabaseBtn = document.getElementById('showDatabaseBtn');
const hardReloadBtn = document.getElementById('hardReload');
const databaseModal = document.getElementById('databaseModal');
const closeDatabaseModal = document.getElementById('closeDatabaseModal');
const databaseContent = document.getElementById('databaseContent');
const databaseSearch = document.getElementById('databaseSearch');
const scoreDisplay = document.getElementById('score');
const timerDisplay = document.getElementById('timer');
const timerContainer = document.getElementById('timerDisplay');
const animalsList = document.getElementById('animalsList');
const animalCount = document.getElementById('animalCount');
const feedback = document.getElementById('feedback');
const finalScore = document.getElementById('finalScore');
const finalCount = document.getElementById('finalCount');
const finalAnimalsList = document.getElementById('finalAnimalsList');

// Settings
const initialTimeInput = document.getElementById('initialTime');
const timeIncrementInput = document.getElementById('timeIncrement');
const disableAnimationsCheckbox = document.getElementById('disableAnimations');
const themeSelect = document.getElementById('themeSelect');

// Event listeners
startBtn.addEventListener('click', startGame);
// Add touchstart for better mobile support
if ('ontouchstart' in window) {
    startBtn.addEventListener('touchstart', function(e) {
        e.preventDefault();
        startGame();
    }, { passive: false });
}
cancelBtn.addEventListener('click', resetToMenu);
playAgainBtn.addEventListener('click', resetToMenu);
if ('ontouchstart' in window) {
    playAgainBtn.addEventListener('touchstart', function(e) {
        e.preventDefault();
        resetToMenu();
    }, { passive: false });
}
copyListBtn.addEventListener('click', copyAnimalsList);
closeBannerBtn.addEventListener('click', closeBanner);
toggleHowToPlayBtn.addEventListener('click', (e) => {
    e.preventDefault();
    toggleWidget();
});
closeWidgetBtn.addEventListener('click', () => {
    closeWidget();
});
learnMoreLink.addEventListener('click', (e) => {
    e.preventDefault();
    closeBanner();
    openWidget();
});
toggleSettingsBtn.addEventListener('click', () => {
    settingsPanel.classList.toggle('hidden');
});

// Hard reload button handler
if (hardReloadBtn) {
    console.log('Hard reload button found, attaching listener');
    hardReloadBtn.addEventListener('click', function(e) {
        console.log('Hard reload button clicked!');
        e.preventDefault();
        e.stopPropagation();
        
        // Simple alert to confirm button works
        alert('Button clicked! About to reload...');
        
        // Simple reload with cache busting
        const baseUrl = window.location.href.split('?')[0].split('#')[0];
        window.location.href = baseUrl + '?nocache=' + new Date().getTime();
    });
} else {
    console.error('Hard reload button not found in DOM');
}

animalInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        submitAnimal();
    }
});

disableAnimationsCheckbox.addEventListener('change', (e) => {
    if (e.target.checked) {
        document.body.classList.add('no-animations');
    } else {
        document.body.classList.remove('no-animations');
    }
});

// Theme handling
themeSelect.addEventListener('change', (e) => {
    const theme = e.target.value;
    localStorage.setItem('theme', theme);
    applyTheme(theme);
});

function applyTheme(theme) {
    if (theme === 'system') {
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        document.body.classList.toggle('dark-mode', systemPrefersDark);
    } else if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
    const savedTheme = localStorage.getItem('theme') || 'system';
    if (savedTheme === 'system') {
        applyTheme('system');
    }
});

// Database viewer
let databaseListHTML = '';

function loadDatabase() {
    if (!databaseListHTML) {
        const sortedAnimals = [...ANIMALS].sort();
        databaseListHTML = '<ul class="database-list">' + 
            sortedAnimals.map(animal => `<li data-animal="${animal}">${animal}</li>`).join('') + 
            '</ul>';
    }
    databaseContent.innerHTML = databaseListHTML;
}

showDatabaseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    loadDatabase();
    databaseModal.classList.remove('hidden');
    settingsPanel.classList.add('hidden');
    databaseSearch.value = '';
});

closeDatabaseModal.addEventListener('click', () => {
    databaseModal.classList.add('hidden');
});

databaseModal.addEventListener('click', (e) => {
    if (e.target === databaseModal) {
        databaseModal.classList.add('hidden');
    }
});

databaseSearch.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const items = databaseContent.querySelectorAll('.database-list li');
    
    items.forEach(item => {
        const animal = item.dataset.animal.toLowerCase();
        if (animal.includes(searchTerm)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    });
});

// Stats modal event listeners
toggleStatsBtn.addEventListener('click', () => {
    loadStatsDisplay();
    statsModal.classList.remove('hidden');
});

closeStatsModal.addEventListener('click', () => {
    statsModal.classList.add('hidden');
});

statsModal.addEventListener('click', (e) => {
    if (e.target === statsModal) {
        statsModal.classList.add('hidden');
    }
});

resetStatsBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset all statistics? This cannot be undone.')) {
        resetStats();
    }
});

// Close stats modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !statsModal.classList.contains('hidden')) {
        statsModal.classList.add('hidden');
    }
});

// Close database modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !databaseModal.classList.contains('hidden')) {
        databaseModal.classList.add('hidden');
    }
});

// Close widget with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !howToPlayWidget.classList.contains('hidden')) {
        closeWidget();
    }
    if (e.key === 'Escape' && !settingsPanel.classList.contains('hidden')) {
        settingsPanel.classList.add('hidden');
    }
});

// Close settings panel when clicking outside
document.addEventListener('click', (e) => {
    if (!settingsPanel.contains(e.target) && !toggleSettingsBtn.contains(e.target)) {
        settingsPanel.classList.add('hidden');
    }
});

// Check if first visit and show banner
window.addEventListener('DOMContentLoaded', () => {
    const hasSeenBanner = localStorage.getItem('hasSeenBanner');
    if (!hasSeenBanner) {
        showBanner();
    }
    
    // Load and apply saved theme
    const savedTheme = localStorage.getItem('theme') || 'system';
    themeSelect.value = savedTheme;
    applyTheme(savedTheme);
});

// Start game
function startGame() {
    // Get settings
    gameState.initialTime = parseInt(initialTimeInput.value) || 60;
    gameState.timeIncrement = parseInt(timeIncrementInput.value) || 5;
    gameState.timeRemaining = gameState.initialTime;
    gameState.score = 0;
    gameState.listedAnimals = [];
    gameState.gameActive = true;

    // Update UI
    menu.classList.add('hidden');
    game.classList.remove('hidden');
    updateDisplay();
    animalInput.focus();

    // Start timer
    startTimer();
}

// Start timer
function startTimer() {
    gameState.timerInterval = setInterval(() => {
        gameState.timeRemaining--;
        updateTimer();

        if (gameState.timeRemaining <= 10 && gameState.timeRemaining > 0) {
            timerContainer.classList.add('warning');
        }

        if (gameState.timeRemaining <= 0) {
            endGame();
        }
    }, 1000);
}

// Update timer display
function updateTimer() {
    const minutes = Math.floor(gameState.timeRemaining / 60);
    const seconds = gameState.timeRemaining % 60;
    timerDisplay.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

// Submit animal
function submitAnimal() {
    if (!gameState.gameActive) return;

    const input = animalInput.value.trim().toLowerCase();
    animalInput.value = '';

    if (!input) {
        showFeedback('Please enter an animal name', 'error');
        return;
    }

    // Check if already listed
    if (gameState.listedAnimals.some(animal => animal.toLowerCase() === input)) {
        showFeedback('Already listed!', 'error');
        return;
    }

    // Check for overlapping (simplified - checks if one contains the other)
    const overlapping = gameState.listedAnimals.find(animal => {
        const a1 = animal.toLowerCase();
        const a2 = input;
        return (a1.includes(a2) || a2.includes(a1)) && a1 !== a2;
    });

    if (overlapping) {
        showFeedback(`Overlaps with "${overlapping}"`, 'error');
        return;
    }

    // Check if valid animal
    if (isValidAnimal(input)) {
        gameState.listedAnimals.push(input);
        gameState.score++;
        gameState.timeRemaining += gameState.timeIncrement;
        
        showFeedback(`✓ Correct! +${gameState.timeIncrement}s`, 'success');
        addAnimalToList(input);
        updateDisplay();
        timerContainer.classList.remove('warning');
    } else {
        showFeedback('Not in our animal database', 'error');
    }
}

// Validate animal (check against database)
function isValidAnimal(name) {
    return ANIMALS.some(animal => animal.toLowerCase() === name.toLowerCase());
}

// Show feedback
function showFeedback(message, type) {
    feedback.textContent = message;
    feedback.className = `feedback ${type}`;
    
    setTimeout(() => {
        feedback.textContent = '';
        feedback.className = 'feedback';
    }, 2000);
}

// Add animal to list
function addAnimalToList(animal) {
    const tag = document.createElement('div');
    tag.className = 'animal-tag';
    tag.textContent = animal;
    animalsList.appendChild(tag);
}

// Update display
function updateDisplay() {
    scoreDisplay.textContent = gameState.score;
    animalCount.textContent = gameState.listedAnimals.length;
    updateTimer();
}

// Stats functions
function loadStats() {
    const defaultStats = {
        gamesPlayed: 0,
        bestScore: 0,
        mostAnimals: 0,
        totalAnimals: 0
    };
    
    const saved = localStorage.getItem('gameStats');
    return saved ? JSON.parse(saved) : defaultStats;
}

function saveStats(stats) {
    localStorage.setItem('gameStats', JSON.stringify(stats));
}

function updateStats(score, animalsCount) {
    const stats = loadStats();
    
    stats.gamesPlayed++;
    stats.totalAnimals += animalsCount;
    
    if (score > stats.bestScore) {
        stats.bestScore = score;
    }
    
    if (animalsCount > stats.mostAnimals) {
        stats.mostAnimals = animalsCount;
    }
    
    saveStats(stats);
}

function loadStatsDisplay() {
    const stats = loadStats();
    
    statGamesPlayed.textContent = stats.gamesPlayed;
    statBestScore.textContent = stats.bestScore;
    statMostAnimals.textContent = stats.mostAnimals;
    statTotalAnimals.textContent = stats.totalAnimals;
    
    const avgAnimals = stats.gamesPlayed > 0 
        ? (stats.totalAnimals / stats.gamesPlayed).toFixed(1) 
        : '0.0';
    statAvgAnimals.textContent = avgAnimals;
}

function resetStats() {
    const defaultStats = {
        gamesPlayed: 0,
        bestScore: 0,
        mostAnimals: 0,
        totalAnimals: 0
    };
    
    saveStats(defaultStats);
    loadStatsDisplay();
}

// End game
function endGame() {
    gameState.gameActive = false;
    clearInterval(gameState.timerInterval);
    
    // Update stats
    updateStats(gameState.score, gameState.listedAnimals.length);
    
    game.classList.add('hidden');
    gameOver.classList.remove('hidden');
    
    finalScore.textContent = gameState.score;
    finalCount.textContent = gameState.listedAnimals.length;
    
    // Display final animals list
    finalAnimalsList.innerHTML = '';
    gameState.listedAnimals.forEach(animal => {
        const tag = document.createElement('div');
        tag.className = 'animal-tag';
        tag.textContent = animal;
        finalAnimalsList.appendChild(tag);
    });
}

// Reset to menu
function resetToMenu() {
    gameState.gameActive = false;
    clearInterval(gameState.timerInterval);
    
    game.classList.add('hidden');
    gameOver.classList.add('hidden');
    menu.classList.remove('hidden');
    timerContainer.classList.remove('warning');
    animalsList.innerHTML = '';
}

// Copy animals list
function copyAnimalsList() {
    const list = gameState.listedAnimals.join(', ');
    navigator.clipboard.writeText(list).then(() => {
        const originalText = copyListBtn.textContent;
        copyListBtn.textContent = 'Copied!';
        setTimeout(() => {
            copyListBtn.textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
    });
}

// Show banner
function showBanner() {
    howToPlayBanner.classList.remove('hidden');
}

// Close banner
function closeBanner() {
    howToPlayBanner.classList.add('hidden');
    localStorage.setItem('hasSeenBanner', 'true');
}

// Widget functions
function openWidget() {
    howToPlayWidget.classList.remove('hidden');
}

function closeWidget() {
    howToPlayWidget.classList.add('hidden');
}

function toggleWidget() {
    howToPlayWidget.classList.toggle('hidden');
}

import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const animalsLibrary = [
  {
    nom: "Lion",
    nom_male: "Lion",
    nom_femelle: "Lionne",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/640px-Lion_waiting_in_Namibia.jpg",
    savais_tu:
      "Le savais-tu ? Les lions vivent en groupes appelés 'prides', dirigés par un ou plusieurs mâles dominants. Le rugissement d'un lion peut être entendu jusqu'à 8 km à la ronde, marquant son territoire et dissuadant les intrus.",
    poids_kg: 190,
    longueur_cm: 250,
    longevite: 15,
    gestation_jours: 110,
  },
  {
    nom: "Tigre",
    nom_male: "Tigre",
    nom_femelle: "Tigresse",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Panthera_tigris_tigris_45151733.jpg/640px-Panthera_tigris_tigris_45151733.jpg",
    savais_tu:
      "Le savais-tu ? Chaque tigre possède un motif de rayures unique, similaire aux empreintes digitales humaines. Les tigres sont également d'excellents nageurs, et ils aiment se baigner pour se rafraîchir.",
    poids_kg: 220,
    longueur_cm: 300,
    longevite: 20,
    gestation_jours: 105,
  },
  {
    nom: "Léopard",
    nom_male: "Léopard",
    nom_femelle: "Léoparde",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/African_leopard%2C_Panthera_pardus_pardus%2C_near_Lake_Panic%2C_Kruger_National_Park%2C_South_Africa_%2819448654130%29.jpg/640px-African_leopard%2C_Panthera_pardus_pardus%2C_near_Lake_Panic%2C_Kruger_National_Park%2C_South_Africa_%2819448654130%29.jpg",
    savais_tu:
      "Le savais-tu ? Le léopard est un grimpeur habile et peut transporter ses proies dans les arbres pour les protéger des autres prédateurs. Ce félin est aussi très silencieux et se faufile discrètement sur ses proies.",
    poids_kg: 70,
    longueur_cm: 190,
    longevite: 15,
    gestation_jours: 90,
  },
  {
    nom: "Guépard",
    nom_male: "Guépard",
    nom_femelle: "Guéparde",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Acinonyx_jubatus_walking_edit.jpg/640px-Acinonyx_jubatus_walking_edit.jpg",
    savais_tu:
      "Le savais-tu ? Le guépard est l'animal terrestre le plus rapide, atteignant des vitesses de 110 km/h en quelques secondes. Contrairement aux autres félins, il ne rugit pas, mais émet des sons ressemblant à des miaulements.",
    poids_kg: 60,
    longueur_cm: 150,
    longevite: 12,
    gestation_jours: 95,
  },
  {
    nom: "Jaguar",
    nom_male: "Jaguar",
    nom_femelle: "Jaguar femelle",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Panthera_onca_137131959.jpg/640px-Panthera_onca_137131959.jpg",
    savais_tu:
      "Le savais-tu ? Le jaguar a la morsure la plus puissante parmi les félins, capable de percer les carapaces des tortues. Il est aussi excellent nageur et préfère souvent chasser près de l'eau.",
    poids_kg: 100,
    longueur_cm: 200,
    longevite: 15,
    gestation_jours: 100,
  },
  {
    nom: "Panthère des neiges",
    nom_male: "Panthère des neiges mâle",
    nom_femelle: "Panthère des neiges femelle",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Pantera_%C5%9Bnie%C5%BCna%2C_ZOO_w_Krakowie.jpg/640px-Pantera_%C5%9Bnie%C5%BCna%2C_ZOO_w_Krakowie.jpg",
    savais_tu:
      "Le savais-tu ? La panthère des neiges vit à des altitudes allant jusqu'à 5000 mètres dans les montagnes de l'Asie centrale. Elle est adaptée au froid grâce à son épaisse fourrure et sa longue queue qu'elle enroule autour d'elle pour se réchauffer.",
    poids_kg: 55,
    longueur_cm: 130,
    longevite: 15,
    gestation_jours: 101,
  },
  {
    nom: "Chat sauvage",
    nom_male: "Chat sauvage mâle",
    nom_femelle: "Chat sauvage femelle",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Die_Wildkatze_in_der_Wildnis.jpg/640px-Die_Wildkatze_in_der_Wildnis.jpg",
    savais_tu:
      "Le savais-tu ? Le chat sauvage est l'ancêtre de notre chat domestique, mais il reste farouchement indépendant et évite le contact humain. Il est plus grand que le chat domestique et possède une queue épaisse et touffue.",
    poids_kg: 6,
    longueur_cm: 80,
    longevite: 12,
    gestation_jours: 63,
  },
  {
    nom: "Caracal",
    nom_male: "Caracal mâle",
    nom_femelle: "Caracal femelle",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Caracal_caracal_289309438.jpg/640px-Caracal_caracal_289309438.jpg",
    savais_tu:
      "Le savais-tu ? Le caracal est capable de sauter jusqu'à 3 mètres de haut pour attraper des oiseaux en plein vol. Ses longues oreilles noires et pointues sont très sensibles aux sons, ce qui l'aide dans la chasse.",
    poids_kg: 18,
    longueur_cm: 90,
    longevite: 15,
    gestation_jours: 78,
  },
  {
    nom: "Lynx",
    nom_male: "Lynx mâle",
    nom_femelle: "Lynx femelle",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Lynx_lynx_%28geypa%29-cropped.jpg/640px-Lynx_lynx_%28geypa%29-cropped.jpg",
    savais_tu:
      "Le savais-tu ? Le lynx possède une vue perçante, lui permettant de repérer une souris à plus de 75 mètres de distance. Son pelage dense et ses oreilles en pointe lui donnent un camouflage et une ouïe excellents.",
    poids_kg: 25,
    longueur_cm: 110,
    longevite: 17,
    gestation_jours: 70,
  },
  {
    nom: "Serval",
    nom_male: "Serval mâle",
    nom_femelle: "Serval femelle",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Serval_%283077007722%29.jpg/640px-Serval_%283077007722%29.jpg",
    savais_tu:
      "Le savais-tu ? Le serval possède les pattes les plus longues de tous les félins proportionnellement à sa taille, ce qui l'aide à sauter et à attraper des proies. Il peut bondir jusqu'à 3 mètres pour saisir des oiseaux en plein vol.",
    poids_kg: 13,
    longueur_cm: 85,
    longevite: 12,
    gestation_jours: 74,
  },
  {
    nom: "Loup gris",
    nom_male: "Loup",
    nom_femelle: "Louve",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Scandinavian_grey_wolf_Canis_lupus.jpg/640px-Scandinavian_grey_wolf_Canis_lupus.jpg",
    savais_tu:
      "Le savais-tu ? Les loups gris vivent en meutes organisées dirigées par un couple alpha. Leur hurlement sert à communiquer avec la meute et à marquer leur territoire.",
    poids_kg: 40,
    longueur_cm: 160,
    longevite: 13,
    gestation_jours: 63,
  },
  {
    nom: "Renard roux",
    nom_male: "Renard",
    nom_femelle: "Renarde",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Vulpes_vulpes_laying_in_snow.jpg/640px-Vulpes_vulpes_laying_in_snow.jpg",
    savais_tu:
      "Le savais-tu ? Le renard roux utilise sa queue touffue pour garder son équilibre et se réchauffer en hiver. Il est également très adaptable et peut vivre dans des environnements très variés.",
    poids_kg: 6,
    longueur_cm: 90,
    longevite: 5,
    gestation_jours: 52,
  },
  {
    nom: "Chacal",
    nom_male: "Chacal",
    nom_femelle: "Chacale",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Golden_jackal_in_Kattampaly_4.jpeg/640px-Golden_jackal_in_Kattampaly_4.jpeg",
    savais_tu:
      "Le savais-tu ? Les chacals sont monogames et vivent souvent en couples ou en petites familles. Ils sont aussi opportunistes et se nourrissent de proies vivantes, mais aussi de charognes.",
    poids_kg: 10,
    longueur_cm: 85,
    longevite: 8,
    gestation_jours: 63,
  },
  {
    nom: "Coyote",
    nom_male: "Coyote",
    nom_femelle: "Coyotte",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Coyote_%28canis_latrans%29_%2822506632068%29.jpg/640px-Coyote_%28canis_latrans%29_%2822506632068%29.jpg",
    savais_tu:
      "Le savais-tu ? Le coyote est très vocal et utilise différents types de cris pour communiquer avec les autres membres de sa famille. Son habitat s'étend sur tout le continent nord-américain, du Canada au Mexique.",
    poids_kg: 15,
    longueur_cm: 100,
    longevite: 10,
    gestation_jours: 63,
  },
  {
    nom: "Dhole",
    nom_male: "Dhole mâle",
    nom_femelle: "Dhole femelle",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Dhole_%2815643720025%29.jpg/640px-Dhole_%2815643720025%29.jpg",
    savais_tu:
      "Le savais-tu ? Le dhole, ou chien sauvage d'Asie, est un prédateur très social, vivant en grandes meutes et chassant en groupe. Il est capable de chasser des proies plus grandes que lui, comme des cerfs.",
    poids_kg: 15,
    longueur_cm: 100,
    longevite: 10,
    gestation_jours: 60,
  },
  {
    nom: "Loup arctique",
    nom_male: "Loup arctique",
    nom_femelle: "Louve arctique",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Canis_lupus_arctos_%28Pocock%2C_1935%29.jpg/640px-Canis_lupus_arctos_%28Pocock%2C_1935%29.jpg",
    savais_tu:
      "Le savais-tu ? Le loup arctique vit dans des conditions extrêmes et survit avec une épaisse fourrure pour le protéger du froid glacial. Il parcourt de grandes distances pour trouver de la nourriture dans l'Arctique.",
    poids_kg: 45,
    longueur_cm: 150,
    longevite: 10,
    gestation_jours: 63,
  },
  {
    nom: "Loup d'Éthiopie",
    nom_male: "Loup d'Éthiopie",
    nom_femelle: "Louve d'Éthiopie",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Ethiopian_wolf%2C_Sanetti_Plateau%2C_Bale_Mountains_National_Park_%286%29_%28cropped%29.jpg/640px-Ethiopian_wolf%2C_Sanetti_Plateau%2C_Bale_Mountains_National_Park_%286%29_%28cropped%29.jpg",
    savais_tu:
      "Le savais-tu ? Le loup d'Éthiopie est l'un des canidés les plus menacés au monde, vivant uniquement dans les montagnes d'Éthiopie. Il se nourrit principalement de rongeurs qu'il chasse seul.",
    poids_kg: 15,
    longueur_cm: 110,
    longevite: 8,
    gestation_jours: 60,
  },
  {
    nom: "Renard polaire",
    nom_male: "Renard polaire",
    nom_femelle: "Renarde polaire",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Arctic_fox_%286375719339%29.jpg/640px-Arctic_fox_%286375719339%29.jpg",
    savais_tu:
      "Le savais-tu ? Le renard polaire change de couleur de pelage avec les saisons : blanc en hiver pour se camoufler dans la neige, et brun en été. Il peut survivre à des températures de -50 °C.",
    poids_kg: 4,
    longueur_cm: 70,
    longevite: 5,
    gestation_jours: 52,
  },
  {
    nom: "Ours brun",
    nom_male: "Ours",
    nom_femelle: "Ourse",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Caviar_drips_out_of_pink_sockeye_salmon_hunted_by_big_brown_bear_%2853161193868%29.jpg/640px-Caviar_drips_out_of_pink_sockeye_salmon_hunted_by_big_brown_bear_%2853161193868%29.jpg",
    savais_tu:
      "Le savais-tu ? L'ours brun peut peser jusqu'à 700 kg et mesure plus de 2,5 mètres debout. Malgré sa taille, il peut courir à une vitesse de 50 km/h pour de courtes distances.",
    poids_kg: 350,
    longueur_cm: 250,
    longevite: 25,
    gestation_jours: 220,
  },
  {
    nom: "Ours noir",
    nom_male: "Ours noir",
    nom_femelle: "Ourse noire",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Black_bear_alligator_river_nwr_10.5.24_DSC_0697-topaz-rawdenoise.jpg/640px-Black_bear_alligator_river_nwr_10.5.24_DSC_0697-topaz-rawdenoise.jpg",
    savais_tu:
      "Le savais-tu ? L'ours noir est l'un des ours les plus répandus en Amérique du Nord. Il est aussi excellent grimpeur, et il se réfugie souvent dans les arbres pour se protéger ou dormir.",
    poids_kg: 150,
    longueur_cm: 180,
    longevite: 20,
    gestation_jours: 220,
  },
  {
    nom: "Ours polaire",
    nom_male: "Ours polaire",
    nom_femelle: "Ourse polaire",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/A_mother_polar_bear_and_her_two_cubs.jpg/640px-A_mother_polar_bear_and_her_two_cubs.jpg",
    savais_tu:
      "Le savais-tu ? L'ours polaire est le plus grand carnivore terrestre, capable de nager sur de longues distances à la recherche de nourriture. Sa fourrure blanche le camoufle parfaitement dans la neige et la glace.",
    poids_kg: 450,
    longueur_cm: 250,
    longevite: 25,
    gestation_jours: 240,
  },
  {
    nom: "Ours lippu",
    nom_male: "Ours lippu",
    nom_femelle: "Ourse lippu",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Melursus_ursinus_ursinus_47417713.jpg/640px-Melursus_ursinus_ursinus_47417713.jpg",
    savais_tu:
      "Le savais-tu ? L'ours lippu se nourrit principalement de termites et utilise ses lèvres longues et flexibles pour les aspirer. Il est principalement nocturne, ce qui est rare chez les ours.",
    poids_kg: 140,
    longueur_cm: 180,
    longevite: 20,
    gestation_jours: 210,
  },
  {
    nom: "Ours à collier",
    nom_male: "Ours à collier",
    nom_femelle: "Ourse à collier",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Himalayan_black_bear%2C_Darjeeling%2C_India_%288085671203%29.jpg/640px-Himalayan_black_bear%2C_Darjeeling%2C_India_%288085671203%29.jpg",
    savais_tu:
      "Le savais-tu ? L'ours à collier, aussi appelé ours tibétain, est nommé pour la tache blanche en forme de V sur sa poitrine. Il est excellent grimpeur et passe beaucoup de temps dans les arbres.",
    poids_kg: 120,
    longueur_cm: 170,
    longevite: 25,
    gestation_jours: 210,
  },
  {
    nom: "Hyène tachetée",
    nom_male: "Hyène tachetée",
    nom_femelle: "Hyène tachetée",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Spotted_hyena_-_Addo_Elephant_National_Park_%2833948058355%29.jpg/640px-Spotted_hyena_-_Addo_Elephant_National_Park_%2833948058355%29.jpg",
    savais_tu:
      "Le savais-tu ? La hyène tachetée est célèbre pour son 'rire' unique, qui est en réalité une forme de communication complexe. Elle vit en clans matriarcaux où les femelles dominent les mâles.",
    poids_kg: 60,
    longueur_cm: 150,
    longevite: 20,
    gestation_jours: 110,
  },
  {
    nom: "Hyène rayée",
    nom_male: "Hyène rayée",
    nom_femelle: "Hyène rayée",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Furry_balll_on_the_grassland_%2853471290057%29.jpg/640px-Furry_balll_on_the_grassland_%2853471290057%29.jpg",
    savais_tu:
      "Le savais-tu ? Contrairement aux autres hyènes, la hyène rayée est plus solitaire et préfère chasser seule. Elle est aussi charognarde et joue un rôle crucial dans le nettoyage des écosystèmes.",
    poids_kg: 40,
    longueur_cm: 130,
    longevite: 12,
    gestation_jours: 90,
  },
  {
    nom: "Hyène brune",
    nom_male: "Hyène brune",
    nom_femelle: "Hyène brune",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Five_cheetahs_were_feeding_on_a_Springbok_kill_one_morning_in_the_Kgalagadi._%2834376905242%29.jpg/640px-Five_cheetahs_were_feeding_on_a_Springbok_kill_one_morning_in_the_Kgalagadi._%2834376905242%29.jpg",
    savais_tu:
      "Le savais-tu ? La hyène brune a un pelage long et hirsute qui la distingue des autres hyènes. Elle est surtout active la nuit et se nourrit souvent de charognes laissées par les lions et autres prédateurs.",
    poids_kg: 45,
    longueur_cm: 140,
    longevite: 15,
    gestation_jours: 100,
  },
  {
    nom: "Fouine",
    nom_male: "Fouine mâle",
    nom_femelle: "Fouine femelle",
    image:
      "https://cdn.futura-sciences.com/buildsv6/images/wide1440/8/2/9/829a7f5e83_50213757_difference-belette-fouine.jpg",
    savais_tu:
      "Le savais-tu ? La fouine est très agile et peut grimper dans les arbres pour chasser. Elle est également connue pour sa capacité à se faufiler dans les greniers et les granges pour trouver un abri.",
    poids_kg: 2,
    longueur_cm: 55,
    longevite: 10,
    gestation_jours: 30,
  },
  {
    nom: "Belette",
    nom_male: "Belette mâle",
    nom_femelle: "Belette femelle",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mustela_nivalis.jpg/640px-Mustela_nivalis.jpg",
    savais_tu:
      "Le savais-tu ? La belette est le plus petit carnivore du monde, mais elle est extrêmement agile et redoutable pour les petits rongeurs. Elle peut également changer de couleur en hiver dans les régions enneigées.",
    poids_kg: 0.2,
    longueur_cm: 20,
    longevite: 5,
    gestation_jours: 35,
  },
  {
    nom: "Martre",
    nom_male: "Martre mâle",
    nom_femelle: "Martre femelle",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Pine_Marten_in_Kent.jpg/640px-Pine_Marten_in_Kent.jpg",
    savais_tu:
      "Le savais-tu ? La martre est une excellente grimpeuse et vit souvent dans les forêts denses. Elle se nourrit de petits animaux, mais aussi de baies, de fruits et d'œufs d'oiseaux.",
    poids_kg: 1.5,
    longueur_cm: 55,
    longevite: 12,
    gestation_jours: 30,
  },
  {
    nom: "Glouton",
    nom_male: "Glouton mâle",
    nom_femelle: "Glouton femelle",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Gulo_gulo_01.jpg/640px-Gulo_gulo_01.jpg",
    savais_tu:
      "Le savais-tu ? Le glouton, aussi appelé carcajou, est célèbre pour son agressivité et sa force relative impressionnante. Il peut s'attaquer à des proies beaucoup plus grandes que lui et est capable de chasser seul dans des environnements rudes.",
    poids_kg: 15,
    longueur_cm: 100,
    longevite: 10,
    gestation_jours: 50,
  },
  {
    nom: "Blaireau",
    nom_male: "Blaireau mâle",
    nom_femelle: "Blairelle",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Meles_meles_%2850208147127%29.jpg/640px-Meles_meles_%2850208147127%29.jpg",
    savais_tu:
      "Le savais-tu ? Le blaireau est un animal très sociable qui vit en groupes familiaux appelés clans. Ils creusent de vastes réseaux de tunnels appelés terriers où plusieurs générations peuvent cohabiter.",
    poids_kg: 12,
    longueur_cm: 75,
    longevite: 14,
    gestation_jours: 60,
  },
  {
    nom: "Loutre d'Europe",
    nom_male: "Loutre mâle",
    nom_femelle: "Loutre femelle",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Sea_otter_nursing02.jpg/640px-Sea_otter_nursing02.jpg",
    savais_tu:
      "Le savais-tu ? La loutre d'Europe est une excellente nageuse qui peut rester sous l'eau jusqu'à 4 minutes. Elle possède un pelage dense et imperméable pour se protéger du froid.",
    poids_kg: 10,
    longueur_cm: 100,
    longevite: 15,
    gestation_jours: 63,
  },
  {
    nom: "Vison",
    nom_male: "Vison mâle",
    nom_femelle: "Visonne",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/American_Mink%2C_Centre_Island%2C_Toronto%2C_ON_%289374114650%29.jpg/640px-American_Mink%2C_Centre_Island%2C_Toronto%2C_ON_%289374114650%29.jpg",
    savais_tu:
      "Le savais-tu ? Le vison est un prédateur semi-aquatique qui chasse poissons, crustacés et petits mammifères. Il est également un excellent nageur, utilisant sa queue comme gouvernail.",
    poids_kg: 1.5,
    longueur_cm: 50,
    longevite: 10,
    gestation_jours: 42,
  },
  {
    nom: "Civette africaine",
    nom_male: "Civette mâle",
    nom_femelle: "Civette femelle",
    image:
      "https://static.wixstatic.com/media/351c6f_476d18d30165497cb59688377316b1e0~mv2.jpg/v1/fill/w_568,h_400,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/351c6f_476d18d30165497cb59688377316b1e0~mv2.jpg",
    savais_tu:
      "Le savais-tu ? La civette africaine sécrète une substance musquée utilisée en parfumerie. Elle est omnivore, se nourrissant de fruits, d'insectes et de petits animaux.",
    poids_kg: 12,
    longueur_cm: 90,
    longevite: 15,
    gestation_jours: 60,
  },
  {
    nom: "Genette",
    nom_male: "Genette mâle",
    nom_femelle: "Genette femelle",
    image:
      "https://www.s-e-v-e.fr/wp-content/uploads/2020/11/genette-commune.jpg",
    savais_tu:
      "Le savais-tu ? La genette est un excellent grimpeur, passant beaucoup de temps dans les arbres. Elle est principalement nocturne et chasse de petits mammifères et des oiseaux.",
    poids_kg: 2,
    longueur_cm: 50,
    longevite: 13,
    gestation_jours: 70,
  },
  {
    nom: "Mangouste",
    nom_male: "Mangouste mâle",
    nom_femelle: "Mangouste femelle",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Small_asian_mongoose.jpg/640px-Small_asian_mongoose.jpg",
    savais_tu:
      "Le savais-tu ? Les mangoustes sont célèbres pour leur capacité à chasser les serpents, grâce à leurs réflexes rapides et leur résistance au venin. Elles vivent souvent en groupes sociaux.",
    poids_kg: 1.5,
    longueur_cm: 45,
    longevite: 10,
    gestation_jours: 60,
  },
  {
    nom: "Ratel",
    nom_male: "Ratel mâle",
    nom_femelle: "Ratele",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Honey_badger%2C_Mellivora_capensis%2C_carrying_young_pup_in_her_mouth_at_Kgalagadi_Transfrontier_Park%2C_Northern_Cape%2C_South_Africa_%2834739009921%29.jpg/640px-Honey_badger%2C_Mellivora_capensis%2C_carrying_young_pup_in_her_mouth_at_Kgalagadi_Transfrontier_Park%2C_Northern_Cape%2C_South_Africa_%2834739009921%29.jpg",
    savais_tu:
      "Le savais-tu ? Le ratel, ou blaireau du miel, est réputé pour son agressivité et son courage. Il peut chasser des proies plus grandes et n’hésite pas à s'attaquer à des serpents venimeux.",
    poids_kg: 12,
    longueur_cm: 75,
    longevite: 24,
    gestation_jours: 180,
  },
  {
    nom: "Panda roux",
    nom_male: "Panda roux mâle",
    nom_femelle: "Panda roux femelle",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Christophe_EYQUEM_-_Petit_panda_%28Firefox%29_%28LAL%29.jpg/640px-Christophe_EYQUEM_-_Petit_panda_%28Firefox%29_%28LAL%29.jpg",
    savais_tu:
      "Le savais-tu ? Le panda roux est un excellent grimpeur et passe beaucoup de temps dans les arbres. Il se nourrit principalement de bambou, mais aussi de fruits et d'insectes.",
    poids_kg: 5,
    longueur_cm: 60,
    longevite: 14,
    gestation_jours: 135,
  },
  {
    nom: "Fossa",
    nom_male: "Fossa mâle",
    nom_femelle: "Fossa femelle",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/Cryptoprocta_ferox_61884767.jpg/640px-Cryptoprocta_ferox_61884767.jpg",
    savais_tu:
      "Le savais-tu ? Le fossa est le plus grand prédateur de Madagascar et chasse principalement les lémuriens. Son corps long et souple lui permet de se déplacer aisément dans les arbres.",
    poids_kg: 8,
    longueur_cm: 80,
    longevite: 15,
    gestation_jours: 90,
  },
  {
    nom: "Chien viverrin",
    nom_male: "Chien viverrin mâle",
    nom_femelle: "Chienne viverrin",
    image:
      "https://upload.chien.com/img_global/25-autres-canides/chien-viverrin-tanuki/_medium-20782_12948-la-morphologie-du-chien-viverrin.jpg",
    savais_tu:
      "Le savais-tu ? Le chien viverrin est un canidé qui hiberne en hiver, ce qui est très rare parmi les chiens sauvages. Il est omnivore et s'adapte bien aux environnements variés.",
    poids_kg: 7,
    longueur_cm: 60,
    longevite: 10,
    gestation_jours: 60,
  },
  {
    nom: "Puma",
    nom_male: "Puma",
    nom_femelle: "Puma",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Puma_concolor1.jpg/640px-Puma_concolor1.jpg",
    savais_tu:
      "Le savais-tu ? Le puma est l'un des grands félins les plus répandus d'Amérique. Il est aussi appelé couguar et peut parcourir jusqu'à 20 km en une seule nuit pour chasser.",
    poids_kg: 80,
    longueur_cm: 200,
    longevite: 12,
    gestation_jours: 90,
  },
  {
    nom: "Ocelot",
    nom_male: "Ocelot",
    nom_femelle: "Ocelot",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Ocelot_5_%285254736956%29.jpg/640px-Ocelot_5_%285254736956%29.jpg",
    savais_tu:
      "Le savais-tu ? L'ocelot est un félin sauvage d'Amérique centrale et d'Amérique du Sud. Ses taches sont uniques, et il est connu pour sa capacité à grimper et sa vue excellente de nuit.",
    poids_kg: 12,
    longueur_cm: 100,
    longevite: 20,
    gestation_jours: 70,
  },
  {
    nom: "Margay",
    nom_male: "Margay",
    nom_femelle: "Margay",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Margaykat_Leopardus_wiedii.jpg/640px-Margaykat_Leopardus_wiedii.jpg",
    savais_tu:
      "Le savais-tu ? Le margay est un petit félin qui vit dans les forêts tropicales d'Amérique latine. Il est extrêmement agile et peut même descendre des arbres tête la première.",
    poids_kg: 4,
    longueur_cm: 80,
    longevite: 18,
    gestation_jours: 80,
  },
  {
    nom: "Chat de Pallas",
    nom_male: "Chat de Pallas",
    nom_femelle: "Chat de Pallas",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Manul_2.jpg/640px-Manul_2.jpg",
    savais_tu:
      "Le savais-tu ? Le chat de Pallas vit dans les steppes et montagnes d'Asie centrale, supportant des climats extrêmement froids. Son pelage épais lui permet de survivre à des températures très basses.",
    poids_kg: 5,
    longueur_cm: 60,
    longevite: 12,
    gestation_jours: 66,
  },
  {
    nom: "Chat des sables",
    nom_male: "Chat des sables",
    nom_femelle: "Chat des sables",
    image:
      "https://image.jimcdn.com/app/cms/image/transf/dimension=830x10000:format=jpg/path/s5dde8bff85c81b2f/image/i36cae17ea39f8c4a/version/1408796320/chat-des-sables.jpg",
    savais_tu:
      "Le savais-tu ? Le chat des sables est parfaitement adapté aux déserts d'Afrique et d'Asie, résistant aux températures extrêmes. Ses grandes oreilles lui permettent de détecter des proies sous le sable.",
    poids_kg: 3,
    longueur_cm: 50,
    longevite: 13,
    gestation_jours: 59,
  },
  {
    nom: "Fennec",
    nom_male: "Fennec",
    nom_femelle: "Fennec",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Fennec_Fox_%40_Africa_Alive%2C_Lowestoft_2.jpg/640px-Fennec_Fox_%40_Africa_Alive%2C_Lowestoft_2.jpg",
    savais_tu:
      "Le savais-tu ? Le fennec est le plus petit canidé du monde et vit dans les déserts du Sahara. Ses grandes oreilles servent à réguler sa température corporelle et à entendre des proies sous le sable.",
    poids_kg: 1.5,
    longueur_cm: 40,
    longevite: 10,
    gestation_jours: 50,
  },
  {
    nom: "Renard corsac",
    nom_male: "Renard corsac",
    nom_femelle: "Renarde corsac",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Fox---Vulpes-corsac---%28Gentry%29.jpg/640px-Fox---Vulpes-corsac---%28Gentry%29.jpg",
    savais_tu:
      "Le savais-tu ? Le renard corsac vit dans les steppes et les semi-déserts d'Asie centrale. Il est très résistant à la sécheresse et peut survivre plusieurs jours sans eau.",
    poids_kg: 3.5,
    longueur_cm: 55,
    longevite: 9,
    gestation_jours: 60,
  },
  {
    nom: "Renard gris",
    nom_male: "Renard gris",
    nom_femelle: "Renarde grise",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Zorros_grises_%28Lycalopex_griseus%29%2C_Uruguay%2C_2023.jpg/640px-Zorros_grises_%28Lycalopex_griseus%29%2C_Uruguay%2C_2023.jpg",
    savais_tu:
      "Le savais-tu ? Le renard gris est unique parmi les renards, car il est capable de grimper aux arbres. Il est omnivore et se nourrit aussi bien de petits animaux que de fruits et insectes.",
    poids_kg: 4,
    longueur_cm: 80,
    longevite: 6,
    gestation_jours: 53,
  },
  {
    nom: "Loup rouge",
    nom_male: "Loup rouge",
    nom_femelle: "Louve rouge",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Red_wolf_%2811742666724%29.jpg/640px-Red_wolf_%2811742666724%29.jpg",
    savais_tu:
      "Le savais-tu ? Le loup rouge est une espèce très rare, endémique des États-Unis et presque éteinte à l'état sauvage. Il est plus petit que le loup gris et vit principalement dans les zones marécageuses.",
    poids_kg: 30,
    longueur_cm: 120,
    longevite: 10,
    gestation_jours: 63,
  },
  {
    nom: "Chien des buissons",
    nom_male: "Chien des buissons",
    nom_femelle: "Chienne des buissons",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Bush_dog_%285662775404%29.jpg/640px-Bush_dog_%285662775404%29.jpg",
    savais_tu:
      "Le savais-tu ? Le chien des buissons est un canidé d'Amérique du Sud qui chasse souvent en meute. Il est parfaitement adapté à la vie aquatique et est un excellent nageur.",
    poids_kg: 6,
    longueur_cm: 65,
    longevite: 10,
    gestation_jours: 67,
  },
  {
    nom: "Chihuahua",
    nom_male: "Chihuahua mâle",
    nom_femelle: "Chihuahua femelle",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/A_Chihuahua_at_Taipei_20091106.jpg/640px-A_Chihuahua_at_Taipei_20091106.jpg",
    savais_tu:
      "Le savais-tu ? Le Chihuahua est la plus petite race de chien au monde, mais il est connu pour son courage et son tempérament énergique. Ils peuvent être des compagnons très loyaux et protecteurs malgré leur taille.",
    poids_kg: 2,
    longueur_cm: 20,
    longevite: 15,
    gestation_jours: 63,
  },
  {
    nom: "Crocodile",
    nom_male: "Crocodile mâle",
    nom_femelle: "Crocodile femelle",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Nile_crocodile_head.jpg/640px-Nile_crocodile_head.jpg",
    savais_tu:
      "Le savais-tu ? Les crocodiles existent depuis plus de 200 millions d'années et sont d'excellents chasseurs aquatiques. Ils peuvent ralentir leur rythme cardiaque pour rester sous l'eau jusqu'à une heure, guettant leur proie.",
    poids_kg: 1000,
    longueur_cm: 500,
    longevite: 70,
    gestation_jours: 90,
  },
];

app.get("/api/animalsLibrary", (req, res) => {
  res.json({ results: animalsLibrary });
});

const port = 3310;

app.listen(port, () => {
  console.info(`Example app listening on port ${port}`);
});

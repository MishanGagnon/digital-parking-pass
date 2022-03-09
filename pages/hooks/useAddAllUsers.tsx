import useGetName from "./useGetName"
import useUpdateDocument from "./useUpdateDocument"


const useAddAllUsers = () => {
    const students : {[key : string] : {id : string, name : string, email : string }} = {
        "222000": {
            "id": "222000",
            "name": "Sam Aclan",
            "email": "22saclan@shcp.edu"
        },
        "222002": {
            "id": "222002",
            "name": "Capen Ades",
            "email": "22cades@shcp.edu"
        },
        "222004": {
            "id": "222004",
            "name": "Jaena Almario",
            "email": "22jalmario@shcp.edu"
        },
        "222006": {
            "id": "222006",
            "name": "Claire Alonso",
            "email": "22calonso@shcp.edu"
        },
        "222010": {
            "id": "222010",
            "name": "Cooper Andersen",
            "email": "22candersen@shcp.edu"
        },
        "222012": {
            "id": "222012",
            "name": "Kiki Antipa",
            "email": "22cantipa@shcp.edu"
        },
        "222014": {
            "id": "222014",
            "name": "Josh Arzhintar",
            "email": "22jarzhintar@shcp.edu"
        },
        "222016": {
            "id": "222016",
            "name": "Anastasia Athanasiadi",
            "email": "22aathanasiadi@shcp.edu"
        },
        "222018": {
            "id": "222018",
            "name": "Noah Babcock",
            "email": "22nbabcock@shcp.edu"
        },
        "222020": {
            "id": "222020",
            "name": "Maura Baglin",
            "email": "22mbaglin@shcp.edu"
        },
        "222022": {
            "id": "222022",
            "name": "Silas Bahlibi",
            "email": "22sbahlibi@shcp.edu"
        },
        "222024": {
            "id": "222024",
            "name": "Jacob Baisman",
            "email": "22jbaisman@shcp.edu"
        },
        "222026": {
            "id": "222026",
            "name": "Isabel Banayad",
            "email": "22ibanayad@shcp.edu"
        },
        "222028": {
            "id": "222028",
            "name": "Paul Banh",
            "email": "22pbanh@shcp.edu"
        },
        "222030": {
            "id": "222030",
            "name": "Olyvia Bankovitch",
            "email": "22obankovitch@shcp.edu"
        },
        "222032": {
            "id": "222032",
            "name": "Shauna Barry",
            "email": "22sbarry@shcp.edu"
        },
        "222036": {
            "id": "222036",
            "name": "Gracey Bauer",
            "email": "22gbauer@shcp.edu"
        },
        "222038": {
            "id": "222038",
            "name": "Maddy Beima",
            "email": "22mbeima@shcp.edu"
        },
        "222040": {
            "id": "222040",
            "name": "Delila Bertelsen",
            "email": "22dbertelsen@shcp.edu"
        },
        "222044": {
            "id": "222044",
            "name": "Devin Blair",
            "email": "22dblair@shcp.edu"
        },
        "222046": {
            "id": "222046",
            "name": "Halle Bohlig",
            "email": "22hbohlig@shcp.edu"
        },
        "222048": {
            "id": "222048",
            "name": "Lauren Bohne",
            "email": "22lbohne@shcp.edu"
        },
        "222050": {
            "id": "222050",
            "name": "Lauren Boilard",
            "email": "22lboilard@shcp.edu"
        },
        "222052": {
            "id": "222052",
            "name": "Lorenzo Bolls",
            "email": "22lbolls@shcp.edu"
        },
        "222054": {
            "id": "222054",
            "name": "Audrey Bonifacio",
            "email": "22abonifacio@shcp.edu"
        },
        "222058": {
            "id": "222058",
            "name": "Erik Bosch",
            "email": "22ebosch@shcp.edu"
        },
        "222060": {
            "id": "222060",
            "name": "Sonia Boughaffour",
            "email": "22sboughaffour@shcp.edu"
        },
        "222062": {
            "id": "222062",
            "name": "Chloe Boynton",
            "email": "22cboynton@shcp.edu"
        },
        "222064": {
            "id": "222064",
            "name": "Chiara Bridon",
            "email": "22cbridon@shcp.edu"
        },
        "222068": {
            "id": "222068",
            "name": "Thia Bronson",
            "email": "22tbronson@shcp.edu"
        },
        "222070": {
            "id": "222070",
            "name": "Adelaide Brown",
            "email": "22abrown@shcp.edu"
        },
        "222072": {
            "id": "222072",
            "name": "Darla Burkett",
            "email": "22lburkett@shcp.edu"
        },
        "222074": {
            "id": "222074",
            "name": "Sophie Bye",
            "email": "22sbye@shcp.edu"
        },
        "222076": {
            "id": "222076",
            "name": "Barry Cahalane",
            "email": "22bcahalane@shcp.edu"
        },
        "222078": {
            "id": "222078",
            "name": "Katie Callo",
            "email": "22kcallo@shcp.edu"
        },
        "222080": {
            "id": "222080",
            "name": "Ary Caluag",
            "email": "22acaluag@shcp.edu"
        },
        "222084": {
            "id": "222084",
            "name": "Paulina Capulin",
            "email": "22pcapulin@shcp.edu"
        },
        "222086": {
            "id": "222086",
            "name": "Cyrus Carino",
            "email": "22ccarino@shcp.edu"
        },
        "222088": {
            "id": "222088",
            "name": "Anabelle Carter",
            "email": "22acarter@shcp.edu"
        },
        "222090": {
            "id": "222090",
            "name": "Megan Cashin",
            "email": "22mcashin@shcp.edu"
        },
        "222092": {
            "id": "222092",
            "name": "TaLiyah Cato",
            "email": "22tcato@shcp.edu"
        },
        "222094": {
            "id": "222094",
            "name": "Isaiah Catubig",
            "email": "22icatubig@shcp.edu"
        },
        "222096": {
            "id": "222096",
            "name": "Bobby Cavano",
            "email": "22rcavano@shcp.edu"
        },
        "222100": {
            "id": "222100",
            "name": "Ben Ceragioli",
            "email": "22bceragioli@shcp.edu"
        },
        "222102": {
            "id": "222102",
            "name": "Daniela Cerri",
            "email": "22dcerri@shcp.edu"
        },
        "222103": {
            "id": "222103",
            "name": "Adelyne Chan",
            "email": "22achan@shcp.edu"
        },
        "222104": {
            "id": "222104",
            "name": "Coby Chan",
            "email": "22cchan@shcp.edu"
        },
        "222106": {
            "id": "222106",
            "name": "Kalli Chan",
            "email": "22kchan@shcp.edu"
        },
        "222110": {
            "id": "222110",
            "name": "Cameron Chao",
            "email": "22cchao@shcp.edu"
        },
        "222112": {
            "id": "222112",
            "name": "Christopher Chapman",
            "email": "22cchapman@shcp.edu"
        },
        "222114": {
            "id": "222114",
            "name": "Kendra Char",
            "email": "22kchar@shcp.edu"
        },
        "222116": {
            "id": "222116",
            "name": "Alex Chen",
            "email": "22achen@shcp.edu"
        },
        "222124": {
            "id": "222124",
            "name": "Caselyn Choy",
            "email": "22cchoy@shcp.edu"
        },
        "222126": {
            "id": "222126",
            "name": "Alexis Clark",
            "email": "22aclark@shcp.edu"
        },
        "222128": {
            "id": "222128",
            "name": "Ronan Cloherty",
            "email": "22rcloherty@shcp.edu"
        },
        "222130": {
            "id": "222130",
            "name": "Raven Coffer",
            "email": "22rcoffer@shcp.edu"
        },
        "222132": {
            "id": "222132",
            "name": "JP Collins",
            "email": "22jcollins@shcp.edu"
        },
        "222134": {
            "id": "222134",
            "name": "Otniel Colorado",
            "email": "22ocolorado@shcp.edu"
        },
        "222136": {
            "id": "222136",
            "name": "JP Colwick",
            "email": "22jcolwick@shcp.edu"
        },
        "222138": {
            "id": "222138",
            "name": "Kate Conti",
            "email": "22kconti@shcp.edu"
        },
        "222142": {
            "id": "222142",
            "name": "Karina Cosbey",
            "email": "22kcosbey@shcp.edu"
        },
        "222144": {
            "id": "222144",
            "name": "Alexia Crawford",
            "email": "22acrawford@shcp.edu"
        },
        "222145": {
            "id": "222145",
            "name": "Ysabela Cupido",
            "email": "22ycupido@shcp.edu"
        },
        "222146": {
            "id": "222146",
            "name": "Claire Curry",
            "email": "22ccurry@shcp.edu"
        },
        "222148": {
            "id": "222148",
            "name": "Tori Dalton",
            "email": "22vdalton@shcp.edu"
        },
        "222150": {
            "id": "222150",
            "name": "Lauren Daniel Moran",
            "email": "22ldanielmoran@shcp.edu"
        },
        "222154": {
            "id": "222154",
            "name": "Amy Dayrit",
            "email": "22adayrit@shcp.edu"
        },
        "222156": {
            "id": "222156",
            "name": "Fiona Deasy",
            "email": "22fdeasy@shcp.edu"
        },
        "222158": {
            "id": "222158",
            "name": "Keenan DeCock",
            "email": "22jdecock@shcp.edu"
        },
        "222160": {
            "id": "222160",
            "name": "Fiona DeGrandi",
            "email": "22fdegrandi@shcp.edu"
        },
        "222162": {
            "id": "222162",
            "name": "Sophie Delfs",
            "email": "22sdelfs@shcp.edu"
        },
        "222164": {
            "id": "222164",
            "name": "Amir Dias",
            "email": "22adias@shcp.edu"
        },
        "222166": {
            "id": "222166",
            "name": "Misao Didion",
            "email": "22mdidion@shcp.edu"
        },
        "222168": {
            "id": "222168",
            "name": "Jean-Pierre Diemer",
            "email": "22jdiemer@shcp.edu"
        },
        "222170": {
            "id": "222170",
            "name": "KimNgan Diep",
            "email": "22kdiep@shcp.edu"
        },
        "222172": {
            "id": "222172",
            "name": "Miles Diloy",
            "email": "22mdiloy@shcp.edu"
        },
        "222174": {
            "id": "222174",
            "name": "Mie Dimitroff",
            "email": "22mdimitroff@shcp.edu"
        },
        "222176": {
            "id": "222176",
            "name": "Mimi Dineen",
            "email": "22adineen@shcp.edu"
        },
        "222178": {
            "id": "222178",
            "name": "Marissa Diner",
            "email": "22mdiner@shcp.edu"
        },
        "222180": {
            "id": "222180",
            "name": "Nicole Diner",
            "email": "22ndiner@shcp.edu"
        },
        "222182": {
            "id": "222182",
            "name": "Brendan Donnelly",
            "email": "22bdonnelly@shcp.edu"
        },
        "222184": {
            "id": "222184",
            "name": "Imogen Doumani",
            "email": "22idoumani@shcp.edu"
        },
        "222186": {
            "id": "222186",
            "name": "Sicily Dowdell",
            "email": "22sdowdell@shcp.edu"
        },
        "222188": {
            "id": "222188",
            "name": "Emma Dowling",
            "email": "22edowling@shcp.edu"
        },
        "222190": {
            "id": "222190",
            "name": "Nico Dreier",
            "email": "22ndreier@shcp.edu"
        },
        "222192": {
            "id": "222192",
            "name": "Andrew Duan",
            "email": "22aduan@shcp.edu"
        },
        "222196": {
            "id": "222196",
            "name": "Aoife Dwan",
            "email": "22adwan@shcp.edu"
        },
        "222198": {
            "id": "222198",
            "name": "Ashley Enriquez",
            "email": "22aenriquez@shcp.edu"
        },
        "222200": {
            "id": "222200",
            "name": "Isabel Enriquez",
            "email": "22ienriquez@shcp.edu"
        },
        "222206": {
            "id": "222206",
            "name": "Gillian Espina",
            "email": "22gespina@shcp.edu"
        },
        "222208": {
            "id": "222208",
            "name": "Hana Farrell-Wakelin",
            "email": "22hfarrellwakelin@shcp.edu"
        },
        "222212": {
            "id": "222212",
            "name": "Nicolette Fischer",
            "email": "22nfischer@shcp.edu"
        },
        "222214": {
            "id": "222214",
            "name": "Cataleen Flores",
            "email": "22cflores@shcp.edu"
        },
        "222216": {
            "id": "222216",
            "name": "Christine Flores",
            "email": "22chflores@shcp.edu"
        },
        "222218": {
            "id": "222218",
            "name": "Olivia Flores",
            "email": "22oflores@shcp.edu"
        },
        "222220": {
            "id": "222220",
            "name": "Matt Fogarty",
            "email": "22mfogarty@shcp.edu"
        },
        "222222": {
            "id": "222222",
            "name": "Josh Fong",
            "email": "22jfong@shcp.edu"
        },
        "222224": {
            "id": "222224",
            "name": "Katrina Foti",
            "email": "22kfoti@shcp.edu"
        },
        "222230": {
            "id": "222230",
            "name": "Nathan Fung",
            "email": "22nfung@shcp.edu"
        },
        "222232": {
            "id": "222232",
            "name": "Mishan Gagnon",
            "email": "22mgagnon@shcp.edu"
        },
        "222234": {
            "id": "222234",
            "name": "Marcelo Garcia",
            "email": "22mgarcia@shcp.edu"
        },
        "222236": {
            "id": "222236",
            "name": "Fiona Gard",
            "email": "22fgard@shcp.edu"
        },
        "222238": {
            "id": "222238",
            "name": "Grant Garlow",
            "email": "22ggarlow@shcp.edu"
        },
        "222240": {
            "id": "222240",
            "name": "Kylie Gaynor",
            "email": "22kgaynor@shcp.edu"
        },
        "222242": {
            "id": "222242",
            "name": "Kriselda Gernan",
            "email": "22mgernan@shcp.edu"
        },
        "222244": {
            "id": "222244",
            "name": "Emma Giamello",
            "email": "22egiamello@shcp.edu"
        },
        "222246": {
            "id": "222246",
            "name": "Annie Giovannelli",
            "email": "22agiovannelli@shcp.edu"
        },
        "222250": {
            "id": "222250",
            "name": "Eric Gonzalez",
            "email": "22egonzalez@shcp.edu"
        },
        "222252": {
            "id": "222252",
            "name": "Francesca Gonzalez",
            "email": "22fgonzalez@shcp.edu"
        },
        "222254": {
            "id": "222254",
            "name": "Jessica Gonzalez",
            "email": "22jgonzalez@shcp.edu"
        },
        "222256": {
            "id": "222256",
            "name": "Joshua Gorospe",
            "email": "22jgorospe@shcp.edu"
        },
        "222258": {
            "id": "222258",
            "name": "Kai Gottesfeld",
            "email": "22kgottesfeld@shcp.edu"
        },
        "222260": {
            "id": "222260",
            "name": "Alannah Graham",
            "email": "22agraham@shcp.edu"
        },
        "222262": {
            "id": "222262",
            "name": "Nick Griffin",
            "email": "22ngriffin@shcp.edu"
        },
        "222264": {
            "id": "222264",
            "name": "Matty Grigoryan",
            "email": "22mgrigoryan@shcp.edu"
        },
        "222266": {
            "id": "222266",
            "name": "Colin Gursky",
            "email": "22cgursky@shcp.edu"
        },
        "222268": {
            "id": "222268",
            "name": "Audrey Hamaguchi",
            "email": "22ahamaguchi@shcp.edu"
        },
        "222270": {
            "id": "222270",
            "name": "Liam Hansbury",
            "email": "22lhansbury@shcp.edu"
        },
        "222272": {
            "id": "222272",
            "name": "Alexis Harper",
            "email": "22aharper@shcp.edu"
        },
        "222274": {
            "id": "222274",
            "name": "Margot Hart",
            "email": "22mhart@shcp.edu"
        },
        "222276": {
            "id": "222276",
            "name": "Gavin Haskell",
            "email": "22ghaskell@shcp.edu"
        },
        "222278": {
            "id": "222278",
            "name": "Bryce Hatch",
            "email": "22bhatch@shcp.edu"
        },
        "222280": {
            "id": "222280",
            "name": "Lucas Havlin",
            "email": "22lhavlin@shcp.edu"
        },
        "222281": {
            "id": "222281",
            "name": "Moony He",
            "email": "22mhe@shcp.edu"
        },
        "222282": {
            "id": "222282",
            "name": "Jaime Hayer",
            "email": "22ohayer@shcp.edu"
        },
        "222284": {
            "id": "222284",
            "name": "Kevin Hernandez",
            "email": "22khernandez@shcp.edu"
        },
        "222286": {
            "id": "222286",
            "name": "Shandi Hernandez",
            "email": "22shernandez@shcp.edu"
        },
        "222288": {
            "id": "222288",
            "name": "Ivan Herrera",
            "email": "22iherrera@shcp.edu"
        },
        "222290": {
            "id": "222290",
            "name": "David Hinderliter",
            "email": "22dhinderliter@shcp.edu"
        },
        "222292": {
            "id": "222292",
            "name": "Kai Hinoki",
            "email": "22khinoki@shcp.edu"
        },
        "222294": {
            "id": "222294",
            "name": "Kylie Honniball",
            "email": "22khonniball@shcp.edu"
        },
        "222296": {
            "id": "222296",
            "name": "Sasha Hopewell",
            "email": "22shopewell@shcp.edu"
        },
        "222298": {
            "id": "222298",
            "name": "Sean Hsieh-Premack",
            "email": "22shsiehpremack@shcp.edu"
        },
        "222300": {
            "id": "222300",
            "name": "Brianna Huang",
            "email": "22bhuang@shcp.edu"
        },
        "222302": {
            "id": "222302",
            "name": "Lance Marino Hughston",
            "email": "22lhughston@shcp.edu"
        },
        "222304": {
            "id": "222304",
            "name": "Trish Huynh",
            "email": "22thuynh@shcp.edu"
        },
        "222305": {
            "id": "222305",
            "name": "Angel Iniguez",
            "email": "22ainiguez@shcp.edu"
        },
        "222306": {
            "id": "222306",
            "name": "Kaitlin Irish",
            "email": "22kirish@shcp.edu"
        },
        "222308": {
            "id": "222308",
            "name": "Ray J Jackson",
            "email": "22rjackson@shcp.edu"
        },
        "222310": {
            "id": "222310",
            "name": "Roman Jackson",
            "email": "22rojackson@shcp.edu"
        },
        "222312": {
            "id": "222312",
            "name": "Gracie James-Hickey",
            "email": "22gjameshickey@shcp.edu"
        },
        "222314": {
            "id": "222314",
            "name": "Jackie Jeremi",
            "email": "22jjeremi@shcp.edu"
        },
        "222316": {
            "id": "222316",
            "name": "James Johnson",
            "email": "22jjohnson@shcp.edu"
        },
        "222318": {
            "id": "222318",
            "name": "Marsella Johnson",
            "email": "22mjohnson@shcp.edu"
        },
        "222320": {
            "id": "222320",
            "name": "Ryan Jordan",
            "email": "22rjordan@shcp.edu"
        },
        "222322": {
            "id": "222322",
            "name": "Ally Katches",
            "email": "22akatches@shcp.edu"
        },
        "222324": {
            "id": "222324",
            "name": "Nick Katz",
            "email": "22nkatz@shcp.edu"
        },
        "222328": {
            "id": "222328",
            "name": "Jack Keenan",
            "email": "22jkeenan@shcp.edu"
        },
        "222330": {
            "id": "222330",
            "name": "Ella Keker",
            "email": "22ekeker@shcp.edu"
        },
        "222332": {
            "id": "222332",
            "name": "Lucas Kelly",
            "email": "22lkelly@shcp.edu"
        },
        "222334": {
            "id": "222334",
            "name": "Olivia Kendrick",
            "email": "22okendrick@shcp.edu"
        },
        "222336": {
            "id": "222336",
            "name": "Fiorella Kennedy",
            "email": "22fkennedy@shcp.edu"
        },
        "222338": {
            "id": "222338",
            "name": "Camille Kenyon",
            "email": "22ckenyon@shcp.edu"
        },
        "222340": {
            "id": "222340",
            "name": "Marco Khan",
            "email": "22mkhan@shcp.edu"
        },
        "222342": {
            "id": "222342",
            "name": "Angelina Klimenko",
            "email": "22aklimenko@shcp.edu"
        },
        "222344": {
            "id": "222344",
            "name": "Logan Kong",
            "email": "22lkong@shcp.edu"
        },
        "222346": {
            "id": "222346",
            "name": "Emily Krombach",
            "email": "22ekrombach@shcp.edu"
        },
        "222348": {
            "id": "222348",
            "name": "Maddie Kruger",
            "email": "22mkruger@shcp.edu"
        },
        "222352": {
            "id": "222352",
            "name": "Sabrina Kung",
            "email": "22skung@shcp.edu"
        },
        "222354": {
            "id": "222354",
            "name": "Dominic Kunz",
            "email": "22dkunz@shcp.edu"
        },
        "222356": {
            "id": "222356",
            "name": "Maya Kuo",
            "email": "22mkuo@shcp.edu"
        },
        "222358": {
            "id": "222358",
            "name": "Tyler Kuwada",
            "email": "22tkuwada@shcp.edu"
        },
        "222362": {
            "id": "222362",
            "name": "Zoe Kwok",
            "email": "22zkwok@shcp.edu"
        },
        "222366": {
            "id": "222366",
            "name": "Morgan Kynoch",
            "email": "22mkynoch@shcp.edu"
        },
        "222368": {
            "id": "222368",
            "name": "Adrienne La",
            "email": "22ala@shcp.edu"
        },
        "222370": {
            "id": "222370",
            "name": "Samantha Laffey",
            "email": "22slaffey@shcp.edu"
        },
        "222372": {
            "id": "222372",
            "name": "Justin Lam",
            "email": "22jlam@shcp.edu"
        },
        "222374": {
            "id": "222374",
            "name": "Isa Largaespada",
            "email": "22ilargaespada@shcp.edu"
        },
        "222376": {
            "id": "222376",
            "name": "Lola Larson",
            "email": "22llarson@shcp.edu"
        },
        "222378": {
            "id": "222378",
            "name": "Chloe Lau",
            "email": "22clau@shcp.edu"
        },
        "222380": {
            "id": "222380",
            "name": "Kaya Lauriault-Bronez",
            "email": "22klauriaultbronez@shcp.edu"
        },
        "222382": {
            "id": "222382",
            "name": "Casey Leavitt-McGee",
            "email": "22cleavittmcgee@shcp.edu"
        },
        "222384": {
            "id": "222384",
            "name": "Curtis Lee",
            "email": "22clee@shcp.edu"
        },
        "222385": {
            "id": "222385",
            "name": "Grace Lee",
            "email": "22glee@shcp.edu"
        },
        "222386": {
            "id": "222386",
            "name": "Aiden LeFeat",
            "email": "22alefeat@shcp.edu"
        },
        "222388": {
            "id": "222388",
            "name": "Josie LesCallett",
            "email": "22jlescallett@shcp.edu"
        },
        "222390": {
            "id": "222390",
            "name": "Darren Lew",
            "email": "22dlew@shcp.edu"
        },
        "222392": {
            "id": "222392",
            "name": "Kynan Lewis",
            "email": "22klewis@shcp.edu"
        },
        "222394": {
            "id": "222394",
            "name": "Samantha Liang",
            "email": "22sliang@shcp.edu"
        },
        "222396": {
            "id": "222396",
            "name": "Jerry Lim",
            "email": "22jlim@shcp.edu"
        },
        "222398": {
            "id": "222398",
            "name": "Edison Lin",
            "email": "22elin@shcp.edu"
        },
        "222400": {
            "id": "222400",
            "name": "Angelo Locsin",
            "email": "22alocsin@shcp.edu"
        },
        "222402": {
            "id": "222402",
            "name": "Mateo Loeza",
            "email": "22mloeza@shcp.edu"
        },
        "222404": {
            "id": "222404",
            "name": "Matthew Lofberg",
            "email": "22mlofberg@shcp.edu"
        },
        "222406": {
            "id": "222406",
            "name": "Sami Lui",
            "email": "22slui@shcp.edu"
        },
        "222408": {
            "id": "222408",
            "name": "Dominic Luscher",
            "email": "22dluscher@shcp.edu"
        },
        "222410": {
            "id": "222410",
            "name": "Santos Mac Murray",
            "email": "22smacmurray@shcp.edu"
        },
        "222412": {
            "id": "222412",
            "name": "Ella MacNamara",
            "email": "22emacnamara@shcp.edu"
        },
        "222414": {
            "id": "222414",
            "name": "Sean Madden",
            "email": "22smadden@shcp.edu"
        },
        "222418": {
            "id": "222418",
            "name": "Ava Maguire",
            "email": "22amaguire@shcp.edu"
        },
        "222420": {
            "id": "222420",
            "name": "Veronica Maguire",
            "email": "22vmaguire@shcp.edu"
        },
        "222422": {
            "id": "222422",
            "name": "Holden Maier",
            "email": "22hmaier@shcp.edu"
        },
        "222424": {
            "id": "222424",
            "name": "Katy Malchow",
            "email": "22kmalchow@shcp.edu"
        },
        "222428": {
            "id": "222428",
            "name": "Gino Marcon",
            "email": "22gmarcon@shcp.edu"
        },
        "222434": {
            "id": "222434",
            "name": "Etienne Martinez McSherry",
            "email": "22emartinezmcsherry@shcp.edu"
        },
        "222436": {
            "id": "222436",
            "name": "Eli McCarty",
            "email": "22emccarty@shcp.edu"
        },
        "222438": {
            "id": "222438",
            "name": "Gabriello McDermott",
            "email": "22gmcdermott@shcp.edu"
        },
        "222440": {
            "id": "222440",
            "name": "Bella McDonagh",
            "email": "22imcdonagh@shcp.edu"
        },
        "222442": {
            "id": "222442",
            "name": "Jack McFadden-Mitchell",
            "email": "22jmcfaddenmitchell@shcp.edu"
        },
        "222444": {
            "id": "222444",
            "name": "Brittany McKnight",
            "email": "22bmcknight@shcp.edu"
        },
        "222446": {
            "id": "222446",
            "name": "Dylan McKnight",
            "email": "22dmcknight@shcp.edu"
        },
        "222448": {
            "id": "222448",
            "name": "Gigi McMillan",
            "email": "22gmcmillan@shcp.edu"
        },
        "222450": {
            "id": "222450",
            "name": "Katie McNamee",
            "email": "22kmcnamee@shcp.edu"
        },
        "222452": {
            "id": "222452",
            "name": "Ben McSweeney",
            "email": "22bmcsweeney@shcp.edu"
        },
        "222454": {
            "id": "222454",
            "name": "Grace Medecki-O'Rourke",
            "email": "22gmedeckiorourke@shcp.edu"
        },
        "222456": {
            "id": "222456",
            "name": "Renzo Medina",
            "email": "22rmedina@shcp.edu"
        },
        "222460": {
            "id": "222460",
            "name": "Josh Mendez-Fernandez",
            "email": "22jmendez@shcp.edu"
        },
        "222462": {
            "id": "222462",
            "name": "Javan Mendiola-Gutknecht",
            "email": "22jmendiolagutknecht@shcp.edu"
        },
        "222464": {
            "id": "222464",
            "name": "Tuula Miller",
            "email": "22tmiller@shcp.edu"
        },
        "222466": {
            "id": "222466",
            "name": "Jordan Miyamoto",
            "email": "22jmiyamoto@shcp.edu"
        },
        "222470": {
            "id": "222470",
            "name": "Ignacio Montorio",
            "email": "22imontorio@shcp.edu"
        },
        "222472": {
            "id": "222472",
            "name": "Jake Moreno",
            "email": "22jmoreno@shcp.edu"
        },
        "222474": {
            "id": "222474",
            "name": "Kira Moss",
            "email": "22kmoss@shcp.edu"
        },
        "222476": {
            "id": "222476",
            "name": "Ronin Mukai",
            "email": "22rmukai@shcp.edu"
        },
        "222478": {
            "id": "222478",
            "name": "Stella Mullin",
            "email": "22smullin@shcp.edu"
        },
        "222480": {
            "id": "222480",
            "name": "Luke Munchua",
            "email": "22jmunchua@shcp.edu"
        },
        "222482": {
            "id": "222482",
            "name": "Jesse Murphy",
            "email": "22jmurphy@shcp.edu"
        },
        "222484": {
            "id": "222484",
            "name": "Leela Murphy",
            "email": "22lmurphy@shcp.edu"
        },
        "222486": {
            "id": "222486",
            "name": "Tom Murphy",
            "email": "22tmurphy@shcp.edu"
        },
        "222488": {
            "id": "222488",
            "name": "Marco Musavi",
            "email": "22mmusavi@shcp.edu"
        },
        "222490": {
            "id": "222490",
            "name": "Arabela Navarro",
            "email": "22anavarro@shcp.edu"
        },
        "222492": {
            "id": "222492",
            "name": "Jonah Nelson",
            "email": "22jnelson@shcp.edu"
        },
        "222494": {
            "id": "222494",
            "name": "Tim Nemchuk",
            "email": "22tnemchuk@shcp.edu"
        },
        "222496": {
            "id": "222496",
            "name": "Kristen Ng",
            "email": "22kng@shcp.edu"
        },
        "222497": {
            "id": "222497",
            "name": "Trezie Nguyen",
            "email": "22TNguyen@shcp.edu"
        },
        "222498": {
            "id": "222498",
            "name": "Elizabeth Nip",
            "email": "22enip@shcp.edu"
        },
        "222500": {
            "id": "222500",
            "name": "Aidan Nishio",
            "email": "22anishio@shcp.edu"
        },
        "222502": {
            "id": "222502",
            "name": "Kaila Nobriga-Allen",
            "email": "22knobrigaallen@shcp.edu"
        },
        "222504": {
            "id": "222504",
            "name": "Thomas Nolan",
            "email": "22tnolan@shcp.edu"
        },
        "222506": {
            "id": "222506",
            "name": "Nick Northrop",
            "email": "22nnorthrop@shcp.edu"
        },
        "222508": {
            "id": "222508",
            "name": "Maria Novo",
            "email": "22mnovo@shcp.edu"
        },
        "222512": {
            "id": "222512",
            "name": "Brianna O'Connor",
            "email": "22boconnor@shcp.edu"
        },
        "222514": {
            "id": "222514",
            "name": "Katie O'Loughlin",
            "email": "22koloughlin@shcp.edu"
        },
        "222516": {
            "id": "222516",
            "name": "Maverick O'Neill",
            "email": "22moneill@shcp.edu"
        },
        "222520": {
            "id": "222520",
            "name": "Vinny Octaviano",
            "email": "22voctaviano@shcp.edu"
        },
        "222522": {
            "id": "222522",
            "name": "Milla Ogden",
            "email": "22logden@shcp.edu"
        },
        "222524": {
            "id": "222524",
            "name": "Christina Ohmura",
            "email": "22cohmura@shcp.edu"
        },
        "222526": {
            "id": "222526",
            "name": "Marybeth Ong",
            "email": "22mong@shcp.edu"
        },
        "222528": {
            "id": "222528",
            "name": "Skyler Ortesi",
            "email": "22sortesi@shcp.edu"
        },
        "222532": {
            "id": "222532",
            "name": "JC Osorio-Agard",
            "email": "22josorioagard@shcp.edu"
        },
        "222536": {
            "id": "222536",
            "name": "Cristian Padilla",
            "email": "22cpadilla@shcp.edu"
        },
        "222538": {
            "id": "222538",
            "name": "Danny Panina",
            "email": "22dpanina@shcp.edu"
        },
        "222540": {
            "id": "222540",
            "name": "Ella Parashis",
            "email": "22eparashis@shcp.edu"
        },
        "222542": {
            "id": "222542",
            "name": "Mia Pardini",
            "email": "22mpardini@shcp.edu"
        },
        "222544": {
            "id": "222544",
            "name": "Israel Paredes",
            "email": "22iparedes@shcp.edu"
        },
        "222550": {
            "id": "222550",
            "name": "Yash Patel",
            "email": "22ypatel@shcp.edu"
        },
        "222552": {
            "id": "222552",
            "name": "Katrina Paz",
            "email": "22kpaz@shcp.edu"
        },
        "222554": {
            "id": "222554",
            "name": "Alex Pham",
            "email": "22apham@shcp.edu"
        },
        "222556": {
            "id": "222556",
            "name": "Neil Philpott",
            "email": "22nphilpott@shcp.edu"
        },
        "222558": {
            "id": "222558",
            "name": "Olivia Picazo",
            "email": "22opicazo@shcp.edu"
        },
        "222560": {
            "id": "222560",
            "name": "Elijah Pilgreen",
            "email": "22epilgreen@shcp.edu"
        },
        "222561": {
            "id": "222561",
            "name": "Toros Pinar",
            "email": "22tpinar@shcp.edu"
        },
        "222562": {
            "id": "222562",
            "name": "Paloma Polacci",
            "email": "22ppolacci@shcp.edu"
        },
        "222564": {
            "id": "222564",
            "name": "Emma Pollasky",
            "email": "22epollasky@shcp.edu"
        },
        "222566": {
            "id": "222566",
            "name": "Nataly Ponce",
            "email": "22nponce@shcp.edu"
        },
        "222568": {
            "id": "222568",
            "name": "Quentin Poon",
            "email": "22qpoon@shcp.edu"
        },
        "222570": {
            "id": "222570",
            "name": "Clara Puiggali",
            "email": "22cpuiggali@shcp.edu"
        },
        "222572": {
            "id": "222572",
            "name": "Melanie Quan",
            "email": "22mquan@shcp.edu"
        },
        "222574": {
            "id": "222574",
            "name": "Eliza Quetingco",
            "email": "22equetingco@shcp.edu"
        },
        "222576": {
            "id": "222576",
            "name": "Ryaan Raissi",
            "email": "22rraissi@shcp.edu"
        },
        "222578": {
            "id": "222578",
            "name": "Evelyn Ramirez",
            "email": "22eramirez@shcp.edu"
        },
        "222580": {
            "id": "222580",
            "name": "Anthony Ramirez-Mata",
            "email": "22aramirezmata@shcp.edu"
        },
        "222582": {
            "id": "222582",
            "name": "Marianna Ramos",
            "email": "22mramos@shcp.edu"
        },
        "222584": {
            "id": "222584",
            "name": "Mikey Ramos",
            "email": "22miramos@shcp.edu"
        },
        "222586": {
            "id": "222586",
            "name": "Lukas Rapoport",
            "email": "22lrapoport@shcp.edu"
        },
        "222588": {
            "id": "222588",
            "name": "Derek Reagans III",
            "email": "22dreagans@shcp.edu"
        },
        "222590": {
            "id": "222590",
            "name": "Thalia Rebello",
            "email": "22trebello@shcp.edu"
        },
        "222592": {
            "id": "222592",
            "name": "Pascal Reich",
            "email": "22preich@shcp.edu"
        },
        "222594": {
            "id": "222594",
            "name": "Karina Reyes",
            "email": "22kreyes@shcp.edu"
        },
        "222596": {
            "id": "222596",
            "name": "Jessica Rice",
            "email": "22jrice@shcp.edu"
        },
        "222598": {
            "id": "222598",
            "name": "Kaya Richards",
            "email": "22krichards@shcp.edu"
        },
        "222600": {
            "id": "222600",
            "name": "Ari Rinaldi",
            "email": "22arinaldi@shcp.edu"
        },
        "222602": {
            "id": "222602",
            "name": "Davel Rios",
            "email": "22drios@shcp.edu"
        },
        "222603": {
            "id": "222603",
            "name": "Andrea Rodriguez",
            "email": "22ARodriguez@shcp.edu"
        },
        "222604": {
            "id": "222604",
            "name": "Karen Rodriguez",
            "email": "22krodriguez@shcp.edu"
        },
        "222606": {
            "id": "222606",
            "name": "Anna Rogers",
            "email": "22arogers@shcp.edu"
        },
        "222608": {
            "id": "222608",
            "name": "Janet Rojas",
            "email": "22jrojas@shcp.edu"
        },
        "222610": {
            "id": "222610",
            "name": "Marika Rosenfeld",
            "email": "22mrosenfeld@shcp.edu"
        },
        "222612": {
            "id": "222612",
            "name": "Hailey Rozzano-Keefe",
            "email": "22hrozzanokeefe@shcp.edu"
        },
        "222616": {
            "id": "222616",
            "name": "Emily Ruegg",
            "email": "22eruegg@shcp.edu"
        },
        "222618": {
            "id": "222618",
            "name": "Dmitri Ryan",
            "email": "22dryan@shcp.edu"
        },
        "222622": {
            "id": "222622",
            "name": "Jayden Salazar",
            "email": "22jsalazar@shcp.edu"
        },
        "222624": {
            "id": "222624",
            "name": "James Salgado",
            "email": "22jsalgado@shcp.edu"
        },
        "222626": {
            "id": "222626",
            "name": "Hanna Sanchez",
            "email": "22hsanchez@shcp.edu"
        },
        "222628": {
            "id": "222628",
            "name": "Jasmine Sanchez",
            "email": "22jsanchez@shcp.edu"
        },
        "222630": {
            "id": "222630",
            "name": "Billy Sanchez",
            "email": "22wsanchez@shcp.edu"
        },
        "222632": {
            "id": "222632",
            "name": "Sophia Scancarelli",
            "email": "22sscancarelli@shcp.edu"
        },
        "222634": {
            "id": "222634",
            "name": "Natasha Scott",
            "email": "22nscott@shcp.edu"
        },
        "222636": {
            "id": "222636",
            "name": "Sydney Scott",
            "email": "22sscott@shcp.edu"
        },
        "222638": {
            "id": "222638",
            "name": "Aidan Shea",
            "email": "22ashea@shcp.edu"
        },
        "222640": {
            "id": "222640",
            "name": "Turin Sheykhzadeh",
            "email": "22tsheykhzadeh@shcp.edu"
        },
        "222646": {
            "id": "222646",
            "name": "Jack Siwinski",
            "email": "22jsiwinski@shcp.edu"
        },
        "222648": {
            "id": "222648",
            "name": "Deirdre Smith",
            "email": "22dsmith@shcp.edu"
        },
        "222649": {
            "id": "222649",
            "name": "Valerie Soursiakov",
            "email": "22VSoursiakov@shcp.edu"
        },
        "222650": {
            "id": "222650",
            "name": "Ruby Southard",
            "email": "22rsouthard@shcp.edu"
        },
        "222652": {
            "id": "222652",
            "name": "Colin Spear",
            "email": "22cspear@shcp.edu"
        },
        "222654": {
            "id": "222654",
            "name": "Nathan Spillane",
            "email": "22nspillane@shcp.edu"
        },
        "222656": {
            "id": "222656",
            "name": "Luca Stofferahn",
            "email": "22lstofferahn@shcp.edu"
        },
        "222658": {
            "id": "222658",
            "name": "Liam Strachan",
            "email": "22lstrachan@shcp.edu"
        },
        "222660": {
            "id": "222660",
            "name": "Shannon Strunk",
            "email": "22sstrunk@shcp.edu"
        },
        "222662": {
            "id": "222662",
            "name": "Meleana Suarez",
            "email": "22msuarez@shcp.edu"
        },
        "222664": {
            "id": "222664",
            "name": "Frances Sunderland",
            "email": "22fsunderland@shcp.edu"
        },
        "222666": {
            "id": "222666",
            "name": "Alexandra Sweeney",
            "email": "22asweeney@shcp.edu"
        },
        "222668": {
            "id": "222668",
            "name": "Carolyn Sweeters",
            "email": "22csweeters@shcp.edu"
        },
        "222670": {
            "id": "222670",
            "name": "Aidan Taclas",
            "email": "22ataclas@shcp.edu"
        },
        "222674": {
            "id": "222674",
            "name": "Genesis Tamayo",
            "email": "22gtamayo@shcp.edu"
        },
        "222676": {
            "id": "222676",
            "name": "Ciara Tang",
            "email": "22ctang@shcp.edu"
        },
        "222678": {
            "id": "222678",
            "name": "Justin Tapia",
            "email": "22jtapia@shcp.edu"
        },
        "222680": {
            "id": "222680",
            "name": "Bella Terrigno",
            "email": "22iterrigno@shcp.edu"
        },
        "222682": {
            "id": "222682",
            "name": "Dante Thone",
            "email": "22dthone@shcp.edu"
        },
        "222684": {
            "id": "222684",
            "name": "Gussy Timken",
            "email": "22gtimken@shcp.edu"
        },
        "222686": {
            "id": "222686",
            "name": "Lainey Todd",
            "email": "22ltodd@shcp.edu"
        },
        "222688": {
            "id": "222688",
            "name": "Jack Torrens",
            "email": "22jtorrens@shcp.edu"
        },
        "222690": {
            "id": "222690",
            "name": "Rheanna Torres",
            "email": "22rtorres@shcp.edu"
        },
        "222692": {
            "id": "222692",
            "name": "Syd Torres",
            "email": "22storres@shcp.edu"
        },
        "222693": {
            "id": "222693",
            "name": "Annabella Travis",
            "email": "22atravis@shcp.edu"
        },
        "222694": {
            "id": "222694",
            "name": "Zoe Trevithick",
            "email": "22ztrevithick@shcp.edu"
        },
        "222698": {
            "id": "222698",
            "name": "Matthew Tsang",
            "email": "22mtsang@shcp.edu"
        },
        "222700": {
            "id": "222700",
            "name": "Grace Tsiamis",
            "email": "22gtsiamis@shcp.edu"
        },
        "222702": {
            "id": "222702",
            "name": "Timmy Ume-Ukeje",
            "email": "22tumeukeje@shcp.edu"
        },
        "222704": {
            "id": "222704",
            "name": "Bruce Uperesa",
            "email": "22buperesa@shcp.edu"
        },
        "222706": {
            "id": "222706",
            "name": "Brittany Valencia",
            "email": "22bvalencia@shcp.edu"
        },
        "222708": {
            "id": "222708",
            "name": "Sarah Vallecillo",
            "email": "22svallecillo@shcp.edu"
        },
        "222710": {
            "id": "222710",
            "name": "Anna Vargas",
            "email": "22avargas@shcp.edu"
        },
        "222712": {
            "id": "222712",
            "name": "Ariana Vasquez",
            "email": "22avasquez@shcp.edu"
        },
        "222713": {
            "id": "222713",
            "name": "Dominic Verango",
            "email": "22dverango@shcp.edu"
        },
        "222714": {
            "id": "222714",
            "name": "Bennett Vigil",
            "email": "22bvigil@shcp.edu"
        },
        "222716": {
            "id": "222716",
            "name": "Thomas Vignos",
            "email": "22tvignos@shcp.edu"
        },
        "222720": {
            "id": "222720",
            "name": "Victor Volskiy",
            "email": "22vvolskiy@shcp.edu"
        },
        "222722": {
            "id": "222722",
            "name": "Colin Vu",
            "email": "22cvu@shcp.edu"
        },
        "222726": {
            "id": "222726",
            "name": "Elisabeth Walters",
            "email": "22ewalters@shcp.edu"
        },
        "222728": {
            "id": "222728",
            "name": "Lauren Wang",
            "email": "22lwang@shcp.edu"
        },
        "222732": {
            "id": "222732",
            "name": "Samuel Wang",
            "email": "22swang@shcp.edu"
        },
        "222734": {
            "id": "222734",
            "name": "Ian Webb",
            "email": "22iwebb@shcp.edu"
        },
        "222736": {
            "id": "222736",
            "name": "Annika Weihl",
            "email": "22aweihl@shcp.edu"
        },
        "222738": {
            "id": "222738",
            "name": "Ben Weissner",
            "email": "22bweissner@shcp.edu"
        },
        "222740": {
            "id": "222740",
            "name": "Isabela West",
            "email": "22iwest@shcp.edu"
        },
        "222742": {
            "id": "222742",
            "name": "Victoria West",
            "email": "22vwest@shcp.edu"
        },
        "222744": {
            "id": "222744",
            "name": "Emma Whitehurst",
            "email": "22ewhitehurst@shcp.edu"
        },
        "222746": {
            "id": "222746",
            "name": "Garrison Williams",
            "email": "22gwilliams@shcp.edu"
        },
        "222748": {
            "id": "222748",
            "name": "Angelica Wong",
            "email": "22awong@shcp.edu"
        },
        "222750": {
            "id": "222750",
            "name": "Hailey Woo",
            "email": "22hwoo@shcp.edu"
        },
        "222752": {
            "id": "222752",
            "name": "Kaitlyn Wu",
            "email": "22kwu@shcp.edu"
        },
        "222754": {
            "id": "222754",
            "name": "Dayana Xiu",
            "email": "22dxiu@shcp.edu"
        },
        "222756": {
            "id": "222756",
            "name": "Oscar Yang",
            "email": "22oyang@shcp.edu"
        },
        "222758": {
            "id": "222758",
            "name": "Marlee Yeargin",
            "email": "22myeargin@shcp.edu"
        },
        "222760": {
            "id": "222760",
            "name": "Geena Yee",
            "email": "22gyee@shcp.edu"
        },
        "222762": {
            "id": "222762",
            "name": "Taylor Yee",
            "email": "22tyee@shcp.edu"
        },
        "222764": {
            "id": "222764",
            "name": "Haley Yip",
            "email": "22hyip@shcp.edu"
        },
        "222766": {
            "id": "222766",
            "name": "Kenji Yoda",
            "email": "22kyoda@shcp.edu"
        },
        "222768": {
            "id": "222768",
            "name": "George York",
            "email": "22gyork@shcp.edu"
        },
        "222770": {
            "id": "222770",
            "name": "Emily Yu",
            "email": "22eyu@shcp.edu"
        },
        "222772": {
            "id": "222772",
            "name": "Hannah Yuen",
            "email": "22hyuen@shcp.edu"
        },
        "222774": {
            "id": "222774",
            "name": "Tommy Zaterka",
            "email": "22tzaterka@shcp.edu"
        },
        "222776": {
            "id": "222776",
            "name": "Ariana Zhao",
            "email": "22azhao@shcp.edu"
        },
        "222975": {
            "id": "222975",
            "name": "Lorance Wong",
            "email": "22lwong@shcp.edu"
        }
    }
    for (const key in students){
        useUpdateDocument(parseInt(students[key].id), 'DePaul', 1646181502277, false, students[key].name, students[key].email)
    }
}

export default useAddAllUsers
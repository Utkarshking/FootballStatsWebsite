import React from 'react'
import Cards from "./Cards"
const forward_players=[
    {
        name:"Cristiano Ronaldo",
        club:"Manchester United",
        Age:"38",
        nation:"Portugal",
        Goals:"815",
        photo:"https://resources.premierleague.com/premierleague/photos/players/250x250/p14937.png"
        
    },
    {
        name:"Lionel Messi",
        club:"Paris Saint Germain",
        Age:"35",
        nation:"Argentina",
        Goals:"769",
        photo:"https://www.ligue1.com/-/media/Project/LFP/shared/Images/Players/2021-2022/00/94700.jpg"

    },
    {
        name:"Robert Lewandowski",
        club:"Bayern Munich",
        Age:"33",
        nation:"Poland",
        Goals:"600",
        photo:"https://i.bundesliga.com/player/dfl-obj-00000m-dfl-clu-00000g-dfl-sea-0001k6.png"

    },
    {
        name:"Karim Benzema",
        club:"Real Madrid",
        Age:"34",
        nation:"France",
        Goals:"414",
        photo:"https://img.uefa.com/imgml/TP/players/17/2022/324x324/93321.jpg"
    },
    {
        name:"Kylian Mbappe",
        club:"Paris Saint Germain",
        Age:"23",
        nation:"France",
        Goals:"226",
        photo:"https://www.ligue1.com/-/media/Project/LFP/shared/Images/Players/2021-2022/21/56621.jpg"
    },
    {
        name:"Neymar Jr",
        club:"Paris Saint Germain",
        Age:"30",
        nation:"Brazil",
        Goals:"74",
        photo:"https://www.ligue1.com/-/media/Project/LFP/shared/Images/Players/2021-2022/25/82425.jpg"
    },
    {
        name:"Erling Haaland",
        club:"Manchester City",
        Age:"21",
        nation:"Norway",
        Goals:"150",
        photo:"https://i.bundesliga.com/player/dfl-obj-002g8i-dfl-clu-000007-dfl-sea-0001k6.png"
    },
    {
        name:"Harry Kane",
        club:"Tottenham Hotspur",
        Age:"28",
        nation:"England",
        Goals:"221",
        photo:"https://resources.premierleague.com/premierleague/photos/players/250x250/p78830.png"
    },
    {
        name:"Dusan Vlahovic",
        club:"Juventus FC",
        Age:"22",
        nation:"Serbia",
        Goals:"81",
        photo:"https://www.futwiz.com/assets/img/fifa22/faces/84132510.png"
    },  
    {
        name:"Son Heung-min",
        club:"Tottenham Hotspur",
        Age:"29",
        nation:"South Korea",
        Goals:"107",
        photo:"https://resources.premierleague.com/premierleague/photos/players/250x250/p85971.png"
    },  
    {
        name:"Romelu Lukaku",
        club:"Inter Milan",
        Age:"29",
        nation:"Belgium",
        Goals:"251",
        photo:"https://resources.premierleague.com/premierleague/photos/players/250x250/p66749.png"
    },
    {
        name:"Vinicius Junior",
        club:"Real Madrid",
        Age:"21",
        nation:"Brazil",
        Goals:"107",
        photo:"https://www.futwiz.com/assets/img/fifa22/faces/168010954.png"
    },
    {
        name:"Thomas Müller",
        club:"Bayern Munich",
        Age:"32",
        nation:"Germany",
        Goals:"547",
        photo:"https://i.bundesliga.com/player/dfl-obj-0000ia-dfl-clu-00000g-dfl-sea-0001k6.png"
    },
    {
        name:"Eden Hazard",
        club:"Real Madrid",
        Age:"31",
        nation:"Belgium",
        Goals:"613",
        photo:"https://img.uefa.com/imgml/TP/players/17/2022/324x324/1902160.jpg"

    } ,
    {
        name:"Zlatan Ibhramovic",
        club:"AC.Milan",
        Age:"43",
        nation:"Sweden",
        Goals:"570",
        photo:"https://img.uefa.com/imgml/TP/players/17/2022/324x324/59217.jpg"

    }
       
]
function Forwards() {
  return (
    <div>
      <Cards players={forward_players}/>
    </div>
  )
}

export default Forwards

import Header from "./header";
import {useState} from 'react';
import LogSection from "./logSection";
import Homepage from "./bodyForSection1";
import './chart.css';
// import Chart from './chart';
import Collection from './collection';
import {Routes, Route} from 'react-router-dom';
import { asake,basket, homeless,pourMeWater,anotherLevel,noTime, oilInMyHead, addict, greenLight, jailer, warlords, organise, a45, ehGod, billionTalk, blessingFollowMe, oshe, danceWithTheDevil, julie, dupe, preyDaYoungsta, burn, roughUp, triumphant, wonma, muse, sadBoysDontFold, atYourService, want, demons, konongoZongo, skin, doBetter, mojo, ponpon, Wasteman, Chimichanga, Prophesy, infinity, nzaza, richAndFamous, weUp, Ototo, Shilalo, Somebody, reason, toxicLove, loading, soMuchLove, Sunmomi, dontForgetMe, Unconditionally, ohParadise, plenty, Traveler, secondSermon, PBUH, sungba, terminator, soja, backInUni, forYou, watchingAllOverMe, kos, ngidp, shoutForJoy, AfrohitMix, Howareyou, yourGrace, cough, praiseLoveSong, freedomPraise, neverFail, chokoMilo,lie,eru,pawon,rock,weOutside,calmDown,COD } from "./exportImportBox";

export default function LandingPage(){
    const [musicData] = useState([
        {id:"0", title:"Dull" ,artist:"Asake", audio:asake},
        {id:"1",title:"Love & Life",artist:"BasketMouth", audio:basket},
        {id:"2",title:"The homeless Song",artist:"Black Sherif", audio:homeless},
        {id:"3",title:"Pour Me Water",artist:"Kizz Daniel", audio:pourMeWater},
        {id:"4",title:"Another Level",artist:"Olamide", audio:anotherLevel},
        {id:"5",title:"No Time",artist:"Olamide", audio:noTime},
        {id:"6",title:"Oil My Head",artist:"Black Sherif", audio:oilInMyHead},
        {id:"7",title:"Addict",artist:"Kizz Daniel", audio:addict},
        {id:"8",title:"Green Light",artist:"Olamide", audio:greenLight},
        {id:"9",title:"Jailer",artist:"Olamide", audio:jailer},
        {id:"10",title:"Warlords",artist:"Olamide", audio:warlords},
        {id:"11",title:"45",artist:"Black Sherif", audio:a45},
        {id:"12",title:"Eh God (Barnabas)",artist:"Kizz Daniel", audio:ehGod},
        {id:"13",title:"Billion Talk",artist:"Olamide", audio:billionTalk},
        {id:"14",title:"Infinity",artist:"Olamide", audio:infinity},
        {id:"15",title:"Blessings Follow Me",artist:"Chidinma", audio:blessingFollowMe},
        {id:"16",title:"Oshe",artist:"Kizz Daniel", audio:oshe},
        {id:"17",title:"Dance With The Devil",artist:"Olamide", audio:danceWithTheDevil},
        {id:"18",title:"Julie",artist:"Olamide", audio:julie},
        {id:"19",title:"Dupe",artist:"Asake", audio:dupe},
        {id:"20",title:"Prey Da Youngsta",artist:"ssssssss", audio:preyDaYoungsta},
        {id:"21",title:"Burn",artist:"Kizz Daniel", audio:burn},
        {id:"22",title:"Rough Up",artist:"Olamide", audio:roughUp},
        {id:"23",title:"Triumphant",artist:"Olamide", audio:triumphant},
        {id:"24",title:"Wonma",artist:"Olamide", audio:wonma},
        {id:"25",title:"Muse",artist:"Asake", audio:muse},
        {id:"26",title:"Sad Boys Dont Fold",artist:"Black Sherif", audio:sadBoysDontFold},
        {id:"27",title:"At Your Service ",artist:"Olamide", audio:atYourService},
        {id:"28",title:"Want",artist:"Olamide", audio:want},
        {id:"29",title:"Demons",artist:"Olamide", audio:demons},
        {id:"30",title:"Konongo Zongo",artist:"Black Sherif", audio:konongoZongo},
        {id:"31",title:"Skin",artist:"Kizz Daniel & Kelvyn Colt", audio:skin},
        {id:"32",title:"Do Better",artist:"Olamide", audio:doBetter},
        {id:"33",title:"Mojo",artist:"Olamide", audio:mojo},
        {id:"34",title:"PonPon",artist:"Olamide", audio:ponpon},
        {id:"35",title:"Nzaza",artist:"Asake", audio:nzaza},
        {id:"36",title:"Wasteman",artist:"Black Sherif", audio:Wasteman},
        {id:"37",title:"Chimichanga",artist:"Olamide", audio:Chimichanga},
        {id:"39",title:"Organise",artist:"Asake", audio:organise},
        {id:"38",title:"Prophesy",artist:"Olamide", audio:Ototo},
        {id:"39",title:"Organise",artist:"Asake", audio:weUp},
        {id:"40",title:"Organise",artist:"Asake", audio:richAndFamous},
        {id:"41",title:"Organise",artist:"Asake", audio:Shilalo},
        {id:"42",title:"Organise",artist:"Asake", audio:Somebody},
        {id:"43",title:"Organise",artist:"Asake", audio:reason},
        {id:"44",title:"Organise",artist:"Asake", audio:toxicLove},
        {id:"45",title:"Organise",artist:"Asake", audio:loading},
        {id:"46",title:"Organise",artist:"Asake", audio:soMuchLove},
        {id:"47",title:"Organise",artist:"Asake", audio:Sunmomi},
        {id:"48",title:"Organise",artist:"Asake", audio:dontForgetMe},
        {id:"49",title:"Organise",artist:"Asake", audio:Unconditionally},
        {id:"50",title:"Organise",artist:"Asake", audio:ohParadise},
        {id:"51",title:"Organise",artist:"Asake", audio:plenty},
        {id:"52",title:"Organise",artist:"Asake", audio:Traveler},
        {id:"53",title:"Organise",artist:"Asake", audio:secondSermon},
        {id:"54",title:"Organise",artist:"Asake", audio:PBUH},
        {id:"55",title:"Organise",artist:"Asake", audio:sungba},
        {id:"56",title:"Organise",artist:"Asake", audio:terminator},
        {id:"57",title:"Organise",artist:"Asake", audio:soja},
        {id:"58",title:"Organise",artist:"Asake", audio:backInUni},
        {id:"59",title:"Organise",artist:"Asake", audio:forYou},
        {id:"60",title:"Organise",artist:"Asake", audio:watchingAllOverMe},
        {id:"61",title:"Organise",artist:"Asake", audio:kos},
        {id:"62",title:"Organise",artist:"Asake", audio:ngidp},
        {id:"63",title:"Organise",artist:"Asake", audio:shoutForJoy},
        {id:"64",title:"Organise",artist:"Asake", audio:AfrohitMix},
        {id:"65",title:"Organise",artist:"Asake", audio:Howareyou},
        {id:"66",title:"Organise",artist:"Asake", audio:yourGrace},
        {id:"67",title:"Organise",artist:"Asake", audio:cough},
        {id:"68",title:"Organise",artist:"Asake", audio:lie},
        {id:"69",title:"Organise",artist:"Asake", audio:praiseLoveSong},
        {id:"70",title:"Organise",artist:"Asake", audio:freedomPraise},
        {id:"71",title:"Organise",artist:"Asake", audio:neverFail},
        {id:"72",title:"Organise",artist:"Asake", audio:chokoMilo},
        {id:"73",title:"Organise",artist:"Asake", audio:eru},
        {id:"74",title:"Organise",artist:"Asake", audio:pawon},
        {id:"75",title:"Organise",artist:"Asake", audio:rock},
        {id:"76",title:"Organise",artist:"Asake", audio:weOutside},
        {id:"77",title:"Organise",artist:"Asake", audio:calmDown},
        {id:"78",title:"Organise",artist:"Asake", audio:COD},
        {id:"79",title:"Organise",artist:"Asake", audio:Prophesy},
    ])

    return(
        <article>
            <Header />
            <LogSection musicData={musicData} />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="collection" element={<Collection />} />
                {/* <Outlet /> */}
            </Routes>
        </article>
    )
}
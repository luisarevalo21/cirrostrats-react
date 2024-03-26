// // your old code
// {
//     "GroundDelay": {
//       "Departure": "MEM",
//       "Reason": "thunderstorms",
//       "AverageDelay": "48 minutes",
//       "MaximumDelay": "1 hour and 46 minutes"
//     },
//     "origin": "KMEM",
//     "destination": "KIAH",
//     "registration": "N920FJ",
//     "scheduled_out": "2244Z",
//     "estimated_out": "2244Z",
//     "scheduled_in": "0041Z",
//     "estimated_in": "0041Z",
//     "route": "CHLDR5 ANSWA LIT J180 SWB ZEEKK2",
//     "filed_altitude": "FL340",
//     "filed_ete": "5820"
//   };
// // you would iterate through all the keys and display the values into the frontend
// // we can store strings for the large strings you had CAT 2 NOT AUTHORIZED. RWY 18R CONDITION CODES , 5 , 5 , 5 AT 2318Z, RWY 18C CONDITION CODES , 5 , 5 , 5 AT 2318Z, RWY 18L CONDITION CODES , 5 , 5 , 5 AT 2318Z. BIRD ACTIVITY RPTD IN THE VC OF THE ARPT. HAZD WX INFO FOR MEM AREA AVBL FM FSS. READBACK ALL RWY HOLD SHORT INSTRUCTIONS. CONSOLIDATED WAKE TURBULENCE * STANDARDS IN EFFECT. AT GATES 18, 20, 22, 23, 40 CTC GC FOR PUSHBACK.. ...ADVS YOU HAVE INFO S.",
//  // "METAR": "KMEM 010154Z 06005KT 10SM -RA OVC050 09/05 A2995 RMK AO2 RAB02 SLP142 P0003 T00940050\n",
//   //"TAF": "KMEM 302330Z 0100/0206 16012G20KT 5SM -SHRA OVC080 \n  <br>    FM010300 15013G23KT 5SM -SHRA BKN025 OVC050 WS020/18045KT \n  <br>    FM010600 15015G25KT 4SM -SHRA <span class=\"highlight-red\">BKN009</span> OVC020 WS020/18060KT \n  <br>    FM011000 16014G23KT 5SM -SHRA VCSH <span class=\"highlight-red\">OVC008</span> WS020/21045KT \n  <br>    FM011300 20012G20KT P6SM <span class=\"highlight-red\">OVC009</span> \n  <br>    FM011700 21012G20KT P6SM OVC040 \n  <br>    FM020000 22008KT P6SM OVC250\n"

// //instead we should group the data into a single key that way we can acccess each individual key and value like a dict
// // you had an example abouve already
// "GroundDelay": {
//     "Departure": "MEM",
//     "Reason": "thunderstorms",
//     "AverageDelay": "48 minutes",
//     "MaximumDelay": "1 hour and 46 minutes"
// }

// // we need to expand this for all of it

//  //or we can use a class to define the data structure
//  //liek so in python
//  // we can determine what the data structure looks like
//  //for a flight details

// class FlghtDetails(BaseModel):
//     GroundDelay: GroundDelay
//     origin: str
//     destination: str
//     registration: str
//     scheduled_out: str
//     estimated_out: str
//     scheduled_in: str
//     estimated_in: str
//     route: str
//     filed_altitude: str
//     filed_ete: str

// const flightData = {
//     "GroundDelay": {
//       "Departure": "MEM",
//       "Reason": "thunderstorms",
//       "AverageDelay": "48 minutes",
//       "MaximumDelay": "1 hour and 46 minutes"
//     },
//     "origin": "KMEM",
//     "destination": "KIAH",
//     "registration": "N920FJ",
//     "scheduled_out": "2244Z",
//     "estimated_out": "2244Z",
//     "scheduled_in": "0041Z",
//     "estimated_in": "0041Z",
//     "route": "CHLDR5 ANSWA LIT J180 SWB ZEEKK2",
//     "filed_altitude": "FL340",
//     "filed_ete": "5820"
//   };

//updated structure

const data = {
  arrival_details: {
    arrival_gate: "B - B87",
    arrival_id: "xd",
    arrival_weather: {
      //remove teh spans new lines, no longer needed.
      "D-ATIS": "IAH ATIS INFO V 0153Z. 12003KT 7SM BKN017 OVC250 1… 8R/26L AND RUNWAY 9/27. ...ADVS YOU HAVE INFO V.",
      METAR: 'KIAH 010153Z 12003KT 7SM <span class="highlight-re…pan> OVC250 18/18 A2975 RMK AO2 SLP072 T01830183\n',
      TAF: 'KIAH 010109Z 0101/0206 12006KT P6SM <span class="h…035 \n  <br>    FM012000 02006KT P6SM VCSH OVC025\n',
    },
    //change this as to arrival_something as i'm not sure what each one is since the id and destination are the same
    destination: "KIAH",
    destination_ID: "KIAH",
    estimated_arrival_time: "0041Z",
    nas_destination_affected: {},
    scheduled_arrival_time: "STA 18:41 CST",
    scheduled_in: "0041Z",
  },
  departure_details: {
    departure_ID: "KMEM",
    departure_gate: "C - C1",
    departure_weather: {
      //remove teh spans new lines, no longer needed.
      "D-ATIS": "MEM ATIS INFO S 0154Z. 06005KT 10SM -RA OVC050 09/…40 CTC GC FOR PUSHBACK.. ...ADVS YOU HAVE INFO S.",
      METAR: "KMEM 010154Z 06005KT 10SM -RA OVC050 09/05 A2995 RMK AO2 RAB02 SLP142 P0003 T00940050\n",
      TAF: "KMEM 302330Z 0100/0206 16012G20KT 5SM -SHRA OVC080…M OVC040 \n  <br>    FM020000 22008KT P6SM OVC250\n",
    },
    //an example of the time would be great as some have zulu time and some don't on your website
    estimated_departure_time: "2244Z",
    nas_departure_affected: {
      "Ground Delay": {},
    },
    //this shows cst time instead of zulu time
    scheduled_departure_time: "STD 16:44 CST",
    scheduled_out: "2244Z",
  },
  filed_altitude: "FL340",
  filed_ete: 5820,
  flight_number: "UA6095",
  origin: "KMEM",
  //could add the airport name? and airport destination
  registration: "N920FJ",
  route: "CHLDR5 ANSWA LIT J180 SWB ZEEKK2",
  sv: "https://skyvector.com/?fpl=%20KMEM%20CHLDR5%20ANSWA%20LIT%20J180%20SWB%20ZEEKK2%20KIAH",
};

const obj = {
  title: "Post 1",
  body: "Body of post.",
  category: "News",
  likes: 3,
  tags: ["news", "events"],
  date: Date(),
};

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
import pickle

app = FastAPI()


origins = [
    "http://localhost:5173"
]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    # allow_credentials=True,
    # allow_methods=["*"],
    # allow_headers=["*"],
)

@app.get("/")
def root():
    
    # Loading the dummy data here. This is a deeply nested dictionary that gets fed into front end as a JSON deeply nested Object
    with open("latest_bulk_11_30.pkl", 'rb') as f:
        bulk_flight_deets = pickle.load(f)
    
    return bulk_flight_deets


@app.get("/dep_dest")
def root():
    
    with open("latest_bulk_11_30.pkl", 'rb') as f:
        bulk_flight_deets = pickle.load(f)
    
    return {'departure_ID':bulk_flight_deets['departure_ID'], 'destination_ID': bulk_flight_deets['destination_ID']}

@app.get("/scheduled_times")
def root():
    
    with open("latest_bulk_11_30.pkl", 'rb') as f:
        bulk_flight_deets = pickle.load(f)
    
    return {"scheduled_departure_time": bulk_flight_deets["scheduled_departure_time"],
            "scheduled_arrival_time": bulk_flight_deets["scheduled_arrival_time"]}

@app.get("/gates")
def root():
    
    with open("latest_bulk_11_30.pkl", 'rb') as f:
        bulk_flight_deets = pickle.load(f)

    return {"departure_gate": bulk_flight_deets["departure_gate"],
            "arrival_gate": bulk_flight_deets["arrival_gate"]}

@app.get("/dep_weather")
def root():
    
    with open("latest_bulk_11_30.pkl", 'rb') as f:
        bulk_flight_deets = pickle.load(f)
    dep_weather = bulk_flight_deets[dep_weather]
    return dep_weather

@app.get("/nas_departure_affected")
def root():
    
    with open("latest_bulk_11_30.pkl", 'rb') as f:
        bulk_flight_deets = pickle.load(f)
    nas_departure_affected = bulk_flight_deets['nas_departure_affected']
    return nas_departure_affected

@app.get("/dest_weather")
def root():
    
    with open("latest_bulk_11_30.pkl", 'rb') as f:
        bulk_flight_deets = pickle.load(f)
    dest_weather = bulk_flight_deets['dest_weather']
    return dest_weather

@app.get("/flight_aware_data")
def root():
    
    with open("latest_bulk_11_30.pkl", 'rb') as f:
        bulk_flight_deets = pickle.load(f)

    flight_aware_data = {"origin": bulk_flight_deets["origin"], 
                        "destination": bulk_flight_deets["destination"], 
                        "registration": bulk_flight_deets["registration"], 
                        "scheduled_out": bulk_flight_deets["scheduled_out"], 
                        "estimated_out": bulk_flight_deets["estimated_out"], 
                        "scheduled_in": bulk_flight_deets["scheduled_in"], 
                        "estimated_in": bulk_flight_deets["estimated_in"], 
                        "route": bulk_flight_deets["route"], 
                        "filed_altitude": bulk_flight_deets["filed_altitude"], 
                        "filed_ete": bulk_flight_deets["filed_ete"], 
                        "sv": bulk_flight_deets["sv"], }

    return flight_aware_data

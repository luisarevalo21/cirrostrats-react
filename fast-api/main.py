from fastapi import FastAPI
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

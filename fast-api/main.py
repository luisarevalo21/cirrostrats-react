from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import pickle

app = FastAPI()


class Item(BaseModel):
    text: str
    is_done: bool = False


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

# items = ['apples', 'oranges', 'pears', 'grapes', 'bananas',
#          'mangoes', 'kiwi', 'watermelon', 'strawberry', 'blueberry', 'raspberry', 'blackberry', 'pineapple', 'papaya',]

items = []


@app.get("/")
def root():
    return {'hello ': 'world'}


@app.post('/items')
async def create_item(item: Item):
    items.append(item)
    return items

# returns a defined item class


@app.get('/items', response_model=list[Item])
def list_items(limit: int = 10):
    return items[0:limit]


@app.get('/items')
async def get_item():
    return items


@app.get('/items/{item_id}', response_model=Item)
async def get_item(item_id: int) -> Item:
    if item_id < len(items):
        return items[item_id]
    else:
        raise HTTPException(status_code=404, detail=f"Item {
                            item_id} not found")


@app.get("/flight")
def get_flight():

    # Loading the dummy data here. This is a deeply nested dictionary that gets fed into front end as a JSON deeply nested Object
    with open("latest_bulk_11_30.pkl", 'rb') as f:
        bulk_flight_deets = pickle.load(f)

    return bulk_flight_deets

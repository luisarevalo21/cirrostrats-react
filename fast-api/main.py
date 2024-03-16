from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

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

items = ['apples', 'oranges']


@app.get("/")
def root():
    return {'hello ': 'world'}


@app.post('/items')
async def create_item(item: str):
    items.append(item)
    return items


@app.get('/items')
async def get_item():
    return items


@app.get('/items/{item_id}')
async def get_item(item_id: int) -> str:
    item = items[item_id]
    return item

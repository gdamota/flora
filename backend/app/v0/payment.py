import bottle
import json
import requests

app = bottle.Bottle()


@app.post("/")
def _create_order(order):
    # create corresponding records in order table
    # post payment details to stripe
    pass
